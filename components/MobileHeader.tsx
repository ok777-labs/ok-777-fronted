'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import BlackButton from './ui/Button/BlackButton'
import ArrowLeftStrokeIcon from './ui/icons/arrow-left-stroke'
import HeadphoneMicIcon from './ui/icons/headphone-mic'
import { useI18n } from '../context/I18nProvider'

interface MobileHeaderProps {
  title?: string
  onBackClick?: () => void
  onSupportClick?: () => void
  className?: string
  showBackButton?: boolean
  isHeadSet: boolean
}

export function MobileHeader({
  title,
  onBackClick,
  onSupportClick,
  className,
  showBackButton = true,
  isHeadSet,
}: MobileHeaderProps) {
  const { t } = useI18n()
  const displayTitle = title || t('help.support')
  return (
    <div
      className={cn(
        'fixed left-0 right-0 top-0 z-[100]',
        'sm:p4 flex w-full items-center justify-between gap-3 p-3 sm:gap-4',
        'bg-[rgba(17,25,35,0.54)] backdrop-blur-xl',
        'h-[56px]',
        className
      )}
      style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}
    >
      <div className="flex items-center gap-2">
        {/* Back Button */}
        {showBackButton && (
          <BlackButton onClick={onBackClick}>
            <ArrowLeftStrokeIcon className="h-4 w-4" />
          </BlackButton>
        )}

        {/* Title */}
        <h1
          className={cn(
            'flex-1 font-montserrat text-base font-bold text-white sm:text-lg',
            showBackButton
              ? 'flex items-center justify-center sm:text-left'
              : 'flex items-center justify-center',
            'truncate px-2 sm:px-0' // Handle long titles on small screens
          )}
        >
          {displayTitle}
        </h1>
      </div>

      {/* Support Button */}
      {isHeadSet && (
        <BlackButton onClick={onSupportClick}>
          <HeadphoneMicIcon className="h-4 w-4" />
        </BlackButton>
      )}
    </div>
  )
}
