import React from 'react'

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const GoldButton = React.forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ 
    children, 
    size = 'md', 
    className = '', 
    disabled,
    isLoading = false,
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          ${sizeClasses[size]}
          rounded-[4px]
          bg-gold
          text-background
          font-medium
          transition-luxury
          hover:bg-gold-light
          hover:scale-[1.02]
          active:scale-100
          disabled:opacity-50
          disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="animate-spin">○</span>
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    )
  }
)

GoldButton.displayName = 'GoldButton'
