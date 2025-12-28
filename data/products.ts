export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  description: string;
  specifications: { [key: string]: string };
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  // Mobiles
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    category: "Mobiles",
    price: 42999,
    originalPrice: 46999,
    discount: 8,
    rating: 4.8,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1592286927505-38a7904912b8?w=500",
    images: [
      "https://images.unsplash.com/photo-1592286927505-38a7904912b8?w=500",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500"
    ],
    description: "The most powerful iPhone ever with A17 Pro chip, titanium design, and professional camera system.",
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Chip": "A17 Pro",
      "Camera": "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      "Battery": "Up to 29 hours video playback",
      "Storage": "256GB",
      "5G": "Yes"
    },
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    category: "Mobiles",
    price: 39999,
    originalPrice: 43999,
    discount: 8,
    rating: 4.7,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500"
    ],
    description: "Premium Android flagship with S Pen, 200MP camera, and cutting-edge AI features.",
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 3",
      "Camera": "200MP Main + 12MP Ultra Wide + 10MP Telephoto",
      "Battery": "5000mAh",
      "Storage": "512GB",
      "RAM": "12GB"
    },
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    slug: "google-pixel-8-pro",
    category: "Mobiles",
    price: 32999,
    rating: 4.6,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500"
    ],
    description: "Google's flagship with best-in-class AI photography and pure Android experience.",
    specifications: {
      "Display": "6.7-inch LTPO OLED",
      "Processor": "Google Tensor G3",
      "Camera": "50MP Main + 48MP Ultra Wide + 48MP Telephoto",
      "Battery": "5050mAh",
      "Storage": "256GB",
      "RAM": "12GB"
    },
    inStock: true
  },
  // Headphones
  {
    id: 4,
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    category: "Headphones",
    price: 12999,
    originalPrice: 14999,
    discount: 13,
    rating: 4.9,
    reviews: 521,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"
    ],
    description: "Industry-leading noise cancellation with exceptional sound quality and 30-hour battery life.",
    specifications: {
      "Type": "Over-ear Wireless",
      "Noise Cancellation": "Active (ANC)",
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.2",
      "Weight": "250g",
      "Drivers": "30mm"
    },
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "AirPods Pro (2nd Gen)",
    slug: "airpods-pro-2nd-gen",
    category: "Headphones",
    price: 9999,
    rating: 4.8,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500"
    ],
    description: "Apple's premium wireless earbuds with active noise cancellation and spatial audio.",
    specifications: {
      "Type": "In-ear Wireless",
      "Noise Cancellation": "Active (ANC)",
      "Battery Life": "6 hours (30 with case)",
      "Connectivity": "Bluetooth 5.3",
      "Water Resistance": "IPX4",
      "Chip": "H2"
    },
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Bose QuietComfort 45",
    slug: "bose-quietcomfort-45",
    category: "Headphones",
    price: 10499,
    originalPrice: 12499,
    discount: 15,
    rating: 4.7,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500",
    images: [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500"
    ],
    description: "Legendary comfort and noise cancellation with premium audio performance.",
    specifications: {
      "Type": "Over-ear Wireless",
      "Noise Cancellation": "Active (ANC)",
      "Battery Life": "24 hours",
      "Connectivity": "Bluetooth 5.1",
      "Weight": "240g",
      "Microphone": "4-mic array"
    },
    inStock: true
  },
  {
    id: 7,
    name: "JBL Live Pro 2 TWS",
    slug: "jbl-live-pro-2-tws",
    category: "Headphones",
    price: 5999,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1590658165737-15a047b7a3ad?w=500",
    images: [
      "https://images.unsplash.com/photo-1590658165737-15a047b7a3ad?w=500"
    ],
    description: "True wireless earbuds with powerful JBL sound and smart ANC.",
    specifications: {
      "Type": "In-ear Wireless",
      "Noise Cancellation": "Adaptive ANC",
      "Battery Life": "10 hours (40 with case)",
      "Connectivity": "Bluetooth 5.3",
      "Water Resistance": "IPX5",
      "Drivers": "11mm"
    },
    inStock: true
  },
  // Smart Watches
  {
    id: 8,
    name: "Apple Watch Series 9",
    slug: "apple-watch-series-9",
    category: "Smart Watches",
    price: 15999,
    originalPrice: 18999,
    discount: 14,
    rating: 4.8,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500"
    ],
    description: "Advanced health monitoring, fitness tracking, and seamless iPhone integration.",
    specifications: {
      "Display": "1.9-inch Retina LTPO OLED",
      "Processor": "S9 SiP",
      "Battery Life": "18 hours",
      "Water Resistance": "50m",
      "Health Features": "ECG, Blood Oxygen, Heart Rate",
      "Connectivity": "GPS, Cellular, WiFi, Bluetooth"
    },
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: "Samsung Galaxy Watch 6",
    slug: "samsung-galaxy-watch-6",
    category: "Smart Watches",
    price: 12999,
    rating: 4.6,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1617625802912-cfe0b53ec8b8?w=500",
    images: [
      "https://images.unsplash.com/photo-1617625802912-cfe0b53ec8b8?w=500"
    ],
    description: "Premium Android smartwatch with comprehensive health tracking and long battery life.",
    specifications: {
      "Display": "1.4-inch Super AMOLED",
      "Processor": "Exynos W930",
      "Battery Life": "40 hours",
      "Water Resistance": "5ATM + IP68",
      "Health Features": "Body Composition, Sleep Tracking, Heart Rate",
      "OS": "Wear OS 4"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Garmin Fenix 7",
    slug: "garmin-fenix-7",
    category: "Smart Watches",
    price: 22999,
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500"
    ],
    description: "Premium multisport GPS watch for serious athletes and outdoor enthusiasts.",
    specifications: {
      "Display": "1.3-inch transflective MIP",
      "Battery Life": "18 days (smartwatch mode)",
      "Water Resistance": "10ATM",
      "Features": "Multi-GNSS, TopoActive maps, Training metrics",
      "Durability": "Military Standard 810",
      "Storage": "16GB"
    },
    inStock: true
  },
  // Chargers
  {
    id: 11,
    name: "Anker 735 GaN Charger",
    slug: "anker-735-gan-charger",
    category: "Chargers",
    price: 2999,
    originalPrice: 3799,
    discount: 20,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500"
    ],
    description: "65W 3-port fast charger with GaN technology for phones, tablets, and laptops.",
    specifications: {
      "Power Output": "65W",
      "Ports": "2x USB-C, 1x USB-A",
      "Technology": "GaN (Gallium Nitride)",
      "Fast Charging": "PD 3.0, PPS, QC",
      "Compatibility": "iPhone, Samsung, MacBook, iPad",
      "Safety": "MultiProtect system"
    },
    inStock: true,
    featured: true
  },
  {
    id: 12,
    name: "Belkin BoostCharge Pro",
    slug: "belkin-boostcharge-pro",
    category: "Chargers",
    price: 4899,
    rating: 4.6,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1591290619762-c3e0e4747d0b?w=500",
    images: [
      "https://images.unsplash.com/photo-1591290619762-c3e0e4747d0b?w=500"
    ],
    description: "3-in-1 wireless charging stand for iPhone, Apple Watch, and AirPods.",
    specifications: {
      "Type": "Wireless Charging Stand",
      "Power Output": "15W (iPhone), 5W (Watch), 5W (AirPods)",
      "Compatibility": "MagSafe, Qi-enabled devices",
      "Design": "Premium aluminum finish",
      "Cable": "2m included",
      "Safety": "Foreign object detection"
    },
    inStock: true
  },
  {
    id: 13,
    name: "UGREEN Nexode 100W",
    slug: "ugreen-nexode-100w",
    category: "Chargers",
    price: 3399,
    rating: 4.8,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500",
    images: [
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500"
    ],
    description: "Powerful 100W 4-port GaN charger for all your devices simultaneously.",
    specifications: {
      "Power Output": "100W",
      "Ports": "3x USB-C, 1x USB-A",
      "Technology": "GaN II",
      "Fast Charging": "PD 3.0, QC 4+",
      "Size": "Compact (2.5 x 2.5 x 1.2 in)",
      "Safety": "Thermal protection"
    },
    inStock: true
  },
  // Accessories
  {
    id: 14,
    name: "Spigen Ultra Hybrid Case",
    slug: "spigen-ultra-hybrid-case",
    category: "Accessories",
    price: 899,
    originalPrice: 1299,
    discount: 29,
    rating: 4.5,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500",
    images: [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500"
    ],
    description: "Crystal clear protection with military-grade drop protection for iPhone.",
    specifications: {
      "Material": "TPU bumper + PC back",
      "Protection": "Military Grade (MIL STD 810G-516.6)",
      "Features": "Air Cushion Technology, Raised edges",
      "Compatibility": "iPhone 15 Pro Max",
      "Wireless Charging": "Yes",
      "Thickness": "Slim profile"
    },
    inStock: true
  },
  {
    id: 15,
    name: "SanDisk Extreme 1TB",
    slug: "sandisk-extreme-1tb",
    category: "Accessories",
    price: 5999,
    originalPrice: 7599,
    discount: 20,
    rating: 4.8,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=500",
    images: [
      "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=500"
    ],
    description: "Portable SSD with blazing fast speeds for photos, videos, and files.",
    specifications: {
      "Capacity": "1TB",
      "Read Speed": "Up to 1050MB/s",
      "Write Speed": "Up to 1000MB/s",
      "Interface": "USB 3.2 Gen 2",
      "Durability": "IP55 (water & dust resistant)",
      "Warranty": "5-year limited"
    },
    inStock: true
  },
  {
    id: 16,
    name: "Logitech MX Master 3S",
    slug: "logitech-mx-master-3s",
    category: "Accessories",
    price: 3799,
    rating: 4.9,
    reviews: 923,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
    ],
    description: "Premium wireless mouse with ultra-precise 8K DPI sensor and ergonomic design.",
    specifications: {
      "Sensor": "8000 DPI Darkfield",
      "Battery Life": "70 days",
      "Connectivity": "Bluetooth, USB receiver",
      "Buttons": "7 programmable buttons",
      "Weight": "141g",
      "Compatibility": "Windows, macOS, Linux, iPad"
    },
    inStock: true,
    featured: true
  },
  {
    id: 17,
    name: "Keychron K8 Pro",
    slug: "keychron-k8-pro",
    category: "Accessories",
    price: 4599,
    rating: 4.7,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
    ],
    description: "Wireless mechanical keyboard with hot-swappable switches and RGB backlight.",
    specifications: {
      "Layout": "Tenkeyless (87 keys)",
      "Switches": "Hot-swappable (Gateron/Cherry MX)",
      "Connectivity": "Bluetooth 5.1, USB-C",
      "Battery Life": "240 hours (backlight off)",
      "Keycaps": "Double-shot PBT",
      "Compatibility": "Windows, macOS, Linux"
    },
    inStock: true
  },
  {
    id: 18,
    name: "Anker PowerCore 20000mAh",
    slug: "anker-powercore-20000mah",
    category: "Accessories",
    price: 1899,
    originalPrice: 2499,
    discount: 23,
    rating: 4.6,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500"
    ],
    description: "High-capacity portable charger with fast charging for phones and tablets.",
    specifications: {
      "Capacity": "20000mAh",
      "Ports": "2x USB-A, 1x USB-C",
      "Input": "18W USB-C",
      "Output": "18W (USB-C), 12W (USB-A)",
      "Weight": "343g",
      "Recharge Time": "~6 hours"
    },
    inStock: true
  },
  {
    id: 19,
    name: "dbrand Grip Case",
    slug: "dbrand-grip-case",
    category: "Accessories",
    price: 1899,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500",
    images: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500"
    ],
    description: "Premium textured case with customizable skin options and excellent grip.",
    specifications: {
      "Material": "Dual-layer TPU + Polycarbonate",
      "Features": "Micro-dot texture, Raised bezels",
      "Protection": "Drop protection up to 10ft",
      "Compatibility": "Multiple phone models",
      "Customization": "Swappable skins",
      "Buttons": "Tactile button covers"
    },
    inStock: true
  },
  {
    id: 20,
    name: "Rode VideoMic GO II",
    slug: "rode-videomic-go-ii",
    category: "Accessories",
    price: 5699,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500",
    images: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500"
    ],
    description: "Professional shotgun microphone for smartphones, cameras, and computers.",
    specifications: {
      "Type": "Directional shotgun",
      "Connectivity": "USB-C, 3.5mm TRS",
      "Power": "No battery required",
      "Features": "Built-in shock mount, High-pass filter",
      "Weight": "89g",
      "Compatibility": "Cameras, phones, tablets, computers"
    },
    inStock: true
  }
];

export const categories = [
  { name: "Mobiles", icon: "📱", count: 3 },
  { name: "Headphones", icon: "🎧", count: 4 },
  { name: "Smart Watches", icon: "⌚", count: 3 },
  { name: "Chargers", icon: "🔌", count: 3 },
  { name: "Accessories", icon: "🎮", count: 7 }
];
