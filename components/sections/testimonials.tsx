import { FadeUp, StaggerChildren, StaggerItem, GoldReveal } from '@/components/animations'

const TESTIMONIALS = [
  {
    name: 'Rohit Malhotra',
    location: 'Mumbai',
    car: 'Mercedes-Benz GLC 200 4MATIC',
    text: 'Absolutely seamless experience. The team was transparent about every detail, and the home test drive made the decision effortless. My GLC is exactly as described — immaculate.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'Pune',
    car: 'BMW X5 xDrive40i',
    text: 'I was skeptical about buying pre-owned luxury, but AutoElite changed everything. Full documentation, no hidden charges, and the car was delivered in showroom condition.',
    rating: 5,
  },
  {
    name: 'Vikram Kapoor',
    location: 'Delhi',
    car: 'Porsche Cayenne Coupe',
    text: 'The best pre-owned luxury car buying experience in India. They handled everything — from RC transfer to insurance — with zero hassle on my end. Will definitely return.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section
      className="py-24 px-6 md:px-8"
      style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
            What Our Clients Say
          </p>
          <GoldReveal>
            <h2 className="text-5xl md:text-6xl font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              Client Stories
            </h2>
          </GoldReveal>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <div
                className="p-8 relative"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                }}
              >
                {/* Gold quote mark */}
                <div
                  className="absolute top-6 right-8 text-7xl font-light leading-none pointer-events-none select-none"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', opacity: 0.12 }}
                >
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: 'var(--gold)', fontSize: '12px' }}>★</span>
                  ))}
                </div>

                <p
                  className="text-sm leading-relaxed mb-6 italic"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                >
                  "{t.text}"
                </p>

                <div className="section-divider mb-5" />

                <div>
                  <p className="font-light" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
                    {t.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                    {t.location} · {t.car}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
