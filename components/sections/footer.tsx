'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-gold mb-4">PRESTIGE MOTORS</h3>
            <p className="text-text-muted text-sm">
              Premium pre-owned luxury vehicles curated for discerning collectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-text-muted hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/shop" className="text-text-muted hover:text-gold transition-colors">Shop</Link></li>
              <li><Link href="/about" className="text-text-muted hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/services" className="text-text-muted hover:text-gold transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-text-muted hover:text-gold transition-colors">Buy Vehicles</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-gold transition-colors">Sell Vehicles</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-gold transition-colors">Financing</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-gold transition-colors">Trade-In</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="tel:+1234567890" className="text-text-muted hover:text-gold transition-colors">+1 (234) 567-890</Link></li>
              <li><Link href="mailto:info@prestigemotors.com" className="text-text-muted hover:text-gold transition-colors">info@prestigemotors.com</Link></li>
              <li><p className="text-text-muted">123 Luxury Lane</p></li>
              <li><p className="text-text-muted">Premium City, PC 12345</p></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
            <p>&copy; {currentYear} Prestige Motors. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-gold transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
