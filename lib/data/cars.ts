export type CarStatus = 'available' | 'sold' | 'pending'
export type CarCategory = 'sedan' | 'suv' | 'sports' | 'luxury' | 'convertible'
export type Transmission = 'manual' | 'automatic'
export type FuelType = 'petrol' | 'diesel' | 'hybrid' | 'electric'

export interface Car {
  id: string
  brand: string
  model: string
  year: number
  price: number
  image: string
  slug: string
  km: number
  fuel: FuelType
  transmission: Transmission
  ownership: number
  registration: string
  bodyType: CarCategory
  status: CarStatus
  seats: number
  condition: 'new' | 'like-new' | 'excellent' | 'good'
  features: string[]
}

export const allCars: Car[] = [
  {
    id: 'car-001',
    brand: 'Mercedes-Benz',
    model: 'G-Class',
    year: 2023,
    price: 1850000,
    image: '/placeholder-car-1.jpg',
    slug: 'mercedes-g-class-2023',
    km: 2500,
    fuel: 'petrol',
    transmission: 'automatic',
    ownership: 1,
    registration: 'Delhi',
    bodyType: 'suv',
    status: 'available',
    seats: 5,
    condition: 'like-new',
    features: ['Sunroof', 'Leather Seats', 'GPS', 'Bluetooth', 'Climate Control']
  },
  {
    id: 'car-002',
    brand: 'BMW',
    model: 'M5',
    year: 2022,
    price: 950000,
    image: '/placeholder-car-2.jpg',
    slug: 'bmw-m5-2022',
    km: 15000,
    fuel: 'petrol',
    transmission: 'automatic',
    ownership: 2,
    registration: 'Mumbai',
    bodyType: 'sedan',
    status: 'sold',
    seats: 5,
    condition: 'excellent',
    features: ['M Sport Package', 'Panoramic Sunroof', 'LED Headlights', 'HiFi System']
  },
  {
    id: 'car-003',
    brand: 'Porsche',
    model: '911 Carrera',
    year: 2024,
    price: 1250000,
    image: '/placeholder-car-3.jpg',
    slug: 'porsche-911-2024',
    km: 800,
    fuel: 'petrol',
    transmission: 'automatic',
    ownership: 1,
    registration: 'Bangalore',
    bodyType: 'sports',
    status: 'available',
    seats: 4,
    condition: 'new',
    features: ['Sports Exhaust', 'Adaptive Suspension', 'Carbon Fiber Trim']
  },
  {
    id: 'car-004',
    brand: 'Audi',
    model: 'R8',
    year: 2023,
    price: 1550000,
    image: '/placeholder-car-4.jpg',
    slug: 'audi-r8-2023',
    km: 5200,
    fuel: 'petrol',
    transmission: 'automatic',
    ownership: 1,
    registration: 'Delhi',
    bodyType: 'sports',
    status: 'available',
    seats: 2,
    condition: 'like-new',
    features: ['Virtual Cockpit', 'Bang & Olufsen Sound', 'Carbon Ceramic Brakes']
  },
  {
    id: 'car-005',
    brand: 'Range Rover',
    model: 'Range Rover',
    year: 2023,
    price: 1100000,
    image: '/placeholder-car-5.jpg',
    slug: 'range-rover-2023',
    km: 8300,
    fuel: 'diesel',
    transmission: 'automatic',
    ownership: 1,
    registration: 'Pune',
    bodyType: 'suv',
    status: 'available',
    seats: 7,
    condition: 'excellent',
    features: ['All-Terrain Response', 'Panoramic Sunroof', 'Premium Audio']
  },
  {
    id: 'car-006',
    brand: 'Bentley',
    model: 'Continental GT',
    year: 2022,
    price: 2100000,
    image: '/placeholder-car-6.jpg',
    slug: 'bentley-continental-2022',
    km: 12000,
    fuel: 'petrol',
    transmission: 'automatic',
    ownership: 1,
    registration: 'Mumbai',
    bodyType: 'luxury',
    status: 'pending',
    seats: 4,
    condition: 'excellent',
    features: ['Handstitched Leather', 'Mulliner Package', 'Quad Exhaust']
  },
  {
    id: 'car-007',
    brand: 'Toyota',
    model: 'Land Cruiser',
    year: 2021,
    price: 850000,
    image: '/placeholder-car-1.jpg',
    slug: 'toyota-land-cruiser-2021',
    km: 22000,
    fuel: 'diesel',
    transmission: 'automatic',
    ownership: 2,
    registration: 'Hyderabad',
    bodyType: 'suv',
    status: 'available',
    seats: 7,
    condition: 'good',
    features: ['Cruise Control', 'ABS', 'Power Windows']
  },
  {
    id: 'car-008',
    brand: 'Ferrari',
    model: 'F8 Tributo',
    year: 2023,
    price: 3200000,
    image: '/placeholder-car-2.jpg',
    slug: 'ferrari-f8-2023',
    km: 1200,
    fuel: 'petrol',
    transmission: 'automatic',
    ownership: 1,
    registration: 'Delhi',
    bodyType: 'sports',
    status: 'available',
    seats: 2,
    condition: 'like-new',
    features: ['F1 Transmission', 'Carbon Fiber', 'Adaptive Aerodynamics']
  },
  {
    id: 'car-009',
    brand: 'Jaguar',
    model: 'XE',
    year: 2021,
    price: 650000,
    image: '/placeholder-car-3.jpg',
    slug: 'jaguar-xe-2021',
    km: 35000,
    fuel: 'petrol',
    transmission: 'automatic',
    ownership: 3,
    registration: 'Chennai',
    bodyType: 'sedan',
    status: 'sold',
    seats: 5,
    condition: 'good',
    features: ['Touchscreen', 'Keyless Entry', 'Backup Camera']
  },
  {
    id: 'car-010',
    brand: 'Lamborghini',
    model: 'Urus',
    year: 2023,
    price: 2800000,
    image: '/placeholder-car-4.jpg',
    slug: 'lamborghini-urus-2023',
    km: 3500,
    fuel: 'petrol',
    transmission: 'automatic',
    ownership: 1,
    registration: 'Bangalore',
    bodyType: 'suv',
    status: 'available',
    seats: 4,
    condition: 'like-new',
    features: ['Air Suspension', 'Night Vision', 'Carbon Interior']
  }
]

