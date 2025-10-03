'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface FlatButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const FlatButton: React.FC<FlatButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className="pushable transition-filter duration-250 group relative cursor-pointer border-none bg-transparent p-0 outline-offset-1 focus:outline-none focus-visible:outline"
    >
      <span
        className={cn(
          'edge absolute left-0 top-[0.1875rem] h-full w-full rounded-[0.5rem] !bg-[#2283F680] opacity-80',
          className
        )}
      ></span>
      <span
        className={cn(
          `front relative flex items-center justify-center rounded-[0.5rem] bg-dodger-blue text-white will-change-transform hover:bg-cornflower-blue group-hover:-translate-y-[0.1875rem] group-active:translate-y-[0.0625rem]`,
          className
        )}
      >
        {children}
      </span>
    </div>
  )
}

export default FlatButton
