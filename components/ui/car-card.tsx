import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CarCardProps {
  image: string
  brand: string
  model: string
  year: number
  price: number
  seats: number
  isSold?: boolean
  slug: string
}

export const CarCard: React.FC<CarCardProps> = ({
  image,
  brand,
  model,
  year,
  price,
  seats,
  isSold = false,
  slug,
}) => {
  const formatPrice = (p: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(p)
  }

  return (
    <Link href={`/cars/${slug}`}>
      <div
        className={`
          group
          relative
          overflow-hidden
          bg-surface
          rounded-[8px]
          transition-luxury
          cursor-pointer
          border border-border
          ${isSold ? 'opacity-60' : 'hover:shadow-gold-glow'}
        `}
      >
        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden bg-surface-2">
          <Image
            src={image}
            alt={`${year} ${brand} ${model}`}
            fill
            className="object-cover transition-luxury group-hover:scale-105"
          />
          
          {/* Sold Badge */}
          {isSold && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="bg-surface border-2 border-gold px-6 py-3 rounded-[4px]">
                <span className="text-gold font-serif text-xl font-bold tracking-widest">
                  SOLD
                </span>
              </div>
            </div>
          )}

          {/* Hover Overlay */}
          {!isSold && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-luxury flex items-end justify-end p-4">
              <div className="flex items-center gap-2 text-gold">
                <span className="text-sm font-medium">View Details</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-luxury"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Header */}
          <div>
            <h3 className="font-serif text-lg font-bold text-text-primary">
              {year} {brand}
            </h3>
            <p className="text-text-muted text-sm font-medium">{model}</p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-3 py-3 border-y border-border">
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                Seats
              </p>
              <p className="text-sm font-medium text-text-primary">{seats}</p>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                Year
              </p>
              <p className="text-sm font-medium text-text-primary">{year}</p>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <p className="text-xs text-text-muted uppercase tracking-wider">
              Price
            </p>
            <p className="text-lg font-bold text-gold">
              {formatPrice(price)}
            </p>
          </div>
        </div>

        {/* Border glow on hover */}
        <div
          className={`
            absolute inset-0 rounded-[8px] pointer-events-none
            opacity-0 group-hover:opacity-100
            transition-luxury
            border-2 border-gold
          `}
        />
      </div>
    </Link>
  )
}

CarCard.displayName = 'CarCard'
