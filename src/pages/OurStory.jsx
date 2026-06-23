import React from 'react';

export default function OurStory() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="text-center space-y-3">
        <span className="text-xs text-[#b37d4e] font-extrabold uppercase tracking-widest block">Rooted in Tradition</span>
        <h2 className="font-serif text-4xl font-bold text-[#1b3f22]">Our Organic Roots</h2>
        <div className="w-16 h-0.5 bg-[#2a5a32] mx-auto rounded-full" />
        <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mt-2 leading-relaxed">
          Learn how Prakruthi Sedyam is building a chemical-free bridge between native farming and urban wellness.
        </p>
      </div>

      {/* Story Layout Blocks */}
      <div className="space-y-10">
        
        {/* Sourcing */}
        <div className="bg-white border border-[#f2ebd9] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-20 h-20 bg-[#e7f3e9] rounded-full flex items-center justify-center text-[#2a5a32] flex-shrink-0 text-3xl">
            🌱
          </div>
          <div className="space-y-2 text-left">
            <h3 className="font-serif text-xl font-bold text-[#1b3f22]">Sourcing Directly from Small-Scale Farmers</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Prakruthi Sedyam started with a simple vision: to eliminate toxic chemicals from daily diets. We partner directly with organic, natural farming co-operatives in rural Telangana and Andhra Pradesh. By removing middle-men, we ensure that farmers get fair returns for their organic efforts, while you receive the freshest harvest at honest prices.
            </p>
          </div>
        </div>

        {/* Cold Churning */}
        <div className="bg-white border border-[#f2ebd9] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-amber-700 flex-shrink-0 text-3xl">
            🥥
          </div>
          <div className="space-y-2 text-left">
            <h3 className="font-serif text-xl font-bold text-[#1b3f22]">Preserving Nutrition via Cold Pressing</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Modern refined oils are processed using high heat and chemical solvents, which strips oils of their vitamins, healthy fatty acids, and original flavor. At our store, all cooking oils are extracted using traditional wooden churns (Ganuga) operated at cold, slow speeds. This guarantees that coconut, groundnut, and sesame oils retain their native nutrients, rich aroma, and high density.
            </p>
          </div>
        </div>

        {/* Clay Pot Cookware & Millets */}
        <div className="bg-white border border-[#f2ebd9] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-700 flex-shrink-0 text-3xl">
            🏺
          </div>
          <div className="space-y-2 text-left">
            <h3 className="font-serif text-xl font-bold text-[#1b3f22]">Reviving Clay Cookware & Native Millets</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Health doesn't stop at ingredients; it extends to how they are prepared. Clay cookware is naturally alkaline, which neutralizes acids in food and preserves essential minerals. In addition, our native millets are ancient power-grains that are climate-resilient and low in glucose. We aim to revive these traditional cooking habits to keep you safe from heavy metals and modern lifestyle illnesses.
            </p>
          </div>
        </div>

      </div>

      {/* Core values block */}
      <div className="bg-[#1b3f22] text-[#fbf8f3] p-8 rounded-3xl text-center space-y-6">
        <h3 className="font-serif text-2xl font-bold">Our Pledge to You</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div>
            <h4 className="text-[#d4a373] text-sm font-bold uppercase tracking-wider mb-1">0% Preservatives</h4>
            <p className="text-[11px] text-gray-300">We do not add sulphur, dyes, or chemical binders to anything.</p>
          </div>
          <div>
            <h4 className="text-[#d4a373] text-sm font-bold uppercase tracking-wider mb-1">100% Traditional</h4>
            <p className="text-[11px] text-gray-300">Processed slowly in stone and wood churns to preserve life.</p>
          </div>
          <div>
            <h4 className="text-[#d4a373] text-sm font-bold uppercase tracking-wider mb-1">Local Support</h4>
            <p className="text-[11px] text-gray-300">Empowering 100+ native farming families in Telangana region.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
