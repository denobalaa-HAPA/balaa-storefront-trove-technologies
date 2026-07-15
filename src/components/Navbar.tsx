import React, { useState } from 'react';
import { Menu, X, Phone, ShieldCheck, Wrench, ShoppingBag, HelpCircle, MapPin, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, productId?: string) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: ShieldCheck },
    { id: 'shop', label: 'Shop Catalog', icon: ShoppingBag },
    { id: 'repairs', label: 'Repair Services', icon: Wrench },
    { id: 'about', label: 'About Us', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: MapPin },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md" id="header-nav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')} id="logo-container">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#05D5E4] text-slate-950 shadow-md shadow-cyan-100 relative">
              <Zap className="h-5 w-5 text-slate-950 fill-slate-950" />
              {/* Subtle visual pixel blocks like the ones in the uploaded logo */}
              <div className="absolute -top-1 -right-1 flex gap-[2px]">
                <div className="w-1 h-1 bg-slate-950 rounded-[1px]"></div>
                <div className="w-1.5 h-1.5 bg-slate-950 rounded-[1px]"></div>
              </div>
            </div>
            <div>
              <span className="font-display text-lg font-extrabold text-slate-900 tracking-tight block leading-none uppercase">
                {BUSINESS_INFO.name.split(' ')[0]}
              </span>
              <span className="text-[10px] font-bold text-cyan-500 tracking-wider uppercase block leading-none mt-0.5">
                {BUSINESS_INFO.name.split(' ')[1]}
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id || (item.id === 'shop' && currentView === 'product-details');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-item-${item.id}`}
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 py-2 cursor-pointer ${
                    isActive 
                      ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' 
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('request-repair')}
              id="cta-repair-button-desktop"
              className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-[0.98] cursor-pointer shadow-sm shadow-slate-100"
            >
              <Wrench className="h-4 w-4" />
              Book Repair
            </button>
          </div>

          {/* Mobile hamburger icon */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('request-repair')}
              className="rounded-lg bg-slate-900 p-2 text-white hover:bg-slate-800"
              title="Book Repair"
            >
              <Wrench className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white" id="mobile-menu-drawer">
          <div className="space-y-1 px-4 py-3 pb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id || (item.id === 'shop' && currentView === 'product-details');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-item-${item.id}`}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 font-semibold' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="h-5 w-5 text-slate-500" />
                  {item.label}
                </button>
              );
            })}
            
            <div className="pt-4 border-t border-slate-100 mt-2">
              <button
                onClick={() => handleNavClick('request-repair')}
                id="cta-repair-button-mobile"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-base font-semibold text-white transition-all shadow-md shadow-blue-100"
              >
                <Wrench className="h-5 w-5" />
                Request Repair
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
