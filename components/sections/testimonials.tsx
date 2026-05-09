import { FadeUp, StaggerChildren, StaggerItem, GoldReveal } from '@/components/animations'

const TESTIMONIALS = [
  {
    name: "Abhishek Gupta",
    review: "I run out of words when writing about my experience with the team. The professionalism and transparency is par excellence. Thoroughly enjoyed the buying experience and handholding through the regulatory process.",
    rating: 5,
    verified: true
  },
  {
    name: "Ankita Singh",
    review: "The purchase experience was seamless. The vehicle's condition was impeccable, reflecting meticulous attention to detail. Communication was clear, consistent and professional throughout.",
    rating: 5,
    verified: true
  },
  {
    name: "Kewal Sethi",
    review: "Contacted on Sunday, dream machine was in my hands by Friday. I was nervous about buying pre-owned, but the comfort and confidence I felt was truly unexplainable.",
    rating: 5,
    verified: true
  },
  {
    name: "Prashant Pednekar",
    review: "A brand you can blindly trust. Each experience raised the bar. They truly deliver on what they commit.",
    rating: 5,
    verified: true
  },
  {
    name: "Brijesh Tanwani",
    review: "Dream came true after buying my car here. The car was as good as brand new. RTO and insurance transfer done within a week.",
    rating: 5,
    verified: true
  }
]

export function Testimonials() {
  return (
    <section
      className="py-24 px-0 md:px-8"
      style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16 px-6 md:px-0">
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)', opacity: 0.8 }}>
            What Our Clients Say
          </p>
          <GoldReveal>
            <h2 className="text-4xl md:text-[52px] font-light leading-none" style={{ fontFamily: 'var(--font-display)', color: '#F2F2F2' }}>
              Client Stories
            </h2>
          </GoldReveal>
        </FadeUp>

        {/* CSS Scroll-Snap Carousel for mobile, 3-col grid for desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 px-6 md:px-0 pb-8 hide-scrollbar">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="snap-start flex-none w-[85vw] md:w-auto p-8 relative flex flex-col justify-between"
              style={{
                background: '#111111',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Giant Quote Mark */}
              <div
                className="absolute top-4 left-6 leading-none select-none pointer-events-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '80px',
                  color: 'rgba(201,168,76,0.2)',
                }}
              >
                "
              </div>

              <div className="relative z-10 pt-4">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: '#C9A84C', fontSize: '14px' }}>★</span>
                  ))}
                </div>

                <p
                  className="mb-8 italic"
                  style={{
                    color: '#D0D0D0',
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    lineHeight: 1.7,
                  }}
                >
                  "{t.review}"
                </p>
              </div>

              <div className="relative z-10 mt-auto">
                <p
                  className="font-medium"
                  style={{ color: '#F2F2F2', fontFamily: 'var(--font-body)', fontSize: '13px' }}
                >
                  {t.name}
                </p>
                {t.verified && (
                  <p
                    className="flex items-center gap-1.5 mt-1.5"
                    style={{ color: '#4CAF50', fontFamily: 'var(--font-body)', fontSize: '10px' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]"></span>
                    Verified Buyer
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
