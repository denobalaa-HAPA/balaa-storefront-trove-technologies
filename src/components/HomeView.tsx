import React from 'react';
import { Smartphone, Laptop, Tv, Headphones, Wrench, Shield, Zap, ArrowRight, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Product, RepairService } from '../types';
import { PRODUCTS, REPAIR_SERVICES, BUSINESS_INFO } from '../data';

interface HomeViewProps {
  onNavigate: (view: string, productId?: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Take first 3 products for featured section
  const featuredProducts = PRODUCTS.slice(0, 3);
  
  // Take first 4 repair services for quick overview
  const featuredRepairs = REPAIR_SERVICES.slice(0, 4);

  const handleProductEnquiry = (productName: string) => {
    const text = encodeURIComponent(`Hi, I'm interested in the ${productName}. Can you confirm if it's currently available and what the final price is? Thank you!`);
    window.open(`https://wa.me/${BUSINESS_INFO.phone.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-12" id="home-view">
      
      {/* 1. Hero Section - Trove Technologies Cyber-Cyan Premium Look */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-20 lg:py-24 rounded-3xl mx-4 mt-6" id="hero-section">
        {/* Visual Gradients & Cosmic Glimmers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0D1F1F] to-slate-900"></div>
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand/10 blur-3xl"></div>
        
        {/* Subtle grid mesh */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#18C9D2_1px,transparent_1px),linear-gradient(to_bottom,#18C9D2_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Hero Left: Text & CTAs */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand border border-brand/20">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse"></span>
              Nairobi's Premier Tech Store & Repairs
            </span>
            
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white">
              Your Trusted Electronics &amp; <span className="text-brand">Phone Repair</span> Partner.
            </h1>
            
            <p className="max-w-xl mx-auto lg:mx-0 text-base lg:text-lg text-slate-300">
              Premium smartphones, high-performance laptops, ultra-crisp smart TVs, and genuine accessories — plus expert same-day phone repair services. Located at Nairobi's Norwich Union Building.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate('shop')}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-[#2DD8E5] text-slate-950 px-6 py-3.5 text-sm font-bold transition-all shadow-lg shadow-brand/20 cursor-pointer active:scale-95"
              >
                🛍️ Browse Shop Catalog
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => onNavigate('request-repair')}
                className="flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20 active:scale-95 cursor-pointer"
              >
                <Wrench className="h-4 w-4 text-brand" />
                🔧 Book a Repair
              </button>
            </div>

            {/* Quick stats / trust points */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-md mx-auto lg:mx-0 text-center">
              <div>
                <p className="text-2xl font-extrabold text-white">500+</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Premium Products</p>
              </div>
              <div className="border-x border-white/10 px-4">
                <p className="text-2xl font-extrabold text-white">2K+</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Repairs Completed</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white">90-Day</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Service Warranty</p>
              </div>
            </div>

          </div>

          {/* Hero Right: Multi-Category Floating Cards styled identically to the design */}
          <div className="flex-1 w-full max-w-md lg:max-w-none grid grid-cols-2 gap-4" id="hero-cards">
            
            <div 
              onClick={() => onNavigate('shop')}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-slate-950 mb-6 group-hover:scale-115 transition-transform font-bold">
                📱
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white">Smartphones</h3>
                <p className="text-xs text-slate-400 mt-1">Samsung, iPhone &amp; more</p>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('shop')}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0fa8b0] text-white mb-6 group-hover:scale-115 transition-transform font-bold">
                💻
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white">Laptops</h3>
                <p className="text-xs text-slate-400 mt-1">HP, Dell, Lenovo &amp; Macs</p>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('shop')}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] text-brand border border-brand/20 mb-6 group-hover:scale-115 transition-transform font-bold">
                📺
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white">Smart TVs</h3>
                <p className="text-xs text-slate-400 mt-1">OLED, QLED &amp; 4K displays</p>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('repairs')}
              className="bg-[#18C9D2]/10 border border-brand/30 rounded-2xl p-5 hover:bg-[#18C9D2]/20 transition-all cursor-pointer group flex flex-col justify-between border-dashed"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white mb-6 group-hover:scale-115 transition-transform font-bold animate-pulse">
                🔧
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-brand flex items-center gap-1">
                  Device Repair <Zap className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                </h3>
                <p className="text-xs text-slate-300 mt-1">Same-day expert fixes</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Marquee Strip */}
      <div className="bg-brand py-3 overflow-hidden select-none border-y border-brand-dark/20 mx-4 rounded-xl">
        <div className="flex gap-12 animate-[marquee_25s_linear_infinite] whitespace-nowrap text-slate-950 font-display font-extrabold text-xs tracking-wider uppercase">
          <span className="flex items-center gap-2">📱 PREMIUM SMARTPHONES</span>
          <span className="text-slate-950/40">•</span>
          <span className="flex items-center gap-2">💻 POWERFUL LAPTOPS</span>
          <span className="text-slate-950/40">•</span>
          <span className="flex items-center gap-2">📺 4K SMART TVS</span>
          <span className="text-slate-950/40">•</span>
          <span className="flex items-center gap-2">🔧 Same-Day Repairs</span>
          <span className="text-slate-950/40">•</span>
          <span className="flex items-center gap-2">🎧 GENUINE ACCESSORIES</span>
          <span className="text-slate-950/40">•</span>
          <span className="flex items-center gap-2">🛡️ 90-DAY SERVICE WARRANTY</span>
          <span className="text-slate-950/40">•</span>
          {/* Repeating for loop seamless marquee */}
          <span className="flex items-center gap-2">📱 PREMIUM SMARTPHONES</span>
          <span className="text-slate-950/40">•</span>
          <span className="flex items-center gap-2">💻 POWERFUL LAPTOPS</span>
          <span className="text-slate-950/40">•</span>
          <span className="flex items-center gap-2">📺 4K SMART TVS</span>
        </div>
      </div>

      {/* 2. Featured Products Catalog Section with KSh pricing */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="featured-products">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-brand-dark uppercase tracking-wider block mb-1">Weekly Highlights</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900">Featured Products</h2>
            <p className="text-slate-500 text-sm mt-1">Premium devices at highly competitive prices. WhatsApp us to confirm stock availability.</p>
          </div>
          <button 
            onClick={() => onNavigate('shop')}
            className="text-brand-dark font-extrabold text-sm hover:text-brand flex items-center gap-1 cursor-pointer transition-colors"
          >
            See All Products <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Dynamic specification-first cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => onNavigate('product-details', product.id)}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col overflow-hidden"
              id={`featured-card-${product.id}`}
            >
              {/* Product Image Stage */}
              <div className="relative aspect-video w-full bg-slate-50 overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm ${
                  product.availability === 'In Stock' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {product.availability}
                </span>

                {product.originalPrice && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-brand text-slate-950 shadow-sm font-extrabold">
                    Sale
                  </span>
                )}
              </div>

              {/* Card Body Info */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-brand-dark transition-colors">
                  {product.name}
                </h3>
                
                {/* Spec Bullets (Specific specifications ONLY) */}
                <div className="mt-3 py-2.5 border border-slate-100 bg-slate-50/50 rounded-xl px-3 flex-1">
                  <ul className="space-y-1">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-1.5 font-mono">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Primary Call To Actions in KSh */}
                <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-100">
                  <div>
                    {product.originalPrice ? (
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 line-through">KSh {product.originalPrice.toLocaleString()}</span>
                        <span className="text-lg font-black text-slate-950">KSh {product.price.toLocaleString()}</span>
                      </div>
                    ) : (
                      <span className="text-lg font-black text-slate-950">KSh {product.price.toLocaleString()}</span>
                    )}
                    <span className="text-[10px] text-slate-400 block mt-0.5">Nairobi Store Pick-up</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductEnquiry(product.name);
                    }}
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-3.5 py-2.5 text-xs font-bold transition-colors cursor-pointer border border-emerald-100"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Repairs Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="featured-repairs">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-brand-dark uppercase tracking-wider block mb-1">Express Turnaround</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900">Professional Repair Services</h2>
            <p className="text-slate-500 text-sm mt-1">Expert technicians, genuine parts, and a 90-day warranty. We fix what others can't.</p>
          </div>
          <button 
            onClick={() => onNavigate('repairs')}
            className="text-brand-dark font-extrabold text-sm hover:text-brand flex items-center gap-1 cursor-pointer transition-colors"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredRepairs.map((repair) => (
            <div 
              key={repair.id}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              id={`featured-repair-${repair.id}`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-dark bg-brand/10 px-2 py-1 rounded-md">
                  ⏱️ turnaround: {repair.estimatedTime}
                </span>
                <h3 className="font-display font-bold text-base text-slate-900 mt-3">{repair.title}</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-3">{repair.description}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Starts At</span>
                  <span className="text-sm font-extrabold text-slate-900">{repair.startingPrice}</span>
                </div>
                <button
                  onClick={() => onNavigate('request-repair')}
                  className="rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-[11px] font-bold px-3 py-2 transition-all cursor-pointer"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WhatsApp CTA Block (Big Banner supporting the sales approach) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="whatsapp-cta">
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-brand/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-brand/10 blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5 blur-xl"></div>

          <div className="space-y-4 max-w-2xl text-center lg:text-left relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl font-black">Instant Chat &amp; Orders on WhatsApp</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Prefer personal support? Chat directly with us. Verify stock instantly, secure products, discuss repair quotes, or request delivery inside Nairobi CBD.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-xs text-brand">
              <span className="flex items-center gap-1">⚡ Quick responses</span>
              <span className="flex items-center gap-1">📍 Central Nairobi CBD pick-up</span>
              <span className="flex items-center gap-1">🛠️ Direct technician access</span>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappBaseUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-slate-950 font-extrabold text-sm shadow-md hover:bg-[#2DD8E5] transition-all active:scale-[0.98] w-full lg:w-auto relative z-10 whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="h-5 w-5 fill-slate-950 text-slate-950" />
            Chat with Trove Support
          </a>
        </div>
      </section>

      {/* 5. Location and Opening Hours Card with custom visual map */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="location-hours">
        <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row gap-8">
          
          {/* Details column */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900">Visit Our Nairobi Store</h2>
              <p className="text-slate-500 text-sm mt-1">Conveniently situated at Norwich Union, 5th Floor, Suite 4 in Nairobi Central Business District.</p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand-dark">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Our Address</h4>
                  <p className="text-slate-600 text-sm mt-1">{BUSINESS_INFO.address}</p>
                  <a 
                    href={BUSINESS_INFO.mapUrl}
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-brand-dark font-semibold hover:underline inline-block mt-1"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Opening Hours</h4>
                  <div className="mt-2 space-y-1 text-slate-600 text-sm">
                    {BUSINESS_INFO.hours.map((hour, index) => (
                      <p key={index} className="flex justify-between gap-12 border-b border-slate-50 pb-1">
                        <span>{hour.days}</span>
                        <span className="font-medium text-slate-900">{hour.time}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Contact Details
              </button>
              <button 
                onClick={() => onNavigate('request-repair')}
                className="text-xs font-bold text-slate-950 bg-brand hover:bg-[#2DD8E5] px-4 py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                Schedule Drop Off
              </button>
            </div>
          </div>

          {/* Styled Mock Google Map embed with Trove Tech theme */}
          <div className="flex-1 min-h-[250px] relative rounded-2xl overflow-hidden border border-slate-150 bg-[#111111]">
            {/* Real aesthetic graphic indicating a map design */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between bg-slate-950/90 z-10">
              <div className="bg-slate-900/95 backdrop-blur-sm shadow-md rounded-xl p-3 border border-white/15 max-w-xs self-start">
                <p className="text-xs font-bold text-white flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-brand animate-pulse"></span> {BUSINESS_INFO.name}
                </p>
                <p className="text-[10px] text-slate-400 mt-1">{BUSINESS_INFO.address}</p>
              </div>
              
              <a 
                href={BUSINESS_INFO.mapUrl} 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand text-slate-950 rounded-xl text-xs font-bold py-2.5 px-4 shadow-lg hover:bg-[#2DD8E5] text-center transition-all cursor-pointer self-end"
              >
                Open Google Maps App
              </a>
            </div>

            {/* Custom stylized vector map background in Trove Technologies cyan theme */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#18C9D2_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="absolute h-1/2 w-full top-1/4 bg-[#18C9D2]/10 transform -rotate-12 border-y border-[#18C9D2]/20"></div>
            <div className="absolute w-1/3 h-full left-1/3 bg-[#18C9D2]/10 transform rotate-12 border-x border-[#18C9D2]/20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-[#18C9D2]/20 flex items-center justify-center animate-ping"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-brand border border-slate-950 shadow-md"></div>
          </div>

        </div>
      </section>

    </div>
  );
}
