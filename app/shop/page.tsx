import { fetchCars } from '@/lib/db/cars'
import ShopClient from './ShopClient'

export const metadata = {
  title: 'Car Collection — AutoElite',
  description: 'Browse our curated collection of luxury pre-owned cars.',
}

export default async function ShopPage() {
  const initialCars = await fetchCars()

  return (
    <ShopClient initialCars={initialCars} />
  )
}
