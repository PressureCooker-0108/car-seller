import { FadeUp, FadeIn, CountUp } from '@/components/animations'
import { SITE_CONFIG } from '@/lib/config'

export function About() {
  return (
    <section
      className="py-24 px-6 md:px-8 relative overflow-hidden"
      style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}
    >
      {/* Background decorative */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at right, var(--gold) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — story */}
          <FadeUp>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Our Story
            </p>
            <h2
              className="text-5xl md:text-6xl font-light leading-tight mb-8"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Mumbai's Most
              <br />
              Trusted Luxury
              <br />
              <span style={{ color: 'var(--gold)' }}>Car Experts</span>
            </h2>

            {/* Founder quote */}
            <blockquote
              className="text-2xl font-light leading-relaxed mb-8 italic pl-6"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--gold)',
                borderLeft: '2px solid var(--gold)',
              }}
            >
              "We don't just sell cars — we deliver the experience of owning one."
            </blockquote>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Founded in the heart of Mumbai's Khar West, {SITE_CONFIG.brandName} has been the trusted partner for discerning buyers who demand nothing but the finest. Every car in our collection is hand-selected, thoroughly inspected, and documented with complete transparency.
            </p>
            <p
              className="text-sm"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
            >
              — Founder, {SITE_CONFIG.brandName}
            </p>
          </FadeUp>

          {/* Right — stats */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: SITE_CONFIG.totalCustomers, suffix: '+', label: 'Happy Customers' },
                { value: SITE_CONFIG.totalCars, suffix: '+', label: 'Cars Delivered' },
                { value: 8, suffix: '+', label: 'Years Experience' },
                { value: 100, suffix: '%', label: 'Verified Listings' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 text-center"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '2px',
                  }}
                >
                  <div
                    className="text-5xl font-light mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
