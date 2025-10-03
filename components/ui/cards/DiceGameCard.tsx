'use client'

import React from 'react'
import Link from 'next/link'

export interface DiceGameCardProps {
  id: string
  title: string
  subtitle: string
  color: 'white' | 'red' | 'blue' | 'black'
  link: string
}

const DiceGameCard: React.FC<DiceGameCardProps> = ({
  id,
  title,
  subtitle,
  color,
  link,
}) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'white':
        return 'bg-white text-black'
      case 'red':
        return 'bg-red-500 text-white'
      case 'blue':
        return 'bg-blue-500 text-white'
      case 'black':
        return 'bg-black text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <Link href={link} className="block">
      <div
        className={`${getColorClasses(color)} flex h-24 cursor-pointer flex-col items-center justify-center rounded-lg p-4 transition-transform duration-200 hover:scale-105`}
      >
        <div className="mb-1 text-2xl font-bold">{title}</div>
        <div className="text-center text-sm leading-tight">{subtitle}</div>
      </div>
    </Link>
  )
}

export default DiceGameCard
