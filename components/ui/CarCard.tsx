import Link from 'next/link'
import Image from 'next/image'
import { Fuel, Gauge, User, Calendar } from 'lucide-react'
import type { CarType } from '@/data/cars'
import { formatPrice, formatKM } from '@/lib/utils'

// Luxury car image mapping by brand (Unsplash)
const BRAND_IMAGES: Record<string, string> = {
  'Mercedes-Benz': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
  'BMW': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
  'Range Rover': 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
  'Porsche': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  'Audi': 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=800&q=80',
  'Lamborghini': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
  'Volvo': 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80',
  'Lexus': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
  'default': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
}

export function getCarImage(car: CarType): string {
  return car.image || BRAND_IMAGES[car.brand] || BRAND_IMAGES.default
}

interface CarCardProps {
  car: CarType
  priority?: boolean
}

export function CarCard({ car, priority = false }: CarCardProps) {
  const isSold = car.status === 'sold'
  const imageSrc = getCarImage(car)

  return (
    <Link href={`/cars/${car.slug}`} className="group block card-luxury">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <Image
          src={imageSrc}
          alt={`${car.year} ${car.brand} ${car.model} — ${car.color}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: isSold ? 'saturate(0.4) brightness(0.7)' : 'none' }}
          priority={priority}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          {isSold ? (
            <span className="badge-sold">Sold</span>
          ) : (
            <span className="badge-available">Available</span>
          )}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs tracking-widest uppercase px-2 py-1"
            style={{
              background: 'rgba(0,0,0,0.6)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
              backdropFilter: 'blur(8px)',
              borderRadius: '1px',
              border: '1px solid var(--border)',
            }}
          >
            {car.category}
          </span>
        </div>

        {/* SOLD overlay */}
        {isSold && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-4xl font-light tracking-[0.3em] uppercase rotate-[-15deg] opacity-70"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--red-accent)' }}
            >
              Sold
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Brand */}
        <p
          className="text-xs tracking-[0.15em] uppercase mb-1"
          style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}
        >
          {car.brand}
        </p>

        {/* Model + Year */}
        <h3
          className="text-xl font-light mb-1 leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          {car.model}
        </h3>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
          {car.year} · {car.color}
        </p>

        {/* Specs row */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
            <Fuel size={11} style={{ color: 'var(--gold)' }} />
            {car.fuel}
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
            <Gauge size={11} style={{ color: 'var(--gold)' }} />
            {formatKM(car.km)}
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
            <User size={11} style={{ color: 'var(--gold)' }} />
            {car.ownership}
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
            <Calendar size={11} style={{ color: 'var(--gold)' }} />
            {car.registration}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-4" />

        {/* Price */}
        <div className="flex items-center justify-between">
          <span
            className="text-2xl font-light"
            style={{
              fontFamily: 'var(--font-display)',
              color: isSold ? 'var(--text-muted)' : 'var(--gold)',
            }}
          >
            {formatPrice(car.price)}
          </span>
          <span
            className="text-xs tracking-widest uppercase transition-colors duration-300 group-hover:text-[var(--gold)]"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            View Details →
          </span>
        </div>
      </div>
    </Link>
  )
}
