import React from 'react'

interface SectionHeadingProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showAccent?: boolean
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  size = 'lg',
  showAccent = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl',
  }

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <h2
        className={`
          ${sizeClasses[size]}
          font-serif
          font-bold
          text-text-primary
          tracking-tight
          leading-tight
          text-balance
        `}
      >
        {children}
      </h2>
      {showAccent && (
        <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light rounded-full" />
      )}
    </div>
  )
}

SectionHeading.displayName = 'SectionHeading'
