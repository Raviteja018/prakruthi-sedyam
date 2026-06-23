import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { ArrowRight, Leaf, Award, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import NatureCanvas from '../components/NatureCanvas';
import ScrollReveal from '../components/ScrollReveal';
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

// Inline leaf SVG for decorations
function LeafSVG({ color = 'currentColor', className = '' }) {
  return (
    <svg className={className} viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 58 C20 58 0 38 0 22 C0 6 20 4 20 4 C20 4 40 6 40 22 C40 38 20 58 20 58 Z" fill={color} />
      <path d="M20 56 V6" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 40 C26 36 32 34 34 30" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round" />
      <path d="M20 32 C14 28 8 26 6 22" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

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

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-gradient-to-r from-[#0a1f0d] via-[#132e15]/95 to-[#2a5a32]/60 overflow-hidden min-h-[520px] flex items-center">

        {/* Static background image */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25"
          style={{ backgroundImage: "url('/hero_banner.png')" }}
        />

        {/* 3D Three.js floating leaves + pollen canvas */}
        <NatureCanvas />

        {/* Decorative glowing orbs */}
        <div className="absolute top-8 right-24 w-72 h-72 bg-[#d4a373]/8 rounded-full blur-3xl nature-orb pointer-events-none" />
        <div className="absolute bottom-0 left-16 w-56 h-56 bg-[#2a5a32]/15 rounded-full blur-2xl nature-orb pointer-events-none" style={{ animationDelay: '2s' }} />

        {/* Content */}
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

          {/* Circular Logo with floating animation */}
          <div className="hidden lg:flex justify-center relative">
            <div className="absolute w-80 h-80 bg-[#b37d4e]/10 rounded-full blur-3xl nature-orb" />
            <div className="relative border-4 border-[#b37d4e]/40 p-4 rounded-full overflow-hidden w-96 h-96 flex items-center justify-center bg-white/5 backdrop-blur-xs float-anim-slow">
              <div className="w-full h-full rounded-full overflow-hidden border border-[#faebdf]/20 bg-white flex items-center justify-center p-1 shadow-inner">
                <img src={prakruthiLogo} alt="Prakruthi Sedyam Logo" className="w-full h-full object-contain scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED CATEGORIES ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <ScrollReveal direction="up">
          <div className="space-y-2">
            <span className="text-xs text-[#b37d4e] font-extrabold uppercase tracking-widest block">Organically Grown</span>
            <h3 className="font-serif text-3xl font-bold text-[#222522] flex items-center justify-center gap-3">
              <LeafSVG color="#2a5a32" className="w-6 h-8 float-anim inline-block" />
              Explore Key Categories
              <LeafSVG color="#2a5a32" className="w-6 h-8 float-anim inline-block" style={{ animationDelay: '1s', transform: 'scaleX(-1)' }} />
            </h3>
            <div className="w-16 h-0.5 bg-[#2a5a32] mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Cooking Oil & Ghee", category: "COOKING OIL & GHEE", img: "/images/cow_ghee.png", bg: "bg-[#faebdf]" },
            { name: "Organic Honey", category: "HONEY", img: "/images/raw_honey.png", bg: "bg-amber-50" },
            { name: "Dal & Pulses", category: "DAL & PULSES", img: "/images/millet_grains.png", bg: "bg-emerald-50" },
            { name: "Native Millets", category: "MILLETS", img: "/images/millet_grains.png", bg: "bg-yellow-50" },
            { name: "Clay Cookware", category: "CLAY COOKWARE", img: "/images/clay_pot.png", bg: "bg-orange-50" },
            { name: "Ready to Cook", category: "READY TO COOK (Dosa mix,Pongal,Flakes..etc)", img: "/images/millet_grains.png", bg: "bg-rose-50" }
          ].map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 80}>
              <div
                onClick={() => handleFeaturedCategoryClick(item.category)}
                className="group bg-white border border-[#f2ebd9] hover:border-[#2a5a32]/30 p-5 rounded-2xl shadow-xs cursor-pointer transition-all duration-400 flex flex-col items-center justify-between text-center min-h-[210px] category-card-hover"
              >
                <div className={`w-24 h-24 ${item.bg} rounded-full overflow-hidden flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-400 border border-[#f2ebd9]/50 shadow-xs`}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-bold text-gray-800 font-serif leading-tight group-hover:text-[#2a5a32] transition-colors duration-300">
                  {item.name}
                </span>
                <span className="text-[10px] text-[#b37d4e] font-semibold tracking-wider uppercase mt-1 flex items-center gap-0.5 group-hover:underline">
                  Shop Now <ArrowRight size={10} />
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ==================== BESTSELLING PRODUCTS ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-[#f7f3e9]/40 py-12 rounded-3xl border border-[#f2ebd9]">
        <ScrollReveal direction="up">
          <div className="text-center space-y-2">
            <span className="text-xs text-[#b37d4e] font-extrabold uppercase tracking-widest block">Customer Favorites</span>
            <h3 className="font-serif text-3xl font-bold text-[#222522]">Our Weekly Bestsellers</h3>
            <div className="w-16 h-0.5 bg-[#2a5a32] mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product, idx) => (
            <ScrollReveal key={product.id} direction="up" delay={idx * 100}>
              <ProductCard
                product={product}
                onAddToCart={addToCart}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={200}>
          <div className="text-center pt-2">
            <Link
              to="/shop"
              onClick={() => setSelectedCategory(null)}
              className="inline-block px-6 py-2.5 bg-white border border-[#f2ebd9] hover:border-[#2a5a32] hover:bg-[#e7f3e9] text-[#2a5a32] text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer shadow-xs hover:shadow-sm"
            >
              View All Products
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ==================== VALUES SECTION ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white border border-[#f2ebd9] rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <ScrollReveal direction="scale" className="lg:col-span-4 flex justify-center">
            <div className="relative w-56 h-56 rounded-full border-2 border-dashed border-[#b37d4e]/40 p-3 flex items-center justify-center bg-[#fbf8f3] float-anim">
              <div className="w-full h-full rounded-full bg-[#1b3f22] p-6 text-white text-center flex flex-col justify-center items-center">
                <Leaf size={32} className="text-[#d4a373] mb-2 breathe-anim" />
                <span className="font-serif text-lg font-bold leading-none">Prakruthi Sedyam</span>
                <span className="text-[8px] uppercase tracking-widest text-[#d4a373] font-bold mt-1">100% Raw & Authentic</span>
              </div>
              <div className="absolute -bottom-2 bg-[#b37d4e] text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                10+ Categories
              </div>

              {/* Orbiting leaf decorations */}
              <LeafSVG color="#2a5a32" className="leaf-decoration w-8 h-12 top-2 right-2" style={{ animationDelay: '0s' }} />
              <LeafSVG color="#d4a373" className="leaf-decoration w-6 h-9 bottom-4 left-0" style={{ animationDelay: '1.5s' }} />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150} className="lg:col-span-8 space-y-6 text-left">
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
                <div key={idx} className="flex gap-3 items-start group">
                  <div className="w-8 h-8 rounded-xl bg-[#e7f3e9] flex items-center justify-center text-[#2a5a32] flex-shrink-0 group-hover:bg-[#2a5a32] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide">{val.title}</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="relative bg-[#1b3f22] text-[#fbf8f3] py-16 px-4 overflow-hidden">

        {/* CSS falling leaves decorations (dark section) */}
        <LeafSVG color="#2a5a32" className="nature-leaf w-8 h-12 left-[8%] top-0"
          style={{ animationDuration: '12s', animationDelay: '0s' }} />
        <LeafSVG color="#d4a373" className="nature-leaf w-6 h-9 left-[22%] top-0"
          style={{ animationDuration: '16s', animationDelay: '3s' }} />
        <LeafSVG color="#2a5a32" className="nature-leaf w-10 h-14 left-[45%] top-0"
          style={{ animationDuration: '10s', animationDelay: '1.5s' }} />
        <LeafSVG color="#469253" className="nature-leaf w-7 h-10 left-[67%] top-0"
          style={{ animationDuration: '14s', animationDelay: '4.5s' }} />
        <LeafSVG color="#d4a373" className="nature-leaf w-5 h-8 left-[85%] top-0"
          style={{ animationDuration: '11s', animationDelay: '2s' }} />
        <LeafSVG color="#2a5a32" className="nature-leaf w-9 h-13 left-[55%] top-0"
          style={{ animationDuration: '18s', animationDelay: '6s' }} />

        {/* Background glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2a5a32]/20 rounded-full blur-3xl nature-orb pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <ScrollReveal direction="down">
            <span className="text-xs text-[#d4a373] font-bold uppercase tracking-widest block">Customer Stories</span>
            <h3 className="font-serif text-3xl font-bold">What Our Customers Say</h3>
            <div className="w-12 h-0.5 bg-[#d4a373] mx-auto rounded-full" />
          </ScrollReveal>

          <div className="min-h-[140px] flex flex-col justify-center">
            <p className="font-serif text-lg sm:text-xl italic font-light leading-relaxed max-w-2xl mx-auto transition-all duration-700">
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
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  testimonialIndex === idx ? 'bg-[#d4a373] w-6' : 'bg-white/30 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <ScrollReveal direction="scale">
          <div className="relative bg-[#b37d4e] text-white rounded-3xl p-8 sm:p-12 space-y-6 shadow-lg overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -left-12 -top-12 w-40 h-40 bg-white/5 rounded-full" />
            <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-white/5 rounded-full" />

            {/* CSS leaf decorations in CTA */}
            <LeafSVG color="rgba(255,255,255,0.15)" className="absolute top-4 left-8 w-10 h-14 float-anim" />
            <LeafSVG color="rgba(255,255,255,0.1)" className="absolute bottom-6 right-10 w-8 h-12 float-anim-slow" />
            <LeafSVG color="rgba(255,255,255,0.08)" className="absolute top-6 right-1/3 w-6 h-9 float-anim" style={{ animationDelay: '2s' }} />

            <div className="max-w-xl mx-auto space-y-4 relative z-10">
              <h3 className="font-serif text-3xl font-bold leading-tight">Ready to Switch to a Healthy Organic Lifestyle?</h3>
              <p className="text-xs sm:text-sm text-[#faebdf] font-light leading-relaxed">
                Order pure wood pressed oils, millets, organic juices, clean soap & shampoos, and clay pots now. Home delivery available in Hyderabad!
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b3f22] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#0a1f0d] transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <span>Browse Our Catalog</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