export function getCarsByFilters(filters: {
  brand?: string
  status?: CarStatus
  bodyType?: CarCategory
  minPrice?: number
  maxPrice?: number
  fuelType?: FuelType
  transmission?: Transmission
  minYear?: number
  maxYear?: number
  ownership?: number
  registration?: string
}) {
  return allCars.filter(car => {
    if (filters.brand && car.brand !== filters.brand) return false
    if (filters.status && car.status !== filters.status) return false
    if (filters.bodyType && car.bodyType !== filters.bodyType) return false
    if (filters.minPrice && car.price < filters.minPrice) return false
    if (filters.maxPrice && car.price > filters.maxPrice) return false
    if (filters.fuelType && car.fuel !== filters.fuelType) return false
    if (filters.transmission && car.transmission !== filters.transmission) return false
    if (filters.minYear && car.year < filters.minYear) return false
    if (filters.maxYear && car.year > filters.maxYear) return false
    if (filters.ownership && car.ownership > filters.ownership) return false
    if (filters.registration && car.registration !== filters.registration) return false
    return true
  })
}

export function sortCars(cars: Car[], sortBy: string) {
  const sorted = [...cars]
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price)
    case 'year-newest':
      return sorted.sort((a, b) => b.year - a.year)
    case 'year-oldest':
      return sorted.sort((a, b) => a.year - b.year)
    case 'km-low':
      return sorted.sort((a, b) => a.km - b.km)
    default:
      return sorted
  }
}

export function getUniqueBrands() {
  return Array.from(new Set(allCars.map(car => car.brand))).sort()
}

export function getUniqueRegistrations() {
  return Array.from(new Set(allCars.map(car => car.registration))).sort()
}

export function getCarsByStatus(status: CarStatus) {
  return allCars.filter(car => car.status === status)
}

export function getCarBySlug(slug: string) {
  return allCars.find(car => car.slug === slug)
}
