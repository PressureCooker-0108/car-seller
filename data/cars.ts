export type CarStatus = 'available' | 'sold'
export type CarCategory = 'pre-loved' | 'unregistered'
export type BodyType = 'Sedan' | 'SUV' | 'Coupe' | 'Hatchback' | 'Convertible' | 'Wagon'

export interface CarType {
  slug: string
  brand: string
  model: string
  year: number
  price: number
  seats: number
  fuel: string
  km: number
  transmission: string
  ownership: string
  registration: string
  carNumber: string
  bodyType: BodyType
  status: CarStatus
  category: CarCategory
  color: string
  exterior: string[]
  interior: string[]
  performance: string[]
  technology: string[]
  safety: string[]
  warrantyUntil?: string
  image?: string
  engine?: string
  power?: string
  torque?: string
  mileageARAI?: string
  insurance?: string
  lastService?: string
}

export const allCars: CarType[] = [
  {
    slug: 'mercedes-c200-2023',
    brand: 'Mercedes-Benz',
    model: 'C 200',
    year: 2023,
    price: 4790000,
    seats: 5,
    fuel: 'Petrol',
    km: 10000,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'MH-02',
    carNumber: '6757',
    bodyType: 'Sedan',
    status: 'available',
    category: 'pre-loved',
    color: 'Obsidian Black',
    warrantyUntil: '07/2028',
    exterior: ['Sleek & Modern C-Class Design','Signature Mercedes Star Grille','LED High Performance Headlamps with DRLs','Alloy Wheels','Elegant Luxury Sedan Presence'],
    interior: ['Premium Leather Upholstery','Ambient Lighting (Multi-Color)','Electrically Adjustable Seats with Memory','High-Quality Dashboard Finish','Spacious & Comfortable Cabin'],
    performance: ['1.5L Turbo Petrol Engine with Mild Hybrid','9G-TRONIC Automatic Transmission','Smooth & Efficient Drive','Multiple Drive Modes (Eco / Comfort / Sport)'],
    technology: ['MBUX Infotainment System','Large Vertical Touchscreen Display','Apple CarPlay & Android Auto','Voice Command (Hey Mercedes)','Digital Instrument Cluster'],
    safety: ['Reverse Camera with Parking Sensors','Cruise Control','Attention Assist','Multiple Airbags','Advanced Driver Assistance Systems'],
    engine: '1496 cc, 4 Cylinders Inline',
    power: '201 bhp @ 5800 rpm',
    torque: '300 Nm @ 1800 rpm',
    mileageARAI: '16.9 kmpl',
    insurance: 'Comprehensive until 09/2024',
    lastService: 'March 2024 (9,500 km)',
  },
  {
    slug: 'mercedes-glc-200-4matic-2022',
    brand: 'Mercedes-Benz',
    model: 'GLC 200 4MATIC',
    year: 2022,
    price: 4890000,
    seats: 5,
    fuel: 'Petrol',
    km: 13000,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'MH-01',
    carNumber: '8544',
    bodyType: 'SUV',
    status: 'available',
    category: 'pre-loved',
    color: 'Polar White',
    exterior: ['Elegant Mercedes SUV Styling','LED High Performance Headlamps with DRLs','Diamond Radiator Grille','Alloy Wheels','Electrically Folding ORVMs','Premium Road Presence'],
    interior: ['Premium Leather Upholstery','Heated & Massaging Front Seats','Electrically Adjustable Seats with Memory','Ambient Lighting','Dual-Zone Automatic Climate Control','Rear Armrest with Cupholders','Spacious & Comfortable Cabin'],
    performance: ['2.0L Turbocharged Petrol Engine (~197 hp)','9G-TRONIC Automatic Transmission','4MATIC All-Wheel Drive','Drive Modes: Eco / Comfort / Sport','Smooth & Refined Driving Experience'],
    technology: ['MBUX Infotainment System','Apple CarPlay & Android Auto','Reverse Camera with Parking Sensors','Active Parking Assist','Cruise Control','Multiple Airbags & Safety Systems'],
    safety: ['Active Parking Assist','Multiple Airbags','Advanced Safety Systems','Lane Keep Assist','Blind Spot Monitoring'],
    engine: '1991 cc, 4 Cylinders Inline',
    power: '194 bhp @ 5500 rpm',
    torque: '320 Nm @ 1650 rpm',
    mileageARAI: '12.1 kmpl',
    insurance: 'Zero-Dep until 12/2024',
    lastService: 'January 2024 (12,200 km)',
  },
  {
    slug: 'range-rover-sport-se-3-diesel-2021',
    brand: 'Range Rover',
    model: 'Sport SE 3.0 Diesel',
    year: 2021,
    price: 9900000,
    seats: 5,
    fuel: 'Diesel',
    km: 17000,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'MH',
    carNumber: '0055',
    bodyType: 'SUV',
    status: 'available',
    category: 'pre-loved',
    color: 'Gondwana Stone',
    exterior: ['Gondwana Stone Premium Metallic Finish','Signature Range Rover Sport Design','Deployable Side Foot Steps','LED Headlamps with DRLs','Electrically Operated Tailgate','Strong Road Presence'],
    interior: ['Premium Leather Upholstery','Spacious Luxury Cabin','Front Centre Console Refrigerator','Electrically Adjustable Seats','Multi-Zone Climate Control','Rear Armrest with Cupholders'],
    performance: ['3.0L V6 Diesel Engine (~300 hp / 650 Nm)','8-Speed Automatic Transmission','All-Wheel Drive (AWD)','Terrain Response System','Air Suspension for Superior Ride Comfort','Excellent Highway & Off-Road Performance'],
    technology: ['Touchscreen Infotainment System','Reverse Camera & Parking Sensors','Cruise Control','Hill Assist / Hill Descent Control','Multiple Driving Modes'],
    safety: ['Hill Descent Control','Multiple Airbags','Parking Sensors','Emergency Brake Assist','Stability Control'],
    engine: '2997 cc, 6 Cylinders Inline',
    power: '345 bhp @ 4000 rpm',
    torque: '700 Nm @ 1500 rpm',
    mileageARAI: '11.8 kmpl',
    insurance: 'Comprehensive until 05/2025',
    lastService: 'February 2024 (16,000 km)',
  },
  {
    slug: 'bmw-x5-xdrive40i-m-sport-2022',
    brand: 'BMW',
    model: 'X5 xDrive40i M Sport',
    year: 2022,
    price: 9500000,
    seats: 5,
    fuel: 'Petrol',
    km: 18000,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'DL',
    carNumber: '7821',
    bodyType: 'SUV',
    status: 'available',
    category: 'pre-loved',
    color: 'Carbon Black Metallic',
    exterior: ['M Sport Aerodynamic Package','Kidney Grille with Chrome Surround','Adaptive LED Headlights','20-inch M Light Alloy Wheels','Panoramic Glass Sunroof','Striking Luxury SUV Stance'],
    interior: ['Vernasca Leather Upholstery','M Sport Seats with Heating','Ambient Lighting (Multi-Color)','Panoramic Sunroof','4-Zone Climate Control','Harman Kardon Surround Sound'],
    performance: ['3.0L TwinPower Turbo Inline-6 (~340 hp)','8-Speed Steptronic Automatic','xDrive All-Wheel Drive','Launch Control','Dynamic Damper Control','Sport & Sport+ Drive Modes'],
    technology: ['BMW Live Cockpit Professional','12.3-inch Touchscreen iDrive 7','Apple CarPlay & Android Auto','Head-Up Display','Gesture Control','BMW ConnectedDrive'],
    safety: ['Active Guard Plus','Driving Assistant Professional','Surround View Camera','Parking Assistant Plus','Front & Rear Cross-Traffic Alert','10 Airbags'],
    engine: '2998 cc, 6 Cylinders Inline',
    power: '335 bhp @ 5500 rpm',
    torque: '450 Nm @ 1500 rpm',
    mileageARAI: '11.2 kmpl',
    insurance: 'Zero-Dep until 08/2024',
    lastService: 'April 2024 (17,500 km)',
  },
  {
    slug: 'porsche-cayenne-coupe-2021',
    brand: 'Porsche',
    model: 'Cayenne Coupe',
    year: 2021,
    price: 14500000,
    seats: 5,
    fuel: 'Petrol',
    km: 12000,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'MH',
    carNumber: '4421',
    bodyType: 'SUV',
    status: 'available',
    category: 'pre-loved',
    color: 'Carrara White Metallic',
    exterior: ['Distinctive Coupe Roofline','Sport Design Front Apron','21-inch RS Spyder Design Wheels','Adaptive Roof Spoiler','LED Matrix Headlights with PDLS+','Panoramic Fixed Glass Roof'],
    interior: ['Two-Tone Leather Interior','14-way Adaptive Sport Seats','GT Sport Steering Wheel','12-inch Passenger Display','Ambient Lighting Package','Bose Surround Sound System'],
    performance: ['3.0L V6 Turbo (~340 hp)','8-Speed Tiptronic S Automatic','Porsche Traction Management (PTM)','PASM Sport Suspension','Sport Chrono Package','0-100 km/h in 5.9 seconds'],
    technology: ['Porsche Communication Management (PCM)','10.9-inch Touchscreen','Apple CarPlay','Wireless Charging','BOSE Surround Sound','Night Vision Assist'],
    safety: ['InnoDrive with Map Data','Lane Change Assist','Surround View','Active Lane Keep Assist','Traffic Sign Recognition','Emergency Brake Assist'],
    engine: '2995 cc, 6 Cylinders V Shape',
    power: '335 bhp @ 5300 rpm',
    torque: '450 Nm @ 1340 rpm',
    mileageARAI: '10.7 kmpl',
    insurance: 'Comprehensive until 11/2024',
    lastService: 'December 2023 (11,000 km)',
  },
  {
    slug: 'audi-q8-55-tfsi-quattro-2022',
    brand: 'Audi',
    model: 'Q8 55 TFSI quattro',
    year: 2022,
    price: 11500000,
    seats: 5,
    fuel: 'Petrol',
    km: 21000,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'KA',
    carNumber: '1134',
    bodyType: 'SUV',
    status: 'available',
    category: 'pre-loved',
    color: 'Navarra Blue Metallic',
    exterior: ['Signature Octagonal Singleframe Grille','Matrix LED Headlights','22-inch Alloy Wheels','Air Suspension with Adaptive Damping','Power-Operated Tailgate','Panoramic Sunroof'],
    interior: ['Valcona Leather Upholstery','S Line Sport Seats','Bang & Olufsen 3D Premium Sound','Dual OLED MMI Touchscreens','Four-Zone Climate Control','Ambient Lighting Package'],
    performance: ['3.0L TFSI V6 (~340 hp / 500 Nm)','8-Speed Tiptronic Automatic','quattro All-Wheel Drive','Sport Differential','Air Suspension','Drive Select with 7 Modes'],
    technology: ['MMI Navigation Plus','Virtual Cockpit Plus (12.3-inch)','Audi Phone Box','Head-Up Display','Audi Connect Services','Wi-Fi Hotspot'],
    safety: ['Audi Pre-Sense City','Rear Cross Traffic Assist','360-Degree Camera','Lane Departure Warning','Adaptive Cruise Assist','8 Airbags'],
    engine: '2995 cc, 6 Cylinders V Shape',
    power: '335 bhp @ 5000 rpm',
    torque: '500 Nm @ 1370 rpm',
    mileageARAI: '9.8 kmpl',
    insurance: 'Zero-Dep until 02/2025',
    lastService: 'October 2023 (19,500 km)',
  },
  {
    slug: 'mercedes-gle-450-4matic-2023',
    brand: 'Mercedes-Benz',
    model: 'GLE 450 4MATIC',
    year: 2023,
    price: 13200000,
    seats: 5,
    fuel: 'Petrol',
    km: 8000,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'MH',
    carNumber: '9911',
    bodyType: 'SUV',
    status: 'available',
    category: 'pre-loved',
    color: 'Selenite Grey Metallic',
    exterior: ['AMG Line Exterior Package','Multibeam LED Headlights','21-inch AMG Alloy Wheels','Air Body Control Suspension','Panoramic Sliding Sunroof','Chrome Running Boards'],
    interior: ['Nappa Leather Upholstery','Burmester® 3D Surround Sound','Heated & Ventilated Front Seats','Electrically Reclining Rear Seats','Dual 12.3-inch MBUX Display','64-Colour Ambient Lighting'],
    performance: ['3.0L Inline-6 Turbo + EQ Boost (~367 hp)','9G-TRONIC Automatic','4MATIC All-Wheel Drive','E-ACTIVE BODY CONTROL','AIR BODY CONTROL Air Suspension','0-100 in 5.7s'],
    technology: ['MBUX with Augmented Reality Navigation','Hey Mercedes Voice Assistant','Wireless Apple CarPlay & Android Auto','Head-Up Display','Energizing Coach','Remote Parking Assist'],
    safety: ['Active Distance Assist DISTRONIC','Active Steering Assist','Active Lane Change Assist','Attention Assist','Pre-Safe System','360° Camera'],
    engine: '2999 cc, 6 Cylinders Inline',
    power: '362 bhp @ 5500 rpm',
    torque: '500 Nm @ 1600 rpm',
    mileageARAI: '11.1 kmpl',
    insurance: 'Comprehensive until 07/2025',
    lastService: 'January 2024 (7,200 km)',
  },
  {
    slug: 'lamborghini-urus-2021',
    brand: 'Lamborghini',
    model: 'Urus',
    year: 2021,
    price: 38500000,
    seats: 5,
    fuel: 'Petrol',
    km: 9000,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'MH',
    carNumber: '0007',
    bodyType: 'SUV',
    status: 'sold',
    category: 'pre-loved',
    color: 'Giallo Auge Pearl',
    exterior: ['Iconic Lamborghini Hexagonal Design Language','Y-Shaped LED DRL Headlights','22-inch Taigete Forged Alloy Wheels','Carbon Fiber Front Splitter & Diffuser','Sport Exhaust System','Panoramic Sunroof'],
    interior: ['Full Alcantara & Leather Interior','12-way Power Sport Seats with Heating','Carbon Fiber Trim Package','Tri-Zone Climate Control','Lamborghini Infotainment System with Dual Screens','Premium Sound System'],
    performance: ['4.0L Twin-Turbo V8 (~650 hp / 850 Nm)','8-Speed Automatic Transmission','All-Wheel Drive','Torque Vectoring Rear Differential','6 Drive Modes incl. Terra & Neve','0-100 km/h in 3.6 seconds'],
    technology: ['Lamborghini Infotainment System','12.3-inch Digital Driver Display','8.4-inch Central Touchscreen','Apple CarPlay & Android Auto','Lamborghini Connect App','Night Vision Camera'],
    safety: ['Emergency Brake Assist','Stability Control with Terrain Selector','360° Surround View Camera','Hill Descent Control','Traffic Sign Recognition','8 Airbags'],
    engine: '3996 cc, 8 Cylinders V Shape',
    power: '641 bhp @ 6000 rpm',
    torque: '850 Nm @ 2250 rpm',
    mileageARAI: '7.8 kmpl',
    insurance: 'Comprehensive until 03/2025',
    lastService: 'May 2024 (8,800 km)',
  },
  {
    slug: 'bmw-7-series-740li-2023',
    brand: 'BMW',
    model: '7 Series 740Li',
    year: 2023,
    price: 17200000,
    seats: 5,
    fuel: 'Petrol',
    km: 6000,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'DL',
    carNumber: '0011',
    bodyType: 'Sedan',
    status: 'available',
    category: 'pre-loved',
    color: 'Frozen Pure Grey Metallic',
    exterior: ['Iconic BMW Kidney Grille (Illuminated)','Crystal Headlights with Adaptive Beams','21-inch M Aerodynamic Wheels','Rear Crystal Tail Lamps','Seamless Flush Door Handles','Panoramic Glass Roof Sky Lounge'],
    interior: ['Merino Full Leather Interior','Executive Lounge Rear Seating','Bowers & Wilkins Diamond Surround Sound','31-inch Theatre Screen (Rear)','Panoramic Sky Lounge Glass Roof','5-Zone Climate Control'],
    performance: ['3.0L Inline-6 TwinPower Turbo (~375 hp)','8-Speed Steptronic Sport Automatic','xDrive All-Wheel Drive','Integral Active Steering','Air Suspension with Adaptive Dampers','Executive Drive Pro'],
    technology: ['BMW iDrive 8 with 14.9-inch Curved Display','Augmented Reality Head-Up Display','BMW Personal Assistant','5G Connectivity','Smart Home Integration','Parking Assistant Professional with Remote'],
    safety: ['Driving Assistant Professional','Active Cruise Control with Stop & Go','Emergency Stop Assistant','Collision Avoidance','Blind Spot Detection','12 Airbags'],
    engine: '2998 cc, 6 Cylinders Inline',
    power: '375 bhp @ 5200 rpm',
    torque: '520 Nm @ 1850 rpm',
    mileageARAI: '12.6 kmpl',
    insurance: 'Zero-Dep until 10/2025',
    lastService: 'February 2024 (5,200 km)',
  },
  {
    slug: 'porsche-macan-s-2022',
    brand: 'Porsche',
    model: 'Macan S',
    year: 2022,
    price: 8900000,
    seats: 5,
    fuel: 'Petrol',
    km: 14000,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'MH',
    carNumber: '3366',
    bodyType: 'SUV',
    status: 'available',
    category: 'pre-loved',
    color: 'Mamba Green Metallic',
    exterior: ['Sport Design Front Apron','LED Headlights with PDLS','20-inch RS Spyder Design Wheels','Panoramic Fixed Sunroof','Sport Exhaust System','Tinted Privacy Glass'],
    interior: ['Sport Seats Plus with Leather/Race-Tex','GT Sport Multifunction Steering Wheel','14-way Power Adjustable Seats','Bose Surround Sound System','Porsche Communication Management','Ambient Interior Lighting'],
    performance: ['2.9L V6 Biturbo (~380 hp / 520 Nm)','7-Speed PDK Dual-Clutch Automatic','Porsche Traction Management AWD','PASM Sport Suspension','Sport Chrono Package','0-100 km/h in 4.6 seconds'],
    technology: ['PCM with 11-inch Touchscreen','Apple CarPlay','Bose Surround Sound 14-Speaker','Online Navigation with Real-Time Traffic','Smartphone Integration','Wi-Fi Hotspot'],
    safety: ['Porsche InnoDrive','Lane Change Assist (Blind Spot)','Surround View Camera','Front & Rear Parking Sensors with Camera','Emergency Brake Assist','8 Airbags'],
    engine: '2894 cc, 6 Cylinders V Shape',
    power: '375 bhp @ 5200 rpm',
    torque: '520 Nm @ 1850 rpm',
    mileageARAI: '10.2 kmpl',
    insurance: 'Comprehensive until 06/2025',
    lastService: 'January 2024 (13,500 km)',
  },
  {
    slug: 'audi-rs5-sportback-2021',
    brand: 'Audi',
    model: 'RS5 Sportback',
    year: 2021,
    price: 10200000,
    seats: 5,
    fuel: 'Petrol',
    km: 22000,
    transmission: 'Automatic',
    ownership: 'Second Owner',
    registration: 'MH',
    carNumber: '7788',
    bodyType: 'Sedan',
    status: 'sold',
    category: 'pre-loved',
    color: 'Nardo Grey',
    exterior: ['Exclusive RS Design with Single-Frame Grille','Matrix LED Headlights','20-inch RS Alloy Wheels','RS Sport Exhaust with Oval Tips','Carbon Fiber Mirror Caps','Panoramic Sunroof'],
    interior: ['RS Sport Seats in Fine Nappa Leather','Carbon Fiber Interior Trim','Alcantara Steering Wheel with RS Logo','Bang & Olufsen 3D Premium Sound','Virtual Cockpit Plus','RS-Specific Ambient Lighting'],
    performance: ['2.9L TFSI V6 Biturbo (~450 hp / 600 Nm)','8-Speed Tiptronic Automatic','quattro All-Wheel Drive with Sport Differential','RS-Tuned Adaptive Air Suspension','Launch Control','0-100 km/h in 3.9 seconds'],
    technology: ['MMI Navigation Plus','12.3-inch Virtual Cockpit Plus','Audi Phone Box with Wireless Charging','Head-Up Display','Audi Pre-Sense Front & Rear','Bang & Olufsen Sound System'],
    safety: ['Audi Pre-Sense Front','Rear Cross-Traffic Assist','Lane Departure Warning','Traffic Sign Recognition','360° Camera System','8 Airbags'],
    engine: '2894 cc, 6 Cylinders V Shape',
    power: '444 bhp @ 5700 rpm',
    torque: '600 Nm @ 1900 rpm',
    mileageARAI: '10.8 kmpl',
    insurance: 'Comprehensive until 12/2024',
    lastService: 'September 2023 (21,000 km)',
  },
  {
    slug: 'volvo-xc90-b6-awd-2023',
    brand: 'Volvo',
    model: 'XC90 B6 AWD',
    year: 2023,
    price: 9850000,
    seats: 7,
    fuel: 'Petrol',
    km: 11000,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'MH',
    carNumber: '4455',
    bodyType: 'SUV',
    status: 'available',
    category: 'pre-loved',
    color: 'Crystal White Pearl',
    exterior: ['Thor Hammer LED Headlights','20-inch 5-Y Spoke Alloy Wheels','Panoramic Sunroof','Air Suspension','Power-Operated Tailgate','Chrome Side Moulding'],
    interior: ['Nappa Leather Upholstery (7-Seat)','Bowers & Wilkins 3D Premium Sound (19 Speakers)','Heated Front, Rear & Steering Wheel','Ventilated Front Seats','4-Zone Climate Control','Crystal Gear Shift & Decoration'],
    performance: ['2.0L 4-Cylinder B6 Mild Hybrid (~300 hp)','8-Speed Geartronic Automatic','All-Wheel Drive','Air Suspension with Comfort/Dynamic Modes','Torque Vectoring','Eco / Comfort / Dynamic Drive Modes'],
    technology: ['9-inch Google-Powered Infotainment','Wireless Apple CarPlay & Android Auto','Google Maps Integration','Pilot Assist (Semi-Autonomous)','360° Camera','Volvo On Call App'],
    safety: ['City Safety with Auto-Brake','Pilot Assist Semi-Autonomous Drive','Run-Off Road Mitigation','Oncoming Lane Mitigation','Cross Traffic Alert','8 Airbags'],
    engine: '1969 cc, 4 Cylinders Inline',
    power: '300 bhp @ 5400 rpm',
    torque: '420 Nm @ 2100 rpm',
    mileageARAI: '11.04 kmpl',
    insurance: 'Zero-Dep until 04/2025',
    lastService: 'December 2023 (10,500 km)',
  },
  {
    slug: 'lexus-lx-500d-2023',
    brand: 'Lexus',
    model: 'LX 500d',
    year: 2023,
    price: 24500000,
    seats: 7,
    fuel: 'Diesel',
    km: 7500,
    transmission: 'Automatic',
    ownership: 'Single Owner',
    registration: 'MH',
    carNumber: '0088',
    bodyType: 'SUV',
    status: 'available',
    category: 'pre-loved',
    color: 'Sonic Titanium',
    exterior: ['Lexus Spindle Grille with New Design Language','Triple LED Headlights with AHS','22-inch Forged Alloy Wheels','Power Running Boards (Auto-Deploying)','Power Rear Door','Integrated Roof Rails'],
    interior: ['Semi-Aniline Leather (7-Seat)','Mark Levinson 25-Speaker Reference Surround','Captain Seats (2nd Row)','Rear Fridge Compartment','4-Zone Climate Control','Rear Entertainment System'],
    performance: ['3.3L V6 Twin-Turbo Diesel (~309 hp / 700 Nm)','10-Speed Automatic Transmission','Full-Time 4WD with Locking Center Diff','Multi-Terrain Select (7 Modes)','Crawl Control','Kinetic Dynamic Suspension System'],
    technology: ['14-inch Touchscreen','12.3-inch Digital Instrument Cluster','Wireless Apple CarPlay & Android Auto','Bird\'s Eye View Camera','Lexus Interface with Cloud Navigation','Wi-Fi Hotspot'],
    safety: ['Lexus Safety System+ 3.0','Radar Cruise Control with Curve Speed Management','Front Cross Traffic Alert','Blind Spot Monitor','Night View System','10 Airbags'],
    engine: '3346 cc, 6 Cylinders V Shape',
    power: '304 bhp @ 4000 rpm',
    torque: '700 Nm @ 1600 rpm',
    mileageARAI: '9.4 kmpl',
    insurance: 'Comprehensive until 08/2025',
    lastService: 'January 2024 (7,000 km)',
  },
]

