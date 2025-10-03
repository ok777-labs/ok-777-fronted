'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface TDButtonProps {
  className?: string
  type?: 'red' | 'blue'
  children: ReactNode
  onClick?: () => void
}

const TDButton: React.FC<TDButtonProps> = ({
  className,
  type,
  children,
  onClick,
}) => {
  const redStyle = `
    bg-[linear-gradient(1turn,#c4003b_0.8%,#fb1949)]
    shadow-[0_3px_16px_#ff234180,_inset_0_4px_3px_#ffffff4d]
    
    hover:bg-[linear-gradient(3360deg,#db0a49_0.8%,#fb2b57)]
    hover:shadow-[0_3px_20px_#ff234199,_inset_0_4px_4px_#ffffff5e]
    `
  const blueStyle = `
    bg-[linear-gradient(1turn,#0c5eff_0.8%,#1398f9)]
    shadow-[0_3px_28px_#2283f666,_inset_0_3px_3px #ffffff4d]
    
    hover:bg-[linear-gradient(3360deg,#236eff_0.8%,#34a7fb)]
    hover:shadow-[0_3px_20px_#2283f699,_inset_0_4px_4px_#ffffff5e]
    `
  const Style = type === 'red' ? redStyle : blueStyle
  const edge = type === 'red' ? 'bg-[#61001d]' : 'bg-[#2283F680]'

  return (
    <>
      <div
        onClick={onClick}
        className={cn(
          `pushable transition-filter duration-250 group relative cursor-pointer border-none bg-transparent p-0 outline-offset-1 focus:outline-none focus-visible:outline`,
          className
        )}
      >
        <span
          className={cn(
            'absolute bottom-[-3px] left-0 h-full w-full rounded-lg',
            edge,
            className
          )}
        ></span>
        <span
          className={cn(
            `front relative flex transform items-center justify-center rounded-lg font-medium text-white transition-transform will-change-transform group-hover:-translate-y-[2px] group-active:-translate-y-[-1px]`,
            className,
            Style
          )}
        >
          {children}
        </span>
      </div>
    </>
  )
}

export default TDButton
