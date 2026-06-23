import React, { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategorySidebar from '../components/CategorySidebar';

export default function Shop() {
  // Retrieve global states from Layout context
  const {
    addToCart,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy
  } = useOutletContext();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // Sort Products
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.sizeOptions[0].price - b.sizeOptions[0].price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.sizeOptions[0].price - a.sizeOptions[0].price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Category header and Sorting controls */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#f2ebd9]">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#1b3f22]">Organic Store</h2>
          <p className="text-xs text-gray-500 mt-1">
            {selectedCategory ? `Showing products in: ${selectedCategory}` : 'Showing all organic categories'} ({filteredProducts.length} items)
          </p>
        </div>

        <div className="flex items-center gap-3 self-end w-full md:w-auto">
          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="md:hidden flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#f2ebd9] rounded-xl text-xs font-semibold text-gray-700 cursor-pointer"
          >
            <Menu size={14} />
            Filter Category
          </button>
          
          {/* Sort selector dropdown */}
          <div className="flex-1 md:flex-initial flex items-center gap-2 bg-white border border-[#f2ebd9] px-3 py-1.5 rounded-xl">
            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs bg-transparent focus:outline-none text-gray-700 font-medium cursor-pointer"
            >
              <option value="popular">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Split layout: Sidebar and Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Category sidebar (Desktop) */}
        <div className="hidden lg:block lg:col-span-1 sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
          <CategorySidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Product grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white border border-[#f2ebd9] rounded-3xl p-8 space-y-4">
              <span className="text-4xl block">🍃</span>
              <h3 className="font-serif text-lg font-bold text-[#222522]">No organic products match your selection</h3>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                Try searching for other terms like "oil", "millet", "ghee", "honey", or clearing active filters.
              </p>
              <button
                onClick={() => { setSelectedCategory(null); setSearchQuery(''); }}
                className="px-5 py-2.5 bg-[#2a5a32] text-white text-xs font-bold rounded-xl hover:bg-[#1b3f22] transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Category Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div 
            onClick={() => setMobileFilterOpen(false)}
            className="absolute inset-0 bg-[#0a1f0d]/40 backdrop-blur-xs" 
          />
          <div className="relative w-4/5 max-w-xs h-full bg-white shadow-xl p-5 overflow-y-auto custom-scrollbar flex flex-col justify-between animate-slide-in-left">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#fbf8f3]">
                <span className="font-serif text-base font-bold text-[#1b3f22]">Filter Category</span>
                <button 
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-700 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
              <CategorySidebar 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                onClose={() => setMobileFilterOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
