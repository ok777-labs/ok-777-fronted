'use client'

import React from 'react'
import clsx from 'clsx'

type ButtonVariant =
  | 'blue'
  | 'black'
  | 'red'
  | 'green'
  | 'blueOne'
  | 'Wallet'
  | 'outline'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: ButtonVariant
}

const styles: Record<
  ButtonVariant,
  { base: string; edge?: string; width?: string }
> = {
  blue: {
    base: 'bg-[linear-gradient(#0C60FF,#2C9FFA)] border border-[#55657E]',
    edge: 'bg-[#003a8a]',
    width: 'w-[146px]',
  },
  black: {
    base: 'flex h-9 w-9 items-center justify-center rounded-lg border border-white-4 bg-white-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] hover:bg-white-8 transition-colors',
  },
  red: {
    base: 'bg-[linear-gradient(to_bottom,#F9476E_0%,#BD0139_24%)]',
    edge: 'bg-[#61001d]',
    width: 'w-[85px]',
  },
  green: {
    base: 'bg-[linear-gradient(1turn,#31FF5E_0.8%,#1BB83D)]',
    edge: 'bg-[#1BB83D80]',
    width: 'w-[146px]',
  },
  blueOne: {
    base: 'bg-[linear-gradient(#0C60FF,#2C9FFA)] border border-[#55657E]',
    edge: 'bg-[#003a8a]',
    width: 'w-[173px]',
  },
  Wallet: {
    base: 'bg-[linear-gradient(1turn,#0C60FF_0.8%,#2C9FFA)]',
    edge: 'bg-[#003a8a]',
    width: 'w-[146px]',
  },
  outline: {
    base: 'bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700',
    width: 'w-auto',
  },
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = ' h-[33px]',
  type = 'button',
  disabled = false,
  variant = 'blue',
}) => {
  const { base, edge, width } = styles[variant]

  if (!edge) {
    // Simple (black) style
    return (
      <div
        onClick={onClick}
        className={clsx(
          'flex cursor-pointer items-center justify-center transition-colors',
          base,
          className
        )}
        style={{
          pointerEvents: disabled ? 'none' : 'auto',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <span>{children}</span>
      </div>
    )
  }

  // Pushable style (blue, red, green)
  return (
    <div
      onClick={onClick}
      className={clsx(
        'pushable group relative cursor-pointer border-none bg-transparent outline-offset-1 focus:outline-none focus-visible:outline',
        width,
        className
      )}
      style={{
        pointerEvents: disabled ? 'none' : 'auto',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <span
        className={clsx(
          'edge absolute left-0 top-0 h-full w-full translate-y-[3px] rounded-[8px]',
          edge
        )}
      ></span>
      <span
        className={clsx(
          'front duration-&lsqb;600ms&rsqb; ease-&lsqb;cubic-bezier(0.3,0.7,0.4,1)&rsqb; group-hover:duration-&lsqb;250ms&rsqb; group-hover:ease-&lsqb;cubic-bezier(0.3,0.7,0.4,1.5)&rsqb; group-active:duration-&lsqb;34ms&rsqb; relative flex h-full w-full transform items-center justify-center rounded-[8px] text-[12px] font-bold text-white transition-transform will-change-transform hover:shadow-[0_3px_16px_transparent,inset_0_4px_3px_var(--white-25)] group-hover:-translate-y-[3px] group-active:translate-y-[1px]',
          base
        )}
      >
        <span>{children}</span>
      </span>
    </div>
  )
}

interface BlueButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const BlueButton: React.FC<BlueButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  // background: linear-gradient(3360deg, #F9476E .8%, #BD0139);
  return (
    <div
      className="pushable transition-filter duration-250 group relative cursor-pointer border-none bg-transparent p-0 outline-offset-1 hover:brightness-110 focus:outline-none focus-visible:outline"
      onClick={onClick}
      style={{
        pointerEvents: disabled ? 'none' : 'auto',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <span className="edge absolute left-0 top-0 h-full w-full translate-y-[3px] rounded-[12.6px] bg-[#003a8a] px-[25.2px]"></span>
      <span
        className="front duration-&lsqb;600ms&rsqb; ease-&lsqb;cubic-bezier(0.3,0.7,0.4,1)&rsqb; group-hover:duration-&lsqb;250ms&rsqb; group-hover:ease-&lsqb;cubic-bezier(0.3,0.7,0.4,1.5)&rsqb; group-active:duration-&lsqb;34ms&rsqb; relative flex h-[37.73px] transform items-center justify-center rounded-[12.6px] border-[1px] border-[#55657E] bg-[linear-gradient(#0C60FF,#2C9FFA)] px-[25.2px] text-[12px] text-xl font-bold text-white shadow-inner shadow-gray-400 transition-transform will-change-transform hover:shadow-[0_3px_28px_#2283f666] group-hover:-translate-y-[3px] group-active:translate-y-[1px] lg:h-[51.97px] lg:text-[18.9px]"
        style={{
          boxShadow:
            '0 3px 28px #2283f666, inset 0 3px 3px rgba(255,255,255,0.21)',
        }}
      >
        <span>{children}</span>
      </span>
    </div>
  )
}

export { BlueButton }
export default Button
