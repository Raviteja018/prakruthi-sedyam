import React, { useState, useEffect, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import CheckoutModal from './CheckoutModal';

export default function Layout() {
  const location = useLocation();

  // Shared e-commerce states
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Add to cart handler
  const handleAddToCart = (product, size) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.size.name === size.name);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id && item.size.name === size.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (product, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(product, size);
      return;
    }
    setCart(prev => 
      prev.map(item => 
        item.product.id === product.id && item.size.name === size.name
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (product, size) => {
    setCart(prev => 
      prev.filter(item => !(item.product.id === product.id && item.size.name === size.name))
    );
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  // Total cart items count
  const cartTotalItems = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  // Context values to pass to child pages via Outlet
  const outletContext = useMemo(() => ({
    cart,
    addToCart: handleAddToCart,
    updateQuantity: handleUpdateQuantity,
    removeItem: handleRemoveItem,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    setCartOpen,
    setCheckoutOpen
  }), [cart, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-[#fbf8f3] text-[#222522] font-sans flex flex-col justify-between selection:bg-[#2a5a32] selection:text-white antialiased">
      
      {/* 1. Announcement / Top Bar */}
      <div className="bg-[#1b3f22] text-[#fbf8f3] py-2 px-4 text-xs font-semibold text-center tracking-wide flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 border-b border-[#2a5a32]">
        <div className="flex items-center gap-1.5">
          <Leaf size={12} className="text-[#d4a373]" />
          <span>100% Organic & Wood-Pressed Oils Store</span>
        </div>
        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
        <div>
          <span>📞 Contact: 9154219555</span>
        </div>
        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
        <div>
          <span>🚚 Free Delivery in Hyderabad above ₹1000</span>
        </div>
      </div>

      {/* 2. Header Navigation */}
      <Header
        cartTotalItems={cartTotalItems}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* 3. Outlet Child Page Container */}
      <main className="flex-grow">
        <Outlet context={outletContext} />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* ================= MODAL & DRAWER PORTALS ================= */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cart}
        onOrderSuccess={handleOrderSuccess}
      />
    </div>
  );
}
