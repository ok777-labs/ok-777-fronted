'use client'

import React from 'react'

interface NormalButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const NormalButton: React.FC<NormalButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={
        'flex h-[2.25rem] cursor-pointer items-center justify-center gap-[0.5rem] rounded-[0.5rem] bg-transparent font-bold text-casper hover:bg-ebony-clay hover:text-white active:text-white ' +
        className
      }
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default NormalButton
