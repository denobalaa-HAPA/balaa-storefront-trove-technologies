import React from 'react';
import { Wrench, Shield, CheckCircle, Smartphone, AlertTriangle, Cpu, Clock, ArrowRight } from 'lucide-react';
import { REPAIR_SERVICES } from '../data';

interface RepairsViewProps {
  onNavigate: (view: string, prefilledRepairId?: string) => void;
}

export default function RepairsView({ onNavigate }: RepairsViewProps) {
  
  const handleBookRepair = (repairTitle: string) => {
    // Navigate to request form and pass prefilled title
    onNavigate('request-repair', repairTitle);
  };

  return (
    <div className="space-y-12 pb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6" id="repairs-view">
      
      {/* Page Header Banner with Trove Technologies style */}
      <div className="bg-slate-950 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden" id="repairs-hero">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#0D1F1F] to-slate-900"></div>
        <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-brand/20 blur-2xl"></div>
        
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand border border-brand/20">
            🔧 Professional Repair Hub
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-black tracking-tight">
            Certified Phone Repairs
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Is your smartphone screen cracked? Battery dying fast? Charging port loose? Our certified, local in-house technicians repair major brands (Apple, Samsung, Google, Infinix, Tecno, Oppo, and more) using high-grade parts at Norwich Union, 5th Floor, Nairobi.
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300 pt-2 font-bold">
            <span className="flex items-center gap-1.5 text-brand">
              <CheckCircle className="h-4 w-4 text-brand" /> Premium OEM Parts
            </span>
            <span className="flex items-center gap-1.5 text-brand">
              <CheckCircle className="h-4 w-4 text-brand" /> 90-Day Guarantee
            </span>
            <span className="flex items-center gap-1.5 text-brand">
              <CheckCircle className="h-4 w-4 text-brand" /> Same-Day Service
            </span>
          </div>
        </div>
      </div>


      {/* Quick Interactive Grid of Services */}
      <section className="space-y-6" id="repair-categories-section">
        <div>
          <span className="text-xs font-bold text-brand-dark uppercase tracking-wider block mb-1">What We Fix</span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900">Repair Categories &amp; Diagnostics</h2>
          <p className="text-slate-500 text-sm mt-1">Select your issue below. Click "Book Repair" to prefill our request form instantly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="repairs-grid-container">
          {REPAIR_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-150 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              id={`repair-box-${service.id}`}
            >
              {/* Service Info */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                    <span className="inline-block p-1.5 bg-brand/10 text-brand-dark rounded-lg">
                      <Wrench className="h-4 w-4" />
                    </span>
                    {service.title}
                  </h3>
                  
                  <span className="text-xs font-bold text-slate-950 bg-brand/10 px-3 py-1 rounded-full">
                    Est: {service.estimatedTime}
                  </span>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Pricing & CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Estimated cost</p>
                  <p className="text-base font-black text-brand-dark">
                    Starting from {service.startingPrice}
                  </p>
                </div>

                <button
                  onClick={() => handleBookRepair(service.title)}
                  className="flex items-center gap-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white px-4 py-2.5 text-xs font-bold transition-all cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  Book Repair
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>


      {/* Diagnostic Warning Alert banner */}
      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-start" id="diagnostics-alert">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-slate-900">Don't know what's wrong with your device?</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            No problem! Book a general **Water Damage Assessment / Diagnostic** from our form. Our technicians will inspect your device under a microscope, isolate damaged microchips, and call you with an exact price breakdown before performing any repairs.
          </p>
          <button 
            onClick={() => handleBookRepair("Unknown / Diagnostic Check")}
            className="text-xs text-brand-dark font-bold hover:underline inline-block mt-1.5 cursor-pointer"
          >
            Book General Diagnostic →
          </button>
        </div>
      </section>

    </div>
  );
}
