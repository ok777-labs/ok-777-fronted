'use client'

import { useEffect } from 'react'

import Link from 'next/link'

import { useState } from 'react'

import ChevronDownIcon from '@/components/ui/icons/chevron-down'
import FootballIcon from '@/components/ui/icons/football'
import GiftIcon from '@/components/ui/icons/gift'
import SpadeIcon from '@/components/ui/icons/spade'
import ChevronsDownIcon from '@/components/ui/icons/chevrons-down'
import CasinoPromotionCard from '@/components/ui/cards/PromotionCard'
import NormalButton from '@/components/ui/Button/NormalButton'

interface Tab {
  id: string
  label: string
  icon: React.ReactNode
  count?: number
}

const bannerCards = [
  {
    button: 'join now',
    image: '/images/banner/Banner01.jpg',
    link: '/joincommunity',
  },
  {
    button: 'get $588',
    image: '/images/banner/Banner10.jpg',
    link: '/livecasino',
  },
  {
    button: 'claim now',
    image: '/images/banner/Banner03.jpg',
    link: '/firstdeposit',
  },
  {
    button: 'claim now',
    image: '/images/banner/Banner12.jpg',
    link: '/first-deposit',
  },
  {
    button: 'get $588',
    image: '/images/banner/Banner02.jpg',
    link: '/hashchallenge ',
  },
  {
    button: 'get $1588',
    image: '/images/banner/Banner08.jpg',
    link: '/electronicsubmit',
  },
  {
    button: 'claim now',
    image: '/images/banner/Banner03.jpg',
    link: '/firstdeposit',
  },
  {
    button: 'claim now',
    image: '/images/banner/Banner06.jpg',
    link: '/checkinrewards',
  },
  {
    button: 'get $588',
    image: '/images/banner/Banner05.jpg',
    link: '/roadtochampion ',
  },
  {
    button: 'get $1588',
    image: '/images/banner/Banner04.jpg',
    link: '/minigame',
  },
  {
    button: 'claim now',
    image: '/images/banner/Banner09.jpg',
    link: '/nonstop',
  },
  {
    button: 'get $588',
    image: '/images/banner/Banner11.jpg',
    link: '/depositbonus ',
  },
  {
    button: 'get $1588',
    image: '/images/banner/Banner07.jpg',
    link: '/energybank',
  },
] as const

const tabs: Tab[] = [
  {
    id: 'all',
    label: 'All',
    icon: <GiftIcon className="h-6 w-6" />,
    count: 4,
  },
  {
    id: 'casino',
    label: 'Casino',
    icon: <SpadeIcon className="h-6 w-6" />,
  },
  {
    id: 'sport',
    label: 'Sport',
    icon: <FootballIcon />,
  },
]

const PromotionsPage = () => {
  const [activeTab, setActiveTab] = useState('all')

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <div className="mx-auto mb-16 flex max-w-6xl flex-col gap-6 p-4 pt-[1.625rem] md:pt-4">
      <div className="grid w-full grid-cols-3 items-start rounded-xl bg-white-4 p-1 md:w-[28.125rem]">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id

          return (
            <NormalButton
              key={tab.id}
              className={isActive ? 'bg-ebony-clay text-gallery' : ''}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.icon}
              {tab.label}
              {tab.count && (
                <div className="flex h-5 items-start justify-start rounded-md bg-malachite px-1.5 shadow-[0_0.0625rem_0_0_var(--white-08)_inset]">
                  <span className="font-montserrat text-xs font-bold text-white">
                    {tab.count}
                  </span>
                </div>
              )}
            </NormalButton>
          )
        })}
      </div>

      {/* Game Providers Grid */}
      {/* <div className="flex flex-wrap justify-center gap-4 md:justify-start"> */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 ">
        {bannerCards.map((card, index) => (
          <CasinoPromotionCard key={index} {...card} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2.5">
        {/* Show More Button */}
        <div className="flex justify-center">
          <div className="hover:bg-ebony-clay/80 flex h-9 w-[9.8125rem] items-center justify-center gap-2 rounded-[0.5rem] bg-ebony-clay font-montserrat text-[0.875rem] font-bold text-casper transition-colors">
            Show 4 more
            <ChevronDownIcon className="text-casper" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mx-auto w-[9.875rem]">
          <div className="bg-oxford-blue h-1.5 overflow-hidden rounded-lg">
            <div className="h-full w-[73%] rounded-lg bg-dodger-blue"></div>
          </div>
        </div>

        {/* Progress Text */}
        <div className="text-center">
          <span className="font-montserrat text-[0.625rem] font-normal text-polo-blue">
            Show 18 of 22 games
          </span>
        </div>
      </div>
    </div>
  )
}

export default PromotionsPage
