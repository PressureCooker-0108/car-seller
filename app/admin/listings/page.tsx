'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MoreHorizontal, Edit, Trash2, Check, X, Search, Filter } from 'lucide-react'
import { allCars } from '@/data/cars'
import type { CarType } from '@/data/cars'
import { formatPrice } from '@/lib/utils'

export default function AdminListings() {
  const [cars, setCars] = useState<CarType[]>(allCars)
  const [search, setSearch] = useState('')

  const handleStatusToggle = (slug: string, currentStatus: string) => {
    const newStatus = currentStatus === 'available' ? 'sold' : 'available'
    setCars(cars.map(c => c.slug === slug ? { ...c, status: newStatus as 'available' | 'sold' } : c))
  }

  const handleDelete = (slug: string) => {
    if (confirm('Are you sure you want to delete this listing?')) {
      setCars(cars.filter(c => c.slug !== slug))
    }
  }

  const filtered = cars.filter(c => 
    c.brand.toLowerCase().includes(search.toLowerCase()) || 
    c.model.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
            Inventory Management
          </p>
          <h1 className="text-3xl font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
            Car Listings
          </h1>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search by brand or model" 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm w-64"
              style={{ 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border)', 
                borderRadius: '2px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          <Link href="/admin/add-car" className="btn-gold py-2 text-xs">
            Add New Car
          </Link>
        </div>
      </div>

      {/* Table */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-elevated)' }}>
                <th className="px-6 py-4 text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Vehicle</th>
                <th className="px-6 py-4 text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Price</th>
                <th className="px-6 py-4 text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Status</th>
                <th className="px-6 py-4 text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Category</th>
                <th className="px-6 py-4 text-xs font-medium tracking-widest uppercase text-right" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: 'var(--border)' }}>
              {filtered.map(car => (
                <tr key={car.slug} className="transition-colors hover:bg-[rgba(255,255,255,0.02)]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-10 relative bg-[var(--bg-elevated)] rounded-sm overflow-hidden">
                        {/* Fake image placeholder for admin */}
                        <div className="absolute inset-0 flex items-center justify-center text-[10px]" style={{ color: 'var(--text-muted)' }}>Img</div>
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
                          {car.brand} {car.model}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                          {car.year} • {car.color} • {car.fuel}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
                    {formatPrice(car.price)}
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => handleStatusToggle(car.slug, car.status)}
                      className="px-2 py-1 text-[10px] tracking-widest uppercase border rounded-sm flex items-center gap-1 transition-opacity hover:opacity-80"
                      style={{ 
                        color: car.status === 'available' ? '#22c55e' : 'var(--text-muted)',
                        borderColor: car.status === 'available' ? 'rgba(34, 197, 94, 0.3)' : 'var(--border)',
                        background: car.status === 'available' ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {car.status === 'available' ? <Check size={10} /> : <X size={10} />}
                      {car.status}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                    {car.category}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/cars/${car.slug}`} target="_blank" className="text-xs transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                        View
                      </Link>
                      <button className="p-1.5 transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-muted)' }}>
                        <Edit size={14} />
                      </button>
                      <button onClick={() => handleDelete(car.slug)} className="p-1.5 transition-colors hover:text-[var(--red-accent)]" style={{ color: 'var(--text-muted)' }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="p-8 text-center text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              No vehicles found matching "{search}"
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
