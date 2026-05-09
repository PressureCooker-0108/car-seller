'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, Phone, Instagram } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'
import { buildWhatsAppURL, genericEnquiryMessage } from '@/lib/whatsapp'
import { trackCTAClick } from '@/lib/analytics'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Car Collection',
    href: '/shop',
    dropdown: [
      { label: 'Pre-Loved Cars', href: '/shop?category=pre-loved' },
      { label: 'Unregistered Cars', href: '/shop?category=unregistered' },
      { label: 'Sold Cars', href: '/shop?status=sold' },
    ],
  },
  { label: 'Compare', href: '/compare' },
  { label: 'Sell Your Car', href: '/sell-car' },
  { label: 'Services', href: '/car-service' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Media', href: '/cars-media' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => pathname === href

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
        style={{
          background: scrolled ? 'rgba(15,15,15,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        {/* Top bar */}
        <div
          className="hidden md:flex items-center justify-between px-8"
          style={{
            height: '44px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(0,0,0,0.4)',
          }}
        >
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            onClick={() => trackCTAClick('call')}
            className="flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-80"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}
          >
            <Phone size={12} />
            {SITE_CONFIG.phone}
          </a>
          <div className="flex items-center gap-6">
            <Link
              href="/admin/login"
              className="text-xs tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Login
            </Link>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between px-6 md:px-8" style={{ height: '72px' }}>
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-light tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
          >
            {SITE_CONFIG.brandName}
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-xs tracking-widest uppercase transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: dropdownOpen ? 'var(--gold)' : 'var(--text-secondary)',
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      style={{
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </button>

                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 py-3 min-w-[200px] glass"
                      style={{ borderRadius: '2px' }}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-3 text-xs tracking-widest uppercase transition-colors duration-200 hover:text-[var(--gold)]"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: isActive(link.href) ? 'var(--gold)' : 'var(--text-secondary)',
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/book-appointment" className="btn-outline-gold text-xs">
              Book Test Drive
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 transition-opacity hover:opacity-70"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[70] flex flex-col"
        style={{
          width: '300px',
          background: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <span
            className="text-lg font-light tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
          >
            {SITE_CONFIG.brandName}
          </span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={20} style={{ color: 'var(--text-secondary)' }} />
          </button>
        </div>

        {/* Drawer links */}
        <div className="flex-1 overflow-y-auto py-4 px-6">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-4 text-sm tracking-widest uppercase border-b transition-colors hover:text-[var(--gold)]"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: isActive(link.href) ? 'var(--gold)' : 'var(--text-secondary)',
                  borderColor: 'var(--border)',
                }}
              >
                {link.label}
              </Link>
              {link.dropdown?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 pl-4 text-xs tracking-widest uppercase border-b transition-colors hover:text-[var(--gold)]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-muted)',
                    borderColor: 'var(--border)',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Drawer CTA */}
        <div className="p-6 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border)' }}>
          <Link href="/book-appointment" className="btn-gold text-center block">
            Book Test Drive
          </Link>
          <a
            href={buildWhatsAppURL(genericEnquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('whatsapp')}
            className="btn-outline-gold text-center block"
          >
            WhatsApp Us
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            onClick={() => trackCTAClick('call')}
            className="flex items-center justify-center gap-2 py-3 text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}
          >
            <Phone size={12} />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </>
  )
}
