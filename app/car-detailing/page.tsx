'use client'

import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FadeUp, StaggerChildren, StaggerItem, GoldReveal } from '@/components/animations'
import { Sparkles, Droplets, ShieldCheck } from 'lucide-react'

export default function DetailingPage() {
  const services = [
    {
      icon: <Sparkles size={28} />,
      title: 'Ceramic Coating',
      desc: '9H hardness nano-ceramic coating for extreme gloss, hydrophobicity, and protection against UV rays, bird droppings, and minor scratches.',
      price: 'From ₹25,000'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Paint Protection Film (PPF)',
      desc: 'Self-healing, optically clear polyurethane film that protects your vehicle\'s paint from rock chips, road debris, and swirl marks.',
      price: 'From ₹85,000'
    },
    {
      icon: <Droplets size={28} />,
      title: 'Showroom Detailing',
      desc: 'Multi-stage paint correction, deep interior vacuuming, leather conditioning, and engine bay cleaning to restore showroom finish.',
      price: 'From ₹12,000'
    }
  ]

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '116px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        
        <section className="relative py-24 md:py-32 px-6 md:px-8 border-b border-[var(--border)] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/75 z-10" />
            <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80" alt="Detailing" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-7xl mx-auto relative z-20">
            <FadeUp>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                Flawless Finish
              </p>
              <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'white' }}>
                Premium Car <br /> Detailing Studio
              </h1>
              <p className="text-lg max-w-xl mb-10" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}>
                Protect your investment and turn heads. We use the world's finest products to restore and protect your luxury vehicle.
              </p>
              <Link href="/contact" className="btn-gold inline-block">
                Book a Detailing Session
              </Link>
            </FadeUp>
          </div>
        </section>

        <section className="py-24 px-6 md:px-8 bg-[var(--bg-surface)]">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="text-center mb-16">
              <GoldReveal>
                <h2 className="text-4xl font-light text-[var(--text-primary)] font-[var(--font-display)]">Our Detailing Services</h2>
              </GoldReveal>
            </FadeUp>
            
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((svc, i) => (
                <StaggerItem key={i}>
                  <div className="p-10 border border-[var(--border)] bg-[var(--bg-card)] rounded-sm h-full flex flex-col items-center text-center hover:border-[var(--gold-border)] transition-colors">
                    <div className="mb-6 text-[var(--gold)]">{svc.icon}</div>
                    <h3 className="text-2xl font-light mb-4 text-[var(--text-primary)] font-[var(--font-display)]">{svc.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 flex-grow">{svc.desc}</p>
                    <div className="w-full pt-6 border-t border-[var(--border)]">
                      <p className="text-lg font-light text-[var(--gold)] font-[var(--font-display)] mb-4">{svc.price}</p>
                      <Link href="/contact" className="btn-outline-gold w-full block text-xs">Enquire Now</Link>
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
