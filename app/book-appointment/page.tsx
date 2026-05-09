'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FadeUp } from '@/components/animations'
import { allCars } from '@/data/cars'
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react'

// Note: In Next.js App Router, to export metadata from a client component's route,
// you usually separate the page into a server component and a client component.
// For brevity, we are ignoring metadata here or assuming it's set in layout.

export default function BookAppointmentPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const availableCars = allCars.filter(c => c.status === 'available')

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
              Experience Excellence
            </p>
            <h1 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              Book a Test Drive
            </h1>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
              Schedule a private viewing and test drive at our showroom or request a home visit for select vehicles.
            </p>
          </FadeUp>

          {success ? (
            <FadeUp>
              <div className="text-center p-12" style={{ background: 'var(--bg-surface)', border: '1px solid var(--gold-border)', borderRadius: '2px' }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>Request Received</h2>
                <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                  Thank you. Our concierge will contact you shortly to confirm your appointment details.
                </p>
                <button onClick={() => router.push('/shop')} className="btn-gold">
                  Continue Browsing
                </button>
              </div>
            </FadeUp>
          ) : (
            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit} className="p-6 md:p-10" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '2px' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Personal Details */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-medium pb-2" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--border)' }}>Personal Details</h3>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input type="text" required style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input type="tel" required style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input type="email" style={inputStyle} />
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-medium pb-2" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--border)' }}>Appointment Details</h3>
                    <div>
                      <label style={labelStyle}>Vehicle of Interest *</label>
                      <select required style={inputStyle}>
                        <option value="">Select a vehicle</option>
                        {availableCars.map(c => (
                          <option key={c.slug} value={c.slug}>{c.brand} {c.model} ({c.year})</option>
                        ))}
                        <option value="undecided">Not sure yet</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label style={labelStyle}>Preferred Date *</label>
                        <div className="relative">
                          <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
                          <input type="date" required style={{...inputStyle, paddingLeft: '32px'}} />
                        </div>
                      </div>
                      <div>
                        <label style={labelStyle}>Preferred Time *</label>
                        <div className="relative">
                          <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
                          <select required style={{...inputStyle, paddingLeft: '32px'}}>
                            <option value="">Time</option>
                            <option value="morning">Morning (10 AM - 1 PM)</option>
                            <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                            <option value="evening">Evening (4 PM - 7 PM)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Location *</label>
                      <div className="relative">
                        <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
                        <select required style={{...inputStyle, paddingLeft: '32px'}}>
                          <option value="showroom">Showroom Visit</option>
                          <option value="home">Home / Office Visit (Mumbai Only)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label style={labelStyle}>Additional Requirements / Queries</label>
                  <textarea rows={4} style={inputStyle} />
                </div>

                <button type="submit" disabled={loading} className="w-full btn-gold disabled:opacity-50">
                  {loading ? 'Submitting...' : 'Request Appointment'}
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
