'use client'

import { usePathname } from 'next/navigation'
import { MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'
import { buildWhatsAppURL, genericEnquiryMessage } from '@/lib/whatsapp'
import { trackCTAClick } from '@/lib/db/analytics'

export function FloatingWhatsApp() {
  const pathname = usePathname()
  if (pathname.startsWith('/admin')) return null

  return (
    <a
      href={buildWhatsAppURL(genericEnquiryMessage)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCTAClick('whatsapp')}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full"
      style={{ background: '#25D366', boxShadow: '0 4px 24px rgba(37,211,102,0.35)' }}
    >
      {/* Pulse rings */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ background: 'rgba(37,211,102,0.3)', animationDuration: '2.5s' }}
      />
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ background: 'rgba(37,211,102,0.15)', animationDuration: '2.5s', animationDelay: '0.5s' }}
      />
      <MessageCircle size={24} color="white" fill="white" className="relative z-10" />

      {/* Tooltip */}
      <span
        className="absolute right-16 whitespace-nowrap px-3 py-1.5 text-xs rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: 'var(--bg-elevated)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border)',
          fontFamily: 'var(--font-body)',
        }}
      >
        Chat with us
      </span>
    </a>
  )
}
