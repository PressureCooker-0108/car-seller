import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'
import { FadeUp } from '@/components/animations'
import { buildWhatsAppURL, genericEnquiryMessage } from '@/lib/whatsapp'

export function ContactCTA() {
  return (
    <section
      className="py-24 px-6 md:px-8"
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <FadeUp>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Get In Touch
            </p>
            <h2
              className="text-5xl md:text-6xl font-light leading-tight mb-8"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Visit Our
              <br />
              <span style={{ color: 'var(--gold)' }}>Showroom</span>
            </h2>

            <div className="space-y-5 mb-10">
              {[
                { icon: <MapPin size={15} />, text: SITE_CONFIG.address },
                { icon: <Phone size={15} />, text: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                { icon: <Mail size={15} />, text: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                { icon: <Clock size={15} />, text: SITE_CONFIG.businessHours },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm leading-relaxed hover:text-[var(--gold)] transition-colors"
                      style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-appointment" className="btn-gold text-center">
                Book Test Drive
              </Link>
              <a
                href={buildWhatsAppURL(genericEnquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </FadeUp>

          {/* Right — map embed */}
          <FadeUp delay={0.2}>
            <div
              className="overflow-hidden"
              style={{ borderRadius: '2px', border: '1px solid var(--border)', height: '400px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0557786093537!2d72.83495!3d19.07235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a4d8b5bdb7%3A0x0!2sSV+Road%2C+Khar+West%2C+Mumbai!5e0!3m2!1sen!2sin!4v1699000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AutoElite Showroom Location"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
