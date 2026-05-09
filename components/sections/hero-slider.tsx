'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { buildWhatsAppURL, genericEnquiryMessage } from '@/lib/whatsapp'
import { trackCTAClick } from '@/lib/db/analytics'

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=85',
    brand: 'Mercedes-Benz',
    headline: 'Pre-Loved Luxury',
    sub: 'Handpicked. Verified. Delivered.',
    cta: { label: 'Explore Pre-Loved Cars', href: '/shop?category=pre-loved' },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=85',
    brand: 'BMW',
    headline: 'Unregistered Imports',
    sub: 'Brand new. Uncompromised.',
    cta: { label: 'View Unregistered Cars', href: '/shop?category=unregistered' },
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85',
    brand: 'Porsche',
    headline: 'The Full Collection',
    sub: 'Every car tells a story of excellence.',
    cta: { label: 'Browse All Cars', href: '/shop' },
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=85',
    brand: 'Lamborghini',
    headline: 'Dreams Delivered',
    sub: "India's Finest Pre-Owned Luxury",
    isDreams: true,
  },
]

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => setCurrent(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  // Autoplay
  useEffect(() => {
    if (!emblaApi || !isPlaying) return
    const timer = setInterval(() => emblaApi.scrollNext(), 5500)
    return () => clearInterval(timer)
  }, [emblaApi, isPlaying])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div ref={emblaRef} className="w-full h-full">
        <div className="flex h-full">
          {SLIDES.map((slide, i) => (
            <div key={slide.id} className="relative flex-none w-full h-full">
              {/* Ken Burns image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={slide.image}
                  alt={`${slide.brand} luxury car — ${slide.headline}`}
                  fill
                  sizes="100vw"
                  className={`object-cover transition-transform ${current === i ? 'ken-burns' : ''}`}
                  priority={i === 0}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Noise texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.035]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
                  {slide.isDreams ? (
                    <div className="text-center">
                      <p
                        className="text-xs tracking-[0.3em] uppercase mb-6"
                        style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}
                      >
                        {slide.brand}
                      </p>
                      <h1
                        className="font-light leading-none mb-4"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(64px, 10vw, 120px)',
                          color: 'var(--gold)',
                          textShadow: '0 0 80px rgba(201,168,76,0.3)',
                        }}
                      >
                        {slide.headline}
                      </h1>
                      <p
                        className="text-lg md:text-xl font-light mb-10"
                        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                      >
                        {slide.sub}
                      </p>
                      <div className="flex items-center justify-center gap-4 flex-wrap">
                        <Link href="/shop" className="btn-gold">
                          Explore Collection
                        </Link>
                        <a
                          href={buildWhatsAppURL(genericEnquiryMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackCTAClick('whatsapp')}
                          className="btn-outline-gold"
                        >
                          Enquire on WhatsApp
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-2xl">
                      <p
                        className="text-xs tracking-[0.3em] uppercase mb-5"
                        style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}
                      >
                        {slide.brand}
                      </p>
                      <h1
                        className="font-light leading-tight mb-5"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(48px, 7vw, 88px)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {slide.headline}
                      </h1>
                      <p
                        className="text-base md:text-lg font-light mb-8"
                        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                      >
                        {slide.sub}
                      </p>
                      <Link href={slide.cta!.href} className="btn-gold inline-block">
                        {slide.cta!.label}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow nav */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border)', borderRadius: '2px' }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} style={{ color: 'var(--text-primary)' }} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border)', borderRadius: '2px' }}
        aria-label="Next slide"
      >
        <ChevronRight size={20} style={{ color: 'var(--text-primary)' }} />
      </button>

      {/* Dot indicators with brand labels */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => emblaApi?.scrollTo(i)}
            className="group flex items-center gap-2 transition-all duration-300"
            aria-label={`Go to slide ${i + 1}: ${slide.brand}`}
          >
            <div
              className="h-px transition-all duration-500"
              style={{
                width: current === i ? '32px' : '16px',
                background: current === i ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
              }}
            />
            <span
              className="text-xs tracking-widest uppercase transition-opacity duration-300"
              style={{
                fontFamily: 'var(--font-body)',
                color: current === i ? 'var(--gold)' : 'transparent',
                opacity: current === i ? 1 : 0,
              }}
            >
              {slide.brand}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
