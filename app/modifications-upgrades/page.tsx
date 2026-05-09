'use client'

import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FadeUp, StaggerChildren, StaggerItem, GoldReveal } from '@/components/animations'

export default function ModificationsPage() {
  const modifications = [
    {
      title: 'Performance Tuning',
      desc: 'ECU remaps, exhaust systems, and intake upgrades to unlock your engine\'s true potential while maintaining reliability.',
      img: 'https://images.unsplash.com/photo-1547744152-14d985cb937f?w=800&q=80',
    },
    {
      title: 'Aerodynamics & Body Kits',
      desc: 'Premium carbon fiber splitters, spoilers, and full wide-body conversions from world-renowned tuning houses.',
      img: 'https://images.unsplash.com/photo-1619632559973-1c2e48a67e1c?w=800&q=80',
    },
    {
      title: 'Alloy Wheels & Stance',
      desc: 'Forged custom wheels and adjustable suspension systems to perfect your vehicle\'s stance and handling.',
      img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    },
    {
      title: 'Interior Customization',
      desc: 'Bespoke leather upholstery, starlight headliners, and carbon fiber interior trims crafted to your exact specifications.',
      img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    }
  ]

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '116px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        
        {/* Hero */}
        <section className="relative py-24 md:py-32 px-6 md:px-8 border-b border-[var(--border)] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10" />
            <img src="https://images.unsplash.com/photo-1619632559973-1c2e48a67e1c?w=1920&q=80" alt="Modifications" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-7xl mx-auto relative z-20">
            <FadeUp>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                Bespoke Builds
              </p>
              <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'white' }}>
                Modifications <br /> & Upgrades
              </h1>
              <p className="text-lg max-w-xl mb-10" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}>
                Transform your luxury car into a unique masterpiece. From subtle performance enhancements to complete visual overhauls.
              </p>
              <Link href="/contact" className="btn-gold inline-block">
                Consult Our Experts
              </Link>
            </FadeUp>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 md:px-8 bg-[var(--bg-surface)]">
          <div className="max-w-7xl mx-auto">
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modifications.map((mod, i) => (
                <StaggerItem key={i}>
                  <div className="group relative overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--bg-card)] aspect-[4/3] md:aspect-[16/9]">
                    <img src={mod.img} alt={mod.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-2xl font-light mb-3 text-[var(--gold)] font-[var(--font-display)]">{mod.title}</h3>
                      <p className="text-sm text-[rgba(255,255,255,0.8)] leading-relaxed max-w-md">{mod.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
