import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function ContactView() {
  return (
    <div className="space-y-12 pb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6" id="contact-view">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold text-brand-dark uppercase tracking-wider block">Get Instant Assistance</span>
        <h1 className="font-display text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
          Get in Touch with Us
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed font-medium">
          Have questions about a smartphone, laptop, TV or repair? We are available via WhatsApp, phone, or in person inside our local workshop in Nairobi CBD.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Contact Info & Support Channels */}
        <div className="space-y-6">
          
          {/* Quick Support channels */}
          <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-900">Communication Channels</h3>
            
            <div className="space-y-4">
              {/* WhatsApp Callout */}
              <a 
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-200 transition-all group cursor-pointer"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 group-hover:scale-105 transition-transform">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Instant WhatsApp Support</h4>
                  <p className="text-sm font-extrabold text-emerald-800 mt-0.5">Chat Directly with a Tech</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Response: Typically under 5 mins</p>
                </div>
              </a>

              {/* Physical Phone line */}
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-brand/20 bg-brand/5 hover:bg-brand/10 transition-all group cursor-pointer"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand text-slate-950 group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5 text-slate-950" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Call our Store directly</h4>
                  <p className="text-sm font-extrabold text-brand-dark mt-0.5">{BUSINESS_INFO.formattedPhone}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-medium">During standard business hours</p>
                </div>
              </a>

              {/* Email support */}
              <div 
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Email Enquiries</h4>
                  <p className="text-sm font-bold text-slate-700 mt-0.5">support@trovetechnologies.com</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-medium">For corporate, supply, or invoice enquiries</p>
                </div>
              </div>
            </div>
          </div>


          {/* Location & Hours Card */}
          <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-display font-bold text-lg text-slate-900">Opening Hours</h3>
            <div className="space-y-2 text-slate-600 text-sm">
              {BUSINESS_INFO.hours.map((hour, idx) => (
                <p key={idx} className="flex justify-between border-b border-slate-50 pb-1.5 last:border-0 font-medium">
                  <span className="text-slate-600">{hour.days}</span>
                  <span className="font-bold text-slate-900 font-mono">{hour.time}</span>
                </p>
              ))}
            </div>
          </div>

        </div>


        {/* Visual Map and Directions Panel */}
        <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="space-y-1.5">
            <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-brand-dark" />
              Store Location
            </h3>
            <p className="text-sm text-slate-900 font-bold">{BUSINESS_INFO.address}</p>
            <p className="text-xs text-slate-500 font-medium">We are located on the 5th floor, Suite 4 of Norwich Union, directly opposite Hilton Hotel/Kencom, right in the heart of Nairobi CBD.</p>
          </div>

          {/* Interactive Stylized Map Stage with Trove Branding */}
          <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-200 relative bg-slate-50 flex flex-col justify-end p-4">
            {/* Real Map Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
            <div className="absolute h-10 w-full bg-slate-200 top-1/3 transform -rotate-6"></div>
            <div className="absolute w-12 h-full left-1/2 bg-slate-200 transform rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-brand/20 rounded-full flex items-center justify-center animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 bg-brand rounded-full border-2 border-white shadow-md"></div>
            
            {/* Popup bubble */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-md max-w-xs">
              <p className="text-xs font-bold text-slate-900">📍 {BUSINESS_INFO.name}</p>
              <p className="text-[10px] text-slate-500 mt-0.5 font-medium">{BUSINESS_INFO.address}</p>
            </div>

            <a 
              href={BUSINESS_INFO.mapUrl}
              target="_blank" 
              rel="noreferrer"
              className="relative z-10 w-full flex items-center justify-center gap-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold py-3.5 shadow-md hover:-translate-y-0.5 transition-all text-center cursor-pointer border border-slate-850"
            >
              Get Directions on Google Maps
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Instructions checklist */}
          <div className="space-y-2 text-xs text-slate-600 font-medium">
            <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">What to bring for Repairs:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Your device (with battery charge if possible, to aid immediate diagnostics)</li>
              <li>Your lockscreen passcode (or backup your device beforehand)</li>
              <li>The booking summary slip generated from our website</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
