'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, Phone, Instagram } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'
import { buildWhatsAppURL, genericEnquiryMessage } from '@/lib/whatsapp'
import { trackCTAClick } from '@/lib/db/analytics'

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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        {/* Top bar */}
        <div
          className="hidden md:flex items-center justify-between px-8"
          style={{
            height: '48px',
            borderBottom: '1px solid rgba(201,168,76,0.15)',
            background: scrolled ? 'transparent' : 'rgba(0,0,0,0.4)',
          }}
        >
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            onClick={() => trackCTAClick('call')}
            className="flex items-center gap-2 transition-opacity hover:opacity-80 uppercase"
            style={{ color: '#C9A84C', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 400, letterSpacing: '0.08em' }}
          >
            <Phone size={12} />
            {SITE_CONFIG.phone}
          </a>
          <div className="flex items-center gap-6">
            <Link
              href="/admin/login"
              className="uppercase transition-colors duration-300 hover:text-[var(--gold)]"
              style={{ color: '#A0A0A0', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 400, letterSpacing: '0.12em' }}
            >
              Login
            </Link>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between px-6 md:px-8" style={{ height: '80px' }}>
          {/* Logo */}
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="uppercase font-light"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 50%, #C9A84C 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.2em',
                fontSize: '22px',
              }}
            >
              {SITE_CONFIG.brandName}
            </Link>
            <div className="w-[40px] h-[1px] mt-1" style={{ background: '#C9A84C' }} />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 uppercase transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      fontWeight: 400,
                      letterSpacing: '0.12em',
                      color: dropdownOpen ? '#C9A84C' : '#A0A0A0',
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      style={{
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s',
                      }}
                    />
                  </button>

                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 py-4 min-w-[220px]"
                      style={{
                        background: 'rgba(10,10,10,0.97)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(201,168,76,0.12)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
                        borderRadius: '2px',
                      }}
                    >
                      {link.dropdown.map((item) => (
                         <Link
                          key={item.href}
                          href={item.href}
                          className="block px-6 py-2 uppercase transition-colors duration-300 hover:text-[#C9A84C]"
                          style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#A0A0A0' }}
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
                  className="uppercase transition-colors duration-300 hover:text-[#C9A84C]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    fontWeight: 400,
                    letterSpacing: '0.12em',
                    color: isActive(link.href) ? '#C9A84C' : '#A0A0A0',
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/book-appointment"
              className="uppercase text-center group"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.1em',
                padding: '10px 20px',
                color: '#C9A84C',
                border: '1px solid rgba(201,168,76,0.5)',
                transition: 'all 0.3s ease',
                borderRadius: '2px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#C9A84C';
                e.currentTarget.style.color = '#080808';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#C9A84C';
              }}
            >
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
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[70] flex flex-col"
        style={{
          width: '320px',
          background: '#0A0A0A',
          borderLeft: '1px solid rgba(201,168,76,0.1)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-6"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex flex-col">
            <span
              className="uppercase font-light"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 50%, #C9A84C 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.2em',
                fontSize: '18px',
              }}
            >
              {SITE_CONFIG.brandName}
            </span>
            <div className="w-[30px] h-[1px] mt-1" style={{ background: '#C9A84C' }} />
          </div>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={20} style={{ color: 'var(--text-secondary)' }} />
          </button>
        </div>

        {/* Drawer links */}
        <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block uppercase transition-colors"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  color: isActive(link.href) ? '#C9A84C' : '#A0A0A0',
                }}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="pl-4 mt-4 flex flex-col gap-4 border-l border-[rgba(255,255,255,0.06)]">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block uppercase transition-colors"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        color: '#666666',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Drawer CTA (Pinned to bottom) */}
        <div className="p-6 flex flex-col gap-4 bg-[#0A0A0A]" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <a
            href={buildWhatsAppURL(genericEnquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('whatsapp')}
            className="flex items-center justify-center gap-2 py-3 w-full uppercase transition-all duration-300"
            style={{
              background: '#25D366',
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              borderRadius: '2px',
            }}
          >
            WhatsApp Us
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            onClick={() => trackCTAClick('call')}
            className="flex items-center justify-center gap-2 py-2 text-center uppercase"
            style={{ color: '#C9A84C', fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.08em' }}
          >
            <Phone size={12} />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </>
  )
}
