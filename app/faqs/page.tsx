'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FadeUp, StaggerChildren, StaggerItem, GoldReveal } from '@/components/animations'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQS = [
  {
    category: 'Buying a Car',
    qas: [
      { q: 'Are all your cars certified and inspected?', a: 'Yes, every vehicle undergoes a rigorous 150-point inspection covering mechanical, electrical, and cosmetic aspects before being listed in our inventory.' },
      { q: 'Do you offer financing options?', a: 'Yes, we have tie-ups with leading banks and NBFCs to provide competitive financing options tailored to your profile.' },
      { q: 'Can I test drive a car before buying?', a: 'Absolutely. You can schedule a test drive at our showroom. We also offer home test drives for select clients within Mumbai.' }
    ]
  },
  {
    category: 'Selling a Car',
    qas: [
      { q: 'How is the valuation of my car determined?', a: 'Valuation is based on the make, model, year, kilometers driven, ownership history, service records, and current market demand.' },
      { q: 'How long does the payment process take?', a: 'Once the deal is finalized and documents are verified, we initiate an instant bank transfer on the same day.' }
    ]
  },
  {
    category: 'Documentation & Post-Sale',
    qas: [
      { q: 'Do you handle the RC transfer process?', a: 'Yes, we manage the entire RC transfer process end-to-end so you don\'t have to visit the RTO.' },
      { q: 'Do the cars come with a warranty?', a: 'Many of our cars still carry the manufacturer warranty. For those out of warranty, we offer comprehensive third-party extended warranty packages.' }
    ]
  }
]

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<string | null>('0-0')

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '116px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20">
          
          <FadeUp className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Support Center
            </p>
            <GoldReveal>
              <h1 className="text-4xl md:text-6xl font-light mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                Frequently Asked <br /> Questions
              </h1>
            </GoldReveal>
          </FadeUp>

          <StaggerChildren className="space-y-12">
            {FAQS.map((group, gIndex) => (
              <StaggerItem key={group.category}>
                <h2 className="text-xl font-light text-[var(--gold)] font-[var(--font-display)] mb-6 border-b border-[var(--border)] pb-2">
                  {group.category}
                </h2>
                <div className="space-y-4">
                  {group.qas.map((qa, qIndex) => {
                    const id = `${gIndex}-${qIndex}`
                    const isOpen = openIndex === id
                    return (
                      <div 
                        key={id} 
                        className="bg-[var(--bg-card)] border rounded-sm transition-colors duration-200"
                        style={{ borderColor: isOpen ? 'var(--gold-border)' : 'var(--border)' }}
                      >
                        <button 
                          onClick={() => setOpenIndex(isOpen ? null : id)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="text-sm md:text-base font-medium text-[var(--text-primary)] font-[var(--font-body)] pr-4">
                            {qa.q}
                          </span>
                          {isOpen ? <ChevronUp size={18} className="text-[var(--gold)] flex-shrink-0" /> : <ChevronDown size={18} className="text-[var(--text-muted)] flex-shrink-0" />}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 text-sm text-[var(--text-secondary)] font-[var(--font-body)] leading-relaxed">
                            {qa.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
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
