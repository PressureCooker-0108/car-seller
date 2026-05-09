'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { getUniqueBrands, getUniqueRegistrations } from '@/lib/data/cars'
import { GoldButton } from '@/components/ui/gold-button'

export function FilterSidebar() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(true)

  const brands = getUniqueBrands()
  const registrations = getUniqueRegistrations()

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    
    if (value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    
    router.push(`?${params.toString()}`)
  }

  const handleResetFilters = () => {
    router.push('?')
  }

  const handleRangeChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    router.push(`?${params.toString()}`)
  }

  const activeBrand = searchParams.get('brand') || ''
  const activeStatus = searchParams.get('status') || ''
  const activeBodyType = searchParams.get('bodyType') || ''
  const activeFuel = searchParams.get('fuel') || ''
  const activeTransmission = searchParams.get('transmission') || ''
  const activeRegistration = searchParams.get('registration') || ''
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''
  const minYear = searchParams.get('minYear') || ''
  const maxYear = searchParams.get('maxYear') || ''
  const minKm = searchParams.get('minKm') || ''
  const maxKm = searchParams.get('maxKm') || ''

  const hasActiveFilters = 
    activeBrand || activeStatus || activeBodyType || activeFuel || 
    activeTransmission || activeRegistration || minPrice || maxPrice || 
    minYear || maxYear || minKm || maxKm

  return (
    <div className="w-full md:w-72 bg-surface rounded-lg border border-border p-6 h-fit sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-cormorant font-semibold text-text-primary">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={handleResetFilters}
            className="text-xs text-gold hover:text-gold-light transition-luxury"
          >
            Reset
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Brand */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Brand
          </label>
          <select
            value={activeBrand}
            onChange={(e) => handleFilterChange('brand', e.target.value)}
            className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
          >
            <option value="">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Availability
          </label>
          <select
            value={activeStatus}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
          >
            <option value="">All Status</option>
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        {/* Body Type */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Body Type
          </label>
          <select
            value={activeBodyType}
            onChange={(e) => handleFilterChange('bodyType', e.target.value)}
            className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
          >
            <option value="">All Types</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="sports">Sports</option>
            <option value="luxury">Luxury</option>
            <option value="convertible">Convertible</option>
          </select>
        </div>

        {/* Fuel Type */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Fuel Type
          </label>
          <select
            value={activeFuel}
            onChange={(e) => handleFilterChange('fuel', e.target.value)}
            className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
          >
            <option value="">All Fuels</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Hybrid</option>
            <option value="electric">Electric</option>
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Transmission
          </label>
          <select
            value={activeTransmission}
            onChange={(e) => handleFilterChange('transmission', e.target.value)}
            className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
          >
            <option value="">All Types</option>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>
        </div>

        {/* Registration */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Registration
          </label>
          <select
            value={activeRegistration}
            onChange={(e) => handleFilterChange('registration', e.target.value)}
            className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
          >
            <option value="">All Locations</option>
            {registrations.map(reg => (
              <option key={reg} value={reg}>
                {reg}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Price Range (₹)
          </label>
          <div className="space-y-2">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => handleRangeChange('minPrice', e.target.value)}
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => handleRangeChange('maxPrice', e.target.value)}
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
            />
          </div>
        </div>

        {/* Year Range */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Year Range
          </label>
          <div className="space-y-2">
            <input
              type="number"
              placeholder="Min Year"
              value={minYear}
              onChange={(e) => handleRangeChange('minYear', e.target.value)}
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
            />
            <input
              type="number"
              placeholder="Max Year"
              value={maxYear}
              onChange={(e) => handleRangeChange('maxYear', e.target.value)}
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
            />
          </div>
        </div>

        {/* Km Range */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Mileage Range (km)
          </label>
          <div className="space-y-2">
            <input
              type="number"
              placeholder="Min KM"
              value={minKm}
              onChange={(e) => handleRangeChange('minKm', e.target.value)}
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
            />
            <input
              type="number"
              placeholder="Max KM"
              value={maxKm}
              onChange={(e) => handleRangeChange('maxKm', e.target.value)}
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
