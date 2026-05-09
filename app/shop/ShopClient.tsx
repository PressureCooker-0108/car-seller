'use client'

import { useState, useCallback, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { SlidersHorizontal, X } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CarCard } from '@/components/ui/CarCard'
import { FadeUp } from '@/components/animations'
import { filterCars, sortCars, getUniqueBrands } from '@/data/cars'
import type { CarType } from '@/data/cars'
import { trackFilterUsed } from '@/lib/db/analytics'

const TABS = [
  { label: 'All Cars', value: '' },
  { label: 'Pre-Loved', value: 'pre-loved' },
  { label: 'Sold', value: 'sold' },
]

const SORT_OPTIONS = [
  { label: 'Featured', value: '' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' },
  { label: 'Newest First', value: 'year-newest' },
  { label: 'Low Mileage First', value: 'km-low' },
]

function ShopContent({ initialCars }: { initialCars: CarType[] }) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [filters, setFilters] = useState({
    brand: searchParams.get('brand') || '',
    bodyType: searchParams.get('bodyType') || '',
    fuel: searchParams.get('fuel') || '',
    transmission: '',
    status: searchParams.get('status') || '',
    category: searchParams.get('category') || '',
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    ownership: '',
  })
  const [sortBy, setSortBy] = useState('')
  const [activeTab, setActiveTab] = useState(searchParams.get('category') || searchParams.get('status') || '')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const brands = getUniqueBrands()

  const updateFilter = useCallback((key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value || undefined }))
    trackFilterUsed(key, value)
  }, [])

  // Derived cars
  let cars: CarType[] = initialCars
  // Tab filter
  if (activeTab === 'sold') cars = cars.filter(c => c.status === 'sold')
  else if (activeTab === 'pre-loved') cars = cars.filter(c => c.category === 'pre-loved' && c.status !== 'sold')
  // Other filters
  cars = filterCars(cars, filters)
  cars = sortCars(cars, sortBy)

  const labelStyle = {
    display: 'block',
    fontSize: '0.65rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-body)',
    marginBottom: '6px',
  }
  const selectStyle = {
    width: '100%',
    padding: '8px 12px',
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    borderRadius: '2px',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.8rem',
    cursor: 'pointer',
  }

  const SidebarContent = () => (
    <div className="space-y-6">
      <div>
        <label style={labelStyle}>Brand</label>
        <select value={filters.brand} onChange={e => updateFilter('brand', e.target.value)} style={selectStyle}>
          <option value="">All Brands</option>
          {brands.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <div>
        <label style={labelStyle}>Body Type</label>
        <select value={filters.bodyType} onChange={e => updateFilter('bodyType', e.target.value)} style={selectStyle}>
          <option value="">All Types</option>
          {['Sedan', 'SUV', 'Coupe', 'Hatchback', 'Convertible', 'Wagon'].map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <div>
        <label style={labelStyle}>Fuel Type</label>
        <select value={filters.fuel} onChange={e => updateFilter('fuel', e.target.value)} style={selectStyle}>
          <option value="">All Fuels</option>
          {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map(f => <option key={f} value={f}>{f}</option>)}
        </select>
      </div>
      <div>
        <label style={labelStyle}>Transmission</label>
        <select value={filters.transmission} onChange={e => updateFilter('transmission', e.target.value)} style={selectStyle}>
          <option value="">All</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Ownership</label>
        <select value={filters.ownership} onChange={e => updateFilter('ownership', e.target.value)} style={selectStyle}>
          <option value="">All</option>
          <option value="Single Owner">Single Owner</option>
          <option value="Second Owner">Second Owner</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Min Price</label>
        <select
          value={filters.minPrice || ''}
          onChange={e => setFilters(p => ({ ...p, minPrice: e.target.value ? Number(e.target.value) : undefined }))}
          style={selectStyle}
        >
          <option value="">No Min</option>
          <option value="3000000">₹30 Lakh+</option>
          <option value="5000000">₹50 Lakh+</option>
          <option value="10000000">₹1 Crore+</option>
          <option value="20000000">₹2 Crore+</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Max Price</label>
        <select
          value={filters.maxPrice || ''}
          onChange={e => setFilters(p => ({ ...p, maxPrice: e.target.value ? Number(e.target.value) : undefined }))}
          style={selectStyle}
        >
          <option value="">No Max</option>
          <option value="5000000">Up to ₹50 Lakh</option>
          <option value="10000000">Up to ₹1 Crore</option>
          <option value="20000000">Up to ₹2 Crore</option>
        </select>
      </div>
      <button
        onClick={() => {
          setFilters({ brand: '', bodyType: '', fuel: '', transmission: '', status: '', category: '', minPrice: undefined, maxPrice: undefined, ownership: '' })
          setActiveTab('')
        }}
        className="w-full py-2 text-xs tracking-widest uppercase transition-colors hover:text-[var(--gold)]"
        style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', border: '1px solid var(--border)', borderRadius: '2px' }}
      >
        Clear All Filters
      </button>
    </div>
  )

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '116px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        {/* Header */}
        <div
          className="px-6 md:px-8 py-12"
          style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="max-w-7xl mx-auto">
            <FadeUp>
              <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                Our Inventory
              </p>
              <h1 className="text-5xl font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                Car Collection
              </h1>
            </FadeUp>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">
          {/* Tabs + Sort row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex gap-1" style={{ background: 'var(--bg-card)', borderRadius: '2px', padding: '4px' }}>
              {TABS.map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className="px-5 py-2 text-xs tracking-widest uppercase transition-all duration-200"
                  style={{
                    fontFamily: 'var(--font-body)',
                    background: activeTab === tab.value ? 'linear-gradient(135deg, var(--gold), var(--gold-light))' : 'transparent',
                    color: activeTab === tab.value ? '#080808' : 'var(--text-secondary)',
                    borderRadius: '1px',
                    fontWeight: activeTab === tab.value ? 500 : 400,
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                Showing <strong style={{ color: 'var(--gold)' }}>{cars.length}</strong> vehicles
              </span>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ ...selectStyle, width: '200px' }}>
                {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase"
                style={{ border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                <SlidersHorizontal size={13} /> Filters
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sidebar — desktop */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-32 p-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
                <h2 className="text-xs tracking-[0.15em] uppercase mb-6" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                  Filters
                </h2>
                <SidebarContent />
              </div>
            </aside>

            {/* Car grid */}
            <div className="flex-1">
              {cars.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}>No Results</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>Try adjusting your filters to find more cars.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {cars.map((car, i) => <CarCard key={car.slug} car={car} priority={i < 3} />)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile filter drawer */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/70" onClick={() => setSidebarOpen(false)} />
            <div
              className="absolute right-0 top-0 bottom-0 w-72 p-6 overflow-y-auto"
              style={{ background: 'var(--bg-surface)', borderLeft: '1px solid var(--border)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>Filters</h2>
                <button onClick={() => setSidebarOpen(false)}>
                  <X size={18} style={{ color: 'var(--text-secondary)' }} />
                </button>
              </div>
              <SidebarContent />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

export default function ShopClientPage({ initialCars }: { initialCars: CarType[] }) {
  return (
    <Suspense fallback={<div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }} />}>
      <ShopContent initialCars={initialCars} />
    </Suspense>
  )
}
