'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { trackFilterUsed } from '@/lib/db/analytics'

const BRANDS = ['Mercedes-Benz', 'BMW', 'Range Rover', 'Porsche', 'Audi', 'Lamborghini', 'Volvo', 'Lexus']
const BODY_TYPES = ['Sedan', 'SUV', 'Coupe', 'Hatchback', 'Convertible', 'Wagon']
const FUEL_TYPES = ['Petrol', 'Diesel', 'Hybrid', 'Electric']
const PRICE_RANGES = [
  { label: 'Under ₹50 Lakh', value: '0-5000000' },
  { label: '₹50L – ₹1 Cr', value: '5000000-10000000' },
  { label: '₹1 Cr – ₹2 Cr', value: '10000000-20000000' },
  { label: 'Above ₹2 Cr', value: '20000000-999999999' },
]

export function SearchFilter() {
  const router = useRouter()
  const [brand, setBrand] = useState('')
  const [bodyType, setBodyType] = useState('')
  const [fuel, setFuel] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (brand) params.set('brand', brand)
    if (bodyType) params.set('bodyType', bodyType)
    if (fuel) params.set('fuel', fuel)
    if (priceRange) {
      const [min, max] = priceRange.split('-')
      params.set('minPrice', min)
      params.set('maxPrice', max)
    }
    router.push(`/shop?${params.toString()}`)
  }

  const selectStyle = {
    background: 'transparent',
    border: 'none',
    borderRight: '1px solid rgba(255,255,255,0.06)',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.75rem',
    letterSpacing: '0.05em',
    padding: '0 1.25rem',
    height: '100%',
    cursor: 'pointer',
    outline: 'none',
    minWidth: '160px',
    flex: 1,
  } as React.CSSProperties

  return (
    <section
      className="relative z-10"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--gold-border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="flex flex-col md:flex-row items-stretch"
          style={{ height: 'auto', minHeight: '64px' }}
        >
          {/* Selects */}
          <div className="flex flex-col md:flex-row flex-1">
            <select
              value={fuel}
              onChange={(e) => { setFuel(e.target.value); trackFilterUsed('fuel', e.target.value) }}
              style={selectStyle}
              className="py-4 md:py-0"
            >
              <option value="">Fuel Type</option>
              {FUEL_TYPES.map(f => <option key={f} value={f}>{f}</option>)}
            </select>

            <select
              value={bodyType}
              onChange={(e) => { setBodyType(e.target.value); trackFilterUsed('bodyType', e.target.value) }}
              style={{ ...selectStyle }}
              className="py-4 md:py-0"
            >
              <option value="">Body Type</option>
              {BODY_TYPES.map(b => <option key={b} value={b}>{b}</option>)}
            </select>

            <select
              value={brand}
              onChange={(e) => { setBrand(e.target.value); trackFilterUsed('brand', e.target.value) }}
              style={{ ...selectStyle }}
              className="py-4 md:py-0"
            >
              <option value="">Brand</option>
              {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>

            <select
              value={priceRange}
              onChange={(e) => { setPriceRange(e.target.value); trackFilterUsed('priceRange', e.target.value) }}
              style={{ ...selectStyle, borderRight: 'none' }}
              className="py-4 md:py-0"
            >
              <option value="">Price Range</option>
              {PRICE_RANGES.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
            </select>
          </div>

          {/* Search button */}
          <button
            onClick={handleSearch}
            className="flex items-center justify-center gap-2 px-8 py-4 transition-all duration-300 hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
              color: '#080808',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: 0,
              minWidth: '140px',
            }}
          >
            <Search size={15} />
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
