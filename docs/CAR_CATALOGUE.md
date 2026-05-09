# Car Catalogue System Documentation

## Overview

The Car Catalogue system provides a complete luxury car dealership experience with advanced filtering, sorting, and individual car detail pages. All cars are stored in a centralized data layer and can be easily managed and displayed across the application.

## Architecture

### Data Layer (`/lib/data/cars.ts`)

The data layer manages all car information with TypeScript interfaces and utility functions:

```
export interface Car {
  id: string
  brand: string
  model: string
  year: number
  price: number (in Indian Rupees)
  image: string
  slug: string (URL-friendly identifier)
  km: number (mileage)
  fuel: 'petrol' | 'diesel' | 'hybrid' | 'electric'
  transmission: 'manual' | 'automatic'
  ownership: number (number of previous owners)
  registration: string (location)
  bodyType: 'sedan' | 'suv' | 'sports' | 'luxury' | 'convertible'
  status: 'available' | 'sold' | 'pending'
  seats: number
  condition: 'new' | 'like-new' | 'excellent' | 'good'
  features: string[] (list of features)
}
```

#### Available Functions:

- `getCarsByFilters(filters)` - Filter cars by multiple criteria
- `sortCars(cars, sortBy)` - Sort cars by price, year, or mileage
- `getUniqueBrands()` - Get all unique car brands
- `getUniqueRegistrations()` - Get all unique registration locations
- `getCarsByStatus(status)` - Filter cars by availability status
- `getCarBySlug(slug)` - Get a specific car by slug

### Pages

#### `/shop` - Car Catalogue
The main shopping page with advanced filtering and sorting.

**Features:**
- **Filter Sidebar**: 10 filter categories including brand, status, body type, fuel type, transmission, registration, and price/year/km ranges
- **Sort Bar**: Sort by price, year, or mileage
- **Tab Navigation**: Filter by All/Available/Sold/Pending
- **Responsive Grid**: 3-column on desktop, 2-column on tablet, 1-column on mobile
- **URL Query Params**: All filters are synced to URL for shareable links

**URL Query Parameters:**
```
?brand=Mercedes-Benz&status=available&bodyType=suv&fuel=diesel&minPrice=500000&maxPrice=2000000&sort=price-low&tab=available
```

#### `/cars/[slug]` - Car Details
Individual car detail page with complete specifications.

**Features:**
- High-resolution car image
- Complete specifications (mileage, fuel, transmission, ownership, registration, condition)
- Features list with visual indicators
- Price display with call-to-action buttons
- Status badges (SOLD, Pending, etc.)
- Contact information
- Back to shop navigation

### Components

#### FilterSidebar (`/components/shop/filter-sidebar.tsx`)
- **10 Filter Categories:**
  1. Brand (dropdown of all brands)
  2. Availability Status
  3. Body Type
  4. Fuel Type
  5. Transmission
  6. Registration Location
  7. Price Range (min/max inputs)
  8. Year Range (min/max inputs)
  9. Mileage Range (min/max inputs)

- **Features:**
  - Reset all filters button
  - Real-time URL syncing
  - Sticky positioning on desktop

#### SortBar (`/components/shop/sort-bar.tsx`)
- Sort Options:
  - Featured (default)
  - Price: Low to High
  - Price: High to Low
  - Year: Newest First
  - Year: Oldest First
  - Mileage: Low First

#### TabNavigation (`/components/shop/tab-navigation.tsx`)
- Tab Options:
  - All Vehicles
  - Available
  - Recently Sold
  - Coming Soon
- Shows result count
- Visual active state indicator

#### CarGrid (`/components/shop/car-grid.tsx`)
- Responsive grid layout (1-3 columns)
- Scroll reveal animations
- Empty state message
- Loading skeleton
- Links to individual car pages

### UI Components Used

- **GoldButton** - Primary action button with gold background
- **OutlineButton** - Secondary action button with gold border
- **CarCard** - Individual car card with image, specs, and hover effects
- **SectionHeading** - Page section titles
- **ScrollReveal** - Fade-up animations on scroll

## Data Management

### Adding New Cars

Edit `/lib/data/cars.ts` and add to the `allCars` array:

```typescript
{
  id: 'car-xxx',
  brand: 'Brand Name',
  model: 'Model Name',
  year: 2024,
  price: 1500000,
  image: '/path-to-image.jpg',
  slug: 'brand-model-year',
  km: 5000,
  fuel: 'petrol',
  transmission: 'automatic',
  ownership: 1,
  registration: 'Delhi',
  bodyType: 'suv',
  status: 'available',
  seats: 5,
  condition: 'like-new',
  features: ['Feature 1', 'Feature 2']
}
```

### Filtering Logic

Filters work with URL query parameters and update in real-time:

1. User selects filters in the sidebar
2. Filter selections update URL query params
3. `useSearchParams()` reads the URL params
4. `getCarsByFilters()` applies all filters
5. `sortCars()` applies sort order
6. Grid re-renders with filtered results

### Price and Mileage Ranges

Both price and mileage use min/max inputs for flexible range selection:

- If only min is set: shows all cars above that price
- If only max is set: shows all cars below that price
- If both are set: shows cars within the range
- If neither is set: shows all cars

## Homepage Integration

The featured collection on the homepage now uses real car data:

```typescript
// Featured Collection automatically shows first 6 available cars
const featuredCars = allCars.filter(car => car.status === 'available').slice(0, 6)
```

## Search Filter Widget

The homepage search filter now:
- Dynamically loads brands from `getUniqueBrands()`
- Supports year selection
- Supports price range selection
- Navigates to `/shop` with applied filters

## Styling & Design

All components follow the luxury design system:
- Dark background: #0A0A0A
- Gold accent: #C9A84C
- Smooth animations (600ms ease-out)
- Responsive design (mobile-first)
- Accessibility features (ARIA labels, semantic HTML)

## Performance Considerations

- All filtering is done client-side (no API calls)
- Grid uses Next.js Image component for optimized images
- Scroll reveal animations use Intersection Observer (efficient)
- URL query params allow bookmarking and sharing

## Future Enhancements

1. Add database integration for dynamic car management
2. Implement user authentication for favorites
3. Add car comparison feature
4. Add booking/inquiry form with email notifications
5. Add advanced search with AI recommendations
6. Implement analytics tracking
7. Add image gallery for each car
8. Add customer reviews and ratings
