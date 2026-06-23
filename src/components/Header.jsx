import React from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, X, Leaf } from 'lucide-react';
import prakruthiLogo from '../assets/prakruthi_logo_.png';

export default function Header({
  cartTotalItems,
  searchQuery,
  setSearchQuery,
  onOpenCart
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== '' && location.pathname !== '/shop') {
      navigate('/shop');
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Our Products' },
    { path: '/story', label: 'Our Roots' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#f2ebd9] shadow-[0_2px_15px_-10px_rgba(42,90,50,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Logo Branding */}
        <Link 
          to="/"
          className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0"
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden  group-hover:scale-105 transition-all duration-300 bg-white">
            <img src={prakruthiLogo} alt="Prakruthi Sedyam Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1b3f22] leading-none">
              Prakruthi Sedyam
            </h1>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#b37d4e] mt-0.5 block">
              Pure Organic Lifestyle
            </span>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-semibold tracking-wide py-2 relative transition-colors cursor-pointer ${
                  isActive ? 'text-[#2a5a32]' : 'text-gray-600 hover:text-[#2a5a32]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2a5a32] rounded-full animate-fade-in" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Search & Cart controls */}
        <div className="flex items-center gap-3 w-full max-w-[200px] sm:max-w-xs md:w-auto">
          {/* Search Input */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={14} className="text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search organic foods..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#fbf8f3] border border-[#f2ebd9] rounded-xl focus:outline-none focus:border-[#2a5a32] focus:ring-1 focus:ring-[#2a5a32]/20 text-gray-700 placeholder-gray-400 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 bg-[#fbf8f3] border border-[#f2ebd9] rounded-xl text-gray-700 hover:bg-[#e7f3e9] hover:text-[#2a5a32] hover:border-[#2a5a32]/20 transition-all duration-300 shadow-xs cursor-pointer flex-shrink-0"
          >
            <ShoppingCart size={18} />
            {cartTotalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#b37d4e] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm animate-bounce">
                {cartTotalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Header Nav Bottom Tabs */}
      <div className="flex md:hidden border-t border-[#f2ebd9] bg-white divide-x divide-[#f2ebd9]">
        {[
          { path: '/', label: 'Home' },
          { path: '/shop', label: 'Products' },
          { path: '/story', label: 'Roots' },
          { path: '/contact', label: 'Contact' }
        ].map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => 
              `flex-1 text-center py-3 text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                isActive ? 'bg-[#fbf8f3] text-[#2a5a32]' : 'text-gray-500 hover:text-gray-900'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
