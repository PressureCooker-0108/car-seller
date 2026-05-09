'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { Download } from 'lucide-react'

const PAGE_VIEWS = [
  { name: 'Mon', views: 400 },
  { name: 'Tue', views: 300 },
  { name: 'Wed', views: 550 },
  { name: 'Thu', views: 450 },
  { name: 'Fri', views: 700 },
  { name: 'Sat', views: 900 },
  { name: 'Sun', views: 850 },
]

const ENQUIRIES = [
  { name: 'Mon', whatsapp: 12, calls: 5 },
  { name: 'Tue', whatsapp: 15, calls: 8 },
  { name: 'Wed', whatsapp: 10, calls: 4 },
  { name: 'Thu', whatsapp: 22, calls: 10 },
  { name: 'Fri', whatsapp: 18, calls: 7 },
  { name: 'Sat', whatsapp: 35, calls: 15 },
  { name: 'Sun', whatsapp: 40, calls: 18 },
]

export default function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState('7days')

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', padding: '12px', borderRadius: '2px' }}>
          <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm font-medium" style={{ color: entry.color, fontFamily: 'var(--font-body)' }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
            Performance
          </p>
          <h1 className="text-3xl font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
            Analytics Overview
          </h1>
        </div>
        <div className="flex gap-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 text-sm"
            style={{ 
              background: 'var(--bg-card)', 
              border: '1px solid var(--border)', 
              borderRadius: '2px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)',
              outline: 'none'
            }}
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="year">This Year</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase btn-outline-gold">
            <Download size={14} /> Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Page Views Chart */}
        <div className="p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
          <h2 className="text-sm font-medium mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
            Website Traffic
          </h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={PAGE_VIEWS} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="views" name="Page Views" stroke="var(--gold)" strokeWidth={2} dot={{ r: 4, fill: 'var(--bg-card)', strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Enquiries Chart */}
        <div className="p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
          <h2 className="text-sm font-medium mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
            Lead Generation
          </h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ENQUIRIES} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="whatsapp" name="WhatsApp" fill="#25D366" radius={[2, 2, 0, 0]} />
                <Bar dataKey="calls" name="Direct Calls" fill="var(--gold)" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Cars */}
      <div className="p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
        <h2 className="text-sm font-medium mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
          Most Viewed Vehicles
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th className="pb-3 text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>Vehicle</th>
                <th className="pb-3 text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>Views</th>
                <th className="pb-3 text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>Enquiries</th>
                <th className="pb-3 text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>Conversion</th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: 'var(--border)' }}>
              {[
                { name: 'Mercedes-Benz C 200', views: 1245, enq: 42, conv: '3.4%' },
                { name: 'Porsche Cayenne Coupe', views: 980, enq: 28, conv: '2.8%' },
                { name: 'Range Rover Sport', views: 856, enq: 35, conv: '4.1%' },
                { name: 'BMW X5 xDrive40i', views: 720, enq: 18, conv: '2.5%' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="py-4 text-sm" style={{ color: 'var(--text-primary)' }}>{row.name}</td>
                  <td className="py-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{row.views}</td>
                  <td className="py-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{row.enq}</td>
                  <td className="py-4 text-sm" style={{ color: 'var(--gold)' }}>{row.conv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
