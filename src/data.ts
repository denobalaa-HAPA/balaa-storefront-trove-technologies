import { Product, RepairService, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: "Trove Technologies",
  phone: "+254700000000",
  formattedPhone: "+254 700 000 000",
  address: "Norwich Union Building, 5th Floor, Suite 4, Nairobi",
  mapUrl: "https://maps.google.com/?q=Norwich+Union+Building+Nairobi",
  hours: [
    { days: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
    { days: "Saturday", time: "9:00 AM - 5:00 PM" },
    { days: "Sunday", time: "10:00 AM - 3:00 PM" }
  ]
};

export const PRODUCTS: Product[] = [
  {
    id: "samsung-a56",
    name: "Samsung Galaxy A56",
    category: "Phones",
    subcategory: "Android Phones",
    price: 44999,
    originalPrice: 49999,
    availability: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
    ],
    specs: [
      "6.7\" AMOLED Display",
      "8GB RAM",
      "256GB Storage",
      "50MP Main Camera",
      "5000mAh Battery"
    ],
    description: "The Samsung Galaxy A56 offers incredible performance and a stunning display at an accessible price. Capture bright photos with the high-resolution 50MP triple-lens system and power through two days of use with the massive battery. Experience super smooth scrolling and vivid colors with the 120Hz Super AMOLED panel.",
    specifications: {
      "Display": "6.7-inch FHD+ Super AMOLED, 120Hz refresh rate, 1000 nits brightness",
      "Processor": "Exynos 1480 Octa-Core",
      "RAM": "8GB LPDDR5",
      "Storage": "256GB (Expandable up to 1TB via MicroSD)",
      "Rear Camera": "50MP Main (OIS) + 12MP Ultra-wide + 5MP Macro",
      "Front Camera": "32MP Selfie Camera",
      "Battery": "5000mAh with 25W Fast Charging support",
      "OS": "Android 14 with One UI 6.1",
      "Water Resistance": "IP67 dust/water resistant",
      "Security": "In-display fingerprint sensor, Samsung Knox"
    }
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    category: "Phones",
    subcategory: "Apple iPhones",
    price: 139999,
    originalPrice: 149999,
    availability: "Limited Stock",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565849906461-0e443307583e?auto=format&fit=crop&w=600&q=80"
    ],
    specs: [
      "6.1\" Super Retina XDR",
      "A17 Pro Titanium Chip",
      "128GB High-Speed Storage",
      "48MP Triple Camera system",
      "USB-C 3.0 Support"
    ],
    description: "Forged in titanium, the iPhone 15 Pro features the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever. The premium brushed titanium finish is both stronger and lighter than stainless steel, making this the best-handling Pro model yet.",
    specifications: {
      "Display": "6.1-inch Super Retina XDR OLED, 120Hz ProMotion, Always-On",
      "Processor": "A17 Pro chip with 6-core GPU",
      "RAM": "8GB",
      "Storage": "128GB",
      "Rear Camera": "48MP Main + 12MP Ultra-Wide + 12MP 3x Telephoto",
      "Front Camera": "12MP TrueDepth with FaceID",
      "Battery": "Up to 23 hours video playback, 20W Fast Charging",
      "OS": "iOS 17 (upgradable to iOS 18)",
      "Build": "Titanium design, Ceramic Shield front, textured matte glass back",
      "Weight": "187g"
    }
  },
  {
    id: "pixel-8-pro",
    name: "Google Pixel 8 Pro",
    category: "Phones",
    subcategory: "Android Phones",
    price: 89999,
    originalPrice: 99999,
    availability: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
    ],
    specs: [
      "6.7\" Super Actua Display",
      "Google Tensor G3 Chip",
      "12GB RAM",
      "128GB Storage",
      "Best-in-class AI Camera"
    ],
    description: "The all-pro phone engineered by Google. It has the Google Tensor G3 chip, which is custom-designed with Google AI for cutting-edge photo and video features and smarter ways to help throughout the day. The beautiful polished aluminum frame and matte back glass provide a premium look and feel.",
    specifications: {
      "Display": "6.7-inch Super Actua LTPO OLED, 120Hz, Gorilla Glass Victus 2",
      "Processor": "Google Tensor G3 with Titan M2 security coprocessor",
      "RAM": "12GB LPDDR5X",
      "Storage": "128GB UFS 3.1",
      "Rear Camera": "50MP Octa PD Wide + 48MP Quad PD Ultra-wide + 48MP 5x Telephoto",
      "Front Camera": "10.5MP Dual PD",
      "Battery": "5050mAh, 30W Fast Charging, Wireless Charging",
      "OS": "Android 14 with 7 years of OS updates"
    }
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air 13\" M3",
    category: "Laptops",
    subcategory: "Apple Laptops",
    price: 164999,
    originalPrice: 174999,
    availability: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80"
    ],
    specs: [
      "Apple M3 8-Core CPU",
      "8GB Unified Memory",
      "256GB Superfast SSD",
      "13.6\" Liquid Retina",
      "Up to 18 Hours Battery"
    ],
    description: "The incredibly thin MacBook Air flies through work and play with the M3 chip. Built for Apple Intelligence, this powerful laptop has an ultraportable, fanless design that delivers incredible speed and up to 18 hours of battery life to keep you productive anywhere.",
    specifications: {
      "Display": "13.6-inch Liquid Retina display with True Tone, 500 nits brightness",
      "Processor": "Apple M3 Chip (8-Core CPU, 10-Core GPU)",
      "Memory": "8GB Unified Memory (Configurable)",
      "Storage": "256GB SSD",
      "Keyboard": "Backlit Magic Keyboard with Touch ID",
      "Wireless": "Wi-Fi 6E (802.11ax), Bluetooth 5.3",
      "Ports": "2x Thunderbolt / USB 4 ports, MagSafe 3 charging, headphone jack",
      "Battery": "Up to 18 hours Apple TV app movie playback",
      "Weight": "1.24 kg (2.7 pounds)"
    }
  },
  {
    id: "dell-xps-15",
    name: "Dell XPS 15 9530",
    category: "Laptops",
    subcategory: "Windows Laptops",
    price: 229999,
    originalPrice: 249999,
    availability: "Limited Stock",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80"
    ],
    specs: [
      "Intel Core i7-13700H",
      "16GB DDR5 RAM",
      "512GB NVMe SSD",
      "RTX 4050 6GB Graphics",
      "15.6\" FHD+ Display"
    ],
    description: "The Dell XPS 15 is the ultimate balance of power and portability. Experience stellar performance with the 13th Gen Intel Core i7 processor and dedicated NVIDIA GeForce RTX 4050 graphics. Housed in a precision CNC aluminum chassis with a luxurious carbon fiber palm rest.",
    specifications: {
      "Display": "15.6-inch FHD+ (1920 x 1200) InfinityEdge, Non-Touch, 500 nits",
      "Processor": "13th Gen Intel Core i7-13700H (14-Cores, up to 5.00 GHz)",
      "RAM": "16GB (2 x 8GB) DDR5 4800MHz",
      "Storage": "512GB PCIe NVMe M.2 SSD",
      "Graphics": "NVIDIA GeForce RTX 4050 6GB GDDR6",
      "OS": "Windows 11 Home",
      "Battery": "86Whr Integrated Battery",
      "Keyboard": "Full-size Backlit Keyboard, Fingerprint Reader"
    }
  },
  {
    id: "lg-c3-oled",
    name: "LG OLED evo C3 65\"",
    category: "TVs",
    subcategory: "Smart TVs",
    price: 214999,
    originalPrice: 234999,
    availability: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601944129201-097ab254d3d2?auto=format&fit=crop&w=600&q=80"
    ],
    specs: [
      "65\" 4K Self-Lit OLED",
      "α9 AI Processor Gen6",
      "120Hz Refresh Rate",
      "Dolby Vision & Atmos",
      "4x HDMI 2.1 Ports"
    ],
    description: "The LG OLED evo C3 represents the pinnacle of home entertainment. Powered by self-lit pixels that produce infinite contrast and perfect blacks, paired with LG's most advanced Alpha 9 Gen6 AI processor. Perfect for premium cinema viewing and next-gen gaming with standard HDMI 2.1 on all ports.",
    specifications: {
      "Display Type": "Self-lit OLED 4K Display",
      "Resolution": "Ultra HD (3,840 x 2,160)",
      "Refresh Rate": "120Hz Native",
      "AI Processor": "α9 AI Processor 4K Gen6",
      "HDR": "Dolby Vision / HDR10 / HLG",
      "Gaming Features": "G-Sync Compatible, FreeSync, VRR, ALLM, 0.1ms response time",
      "Audio": "2.2 Channel 40W, Dolby Atmos, AI Sound Pro",
      "Smart TV Platform": "webOS 23 with ThinQ AI and hands-free voice control",
      "HDMI Ports": "4x HDMI 2.1 (supports 4K 120Hz, eARC)"
    }
  },
  {
    id: "sony-bravia-55",
    name: "Sony BRAVIA XR 55\"",
    category: "TVs",
    subcategory: "Smart TVs",
    price: 114999,
    availability: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
    ],
    specs: [
      "55\" 4K Full Array LED",
      "Cognitive Processor XR",
      "Google TV Built-in",
      "Perfect for PS5",
      "Dolby Vision HDR"
    ],
    description: "Bring the theater home with the Sony BRAVIA XR Full Array LED smart TV. The revolutionary Cognitive Processor XR understands how humans see and hear to deliver a picture with deep contrast, high peak brightness, and natural colors. Integrated perfectly with Google TV.",
    specifications: {
      "Display Type": "Full Array LED LCD",
      "Resolution": "4K Ultra HD (3,840 x 2,160)",
      "Processor": "Cognitive Processor XR",
      "Smart TV": "Google TV with Google Assistant",
      "Gaming": "Auto HDR Tone Mapping & Auto Genre Picture Mode for PS5",
      "Audio": "Acoustic Multi-Audio, Dolby Atmos support",
      "HDMI Ports": "4 (including 2 with HDMI 2.1 4K120/VRR/ALLM)"
    }
  },
  {
    id: "airpods-pro-2",
    name: "Apple AirPods Pro (2nd Gen)",
    category: "Accessories",
    subcategory: "Audio Accessories",
    price: 34999,
    originalPrice: 38999,
    availability: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1588449668338-de1348242452?auto=format&fit=crop&w=600&q=80"
    ],
    specs: [
      "Adaptive Audio Mode",
      "Up to 2x Active Noise Cancelling",
      "USB-C Charging Case (MagSafe)",
      "Custom Spatial Audio",
      "6 Hours Battery on single charge"
    ],
    description: "AirPods Pro have been re-engineered for even richer audio experiences. Next-level Active Noise Cancellation and Adaptive Transparency reduce more external noise. Spatial Audio takes immersion to a remarkably personal level. Touch control now lets you adjust volume with a swipe.",
    specifications: {
      "Chip": "Apple H2 headphone chip, Apple U1 chip in MagSafe charging case",
      "Sweat & Water Resistance": "IP54 dust, sweat, and water resistant (AirPods and case)",
      "Connectivity": "Bluetooth 5.3 wireless technology",
      "Battery Life": "Up to 6 hours of listening time on a single charge",
      "Charging Case": "Works with USB-C, MagSafe charger, Apple Watch charger, or Qi-certified chargers",
      "Sensors": "Dual beamforming microphones, inward-facing microphone, skin-detect sensor"
    }
  },
  {
    id: "anker-65w-gan",
    name: "Anker Prime 65W GaN Charger",
    category: "Accessories",
    subcategory: "Power Accessories",
    price: 6499,
    originalPrice: 7499,
    availability: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80"
    ],
    specs: [
      "65W Ultra Fast Power Delivery",
      "3-Port Charging (2 USB-C, 1 USB-A)",
      "GaNPrime Compact Technology",
      "ActiveShield 2.0 Temp Control",
      "Universal Phone & Laptop support"
    ],
    description: "Power up to three devices at once from a single, pocket-sized wall adapter. Packed with Anker's most advanced GaNPrime technology, offering ultra-safe temperature monitoring and exceptional charging efficiency.",
    specifications: {
      "Total Wattage": "65W Max Output",
      "Ports": "2x USB-C, 1x USB-A",
      "Input Voltage": "100V - 240V",
      "Safety Features": "ActiveShield 2.0 Real-time temperature defense",
      "Compatibility": "MacBook Air, iPad, iPhone, Samsung Galaxy, Steam Deck, and more"
    }
  },
  {
    id: "mx-master-3s",
    name: "Logitech MX Master 3S",
    category: "Accessories",
    subcategory: "Computer Accessories",
    price: 14999,
    availability: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80"
    ],
    specs: [
      "8,000 DPI Any-Surface Tracking",
      "Quiet Click Buttons (90% Quieter)",
      "MagSpeed Electromagnetic Scroll",
      "Multi-OS Connection (Up to 3)",
      "USB-C Fast Rechargeable"
    ],
    description: "An icon remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass sensor. Sculpted for ergonomic hand support.",
    specifications: {
      "Sensor Technology": "Darkfield high precision, Nominal value: 1000 DPI (settable up to 8000 DPI)",
      "Buttons": "7 buttons (Left/Right-click, Back/Forward, App-Switch, Wheel mode-shift, Middle click)",
      "Battery": "Rechargeable Li-Po (500 mAh) battery. Get three hours of use from a one-minute quick charge.",
      "Wireless Tech": "Logi Bolt USB Receiver, Bluetooth Low Energy"
    }
  },
  {
    id: "hdmi-cable-21",
    name: "Belkin Ultra High Speed HDMI 2.1",
    category: "Accessories",
    subcategory: "TV Accessories",
    price: 3499,
    availability: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
    ],
    specs: [
      "HDMI 2.1 Standard",
      "Supports 8K @ 60Hz / 4K @ 120Hz",
      "48Gbps High Bandwidth",
      "Dolby Vision & eARC Compatible",
      "2-Meter Braided Durable Cable"
    ],
    description: "Maximize your smart TV and next-generation gaming console's performance. Supports higher video resolutions and refresh rates, including 8K/60Hz and 4K/120Hz, with a total bandwidth capability of 48Gbps.",
    specifications: {
      "Length": "2 meters (6.6 feet)",
      "Bandwidth": "48Gbps",
      "HDMI Version": "HDMI 2.1",
      "Video Support": "8K @ 60Hz, 4K @ 120Hz, Dynamic HDR, VRR, ALLM, QFT",
      "Audio Support": "Enhanced Audio Return Channel (eARC), Dolby Atmos, DTS:X"
    }
  }
];

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: "screen-replacement",
    title: "Screen Replacement",
    description: "Fix cracked, shattered, black, blinking or unresponsive displays. We use top-tier OEM screens that retain perfect touch sensitivity and original high-fidelity color profiles.",
    estimatedTime: "1 - 2 Hours",
    startingPrice: "KSh 4,500"
  },
  {
    id: "battery-replacement",
    title: "Battery Replacement",
    description: "Is your phone dying fast, heating up, or shutting down randomly? Get a premium brand-new safety-certified battery replacement to restore 100% health and peak performance.",
    estimatedTime: "30 - 45 Minutes",
    startingPrice: "KSh 2,500"
  },
  {
    id: "charging-port-repair",
    title: "Charging Port Repair",
    description: "Fix loose USB-C/Lightning connections, static crackles while plugging in, or a device that refuses to take charge. We replace or deeply clean damaged charge ports.",
    estimatedTime: "1 Hour",
    startingPrice: "KSh 1,800"
  },
  {
    id: "camera-repair",
    title: "Camera Repair",
    description: "Solve broken lens glass, pitch-black image feeds, fuzzy focus, or shaking optical image stabilization (OIS) sounds with precision replacement camera hardware.",
    estimatedTime: "1 - 2 Hours",
    startingPrice: "KSh 3,500"
  },
  {
    id: "water-damage",
    title: "Water Damage Assessment",
    description: "Dropped your device in water? We run a full ultrasound clean, microscopic board inspection, and safe humidity extraction process to recover vital data and functionality.",
    estimatedTime: "24 - 48 Hours",
    startingPrice: "KSh 1,500"
  },
  {
    id: "software-repair",
    title: "Software Repair",
    description: "Stuck on boot loop logo, failed updates, lock screen recovery lockouts, or looking to restore corrupt system files securely on Android or iOS.",
    estimatedTime: "1 - 3 Hours",
    startingPrice: "KSh 1,500"
  },
  {
    id: "speaker-mic-repair",
    title: "Speaker & Microphone Repair",
    description: "Cannot hear callers, crackly ringtones, or others reporting you sound 'muffled' or underwater? We replace internal sound modules and clear acoustic meshes.",
    estimatedTime: "1 Hour",
    startingPrice: "KSh 1,800"
  },
  {
    id: "back-glass",
    title: "Back Glass Replacement",
    description: "We use standard laser-guided back glass extraction systems to cleanly strip cracked rear panels on modern devices, fitting flawless dust-tight replacements.",
    estimatedTime: "2 - 3 Hours",
    startingPrice: "KSh 3,500"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do your phone repairs come with a warranty?",
    answer: "Absolutely. We offer a comprehensive 90-day warranty on all repair services. If the replaced part malfunctions under normal usage conditions, we will fix it or replace it free of charge."
  },
  {
    id: "faq-2",
    question: "How long does a standard phone screen or battery repair take?",
    answer: "Most screen and battery replacements are completed within 30 to 90 minutes. You are welcome to wait in our comfortable lounge with free Wi-Fi, or drop it off at Norwich Union 5th Floor and pick it up later in the day."
  },
  {
    id: "faq-3",
    question: "Is booking an appointment required, or can I walk in?",
    answer: "Walk-ins are always welcome! However, booking a repair request online or calling us beforehand ensures we reserve the specific replacement parts for your device model, minimizing your waiting time."
  },
  {
    id: "faq-4",
    question: "What does 'Request Pickup' entail?",
    answer: "For customers within Nairobi, we can arrange safe collection of your device from your home or office, deliver it to our shop at Norwich Union for repair, and return it to you. A nominal pick-up fee may apply based on your exact location."
  },
  {
    id: "faq-5",
    question: "How do I order a product?",
    answer: "Click 'Order Now' on any product to start a conversation with our team. We will confirm availability, pricing, and payment options directly."
  }
];
