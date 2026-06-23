import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';

// A helper component to render gorgeous, custom nature-themed vector icons for products
function ProductIcon({ type, className = "w-full h-full" }) {
  // Common colors: Forest Green, Gold/Terracotta, Soft Cream
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="forest-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a5a32" />
          <stop offset="100%" stopColor="#132e15" />
        </linearGradient>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4a373" />
          <stop offset="100%" stopColor="#8f4c1e" />
        </linearGradient>
        <linearGradient id="soft-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faebdf" />
          <stop offset="100%" stopColor="#f2ceb6" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="50" cy="50" r="46" fill="#fcfaf6" stroke="#faebdf" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="40" fill="#fbf8f3" />

      {/* Render vectors based on type */}
      {type === 'oil' && (
        <>
          {/* Glass jar */}
          <path d="M38 40 C38 32 44 30 46 26 L46 22 L54 22 L54 26 C56 30 62 32 62 40 L62 70 C62 74 58 76 50 76 C42 76 38 74 38 70 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          {/* Lid */}
          <rect x="44" y="18" width="12" height="4" rx="1" fill="#8f4c1e" />
          {/* Label with leaf */}
          <rect x="42" y="44" width="16" height="18" rx="1" fill="#2a5a32" />
          <path d="M50 48 C47 52 50 58 50 58 C50 58 53 52 50 48 Z" fill="#faebdf" />
          {/* Oil drop */}
          <path d="M50 32 C48 35 50 38 50 38 C50 38 52 35 50 32 Z" fill="#d4a373" />
        </>
      )}

      {type === 'ghee' && (
        <>
          {/* Traditional clay pot */}
          <path d="M32 45 C32 35 40 33 50 33 C60 33 68 35 68 45 C68 58 64 74 50 74 C36 74 32 58 32 45 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          {/* Pot Rim */}
          <ellipse cx="50" cy="33" rx="14" ry="4" fill="#8f4c1e" />
          <ellipse cx="50" cy="33" rx="10" ry="2" fill="#d4a373" />
          {/* Golden Ghee flow */}
          <path d="M45 33 C45 38 55 38 55 33" fill="none" stroke="#d4a373" strokeWidth="2" strokeLinecap="round" />
          {/* Decorative lines */}
          <path d="M35 52 H65" stroke="#8f4c1e" strokeWidth="1" strokeDasharray="2,2" />
          <path d="M33 58 H67" stroke="#8f4c1e" strokeWidth="1" />
          {/* Leaf emblem */}
          <path d="M50 44 C47 48 50 52 50 52 C50 52 53 48 50 44 Z" fill="#2a5a32" />
        </>
      )}

      {type === 'dal' && (
        <>
          {/* Clay Bowl */}
          <path d="M30 45 C30 62 40 70 50 70 C60 70 70 62 70 45 H30 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          {/* Rim */}
          <ellipse cx="50" cy="45" rx="20" ry="4" fill="#8f4c1e" />
          {/* Pulses piled up */}
          <path d="M32 44 C38 36 62 36 68 44 Z" fill="url(#gold-grad)" />
          {/* Small grains */}
          <circle cx="45" cy="40" r="1.5" fill="#faebdf" />
          <circle cx="52" cy="38" r="1.5" fill="#faebdf" />
          <circle cx="58" cy="41" r="1.5" fill="#faebdf" />
          {/* Leaf on the bowl */}
          <path d="M50 54 C48 57 50 61 50 61 C50 61 52 57 50 54 Z" fill="#2a5a32" />
        </>
      )}

      {['atta', 'flour', 'ravva', 'millet', 'rice'].includes(type) && (
        <>
          {/* Grain Sack */}
          <path d="M34 38 C34 34 38 32 40 32 C43 32 46 34 50 34 C54 34 57 32 60 32 C62 32 66 34 66 38 L62 72 C62 75 58 76 50 76 C42 76 38 75 38 72 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          {/* Tied rope */}
          <ellipse cx="50" cy="35" rx="10" ry="2" fill="none" stroke="#8f4c1e" strokeWidth="1.5" />
          {/* Grains stalks */}
          <path d="M47 28 C45 22 47 18 47 18" stroke="#d4a373" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M53 28 C55 22 53 18 53 18" stroke="#d4a373" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M45 22 C43 21 44 19 45 20" stroke="#d4a373" strokeWidth="1.5" />
          <path d="M49 24 C51 23 50 21 49 22" stroke="#d4a373" strokeWidth="1.5" />
          <path d="M55 22 C57 21 56 19 55 20" stroke="#d4a373" strokeWidth="1.5" />
          {/* Leaf emblem on sack */}
          <circle cx="50" cy="52" r="8" fill="#2a5a32" />
          <path d="M50 48 C48 51 50 55 50 55 C50 55 52 51 50 48 Z" fill="#faebdf" />
        </>
      )}

      {['shampoo', 'soap', 'hair-care', 'skin-care', 'body-care', 'cleaner', 'freshener', 'relief-oil'].includes(type) && (
        <>
          {/* Dispenser/Shampoo Bottle */}
          <path d="M38 38 C38 34 44 32 45 30 L45 25 L55 25 L55 30 C56 32 62 34 62 38 L62 70 C62 74 58 76 50 76 C42 76 38 74 38 70 Z" fill="url(#soft-grad)" stroke="#2a5a32" strokeWidth="1.5" />
          {/* Pump nozzle */}
          <path d="M46 25 V20 H54 V25" stroke="#2a5a32" strokeWidth="1.5" />
          <path d="M46 20 H40" stroke="#2a5a32" strokeWidth="1.5" strokeLinecap="round" />
          {/* Herbal/Flower illustration on bottle */}
          <circle cx="50" cy="50" r="10" fill="#2a5a32" />
          <path d="M50 45 C47 49 50 54 50 54 C50 54 53 49 50 45 Z" fill="#faebdf" />
          {/* Water drops or bubbles */}
          <circle cx="34" cy="45" r="2" fill="#2a5a32" opacity="0.3" />
          <circle cx="66" cy="55" r="3" fill="#2a5a32" opacity="0.2" />
        </>
      )}

      {type === 'honey' && (
        <>
          {/* Honey Hexagon Pot */}
          <path d="M35 42 L42 32 H58 L65 42 L61 68 C61 72 57 74 50 74 C43 74 39 72 39 68 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          {/* Lid */}
          <rect x="40" y="26" width="20" height="6" rx="2" fill="#8f4c1e" />
          {/* Honeybee */}
          <ellipse cx="50" cy="46" rx="5" ry="3.5" fill="#d4a373" />
          <path d="M48 46 H52" stroke="#4a270f" strokeWidth="1" />
          <circle cx="49" cy="44" r="1" fill="#4a270f" />
          <path d="M50 42 C48 39 52 39 50 42 Z" fill="#faebdf" />
          {/* Honey drip */}
          <path d="M50 56 C50 62 52 64 50 68 C48 64 50 62 50 56" stroke="#d4a373" strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {['snack', 'biscuits', 'candy', 'papad', 'jam', 'nuts', 'noodles', 'sugar'].includes(type) && (
        <>
          {/* Traditional snacks bowl or treat */}
          <path d="M30 46 C30 63 38 72 50 72 C62 72 70 63 70 46 H30 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          <ellipse cx="50" cy="46" rx="20" ry="4" fill="#8f4c1e" />
          {/* Little cookies/sweets stacked */}
          <circle cx="42" cy="38" r="6" fill="#d4a373" stroke="#8f4c1e" strokeWidth="1" />
          <circle cx="58" cy="38" r="6" fill="#d4a373" stroke="#8f4c1e" strokeWidth="1" />
          <circle cx="50" cy="34" r="7" fill="url(#gold-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          {/* Sprinkles on cookies */}
          <circle cx="50" cy="32" r="0.8" fill="#fcfaf6" />
          <circle cx="48" cy="35" r="0.8" fill="#fcfaf6" />
          <circle cx="52" cy="34" r="0.8" fill="#fcfaf6" />
        </>
      )}

      {['tea', 'coffee', 'juice', 'energy-mix'].includes(type) && (
        <>
          {/* Clay cup/glass */}
          <path d="M36 34 L40 68 C41 72 45 74 50 74 C55 74 59 72 60 68 L64 34 H36 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          {/* Rim */}
          <ellipse cx="50" cy="34" rx="14" ry="3.5" fill="#8f4c1e" />
          {/* Steam curves */}
          <path d="M45 26 C45 20 48 20 48 16" stroke="#d4a373" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M52 28 C52 22 55 22 55 18" stroke="#d4a373" strokeWidth="1.5" strokeLinecap="round" />
          {/* Leaf emblem on cup */}
          <path d="M50 48 C47 52 50 56 50 56 C50 56 53 52 50 48 Z" fill="#2a5a32" />
        </>
      )}

      {type === 'pooja' && (
        <>
          {/* Holy Diya */}
          <path d="M30 52 C30 65 42 70 50 70 C58 70 70 65 70 52 C58 56 42 56 30 52 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          {/* Flame */}
          <path d="M50 50 C46 44 50 32 50 32 C50 32 54 44 50 50 Z" fill="url(#gold-grad)" stroke="#8f4c1e" strokeWidth="1" />
          <path d="M50 46 C48 42 50 36 50 36 C50 36 52 42 50 46 Z" fill="#d4a373" />
          {/* Incense swirls */}
          <path d="M64 42 C64 34 68 34 68 28" stroke="#faebdf" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}

      {type === 'seeds' && (
        <>
          {/* Sprouting pot */}
          <path d="M34 50 C34 64 42 72 50 72 C58 72 66 64 66 50 H34 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          <ellipse cx="50" cy="50" rx="16" ry="3" fill="#8f4c1e" />
          {/* Sprout */}
          <path d="M50 50 V34" stroke="#2a5a32" strokeWidth="2" strokeLinecap="round" />
          {/* Leaves */}
          <path d="M50 38 C46 36 44 32 44 32 C44 32 48 34 50 38 Z" fill="#2a5a32" />
          <path d="M50 36 C54 34 56 30 56 30 C56 30 52 32 50 36 Z" fill="#2a5a32" />
        </>
      )}

      {['wooden', 'cookware', 'claypot'].includes(type) && (
        <>
          {/* Cookware pot */}
          <path d="M28 46 C28 64 38 72 50 72 C62 72 72 64 72 46 H28 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          <ellipse cx="50" cy="46" rx="22" ry="4" fill="#8f4c1e" />
          {/* Handle */}
          <path d="M28 46 H22 V49 H28" fill="#8f4c1e" />
          <path d="M72 46 H78 V49 H72" fill="#8f4c1e" />
          {/* Lid */}
          <path d="M32 44 C32 36 50 32 50 32 C50 32 68 36 68 44 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1" />
          <circle cx="50" cy="30" r="3" fill="#8f4c1e" />
        </>
      )}

      {type === 'filter' && (
        <>
          {/* Double tier stainless steel water filter */}
          <rect x="36" y="24" width="28" height="22" rx="2" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          <rect x="36" y="47" width="28" height="22" rx="2" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          {/* Lid handle */}
          <path d="M46 24 C46 20 54 20 54 24" stroke="#8f4c1e" strokeWidth="1.5" strokeLinecap="round" />
          {/* Tap */}
          <path d="M64 60 H70 V65" stroke="#8f4c1e" strokeWidth="2" strokeLinecap="round" />
          {/* Tap handle */}
          <path d="M70 60 V56" stroke="#2a5a32" strokeWidth="2" strokeLinecap="round" />
          {/* Water drop */}
          <path d="M70 70 C69 72 71 72 70 70" stroke="#2a5a32" strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {['pickle', 'spices'].includes(type) && (
        <>
          {/* Spice jar */}
          <path d="M38 36 L40 30 L60 30 L62 36 L62 72 C62 74 58 76 50 76 C42 76 38 74 38 72 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          {/* Lid */}
          <rect x="38" y="24" width="24" height="8" rx="2" fill="#8f4c1e" />
          {/* Label */}
          <rect x="42" y="44" width="16" height="20" rx="1" fill="#2a5a32" />
          <circle cx="50" cy="54" r="4" fill="#d4a373" />
          <path d="M50 50 C48 53 50 57 50 57 C50 57 52 53 50 50 Z" fill="#faebdf" />
        </>
      )}

      {['ready-cook', 'ravva'].includes(type) && (
        <>
          {/* Bowl with steam */}
          <path d="M28 52 C28 65 38 72 50 72 C62 72 72 65 72 52 H28 Z" fill="url(#soft-grad)" stroke="#8f4c1e" strokeWidth="1.5" />
          <ellipse cx="50" cy="52" rx="22" ry="4" fill="#8f4c1e" />
          {/* Steam lines */}
          <path d="M40 46 C40 38 44 38 44 32" stroke="#d4a373" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 44 C50 36 54 36 54 30" stroke="#d4a373" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M60 46 C60 38 64 38 64 32" stroke="#d4a373" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}

      {['hygiene'].includes(type) && (
        <>
          {/* Toothbrush */}
          <rect x="46" y="20" width="8" height="50" rx="4" fill="url(#soft-grad)" stroke="#2a5a32" strokeWidth="1.5" />
          {/* Bristles */}
          <rect x="44" y="22" width="12" height="14" rx="3" fill="#2a5a32" />
          <line x1="47" y1="24" x2="47" y2="34" stroke="#faebdf" strokeWidth="1" />
          <line x1="50" y1="24" x2="50" y2="34" stroke="#faebdf" strokeWidth="1" />
          <line x1="53" y1="24" x2="53" y2="34" stroke="#faebdf" strokeWidth="1" />
          {/* Paste tube */}
          <rect x="28" y="58" width="22" height="12" rx="6" fill="#d4a373" stroke="#8f4c1e" strokeWidth="1" />
          <path d="M50 62 H56 C57 62 58 63 58 64 C58 65 57 66 56 66 H50" fill="none" stroke="#8f4c1e" strokeWidth="1" />
        </>
      )}

      {/* Fallback Leaf Icon if type doesn't match */}
      {!['oil', 'ghee', 'dal', 'atta', 'flour', 'ravva', 'millet', 'rice', 'shampoo', 'soap', 'hair-care', 'skin-care', 'body-care', 'cleaner', 'freshener', 'relief-oil', 'honey', 'snack', 'biscuits', 'candy', 'papad', 'jam', 'nuts', 'noodles', 'sugar', 'tea', 'coffee', 'juice', 'energy-mix', 'pooja', 'seeds', 'wooden', 'cookware', 'claypot', 'filter', 'pickle', 'spices', 'ready-cook', 'hygiene'].includes(type) && (
        <>
          {/* Beautiful double leaf */}
          <path d="M50 72 C50 72 30 52 30 38 C30 24 50 24 50 24 C50 24 70 24 70 38 C70 52 50 72 50 72 Z" fill="url(#forest-grad)" opacity="0.1" />
          <path d="M50 72 C50 72 34 56 34 44 C34 32 50 30 50 30 C50 30 66 32 66 44 C66 56 50 72 50 72 Z" fill="url(#forest-grad)" />
          <path d="M50 72 V30" stroke="#faebdf" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 56 C54 52 58 50 58 50" stroke="#faebdf" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M50 48 C44 44 42 42 42 42" stroke="#faebdf" strokeWidth="1.2" strokeLinecap="round" />
          {/* Smaller golden leaf floating */}
          <path d="M68 62 C68 62 58 54 58 48 C58 42 68 40 68 40 C68 40 78 42 78 48 C78 54 68 62 68 62 Z" fill="url(#gold-grad)" />
        </>
      )}
    </svg>
  );
}

export default function ProductCard({ product, onAddToCart }) {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const selectedSize = product.sizeOptions[selectedSizeIndex];

  const handleAdd = () => {
    if (product.inStock) {
      onAddToCart(product, selectedSize);
    }
  };

  return (
    <div className={`group relative bg-white border border-[#f2ebd9] rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#2a5a320c] hover:-translate-y-1 product-card-glow ${!product.inStock ? 'opacity-90' : ''}`}>
      
      {/* Product Image / Custom Vector Container */}
      <div className="relative aspect-square w-full bg-[#fbf8f3] rounded-xl overflow-hidden mb-4 flex items-center justify-center border border-[#faf7f0]">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="p-2 w-full h-full flex items-center justify-center">
            <ProductIcon type={product.type} className="w-4/5 h-4/5 transition-transform duration-500 group-hover:scale-105" />
          </div>
        )}
        
        {/* Badges */}
        {product.badge && (
          <span className="absolute top-2 left-2 bg-[#2a5a32] text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
        
        {!product.inStock && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full shadow-sm">
            Out of Stock
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          {/* Category */}
          <span className="text-[11px] text-[#b37d4e] font-semibold tracking-wider uppercase">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="font-serif text-lg font-bold text-[#222522] mt-0.5 leading-tight group-hover:text-[#2a5a32] transition-colors duration-200">
            {product.name}
          </h3>

          {/* Ratings */}
          <div className="flex items-center gap-1 mt-1 mb-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={12} 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                  className="stroke-amber-400" 
                />
              ))}
            </div>
            <span className="text-[11px] text-gray-500 font-medium">({product.reviews})</span>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Size Selection & Price Section */}
        <div>
          {product.sizeOptions.length > 1 && (
            <div className="mb-3">
              <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block mb-1">
                Choose Size
              </label>
              <div className="flex flex-wrap gap-1.5">
                {product.sizeOptions.map((option, idx) => (
                  <button
                    key={option.name}
                    type="button"
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`text-xs px-2.5 py-1 rounded-lg font-medium border transition-all duration-200 cursor-pointer ${
                      selectedSizeIndex === idx
                        ? "bg-[#2a5a32] border-[#2a5a32] text-white shadow-sm"
                        : "bg-[#fbf8f3] border-[#f2ebd9] text-[#222522] hover:bg-gray-100"
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price & Cart CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-[#fbf8f3]">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                Price
              </span>
              <span className="text-xl font-bold text-[#222522] font-serif">
                ₹{selectedSize.price}
              </span>
            </div>

            <button
              type="button"
              disabled={!product.inStock}
              onClick={handleAdd}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
                product.inStock
                  ? "bg-[#2a5a32] text-white hover:bg-[#1b3f22] hover:shadow-md active:scale-95"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
              }`}
            >
              <ShoppingCart size={15} />
              <span>{product.inStock ? "Add" : "Sold Out"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
