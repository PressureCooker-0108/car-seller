import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { FadeUp, FadeIn } from '@/components/animations'

const USPS = [
  { num: '01', title: 'Free Home Inspection', desc: 'Our expert visits your location for a thorough multi-point inspection.' },
  { num: '02', title: 'Best Market Price', desc: 'We benchmark against live market data to offer you the fairest value.' },
  { num: '03', title: 'Instant Payment', desc: 'Same-day bank transfer once documents are verified and deal is confirmed.' },
  { num: '04', title: 'Zero Paperwork Hassle', desc: 'We handle all RC transfer, NOC, and documentation — end to end.' },
]

export function SellYourCar() {
  return (
    <section
      className="py-24 px-6 md:px-8"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <FadeUp>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Sell With Confidence
            </p>
            <h2
              className="text-5xl md:text-6xl font-light leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Sell Your
              <br />
              <span style={{ color: 'var(--gold)' }}>Luxury Car</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              We specialize in acquiring premium pre-owned vehicles at the best prices. No dealer games, no hidden deductions — just transparency and speed.
            </p>
            <Link href="/sell-car" className="btn-gold inline-block">
              Get a Free Valuation
            </Link>
          </FadeUp>

          {/* Right — numbered USPs */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {USPS.map((usp) => (
                <div
                  key={usp.num}
                  className="flex gap-6 p-6 transition-all duration-300 hover:border-[var(--gold-border)]"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '2px',
                  }}
                >
                  <span
                    className="text-3xl font-light flex-shrink-0 leading-none"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', opacity: 0.5 }}
                  >
                    {usp.num}
                  </span>
                  <div>
                    <h3
                      className="text-lg font-light mb-1"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                    >
                      {usp.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                      {usp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
