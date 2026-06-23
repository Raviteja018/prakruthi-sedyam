import React, { useState, useMemo } from 'react';
import { X, CheckCircle, CreditCard, Landmark, Check } from 'lucide-react';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess
}) {
  const [step, setStep] = useState(1); // 1 = shipping details, 2 = success
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    pincode: '',
    paymentMethod: 'cod' // 'cod' or 'upi'
  });
  const [formErrors, setFormErrors] = useState({});
  const [generatedOrderId, setGeneratedOrderId] = useState('');

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.size.price * item.quantity), 0);
  }, [cartItems]);

  const shipping = subtotal >= 1000 ? 0 : 50;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors as user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.phone.trim()) {
      errors.phone = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.address.trim()) errors.address = 'Delivery address is required';
    if (!formData.pincode.trim()) {
      errors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
      errors.pincode = 'Please enter a valid 6-digit pincode';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const randomId = 'PS-' + Math.floor(100000 + Math.random() * 900000);
      setGeneratedOrderId(randomId);
      setStep(2);
    }
  };

  const handleSuccessClose = () => {
    onOrderSuccess(); // Clears cart
    setStep(1);
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      pincode: '',
      paymentMethod: 'cod'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={step === 1 ? onClose : undefined}
        className="absolute inset-0 bg-[#0a1f0d]/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative bg-white border border-[#f2ebd9] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10 p-6 shadow-2xl custom-scrollbar transition-all duration-300 animate-scale-up">
        
        {/* Close Button (only on step 1) */}
        {step === 1 && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        )}

        {step === 1 ? (
          <div>
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-bold text-[#222522]">Secure Checkout</h2>
              <p className="text-xs text-gray-500 mt-1">Please provide details to complete your organic order.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="text-xs font-semibold text-gray-700 block mb-1">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 text-xs bg-[#fbf8f3] border rounded-xl focus:outline-none focus:border-[#2a5a32] ${formErrors.name ? 'border-red-500' : 'border-[#f2ebd9]'}`}
                  placeholder="Enter your full name"
                />
                {formErrors.name && <p className="text-[10px] text-red-500 mt-1">{formErrors.name}</p>}
              </div>

              {/* Phone and Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-xs font-semibold text-gray-700 block mb-1">Mobile Number *</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-xs text-gray-400 font-medium">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-3 py-2 text-xs bg-[#fbf8f3] border rounded-xl focus:outline-none focus:border-[#2a5a32] ${formErrors.phone ? 'border-red-500' : 'border-[#f2ebd9]'}`}
                      placeholder="9154219555"
                      maxLength={10}
                    />
                  </div>
                  {formErrors.phone && <p className="text-[10px] text-red-500 mt-1">{formErrors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-gray-700 block mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs bg-[#fbf8f3] border border-[#f2ebd9] rounded-xl focus:outline-none focus:border-[#2a5a32]"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="text-xs font-semibold text-gray-700 block mb-1">Complete Address *</label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 text-xs bg-[#fbf8f3] border rounded-xl focus:outline-none focus:border-[#2a5a32] resize-none ${formErrors.address ? 'border-red-500' : 'border-[#f2ebd9]'}`}
                  placeholder="House No, Street name, Locality, Area"
                />
                {formErrors.address && <p className="text-[10px] text-red-500 mt-1">{formErrors.address}</p>}
              </div>

              {/* Pincode & City */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pincode" className="text-xs font-semibold text-gray-700 block mb-1">Pincode *</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-xs bg-[#fbf8f3] border rounded-xl focus:outline-none focus:border-[#2a5a32] ${formErrors.pincode ? 'border-red-500' : 'border-[#f2ebd9]'}`}
                    placeholder="500050"
                    maxLength={6}
                  />
                  {formErrors.pincode && <p className="text-[10px] text-red-500 mt-1">{formErrors.pincode}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-400 block mb-1">City / State</label>
                  <input
                    type="text"
                    value="Hyderabad / Telangana"
                    disabled
                    className="w-full px-3 py-2 text-xs bg-gray-100 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-2">Payment Method</label>
                <div className="grid grid-cols-2 gap-3">
                  {/* COD */}
                  <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all duration-200 ${
                    formData.paymentMethod === 'cod'
                      ? "border-[#2a5a32] bg-[#e7f3e9]"
                      : "border-[#f2ebd9] bg-[#fbf8f3] hover:bg-gray-100"
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.paymentMethod === 'cod' ? 'border-[#2a5a32]' : 'border-gray-400'}`}>
                      {formData.paymentMethod === 'cod' && <div className="w-2 h-2 rounded-full bg-[#2a5a32]" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#222522] block">Cash on Delivery</span>
                      <span className="text-[9px] text-gray-500">Pay at your doorstep</span>
                    </div>
                  </label>

                  {/* UPI QR */}
                  <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all duration-200 ${
                    formData.paymentMethod === 'upi'
                      ? "border-[#2a5a32] bg-[#e7f3e9]"
                      : "border-[#f2ebd9] bg-[#fbf8f3] hover:bg-gray-100"
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.paymentMethod === 'upi' ? 'border-[#2a5a32]' : 'border-gray-400'}`}>
                      {formData.paymentMethod === 'upi' && <div className="w-2 h-2 rounded-full bg-[#2a5a32]" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#222522] block">Scan UPI QR</span>
                      <span className="text-[9px] text-gray-500">Pay using GooglePay/PhonePe</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* UPI Instruction QR Code Simulation */}
              {formData.paymentMethod === 'upi' && (
                <div className="bg-[#fbf8f3] border border-[#f2ebd9] p-4 rounded-xl flex flex-col items-center text-center space-y-2.5">
                  <span className="text-[10px] text-[#b37d4e] font-bold uppercase tracking-wider">UPI QR Simulation</span>
                  
                  {/* Simulated QR Code Box */}
                  <div className="w-32 h-32 bg-white border-2 border-[#1b3f22] rounded-lg p-2 flex items-center justify-center relative">
                    {/* Tiny QR Pattern simulation using nested divs */}
                    <div className="grid grid-cols-5 gap-1.5 w-full h-full opacity-80">
                      {[...Array(25)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`rounded-xs ${
                            i === 0 || i === 1 || i === 4 || i === 5 || i === 9 || i === 10 || i === 14 || i === 19 || i === 20 || i === 24
                              ? 'bg-[#1b3f22]'
                              : (i % 3 === 0 ? 'bg-[#b37d4e]' : 'bg-transparent')
                          }`} 
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-white/10">
                      <span className="bg-[#1b3f22] text-white text-[9px] font-bold px-1 py-0.5 rounded shadow-sm">
                        ₹{total}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-[10px] text-gray-600 font-semibold">UPI ID: <span className="text-[#2a5a32]">prakruthisedyam@ybl</span></p>
                    <p className="text-[9px] text-gray-400 mt-0.5">Please scan and pay using your mobile UPI app, then click Place Order below.</p>
                  </div>
                </div>
              )}

              {/* Order total info & Submit */}
              <div className="pt-4 border-t border-[#fbf8f3] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block font-semibold uppercase tracking-wider">Total Amount</span>
                  <span className="font-serif text-lg font-bold text-[#222522]">₹{total}</span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#2a5a32] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#1b3f22] hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  Place Order (₹{total})
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Step 2: Success State Screen */
          <div className="text-center py-6 space-y-5 animate-fade-in">
            <div className="w-16 h-16 bg-[#e7f3e9] border border-[#2a5a32]/20 rounded-full flex items-center justify-center text-[#2a5a32] mx-auto shadow-md">
              <CheckCircle size={36} className="animate-pulse" />
            </div>

            <div className="space-y-1.5">
              <h2 className="font-serif text-2xl font-bold text-[#2a5a32]">Order Placed Successfully!</h2>
              <p className="text-xs text-gray-500">Thank you for supporting natural farming & local farmers. 🌱</p>
            </div>

            {/* Receipt Box */}
            <div className="bg-[#fbf8f3] border border-[#f2ebd9] rounded-xl p-4 text-left max-w-sm mx-auto space-y-3">
              <div className="flex justify-between text-xs pb-2 border-b border-[#f2ebd9]">
                <span className="text-gray-500 font-medium">Order Reference:</span>
                <span className="font-bold text-[#222522]">{generatedOrderId}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 font-medium">Deliver To:</span>
                <span className="font-semibold text-[#222522] text-right truncate max-w-[180px]">{formData.name}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 font-medium">Payment Mode:</span>
                <span className="font-semibold text-gray-800 uppercase text-[10px]">{formData.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'UPI Completed'}</span>
              </div>
              <div className="flex justify-between text-xs pt-2 border-t border-dashed border-[#f2ebd9] font-bold text-[#222522]">
                <span>Total Paid/Payable:</span>
                <span className="font-serif">₹{total}</span>
              </div>
            </div>

            <div className="bg-[#e7f3e9] text-[#2a5a32] text-[10px] py-2 px-4 rounded-lg inline-block font-semibold">
              Delivery Location: Hyderabad (Gangaram/Chanda Nagar/Subhash Nagar). Expected arrival in 24-48 hours.
            </div>

            <button
              onClick={handleSuccessClose}
              className="w-full max-w-xs py-3 bg-[#2a5a32] text-white font-semibold rounded-xl hover:bg-[#1b3f22] transition-colors cursor-pointer shadow-md hover:shadow-lg active:scale-95"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
