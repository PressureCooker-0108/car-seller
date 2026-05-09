'use client'

import { useSearchParams, useRouter } from 'next/navigation'

interface TabNavigationProps {
  resultCount: number
}

export function TabNavigation({ resultCount }: TabNavigationProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const activeTab = searchParams.get('tab') || 'all'

  const tabs = [
    { id: 'all', label: 'All Vehicles' },
    { id: 'available', label: 'Available' },
    { id: 'sold', label: 'Recently Sold' },
    { id: 'pending', label: 'Coming Soon' }
  ]

  const handleTabChange = (tabId: string) => {
    const params = new URLSearchParams(searchParams)
    if (tabId === 'all') {
      params.delete('tab')
    } else {
      params.set('tab', tabId)
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-border">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-luxury ${
            activeTab === tab.id
              ? 'border-gold text-gold'
              : 'border-transparent text-text-muted hover:text-text-primary'
          }`}
        >
          {tab.label}
        </button>
      ))}
      <div className="ml-auto text-sm text-text-muted">
        {resultCount} {resultCount === 1 ? 'vehicle' : 'vehicles'} found
      </div>
    </div>
  )
}
