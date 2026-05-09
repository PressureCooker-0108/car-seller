import React from 'react'

interface OutlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  asChild?: boolean
}

const baseStyles = `
  rounded-[4px]
  border-2
  border-gold
  bg-transparent
  text-gold
  font-medium
  transition-luxury
  hover:bg-gold
  hover:text-background
  hover:scale-[1.02]
  active:scale-100
  disabled:opacity-50
  disabled:cursor-not-allowed
  inline-flex
  items-center
  justify-center
`

export const OutlineButton = React.forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ 
    children, 
    size = 'md', 
    className = '', 
    disabled,
    isLoading = false,
    asChild = false,
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    const classes = `${baseStyles} ${sizeClasses[size]} ${className}`

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: `${classes} ${children.props.className || ''}`.trim(),
      })
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={classes}
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

OutlineButton.displayName = 'OutlineButton'
