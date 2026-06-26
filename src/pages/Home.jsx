import React, { useState, useEffect, useMemo, useRef } from 'react';
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
function LeafSVG({ color = 'currentColor', className = '', style = {} }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 58 C20 58 0 38 0 22 C0 6 20 4 20 4 C20 4 40 6 40 22 C40 38 20 58 20 58 Z" fill={color} />
      <path d="M20 56 V6" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 40 C26 36 32 34 34 30" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round" />
      <path d="M20 32 C14 28 8 26 6 22" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// Inline branch SVG for corner decorations
function BranchSVG({ color = 'currentColor', className = '', style = {} }) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 170 Q 50 110 80 30" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <path d="M35 140 Q 10 125 15 110 Q 30 110 41 128 Z" fill={color} opacity="0.75" />
      <path d="M45 120 Q 75 115 70 100 Q 55 100 48 112 Z" fill={color} opacity="0.75" />
      <path d="M52 95 Q 25 85 30 70 Q 45 70 56 84 Z" fill={color} opacity="0.75" />
      <path d="M60 80 Q 90 75 85 60 Q 70 60 63 70 Z" fill={color} opacity="0.75" />
      <path d="M68 55 Q 45 48 50 35 Q 63 35 71 47 Z" fill={color} opacity="0.75" />
      <path d="M74 42 Q 98 40 92 28 Q 78 28 76 36 Z" fill={color} opacity="0.75" />
      <path d="M80 30 Q 82 10 78 5 Q 70 12 80 30 Z" fill={color} opacity="0.75" />
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

  const scrollContainerRef = useRef(null);

  // Auto-scroll mobile featured categories
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Check if view is mobile/tablet (< 1024px)
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (!container) return;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;

        const firstCard = container.firstElementChild;
        const step = firstCard ? firstCard.offsetWidth + 16 : 180; // card width + gap

        let nextScroll = container.scrollLeft + step;
        if (nextScroll >= maxScroll + 10) {
          nextScroll = 0; // Wrap back to the beginning
        }

        container.scrollTo({
          left: nextScroll,
          behavior: 'smooth'
        });
      }, 3000);
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    // Pause on user interaction (touch/mouse swipe or hover)
    container.addEventListener('touchstart', stopAutoScroll, { passive: true });
    container.addEventListener('touchend', () => { stopAutoScroll(); startAutoScroll(); }, { passive: true });
    container.addEventListener('mousedown', stopAutoScroll);
    container.addEventListener('mouseup', () => { stopAutoScroll(); startAutoScroll(); });
    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', () => { stopAutoScroll(); startAutoScroll(); });

    startAutoScroll();

    return () => {
      stopAutoScroll();
      if (container) {
        container.removeEventListener('touchstart', stopAutoScroll);
        container.removeEventListener('mousedown', stopAutoScroll);
        container.removeEventListener('mouseenter', stopAutoScroll);
      }
    };
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
              Prakruthi Sedyam <span className="text-[#d4a373] italic">(Prakruthi Vanam)</span> Store
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
                <img src="https://res.cloudinary.com/dhm0xqvnl/image/upload/v1782475439/prakruthi_logo__y4fpp3.png" alt="Prakruthi Sedyam Logo" className="w-full h-full object-contain scale-110" />
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

        <ScrollReveal direction="up" delay={80}>
          <div ref={scrollContainerRef} className="flex overflow-x-auto md:grid md:grid-cols-5 gap-6 pb-4 px-2 no-scrollbar snap-x snap-mandatory scroll-smooth">
            {[
              { name: "Groceries & Staples", category: "groceries", img: "/images/organic_groceries.png", bg: "bg-amber-50/50" },
              { name: "Cooking Oil", category: "COOKING OIL", img: "/images/groundnut_oil.png", bg: "bg-[#faebdf]" },
              { name: "Ghee", category: "GHEE", img: "/images/cow_ghee.png", bg: "bg-amber-50" },
              { name: "Honey", category: "HONEY", img: "/images/raw_honey.png", bg: "bg-amber-50/40" },
              { name: "Pulses", category: "PULSES", img: "/images/organic_pulses.png", bg: "bg-emerald-50" },
              { name: "Millets", category: "MILLETS", img: "/images/millet_grains.png", bg: "bg-yellow-50" },
              { name: "Spices & Condiments", category: "spices", img: "/images/organic_spices.png", bg: "bg-red-50" },
              { name: "Personal Care", category: "personal-care", img: "/images/herbal_soap.png", bg: "bg-teal-50" },
              { name: "Clay Cookware", category: "CLAY COOKWARE", img: "/images/clay_pot.png", bg: "bg-orange-50" },
              { name: "Ready to Cook", category: "READY TO COOK (Dosa mix,Pongal,Flakes..etc)", img: "/images/ready_to_cook.png", bg: "bg-rose-50" }
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleFeaturedCategoryClick(item.category)}
                className="flex-shrink-0 snap-start w-[145px] sm:w-[170px] md:w-auto group bg-white border border-[#f2ebd9] hover:border-[#2a5a32]/30 p-5 rounded-2xl shadow-xs cursor-pointer transition-all duration-400 flex flex-col items-center justify-between text-center min-h-[210px] category-card-hover"
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
            ))}
          </div>
        </ScrollReveal>
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

        {/* Dynamic breathing background glow orbs */}
        <div className="absolute top-10 left-12 w-64 h-64 bg-[#d4a373]/8 rounded-full blur-3xl breathe-anim pointer-events-none" />
        <div className="absolute bottom-10 right-12 w-72 h-72 bg-[#2a5a32]/25 rounded-full blur-3xl breathe-anim pointer-events-none" style={{ animationDelay: '1.5s' }} />

        {/* Corner swaying foliage branch decorations */}
        <BranchSVG color="#d4a373" className="absolute -left-8 top-4 w-28 h-40 opacity-25 pointer-events-none float-anim" style={{ transform: 'rotate(15deg)' }} />
        <BranchSVG color="#2a5a32" className="absolute -right-8 bottom-4 w-28 h-40 opacity-40 pointer-events-none float-anim-slow" style={{ transform: 'rotate(-35deg) scaleX(-1)' }} />

        {/* CSS short falling leaves decorations */}
        <LeafSVG color="#2a5a32" className="nature-leaf-short w-8 h-12 left-[10%] top-0"
          style={{ animationDuration: '8s', animationDelay: '0s' }} />
        <LeafSVG color="#d4a373" className="nature-leaf-short w-6 h-9 left-[25%] top-0"
          style={{ animationDuration: '11s', animationDelay: '2.5s' }} />
        <LeafSVG color="#387642" className="nature-leaf-short w-9 h-13 left-[48%] top-0"
          style={{ animationDuration: '7s', animationDelay: '1s' }} />
        <LeafSVG color="#d4a373" className="nature-leaf-short w-5 h-8 left-[70%] top-0"
          style={{ animationDuration: '10s', animationDelay: '3.5s' }} />
        <LeafSVG color="#2a5a32" className="nature-leaf-short w-7 h-10 left-[85%] top-0"
          style={{ animationDuration: '9s', animationDelay: '1.8s' }} />

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
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${testimonialIndex === idx ? 'bg-[#d4a373] w-6' : 'bg-white/30 w-2'
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
