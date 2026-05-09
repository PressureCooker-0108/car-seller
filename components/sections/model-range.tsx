import Link from 'next/link'
import { FadeUp, StaggerChildren, StaggerItem, GoldReveal } from '@/components/animations'

const BODY_TYPES = [
  {
    label: 'Sedan',
    href: '/shop?bodyType=Sedan',
    description: 'Refined & Elegant',
    svg: (
      <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-12">
        <path d="M10 42 Q15 42 20 38 L35 26 Q50 18 65 18 L90 18 Q102 18 108 26 L112 34 Q116 36 116 42 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="30" cy="44" r="7" stroke="currentColor" strokeWidth="2"/>
        <circle cx="90" cy="44" r="7" stroke="currentColor" strokeWidth="2"/>
        <path d="M37 42 L83 42" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'SUV',
    href: '/shop?bodyType=SUV',
    description: 'Commanding & Versatile',
    svg: (
      <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-12">
        <rect x="10" y="20" width="100" height="24" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 28 L110 28" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 20 L28 12 L92 12 L100 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="30" cy="46" r="7" stroke="currentColor" strokeWidth="2"/>
        <circle cx="90" cy="46" r="7" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Coupe',
    href: '/shop?bodyType=Coupe',
    description: 'Bold & Sporty',
    svg: (
      <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-12">
        <path d="M8 42 Q12 42 16 38 L30 24 Q48 16 70 16 L95 18 Q108 20 112 32 L114 42 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="28" cy="44" r="7" stroke="currentColor" strokeWidth="2"/>
        <circle cx="90" cy="44" r="7" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Hatchback',
    href: '/shop?bodyType=Hatchback',
    description: 'Compact & Practical',
    svg: (
      <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-12">
        <path d="M15 42 L15 30 L30 18 L80 18 L100 28 L105 42 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 18 L30 42" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="30" cy="44" r="7" stroke="currentColor" strokeWidth="2"/>
        <circle cx="88" cy="44" r="7" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Convertible',
    href: '/shop?bodyType=Convertible',
    description: 'Open & Exhilarating',
    svg: (
      <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-12">
        <path d="M10 38 Q14 38 18 34 L32 26 Q50 22 72 22 L95 24 Q108 26 112 38 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M32 26 Q40 18 58 16 Q70 16 80 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3"/>
        <circle cx="28" cy="40" r="7" stroke="currentColor" strokeWidth="2"/>
        <circle cx="88" cy="40" r="7" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Wagon',
    href: '/shop?bodyType=Wagon',
    description: 'Spacious & Refined',
    svg: (
      <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-12">
        <rect x="12" y="22" width="96" height="22" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 30 L108 30" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 22 L26 14 L100 14 L108 22" stroke="currentColor" strokeWidth="2"/>
        <circle cx="30" cy="46" r="7" stroke="currentColor" strokeWidth="2"/>
        <circle cx="90" cy="46" r="7" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
]

export function ModelRange() {
  return (
    <section
      className="py-24 px-6 md:px-8"
      style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
            Browse By Type
          </p>
          <GoldReveal>
            <h2 className="text-5xl md:text-6xl font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              Model Range
            </h2>
          </GoldReveal>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {BODY_TYPES.map((type) => (
            <StaggerItem key={type.label}>
              <Link
                href={type.href}
                className="group flex flex-col items-center text-center p-6 transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                }}
              >
                <div
                  className="mb-4 transition-colors duration-300 group-hover:text-[var(--gold)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {type.svg}
                </div>
                <h3
                  className="text-sm font-light mb-1 transition-colors duration-300 group-hover:text-[var(--gold)]"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: '1.1rem' }}
                >
                  {type.label}
                </h3>
                <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                  {type.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
