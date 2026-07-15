import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data';

export default function FAQView() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Start with first item open by default

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-12 pb-12 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-6" id="faq-view">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand-dark mx-auto">
          <HelpCircle className="h-6 w-6" />
        </div>
        <span className="text-xs font-bold text-brand-dark uppercase tracking-wider block">Help Desk &amp; Guidelines</span>
        <h1 className="font-display text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto font-medium">
          Clear answers regarding our professional repair diagnostics, warranty periods, WhatsApp sales processes, and device parts quality.
        </p>
      </div>

      {/* Accordion Slate list */}
      <div className="space-y-4" id="faq-accordion-list">
        {FAQS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'border-brand shadow-md ring-1 ring-brand/10' 
                  : 'border-slate-150 hover:border-slate-300 shadow-sm'
              }`}
              id={`faq-item-${item.id}`}
            >
              {/* Trigger header row */}
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-slate-950 cursor-pointer"
              >
                <span className="text-sm sm:text-base leading-snug">{item.question}</span>
                <span className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
                  isOpen ? 'bg-brand/10 text-brand-dark' : 'bg-slate-50 text-slate-500'
                }`}>
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>

              {/* Revealable content section */}
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 border-t border-slate-50 pt-4 bg-slate-50/50 animate-fadeIn leading-relaxed font-medium">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>


      {/* Still need help support banner */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-850" id="faq-contact-cta">
        <div className="space-y-1.5 text-center sm:text-left">
          <h4 className="font-display font-extrabold text-base text-slate-50">Still have an unanswered question?</h4>
          <p className="text-xs text-slate-400 font-medium">Our customer support is active and available live via WhatsApp for custom hardware enquiries.</p>
        </div>
        
        <a
          href={BUSINESS_INFO.whatsappBaseUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 rounded-xl bg-[#25D366] hover:bg-[#1FB855] text-white text-xs font-bold py-3 px-5 shadow-sm transition-all whitespace-nowrap cursor-pointer border border-[#1FB855]/20"
        >
          <MessageCircle className="h-4 w-4" />
          Ask us on WhatsApp
        </a>
      </div>

    </div>
  );
}
