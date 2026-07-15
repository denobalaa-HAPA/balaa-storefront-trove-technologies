import React, { useState, useEffect } from 'react';
import { ChevronLeft, MessageCircle, ShieldCheck, Truck, RefreshCcw, HelpCircle, ArrowRight, Smartphone, Check } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data';

interface ProductDetailViewProps {
  productId: string;
  onNavigate: (view: string, productId?: string) => void;
}

export default function ProductDetailView({ productId, onNavigate }: ProductDetailViewProps) {
  // Find current product details
  const product = PRODUCTS.find((p) => p.id === productId);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Reset active image when product id changes
  useEffect(() => {
    setActiveImageIdx(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [productId]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center" id="detail-not-found">
        <h2 className="font-display text-2xl font-bold text-slate-900">Product Not Found</h2>
        <p className="text-slate-500 mt-2">The requested device is either out of stock or doesn't exist.</p>
        <button
          onClick={() => onNavigate('shop')}
          className="mt-4 rounded-xl bg-brand hover:bg-[#2DD8E5] px-5 py-2.5 text-sm font-bold text-slate-950 cursor-pointer inline-flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Shop Catalog
        </button>
      </div>
    );
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleBallaaChatOrder = () => {
    const event = new CustomEvent('ballaa_chat_message', { 
      detail: { 
        message: `Hi! I'm interested in purchasing the ${product.name} (KSh ${product.price.toLocaleString()}). Please confirm availability and payment options.` 
      } 
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12" id="product-detail-view">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('shop')}
          className="group flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-dark transition-colors cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Catalog List
        </button>
      </div>

      {/* Main Grid: Left Gallery, Right Specifications & Purchase CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start" id="product-detail-grid">
        
        {/* Left Column: Multi-Image Showcase Gallery */}
        <div className="space-y-4" id="detail-gallery-container">
          {/* Main Visual Display Stage */}
          <div className="aspect-video w-full rounded-2xl bg-slate-100 overflow-hidden border border-slate-150 relative">
            <img
              src={product.images[activeImageIdx]}
              alt={`${product.name} - View ${activeImageIdx + 1}`}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-all duration-300"
            />
            
            {/* Status tags */}
            <span className={`absolute top-4 left-4 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md ${
              product.availability === 'In Stock'
                ? 'bg-emerald-600 text-white'
                : 'bg-amber-500 text-white'
            }`}>
              {product.availability}
            </span>
          </div>

          {/* Thumbnails list (Only if multiple images exist) */}
          {product.images.length > 1 && (
            <div className="flex gap-3" id="gallery-thumbnails">
              {product.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative h-16 w-24 rounded-xl bg-slate-50 overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIdx === idx ? 'border-brand shadow-md scale-95' : 'border-slate-200'
                  }`}
                >
                  <img src={imgUrl} alt="thumbnail" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>


        {/* Right Column: Key Details & Booking Panel */}
        <div className="space-y-6" id="detail-info-container">
          
          {/* Product Header */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-dark block">
              {product.subcategory || product.category}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {product.name}
            </h1>
            
            {/* Price display in KSh */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-3xl font-black text-slate-950">KSh {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-slate-400 line-through">KSh {product.originalPrice.toLocaleString()}</span>
                  <span className="text-xs font-bold text-brand-dark bg-brand/10 px-2 py-0.5 rounded-md">
                    Save KSh {(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Short marketing / high level intro */}
          <div className="border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Immediate WhatsApp Enquiry Action Area with Trove style */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand-dark">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Chat via BALLAA Chat</h4>
                <p className="text-xs text-slate-500 mt-0.5">Send a message to confirm availability, arrange pickup, or get payment options.</p>
              </div>
            </div>

            <button
              onClick={handleBallaaChatOrder}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-4 text-sm font-bold shadow-md shadow-blue-100 transition-all cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" />
              Order Now
            </button>
            
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-500 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span>
                <span>Genuine Products Only</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span>
                <span>Nairobi CBD Store Pick-up</span>
              </div>
            </div>
          </div>

          {/* Local business guarantees info list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100">
              <RefreshCcw className="h-4 w-4 text-brand-dark" />
              <div>
                <p className="font-semibold text-slate-900">Exchange Window</p>
                <p className="text-[10px] text-slate-500 mt-0.5">7-day hassle-free replacement</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100">
              <ShieldCheck className="h-4 w-4 text-brand-dark" />
              <div>
                <p className="font-semibold text-slate-900">Warranty Included</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Full brand &amp; repair backup</p>
              </div>
            </div>
          </div>

        </div>

      </div>


      {/* Specifications Table (Aesthetic Spec-First display) */}
      <section className="bg-white border border-slate-150 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6" id="product-specifications-table">
        <div>
          <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900">Technical Specifications</h2>
          <p className="text-slate-500 text-xs mt-0.5">Verifiable system configurations and hardware metadata.</p>
        </div>

        <div className="border border-slate-100 rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-slate-100">
            <tbody className="divide-y divide-slate-100 bg-white">
              {Object.entries(product.specifications).map(([key, value], idx) => (
                <tr key={key} className={idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                  <td className="w-1/3 px-4 py-3 text-xs font-semibold text-slate-600 font-mono">
                    {key}
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-800">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


      {/* Related Products Discovery Hub with KSh formatting */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6" id="related-products">
          <div>
            <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900">Related Products</h2>
            <p className="text-slate-500 text-xs mt-0.5">Similar premium products in {product.category}.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => onNavigate('product-details', p.id)}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer group flex flex-col"
              >
                <div className="aspect-video w-full bg-slate-100 overflow-hidden relative">
                  <img src={p.images[0]} alt={p.name} referrerPolicy="no-referrer" className="h-full w-full object-cover transition-transform group-hover:scale-103" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900 group-hover:text-brand-dark transition-colors">
                      {p.name}
                    </h3>
                    <ul className="mt-2 space-y-1">
                      {p.specs.slice(0, 2).map((s, i) => (
                        <li key={i} className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                          <span className="h-1.5 w-1.5 bg-brand rounded-full"></span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-sm font-extrabold text-slate-900">KSh {p.price.toLocaleString()}</span>
                    <span className="text-[10px] font-bold text-brand-dark flex items-center gap-0.5 group-hover:underline">
                      View Specs <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
