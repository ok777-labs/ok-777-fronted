'use client'

import { X } from 'lucide-react'
import { useModalScrollPrevention } from '@/hooks/useModalScrollPrevention'
import { ReactNode, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { createPortal } from 'react-dom'

interface ModalContainerProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
  contentClassName?: string
  headerClassName?: string
  showHeader?: boolean
  showCloseButton?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
  position?: 'center' | 'bottom' | 'top' | 'responsive'
  usePortal?: boolean
  zIndex?: number
  backdropClassName?: string
  onBackdropClick?: () => void
  disableBackdropClick?: boolean
  fullHeight?: boolean
  maxHeight?: string
  width?: string
  topSpace?: string
}

const sizeClasses = {
  sm: 'max-w-sm sm:max-w-md',
  md: 'max-w-md sm:max-w-lg',
  lg: 'max-w-lg sm:max-w-2xl',
  xl: 'max-w-4xl sm:max-w-6xl',
  '2xl': 'max-w-4xl sm:max-w-7xl',
  '3xl': 'max-w-4xl sm:max-w-[90vw]',
  full: 'w-full',
}

const positionClasses = {
  center: 'items-center',
  bottom: 'items-end',
  top: 'items-start',
  responsive: 'items-end sm:items-center', // Responsive: bottom on mobile, center on desktop
}

export default function ModalContainer({
  isOpen,
  title,
  onClose,
  className = '',
  contentClassName = '',
  headerClassName = '',
  children,
  showHeader = true,
  showCloseButton = true,
  size = 'xl',
  position = 'responsive',
  usePortal = true,
  zIndex = 10000,
  backdropClassName = '',
  onBackdropClick,
  disableBackdropClick = false,
  width,
  topSpace = '0',
}: ModalContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  // Prevent background scrolling when modal is open
  useModalScrollPrevention(isOpen)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      // Small delay to ensure the element is rendered before animation
      const timer = setTimeout(() => setIsVisible(true), 10)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => setShouldRender(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (!disableBackdropClick && e.target === e.currentTarget) {
      if (onBackdropClick) {
        onBackdropClick()
      } else {
        onClose()
      }
    }
  }

  if (!shouldRender) return null

  const modalContent = (
    <div
      className={cn(
        'fixed inset-0 flex h-[100vh] justify-center overflow-auto bg-black/60 p-2 backdrop-blur-[0.3125rem] sm:p-4',
        positionClasses[position],
        backdropClassName
      )}
      style={{ zIndex }}
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          'modal-content-scroll max-w-6xl',
          'relative z-[10001] mx-auto',
          // Position logic: responsive should be bottom on mobile, center on desktop
          position === 'responsive'
            ? 'bottom-0 left-0 right-0'
            : position === 'bottom'
              ? 'bottom-0 left-0 right-0 h-fit sm:bottom-auto sm:left-[50%] sm:right-auto sm:top-[50%] sm:h-auto sm:translate-x-[-50%] sm:translate-y-[-50%]'
              : position === 'top'
                ? 'bottom-auto top-0'
                : 'bottom-auto top-1/2',
          // Transform logic - remove default transform since we're using specific positioning
          'transform transition-all duration-300 ease-out',
          // Animation states
          isVisible
            ? 'translate-y-0'
            : position === 'bottom' || position === 'responsive'
              ? 'translate-y-full sm:translate-y-8'
              : position === 'top'
                ? '-translate-y-full'
                : 'translate-y-8',
          // Mobile: full width, Desktop: use size classes or custom width
          position === 'responsive' || position === 'bottom'
            ? 'w-full sm:w-full'
            : width
              ? ''
              : sizeClasses[size],
          className
        )}
        style={{
          maxHeight: '-webkit-fill-available', // Ensure modal doesn't exceed viewport height
        }}
        onClick={e => e.stopPropagation()}
      >
        <div
          className={cn(
            'mx-auto flex w-full flex-col items-start',
            // Mobile: rounded top corners, Desktop: rounded all corners
            position === 'responsive' || position === 'bottom'
              ? 'rounded-t-3xl sm:rounded-xl'
              : 'rounded-xl',
            topSpace
          )}
        >
          {/* Header */}
          {showHeader && (
            <div
              className={cn(
                'flex w-full items-center gap-4 px-4 py-4 sm:px-6',
                // Mobile: rounded top corners, Desktop: rounded top corners
                position === 'responsive' || position === 'bottom'
                  ? 'rounded-t-3xl sm:rounded-t-xl'
                  : 'rounded-t-xl',
                'border-t border-white-16 bg-gradient-to-b from-mirage-54 to-navy-dark backdrop-blur-[2rem]',
                headerClassName
              )}
            >
              {title && (
                <h2 className="flex-1 font-montserrat text-lg font-bold text-white">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <div
                  onClick={onClose}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white-4 bg-white-4 shadow-[inset_0_0.0625rem_0_0_rgba(255,255,255,0.16)] backdrop-blur-[2rem] transition-colors hover:bg-white-8"
                >
                  <X className="h-4 w-4 text-[white]" />
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div
            className={cn(
              'flex w-full flex-col gap-6 p-4',
              // Mobile: rounded bottom corners, Desktop: rounded bottom corners
              position === 'responsive' || position === 'bottom'
                ? 'rounded-b-3xl sm:rounded-b-xl'
                : 'rounded-b-xl',
              'min-h-0 bg-mirage-54 backdrop-blur-[2rem]',
              contentClassName
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )

  // Use portal to render at document root level if specified
  if (usePortal && typeof document !== 'undefined') {
    return createPortal(modalContent, document.body)
  }

  return modalContent
}
