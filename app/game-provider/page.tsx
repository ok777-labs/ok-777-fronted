'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import SearchBar from '@/components/ui/SearchBar'
import ChevronDownIcon from '@/components/ui/icons/chevron-down'
import { Input } from '@/components/ui'
import { SearchInput } from '@/components/ui/SearchInput'
import Image from 'next/image'
const gameProviders = [
  {
    id: 1,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/ed61008add9887cdf9fd37371165641f0c24b70a?width=135',
    alt: 'GFG Gaming',
  },
  {
    id: 2,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/5e9afab1ed7019ffbc519a5dcaaa4fa7615e8b4b?width=135',
    alt: 'Provider',
  },
  {
    id: 3,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/281a740be5fb7cd2d9bb39ded75b2565106bc2fd?width=135',
    alt: 'Provider',
  },
  {
    id: 4,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/047554da985769c5ee1698f401501c544a6d48a0?width=135',
    alt: 'JILI',
  },
  {
    id: 5,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/2f561bbca160b8ac0450d236c61bda3a0995c409?width=135',
    alt: 'Provider',
  },
  {
    id: 6,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/998aad486be7b6a8353f09d546e61de365eab21a?width=135',
    alt: 'CQ9',
  },
  {
    id: 7,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/3d27077b25e812b82af50f280e4684b23cdf41cc?width=135',
    alt: 'Funky Games',
  },
  {
    id: 8,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/3a5a444a974275c908a194befaa4f84ca607fedf?width=135',
    alt: 'Provider',
  },
  {
    id: 9,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/86d84b0159c09830fd5104536e21969798bc2309?width=135',
    alt: 'JDB',
  },
  {
    id: 10,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/fa83fcaa5f332d8de53245f2b3a41977fba5690d?width=135',
    alt: 'PlaynGO',
  },
  {
    id: 11,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/2f4b8d7d6a6ffd13733b3cfab5075927e619cad0?width=135',
    alt: 'Provider',
  },
  {
    id: 12,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/5d539aa98318f6f92ab4bd1c04c69237f2a26a5b?width=135',
    alt: 'Royal',
  },
  {
    id: 13,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/9568ccd1df1dd83f1c6fa1998875464af4e04505?width=135',
    alt: 'Provider',
  },
  {
    id: 14,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/d37255092ff4a9ba6252acabfd9fef1f3bf31ab6?width=135',
    alt: 'OnlyPlay',
  },
  {
    id: 15,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/85c206d3db52840e6ab76bb2c44afa601a244905?width=135',
    alt: 'BFAU',
  },
  {
    id: 16,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/72036f7b2eb0bb0b118d852def87dbcdf6ffe5dd?width=135',
    alt: 'Blue',
  },
  {
    id: 17,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/ae3e191fb27ea09b0c1089cd8a723c5ba454b088?width=135',
    alt: 'Booming',
  },
  {
    id: 18,
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/209a6b8d2585dfec789d2ab46e662285792c9cad?width=135',
    alt: 'Provider',
  },
]

const GameProviderPage = () => {
  return (
    <div className="m-auto mb-16 flex max-w-6xl flex-col gap-8 p-2 pt-[26px] md:pt-4">
      {/* <h2 className="text-white text-[18px] font-bold hidden lg:block">
        <span>Game Providers</span>
      </h2> */}
      {/* Content */}
      {/* Search Field */}
      <SearchInput placeholder="Manufacturer search" />

      {/* Game Providers Grid */}
      <div className="grid grid-cols-3 gap-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
        {gameProviders.map(provider => (
          <Link
            href={`/game-provider/${provider.alt}`}
            key={provider.id}
            className="hover:bg-white-4/60 flex aspect-[3/2] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl bg-white-4 transition-colors"
          >
            <div className="h-[60%] overflow-hidden rounded-lg md:p-2 lg:rounded-t-lg">
              <Image
                src={provider.image}
                alt={provider.alt}
                width={69}
                height={45}
                className="rounded-lg object-contain lg:rounded-t-lg"
                loading="lazy"
              />
            </div>
            <div className="hidden h-[40%] w-full items-center justify-center bg-white-14 text-[14px] font-bold text-white lg:flex">
              {provider.alt}
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2.5">
        {/* Show More Button */}
        <div className="flex justify-center">
          <div className="hover:bg-ebony-clay/80 flex h-9 w-[157px] cursor-pointer items-center justify-center gap-2 rounded-[8px] bg-ebony-clay font-montserrat text-[14px] font-bold text-casper transition-colors">
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
