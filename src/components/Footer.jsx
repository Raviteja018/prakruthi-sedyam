import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#132e15] text-[#fbf8f3] pt-12 pb-6 border-t border-[#2a5a32]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#2a5a32]/20">
        
        {/* Brand Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2a5a32]/50 rounded-lg flex items-center justify-center text-[#d4a373]">
              <Leaf size={18} />
            </div>
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">Prakruthi Sedyam</h4>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed font-light max-w-sm">
            We bring chemical-free, nutrient-rich traditional groceries, raw cold-pressed oils, and ancient native grains from certified organic fields to your kitchen. Support local farmers, support healthy lives.
          </p>
          <div className="flex items-center gap-3">
            <a 
              href="https://instagram.com/Prakruthi_sedyam" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-[#2a5a32]/30 hover:bg-[#2a5a32] flex items-center justify-center transition-colors cursor-pointer text-white"
            >
              {/* Custom SVG Instagram Icon */}
              <svg 
                width={14} 
                height={14} 
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
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-3.5 text-xs text-left">
          <h4 className="text-[#d4a373] uppercase font-bold tracking-widest">Navigation</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:underline hover:text-[#d4a373] text-gray-300 cursor-pointer text-left">Home Page</Link>
            <Link to="/shop" className="hover:underline hover:text-[#d4a373] text-gray-300 cursor-pointer text-left">Shop Organic Products</Link>
            <Link to="/story" className="hover:underline hover:text-[#d4a373] text-gray-300 cursor-pointer text-left">Our Farming Roots</Link>
            <Link to="/contact" className="hover:underline hover:text-[#d4a373] text-gray-300 cursor-pointer text-left">Get in Touch</Link>
          </div>
        </div>

        {/* Sourcing Location details */}
        <div className="md:col-span-4 space-y-3.5 text-xs text-left">
          <h4 className="text-[#d4a373] uppercase font-bold tracking-widest">Store Location</h4>
          <div className="space-y-2 text-gray-300">
            <p className="leading-relaxed">
              H no.6-116, Manjeera Pipe Line Road, Subhash Nagar, Gangaram, Chanda Nagar, Hyderabad, Telangana - 500050
            </p>
            <p className="font-semibold text-[#d4a373]">📲 Phone: 9154219555</p>
            <p className="text-[11px] text-gray-400">Opening: 8:00 AM - 9:00 PM (Daily)</p>
          </div>
        </div>

      </div>

      {/* Copyright details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-400">
        <span>&copy; {new Date().getFullYear()} Prakruthi Sedyam. All rights reserved. Sourced with respect for nature.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