// ─── Helper Functions ────────────────────────────────────────────────────────

export function getCarBySlug(slug: string): CarType | undefined {
  return allCars.find(car => car.slug === slug)
}

export function getCarsByStatus(status: CarStatus): CarType[] {
  return allCars.filter(car => car.status === status)
}

export function getCarsByCategory(category: CarCategory): CarType[] {
  return allCars.filter(car => car.category === category)
}

export function getUniqueBrands(): string[] {
  return Array.from(new Set(allCars.map(car => car.brand))).sort()
}

export function getUniqueBodyTypes(): BodyType[] {
  return Array.from(new Set(allCars.map(car => car.bodyType))) as BodyType[]
}

export function getRelatedCars(car: CarType, count = 3): CarType[] {
  return allCars
    .filter(c => c.slug !== car.slug && (c.brand === car.brand || c.bodyType === car.bodyType))
    .slice(0, count)
}

export function filterCars(cars: CarType[], filters: {
  brand?: string
  bodyType?: string
  fuel?: string
  transmission?: string
  status?: string
  category?: string
  minPrice?: number
  maxPrice?: number
  minKm?: number
  maxKm?: number
  minYear?: number
  maxYear?: number
  ownership?: string
}): CarType[] {
  return cars.filter(car => {
    if (filters.brand && car.brand !== filters.brand) return false
    if (filters.bodyType && car.bodyType !== filters.bodyType) return false
    if (filters.fuel && car.fuel !== filters.fuel) return false
    if (filters.transmission && car.transmission !== filters.transmission) return false
    if (filters.status && car.status !== filters.status) return false
    if (filters.category && car.category !== filters.category) return false
    if (filters.minPrice && car.price < filters.minPrice) return false
    if (filters.maxPrice && car.price > filters.maxPrice) return false
    if (filters.minKm && car.km < filters.minKm) return false
    if (filters.maxKm && car.km > filters.maxKm) return false
    if (filters.minYear && car.year < filters.minYear) return false
    if (filters.maxYear && car.year > filters.maxYear) return false
    if (filters.ownership && car.ownership !== filters.ownership) return false
    return true
  })
}

export function sortCars(cars: CarType[], sortBy: string): CarType[] {
  const sorted = [...cars]
  switch (sortBy) {
    case 'price-low': return sorted.sort((a, b) => a.price - b.price)
    case 'price-high': return sorted.sort((a, b) => b.price - a.price)
    case 'year-newest': return sorted.sort((a, b) => b.year - a.year)
    case 'year-oldest': return sorted.sort((a, b) => a.year - b.year)
    case 'km-low': return sorted.sort((a, b) => a.km - b.km)
    default: return sorted
  }
}
