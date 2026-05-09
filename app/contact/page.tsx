'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FadeUp, FadeIn } from '@/components/animations'
import { SITE_CONFIG } from '@/lib/config'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { buildWhatsAppURL, genericEnquiryMessage } from '@/lib/whatsapp'

export default function ContactPage() {
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

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '116px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
          
          <FadeUp className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-light mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              Contact Us
            </h1>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <FadeIn>
              {success ? (
                <div className="p-10 border border-[var(--gold-border)] bg-[var(--bg-card)] text-center h-full flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-light mb-4 text-[var(--text-primary)] font-[var(--font-display)]">Message Sent</h2>
                  <p className="text-sm text-[var(--text-secondary)]">Thank you for reaching out. A member of our team will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 border border-[var(--border)] bg-[var(--bg-card)] rounded-sm space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label style={labelStyle}>First Name *</label>
                      <input type="text" required style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name *</label>
                      <input type="text" required style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input type="email" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input type="tel" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Nature of Enquiry *</label>
                    <select required style={inputStyle}>
                      <option value="">Select an option</option>
                      <option value="buy">Buying a car</option>
                      <option value="sell">Selling a car</option>
                      <option value="service">Car Service/Detailing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea rows={5} required style={inputStyle} />
                  </div>
                  <button type="submit" disabled={loading} className="w-full btn-gold disabled:opacity-50">
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </FadeIn>

            {/* Info & Map */}
            <FadeIn delay={0.2} className="flex flex-col gap-10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-light mb-4 text-[var(--text-primary)] font-[var(--font-display)]">Showroom</h3>
                  <div className="flex items-start gap-4 text-sm text-[var(--text-secondary)]">
                    <MapPin size={18} className="text-[var(--gold)] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">{SITE_CONFIG.address}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-light mb-4 text-[var(--text-primary)] font-[var(--font-display)]">Contact Details</h3>
                  <div className="space-y-4">
                    <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-4 text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors">
                      <Phone size={18} className="text-[var(--gold)] flex-shrink-0" />
                      {SITE_CONFIG.phone}
                    </a>
                    <a href={buildWhatsAppURL(genericEnquiryMessage)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-[var(--text-secondary)] hover:text-[#25D366] transition-colors">
                      <span className="w-[18px] h-[18px] rounded-full bg-[var(--gold)] flex items-center justify-center text-black text-[10px] font-bold">W</span>
                      WhatsApp Us
                    </a>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors">
                      <Mail size={18} className="text-[var(--gold)] flex-shrink-0" />
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-light mb-4 text-[var(--text-primary)] font-[var(--font-display)]">Business Hours</h3>
                  <div className="flex items-start gap-4 text-sm text-[var(--text-secondary)]">
                    <Clock size={18} className="text-[var(--gold)] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed whitespace-pre-line">{SITE_CONFIG.businessHours}</p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="w-full h-64 border border-[var(--border)] rounded-sm overflow-hidden mt-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0557786093537!2d72.83495!3d19.07235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a4d8b5bdb7%3A0x0!2sSV+Road%2C+Khar+West%2C+Mumbai!5e0!3m2!1sen!2sin!4v1699000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Showroom Location"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
