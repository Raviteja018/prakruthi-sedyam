import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronRight, Filter, Search, Tag, X } from 'lucide-react';
import { CATEGORY_GROUPS, PRODUCTS } from '../data/products';

export default function CategorySidebar({
  selectedCategory,
  setSelectedCategory,
  isOpen,
  onClose
}) {
  const [expandedGroups, setExpandedGroups] = useState({
    groceries: true,
    spices: true,
    "snacks-drinks": true,
    "personal-care": false,
    "household-wellness": false
  });

  const [categorySearch, setCategorySearch] = useState('');

  // Calculate product counts per category
  const categoryCounts = useMemo(() => {
    return PRODUCTS.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});
  }, []);

  const totalProducts = PRODUCTS.length;

  const toggleGroup = (groupId) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  // Filter categories based on search input
  const filteredGroups = useMemo(() => {
    if (!categorySearch.trim()) return CATEGORY_GROUPS;

    const query = categorySearch.toLowerCase();
    return CATEGORY_GROUPS.map(group => {
      const matchingCats = group.categories.filter(cat => 
        cat.toLowerCase().includes(query)
      );
      if (matchingCats.length > 0) {
        return { ...group, categories: matchingCats };
      }
      return null;
    }).filter(Boolean);
  }, [categorySearch]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (onClose) onClose(); // Close drawer on mobile
  };

  return (
    <aside className="w-full bg-white border border-[#f2ebd9] rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-[#fbf8f3]">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-[#2a5a32]" />
          <h2 className="font-serif text-lg font-bold text-[#222522]">Categories</h2>
        </div>
        {selectedCategory && (
          <button
            onClick={() => handleCategoryClick(null)}
            className="text-xs text-[#b37d4e] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Category Search */}
      <div className="relative mt-4 mb-4">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={14} className="text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Search category..."
          value={categorySearch}
          onChange={(e) => setCategorySearch(e.target.value)}
          className="w-full pl-9 pr-3 py-2 text-xs bg-[#fbf8f3] border border-[#f2ebd9] rounded-xl focus:outline-none focus:border-[#2a5a32] text-gray-700"
        />
        {categorySearch && (
          <button
            onClick={() => setCategorySearch('')}
            className="absolute inset-y-0 right-0 pr-2.5 flex items-center cursor-pointer"
          >
            <X size={12} className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Category List */}
      <div className="space-y-3 overflow-y-auto max-h-[60vh] pr-1 no-scrollbar">
        {/* All Products button */}
        <button
          type="button"
          onClick={() => handleCategoryClick(null)}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            selectedCategory === null
              ? "bg-[#2a5a32] text-white shadow-sm"
              : "bg-[#fbf8f3] text-[#222522] hover:bg-gray-100"
          }`}
        >
          <span className="flex items-center gap-2">
            <Tag size={13} />
            All Products
          </span>
          <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${
            selectedCategory === null ? "bg-[#1b3f22] text-white" : "bg-gray-200 text-gray-600"
          }`}>
            {totalProducts}
          </span>
        </button>

        {filteredGroups.length === 0 ? (
          <p className="text-xs text-gray-400 text-center py-4">No categories found</p>
        ) : (
          filteredGroups.map(group => {
            const hasActiveInGroup = group.categories.includes(selectedCategory) || selectedCategory === group.id;
            const isExpanded = expandedGroups[group.id] || hasActiveInGroup;

            return (
              <div key={group.id} className="border border-[#faf7f0] rounded-xl overflow-hidden bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                {/* Group Title Header */}
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 hover:bg-[#f5ebd9]/40 border-b border-[#faf7f0] text-left transition-colors duration-200 cursor-pointer ${
                    selectedCategory === group.id ? "bg-[#2a5a32]/10 font-bold" : "bg-[#fbf8f3]"
                  }`}
                >
                  <span className={`text-xs font-bold font-serif tracking-wide uppercase ${
                    selectedCategory === group.id ? "text-[#2a5a32]" : "text-gray-700"
                  }`}>
                    {group.name}
                  </span>
                  {isExpanded ? (
                    <ChevronDown size={14} className="text-gray-500" />
                  ) : (
                    <ChevronRight size={14} className="text-gray-500" />
                  )}
                </button>

                {/* Subcategories (Collapsible list) */}
                {isExpanded && (
                  <div className="p-1 space-y-0.5 bg-white">
                    {group.categories.map(category => {
                      const count = categoryCounts[category] || 0;
                      const isActive = selectedCategory === category;

                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() => handleCategoryClick(category)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-left transition-all cursor-pointer ${
                            isActive
                              ? "bg-[#2e6f40] text-white font-medium shadow-sm"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          <span className="truncate pr-2">{category}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                            isActive ? "bg-[#1b3f22] text-white" : "bg-gray-100 text-gray-500"
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}
