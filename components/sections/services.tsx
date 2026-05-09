import Link from 'next/link'
import { Wrench, Sparkles, Shield } from 'lucide-react'
import { FadeUp, StaggerChildren, StaggerItem, GoldReveal } from '@/components/animations'

const SERVICES = [
  {
    icon: <Shield size={28} />,
    title: 'Car Service & Maintenance',
    desc: 'Expert servicing by certified technicians. OEM parts only. Complete digital service records.',
    href: '/car-service',
    bg: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=800&q=80',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Modifications & Upgrades',
    desc: 'From body kits to performance upgrades, we transform your car to match your vision.',
    href: '/modifications-upgrades',
    bg: 'https://images.unsplash.com/photo-1619632559973-1c2e48a67e1c?w=800&q=80',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Premium Car Detailing',
    desc: 'Showroom-grade deep cleaning, ceramic coating, PPF, and paint correction by experts.',
    href: '/car-detailing',
    bg: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
  },
]

export function Services() {
  return (
    <section
      className="py-24 px-6 md:px-8"
      style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
            Beyond the Sale
          </p>
          <GoldReveal>
            <h2 className="text-5xl md:text-6xl font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              Premium Services
            </h2>
          </GoldReveal>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                href={service.href}
                className="group block relative overflow-hidden"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  minHeight: '320px',
                }}
              >
                {/* Background gradient fallback */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, var(--bg-elevated), var(--bg-card))',
                    opacity: 0.8,
                  }}
                />

                {/* Gold border on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 transition-transform duration-500 origin-bottom scale-y-0 group-hover:scale-y-100"
                  style={{ background: 'linear-gradient(180deg, var(--gold), var(--gold-light))' }}
                />

                <div className="relative z-10 p-8 flex flex-col h-full" style={{ minHeight: '320px' }}>
                  <div className="mb-6 transition-colors duration-300 group-hover:text-[var(--gold)]" style={{ color: 'var(--text-muted)' }}>
                    {service.icon}
                  </div>
                  <h3
                    className="text-2xl font-light mb-4 transition-colors duration-300 group-hover:text-[var(--gold)]"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                    {service.desc}
                  </p>
                  <span
                    className="text-xs tracking-widest uppercase transition-colors duration-300 group-hover:text-[var(--gold)]"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    Learn More →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
