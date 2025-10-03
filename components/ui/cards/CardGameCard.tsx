'use client'

import React from 'react'
import Link from 'next/link'

export interface CardGameCardProps {
  id: string
  title: string
  subtitle: string
  cardColor: 'white' | 'red' | 'blue'
  symbolColor: 'black' | 'white'
  link: string
}

const CardGameCard: React.FC<CardGameCardProps> = ({
  id,
  title,
  subtitle,
  cardColor,
  symbolColor,
  link,
}) => {
  const getCardColorClasses = (color: string) => {
    switch (color) {
      case 'white':
        return 'bg-white'
      case 'red':
        return 'bg-red-500'
      case 'blue':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getSymbolColorClasses = (color: string) => {
    switch (color) {
      case 'black':
        return 'text-black'
      case 'white':
        return 'text-white'
      default:
        return 'text-gray-800'
    }
  }

  return (
    <Link href={link} className="block">
      <div
        className={`${getCardColorClasses(cardColor)} flex h-24 cursor-pointer flex-col items-center justify-center rounded-lg p-4 transition-transform duration-200 hover:scale-105`}
      >
        {/* Card Icon */}
        <div className="mb-2 flex items-center justify-center">
          <div className="flex">
            <div
              className={`h-8 w-6 ${getCardColorClasses(cardColor)} mr-1 flex items-center justify-center rounded-sm border-2 border-gray-300`}
            >
              <span
                className={`text-lg font-bold ${getSymbolColorClasses(symbolColor)}`}
              >
                ♠
              </span>
            </div>
            <div
              className={`h-8 w-6 ${getCardColorClasses(cardColor)} flex items-center justify-center rounded-sm border-2 border-gray-300`}
            >
              <span
                className={`text-lg font-bold ${getSymbolColorClasses(symbolColor)}`}
              >
                ♠
              </span>
            </div>
          </div>
        </div>
        <div className="text-center text-sm font-bold">{title}</div>
        <div className="text-center text-xs leading-tight">{subtitle}</div>
      </div>
    </Link>
  )
}

export default CardGameCard
