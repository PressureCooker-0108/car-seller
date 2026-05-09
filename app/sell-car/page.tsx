'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FadeUp } from '@/components/animations'
import { CheckCircle2, Upload } from 'lucide-react'

export default function SellCarPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1500)
  }

  const inputStyle = {
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
  const labelStyle = {
    display: 'block',
    fontSize: '0.65rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-body)',
    marginBottom: '8px',
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '116px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20">
          <FadeUp className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Sell To Us
            </p>
            <h1 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              Get the Best Value
            </h1>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
              Provide your vehicle details below for a free, no-obligation valuation. We offer instant payment and handle all paperwork.
            </p>
          </FadeUp>

          {success ? (
            <FadeUp>
              <div className="text-center p-12" style={{ background: 'var(--bg-surface)', border: '1px solid var(--gold-border)', borderRadius: '2px' }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>Details Submitted</h2>
                <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                  Our valuation experts are reviewing your details. We will contact you within 24 hours with an estimate.
                </p>
              </div>
            </FadeUp>
          ) : (
            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit} className="p-6 md:p-10" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '2px' }}>
                
                <h3 className="text-sm font-medium pb-2 mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--border)' }}>
                  Your Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input type="text" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input type="tel" required style={inputStyle} />
                  </div>
                  <div className="md:col-span-2">
                    <label style={labelStyle}>Location (City) *</label>
                    <input type="text" required style={inputStyle} />
                  </div>
                </div>

                <h3 className="text-sm font-medium pb-2 mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--border)' }}>
                  Vehicle Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div>
                    <label style={labelStyle}>Make / Brand *</label>
                    <input type="text" required placeholder="e.g. Mercedes-Benz" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Model & Variant *</label>
                    <input type="text" required placeholder="e.g. E 220d Exclusive" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Registration Year *</label>
                    <input type="number" required placeholder="YYYY" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Kilometers Driven *</label>
                    <input type="number" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Ownership *</label>
                    <select required style={inputStyle}>
                      <option value="">Select</option>
                      <option value="1">1st Owner</option>
                      <option value="2">2nd Owner</option>
                      <option value="3+">3rd Owner or more</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Expected Price (₹)</label>
                    <input type="number" style={inputStyle} />
                  </div>
                </div>

                <h3 className="text-sm font-medium pb-2 mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--border)' }}>
                  Photos (Optional)
                </h3>
                <div className="mb-10">
                  <div 
                    className="border-2 border-dashed flex flex-col items-center justify-center p-10 text-center"
                    style={{ borderColor: 'var(--border)', borderRadius: '2px', background: 'var(--bg-card)' }}
                  >
                    <Upload size={24} style={{ color: 'var(--text-muted)' }} className="mb-3" />
                    <p className="text-sm mb-1" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>Upload images of your car</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>Exterior, Interior, and Dashboard</p>
                  </div>
                </div>

                <button type="submit" disabled={loading} className="w-full btn-gold disabled:opacity-50">
                  {loading ? 'Submitting...' : 'Get Valuation'}
                </button>
              </form>
            </FadeUp>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
