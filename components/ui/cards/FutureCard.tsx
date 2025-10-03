'use client'

// this is cryptocurrency card

import React from 'react'

export interface TypeFourProps {
  symbol: string
  name: string
  price: string
  change: string
  isPositive: boolean
}

const FutureCard: React.FC<TypeFourProps> = ({
  symbol,
  name,
  price,
  change,
  isPositive,
}) => {
  return (
    <div className="rounded-lg border-t-2 border-[#FFFFFF29] bg-gray-800 p-2">
      <div className="mb-3 flex items-center space-x-2">
        <img
          src={`/icons/coin-icon/${symbol}.svg`}
          className="h-10 w-10"
          alt={`${symbol} icon`}
        />
        <div>
          <div className="font-semibold text-white">{symbol}</div>
          {/* <div className="text-gray-400 text-xs">{name}</div> */}
        </div>
      </div>
      <div className="space-y-2">
        <div className="font-medium text-white">{price}</div>
        <div
          className={`text-sm font-medium ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {isPositive ? '+' : ''}
          {change}
        </div>
      </div>
    </div>
  )
}

export default FutureCard
