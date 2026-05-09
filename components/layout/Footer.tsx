import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'
import { buildWhatsAppURL, genericEnquiryMessage } from '@/lib/whatsapp'

const footerLinks = {
  collection: [
    { label: 'Pre-Loved Cars', href: '/shop?category=pre-loved' },
    { label: 'Unregistered Cars', href: '/shop?category=unregistered' },
    { label: 'Sold Cars', href: '/shop?status=sold' },
    { label: 'Compare Cars', href: '/compare' },
    { label: 'Book Test Drive', href: '/book-appointment' },
  ],
  services: [
    { label: 'Car Service', href: '/car-service' },
    { label: 'Modifications & Upgrades', href: '/modifications-upgrades' },
    { label: 'Car Detailing', href: '/car-detailing' },
    { label: 'Sell Your Car', href: '/sell-car' },
    { label: 'Car Media', href: '/cars-media' },
  ],
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-light tracking-[0.15em] uppercase block mb-5"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
            >
              {SITE_CONFIG.brandName}
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
              India's finest curated luxury pre-owned car dealership. Handpicked. Verified. Delivered.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`https://instagram.com/${SITE_CONFIG.instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm transition-all duration-300 hover:scale-110"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={buildWhatsAppURL(genericEnquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm transition-all duration-300 hover:scale-110"
                style={{ background: 'var(--bg-elevated)', color: '#25D366' }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Collection */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-5 font-medium" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Collection
            </h4>
            <ul className="space-y-3">
              {footerLinks.collection.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--gold)]"
                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-5 font-medium" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--gold)]"
                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-5 font-medium" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-sm transition-colors duration-200 hover:text-[var(--gold)]"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-sm transition-colors duration-200 hover:text-[var(--gold)]"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span className="leading-relaxed">{SITE_CONFIG.address}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                  <Clock size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  {SITE_CONFIG.businessHours}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
            © {year} {SITE_CONFIG.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.company.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-wide transition-colors duration-200 hover:text-[var(--gold)]"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
