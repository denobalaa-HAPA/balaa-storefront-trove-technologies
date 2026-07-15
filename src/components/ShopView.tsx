import React, { useState } from 'react';
import { Search, SlidersHorizontal, MessageCircle, Info, ChevronRight, RefreshCw, Smartphone, Laptop, Tv, Headphones } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface ShopViewProps {
  onNavigate: (view: string, productId?: string) => void;
  initialCategory?: string;
}

export default function ShopView({ onNavigate, initialCategory = 'All' }: ShopViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', 'Phones', 'Laptops', 'TVs', 'Accessories'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Phones': return <Smartphone className="h-4 w-4" />;
      case 'Laptops': return <Laptop className="h-4 w-4" />;
      case 'TVs': return <Tv className="h-4 w-4" />;
      case 'Accessories': return <Headphones className="h-4 w-4" />;
      default: return null;
    }
  };

  // Filter and sort catalog products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (product.subcategory && product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name-az') return a.name.localeCompare(b.name);
    return 0; // 'featured' keeps original list order
  });

  const handleProductEnquiry = (productName: string) => {
    const event = new CustomEvent('ballaa_chat_message', { 
      detail: { 
        message: `Hi! I'd like to check availability and enquire about purchasing the "${productName}". Please let me know if it's in stock!` 
      } 
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="space-y-8 pb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6" id="shop-view">
      
      {/* Page Header */}
      <div>
        <span className="text-xs font-bold text-brand-dark uppercase tracking-wider block mb-1">Authentic Tech Inventory</span>
        <h1 className="font-display text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
          Browse Our Catalog
        </h1>
<p className="text-slate-500 text-sm mt-1">
           Explore our certified hardware inventory. Chat with us for product availability and orders.
         </p>
      </div>

      {/* Advanced Filters Bar */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between bg-white border border-slate-100 rounded-2xl p-4 shadow-sm" id="shop-filters-bar">
        
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search phones, specs (e.g. AMOLED, 16GB, M3)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-dark focus:bg-white transition-all font-medium"
          />
        </div>

        {/* Categories (Desktop buttons, Mobile swiper) */}
        <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none" id="category-selector">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-brand text-slate-950 shadow-md shadow-brand/10'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        {/* Sorting option */}
        <div className="flex items-center gap-2 border-t border-slate-50 pt-3 lg:pt-0 lg:border-t-0" id="sort-selector-container">
          <SlidersHorizontal className="h-4 w-4 text-slate-400 flex-shrink-0" />
          <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 py-2.5 px-3 focus:outline-none focus:border-brand-dark cursor-pointer"
          >
            <option value="featured">Featured Inventory</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-az">Name: A to Z</option>
          </select>
        </div>

      </div>

      {/* Catalog Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="products-catalog-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onNavigate('product-details', product.id)}
              className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer flex flex-col"
              id={`product-card-${product.id}`}
            >
              {/* Product Image Panel */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-350 group-hover:scale-105"
                />
                
                {/* Stock Tag Badge */}
                <span className={`absolute top-3 left-3 px-2 py-1 text-[9px] font-bold uppercase tracking-wider rounded-lg shadow-sm ${
                  product.availability === 'In Stock' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : product.availability === 'Limited Stock'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.availability}
                </span>

                {product.originalPrice && (
                  <span className="absolute top-3 right-3 px-2 py-1 text-[9px] font-extrabold bg-brand text-slate-950 rounded-lg shadow-sm">
                    Sale
                  </span>
                )}
              </div>

              {/* Product Details Section */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark block mb-0.5">
                    {product.subcategory || product.category}
                  </span>
                  
                  <h3 className="font-display font-extrabold text-base text-slate-950 group-hover:text-brand-dark transition-colors leading-snug">
                    {product.name}
                  </h3>

                  {/* Bullet Spec Sheet (NO MARKETING TEXT) */}
                  <div className="mt-2.5 py-2 px-3 bg-slate-50/50 border border-slate-100 rounded-xl">
                    <ul className="space-y-1">
                      {product.specs.map((spec, index) => (
                        <li key={index} className="text-xs text-slate-600 flex items-center gap-1.5 font-mono">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0"></span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price & Call Actions in KSh */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    {product.originalPrice ? (
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 line-through">KSh {product.originalPrice.toLocaleString()}</span>
                        <span className="text-base font-black text-slate-950 -mt-0.5">KSh {product.price.toLocaleString()}</span>
                      </div>
                    ) : (
                      <span className="text-base font-black text-slate-950 block">KSh {product.price.toLocaleString()}</span>
                    )}
                  </div>

                  <div className="flex gap-1.5">
<button
                       onClick={(e) => {
                         e.stopPropagation();
                         handleProductEnquiry(product.name);
                       }}
                       className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white p-2.5 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-sm"
                       title="Chat via BALLAA Chat"
                     >
                       <MessageCircle className="h-4 w-4" />
                       <span className="hidden xs:inline">Chat</span>
                     </button>
                    
                    <button
                      className="rounded-xl bg-slate-900 text-white p-2.5 text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center border border-slate-800"
                      title="Details"
                    >
                      <Info className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty Search Results */
        <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center max-w-md mx-auto" id="shop-empty-state">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-400 mx-auto mb-4">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-900">No products match your query</h3>
          <p className="text-slate-500 text-sm mt-1">We couldn't find any products in "{selectedCategory}" matching your keywords. Try checking spelling or search for alternative specifications.</p>
          
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-4 rounded-xl bg-brand hover:bg-[#2DD8E5] px-4 py-2.5 text-xs font-bold text-slate-950 cursor-pointer flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Reset All Filters
          </button>
        </div>
      )}

    </div>
  );
}
