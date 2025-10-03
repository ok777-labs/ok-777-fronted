'use client'

import React from 'react'
import { cn } from '../../../lib/utils'

interface BlackButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const BlackButton: React.FC<BlackButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={cn(
        `hover:bg-[linear-gradient(#FFFFFF54, #919191)] flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white-4 bg-white-4 bg-no-repeat font-bold text-white shadow-[inset_0_0.0625rem_0_0_rgba(255,255,255,0.16)] transition-colors hover:bg-[radial-gradient(ellipse_80%_50%_at_bottom_center,#ED1D49_0,#ED1D4900_50%)]`,
        className
      )}
      onClick={onClick}
    >
      <span className="flex items-center justify-center text-center">
        {children}
      </span>
    </div>
  )
}

export default BlackButton
