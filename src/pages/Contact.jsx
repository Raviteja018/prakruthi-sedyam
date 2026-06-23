import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactName('');
      e.target.reset();
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs text-[#b37d4e] font-extrabold uppercase tracking-widest block">Get in Touch</span>
        <h2 className="font-serif text-3xl font-bold text-[#1b3f22]">Contact & Visit Us</h2>
        <div className="w-16 h-0.5 bg-[#2a5a32] mx-auto rounded-full" />
        <p className="text-xs text-gray-500 mt-2">Have a question or custom bulk request? Reach out directly or visit our physical store in Chanda Nagar, Hyderabad.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white border border-[#f2ebd9] rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#222522] mb-4">Send Us a Message</h3>
          
          {contactSubmitted ? (
            <div className="bg-[#e7f3e9] text-[#2a5a32] text-xs font-semibold p-4 rounded-xl border border-[#2a5a32]/10 text-center space-y-1">
              <p className="font-bold">Thank you, {contactName || 'customer'}! 🌱</p>
              <p className="font-normal text-[11px]">Your query has been logged. Our store manager will call or reply in 2-4 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 text-xs bg-[#fbf8f3] border border-[#f2ebd9] rounded-xl focus:outline-none focus:border-[#2a5a32]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9154219555"
                    className="w-full px-3 py-2 text-xs bg-[#fbf8f3] border border-[#f2ebd9] rounded-xl focus:outline-none focus:border-[#2a5a32]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    className="w-full px-3 py-2 text-xs bg-[#fbf8f3] border border-[#f2ebd9] rounded-xl focus:outline-none focus:border-[#2a5a32]"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">How can we help you?</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message details..."
                  className="w-full px-3 py-2 text-xs bg-[#fbf8f3] border border-[#f2ebd9] rounded-xl focus:outline-none focus:border-[#2a5a32] resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#2a5a32] text-white text-xs font-bold rounded-xl hover:bg-[#1b3f22] transition-colors cursor-pointer shadow-sm"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Direct Details & Map */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Details Card */}
          <div className="bg-white border border-[#f2ebd9] rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1b3f22] border-b border-[#fbf8f3] pb-2">Direct Contact</h3>
            
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#2a5a32] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-700 block">Mobile Contact</span>
                  <a href="tel:9154219555" className="text-[#b37d4e] hover:underline font-semibold">+91 9154219555</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={15} className="text-[#2a5a32] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-700 block">Email Address</span>
                  <a href="mailto:prakruthisedyam.in@gmail.com" className="text-[#b37d4e] hover:underline">prakruthisedyam.in@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#2a5a32] flex-shrink-0 mt-0.5">
                  <svg 
                    width={15} 
                    height={15} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-gray-700 block">Instagram Handle</span>
                  <a href="https://instagram.com/Prakruthi_sedyam" target="_blank" rel="noreferrer" className="text-[#b37d4e] hover:underline font-semibold font-semibold">@Prakruthi_sedyam</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={15} className="text-[#2a5a32] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-700 block">Store Timings</span>
                  <p className="text-gray-500">8:00 AM - 9:00 PM (Monday to Sunday)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visit Address & Styled Map */}
          <div className="bg-white border border-[#f2ebd9] rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1b3f22] border-b border-[#fbf8f3] pb-2">Visit Store</h3>
            
            <div className="flex items-start gap-2.5 text-xs text-gray-600">
              <MapPin size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                H no.6-116, Manjeera Pipe Line Road, Subhash Nagar, Gangaram, Chanda Nagar, Hyderabad, Telangana - 500050
              </p>
            </div>

            {/* Styled Map Simulation */}
            <div className="h-44 bg-[#fbf8f3] border border-[#f2ebd9] rounded-2xl relative overflow-hidden flex items-center justify-center p-3">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#b37d4e_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute top-1/2 left-0 right-0 h-4 bg-gray-200 -translate-y-1/2 rotate-12 shadow-inner" />
              <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-gray-200 -translate-x-1/2 -rotate-45 shadow-inner" />
              
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md border-2 border-white">
                  📍
                </div>
                <div className="w-2.5 h-1 bg-black/20 rounded-full blur-[1px] mt-0.5" />
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white border border-[#f2ebd9] px-3 py-1.5 rounded-lg shadow-sm text-center">
                <span className="text-[10px] font-bold text-gray-800 uppercase block leading-none">Prakruthi Sedyam Store</span>
                <span className="text-[8px] text-gray-400 mt-0.5 block">Chanda Nagar, Hyderabad (Gangaram Pipeline road)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
