export interface Service {
  id: string;
  vendor_id: string;
  name: string;
  duration_minutes: number;
  price: number;
  is_active: boolean;
  description?: string;
}

export interface Product {
  id: string;
  vendor_id: string;
  name: string;
  price: number;
  description?: string;
  image_url?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  serviceName?: string;
}

export interface Booking {
  id: string;
  serviceName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  timeSlot: string;
  price: number;
}

export interface Branding {
  businessName: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  coverImageUrl?: string;
}

export interface ThemePreset {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  surfaceColor: string;
  textColor: string;
  borderRadiusButton: string;
  borderRadiusCard: string;
}

export interface Configuration {
  id: string;
  version: string;
  branding: Branding;
  theme: ThemePreset;
  capabilities: string[];
  permissions?: Record<string, string[]>;
  aiCapabilities?: Record<string, boolean>;
  hardware?: Record<string, any>;
  syncPolicy?: Record<string, any>;
  localization?: {
    defaultLanguage: string;
    currency: string;
    timezone: string;
  };
}
