'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { GoldButton } from '@/components/ui/gold-button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-serif text-2xl font-bold text-gold">PRESTIGE MOTORS</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-text-primary hover:text-gold transition-colors duration-300">Home</Link>
            <Link href="/shop" className="text-text-primary hover:text-gold transition-colors duration-300">Shop</Link>
            <Link href="/compare" className="text-text-primary hover:text-gold transition-colors duration-300">Compare</Link>
            <Link href="/about" className="text-text-primary hover:text-gold transition-colors duration-300">About</Link>
            <Link href="/services" className="text-text-primary hover:text-gold transition-colors duration-300">Services</Link>
            <Link href="/contact" className="text-text-primary hover:text-gold transition-colors duration-300">Contact</Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <GoldButton onClick={() => {/* TODO: navigate to contact */}}>
              Schedule Viewing
            </GoldButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-primary hover:text-gold transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/" className="text-text-primary hover:text-gold transition-colors">Home</Link>
              <Link href="/shop" className="text-text-primary hover:text-gold transition-colors">Shop</Link>
              <Link href="/compare" className="text-text-primary hover:text-gold transition-colors">Compare</Link>
              <Link href="/about" className="text-text-primary hover:text-gold transition-colors">About</Link>
              <Link href="/services" className="text-text-primary hover:text-gold transition-colors">Services</Link>
              <Link href="/contact" className="text-text-primary hover:text-gold transition-colors">Contact</Link>
              <GoldButton onClick={() => setIsOpen(false)} className="w-full justify-center">
                Schedule Viewing
              </GoldButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
