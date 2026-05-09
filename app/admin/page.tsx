'use client'

import Link from 'next/link'
import { Car, CheckCircle2, XCircle, TrendingUp, ExternalLink, PlusCircle } from 'lucide-react'
import { allCars } from '@/data/cars'
import { formatPrice } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/config'

const RECENT_ACTIVITY = [
  { action: 'New enquiry', detail: 'Mercedes C 200', time: '2 mins ago' },
  { action: 'Car viewed', detail: 'Range Rover Sport', time: '15 mins ago' },
  { action: 'WhatsApp click', detail: 'BMW X5 xDrive40i', time: '32 mins ago' },
  { action: 'Test drive booked', detail: 'Porsche Cayenne Coupe', time: '1 hour ago' },
  { action: 'Car viewed', detail: 'Audi Q8 55 TFSI', time: '2 hours ago' },
]

export default function AdminDashboard() {
  const available = allCars.filter(c => c.status === 'available').length
  const sold = allCars.filter(c => c.status === 'sold').length

  const stats = [
    { label: 'Total Listings', value: allCars.length, icon: <Car size={20} />, color: 'var(--gold)' },
    { label: 'Available Cars', value: available, icon: <CheckCircle2 size={20} />, color: '#22c55e' },
    { label: 'Sold Cars', value: sold, icon: <XCircle size={20} />, color: 'var(--red-accent)' },
    { label: 'Total Enquiries', value: 142, icon: <TrendingUp size={20} />, color: '#6366f1' },
  ]

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
          Overview
        </p>
        <h1 className="text-3xl font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
          Dashboard
        </h1>
      </div>

      {/* Notice */}
      <div
        className="mb-8 px-4 py-3 text-xs"
        style={{
          background: 'rgba(201,168,76,0.08)',
          border: '1px solid var(--gold-border)',
          borderRadius: '2px',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-body)',
        }}
      >
        ⚠ This admin panel uses in-memory state. Data resets on page refresh. Connect a database to persist changes.
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map(stat => (
          <div
            key={stat.label}
            className="p-5"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}
          >
            <div className="flex items-center justify-between mb-4">
              <span style={{ color: stat.color }}>{stat.icon}</span>
            </div>
            <p className="text-3xl font-light mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              {stat.value}
            </p>
            <p className="text-xs tracking-wide" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
          <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
            <h2 className="text-sm font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
              Recent Activity
            </h2>
          </div>
          <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
            {RECENT_ACTIVITY.map((item, i) => (
              <div key={i} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>{item.action}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{item.detail}</p>
                </div>
                <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
          <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
            <h2 className="text-sm font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
              Quick Actions
            </h2>
          </div>
          <div className="p-6 grid grid-cols-2 gap-3">
            <Link href="/admin/add-car" className="flex items-center gap-2 p-4 transition-colors hover:border-[var(--gold-border)]"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '2px' }}>
              <PlusCircle size={16} style={{ color: 'var(--gold)' }} />
              <span className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Add Car</span>
            </Link>
            <Link href="/admin/listings" className="flex items-center gap-2 p-4 transition-colors hover:border-[var(--gold-border)]"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '2px' }}>
              <Car size={16} style={{ color: 'var(--gold)' }} />
              <span className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Listings</span>
            </Link>
            <Link href="/" target="_blank" className="flex items-center gap-2 p-4 transition-colors hover:border-[var(--gold-border)]"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '2px' }}>
              <ExternalLink size={16} style={{ color: 'var(--gold)' }} />
              <span className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>View Site</span>
            </Link>
            <Link href="/admin/analytics" className="flex items-center gap-2 p-4 transition-colors hover:border-[var(--gold-border)]"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '2px' }}>
              <TrendingUp size={16} style={{ color: 'var(--gold)' }} />
              <span className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Analytics</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
