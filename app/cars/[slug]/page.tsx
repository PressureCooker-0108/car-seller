import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CarDetailClient } from './CarDetailClient'
import { allCars, getCarBySlug, getRelatedCars } from '@/data/cars'
import { SITE_CONFIG } from '@/lib/config'
import { formatPrice } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return allCars.map(car => ({ slug: car.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const car = getCarBySlug(slug)
  if (!car) return { title: 'Car Not Found' }

  return {
    title: `${car.year} ${car.brand} ${car.model} — ${formatPrice(car.price)}`,
    description: `${car.year} ${car.brand} ${car.model} in ${car.color}. ${car.km.toLocaleString()} km, ${car.fuel}, ${car.ownership}. Available at ${SITE_CONFIG.brandName}, Mumbai.`,
    openGraph: {
      title: `${car.year} ${car.brand} ${car.model}`,
      description: `Priced at ${formatPrice(car.price)}. ${car.km.toLocaleString()} km · ${car.fuel} · ${car.transmission}`,
    },
  }
}

export default async function CarPage({ params }: Props) {
  const { slug } = await params
  const car = getCarBySlug(slug)
  if (!car) notFound()

  const related = getRelatedCars(car, 3)

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '116px', background: 'var(--bg-primary)', minHeight: '100vh' }}>
        <CarDetailClient car={car} related={related} />
      </main>
      <Footer />
    </>
  )
}
