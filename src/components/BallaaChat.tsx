import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function ContactChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleQuickQuestion = (question: string) => {
    // Route to BALLAA Chat - conversation-first commerce
    const event = new CustomEvent('ballaa_chat_message', { detail: { message: question } });
    window.dispatchEvent(event);
    setIsOpen(false);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMessage.trim()) return;
    const event = new CustomEvent('ballaa_chat_message', { detail: { message: customMessage } });
    window.dispatchEvent(event);
    setCustomMessage('');
    setIsOpen(false);
  };

  return (
<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" id="contact-chat-container">
       {showNotification && !isOpen && (
         <div className="bg-white text-slate-800 shadow-xl border border-slate-100 rounded-2xl p-4 max-w-xs animate-bounce flex gap-3 relative mr-2" id="contact-chat-toast">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowNotification(false);
            }} 
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900">Need help?</p>
            <p className="text-xs text-slate-500 mt-0.5">Send us a message for orders, bookings, or inquiries.</p>
            <button 
              onClick={() => {
                setIsOpen(true);
                setShowNotification(false);
              }}
              className="text-xs text-blue-600 font-bold hover:underline block mt-1.5"
            >
              Start chat
            </button>
          </div>
        </div>
      )}

{isOpen && (
         <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-80 md:w-96 flex flex-col overflow-hidden max-h-[500px]" id="contact-chat-box">
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-display font-bold text-lg">
                  {BUSINESS_INFO.name.charAt(0)}
                </div>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-blue-600"></div>
              </div>
              <div>
                <h4 className="text-sm font-semibold leading-none">{BUSINESS_INFO.name} Support</h4>
                <p className="text-[11px] text-blue-100 mt-1 flex items-center gap-1">
                  <Check className="h-3 w-3" /> Typically replies within minutes
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 hover:bg-white/10 text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 bg-slate-50 space-y-4 overflow-y-auto flex-1 max-h-[280px]">
            <div className="bg-white rounded-2xl p-3 text-xs text-slate-700 shadow-sm border border-slate-100 max-w-[85%]">
              Hello! 👋 Welcome to {BUSINESS_INFO.name}. How can we help you today?
              <p className="text-[9px] text-slate-400 text-right mt-1">Just now</p>
            </div>

            <div className="space-y-1.5 pt-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1">Quick actions:</p>
              
              <button 
                onClick={() => handleQuickQuestion("Hi, I'd like to enquire about product availability and pricing.")}
                className="w-full text-left bg-blue-50 hover:bg-blue-100/80 text-blue-800 text-xs py-2 px-3 rounded-xl border border-blue-100/50 transition-colors block font-medium"
              >
                🛍️ Product Inquiry
              </button>
              
              <button 
                onClick={() => handleQuickQuestion("Hello, I need to book a repair service. Can you help me?")}
                className="w-full text-left bg-blue-50 hover:bg-blue-100/80 text-blue-800 text-xs py-2 px-3 rounded-xl border border-blue-100/50 transition-colors block font-medium"
              >
                🔧 Book Repair
              </button>
              
              <button 
                onClick={() => handleQuickQuestion("Hi, I want to book an appointment. What slots are available?")}
                className="w-full text-left bg-blue-50 hover:bg-blue-100/80 text-blue-800 text-xs py-2 px-3 rounded-xl border border-blue-100/50 transition-colors block font-medium"
              >
                📅 Book Appointment
              </button>
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 bg-white flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="flex-1 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:border-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-2 flex items-center justify-center transition-colors shadow-md shadow-blue-100 cursor-pointer"
              title="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        id="ballaa-chat-button"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-95 transition-all duration-200 cursor-pointer"
aria-label="Contact us"
       >
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
}