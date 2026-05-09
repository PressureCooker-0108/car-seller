'use client'

import { useEffect, useRef } from 'react'
import { trackPageTime } from '@/lib/analytics'

export function SessionTracker() {
  const startRef = useRef<number>(Date.now())

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const seconds = Math.round((Date.now() - startRef.current) / 1000)
        trackPageTime(seconds, window.location.pathname)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  return null
}
