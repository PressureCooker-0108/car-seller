'use client'

import { useSearchParams, useRouter } from 'next/navigation'

export function SortBar() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const sortBy = searchParams.get('sort') || 'featured'

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('sort', value)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-text-muted">Sort by:</span>
      <select
        value={sortBy}
        onChange={(e) => handleSort(e.target.value)}
        className="px-4 py-2 bg-surface border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-gold transition-luxury"
      >
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="year-newest">Year: Newest First</option>
        <option value="year-oldest">Year: Oldest First</option>
        <option value="km-low">Mileage: Low First</option>
      </select>
    </div>
  )
}
