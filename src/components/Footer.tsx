import React from 'react';
import { Phone, MapPin, Clock, ArrowRight, ShieldCheck, Mail, Zap } from 'lucide-react';
import { BUSINESS_INFO, REPAIR_SERVICES } from '../data';

interface FooterProps {
  onNavigate: (view: string, productId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900" id="main-footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#05D5E4] text-slate-950 font-bold">
                <Zap className="h-4.5 w-4.5 text-slate-950 fill-slate-950" />
              </div>
              <div>
                <span className="font-display text-base font-bold text-white tracking-tight leading-none block uppercase">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] font-medium text-cyan-400 uppercase tracking-wider block mt-0.5">
                  Retail & Professional Repairs
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400">
              Your neighborhood certified electronics dealer and smartphone repair experts. Providing professional service with quality parts and transparent pricing.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span>90-Day Repair Warranty Guaranteed</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all text-blue-400" />
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('shop')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all text-blue-400" />
                  Shop Products
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('repairs')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all text-blue-400" />
                  Repair Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all text-blue-400" />
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all text-blue-400" />
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Repairs Overview */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Popular Repairs</h3>
            <ul className="space-y-2 text-sm">
              {REPAIR_SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => {
                      handleNavClick('repairs');
                    }} 
                    className="hover:text-white text-left transition-colors cursor-pointer flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all text-blue-400 flex-shrink-0" />
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-1">Store Information</h3>
            
            <div className="flex gap-2 text-sm text-slate-400">
              <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <div>
                <p className="font-medium text-slate-300">{BUSINESS_INFO.address}</p>
                <a 
                  href={BUSINESS_INFO.mapUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs text-blue-400 hover:underline inline-block mt-0.5"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="flex gap-2 text-sm text-slate-400">
              <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                {BUSINESS_INFO.formattedPhone}
              </a>
            </div>

            <div className="flex gap-2 text-sm text-slate-400">
              <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Business Hours:</p>
                {BUSINESS_INFO.hours.map((hour, index) => (
                  <p key={index} className="text-xs text-slate-400 mt-0.5">
                    {hour.days}: {hour.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright area */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
