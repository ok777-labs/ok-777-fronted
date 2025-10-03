'use client'

import React from 'react'
import Link from 'next/link'

export interface CoinGameCardProps {
  id: string
  title: string
  subtitle: string
  coinColor: 'gold' | 'silver'
  link: string
}

const CoinGameCard: React.FC<CoinGameCardProps> = ({
  id,
  title,
  subtitle,
  coinColor,
  link,
}) => {
  const getCoinColorClasses = (color: string) => {
    switch (color) {
      case 'gold':
        return 'bg-yellow-400 text-yellow-800'
      case 'silver':
        return 'bg-gray-300 text-gray-700'
      default:
        return 'bg-gray-500 text-gray-800'
    }
  }

  return (
    <Link href={link} className="block">
      <div
        className={`${getCoinColorClasses(coinColor)} flex h-24 cursor-pointer flex-col items-center justify-center rounded-lg p-4 transition-transform duration-200 hover:scale-105`}
      >
        {/* Coin Icon with Bull */}
        <div className="mb-2 flex items-center justify-center">
          <div
            className={`h-8 w-8 ${getCoinColorClasses(coinColor)} flex items-center justify-center rounded-full border-2 border-gray-400`}
          >
            <span className="text-lg">🐂</span>
          </div>
        </div>
        <div className="text-center text-sm font-bold">{title}</div>
        <div className="text-center text-xs leading-tight">{subtitle}</div>
      </div>
    </Link>
  )
}

export default CoinGameCard
