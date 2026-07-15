import React, { useState, useEffect } from 'react';
import { Configuration, Service, Product, Review, Booking } from './types';
import PublicWebsite from './components/PublicWebsite';

const FALLBACK_THEME = {
  primaryColor: '#ec4899',
  secondaryColor: '#f43f5e',
  backgroundColor: '#0f172a',
  surfaceColor: '#1e293b',
  textColor: '#f8fafc',
  borderRadiusButton: '8px',
  borderRadiusCard: '16px'
};

export default function App() {
  const [config, setConfig] = useState<Configuration | null>(null);
  const [vendorId, setVendorId] = useState<string>('');
  const [services, setServices] = useState<Service[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 1. Resolve configuration from Hostname / Referer
  useEffect(() => {
    const resolveConfiguration = async () => {
      setLoading(true);
      try {
        const domain = window.location.hostname;
        const res = await fetch(`/api/v1/public/configuration?domain=${domain}`);
        if (!res.ok) {
          throw new Error(`Failed to resolve configuration: ${res.statusText}`);
        }
        
        const payload = await res.json();
        if (payload.success && payload.data) {
          const fetchedConfig = payload.data as Configuration;
          const vId = payload.meta?.vendorId || '';
          
          setConfig(fetchedConfig);
          setVendorId(vId);
          
          // Apply configuration styling to CSS Custom Properties dynamically!
          const theme = fetchedConfig.theme || FALLBACK_THEME;
          const root = document.documentElement;
          root.style.setProperty('--color-primary', theme.primaryColor || FALLBACK_THEME.primaryColor);
          root.style.setProperty('--color-secondary', theme.secondaryColor || FALLBACK_THEME.secondaryColor);
          root.style.setProperty('--color-bg-base', theme.backgroundColor || FALLBACK_THEME.backgroundColor);
          root.style.setProperty('--color-bg-surface', theme.surfaceColor || FALLBACK_THEME.surfaceColor);
          root.style.setProperty('--color-text-primary', theme.textColor || FALLBACK_THEME.textColor);
          root.style.setProperty('--border-radius-btn', theme.borderRadiusButton || FALLBACK_THEME.borderRadiusButton);
          root.style.setProperty('--border-radius-card', theme.borderRadiusCard || FALLBACK_THEME.borderRadiusCard);
        } else {
          throw new Error(payload.error?.message || 'Resolution failed');
        }
      } catch (err: any) {
        console.error('Configuration resolution failure:', err);
        setError(err.message || 'Unable to connect to BALLAA core configuration engine');
      } finally {
        setLoading(false);
      }
    };

    resolveConfiguration();
  }, []);

  // 2. Fetch business data once vendor context is resolved
  useEffect(() => {
    if (!vendorId) return;

    const fetchBusinessData = async () => {
      try {
        // Fetch services if enabled
        if (config?.capabilities.includes('booking') || config?.capabilities.includes('services')) {
          const sRes = await fetch(`/api/v1/public/services?vendorId=${vendorId}`);
          if (sRes.ok) {
            const data = await sRes.json();
            setServices(Array.isArray(data) ? data : []);
          }
        }
        
        // Fetch products if enabled
        if (config?.capabilities.includes('products') || config?.capabilities.includes('catalog')) {
          const pRes = await fetch(`/api/products/vendor/${vendorId}`);
          if (pRes.ok) {
            const data = await pRes.json();
            setProducts(Array.isArray(data) ? data : []);
          }
        }
      } catch (e) {
        console.warn('Failed to load business module data:', e);
      }
    };

    fetchBusinessData();
  }, [vendorId, config]);

  // Analytics helper
  const trackAnalytics = async (eventType: string, payload?: any) => {
    if (!vendorId) return;
    try {
      await fetch('/api/v1/analytics/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vendor_id: vendorId,
          event_type: eventType,
          payload
        })
      });
    } catch (err) {
      console.warn('Analytics logging failed:', err);
    }
  };

  const handleAddBooking = async (newBooking: Booking) => {
    setBookings(prev => [newBooking, ...prev]);
    await trackAnalytics('booking_completed', { 
      service: newBooking.serviceName,
      price: newBooking.price 
    });
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
        <div className="spinner"></div>
        <p style={{ marginTop: '1rem', color: 'var(--color-text-secondary)' }}>Loading storefront environment...</p>
      </div>
    );
  }

  if (error || !config) {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#ef4444' }}>Storefront Configuration Error</h2>
        <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px' }}>{error || 'No active configuration found for this web address.'}</p>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => window.location.reload()}>Retry Connection</button>
      </div>
    );
  }

  return (
    <PublicWebsite
      config={config}
      services={services}
      products={products}
      reviews={reviews}
      bookings={bookings}
      onAddBooking={handleAddBooking}
      onTrackEvent={trackAnalytics}
    />
  );
}
