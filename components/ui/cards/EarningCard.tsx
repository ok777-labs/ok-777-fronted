'use client'

import React from 'react'

export interface EarningCardProps {
  price: string
  id?: string
  title?: string
  image: string
}

const EarningCard: React.FC<EarningCardProps> = ({
  price,
  id,
  title,
  image,
}) => {
  return (
    <div className="w-full overflow-hidden rounded-[8px]">
      <div className="relative overflow-hidden rounded-[8px]">
        <div className="relative overflow-hidden rounded-[8px]">
          <img
            src={image}
            alt={`Casino game`}
            className="w-full object-cover transition-transform duration-300"
          />
          <div className="absolute left-0 top-0 h-full w-full rounded-[8px] duration-300 hover:backdrop-blur-[3px]"></div>
        </div>
        <p className="pt-1 text-[12px] font-bold text-crimson lg:hidden">
          {price}$
        </p>
        <p className="pt-1 text-[10px] font-medium text-white lg:hidden">
          {title}
        </p>
        <p className="pt-1 text-[10px] font-medium text-[#55657E] lg:hidden">
          ID:{id}
        </p>
      </div>
    </div>
  )
}

export default EarningCard
