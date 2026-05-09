'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/1234567890?text=Hi%20Prestige%20Motors,%20I'm%20interested%20in%20learning%20more%20about%20your%20vehicles."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-gold text-background p-4 rounded-full shadow-lg hover:shadow-gold-glow transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
    </Link>
  )
}
