import React, { useState } from 'react';
import { Configuration, Service, Product, Review, Booking } from '../types';

interface PublicWebsiteProps {
  config: Configuration;
  services: Service[];
  products: Product[];
  reviews: Review[];
  bookings: Booking[];
  onAddBooking: (booking: Booking) => void;
  onTrackEvent: (eventType: string, payload?: any) => void;
}

export default function PublicWebsite({
  config,
  services,
  products,
  reviews,
  bookings,
  onAddBooking,
  onTrackEvent
}: PublicWebsiteProps) {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  // Form state
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  const branding = config.branding;
  const capabilities = config.capabilities;

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;

    const newBooking: Booking = {
      id: `b-${Date.now()}`,
      serviceName: selectedService.name,
      customerName,
      customerEmail,
      customerPhone,
      date: bookingDate,
      timeSlot: bookingTime,
      price: selectedService.price
    };

    onAddBooking(newBooking);
    setSelectedService(null);
    
    // Clear fields
    setCustomerName('');
    setCustomerEmail('');
    setCustomerPhone('');
    setBookingDate('');
    setBookingTime('');
    
    alert(`Success! Your appointment for ${selectedService.name} has been booked.`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header Cover Banner */}
      <div style={{ 
        height: '300px', 
        background: branding.coverImageUrl 
          ? `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.9)), url(${branding.coverImageUrl}) center/cover no-repeat`
          : 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '2rem 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {branding.logoUrl && (
            <img 
              src={branding.logoUrl} 
              alt={branding.businessName} 
              style={{ width: '80px', height: '80px', borderRadius: '50%', border: '3px solid #ffffff', objectFit: 'cover' }} 
            />
          )}
          <div>
            <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              {branding.businessName}
            </h1>
            <p style={{ margin: '0.25rem 0 0 0', opacity: 0.9, fontSize: '1.1rem' }}>
              Stateless Configuration-Driven Storefront
            </p>
          </div>
        </div>
      </div>

      {/* Navigation tabs bar */}
      <div className="glass" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: '1rem', padding: '0.5rem 1rem' }}>
          <button 
            style={{ 
              background: activeTab === 'home' ? 'var(--color-primary)' : 'transparent',
              color: '#ffffff',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--border-radius-btn)',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => { setActiveTab('home'); onTrackEvent('tab_view', { tab: 'home' }); }}
          >
            Home
          </button>
          
          {(capabilities.includes('booking') || capabilities.includes('services')) && (
            <button 
              style={{ 
                background: activeTab === 'services' ? 'var(--color-primary)' : 'transparent',
                color: '#ffffff',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--border-radius-btn)',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => { setActiveTab('services'); onTrackEvent('tab_view', { tab: 'services' }); }}
            >
              Services & Booking
            </button>
          )}

          {(capabilities.includes('products') || capabilities.includes('catalog')) && (
            <button 
              style={{ 
                background: activeTab === 'products' ? 'var(--color-primary)' : 'transparent',
                color: '#ffffff',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--border-radius-btn)',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => { setActiveTab('products'); onTrackEvent('tab_view', { tab: 'products' }); }}
            >
              Shop Products
            </button>
          )}
        </div>
      </div>

      {/* Main Body Grid */}
      <main className="container" style={{ flex: 1, padding: '2rem 1rem' }}>
        
        {/* Tab 1: Home page */}
        {activeTab === 'home' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div className="card">
              <h2>Welcome to {branding.businessName}</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Experience Nairobi's premium local businesses powered by BALLAA Operating System.
                All features, themes, and modules are served dynamically based on verified vendor custom claims identity metadata.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div className="card">
                <h3>Our Capabilities</h3>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                  {capabilities.map(cap => (
                    <li key={cap} style={{ textTransform: 'capitalize' }}>{cap.replace('-', ' ')} enabled</li>
                  ))}
                </ul>
              </div>

              {bookings.length > 0 && (
                <div className="card">
                  <h3>Recent Bookings</h3>
                  <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
                    {bookings.map(b => (
                      <div key={b.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                        <strong>{b.serviceName}</strong>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                          {b.customerName} - {b.date} at {b.timeSlot}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Services / Booking List */}
        {activeTab === 'services' && (
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Available Services</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {services.length === 0 ? (
                <p style={{ color: 'var(--color-text-secondary)' }}>No active services listed at the moment.</p>
              ) : (
                services.map(service => (
                  <div key={service.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.5rem 0' }}>{service.name}</h3>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Duration: {service.duration_minutes} mins</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>KES {service.price}</span>
                      {capabilities.includes('booking') && (
                        <button className="btn-primary" onClick={() => { setSelectedService(service); onTrackEvent('booking_started', { service_id: service.id }); }}>
                          Book Now
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Products Catalog Grid */}
        {activeTab === 'products' && (
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Product Catalog</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {products.length === 0 ? (
                <p style={{ color: 'var(--color-text-secondary)' }}>No products in stock at the moment.</p>
              ) : (
                products.map(product => (
                  <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {product.image_url ? (
                      <img src={product.image_url} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                    ) : (
                      <div style={{ width: '100%', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)' }}>No Image</div>
                    )}
                    <div>
                      <h3 style={{ margin: 0 }}>{product.name}</h3>
                      {product.description && <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>{product.description}</p>}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>KES {product.price}</span>
                      <button className="btn-primary" onClick={() => { onTrackEvent('product_inquiry', { product_id: product.id }); alert('Inquiry sent via BALLAA network!'); }}>Inquire</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

      </main>

      {/* Booking Form Modal Overlay */}
      {selectedService && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          background: 'rgba(15, 23, 42, 0.85)', display: 'flex', 
          justifyContent: 'center', alignItems: 'center', zIndex: 100 
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '450px', position: 'relative' }}>
            <h3 style={{ margin: '0 0 1.5rem 0' }}>Book {selectedService.name}</h3>
            
            <form onSubmit={handleBookSubmit} style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Full Name</label>
                <input required type="text" value={customerName} onChange={e => setCustomerName(e.target.value)} style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Email Address</label>
                <input required type="email" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Phone Number</label>
                <input required type="tel" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Date</label>
                  <input required type="date" value={bookingDate} onChange={e => setBookingDate(e.target.value)} style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Time</label>
                  <input required type="time" value={bookingTime} onChange={e => setBookingTime(e.target.value)} style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff' }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" className="btn-primary" style={{ background: '#475569', boxShadow: 'none', flex: 1 }} onClick={() => setSelectedService(null)}>Cancel</button>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="glass" style={{ marginTop: 'auto', padding: '1.5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <span>© 2026 {branding.businessName}. All rights reserved.</span>
          <span>Powered by BALLAA Studio Networks</span>
        </div>
      </footer>
    </div>
  );
}
