'use client'

import React from 'react'

export interface CasinoCardProps {
  badge: string
  views?: string
  user?: string
  image: string
}

const CasinoCard: React.FC<CasinoCardProps> = ({
  user,
  badge,
  image,
  views,
}) => {
  const getBadgeColor = (badgeType: string): string => {
    switch (badgeType) {
      case 'HOT':
        return 'bg-[#ED1D49]'
      case 'NEW':
        return 'bg-[#1BB83D]'
      default:
        return 'bg-[#FFAB00]'
    }
  }

  return (
    <div className="w-full overflow-hidden rounded-[0.5rem]">
      <div className="relative overflow-hidden rounded-[0.5rem]">
        <div className="relative overflow-hidden rounded-[0.5rem]">
          <img
            src={image}
            alt={`Casino game`}
            className="w-full object-cover transition-transform duration-300"
          />
          <div className="absolute left-0 top-0 h-full w-full rounded-[0.5rem] duration-300 hover:backdrop-blur-[0.1875rem]"></div>
        </div>

        <div
          className={`absolute left-2 top-2 rounded-full border-t border-[#ffffff30] px-[2px] py-[0.5px] text-[10px] font-bold text-white lg:px-2 lg:text-[12.24px] ${getBadgeColor(
            badge
          )}`}
        >
          {badge}
        </div>
      </div>
    </div>
  )
}

export default CasinoCard
