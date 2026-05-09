'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronUp, Fuel, Gauge, User, Calendar, Settings2, Users, MessageCircle, Instagram, Phone, Zap, Activity, ShieldCheck, Wrench, Cpu } from 'lucide-react'
import type { CarType } from '@/data/cars'
import { formatPrice, formatKM } from '@/lib/utils'
import { buildWhatsAppURL, carEnquiryMessage, instagramDMURL } from '@/lib/whatsapp'
import { trackCarView, trackCTAClick } from '@/lib/analytics'
import { CarCard, getCarImage } from '@/components/ui/CarCard'
import { FadeUp, FadeIn } from '@/components/animations'
import { SITE_CONFIG } from '@/lib/config'

const BRAND_IMAGES: Record<string, string[]> = {
  'Mercedes-Benz': [
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=85',
    'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80',
  ],
  'BMW': [
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=85',
    'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
  ],
  'Range Rover': [
    'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=1200&q=85',
    'https://images.unsplash.com/photo-1578621393748-e7a1c12f9afa?w=800&q=80',
  ],
  'Porsche': [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85',
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
  ],
  'Audi': [
    'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=1200&q=85',
    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80',
  ],
  'Lamborghini': [
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=85',
    'https://images.unsplash.com/photo-1493711662062-fa541aff3aa5?w=800&q=80',
  ],
}
const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=85',
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80',
]

function getImages(car: CarType): string[] {
  return BRAND_IMAGES[car.brand] || DEFAULT_IMAGES
}

const FEATURE_SECTIONS = [
  { key: 'exterior', label: 'Exterior' },
  { key: 'interior', label: 'Interior' },
  { key: 'performance', label: 'Performance' },
  { key: 'technology', label: 'Technology' },
  { key: 'safety', label: 'Safety' },
] as const

interface Props {
  car: CarType
  related: CarType[]
}

