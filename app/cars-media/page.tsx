'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/animations'
import { Play } from 'lucide-react'

export default function MediaPage() {
  const videos = [
    { id: '1', title: 'Porsche 911 GT3 RS Delivery', thumb: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', duration: '3:45' },
    { id: '2', title: 'Mercedes G63 AMG Walkaround', thumb: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800&q=80', duration: '5:20' },
    { id: '3', title: 'Our Detailing Process', thumb: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80', duration: '2:15' },
    { id: '4', title: 'Lamborghini Huracan Exhaust Sound', thumb: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', duration: '1:30' },
    { id: '5', title: 'Range Rover SV Autobiography', thumb: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80', duration: '4:10' },
    { id: '6', title: 'BMW M5 Competition Track Day', thumb: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', duration: '6:50' },
  ]

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '116px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
          
          <FadeUp className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Showroom Media
            </p>
            <h1 className="text-4xl md:text-6xl font-light mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              Video Gallery
            </h1>
            <p className="text-base max-w-xl text-[var(--text-secondary)] font-[var(--font-body)]">
              Experience the roar, the design, and the delivery moments of our finest vehicles.
            </p>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((vid) => (
              <StaggerItem key={vid.id}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-video bg-[var(--bg-card)] border border-[var(--border)] rounded-sm overflow-hidden mb-4">
                    <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:border-transparent transition-all">
                        <Play size={20} className="ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-[var(--font-body)] rounded-sm border border-white/10">
                      {vid.duration}
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-[var(--text-primary)] font-[var(--font-body)] group-hover:text-[var(--gold)] transition-colors">
                    {vid.title}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

        </div>
      </main>
      <Footer />
    </>
  )
}
