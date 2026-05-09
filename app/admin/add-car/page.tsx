'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Upload, X, CheckCircle2 } from 'lucide-react'

export default function AdminAddCar() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => router.push('/admin/listings'), 2000)
    }, 1000)
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    borderRadius: '2px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    outline: 'none',
  }
  const labelStyle = {
    display: 'block',
    fontSize: '0.65rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-body)',
    marginBottom: '8px',
  }

  if (success) {
    return (
      <div className="p-8 min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-light mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>Vehicle Added Successfully</h2>
          <p className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Redirecting to listings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
          Inventory
        </p>
        <h1 className="text-3xl font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
          Add New Vehicle
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <div className="p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
          <h2 className="text-sm font-medium mb-6 pb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--border)' }}>
            Basic Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label style={labelStyle}>Brand</label>
              <select required style={inputStyle}>
                <option value="">Select Brand</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Porsche">Porsche</option>
                <option value="Range Rover">Range Rover</option>
                <option value="Lamborghini">Lamborghini</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Model</label>
              <input type="text" required placeholder="e.g. C 200" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Year</label>
              <input type="number" required placeholder="e.g. 2022" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Price (₹)</label>
              <input type="number" required placeholder="e.g. 4500000" style={inputStyle} />
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
          <h2 className="text-sm font-medium mb-6 pb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--border)' }}>
            Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label style={labelStyle}>Fuel Type</label>
              <select required style={inputStyle}>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Transmission</label>
              <select required style={inputStyle}>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Body Type</label>
              <select required style={inputStyle}>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Coupe">Coupe</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Convertible">Convertible</option>
                <option value="Wagon">Wagon</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Kilometers</label>
              <input type="number" required placeholder="e.g. 15000" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Color</label>
              <input type="text" required placeholder="e.g. Obsidian Black" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Ownership</label>
              <select required style={inputStyle}>
                <option value="First Owner">First Owner</option>
                <option value="Second Owner">Second Owner</option>
                <option value="Unregistered">Unregistered</option>
              </select>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
          <h2 className="text-sm font-medium mb-6 pb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--border)' }}>
            Media
          </h2>
          <div 
            className="border-2 border-dashed flex flex-col items-center justify-center p-12 text-center"
            style={{ borderColor: 'var(--border)', borderRadius: '2px', background: 'var(--bg-elevated)' }}
          >
            <Upload size={32} style={{ color: 'var(--text-muted)' }} className="mb-4" />
            <p className="text-sm mb-2" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
              Drag and drop images here
            </p>
            <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              PNG, JPG up to 5MB each. First image will be the cover.
            </p>
            <button type="button" className="btn-outline-gold mt-6 py-2 px-6 text-xs">
              Browse Files
            </button>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end gap-4">
          <button type="button" onClick={() => router.back()} className="px-6 py-3 text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
            Cancel
          </button>
          <button type="submit" disabled={loading} className="btn-gold disabled:opacity-50">
            {loading ? 'Saving...' : 'Publish Listing'}
          </button>
        </div>
      </form>
    </div>
  )
}
