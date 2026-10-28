// Authentic Indian Automotive Dataset — Indigenous Supercars, Tough 4x4s, Flagship SUVs, Electric Exotics, and Royal Fleet

export const CAR_BRANDS = [
  { id: 'all', name: 'All Marques', logo: '🇮🇳' },
  { id: 'tata', name: 'Tata Motors', origin: 'Mumbai, Maharashtra', founded: '1945', logo: '🔷' },
  { id: 'mahindra', name: 'Mahindra & Mahindra', origin: 'Mumbai, Maharashtra', founded: '1945', logo: '🛡️' },
  { id: 'maruti-suzuki', name: 'Maruti Suzuki Nexa', origin: 'New Delhi', founded: '1981', logo: '✨' },
  { id: 'force', name: 'Force Motors', origin: 'Pune, Maharashtra', founded: '1958', logo: '⛰️' },
  { id: 'dc2', name: 'DC2 / DC Design', origin: 'Mumbai / Pune', founded: '1993', logo: '🏎️' },
  { id: 'vazirani', name: 'Vazirani Automotive', origin: 'Mumbai, Maharashtra', founded: '2015', logo: '⚡' },
  { id: 'pravaig', name: 'Pravaig Dynamics', origin: 'Bengaluru, Karnataka', founded: '2011', logo: '🔋' },
  { id: 'toyota-bharat', name: 'Toyota Bharat', origin: 'Bidadi, Karnataka', founded: '1997', logo: '👑' },
  { id: 'land-rover-india', name: 'Land Rover India', origin: 'Pune, Maharashtra', founded: '2008', logo: '🦅' },
  { id: 'mercedes-benz-india', name: 'Mercedes-Benz India', origin: 'Chakan, Pune', founded: '1994', logo: '⭐' }
];

export const CAR_CATEGORIES = [
  { id: 'all', name: 'All Collections', desc: 'Browse our complete Indian automotive flagship portfolio', icon: 'Sparkles' },
  { id: 'indigenous-supercar', name: 'Indigenous Supercars', desc: 'Proudly designed and engineered Indian hypercars and mid-engine sports coupes', icon: 'Flame' },
  { id: 'tough-4x4', name: 'Tough 4x4 & Off-Roaders', desc: 'Conquer the Himalayas, Thar Desert, and Western Ghats with ladder-frame mechanical locks', icon: 'Compass' },
  { id: 'flagship-suv', name: 'Flagship Luxury SUVs', desc: 'Sovereign comfort with Bharat NCAP 5-Star safety, Level 2 ADAS, and captain seating', icon: 'Gauge' },
  { id: 'electric-ev', name: 'Indian Electric (EV)', desc: 'Next-generation Indian electric architectures with up to 680 km ARAI certified range', icon: 'Zap' },
  { id: 'royalty-luxury', name: 'Prestige Royalty & Salons', desc: 'The preferred motorcars of Indian royalty, VIP business leaders, and heads of state', icon: 'Crown' }
];

