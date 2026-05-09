import Link from 'next/link'
import { allCars } from '@/data/cars'
import { CarCard } from '@/components/ui/CarCard'
import { FadeUp, StaggerChildren, StaggerItem, GoldReveal } from '@/components/animations'

export function FeaturedCollection() {
  const featured = allCars.filter(c => c.status === 'available').slice(0, 6)

  return (
    <section className="py-24 px-6 md:px-8" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}
          >
            Curated Selection
          </p>
          <GoldReveal>
            <h2
              className="text-5xl md:text-6xl font-light"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Featured Collection
            </h2>
          </GoldReveal>
          <p
            className="mt-6 text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            Every vehicle in our showroom is meticulously inspected, verified, and presented with complete transparency.
          </p>
        </FadeUp>

        {/* Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((car, i) => (
            <StaggerItem key={car.slug}>
              <CarCard car={car} priority={i < 3} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* CTA */}
        <FadeUp className="text-center">
          <Link href="/shop" className="btn-outline-gold inline-block">
            View All {allCars.length}+ Vehicles
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}
