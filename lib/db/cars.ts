import { allCars, CarType } from '@/data/cars'

export async function fetchCars(): Promise<CarType[]> {
  // Simulating async behavior for future DB transition
  return allCars
}

export async function fetchCarBySlug(slug: string): Promise<CarType | null> {
  const car = allCars.find((c) => c.slug === slug)
  return car || null
}

export async function fetchRelatedCars(currentCar: CarType, limit: number = 3): Promise<CarType[]> {
  const all = await fetchCars()
  return all
    .filter(c => c.slug !== currentCar.slug && c.status === 'available')
    .sort((a, b) => {
      let scoreA = 0; let scoreB = 0;
      if (a.brand === currentCar.brand) scoreA += 2
      if (a.bodyType === currentCar.bodyType) scoreA += 1
      if (b.brand === currentCar.brand) scoreB += 2
      if (b.bodyType === currentCar.bodyType) scoreB += 1
      return scoreB - scoreA
    })
    .slice(0, limit)
}
