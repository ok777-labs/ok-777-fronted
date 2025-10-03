'use client'

import { useEffect } from 'react'

import Link from 'next/link'
import mainContentData from '../../../main-content-data.json'

import { usePathname } from 'next/navigation'
import { Input } from '@/components/ui'
import SearchIcon from '@/components/ui/icons/search'
import SearchBar from '@/components/ui/SearchBar'
import CasinoCard from '@/components/ui/cards/CasinoCard'
import ChevronDownIcon from '@/components/ui/icons/chevron-down'
import { SearchInput } from '@/components/ui/SearchInput'
const GameProviderPage = () => {
  const pathname = usePathname()
  const id = pathname.split('/')[2].split('%20').join(' ')

  return (
    <div className="m-auto mx-auto mb-16 flex w-full max-w-7xl flex-col gap-8 p-2 pt-[26px] md:pt-4">
      <h2 className="hidden text-[18px] font-bold text-white lg:block">{id}</h2>
      {/* Content */}
      {/* Search Field */}
      <SearchInput placeholder="Manufacturer search" />
      {/* Game Providers Grid */}
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-6">
        {mainContentData.card3.map((item, index) => (
          <CasinoCard key={index} image={item.image} badge={item.badge} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2.5">
        {/* Show More Button */}
        <div className="flex justify-center">
          <div className="hover:bg-ebony-clay/80 flex h-9 w-[157px] items-center justify-center gap-2 rounded-[8px] bg-ebony-clay font-montserrat text-[14px] font-bold text-casper transition-colors">
            Show 4 more
            <ChevronDownIcon className="text-casper" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mx-auto w-[158px]">
          <div className="bg-oxford-blue h-1.5 overflow-hidden rounded-lg">
            <div className="h-full w-[73%] rounded-lg bg-dodger-blue"></div>
          </div>
        </div>

        {/* Progress Text */}
        <div className="flex items-center justify-center">
          <span className="font-montserrat text-[10px] font-normal text-polo-blue">
            Show 18 of 22 games
          </span>
        </div>
      </div>
    </div>
  )
}

export default GameProviderPage
