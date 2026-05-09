'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Car, PlusCircle, CheckSquare, BarChart2, Settings, LogOut } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'

const NAV = [
  { label: 'Dashboard', href: '/admin', icon: <LayoutDashboard size={16} /> },
  { label: 'Car Listings', href: '/admin/listings', icon: <Car size={16} /> },
  { label: 'Add Car', href: '/admin/add-car', icon: <PlusCircle size={16} /> },
  { label: 'Analytics', href: '/admin/analytics', icon: <BarChart2 size={16} /> },
  { label: 'Settings', href: '/admin/settings', icon: <Settings size={16} /> },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const logout = () => {
    document.cookie = 'admin_auth=; path=/; max-age=0'
    router.push('/admin/login')
  }

  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Sidebar */}
      <aside
        className="fixed left-0 top-0 bottom-0 flex flex-col z-50"
        style={{
          width: '220px',
          background: '#090909',
          borderRight: '1px solid var(--border)',
        }}
      >
        {/* Logo */}
        <div className="px-6 py-7" style={{ borderBottom: '1px solid var(--border)' }}>
          <Link
            href="/admin"
            className="text-lg font-light tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
          >
            {SITE_CONFIG.brandName}
          </Link>
          <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
            Admin Panel
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {NAV.map(item => {
            const isActive = item.href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-6 py-3.5 text-sm transition-all duration-200 relative"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: isActive ? 'var(--gold)' : 'var(--text-muted)',
                  background: isActive ? 'var(--gold-muted)' : 'transparent',
                  borderLeft: isActive ? '2px solid var(--gold)' : '2px solid transparent',
                }}
              >
                <span style={{ color: isActive ? 'var(--gold)' : 'inherit' }}>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-4" style={{ borderTop: '1px solid var(--border)' }}>
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm rounded-sm transition-colors hover:text-[var(--red-accent)]"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            <LogOut size={15} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1" style={{ marginLeft: '220px', background: 'var(--bg-surface)', minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  )
}
