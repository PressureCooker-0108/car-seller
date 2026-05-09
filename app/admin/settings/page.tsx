'use client'

import { useState } from 'react'
import { Save } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'

export default function AdminSettings() {
  const [saving, setSaving] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      alert('Settings saved successfully. (Simulation)')
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

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
          Configuration
        </p>
        <h1 className="text-3xl font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
          Settings
        </h1>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Business Info */}
        <div className="p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
          <h2 className="text-sm font-medium mb-6 pb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--border)' }}>
            Business Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label style={labelStyle}>Brand Name</label>
              <input type="text" defaultValue={SITE_CONFIG.brandName} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Contact Email</label>
              <input type="email" defaultValue={SITE_CONFIG.email} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input type="text" defaultValue={SITE_CONFIG.phone} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>WhatsApp Number</label>
              <input type="text" defaultValue={SITE_CONFIG.whatsappNumber} style={inputStyle} />
            </div>
            <div className="md:col-span-2">
              <label style={labelStyle}>Physical Address</label>
              <input type="text" defaultValue={SITE_CONFIG.address} style={inputStyle} />
            </div>
          </div>
        </div>

        {/* Social & Integrations */}
        <div className="p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
          <h2 className="text-sm font-medium mb-6 pb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--border)' }}>
            Social & Integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label style={labelStyle}>Instagram Handle</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: 'var(--text-muted)' }}>@</span>
                <input type="text" defaultValue={SITE_CONFIG.instagramHandle} style={{...inputStyle, paddingLeft: '30px'}} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Google Analytics ID</label>
              <input type="text" defaultValue={SITE_CONFIG.gaId} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Clarity ID</label>
              <input type="text" defaultValue={SITE_CONFIG.clarityId} style={inputStyle} />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
          <h2 className="text-sm font-medium mb-6 pb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--border)' }}>
            Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label style={labelStyle}>New Admin Password</label>
              <input type="password" placeholder="Leave blank to keep current" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Confirm New Password</label>
              <input type="password" placeholder="Confirm password" style={inputStyle} />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" disabled={saving} className="btn-gold flex items-center gap-2 disabled:opacity-50">
            <Save size={16} />
            {saving ? 'Saving Changes...' : 'Save Settings'}
          </button>
        </div>
      </form>
    </div>
  )
}
