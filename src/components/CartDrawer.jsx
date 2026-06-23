import React, { useMemo } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard'; // Import ProductIcon from ProductCard or import helper
import { Star } from 'lucide-react';

// Reuse ProductIcon from ProductCard to display item visual in the cart drawer
function CartItemIcon({ type }) {
  // Let's render a simpler, compact SVG for cart items
  return (
    <div className="w-14 h-14 bg-[#fbf8f3] border border-[#f2ebd9] rounded-xl flex items-center justify-center p-1.5 flex-shrink-0">
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cart-forest" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a5a32" />
            <stop offset="100%" stopColor="#132e15" />
          </linearGradient>
          <linearGradient id="cart-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4a373" />
            <stop offset="100%" stopColor="#8f4c1e" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#fcfaf6" stroke="#faebdf" strokeWidth="1" />
        {/* Simple rendering */}
        {['oil', 'ghee', 'relief-oil'].includes(type) ? (
          <path d="M42 35 C42 28 58 28 58 35 L58 70 C58 74 54 76 50 76 C46 76 42 74 42 70 Z" fill="url(#cart-gold)" stroke="#8f4c1e" strokeWidth="1.5" />
        ) : ['dal', 'atta', 'flour', 'ravva', 'millet', 'rice'].includes(type) ? (
          <path d="M38 35 C38 30 62 30 62 35 L58 72 C58 75 54 76 50 76 C46 76 42 75 42 72 Z" fill="url(#cart-gold)" stroke="#8f4c1e" strokeWidth="1.5" />
        ) : ['shampoo', 'soap', 'hair-care', 'skin-care', 'body-care', 'cleaner'].includes(type) ? (
          <path d="M40 38 C40 32 60 32 60 38 L60 70 C60 74 55 76 50 76 C45 76 40 74 40 70 Z" fill="url(#cart-forest)" stroke="#2a5a32" strokeWidth="1.5" />
        ) : (
          <path d="M50 70 C50 70 32 52 32 38 C32 24 50 24 50 24 C50 24 68 24 68 38 C68 52 50 70 50 70 Z" fill="url(#cart-forest)" />
        )}
      </svg>
    </div>
  );
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) {
  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.size.price * item.quantity), 0);
  }, [cartItems]);

  const shipping = subtotal >= 1000 ? 0 : subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#0a1f0d]/40 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col justify-between z-10 transition-transform duration-300 animate-slide-in">
        
        {/* Header */}
        <div className="p-5 border-b border-[#f2ebd9] flex items-center justify-between bg-[#fbf8f3]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="text-[#2a5a32]" size={20} />
            <h2 className="font-serif text-xl font-bold text-[#222522]">Your Basket</h2>
            <span className="bg-[#2a5a32] text-white text-xs px-2 py-0.5 rounded-full font-semibold">
              {cartItems.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items list */}
        <div className="flex-grow p-5 overflow-y-auto custom-scrollbar space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-20 h-20 bg-[#fbf8f3] rounded-full border border-[#f2ebd9] flex items-center justify-center text-[#2a5a32]">
                <ShoppingBag size={36} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#222522]">Your basket is empty</h3>
                <p className="text-xs text-gray-500 mt-1 max-w-xs">
                  Fill it with pure cold pressed oils, healthy native millets, traditional cookware, and natural cosmetics!
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#2a5a32] text-white text-xs font-bold rounded-xl shadow-sm hover:bg-[#1b3f22] transition-colors cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => {
              const itemTotal = item.size.price * item.quantity;
              return (
                <div 
                  key={`${item.product.id}-${item.size.name}`} 
                  className="flex gap-3 pb-4 border-b border-[#fbf8f3] last:border-b-0 animate-fade-in"
                >
                  {/* Visual illustration of the product */}
                  <CartItemIcon type={item.product.type} />

                  {/* Info details */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="text-xs font-bold text-[#222522] leading-tight line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product, item.size)}
                          className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                      <span className="text-[10px] bg-[#fbf8f3] border border-[#f2ebd9] px-1.5 py-0.5 rounded text-[#b37d4e] font-semibold inline-block mt-1">
                        {item.size.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-[#f2ebd9] rounded-lg overflow-hidden bg-[#fbf8f3] scale-90 origin-left">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product, item.size, item.quantity - 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="px-2 py-0.5 text-xs font-bold text-gray-700">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product, item.size, item.quantity + 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                          <Plus size={10} />
                        </button>
                      </div>

                      {/* Subtotal price for item */}
                      <div className="text-right">
                        <span className="text-[10px] text-gray-400 block">Subtotal</span>
                        <span className="text-xs font-bold text-[#222522]">₹{itemTotal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Summary & Order CTA */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#f2ebd9] bg-[#fbf8f3] space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Items Subtotal</span>
                <span className="font-semibold text-gray-800">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Delivery Charges</span>
                <span>{shipping === 0 ? <span className="text-green-700 font-semibold uppercase tracking-wider">Free</span> : `₹${shipping}`}</span>
              </div>
              
              {subtotal < 1000 && (
                <div className="bg-[#faebdf] border border-[#f2ceb6] text-[#8f4c1e] text-[10px] p-2.5 rounded-lg text-center font-medium">
                  Add <span className="font-bold">₹{1000 - subtotal}</span> more for <span className="font-bold uppercase">Free Shipping</span>!
                </div>
              )}
              
              <div className="pt-2 border-t border-dashed border-[#f2ebd9] flex justify-between text-base font-bold text-[#222522]">
                <span>Order Total</span>
                <span className="font-serif text-lg">₹{total}</span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#2a5a32] text-white font-semibold rounded-xl hover:bg-[#1b3f22] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
