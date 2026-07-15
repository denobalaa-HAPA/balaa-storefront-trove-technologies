import React from 'react';
import { ShieldCheck, UserCheck, Award, Zap, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function AboutView() {
  return (
    <div className="space-y-12 pb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6" id="about-view">
      
      {/* Visual Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-brand-dark uppercase tracking-wider block">Est. Nairobi, Kenya</span>
        <h1 className="font-display text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
          About {BUSINESS_INFO.name}
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed font-medium">
          Pioneering premium device restoration and genuine electronics retail with local support you can trust in Nairobi.
        </p>
      </div>

      {/* Narrative grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm" id="about-story-container">
        
        {/* Story Text */}
        <div className="space-y-5">
          <span className="text-xs font-bold text-brand-dark bg-brand/10 px-3 py-1 rounded-full uppercase tracking-wider">
            Our Business Story
          </span>
          <h2 className="font-display text-2xl font-black text-slate-900">
            Founded on Technical Excellence &amp; Trust
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {BUSINESS_INFO.name} started as a micro-repair workshop servicing cracked smartphone screens in Nairobi. Today, we've grown into a modern hardware retail store and certified device service hub at Norwich Union Building, 5th Floor.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            Unlike massive faceless online marketplaces, we believe in **honest retail**. Our smartphone, laptop, and TV listings focus purely on verifiable configurations and raw benchmarks, with zero misleading marketing jargon. Additionally, all repairs undergo rigorous hardware testing and calibration prior to discharge.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            Our retail philosophy integrates directly with **WhatsApp messaging**, combining the simplicity of a digital catalog with the care and responsiveness of a trusted neighborhood merchant.
          </p>
        </div>

        {/* Story Image / Graphic Frame */}
        <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 shadow-lg border border-slate-800">
          <img 
            src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80" 
            alt="Electronics Workshop Lab"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <p className="font-display font-extrabold text-base flex items-center gap-1">
              Our Professional Lab <Sparkles className="h-4 w-4 text-brand animate-pulse" />
            </p>
            <p className="text-xs text-slate-300">Clean-room diagnostics, microscopic solder boards, and original calibration rigs.</p>
          </div>
        </div>

      </div>


      {/* Core Values Section */}
      <section className="space-y-6" id="about-core-values">
        <div className="text-center">
          <h3 className="font-display text-xl font-bold text-slate-900">Our Pillars of Craft</h3>
          <p className="text-xs text-slate-500 mt-1">What sets us apart from conventional repair outlets.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-dark font-bold text-lg">
              🛡️
            </div>
            <h4 className="font-display font-bold text-base text-slate-900">Premium OEM Standard</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              We never cut corners with cheap clone parts. We source high-grade screens, durable batteries, and genuine chips to guarantee original color, contrast, and tactile responsiveness.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-dark font-bold text-lg">
              ✅
            </div>
            <h4 className="font-display font-bold text-base text-slate-900">90-Day Warranty Coverage</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              All screen replacements, micro-soldering, and power calibrations are backed by our full 90-day warranty. If any replaced part malfunctions under normal use, we fix it immediately.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-dark font-bold text-lg">
              🧠
            </div>
            <h4 className="font-display font-bold text-base text-slate-900">Expert Certified Crew</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Our specialists are trained to diagnose micro-circuitry, liquid intrusions, software failures, and physical structural damages. You speak directly to the person repairing your device.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
