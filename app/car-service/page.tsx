'use client'

import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FadeUp, StaggerChildren, StaggerItem, GoldReveal } from '@/components/animations'
import { Shield, Wrench, Settings, Cog, CheckCircle2 } from 'lucide-react'

export default function CarServicePage() {
  const features = [
    { icon: <Shield size={24} />, title: 'Authorized Technicians', desc: 'Our technicians are factory-trained to handle premium luxury vehicles.' },
    { icon: <Wrench size={24} />, title: 'Genuine OEM Parts', desc: 'We only use 100% authentic parts to preserve your vehicle’s integrity.' },
    { icon: <Settings size={24} />, title: 'Advanced Diagnostics', desc: 'State-of-the-art diagnostic equipment for accurate fault detection.' },
    { icon: <Cog size={24} />, title: 'Digital Service Records', desc: 'Complete transparency with digital logs updated directly to manufacturer databases.' },
  ]

  const packages = [
    {
      name: 'Essential Service',
      price: 'Starts from ₹15,000',
      items: ['Oil & Filter Change', 'Fluid Level Top-ups', 'Brake Inspection', 'Tyre Pressure & Tread Check', 'Comprehensive Health Check'],
    },
    {
      name: 'Major Service',
      price: 'Starts from ₹35,000',
      items: ['Everything in Essential', 'Spark Plug Replacement', 'Air & Cabin Filters', 'Brake Pad Replacement', 'Computer Diagnostics'],
    }
  ]

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '116px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        
        {/* Hero */}
        <section className="relative py-24 md:py-32 px-6 md:px-8 border-b border-[var(--border)] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/80 z-10" />
            <img src="https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=1920&q=80" alt="Service" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-7xl mx-auto relative z-20">
            <FadeUp>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                Expert Care
              </p>
              <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'white' }}>
                Premium Car Service <br /> & Maintenance
              </h1>
              <p className="text-lg max-w-xl mb-10" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}>
                Maintain the peak performance of your luxury vehicle with our specialized service center. 
                Uncompromising quality, complete transparency.
              </p>
              <Link href="/contact" className="btn-gold inline-block">
                Schedule a Service
              </Link>
            </FadeUp>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 md:px-8 bg-[var(--bg-surface)] border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <StaggerItem key={i}>
                  <div className="p-8 border border-[var(--border)] bg-[var(--bg-card)] rounded-sm h-full hover:border-[var(--gold-border)] transition-colors">
                    <div className="mb-6 text-[var(--gold)]">{f.icon}</div>
                    <h3 className="text-lg font-light mb-3 text-[var(--text-primary)] font-[var(--font-display)]">{f.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Packages */}
        <section className="py-24 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="text-center mb-16">
              <GoldReveal>
                <h2 className="text-4xl font-light text-[var(--text-primary)] font-[var(--font-display)]">Service Packages</h2>
              </GoldReveal>
            </FadeUp>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {packages.map((pkg, i) => (
                <FadeUp key={i} delay={i * 0.2}>
                  <div className="p-10 border border-[var(--border)] bg-[var(--bg-card)] rounded-sm">
                    <h3 className="text-2xl font-light text-[var(--text-primary)] font-[var(--font-display)] mb-2">{pkg.name}</h3>
                    <p className="text-[var(--gold)] font-[var(--font-display)] text-xl mb-8">{pkg.price}</p>
                    <ul className="space-y-4 mb-10">
                      {pkg.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                          <CheckCircle2 size={16} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-outline-gold block text-center w-full">Book {pkg.name}</Link>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
