import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Script from 'next/script'
import { SessionTracker } from '@/components/SessionTracker'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'
import { SITE_CONFIG } from '@/lib/config'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://autoelite.com'),
  title: {
    template: `%s | ${SITE_CONFIG.brandName}`,
    default: `${SITE_CONFIG.brandName} — India's Finest Pre-Owned Luxury Cars`,
  },
  description:
    'Discover a curated collection of pre-owned luxury cars in Mumbai. BMW, Mercedes-Benz, Range Rover, Porsche, Lamborghini and more. Verified, transparent, delivered.',
  keywords: [
    'luxury pre-owned cars India',
    'used BMW Mumbai',
    'used Mercedes Mumbai',
    'pre-owned Range Rover',
    'luxury car dealer Mumbai',
    'pre-owned Porsche India',
    'used Lamborghini India',
    'certified luxury cars Mumbai',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE_CONFIG.brandName,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${SITE_CONFIG.brandName} — Luxury Pre-Owned Cars` }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://autoelite.com' },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#C9A84C',
}

const autoDealerSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: SITE_CONFIG.brandName,
  url: 'https://autoelite.com',
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  openingHours: 'Mo-Sa 10:00-19:00',
  priceRange: '₹₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '101, Abbas Manzil, 145 SV Road',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400052',
    addressCountry: 'IN',
  },
  sameAs: [
    `https://instagram.com/${SITE_CONFIG.instagramHandle}`,
    `https://wa.me/${SITE_CONFIG.whatsappNumber}`,
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable}`}
      style={{ background: '#080808' }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(autoDealerSchema) }}
        />
      </head>
      <body className="antialiased" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
        {children}
        <FloatingWhatsApp />
        <SessionTracker />

        {/* Google Analytics */}
        {SITE_CONFIG.gaId && SITE_CONFIG.gaId !== 'G-XXXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${SITE_CONFIG.gaId}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity */}
        {SITE_CONFIG.clarityId && SITE_CONFIG.clarityId !== 'XXXXXXXXXX' && (
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${SITE_CONFIG.clarityId}");
            `}
          </Script>
        )}
      </body>
    </html>
  )
}