export function CarDetailClient({ car, related }: Props) {
  const images = getImages(car)
  const [activeImage, setActiveImage] = useState(0)
  const [openSection, setOpenSection] = useState<string>('exterior')
  const isSold = car.status === 'sold'
  const waURL = buildWhatsAppURL(carEnquiryMessage(car))
  const igURL = instagramDMURL()

  useEffect(() => {
    trackCarView(car)
  }, [car])

  const specs = [
    { icon: <Fuel size={14} />, label: 'Fuel', value: car.fuel },
    { icon: <Gauge size={14} />, label: 'Driven', value: formatKM(car.km) },
    { icon: <User size={14} />, label: 'Ownership', value: car.ownership },
    { icon: <Calendar size={14} />, label: 'Year', value: String(car.year) },
    { icon: <Settings2 size={14} />, label: 'Transmission', value: car.transmission },
    { icon: <Users size={14} />, label: 'Seats', value: `${car.seats} Seats` },
    { icon: <Calendar size={14} />, label: 'Reg.', value: car.registration },
    { icon: <Calendar size={14} />, label: 'Number', value: `XX-${car.carNumber}` },
    { icon: <Cpu size={14} />, label: 'Engine', value: car.engine },
    { icon: <Zap size={14} />, label: 'Power', value: car.power },
    { icon: <Activity size={14} />, label: 'Torque', value: car.torque },
    { icon: <Fuel size={14} />, label: 'Mileage', value: car.mileageARAI },
    { icon: <ShieldCheck size={14} />, label: 'Insurance', value: car.insurance },
    { icon: <Wrench size={14} />, label: 'Last Service', value: car.lastService },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left — main content */}
        <div className="lg:col-span-2">
          {/* Image gallery */}
          <FadeIn>
            <div className="relative overflow-hidden mb-3" style={{ aspectRatio: '16/10', borderRadius: '2px', border: '1px solid var(--border)' }}>
              <Image
                src={images[activeImage]}
                alt={`${car.year} ${car.brand} ${car.model}`}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                priority
              />
              {isSold && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
                  <span className="text-6xl font-light tracking-[0.3em] uppercase rotate-[-12deg] opacity-80"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--red-accent)' }}>
                    Sold
                  </span>
                </div>
              )}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className="relative overflow-hidden flex-shrink-0 transition-all duration-200"
                  style={{
                    width: '80px', height: '56px',
                    border: `2px solid ${activeImage === i ? 'var(--gold)' : 'var(--border)'}`,
                    borderRadius: '2px',
                  }}
                >
                  <Image src={img} alt={`View ${i + 1}`} fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Car header */}
          <FadeUp delay={0.1} className="mt-8 mb-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                  {car.brand}
                </p>
                <h1 className="text-4xl md:text-5xl font-light mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                  {car.model}
                </h1>
                <p className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                  {car.year} · {car.color} · {car.bodyType}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-light" style={{ fontFamily: 'var(--font-display)', color: isSold ? 'var(--text-muted)' : 'var(--gold)' }}>
                  {formatPrice(car.price)}
                </p>
                {isSold ? (
                  <span className="badge-sold mt-2 inline-block">Sold</span>
                ) : (
                  <span className="badge-available mt-2 inline-block">Available</span>
                )}
              </div>
            </div>
          </FadeUp>

          {/* Spec badges */}
          <FadeUp delay={0.15}>
            <div className="flex flex-wrap gap-2 mb-8">
              {specs.map(spec => (
                <div key={spec.label} className="spec-badge">
                  <span style={{ color: 'var(--gold)' }}>{spec.icon}</span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)', marginRight: '2px' }}>{spec.label}:</span>
                  <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{spec.value}</span>
                </div>
              ))}
            </div>
            {car.warrantyUntil && (
              <div
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs"
                style={{
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '2px',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                ✓ Warranty Valid Until: {car.warrantyUntil}
              </div>
            )}
          </FadeUp>

          {/* Feature accordion */}
          <FadeUp delay={0.2}>
            <h2 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              Features & Specifications
            </h2>
            <div className="space-y-2">
              {FEATURE_SECTIONS.map(section => {
                const items = car[section.key] as string[]
                const isOpen = openSection === section.key
                return (
                  <div
                    key={section.key}
                    style={{
                      background: 'var(--bg-card)',
                      border: `1px solid ${isOpen ? 'var(--gold-border)' : 'var(--border)'}`,
                      borderLeft: isOpen ? '3px solid var(--gold)' : '1px solid var(--border)',
                      borderRadius: '2px',
                    }}
                  >
                    <button
                      onClick={() => setOpenSection(isOpen ? '' : section.key)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-200"
                    >
                      <span
                        className="text-sm tracking-widest uppercase"
                        style={{
                          fontFamily: 'var(--font-body)',
                          color: isOpen ? 'var(--gold)' : 'var(--text-secondary)',
                          fontWeight: 500,
                        }}
                      >
                        {section.label}
                      </span>
                      {isOpen
                        ? <ChevronUp size={14} style={{ color: 'var(--gold)' }} />
                        : <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />
                      }
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5">
                        <ul className="space-y-2">
                          {items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                              <span style={{ color: 'var(--gold)', marginTop: '4px', flexShrink: 0 }}>—</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </FadeUp>

          {/* Related Cars */}
          {related.length > 0 && (
            <FadeUp delay={0.25} className="mt-16">
              <h2 className="text-3xl font-light mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map(c => <CarCard key={c.slug} car={c} />)}
              </div>
            </FadeUp>
          )}
        </div>

        {/* Right — sticky CTA sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <div
              className="p-6"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--gold-border)',
                borderRadius: '2px',
                boxShadow: 'var(--shadow-gold)',
              }}
            >
              <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                {isSold ? 'This Car is Sold' : 'Interested in this car?'}
              </p>
              <p className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-display)', color: isSold ? 'var(--text-muted)' : 'var(--text-primary)' }}>
                {formatPrice(car.price)}
              </p>

              {!isSold ? (
                <div className="flex flex-col gap-3">
                  <a
                    href={waURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCTAClick('whatsapp', car)}
                    className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:brightness-110"
                    style={{
                      background: '#25D366',
                      color: 'white',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    <MessageCircle size={16} />
                    Enquire on WhatsApp
                  </a>
                  <a
                    href={igURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCTAClick('instagram', car)}
                    className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium tracking-widest uppercase transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
                      color: 'white',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    <Instagram size={16} />
                    DM on Instagram
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    onClick={() => trackCTAClick('call', car)}
                    className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium tracking-widest uppercase btn-outline-gold"
                  >
                    <Phone size={15} />
                    Call Us Now
                  </a>
                  <Link href="/book-appointment" className="btn-gold text-center text-sm">
                    Book Test Drive
                  </Link>
                </div>
              ) : (
                <div>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                    This car has been sold. Browse our available inventory for similar options.
                  </p>
                  <Link href="/shop" className="btn-outline-gold block text-center">
                    View Available Cars
                  </Link>
                </div>
              )}

              {/* Trust signals */}
              <div className="mt-6 pt-6 space-y-2" style={{ borderTop: '1px solid var(--border)' }}>
                {['✓ Single-owner verified', '✓ Full service history', '✓ Document verified', '✓ Home delivery available'].map(t => (
                  <p key={t} className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky CTA bar */}
      {!isSold && (
        <div
          className="lg:hidden fixed bottom-20 left-0 right-0 z-40 px-4 pb-4"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.95), transparent)' }}
        >
          <div className="flex gap-2">
            <a
              href={waURL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick('whatsapp', car)}
              className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-medium tracking-widest uppercase"
              style={{ background: '#25D366', color: 'white', borderRadius: '2px', fontFamily: 'var(--font-body)' }}
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              onClick={() => trackCTAClick('call', car)}
              className="btn-outline-gold flex items-center gap-2 px-5"
            >
              <Phone size={14} /> Call
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
