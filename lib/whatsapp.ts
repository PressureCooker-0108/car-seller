import { SITE_CONFIG } from './config'
import { formatPrice } from './utils'
import type { CarType } from '@/data/cars'

export function buildWhatsAppURL(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function carEnquiryMessage(car: CarType): string {
  return `Hi, I'm interested in the ${car.year} ${car.brand} ${car.model} (${formatPrice(car.price)}) listed on ${SITE_CONFIG.brandName}. Please share more details.`
}

export const genericEnquiryMessage = `Hi, I'm interested in your luxury car collection at ${SITE_CONFIG.brandName}. Can you help?`

export const sellCarMessage = "Hi, I'd like to sell my car. Can you provide a valuation?"

export function instagramDMURL(): string {
  return `https://ig.me/m/${SITE_CONFIG.instagramHandle}`
}
