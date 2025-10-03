import { cn } from '@/lib/utils'
import React from 'react'
import XIcon from './icons/x'

interface ModalHeaderProps {
  title: string
  onClick?: () => void
  className?: string
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  className,
  onClick,
  title,
}) => {
  return (
    <>
      <div
        className={cn(
          'flex items-center justify-between rounded-t-[14px] border-t border-[#FFFFFF29] bg-[linear-gradient(1turn,#1119238A,#002554)] p-4 pl-6',
          className
        )}
      >
        <span className="text-[18px] font-bold text-white">{title}</span>
        <div
          onClick={onClick}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[8px] border border-[#FFFFFF0A] bg-[#FFFFFF0A] p-2.5 text-casper shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] hover:bg-[#FFFFFF21] active:bg-[#FFFFFF21]"
        >
          <span>
            <XIcon />
          </span>
        </div>
      </div>
    </>
  )
}

export default ModalHeader
