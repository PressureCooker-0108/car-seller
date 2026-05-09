'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, X } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FadeUp } from '@/components/animations'
import { allCars } from '@/data/cars'
import type { CarType } from '@/data/cars'
import { formatPrice, formatKM } from '@/lib/utils'
import { getCarImage } from '@/components/ui/CarCard'

export default function ComparePage() {
  const [selectedCars, setSelectedCars] = useState<CarType[]>([])
  const availableCars = allCars.filter(c => !selectedCars.find(sc => sc.slug === c.slug))

  const addCar = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value
    if (!slug) return
    const car = allCars.find(c => c.slug === slug)
    if (car && selectedCars.length < 3) {
      setSelectedCars([...selectedCars, car])
    }
  }

  const removeCar = (slug: string) => {
    setSelectedCars(selectedCars.filter(c => c.slug !== slug))
  }

  const selectStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '2px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    outline: 'none',
  }

  const renderRow = (label: string, field: keyof CarType | ((car: CarType) => React.ReactNode)) => (
    <div className="grid grid-cols-4 border-b border-[var(--border)]">
      <div className="p-4 bg-[var(--bg-card)] font-medium text-xs tracking-widest uppercase flex items-center text-[var(--text-secondary)]">
        {label}
      </div>
      {selectedCars.map(car => (
        <div key={`${car.slug}-${label}`} className="p-4 text-sm text-[var(--text-primary)] font-[var(--font-body)] border-l border-[var(--border)]">
          {typeof field === 'function' ? field(car) : String(car[field] || '—')}
        </div>
      ))}
      {Array.from({ length: 3 - selectedCars.length }).map((_, i) => (
        <div key={`empty-${label}-${i}`} className="p-4 border-l border-[var(--border)] bg-[var(--bg-surface)] opacity-50" />
      ))}
    </div>
  )

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '116px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
          <FadeUp className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Head to Head
            </p>
            <h1 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              Compare Vehicles
            </h1>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
              Select up to 3 vehicles to compare specifications, features, and pricing side-by-side.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            {/* Header Row (Images & Selectors) */}
            <div className="grid grid-cols-4 mb-8">
              <div className="p-4 flex flex-col justify-end">
                {selectedCars.length < 3 && (
                  <div>
                    <label className="block text-xs tracking-[0.1em] uppercase mb-2 text-[var(--text-muted)] font-[var(--font-body)]">
                      Add Vehicle
                    </label>
                    <select value="" onChange={addCar} style={selectStyle}>
                      <option value="">Select a vehicle...</option>
                      {availableCars.map(c => (
                        <option key={c.slug} value={c.slug}>{c.brand} {c.model}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {selectedCars.map((car) => (
                <div key={car.slug} className="p-4 relative group">
                  <button
                    onClick={() => removeCar(car.slug)}
                    className="absolute top-6 right-6 z-10 w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Remove"
                  >
                    <X size={14} color="white" />
                  </button>
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[var(--border)] mb-4">
                    <Image src={getCarImage(car)} alt={car.model} fill className="object-cover" />
                  </div>
                  <p className="text-xs tracking-[0.15em] text-[var(--gold)] uppercase mb-1">{car.brand}</p>
                  <h3 className="text-xl font-light font-[var(--font-display)] mb-1 text-[var(--text-primary)]">{car.model}</h3>
                  <p className="text-lg font-light text-[var(--gold)] font-[var(--font-display)]">{formatPrice(car.price)}</p>
                </div>
              ))}

              {Array.from({ length: 3 - selectedCars.length }).map((_, i) => (
                <div key={`empty-slot-${i}`} className="p-4 flex items-center justify-center">
                  <div className="w-full aspect-[4/3] border-2 border-dashed border-[var(--border)] rounded-sm flex flex-col items-center justify-center text-[var(--text-muted)] opacity-50">
                    <Plus size={24} className="mb-2" />
                    <span className="text-xs uppercase tracking-widest font-[var(--font-body)]">Empty Slot</span>
                  </div>
                </div>
              ))}
            </div>

            {selectedCars.length > 0 ? (
              <div className="border border-[var(--border)] rounded-sm overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
                {renderRow('Year', 'year')}
                {renderRow('Kilometers', car => formatKM(car.km))}
                {renderRow('Fuel Type', 'fuel')}
                {renderRow('Transmission', 'transmission')}
                {renderRow('Body Type', 'bodyType')}
                {renderRow('Ownership', 'ownership')}
                {renderRow('Color', 'color')}
                {renderRow('Seats', 'seats')}
                {renderRow('Registration', 'registration')}
                {renderRow('Status', car => (
                  <span className={car.status === 'sold' ? 'badge-sold' : 'badge-available'}>
                    {car.status}
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-[var(--border)] rounded-sm bg-[var(--bg-surface)]">
                <p className="text-sm text-[var(--text-muted)] font-[var(--font-body)]">
                  Please select at least one vehicle to start comparing.
                </p>
              </div>
            )}
          </FadeUp>
        </div>
      </main>
      <Footer />
    </>
  )
}
