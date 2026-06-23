import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { Sparkles, ArrowRight, Leaf, Award, RefreshCw, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import prakruthiLogo from '../assets/prakruthi_logo_.png';

const TESTIMONIALS = [
  {
    name: "Srinivas Rao",
    location: "Chanda Nagar, Hyderabad",
    text: "The wood-pressed groundnut oil is of top quality. It smells exactly like traditional home-extracted oils. Highly recommend Prakruthi Sedyam!",
    rating: 5
  },
  {
    name: "Anjali Devi",
    location: "Miyapur, Hyderabad",
    text: "My children love their Millet Biscuits. They are very tasty and completely free of maida and palm oil. A healthy snack option.",
    rating: 5
  },
  {
    name: "Karthik Reddy",
    location: "Gangaram, Hyderabad",
    text: "We switched to their A2 Desi Cow Ghee and unpolished millets 6 months ago. The difference in digestion and taste is amazing. Great customer service too.",
    rating: 5
  }
];

export default function Home() {
  const { addToCart, setSelectedCategory } = useOutletContext();
  const navigate = useNavigate();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Testimonial auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Dynamic Bestsellers (4 items with high ratings)
  const bestsellers = useMemo(() => {
    return PRODUCTS.filter(p => p.badge && p.inStock).slice(0, 4);
  }, []);

  const handleFeaturedCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate('/shop');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0a1f0d] via-[#132e15]/95 to-[#2a5a32]/60 overflow-hidden min-h-[500px] flex items-center">
        {/* Background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30" 
          style={{ backgroundImage: "url('/hero_banner.png')" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left max-w-xl animate-fade-in">       
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Prakruthi Sedyam <span className="text-[#d4a373] italic">(Roots Organics)</span> Store
            </h2>
            
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
              Explore Prakruthi Sedyam—your neighborhood store in Hyderabad for premium cold pressed oils, native organic millets, direct-sourced honey, natural personal care, and traditional clay cookware.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/shop"
                className="px-6 py-3.5 bg-[#2a5a32] text-white font-bold text-sm rounded-xl hover:bg-[#1b3f22] hover:shadow-lg transition-all duration-300 cursor-pointer shadow-md"
              >
                Explore Harvest
              </Link>
              <Link
                to="/story"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                Our Sourcing Roots
              </Link>
            </div>
          </div>

          {/* Circular image banner block */}
          <div className="hidden lg:flex justify-center relative">
            <div className="absolute w-80 h-80 bg-[#b37d4e]/10 rounded-full blur-3xl animate-pulse" />
            
            {/* Styled Frame */}
            <div className="relative border-4 border-[#b37d4e]/40 p-4 rounded-full overflow-hidden w-96 h-96 flex items-center justify-center bg-white/5 backdrop-blur-xs">
              <div className="w-full h-full rounded-full overflow-hidden border border-[#faebdf]/20 bg-white flex items-center justify-center p-1 shadow-inner">
                <img src={prakruthiLogo} alt="Prakruthi Sedyam Logo" className="w-full h-full object-contain scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Carousel/Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-2">
          <span className="text-xs text-[#b37d4e] font-extrabold uppercase tracking-widest block">Organically Grown</span>
          <h3 className="font-serif text-3xl font-bold text-[#222522]">Explore Key Categories</h3>
          <div className="w-16 h-0.5 bg-[#2a5a32] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Cooking Oil & Ghee", category: "COOKING OIL & GHEE", img: "/images/cow_ghee.png", bg: "bg-[#faebdf]" },
            { name: "Organic Honey", category: "HONEY", img: "/images/raw_honey.png", bg: "bg-amber-50" },
            { name: "Traditional Dal & Pulses", category: "DAL & PULSES", img: "/images/millet_grains.png", bg: "bg-emerald-50" },
            { name: "Native Millets", category: "MILLETS", img: "/images/millet_grains.png", bg: "bg-yellow-50" },
            { name: "Clay Cookware", category: "CLAY COOKWARE", img: "/images/clay_pot.png", bg: "bg-orange-50" },
            { name: "Ready to Cook", category: "READY TO COOK (Dosa mix,Pongal,Flakes..etc)", img: "/images/millet_grains.png", bg: "bg-rose-50" }
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleFeaturedCategoryClick(item.category)}
              className="group bg-white border border-[#f2ebd9] hover:border-[#2a5a32]/30 p-5 rounded-2xl shadow-xs hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[210px]"
            >
              <div className={`w-24 h-24 ${item.bg} rounded-full overflow-hidden flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 border border-[#f2ebd9]/50 shadow-xs`}>
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-bold text-gray-800 font-serif leading-tight group-hover:text-[#2a5a32]">
                {item.name}
              </span>
              <span className="text-[10px] text-[#b37d4e] font-semibold tracking-wider uppercase mt-1 flex items-center gap-0.5 group-hover:underline">
                Shop Now <ArrowRight size={10} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bestselling Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-[#f7f3e9]/40 py-12 rounded-3xl border border-[#f2ebd9]">
        <div className="text-center space-y-2">
          <span className="text-xs text-[#b37d4e] font-extrabold uppercase tracking-widest block">Customer Favorites</span>
          <h3 className="font-serif text-3xl font-bold text-[#222522]">Our Weekly Bestsellers</h3>
          <div className="w-16 h-0.5 bg-[#2a5a32] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/shop"
            onClick={() => setSelectedCategory(null)}
            className="inline-block px-6 py-2.5 bg-white border border-[#f2ebd9] hover:border-[#2a5a32] hover:bg-[#e7f3e9] text-[#2a5a32] text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer shadow-xs hover:shadow-sm"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Values / "Traditional Essence" Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white border border-[#f2ebd9] rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-56 h-56 rounded-full border-2 border-dashed border-[#b37d4e]/40 p-3 flex items-center justify-center bg-[#fbf8f3]">
              <div className="w-full h-full rounded-full bg-[#1b3f22] p-6 text-white text-center flex flex-col justify-center items-center">
                <Leaf size={32} className="text-[#d4a373] mb-2 animate-bounce" />
                <span className="font-serif text-lg font-bold leading-none">Prakruthi Sedyam</span>
                <span className="text-[8px] uppercase tracking-widest text-[#d4a373] font-bold mt-1">100% Raw & Authentic</span>
              </div>
              <div className="absolute -bottom-2 bg-[#b37d4e] text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                10+ Categories
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="space-y-1.5">
              <span className="text-[10px] text-[#b37d4e] font-extrabold uppercase tracking-widest block">Traditional Methods</span>
              <h3 className="font-serif text-3xl font-bold text-[#1b3f22]">The Pure Essence of Nature</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">We believe that wellness starts from the soil. Every product in our store is chosen carefully to ensure you get the absolute best health benefits.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Direct Sourced", desc: "We purchase directly from local organic farmers, securing fair prices.", icon: <Award size={18} /> },
                { title: "Wood Pressed Ganuga", desc: "Our oils are extracted slowly in wooden churns to preserve nutrients.", icon: <RefreshCw size={18} /> },
                { title: "Pesticide-Free", desc: "No harmful chemicals, synthetic insecticides, or preservatives are used.", icon: <ShieldCheck size={18} /> },
                { title: "Traditional Handcrafted", desc: "Clayware and spices made using age-old ancestral methods.", icon: <Sparkles size={18} /> }
              ].map((val, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-xl bg-[#e7f3e9] flex items-center justify-center text-[#2a5a32] flex-shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide">{val.title}</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Banner */}
      <section className="bg-[#1b3f22] text-[#fbf8f3] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs text-[#d4a373] font-bold uppercase tracking-widest block">Customer Stories</span>
          <h3 className="font-serif text-3xl font-bold">What Our Customers Say</h3>
          <div className="w-12 h-0.5 bg-[#d4a373] mx-auto rounded-full" />
          
          <div className="min-h-[140px] flex flex-col justify-center animate-fade-in">
            <p className="font-serif text-lg sm:text-xl italic font-light leading-relaxed max-w-2xl mx-auto">
              "{TESTIMONIALS[testimonialIndex].text}"
            </p>
            <div className="mt-4">
              <h4 className="font-bold text-sm text-[#d4a373]">{TESTIMONIALS[testimonialIndex].name}</h4>
              <span className="text-[10px] text-gray-300">{TESTIMONIALS[testimonialIndex].location}</span>
            </div>
          </div>

          <div className="flex justify-center gap-2 pt-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIndex(idx)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                  testimonialIndex === idx ? 'bg-[#d4a373] w-4' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Order Banner */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="bg-[#b37d4e] text-white rounded-3xl p-8 sm:p-12 space-y-6 shadow-lg relative overflow-hidden">
          <div className="absolute -left-12 -top-12 w-40 h-40 bg-white/5 rounded-full" />
          <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-white/5 rounded-full" />
          
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h3 className="font-serif text-3xl font-bold leading-tight">Ready to Switch to a Healthy Organic Lifestyle?</h3>
            <p className="text-xs sm:text-sm text-[#faebdf] font-light leading-relaxed">
              Order pure wood pressed oils, millets, organic juices, clean soap & shampoos, and clay pots now. Home delivery available in Hyderabad!
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b3f22] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#0a1f0d] transition-colors cursor-pointer"
            >
              <span>Browse Our Catalog</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
