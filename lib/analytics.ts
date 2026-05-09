import type { CarType } from '@/data/cars'

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void
  }
}

function fireEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params)
  }
}

export function trackCarView(car: CarType): void {
  fireEvent('car_view', {
    car_slug: car.slug,
    car_brand: car.brand,
    car_model: car.model,
    car_year: car.year,
    car_price: car.price,
  })
}

export function trackCTAClick(
  type: 'whatsapp' | 'instagram' | 'call',
  car?: Partial<CarType>
): void {
  fireEvent('cta_click', {
    cta_type: type,
    car_slug: car?.slug,
    car_brand: car?.brand,
    car_model: car?.model,
  })
}

export function trackFilterUsed(filterType: string, value: string): void {
  fireEvent('filter_used', { filter_type: filterType, filter_value: value })
}

export function trackSellFormSubmit(): void {
  fireEvent('sell_form_submit')
}

export function trackTestDriveBook(carModel?: string): void {
  fireEvent('test_drive_book', { car_model: carModel })
}

export function trackPageTime(seconds: number, page: string): void {
  fireEvent('page_time', { seconds, page })
}