export const CARS_DATA = [
  {
    id: 'vazirani-shul',
    name: 'Vazirani Shul Turbine Hypercar',
    brand: 'Vazirani Automotive',
    brandId: 'vazirani',
    category: 'indigenous-supercar',
    categoryName: 'Indigenous Supercars',
    year: 2025,
    price: 100000000, // ₹10.00 Crore
    status: 'Bespoke Order',
    tag: 'India’s 1st Hypercar',
    featured: true,
    badge: 'Pride of Bharat',
    rating: 5.0,
    reviewsCount: 18,
    images: {
      main: '/cars/vazirani-shul.jpg',
      front: '/cars/vazirani-shul.jpg',
      side: '/cars/vazirani-shul.jpg',
      rear: '/cars/vazirani-shul.jpg',
      interior: '/cars/vazirani-shul.jpg'
    },
    colors: [
      { name: 'Kashmir Saffron Metallic', hex: '#FF6F00', price: 0, image: '/cars/vazirani-shul.jpg' },
      { name: 'Mumbai Midnight Carbon', hex: '#111215', price: 1500000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80'},
      { name: 'Tiranga Pure Pearl White', hex: '#F0F4F8', price: 1200000, image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '2.3s',
      accelRaw: 2.3,
      topSpeed: '345 km/h',
      topSpeedRaw: 345,
      topSpeedKmh: '345 km/h',
      horsepower: 1020,
      torque: '1,280 Nm combined',
      engine: 'Jet Micro-Turbine Range Extender + 4 Independent Hub Motors',
      transmission: 'Single-Speed Direct Drive per Axle',
      drivetrain: 'All-Wheel Torque Vectoring (AWTV)',
      weight: '1,550 kg (Carbon Monocoque)',
      fuelType: 'Turbine Hybrid / Petrol',
      efficiency: '14 km/l equivalent / 350 km Electric',
      soundType: 'hyper-electric'
    },
    highlights: [
      'Developed by Indian designer Chunky Vazirani with input from Michelin & Sahara Force India F1 team',
      'Proprietary micro-turbine technology running on regular petrol for unlimited high-speed range',
      'Ultra-lightweight structural carbon-fiber monocoque handcrafted in Mumbai & UK atelier',
      'Brembo carbon-ceramic matrix braking system tested on Buddh International Circuit'
    ],
    description: 'The Vazirani Shul represents India’s monumental leap into the ultra-hypercar stratosphere. Conceived in Mumbai by automotive visionary Chunky Vazirani, it blends aeronautical micro-turbine power generation with quad-electric motors to churn out 1,020 horsepower with zero throttle lag.'
  },
  {
    id: 'mahindra-thar-roxx',
    name: 'Mahindra Thar ROXX 4x4 AX7L',
    brand: 'Mahindra & Mahindra',
    brandId: 'mahindra',
    category: 'tough-4x4',
    categoryName: 'Tough 4x4 & Off-Roaders',
    year: 2025,
    price: 2249000, // ₹22.49 Lakh
    status: 'In Showroom',
    tag: '5-Door 4XPLOR Master',
    featured: true,
    badge: 'Bharat NCAP 5-Star',
    rating: 4.96,
    reviewsCount: 84,
    images: {
      main: '/cars/mahindra-thar-roxx.jpg',
      front: '/cars/mahindra-thar-roxx.jpg',
      side: '/cars/mahindra-thar-roxx.jpg',
      rear: '/cars/mahindra-thar-roxx.jpg',
      interior: '/cars/mahindra-thar-roxx.jpg'
    },
    colors: [
      { name: 'Stealth Black', hex: '#1C1C1E', price: 0, image: '/cars/mahindra-thar-roxx.jpg'},
      { name: 'Everest White', hex: '#F2F2F2', price: 15000, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Deep Forest Green', hex: '#1C352D', price: 25000, image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Tango Red', hex: '#A81C1C', price: 20000, image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '8.8s',
      accelRaw: 8.8,
      topSpeed: '180 km/h',
      topSpeedRaw: 180,
      topSpeedKmh: '180 km/h',
      horsepower: 177,
      torque: '380 Nm @ 1,750 RPM',
      engine: '2.0L mStallion TGDi Turbo-Petrol / 2.2L mHawk Diesel',
      transmission: '6-Speed Aisin Torque Converter Automatic',
      drivetrain: '4XPLOR All-Terrain 4WD with Electronic Locking Rear Diff',
      weight: '2,015 kg (Ladder-Frame Chassis)',
      fuelType: 'Diesel / Petrol',
      efficiency: '14.5 km/l ARAI Certified',
      soundType: 'v8-turbo'
    },
    highlights: [
      'Bharat NCAP 5-Star Adult and Child Occupant Safety Certification',
      'Panoramic Skyroof — largest in its class with acoustic thermal glass',
      'Harman Kardon 9-speaker 3D QuantumLogic Surround sound system',
      'Intelliturn electronic tight-radius crawl assist for extreme mountain switchbacks'
    ],
    description: 'The Mahindra Thar ROXX redefines off-road mastery for the Indian subcontinent. Built on a brand-new 4th generation ladder-frame chassis with Watts linkage suspension, it conquers Spiti Valley rocks while providing whisper-quiet highway luxury with Level 2 ADAS.'
  },
  {
    id: 'tata-safari-red-dark',
    name: 'Tata Safari Red Dark Edition',
    brand: 'Tata Motors',
    brandId: 'tata',
    category: 'flagship-suv',
    categoryName: 'Flagship Luxury SUVs',
    year: 2025,
    price: 2734000, // ₹27.34 Lakh
    status: 'In Showroom',
    tag: 'OMEGARC Royal Luxury',
    featured: true,
    badge: 'Bharat NCAP 5-Star',
    rating: 4.98,
    reviewsCount: 67,
    images: {
      main: '/cars/tata-safari-red-dark.jpg',
      front: '/cars/tata-safari-red-dark.jpg',
      side: '/cars/tata-safari-red-dark.jpg',
      rear: '/cars/tata-safari-red-dark.jpg',
      interior: '/cars/tata-safari-red-dark.jpg'
    },
    colors: [
      { name: 'Oberon Black with Carnelian Red Inserts', hex: '#161616', price: 0, image: '/cars/tata-safari-red-dark.jpg' },
      { name: 'Cosmic Gold Dual Tone', hex: '#B8860B', price: 30000, image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Stardust Ash Grey', hex: '#4A4D52', price: 20000, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '9.2s',
      accelRaw: 9.2,
      topSpeed: '190 km/h',
      topSpeedRaw: 190,
      topSpeedKmh: '190 km/h',
      horsepower: 170,
      torque: '350 Nm @ 1,750-2,500 RPM',
      engine: '2.0L Kryotec Turbocharged Diesel',
      transmission: '6-Speed E-Shifter Automatic',
      drivetrain: 'Front-Wheel Drive with Advanced ESP Multi-Terrain Response',
      weight: '1,825 kg (Land Rover D8 Derived OMEGARC Architecture)',
      fuelType: 'Diesel',
      efficiency: '16.3 km/l ARAI Certified',
      soundType: 'v8-turbo'
    },
    highlights: [
      'Land Rover D8 platform derived OMEGARC structural monocoque',
      'Bespoke Carnelian Red ventilated leatherette Captain seats with Boss mode',
      '12.3-inch Harman Cinematic touchscreen with wireless Apple CarPlay & Android Auto',
      'Advanced Level 2 Autonomous Driving Assistance (ADAS) with 11 radar/camera safety sensors'
    ],
    description: 'The Tata Safari Red Dark is the sovereign crown jewel of Tata Motors’ passenger fleet. Engineering pedigree derived directly from Land Rover’s legendary D8 architecture gives it unyielding highway stability, sovereign command seating, and Bharat NCAP 5-Star safety credentials.'
  },
  {
    id: 'mahindra-scorpio-n',
    name: 'Mahindra Scorpio-N Z8 L 4x4',
    brand: 'Mahindra & Mahindra',
    brandId: 'mahindra',
    category: 'tough-4x4',
    categoryName: 'Tough 4x4 & Off-Roaders',
    year: 2025,
    price: 2489000, // ₹24.89 Lakh
    status: 'In Showroom',
    tag: 'Big Daddy of SUVs',
    featured: false,
    badge: 'D-Segment Ruler',
    rating: 4.94,
    reviewsCount: 78,
    images: {
      main: '/cars/mahindra-scorpio-n.jpg',
      front: '/cars/mahindra-scorpio-n.jpg',
      side: '/cars/mahindra-scorpio-n.jpg',
      rear: '/cars/mahindra-scorpio-n.jpg',
      interior: '/cars/mahindra-scorpio-n.jpg'
    },
    colors: [
      { name: 'Napoli Black', hex: '#111215', price: 0, image: '/cars/mahindra-scorpio-n.jpg'},
      { name: 'Dazzling Silver', hex: '#D1D5DB', price: 15000, image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Grand Canyon Bronze', hex: '#7C3F24', price: 20000, image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '9.3s',
      accelRaw: 9.3,
      topSpeed: '185 km/h',
      topSpeedRaw: 185,
      topSpeedKmh: '185 km/h',
      horsepower: 175,
      torque: '400 Nm @ 1,750 RPM',
      engine: '2.2L mHawk CRDe Turbo-Diesel',
      transmission: '6-Speed Torque Converter with Paddle Shifters',
      drivetrain: '4XPLOR Intelligent Terrain Response with Low Range (4L/4H)',
      weight: '2,075 kg (High-Strength Steel Frame)',
      fuelType: 'Diesel',
      efficiency: '15.2 km/l ARAI Certified',
      soundType: 'v8-turbo'
    },
    highlights: [
      'Frequency Dependent Damping (FDD) and MTV-CL shock absorbers',
      'Sony 12-speaker 3D Immersive audio system with roof-mounted tweeters',
      'Electronic mechanical rear differential lock with brake locking diff (BLD)',
      'High driving position with unmatched road command authority'
    ],
    description: 'Lovingly crowned the ‘Big Daddy of SUVs’, the Scorpio-N blends rugged, indestructible body-on-frame toughness with European ride plushness and raw torque that pulls effortlessly over Leh passes and highway corridors.'
  },
  {
    id: 'dc-avanti',
    name: 'DC Avanti 2.0 Turbo GT',
    brand: 'DC2 / DC Design',
    brandId: 'dc2',
    category: 'indigenous-supercar',
    categoryName: 'Indigenous Supercars',
    year: 2024,
    price: 4500000, // ₹45.00 Lakh
    status: 'In Showroom',
    tag: 'India\'s 1st Indigenous Sports Car',
    featured: true,
    badge: 'Historic Milestone',
    rating: 4.88,
    reviewsCount: 39,
    images: {
      main: '/cars/dc-avanti.jpg',
      front: '/cars/dc-avanti.jpg',
      side: '/cars/dc-avanti.jpg',
      rear: '/cars/dc-avanti.jpg',
      interior: '/cars/dc-avanti.jpg'
    },
    colors: [
      { name: 'Ferrari Rosso Red', hex: '#CC0000', price: 0, image: '/cars/dc-avanti.jpg' },
      { name: 'Canary Yellow', hex: '#FFD700', price: 50000, image: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Obsidian Jet Black', hex: '#0F1012', price: 40000, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '5.5s',
      accelRaw: 5.5,
      topSpeed: '240 km/h',
      topSpeedRaw: 240,
      topSpeedKmh: '240 km/h',
      horsepower: 310,
      torque: '380 Nm @ 2,000-4,000 RPM',
      engine: '2.0L Turbocharged 16V Mid-Mounted Engine',
      transmission: '6-Speed Manual / Automated Paddle Shift',
      drivetrain: 'Rear-Wheel Drive (Mid-Engine Layout)',
      weight: '1,580 kg (Tubular Spaceframe Chassis)',
      fuelType: 'Petrol',
      efficiency: '10.5 km/l',
      soundType: 'v8-turbo'
    },
    highlights: [
      'First-ever street-legal sports car engineered and manufactured in India',
      '170mm ground clearance specifically tailored for Indian speed breakers',
      'Mid-engine balanced weight distribution with carbon-composite panels',
      'AP Racing upgraded 4-piston calipers with 330mm ventilated discs'
    ],
    description: 'Designed by Dilip Chhabria, the DC Avanti made history as India’s very first production sports car. Featuring an aggressive mid-engine exotic silhouette, lightweight composite bodywork, and generous ground clearance calibrated for Indian roads.'
  },
  {
    id: 'tata-curvv-ev',
    name: 'Tata Curvv EV Empowered+ 55',
    brand: 'Tata Motors',
    brandId: 'tata',
    category: 'electric-ev',
    categoryName: 'Indian Electric (EV)',
    year: 2025,
    price: 2199000, // ₹21.99 Lakh
    status: 'In Showroom',
    tag: 'Coupe SUV 585 km Range',
    featured: true,
    badge: 'Next-Gen EV',
    rating: 4.97,
    reviewsCount: 52,
    images: {
      main: '/cars/tata-curvv-ev.jpg',
      front: '/cars/tata-curvv-ev.jpg',
      side: '/cars/tata-curvv-ev.jpg',
      rear: '/cars/tata-curvv-ev.jpg',
      interior: '/cars/tata-curvv-ev.jpg'
    },
    colors: [
      { name: 'Virtual Sunrise Blue', hex: '#0284C7', price: 0, image: '/cars/tata-curvv-ev.jpg' },
      { name: 'Pure Grey Dual-Tone', hex: '#64748B', price: 20000, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'},
      { name: 'Empowered White', hex: '#F8FAFC', price: 15000, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'}
    ],
    specs: {
      acceleration: '8.6s',
      accelRaw: 8.6,
      topSpeed: '160 km/h',
      topSpeedRaw: 160,
      topSpeedKmh: '160 km/h',
      horsepower: 167,
      torque: '215 Nm instantaneous',
      engine: 'Permanent Magnet Synchronous Motor (actis.ev Architecture)',
      transmission: 'Single-Speed Automatic Transaxle',
      drivetrain: 'Front-Wheel Drive with Liquid-Cooled 55 kWh Battery Pack',
      weight: '1,680 kg',
      fuelType: 'Electric',
      efficiency: '585 km ARAI Range (15 min Fast Charge = 150 km)',
      soundType: 'hyper-electric'
    },
    highlights: [
      'First mass-market Electric SUV Coupe engineered on Tata’s pure acti.ev platform',
      'Vehicle-to-Load (V2L) and Vehicle-to-Vehicle (V2V) bidirectional fast charging',
      'Flush motorized smart door handles with illuminated approach sensor',
      'JBL cinematic 9-speaker system with subwoofer and multi-mood soundscapes'
    ],
    description: 'The Tata Curvv EV inaugurates an exhilarating new design chapter in Indian automotive history. Its dynamic sloping roofline, 55 kWh prismatic battery pack, and 585 km certified range make it an unstoppable green highway cruiser.'
  },
  {
    id: 'toyota-land-cruiser-300',
    name: 'Toyota Land Cruiser 300 ZX V6',
    brand: 'Toyota Bharat',
    brandId: 'toyota-bharat',
    category: 'royalty-luxury',
    categoryName: 'Prestige Royalty & Salons',
    year: 2025,
    price: 21000000, // ₹2.10 Crore
    status: 'In Showroom',
    tag: 'Sovereign King of Bharat',
    featured: true,
    badge: 'Diplomatic Choice',
    rating: 5.0,
    reviewsCount: 45,
    images: {
      main: '/cars/toyota-land-cruiser-300.jpg',
      front: '/cars/toyota-land-cruiser-300.jpg',
      side: '/cars/toyota-land-cruiser-300.jpg',
      rear: '/cars/toyota-land-cruiser-300.jpg',
      interior: '/cars/toyota-land-cruiser-300.jpg'
    },
    colors: [
      { name: 'Precious White Pearl', hex: '#F5F5F0', price: 0, image: '/cars/toyota-land-cruiser-300.jpg' },
      { name: 'Attitude Black Mica', hex: '#111215', price: 250000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80'},
      { name: 'Dark Red Mica Metallic', hex: '#7A1C1C', price: 250000, image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '6.7s',
      accelRaw: 6.7,
      topSpeed: '210 km/h',
      topSpeedRaw: 210,
      topSpeedKmh: '210 km/h',
      horsepower: 309,
      torque: '700 Nm @ 1,600-2,600 RPM',
      engine: '3.3L Twin-Turbocharged V6 Diesel',
      transmission: 'Direct Shift 10-Speed Automatic',
      drivetrain: 'Full-Time 4WD with Multi-Terrain Select & Crawl Control',
      weight: '2,630 kg (GA-F Body-on-Frame)',
      fuelType: 'Diesel',
      efficiency: '11.3 km/l',
      soundType: 'v8-turbo'
    },
    highlights: [
      'The undisputed vehicle of choice for Indian VIPs, cabinet ministers, and royalty',
      'Electronic Kinetic Dynamic Suspension System (E-KDSS) with hydraulic decoupling',
      '14-speaker JBL Synthesis cinema acoustic system with rear entertainment screens',
      'Unsurpassed bulletproof reliability proven across 70 years of expeditions'
    ],
    description: 'The Toyota Land Cruiser 300 ZX is an institution on Indian roads. Commanding universal deference and prestige, it pairs an indestructible GA-F ladder frame with a twin-turbo V6 producing 700 Nm of relentless torque.'
  },
  {
    id: 'force-gurkha-5door',
    name: 'Force Gurkha 5-Door 4x4',
    brand: 'Force Motors',
    brandId: 'force',
    category: 'tough-4x4',
    categoryName: 'Tough 4x4 & Off-Roaders',
    year: 2025,
    price: 1800000, // ₹18.00 Lakh
    status: 'In Showroom',
    tag: 'Extreme Himalayan Conqueror',
    featured: false,
    badge: 'Mechanical Locks',
    rating: 4.91,
    reviewsCount: 31,
    images: {
      main: '/cars/force-gurkha-5door.jpg',
      front: '/cars/force-gurkha-5door.jpg',
      side: '/cars/force-gurkha-5door.jpg',
      rear: '/cars/force-gurkha-5door.jpg',
      interior: '/cars/force-gurkha-5door.jpg'
    },
    colors: [
      { name: 'Military Olive Green', hex: '#3B4D3C', price: 0, image: '/cars/force-gurkha-5door.jpg' },
      { name: 'Red Fury', hex: '#B30000', price: 15000, image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Matte Moon Grey', hex: '#6B7280', price: 25000, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '12.5s',
      accelRaw: 12.5,
      topSpeed: '145 km/h',
      topSpeedRaw: 145,
      topSpeedKmh: '145 km/h',
      horsepower: 140,
      torque: '320 Nm @ 1,400-2,600 RPM',
      engine: '2.6L Mercedes-Benz Derived FM 2.6 CR Turbo-Diesel',
      transmission: '5-Speed Heavy-Duty Manual G-28/5',
      drivetrain: 'Shift-on-the-Fly 4WD with Manual Front & Rear Mechanical Diff Locks',
      weight: '2,170 kg (Solid Axle Coil Springs)',
      fuelType: 'Diesel',
      efficiency: '13.0 km/l',
      soundType: 'v8-turbo'
    },
    highlights: [
      'Factory-fitted air intake snorkel providing a class-leading 700mm water wading depth',
      'Both front AND rear mechanically locking differentials operable from cabin levers',
      'Mercedes-Benz derived powertrain built at Force Motors’ specialized Pune facility',
      'All-steel welded monocoque body on heavy C-in-C ladder-frame chassis'
    ],
    description: 'The Force Gurkha 5-Door is India’s pure, mechanical extreme off-roader. Designed without fragile electronic gimmicks, its mechanical front and rear locking diffs and factory snorkel enable it to conquer icy Himalayan riverbeds where modern soft-roaders fear to tread.'
  },
  {
    id: 'toyota-fortuner-legender',
    name: 'Toyota Fortuner Legender 4x4 AT',
    brand: 'Toyota Bharat',
    brandId: 'toyota-bharat',
    category: 'flagship-suv',
    categoryName: 'Flagship Luxury SUVs',
    year: 2025,
    price: 4764000, // ₹47.64 Lakh
    status: 'In Showroom',
    tag: 'India\'s SUV Legend',
    featured: false,
    badge: 'Supreme Resale King',
    rating: 4.95,
    reviewsCount: 112,
    images: {
      main: '/cars/toyota-fortuner-legender.jpg',
      front: '/cars/toyota-fortuner-legender.jpg',
      side: '/cars/toyota-fortuner-legender.jpg',
      rear: '/cars/toyota-fortuner-legender.jpg',
      interior: '/cars/toyota-fortuner-legender.jpg'
    },
    colors: [
      { name: 'Platinum White Pearl with Black Roof', hex: '#F1F5F9', price: 0, image: '/cars/toyota-fortuner-legender.jpg' },
      { name: 'Attitude Black All-Over', hex: '#0F172A', price: 35000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '9.6s',
      accelRaw: 9.6,
      topSpeed: '190 km/h',
      topSpeedRaw: 190,
      topSpeedKmh: '190 km/h',
      horsepower: 204,
      torque: '500 Nm @ 1,600-2,800 RPM',
      engine: '2.8L DOHC 16-Valve Turbo-Diesel Intercooled',
      transmission: '6-Speed Sequential Shiftmatic Automatic',
      drivetrain: 'Four-Wheel Drive (4WD) with High & Low Range',
      weight: '2,180 kg',
      fuelType: 'Diesel',
      efficiency: '14.2 km/l ARAI Certified',
      soundType: 'v8-turbo'
    },
    highlights: [
      'Split-quad LED headlamps with waterfall cascading LED sequential turn signals',
      'Dual-tone Black and Maroon premium leather upholstery with ambient door trim',
      'Kick-sensor hands-free powered tailgate with height memory adjustment',
      'Unmatched road authority and near-zero depreciation in the Indian pre-owned market'
    ],
    description: 'The Toyota Fortuner Legender is the quintessential symbol of success across Tier-1 and Tier-2 Indian business corridors. Delivering a colossal 500 Nm of torque from its bulletproof 2.8-liter diesel engine, it glides through potholes and VIP motorcades with total authority.'
  },
  {
    id: 'mahindra-xuv700',
    name: 'Mahindra XUV700 AX7 L AWD',
    brand: 'Mahindra & Mahindra',
    brandId: 'mahindra',
    category: 'flagship-suv',
    categoryName: 'Flagship Luxury SUVs',
    year: 2025,
    price: 2690000, // ₹26.90 Lakh
    status: 'In Showroom',
    tag: '200 HP Turbo Powerhouse',
    featured: false,
    badge: 'Tech Flagship',
    rating: 4.93,
    reviewsCount: 94,
    images: {
      main: '/cars/mahindra-xuv700.jpg',
      front: '/cars/mahindra-xuv700.jpg',
      side: '/cars/mahindra-xuv700.jpg',
      rear: '/cars/mahindra-xuv700.jpg',
      interior: '/cars/mahindra-xuv700.jpg'
    },
    colors: [
      { name: 'Midnight Black (Deep Blue Tint)', hex: '#0B132B', price: 0, image: '/cars/mahindra-xuv700.jpg' },
      { name: 'Everest White', hex: '#FFFFFF', price: 15000, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Electric Blue', hex: '#0052CC', price: 20000, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '8.1s',
      accelRaw: 8.1,
      topSpeed: '200 km/h',
      topSpeedRaw: 200,
      topSpeedKmh: '200 km/h',
      horsepower: 200,
      torque: '380 Nm @ 1,750-3,000 RPM',
      engine: '2.0L mStallion Direct Injection Turbo-Petrol',
      transmission: '6-Speed Aisin Torque Converter Automatic',
      drivetrain: 'BorgWarner All-Wheel Drive (AWD)',
      weight: '1,960 kg',
      fuelType: 'Petrol / Diesel',
      efficiency: '13.5 km/l',
      soundType: 'v8-turbo'
    },
    highlights: [
      'Dual 10.25-inch panoramic curved superscreen instrument & infotainment display',
      'Advanced Driver Assistance Systems (ADAS L2) with Auto Emergency Braking',
      'Sony 3D 12-speaker audio system with customized acoustic sound staging',
      'Flush smart door handles that deploy automatically upon approach'
    ],
    description: 'Mahindra’s tech tour-de-force that shook the Indian automotive market. With a segment-leading 200 horsepower mStallion turbocharged engine, it rockets to highway speeds with sports-car composure while offering three-row luxury seating.'
  },
  {
    id: 'toyota-vellfire-vip',
    name: 'Toyota Vellfire VIP Executive Lounge',
    brand: 'Toyota Bharat',
    brandId: 'toyota-bharat',
    category: 'royalty-luxury',
    categoryName: 'Prestige Royalty & Salons',
    year: 2025,
    price: 13200000, // ₹1.32 Crore
    status: 'In Showroom',
    tag: 'Private Jet for the Road',
    featured: true,
    badge: 'First-Class Suite',
    rating: 4.99,
    reviewsCount: 41,
    images: {
      main: '/cars/toyota-vellfire-vip.jpg',
      front: '/cars/toyota-vellfire-vip.jpg',
      side: '/cars/toyota-vellfire-vip.jpg',
      rear: '/cars/toyota-vellfire-vip.jpg',
      interior: '/cars/toyota-vellfire-vip.jpg'
    },
    colors: [
      { name: 'Precious Metal Black', hex: '#1C1C1E', price: 0, image: '/cars/toyota-vellfire-vip.jpg'},
      { name: 'Platinum White Pearl', hex: '#F8FAFC', price: 150000, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'}
    ],
    specs: {
      acceleration: '8.9s',
      accelRaw: 8.9,
      topSpeed: '180 km/h',
      topSpeedRaw: 180,
      topSpeedKmh: '180 km/h',
      horsepower: 193,
      torque: '240 Nm engine + Electric Motor',
      engine: '2.5L 4-Cylinder DOHC Self-Charging Strong Hybrid',
      transmission: 'e-CVT with Electronic All-Wheel Drive (E-Four)',
      drivetrain: 'E-Four (Electric Motor Driven Rear Axle)',
      weight: '2,240 kg (TNGA-K Architecture)',
      fuelType: 'Strong Hybrid',
      efficiency: '19.28 km/l ARAI Certified',
      soundType: 'whisper-v12'
    },
    highlights: [
      'Dual First-Class Executive Ottoman lounge chairs with power recline and massage',
      'Dual independent moonroofs with drop-down 14-inch rear entertainment display',
      'Self-charging strong hybrid powertrain delivering whisper-silent city transit',
      'The transport of choice for India’s top industrial titans and Bollywood stars'
    ],
    description: 'A genuine first-class airline cabin on wheels. The Toyota Vellfire Executive Lounge isolates its privileged occupants from the bustle of Mumbai and Delhi traffic inside an ultra-quiet, leather-lined sanctuary complete with heated, ventilated ottoman thrones.'
  },
  {
    id: 'mercedes-maybach-s680',
    name: 'Mercedes-Maybach S 680 Bharat Edition',
    brand: 'Mercedes-Benz India',
    brandId: 'mercedes-benz-india',
    category: 'royalty-luxury',
    categoryName: 'Prestige Royalty & Salons',
    year: 2025,
    price: 38000000, // ₹3.80 Crore
    status: 'In Showroom',
    tag: 'Sovereign V12 Sanctuary',
    featured: true,
    badge: 'Chakan Crafted V12',
    rating: 5.0,
    reviewsCount: 29,
    images: {
      main: '/cars/mercedes-maybach-s680.jpg',
      front: '/cars/mercedes-maybach-s680.jpg',
      side: '/cars/mercedes-maybach-s680.jpg',
      rear: '/cars/mercedes-maybach-s680.jpg',
      interior: '/cars/mercedes-maybach-s680.jpg'
    },
    colors: [
      { name: 'Onyx Black & Kalahari Gold Duo-Tone', hex: '#1C1C1C', price: 0, image: '/cars/mercedes-maybach-s680.jpg' },
      { name: 'High-Tech Silver Metallic', hex: '#C0C0C0', price: 300000, image: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Nautical Blue', hex: '#1E3A8A', price: 300000, image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '4.5s',
      accelRaw: 4.5,
      topSpeed: '250 km/h (governed)',
      topSpeedRaw: 250,
      topSpeedKmh: '250 km/h',
      horsepower: 612,
      torque: '900 Nm @ 2,000-4,000 RPM',
      engine: '6.0L Biturbo V12 Engine',
      transmission: '9G-TRONIC 9-Speed Automatic',
      drivetrain: '4MATIC All-Wheel Drive with 10-degree Rear Axle Steering',
      weight: '2,350 kg',
      fuelType: 'Petrol',
      efficiency: '8.5 km/l',
      soundType: 'whisper-v12'
    },
    highlights: [
      'Burmester High-End 4D Surround Sound with seat exciter vibration transducers',
      'Refrigerated champagne compartment with silver-plated Maybach flutes',
      'Active road noise compensation canceling road rumble through speakers',
      'AIRMATIC air suspension scanning Indian road undulations via stereo camera'
    ],
    description: 'The pinnacle of chauffeured luxury in India. Handcrafted to order for India’s most influential industrialists, the Maybach S 680 glides effortlessly across the Atal Setu and Yamuna Expressway with whisper-quiet V12 poise.'
  },
  {
    id: 'tata-harrier-dark',
    name: 'Tata Harrier Fearless+ Dark Edition',
    brand: 'Tata Motors',
    brandId: 'tata',
    category: 'flagship-suv',
    categoryName: 'Flagship Luxury SUVs',
    year: 2025,
    price: 2644000, // ₹26.44 Lakh
    status: 'In Showroom',
    tag: '5-Seater OMEGARC Dark Beast',
    featured: true,
    badge: 'Bharat NCAP 5-Star',
    rating: 4.97,
    reviewsCount: 71,
    images: {
      main: '/cars/tata-harrier-dark.jpg',
      front: '/cars/tata-harrier-dark.jpg',
      side: '/cars/tata-harrier-dark.jpg',
      rear: '/cars/tata-harrier-dark.jpg',
      interior: '/cars/tata-harrier-dark.jpg'
    },
    colors: [
      { name: 'Oberon Black Dark Edition', hex: '#111215', price: 0, image: '/cars/tata-harrier-dark.jpg'},
      { name: 'Sunlit Yellow Dual-Tone', hex: '#EAB308', price: 25000, image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Pebble Grey Metallic', hex: '#64748B', price: 20000, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'}
    ],
    specs: {
      acceleration: '9.0s',
      accelRaw: 9.0,
      topSpeed: '195 km/h',
      topSpeedRaw: 195,
      topSpeedKmh: '195 km/h',
      horsepower: 170,
      torque: '350 Nm @ 1,750-2,500 RPM',
      engine: '2.0L Kryotec Turbocharged In-line 4 Diesel',
      transmission: '6-Speed E-Shifter Automatic with Paddle Controls',
      drivetrain: 'Front-Wheel Drive with Advanced ESP Multi-Terrain Response (Normal, Rough, Wet)',
      weight: '1,780 kg (Land Rover D8 Platform Derived)',
      fuelType: 'Diesel',
      efficiency: '16.8 km/l ARAI Certified',
      soundType: 'v8-turbo'
    },
    highlights: [
      'Land Rover D8 derived OMEGARC architecture with ultra high-strength steel frame',
      'Advanced Level 2 Autonomous Driving Assistance (ADAS) with 11 radar/camera safety sensors',
      '12.3-inch Harman Cinematic infotainment with 10 JBL surround audio and subwoofer',
      'Ventilated front bucket seats with memory function and welcome greeting gesture'
    ],
    description: 'The Tata Harrier Fearless+ Dark Edition is an uncompromising dark beast built on Land Rover’s proven D8 platform. With imposing wide-stance aesthetics, Bharat NCAP 5-Star occupant safety, and a punchy 350 Nm Kryotec diesel engine, it rules Indian highways.'
  },
  {
    id: 'maruti-jimny-allgrip',
    name: 'Maruti Suzuki Jimny Alpha AllGrip Pro',
    brand: 'Maruti Suzuki Nexa',
    brandId: 'maruti-suzuki',
    category: 'tough-4x4',
    categoryName: 'Tough 4x4 & Off-Roaders',
    year: 2025,
    price: 1489000, // ₹14.89 Lakh
    status: 'In Showroom',
    tag: 'Lightweight Himalayan Mountain Goat',
    featured: true,
    badge: 'AllGrip Pro 4x4',
    rating: 4.92,
    reviewsCount: 53,
    images: {
      main: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      front: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      rear: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80'
    },
    colors: [
      { name: 'Kinetic Neon Yellow & Bluish Black', hex: '#D4E157', price: 20000, image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Sizzling Red with Black Roof', hex: '#9E1B24', price: 20000, image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Granite Grey Metallic', hex: '#373A3C', price: 0, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Pearl Arctic White', hex: '#F0F3F4', price: 0, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '11.8s',
      accelRaw: 11.8,
      topSpeed: '160 km/h',
      topSpeedRaw: 160,
      topSpeedKmh: '160 km/h',
      horsepower: 105,
      torque: '134 Nm @ 4,000 RPM',
      engine: '1.5L K15B DualJet 16V VVT Petrol',
      transmission: '5-Speed Manual / 4-Speed Torque Converter AT',
      drivetrain: 'AllGrip Pro Part-Time 4WD with 4L Low-Range Transfer Gear',
      weight: '1,210 kg (Rigid 3-Link Live Axles)',
      fuelType: 'Petrol',
      efficiency: '16.94 km/l ARAI Certified',
      soundType: 'inline4'
    },
    highlights: [
      'Genuine ladder-frame chassis with front and rear 3-link rigid live coil-spring axles',
      'AllGrip Pro 4WD with mechanical low-range transfer case for steep rock crawling',
      'Compact 3,985 mm footprint with 210 mm unladen ground clearance and 36° departure angle',
      'Brake Limited Slip Differential (Brake-LSD) for extreme zero-traction wheel articulation'
    ],
    description: 'The Maruti Suzuki Jimny Alpha AllGrip Pro is India\'s purist mountain explorer. While larger SUVs struggle on narrow cliffside tracks in Kinnaur and Zanskar, the Jimny\'s featherweight ladder-frame construction and authentic live solid axles walk across rock beds with zero hesitation.'
  },
  {
    id: 'pravaig-defy',
    name: 'Pravaig Defy Sovereign Electric SUV',
    brand: 'Pravaig Dynamics',
    brandId: 'pravaig',
    category: 'electric-ev',
    categoryName: 'Indian Electric (EV)',
    year: 2025,
    price: 3950000, // ₹39.50 Lakh
    status: 'Pre-Order Allocation',
    tag: '504 km ARAI Certified Range',
    featured: true,
    badge: 'Engineered in Bengaluru',
    rating: 4.95,
    reviewsCount: 38,
    images: {
      main: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      front: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      rear: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    },
    colors: [
      { name: 'Bengaluru Stealth Obsidian', hex: '#111215', price: 0, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80'},
      { name: 'Siachen Glacier Silver', hex: '#D8DEE9', price: 35000, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Bordeaux Velvet Crimson', hex: '#4A1525', price: 45000, image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Rose Gold Pearl Atelier', hex: '#E8B4B8', price: 50000, image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '4.9s',
      accelRaw: 4.9,
      topSpeed: '210 km/h',
      topSpeedRaw: 210,
      topSpeedKmh: '210 km/h',
      horsepower: 402,
      torque: '620 Nm Instant Torque',
      engine: 'Dual Permanent Magnet Synchronous Motors (Dual-Motor AWD)',
      transmission: 'Single-Speed Integrated Planetary e-Transmission',
      drivetrain: 'Electric Torque Vectoring All-Wheel Drive',
      weight: '2,080 kg (90.9 kWh Heavy-Duty Battery Pack)',
      fuelType: 'Electric',
      efficiency: '504 km ARAI Certified / 150 kW DC Fast Charge in 30 min',
      soundType: 'hyper-electric'
    },
    highlights: [
      'Proprietary 90.9 kWh liquid-cooled battery architecture built for extreme Indian ambient temperatures up to 50°C',
      'Ultra-aerodynamic stealth profile with suicide passenger doors and 234 mm high ground clearance',
      'Aeronautical zero-gravity reclining captain seats with French Devialet 3D spatial acoustics',
      'Dual 15.6-inch touchscreen screens running sovereign encrypted automotive OS'
    ],
    description: 'Designed and built in Bengaluru by Indian EV pioneer Pravaig Dynamics, the Defy brings sovereign stealth aesthetic to the ultra-luxury EV arena. Combining 402 electric horsepower with a 90.9 kWh battery pack, it covers Mumbai to Goa or Delhi to Jaipur on a single silent charge.'
  },
  {
    id: 'defender-110-v8',
    name: 'Land Rover Defender 110 Carpathian V8',
    brand: 'Land Rover India',
    brandId: 'land-rover-india',
    category: 'tough-4x4',
    categoryName: 'Tough 4x4 & Off-Roaders',
    year: 2025,
    price: 23500000, // ₹2.35 Crore
    status: 'Limited Allocation',
    tag: '525 HP Supercharged V8',
    featured: true,
    badge: 'Chakan Assembly Atelier',
    rating: 4.99,
    reviewsCount: 46,
    images: {
      main: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      front: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      rear: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    },
    colors: [
      { name: 'Carpathian Grey Satin with Black Contrast Roof', hex: '#3A3D40', price: 0, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Santorini Black Deep Metallic', hex: '#0A0A0C', price: 150000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Hakuba Snow Silver', hex: '#E5E8EC', price: 150000, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '5.2s',
      accelRaw: 5.2,
      topSpeed: '240 km/h',
      topSpeedRaw: 240,
      topSpeedKmh: '240 km/h',
      horsepower: 525,
      torque: '625 Nm @ 2,500-5,500 RPM',
      engine: '5.0L Supercharged V8 Petrol',
      transmission: '8-Speed ZF Automatic with CommandShift 2',
      drivetrain: 'Permanent All-Wheel Drive with Electronic Active Rear Differential',
      weight: '2,603 kg (D7x Extreme Aluminium Monocoque)',
      fuelType: 'Petrol',
      efficiency: '8.4 km/l / 900 mm Water Wading Depth',
      soundType: 'v8-turbo'
    },
    highlights: [
      'Chakan manufacturing pedigree combined with British engineering heritage',
      'Electronic Air Suspension with adaptive dynamics and 900 mm water wading sensor',
      'Quad outboard exhaust pipes tuned for an intoxicating deep V8 rumble',
      'Bespoke Ebony Windsor leather upholstery with Miko suedecloth and Robustec accents'
    ],
    description: 'The Defender 110 Carpathian V8 represents the pinnacle of high-velocity all-terrain mastery in India. Assembled at the state-of-the-art Tata-owned facility in Pune, its 525 HP supercharged powerplant transforms this mountain-conquering fortress into a supercar-hunting missile on the Mumbai-Pune Expressway.'
  },
  {
    id: 'range-rover-sv-bespoke',
    name: 'Range Rover SV Bespoke Long Wheelbase',
    brand: 'Land Rover India',
    brandId: 'land-rover-india',
    category: 'royalty-luxury',
    categoryName: 'Prestige Royalty & Salons',
    year: 2025,
    price: 41500000, // ₹4.15 Crore
    status: 'VIP Commission',
    tag: 'Sovereign Aristocracy',
    featured: true,
    badge: 'Special Vehicle Operations',
    rating: 5.0,
    reviewsCount: 29,
    images: {
      main: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      front: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      rear: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    },
    colors: [
      { name: 'SV Intrepid British Racing Green', hex: '#0B291B', price: 0, image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Obsidian Noir Ultra Gloss', hex: '#08080A', price: 350000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Bespoke Rose Champagne Silk', hex: '#E2C2C6', price: 500000, image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '4.6s',
      accelRaw: 4.6,
      topSpeed: '261 km/h',
      topSpeedRaw: 261,
      topSpeedKmh: '261 km/h',
      horsepower: 606,
      torque: '750 Nm @ 1,800-5,400 RPM',
      engine: '4.4L Twin-Turbocharged V8 with 48V Mild Hybrid',
      transmission: '8-Speed ZF Automatic with Satin Chrome Paddle Shifters',
      drivetrain: 'Intelligent All-Wheel Drive with All-Wheel Steering (7.3° Rear Wheel Angle)',
      weight: '2,670 kg (Extended 3,197 mm Long Wheelbase)',
      fuelType: 'Petrol',
      efficiency: '9.2 km/l / 1,600W Meridian Signature Sound',
      soundType: 'v8-turbo'
    },
    highlights: [
      'SV Signature Suite: 4-seat configuration with electrically deployable club table and champagne chiller',
      'Ceramic control switchgear with smooth, cool-to-touch diamond finish handcrafted by SV artisans',
      'All-Wheel Steering delivering a tighter turning circle than a standard executive hatchback',
      'Next-generation Active Noise Cancellation in headrest speakers creating a silent acoustic sanctuary'
    ],
    description: 'The Range Rover SV Bespoke Long Wheelbase is the supreme vehicle of choice for India’s corporate titans, royal dynasties, and heads of state. Handcrafted by Special Vehicle Operations (SVO), its cabin offers more legroom than a commercial first-class airline suite, accompanied by effortless 606 horsepower twin-turbo V8 propulsion.'
  },
  {
    id: 'maruti-invicto-alpha',
    name: 'Maruti Suzuki Invicto Alpha+ Strong Hybrid',
    brand: 'Maruti Suzuki Nexa',
    brandId: 'maruti-suzuki',
    category: 'flagship-suv',
    categoryName: 'Flagship Luxury SUVs',
    year: 2025,
    price: 2892000, // ₹28.92 Lakh
    status: 'In Showroom',
    tag: 'Intelligent e-CVT Self-Charging Hybrid',
    featured: false,
    badge: '21.19 km/l Efficiency',
    rating: 4.89,
    reviewsCount: 62,
    images: {
      main: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
      front: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
      rear: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80'
    },
    colors: [
      { name: 'Nexa Celestial Midnight Blue', hex: '#152238', price: 0, image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Mystic Silver Metallic', hex: '#C4C8CE', price: 15000, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Stellar Bronze Dual Tone', hex: '#4E423A', price: 20000, image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '9.5s',
      accelRaw: 9.5,
      topSpeed: '180 km/h',
      topSpeedRaw: 180,
      topSpeedKmh: '180 km/h',
      horsepower: 186,
      torque: '206 Nm Electric + 188 Nm Engine',
      engine: '2.0L 4-Cylinder Atkinson Cycle Petrol + High-Output AC Synchronous Motor',
      transmission: 'e-CVT Electronic Continuously Variable Transmission',
      drivetrain: 'Front-Wheel Drive Self-Charging Intelligent Hybrid',
      weight: '1,730 kg (TNGA High-Rigidity Monocoque)',
      fuelType: 'Strong Hybrid',
      efficiency: '21.19 km/l ARAI Certified (1,050 km per Tank)',
      soundType: 'inline4'
    },
    highlights: [
      'Self-charging strong hybrid system with pure EV silent electric drive mode in dense urban traffic',
      'Ultra-luxury Ottoman Captain Seats in second row with power recline and calf leg-rests',
      'Panoramic acoustic sun-roof with ambient multi-color lighting and rear sunshades',
      'Full suite of electronic active safety with 360-degree high-definition surround camera'
    ],
    description: 'The Invicto Alpha+ represents Nexa’s crown achievement in luxury flagship mobility. Built upon a high-rigidity monocoque with Toyota’s proven fourth-generation self-charging hybrid technology, it delivers limousine comfort, executive ottoman seating, and an astonishing 1,000+ kilometer range on a single fuel tank.'
  },
  {
    id: 'tata-sierra-ev',
    name: 'Tata Sierra EV Concept Reborn',
    brand: 'Tata Motors',
    brandId: 'tata',
    category: 'electric-ev',
    categoryName: 'Indian Electric (EV)',
    year: 2025,
    price: 2499000, // ₹24.99 Lakh
    status: 'Delivering Now',
    tag: 'Iconic Alpine Curved Glass',
    featured: true,
    badge: 'Acti.ev Architecture',
    rating: 4.97,
    reviewsCount: 71,
    images: {
      main: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      front: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      rear: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80'
    },
    colors: [
      { name: 'Himalayan Glacial Blue', hex: '#6D8B98', price: 0, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Obsidian Noir Black', hex: '#111215', price: 20000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80'},
      { name: 'Blossom Rose Pearl White', hex: '#F7E7EB', price: 25000, image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '6.7s',
      accelRaw: 6.7,
      topSpeed: '185 km/h',
      topSpeedRaw: 185,
      topSpeedKmh: '185 km/h',
      horsepower: 204,
      torque: '310 Nm Instant Torque',
      engine: 'Permanent Magnet Synchronous Dual-Motor AWD System',
      transmission: 'Single-Speed E-Transmission with Paddle Regen Selectors',
      drivetrain: 'All-Wheel Electric Drive with Multi-Terrain Response',
      weight: '1,890 kg (65 kWh High-Density NMC Battery Pack)',
      fuelType: 'Electric',
      efficiency: '550 km ARAI Certified Range / V2L & V2V Bidirectional Charging',
      soundType: 'hyper-electric'
    },
    highlights: [
      'Reimagination of India\'s legendary 1991 Sierra with wraparound panoramic alpine rear canopy glass',
      'Revolutionary Acti.ev pure electric platform with flat battery skateboard architecture',
      'Vehicle-to-Load (V2L) capability delivering 3.3 kW AC power to run campsite appliances',
      'Lounge seating arrangement with executive footrest and dual 12.3-inch floating screens'
    ],
    description: 'The Tata Sierra EV reawakens an Indian automotive icon for the electrified age. Retaining the nostalgic curved alpine glass that captured the nation\'s imagination in the 1990s, the new Sierra is built on the Acti.ev skateboard chassis with 550 km range, all-wheel drive, and lounge-grade rear passenger comfort.'
  },
  {
    id: 'vazirani-kaali-gt',
    name: 'Vazirani Kaali GT Carbon Prototype',
    brand: 'Vazirani Automotive',
    brandId: 'vazirani',
    category: 'indigenous-supercar',
    categoryName: 'Indigenous Supercars',
    year: 2026,
    price: 125000000, // ₹12.50 Crore
    status: 'Bespoke Order',
    tag: '1,200 HP Graphene Hyper-Aero',
    featured: true,
    badge: 'Buddh Circuit Record',
    rating: 5.0,
    reviewsCount: 14,
    images: {
      main: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
      front: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
      rear: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80'
    },
    colors: [
      { name: 'Raw Exposed Twill Carbon Noir', hex: '#151518', price: 0, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Cyberpunk Rose Titanium', hex: '#F48FB1', price: 1800000, image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Kashmir Solar Orange', hex: '#FF5722', price: 1500000, image: '/cars/vazirani-shul.jpg' }
    ],
    specs: {
      acceleration: '2.1s',
      accelRaw: 2.1,
      topSpeed: '360 km/h',
      topSpeedRaw: 360,
      topSpeedKmh: '360 km/h',
      horsepower: 1200,
      torque: '1,450 Nm Combined',
      engine: 'Quad Independent Electric Motors with Aeronautical Micro-Turbine Generator',
      transmission: 'Direct-Drive Active Vectoring Transaxle',
      drivetrain: 'Torque Vectoring All-Wheel Drive with Active DRS Aero',
      weight: '1,490 kg (Pre-Preg Carbon-Kevlar Tub)',
      fuelType: 'Turbine Hybrid / Petrol',
      efficiency: '12 km/l equivalent / 400 km Pure Electric Range',
      soundType: 'hyper-electric'
    },
    highlights: [
      'Graphene-enhanced battery pack developed in partnership with leading global nanotech labs',
      'Active front diffuser and rear Drag Reduction System (DRS) wing generating 800 kg downforce at 280 km/h',
      'F1-derived pushrod suspension with multi-mode magnetorheological dampening',
      'Hand-milled aerospace aluminum pedal box and minimalist titanium telemetry cockpit'
    ],
    description: 'The Vazirani Kaali GT is Chunky Vazirani’s wildest aerodynamic statement yet. Engineered to obliterate lap times at the Buddh International Circuit, it delivers 1,200 horsepower through quad-hub motors and an active aerodynamic carbon shell that sucks the car onto the asphalt through high-speed turns.'
  },
  {
    id: 'dc2-cyberster',
    name: 'DC2 Cyberster Mid-Engine Carbon Coupe',
    brand: 'DC2 / DC Design',
    brandId: 'dc2',
    category: 'indigenous-supercar',
    categoryName: 'Indigenous Supercars',
    year: 2025,
    price: 7800000, // ₹78.00 Lakh
    status: 'Coachbuilt Order',
    tag: 'Handcrafted Composite Mid-Engine',
    featured: false,
    badge: 'Pune Coachbuilt Atelier',
    rating: 4.88,
    reviewsCount: 31,
    images: {
      main: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      front: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      side: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      rear: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      interior: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
    },
    colors: [
      { name: 'Matte Cyber Rose Gold', hex: '#DCAEAF', price: 95000, image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Velvet Pitch Black Gloss', hex: '#0D0E10', price: 0, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Monza Scarlet Red', hex: '#C70039', price: 75000, image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80' }
    ],
    specs: {
      acceleration: '4.1s',
      accelRaw: 4.1,
      topSpeed: '285 km/h',
      topSpeedRaw: 285,
      topSpeedKmh: '285 km/h',
      horsepower: 410,
      torque: '500 Nm @ 2,200-5,800 RPM',
      engine: '3.0L Twin-Turbocharged V6 Mid-Mounted',
      transmission: '7-Speed Dual-Clutch Transmission (DCT) with Aluminum Paddles',
      drivetrain: 'Rear-Wheel Drive with Mechanical Limited Slip Differential',
      weight: '1,380 kg (Hand-Laid Carbon-Composite Monocoque)',
      fuelType: 'Petrol',
      efficiency: '10.5 km/l ARAI Certified',
      soundType: 'v6-sport'
    },
    highlights: [
      'Authentic mid-engine rear-wheel-drive dynamics with ideal 43:57 front-to-rear weight distribution',
      'Dihedral scissor doors with soft-close pneumatic actuators and flush carbon aerodynamic handles',
      'Custom Connolly leather cockpit tailored by Dilip Chhabria’s veteran Pune master craftsmen',
      'AP Racing 6-piston monobloc front brake calipers with grooved ventilated floating rotors'
    ],
    description: 'The DC2 Cyberster is Dilip Chhabria’s radical evolution of the Indian mid-engine sports car. Featuring hand-formed carbon-composite coachwork, dihedral butterfly doors, and a twin-turbo V6 producing 410 horsepower, it combines retro-futuristic concept car looks with explosive acceleration.'
  }
];

export const SHOWROOM_LOCATIONS = [
  {
    id: 'mumbai',
    city: 'Mumbai Flagship Atelier',
    address: 'One BKC, G Block, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051',
    phone: '+91 (022) 6900-APEX',
    email: 'mumbai@apexmotors.in',
    hours: 'Mon - Sun: 10:00 AM - 8:30 PM IST',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    curator: 'Aditya Singhania'
  },
  {
    id: 'delhi',
    city: 'New Delhi Aerocity Flagship',
    address: 'Worldmark 1, Hospitality District, Aerocity, New Delhi 110037',
    phone: '+91 (011) 4800-APEX',
    email: 'delhi@apexmotors.in',
    hours: 'Mon - Sun: 10:00 AM - 8:30 PM IST',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    curator: 'Vikramjit Singh Oberoi'
  },
  {
    id: 'bengaluru',
    city: 'Bengaluru Tech Atelier',
    address: 'The Collection, UB City, Vittal Mallya Road, Bengaluru, Karnataka 560001',
    phone: '+91 (080) 3900-APEX',
    email: 'bengaluru@apexmotors.in',
    hours: 'Mon - Sat: 10:30 AM - 8:00 PM IST',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    curator: 'Raghavan Nambiar'
  },
  {
    id: 'hyderabad',
    city: 'Hyderabad Deccan Salon',
    address: 'Road No. 36, Near Jubilee Hills Checkpost, Hyderabad, Telangana 500033',
    phone: '+91 (040) 2900-APEX',
    email: 'hyderabad@apexmotors.in',
    hours: 'Mon - Sat: 10:00 AM - 8:00 PM IST',
    image: 'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?auto=format&fit=crop&w=800&q=80',
    curator: 'Nawab Mir Zafar Ali'
  }
];

export const FAQS_DATA = [
  {
    category: 'Acquisition & Booking',
    question: 'Can I purchase these vehicles with Bharat Series (BH Series) registration?',
    answer: 'Yes! Eligible defense personnel, central/state government employees, and private sector employees with offices in 4 or more states can register vehicles directly under the BH (Bharat) series plate. Our RTO concierge handles all paperwork seamlessly across Maharashtra, Delhi NCR, Karnataka, and Telangana.'
  },
  {
    category: 'Acquisition & Booking',
    question: 'How does the Buddh International Circuit (BIC) Track Day booking work?',
    answer: 'Every high-performance vehicle acquired through APEX MOTORS includes an exclusive private track session at the F1 Buddh International Circuit in Greater Noida. You will be accompanied by our certified Indian racing instructors with telemetric data logging.'
  },
  {
    category: 'Bharat NCAP & Safety',
    question: 'What safety certifications do your featured Indian vehicles hold?',
    answer: 'Our Indian fleet—including the Mahindra Thar ROXX, Scorpio-N, Tata Safari, and Tata Harrier—all proudly hold full Bharat NCAP 5-Star adult and child occupant crash ratings with ultra high-strength steel structures and Level 2 ADAS.'
  },
  {
    category: 'Financing & Leasing',
    question: 'What Indian banking partners provide bespoke financing & balloon leases?',
    answer: 'We have exclusive alliances with HDFC Bank Private Banking, ICICI Bank Wealth, and Kotak Mahindra Bank to offer structured bullet repayments, corporate lease depreciation tax benefits, and competitive interest rates with instant in-salon approvals.'
  },
  {
    category: 'Pan-India Delivery',
    question: 'Do you offer covered flatbed door-to-door delivery across India?',
    answer: 'Yes. We deliver anywhere across India—from Leh to Kanyakumari—using insured, climate-controlled hydraulic covered flatbed trucks with live GPS satellite tracking right to your residence.'
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Gautam Singhal',
    role: 'Industrialist & 4x4 Collector',
    location: 'Bandra West, Mumbai',
    comment: 'Taking delivery of my Thar ROXX AX7L through Apex Motors was an experience of royal precision. The custom accessories and same-day BH series registration were flawlessly managed.',
    carAcquired: 'Mahindra Thar ROXX 4x4',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Ananya Deshmukh',
    role: 'CleanTech Founder',
    location: 'Koramangala, Bengaluru',
    comment: 'The Tata Curvv EV Empowered+ is a masterpiece on Indian highways. Apex Motors arranged high-speed DC home charger installation within 24 hours of delivery.',
    carAcquired: 'Tata Curvv EV Empowered+',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Rajveer Shekhawat',
    role: 'Hospitality Group MD',
    location: 'Golf Links, New Delhi',
    comment: 'Apex Motors is the gold standard for premium automotive acquisitions in India. The Buddh International Circuit handover for our Land Cruiser 300 was unforgettable.',
    carAcquired: 'Toyota Land Cruiser 300 ZX',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Major General Vikram Rathore (Retd.)',
    role: 'Defense Logistics Advisor',
    location: 'Cantonment, Pune',
    comment: 'The Land Rover Defender 110 Carpathian V8 acquired via Apex Atelier is a technological marvel. Their private handover with telemetric off-road setup gave me complete confidence.',
    carAcquired: 'Land Rover Defender 110 V8',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Dr. Tara Krishnan',
    role: 'Quantum Computing Lead',
    location: 'Indiranagar, Bengaluru',
    comment: 'Pravaig Defy represents sovereign Indian electric engineering at its zenith. The bespoke Black and Rose Atelier finish turns heads everywhere from UB City to Whitefield.',
    carAcquired: 'Pravaig Defy Sovereign EV',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];

export const TRACK_EXPEDITIONS_DATA = [
  {
    id: 'bic-grand-prix',
    title: 'Buddh International Circuit (BIC) Track Session',
    subtitle: 'India\'s F1 Grand Prix Circuit • Greater Noida',
    circuitLength: '5.125 km (16 Turns)',
    topSpeedZone: '320+ km/h on Back Straight (1.06 km)',
    description: 'Push your high-performance vehicle to its zenith on the Hermann Tilke designed Formula 1 Grand Prix circuit in Greater Noida with telemetry logging and pro racing mentors.',
    features: [
      'Full FIA Grade 1 circuit telemetry with lap timing beacon and tire temperature analysis',
      'Coaching by certified Indian National Racing & Formula 4 champions',
      'High-speed pit crew support and Pirelli / Michelin track tire fitment',
      'VIP paddock suite hospitality with gourmet dining and helicopter transfer options'
    ],
    pricePerSession: '₹1,50,000 / Day Session',
    availableDates: 'Nov 15-17, 2026 • Dec 06-08, 2026',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    tag: 'Formula 1 Circuit'
  },
  {
    id: 'spiti-ladakh-4x4',
    title: 'Great Himalayan 4X4 Overland Expedition',
    subtitle: 'Manali • Spiti Valley • Leh-Ladakh • Khardung La',
    circuitLength: '1,850 km Extreme High-Altitude Terrain',
    topSpeedZone: '5,359 m (17,582 ft) Altitude Mountain Pass',
    description: 'An escorted high-altitude expedition across India’s most unforgiving terrain in your Mahindra Thar ROXX, Scorpio-N, or Force Gurkha with military satellite backup and technical support convoy.',
    features: [
      'Dedicated hydraulic recovery support truck and mobile mechanic workshop in convoy',
      'Satellite SOS communication, oxygen concentrators, and certified wilderness medical doctor',
      'Glamping luxury dome camps at Pangong Tso, Nubra Valley, and Chandratal lake',
      'Special inner-line permits and military transit clearances pre-arranged by Apex Concierge'
    ],
    pricePerSession: '₹2,85,000 / Slot (8-Day Expedition)',
    availableDates: 'June 2027 • Sept 2027 Bookings Open',
    image: '/cars/force-gurkha-5door.jpg',
    tag: 'Extreme 4x4 Expedition'
  },
  {
    id: 'mic-night-attack',
    title: 'Madras International Circuit (MIC) Apex Night Attack',
    subtitle: 'Irungattukottai, Chennai • FIA Grade 2 Floodlit Circuit',
    circuitLength: '3.717 km (12 High-Speed Sweepers)',
    topSpeedZone: 'Late-Apex Dunlop Curve Telemetry',
    description: 'Experience South India’s legendary motorsport birthplace under competition floodlights with night-vision track cameras and pro endurance racing engineers.',
    features: [
      'Night track conditions simulating Le Mans 24h endurance temperature balance',
      'Bespoke brake caliper thermal imaging and tire pressure optimization',
      'One-on-one apex clipping tuition by Indian touring car champions',
      'VIP seaside clubhouse hospitality in Chennai'
    ],
    pricePerSession: '₹1,10,000 / Night Track Pass',
    availableDates: 'Monthly Every Full Moon Weekend',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
    tag: 'Night Track Attack'
  },
  {
    id: 'thar-desert-raid',
    title: 'Thar Desert Golden Dune Rally Raid',
    subtitle: 'Jaisalmer • Sam Sand Dunes • Longewala Border',
    circuitLength: '650 km Deep Sand Sea & Desert Tracks',
    topSpeedZone: '150-Foot Shifting Sand Dune Crests',
    description: 'Conquer the great Thar Desert in high-performance 4x4s with professional desert raid navigators, sand ladder winch recovery, and royal heritage tented camps.',
    features: [
      'Beadlock off-road wheel fitment and deflated tire pressure dune tactics',
      'Escorted convoy with heavy 6x6 rescue recovery rig and GPS waypoints',
      'Private sunset champagne banquet in the heart of the Sam dunes',
      'Customized desert survival and mechanical sand-extraction masterclass'
    ],
    pricePerSession: '₹2,10,000 / Slot (4-Day Rally Raid)',
    availableDates: 'Dec 2026 • Jan 2027 Bookings Open',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    tag: 'Desert Rally Raid'
  },
  {
    id: 'kari-speedway',
    title: 'Kari Motor Speedway Atelier Challenge',
    subtitle: 'Coimbatore, Tamil Nadu • Technical Cornering Lab',
    circuitLength: '2.10 km (14 Technical Turns)',
    topSpeedZone: 'Late-Braking Chicane Dynamic Tuning',
    description: 'A technical playground for precision steering, chassis poise, and suspension dampening calibration located at the base of the Nilgiri hills in Coimbatore.',
    features: [
      'Cornering g-force telemetry and brake pressure data overlay',
      'Custom ECU remap dyno tuning and suspension geometry alignment on-site',
      'Private 1-on-1 track day with zero traffic congestion',
      'Chassis balance evaluation with factory race engineers'
    ],
    pricePerSession: '₹85,000 / Track Day',
    availableDates: 'Bi-Weekly Every Alternate Weekend',
    image: '/cars/vazirani-shul.jpg',
    tag: 'Technical Track'
  }
];

export const JOURNAL_ARTICLES_DATA = [
  {
    id: 'bharat-ncap-revolution',
    title: 'The Bharat NCAP Triumph: How Indian Chassis Engineering Defeated Global Crash Standards',
    category: 'Engineering & Safety',
    readTime: '6 min read',
    date: 'October 2026',
    excerpt: 'With Tata Safari, Harrier, and Mahindra Thar ROXX scoring highest-ever adult and child safety marks, India has transitioned from a recipient of foreign safety specs to setting global safety benchmarks.',
    author: 'Commander Raghav Mehta (Retd.)',
    authorRole: 'Chief Technical Advisor, Apex Motors',
    image: '/cars/tata-safari-red-dark.jpg',
    badge: 'Spotlight'
  },
  {
    id: 'black-pink-atelier-trend',
    title: 'The Noir & Light Pink Atelier: Bespoke Luxury Trends Sweeping India’s Ultra-Wealthy Collectors',
    category: 'Design & Atelier',
    readTime: '5 min read',
    date: 'October 2026',
    excerpt: 'From custom Rolls-Royce and Range Rover SV bespoke commissions to DC2 and Pravaig showstoppers, discover why the high-contrast Noir Black and Light Pink palette is defining this decade’s private garage aesthetics.',
    author: 'Samir Merchant',
    authorRole: 'Automotive Historian & Style Critic',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    badge: 'Atelier Style'
  },
  {
    id: 'bh-series-tax-guide',
    title: 'Bharat Series (BH) Registration Demystified: How to Save Up to 40% on Vehicle Taxes',
    category: 'RTO & Advisory',
    readTime: '8 min read',
    date: 'October 2026',
    excerpt: 'Everything corporate founders, defense officers, and multi-state enterprise executives need to know about bi-annual BH taxation, nationwide portability without NOCs, and interstate transit.',
    author: 'Kavita Chidambaram, CA',
    authorRole: 'Head of Private Wealth & RTO Concierge',
    image: '/cars/toyota-land-cruiser-300.jpg',
    badge: 'VIP Guide'
  },
  {
    id: 'umling-la-ev-conquest',
    title: 'Conquering Umling La at 19,024 Feet: EV Instant Torque vs Mechanical 4x4 Differentials',
    category: 'Overland & Technical',
    readTime: '7 min read',
    date: 'September 2026',
    excerpt: 'Where atmospheric oxygen drops by 50% choking internal combustion turbochargers, dual-motor electric SUVs maintain 100% torque without gasp. We test the Pravaig Defy and Defender V8 on the world’s highest motorable pass.',
    author: 'Captain Arun Singhania',
    authorRole: 'Lead Expedition Navigator',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    badge: 'Expedition'
  },
  {
    id: 'vazirani-turbine-story',
    title: 'From Mumbai to Monterey: The Untold Story of the Vazirani Shul Turbine Hypercar',
    category: 'Indigenous Supercars',
    readTime: '5 min read',
    date: 'September 2026',
    excerpt: 'How automotive designer Chunky Vazirani teamed up with Michelin and Sahara Force India F1 engineers to create India’s first micro-turbine electric hypercar with unlimited high-speed range.',
    author: 'Samir Merchant',
    authorRole: 'Automotive Historian & Track Reviewer',
    image: '/cars/vazirani-shul.jpg',
    badge: 'Heritage'
  }
];

export const RTO_STATE_TAX_DATA = [
  { state: 'Bharat Series (BH)', rate: 8.0, desc: 'Flat 8% (under ₹10L), 10% (₹10L-₹20L), 12% (>₹20L) paid bi-annually. Seamless pan-India validity without state transfer NOC.' },
  { state: 'Gujarat (GJ)', rate: 6.0, desc: '6% flat road tax on private passenger vehicles. Outstanding fiscal incentives for high-end corporate collections in Ahmedabad & GIFT City.' },
  { state: 'Delhi NCR (DL)', rate: 10.0, desc: '10% (Petrol) to 12.5% (Diesel over ₹20L). Clean electric vehicles enjoy 100% road tax waiver.' },
  { state: 'Rajasthan (RJ)', rate: 10.0, desc: '10% road tax across Jaipur and royal heritage districts with fast-track VIP collector registration.' },
  { state: 'West Bengal (WB)', rate: 10.0, desc: '10% life tax on personal motorcars with immediate Kolkata RTO endorsement.' },
  { state: 'Maharashtra (MH)', rate: 13.0, desc: '11% - 13% for Diesel / Petrol. EV road tax exempted or minimal. High upfront state registration.' },
  { state: 'Telangana (TS)', rate: 14.0, desc: '14% - 15% life tax on vehicles. Instant RTO registration via Jubilee Hills & Cyberabad salons.' },
  { state: 'Tamil Nadu (TN)', rate: 15.0, desc: '15% one-time tax on premium luxury passenger cars across Chennai and Coimbatore.' },
  { state: 'Karnataka (KA)', rate: 18.0, desc: '17% - 18.87% lifetime road tax on luxury vehicles over ₹20 Lakh. BH series offers immense upfront savings.' }
];
