import React, { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS, CATEGORY_GROUPS } from '../data/products';
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
      const group = CATEGORY_GROUPS.find(g => g.id === selectedCategory);
      if (group) {
        result = result.filter(p => group.categories.includes(p.category));
      } else {
        result = result.filter(p => p.category === selectedCategory);
      }
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

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 20;

  // Reset page to 1 on filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  // Scroll to top when page changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Category header and Sorting controls */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#f2ebd9]">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#1b3f22]">Organic Store</h2>
          <p className="text-xs text-gray-500 mt-1">
            {selectedCategory ? (
              `Showing products in: ${
                CATEGORY_GROUPS.find(g => g.id === selectedCategory)?.name || selectedCategory
              }`
            ) : (
              'Showing all organic categories'
            )}{' '}
            {filteredProducts.length > 0 ? (
              `(${Math.min(filteredProducts.length, (currentPage - 1) * ITEMS_PER_PAGE + 1)}-${Math.min(filteredProducts.length, currentPage * ITEMS_PER_PAGE)} of ${filteredProducts.length} items)`
            ) : (
              '(0 items)'
            )}
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
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Category sidebar (Desktop) */}
        <div className="hidden lg:block lg:col-span-1 sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
          <CategorySidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Product grid */}
        <div className="lg:col-span-4">
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
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#f2ebd9]">
                  <p className="text-xs text-gray-500 font-medium">
                    Showing <span className="font-semibold text-gray-700">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to{" "}
                    <span className="font-semibold text-gray-700">{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}</span> of{" "}
                    <span className="font-semibold text-gray-700">{filteredProducts.length}</span> products
                  </p>
                  
                  <div className="flex items-center gap-1.5 font-sans">
                    {/* Previous Button */}
                    <button
                      type="button"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`flex items-center justify-center p-2 rounded-xl border transition-all duration-300 cursor-pointer ${
                        currentPage === 1
                          ? "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
                          : "bg-white border-[#f2ebd9] text-[#2a5a32] hover:bg-[#e7f3e9] hover:border-[#2a5a32] hover:shadow-sm"
                      }`}
                    >
                      <ChevronLeft size={16} />
                    </button>

                    {/* Page numbers */}
                    {getPageNumbers().map((page, index) => {
                      if (page === '...') {
                        return (
                          <span key={`dots-${index}`} className="px-3 py-1.5 text-xs text-gray-400 font-medium select-none">
                            ...
                          </span>
                        );
                      }
                      return (
                        <button
                          key={page}
                          type="button"
                          onClick={() => setCurrentPage(page)}
                          className={`text-xs px-3.5 py-1.5 font-bold rounded-xl border transition-all duration-300 cursor-pointer ${
                            currentPage === page
                              ? "bg-[#2a5a32] border-[#2a5a32] text-white shadow-sm"
                              : "bg-white border-[#f2ebd9] text-gray-700 hover:bg-[#e7f3e9] hover:border-[#2a5a32]"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}

                    {/* Next Button */}
                    <button
                      type="button"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`flex items-center justify-center p-2 rounded-xl border transition-all duration-300 cursor-pointer ${
                        currentPage === totalPages
                          ? "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
                          : "bg-white border-[#f2ebd9] text-[#2a5a32] hover:bg-[#e7f3e9] hover:border-[#2a5a32] hover:shadow-sm"
                      }`}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </>
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
