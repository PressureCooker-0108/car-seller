import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSlider } from '@/components/sections/hero-slider'
import { SearchFilter } from '@/components/sections/search-filter'
import { FeaturedCollection } from '@/components/sections/featured-collection'
import { ModelRange } from '@/components/sections/model-range'
import { SellYourCar } from '@/components/sections/sell-your-car'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { Testimonials } from '@/components/sections/testimonials'
import { ContactCTA } from '@/components/sections/contact-cta'
import { SITE_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.brandName} — India's Finest Pre-Owned Luxury Cars`,
  description: 'Discover a curated collection of pre-owned luxury cars in Mumbai. BMW, Mercedes-Benz, Range Rover, Porsche, Lamborghini and more. Verified, transparent, delivered.',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <SearchFilter />
        <FeaturedCollection />
        <ModelRange />
        <SellYourCar />
        <About />
        <Services />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
