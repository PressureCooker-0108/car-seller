'use client'

import Link from 'next/link'
import { Car } from '@/lib/data/cars'
import { CarCard } from '@/components/ui/car-card'
import { ScrollReveal } from '@/components/scroll-reveal'

interface CarGridProps {
  cars: Car[]
  isLoading?: boolean
}

export function CarGrid({ cars, isLoading = false }: CarGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-96 bg-surface-2 rounded-lg border border-border animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (cars.length === 0) {
    return (
      <div className="col-span-full py-20 text-center">
        <p className="text-text-muted text-lg mb-4">No vehicles match your criteria.</p>
        <p className="text-text-muted text-sm">Try adjusting your filters or explore our full collection.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car, index) => (
        <ScrollReveal key={car.id} delay={index * 50}>
          <Link href={`/cars/${car.slug}`}>
            <CarCard
              image={car.image}
              brand={car.brand}
              model={car.model}
              year={car.year}
              price={car.price}
              seats={car.seats}
              isSold={car.status === 'sold'}
              slug={car.slug}
            />
          </Link>
        </ScrollReveal>
      ))}
    </div>
  )
}
