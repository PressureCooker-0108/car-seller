'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FadeUp, FadeIn, CountUp } from '@/components/animations'
import { SITE_CONFIG } from '@/lib/config'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '116px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <FadeUp>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                About Us
              </p>
              <h1 className="text-4xl md:text-6xl font-light mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                Redefining the <br /> <span style={{ color: 'var(--gold)' }}>Luxury Automotive</span> <br /> Experience
              </h1>
              <div className="space-y-6 text-[var(--text-secondary)] font-[var(--font-body)] leading-relaxed text-sm md:text-base">
                <p>
                  Founded with a singular vision to bring transparency, trust, and unparalleled quality to the pre-owned luxury car market in India. {SITE_CONFIG.brandName} stands as a testament to automotive excellence.
                </p>
                <p>
                  We understand that purchasing a luxury vehicle is more than a transaction; it is the fulfillment of a dream. Our curated collection undergoes rigorous multi-point inspections ensuring that every vehicle on our floor meets the highest global standards.
                </p>
              </div>
            </FadeUp>
            
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/5] md:aspect-square w-full rounded-sm overflow-hidden border border-[var(--border)]">
                <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80" alt="Showroom" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-sm">
                  <p className="text-[var(--gold)] font-[var(--font-display)] text-2xl mb-1 italic">"Excellence is not an act, but a habit."</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16 border-t border-b border-[var(--border)] mb-24">
            {[
              { value: 7600, suffix: '+', label: 'Clients Served' },
              { value: 70, suffix: '+', label: 'Vehicles Sold' },
              { value: 100, suffix: '%', label: 'Verified Cars' },
              { value: 5, suffix: '+', label: 'Years Legacy' },
            ].map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-5xl md:text-6xl font-light mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs tracking-widest uppercase text-[var(--text-muted)] font-[var(--font-body)]">{stat.label}</p>
              </FadeUp>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
