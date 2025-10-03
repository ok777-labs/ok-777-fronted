'use client'

import React, { useRef, useState } from 'react'
import mainContentData from '../../main-content-data.json'
import { useModal } from '../../context/ModalProvider'
import { useI18n } from '../../context/I18nProvider'
import { Swiper as SwiperType } from 'swiper'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
  setMainBannerSlide,
  setSportSlide,
  setLatestEarningsSlide,
  setGameManufacturersSlide,
} from '../../store/slices/carouselSlice'
import CasinoCard from '../../components/ui/cards/CasinoCard'
import RewardCard from '../../components/ui/cards/RewardCard'
import GameCard from '../../components/ui/cards/GameCard'
import EarningCard from '../../components/ui/cards/EarningCard'
import { Icon } from '@iconify/react'
import { SuccessForm } from '../../components/auth/SuccessForm'
import SwiperSlider from '../../components/ui/slider/SwiperSlider'
import { X } from 'lucide-react'
import {
  StatusDropdown,
  StatusDropdownTrigger,
  StatusDropdownContent,
  StatusDropdownItem,
} from '@/components/ui/StatusDropdown'

// Extract data from JSON
const {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card9,
  card10,
  brand,
  latestBets,
  gameManufacturers,
  footerContent,
} = mainContentData

const bannerCards = [
  {
    button: 'CLAIM NOW',
    image: '/images/banner/Banner12.jpg',
    link: '#',
  },
  {
    button: 'JOIN NOW',
    image: '/images/banner/Banner10.jpg',
    link: '#',
  },
  {
    button: 'JOIN NOW',
    image: '/images/banner/Banner09.jpg',
    link: '#',
  },
  {
    button: 'CLAIM NOW',
    image: '/images/banner/Banner12.jpg',
    link: '#',
  },
  {
    button: 'JOIN NOW',
    image: '/images/banner/Banner10.jpg',
    link: '#',
  },
  {
    button: 'JOIN NOW',
    image: '/images/banner/Banner09.jpg',
    link: '#',
  },
  {
    button: 'CLAIM NOW',
    image: '/images/banner/Banner12.jpg',
    link: '#',
  },
  {
    button: 'JOIN NOW',
    image: '/images/banner/Banner10.jpg',
    link: '#',
  },
  {
    button: 'JOIN NOW',
    image: '/images/banner/Banner09.jpg',
    link: '#',
  },
] as const

const statusOptions = [
  'Up to date',
  'Daily',
  'Checking for updates...',
  'Installing updates',
  'Update failed',
  'Connected',
  'Disconnected',
]

// Latest bets table component
const LatestBetsTable: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('Up to date')
  return (
    <>
      <div className="text-4.5 mb-4 flex w-full items-center justify-between gap-2 font-bold text-white">
        <span>Latest Bets</span>
        <StatusDropdown>
          <StatusDropdownTrigger className="border-none bg-[#2A3546] outline-none ring-0 focus:ring-0">
            {selectedStatus}
          </StatusDropdownTrigger>
          <StatusDropdownContent
            className="border-none bg-[#2A3546]"
            align="center"
          >
            {statusOptions.map(status => (
              <StatusDropdownItem
                key={status}
                onClick={() => setSelectedStatus(status)}
              >
                {status}
              </StatusDropdownItem>
            ))}
          </StatusDropdownContent>
        </StatusDropdown>
      </div>
      <div
        className={`grid grid-cols-[20%_20%_20%_40%] gap-[6px] px-[6px] lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] lg:px-8 ${
          selectedStatus !== 'Daily'
            ? 'grid-cols-[20%_20%_20%_40%]'
            : 'grid-cols-[30%_30%_40%]'
        } `}
      >
        <div className="py-2 text-left text-[12px] font-bold text-white">
          Game
        </div>
        <div className="py-2 text-left text-[12px] font-bold text-white">
          Player
        </div>
        <div className="hidden py-2 text-left text-[12px] font-bold text-white md:lg:block">
          Time
        </div>
        <div className="hidden truncate py-2 text-left text-[12px] font-bold text-white md:lg:block">
          Bet Amount
        </div>
        <div className="py-2 text-left text-[12px] font-bold text-white">
          Multiplier
        </div>
        {selectedStatus !== 'Daily' && (
          <div className="py-2 text-left text-[12px] font-bold text-white">
            Payout
          </div>
        )}
      </div>
      <div className="relative z-[-1] mb-8 h-[462px] w-full lg:mb-16">
        <SwiperSlider
          data={latestBets}
          allowTouchMove={false}
          renderSlide={(bet, index) => (
            <div
              className={`mb-[6px] grid h-[48px] w-full grid-cols-[20%_20%_20%_40%] gap-[6px] overflow-hidden rounded-[16px] bg-[#1C2532] px-[6px] lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] lg:px-8 ${
                selectedStatus !== 'Daily'
                  ? 'grid-cols-[20%_20%_20%_40%]'
                  : 'grid-cols-[30%_30%_40%]'
              } items-center`}
              key={index}
            >
              <div className="flex items-center gap-2 truncate text-[12px] font-bold text-white">
                <img
                  src="/images/gameLogo.png"
                  alt="game"
                  className="h-6 w-6"
                />
                {bet.game}
              </div>
              <div className="flex items-center gap-2 truncate text-[12px] font-bold text-gray-300">
                <img
                  src="/images/avatar(1).png"
                  alt="avatar"
                  className="hidden h-6 w-6 md:lg:block"
                />
                {bet.player}
              </div>
              <div className="hidden items-center truncate text-[12px] font-bold text-gray-300 md:lg:flex">
                {bet.time}
              </div>
              <div className="hidden items-center gap-2 truncate text-[12px] font-bold text-gray-300 md:lg:flex">
                <img
                  src="/icons/coin-icon/BTC.svg"
                  alt="coin"
                  className="h-6 w-6"
                />
                {bet.bet}
              </div>
              {selectedStatus !== 'Daily' && (
                <div className="flex items-center truncate text-[12px] font-bold text-[#2283F6]">
                  {bet.multiplier}
                </div>
              )}
              <div className="flex items-center gap-2 truncate text-[12px] font-bold text-green-400">
                {bet.payout}
                <div className="!h-6 !w-6 overflow-hidden rounded-[8px]">
                  <img
                    src="/icons/coin-icon/BTC.svg"
                    alt="coin"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          )}
          direction="vertical"
          slidesPerView={9.1}
          spaceBetween={6}
          autoplayDelay={1000}
          className="h-full"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 z-[30] h-[254px] w-full bg-gradient-to-b from-transparent to-[#111923]"></div>
      </div>
    </>
  )
}

// Game manufacturers section component
const GameManufacturersSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const dispatch = useAppDispatch()
  const carouselState = useAppSelector(state => state.carousel)

  const handleGameManufacturersSlideChange = (swiper: SwiperType) => {
    dispatch(setGameManufacturersSlide(swiper.realIndex ?? swiper.activeIndex))
  }

  return (
    <div className="mb-8 lg:mb-16">
      <div className="flex items-center justify-between">
        <h2 className="text-4.5 mb-4 flex gap-2 font-bold text-white">
          Game Manufacturers
        </h2>
        <div className="mb-4 flex justify-end">
          <div
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-l-lg transition-colors hover:bg-gray-600 active:bg-gray-600"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Icon icon="mdi:chevron-left" className="text-[24px] text-white" />
          </div>
          <div
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-r-lg transition-colors hover:bg-gray-600 active:bg-gray-600"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Icon icon="mdi:chevron-right" className="text-[24px] text-white" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        <SwiperSlider
          data={gameManufacturers}
          renderSlide={(manufacturer, index) => (
            <GameCard {...manufacturer} gameCount={manufacturer.gamesCount} />
          )}
          slidesPerView={4.4}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            375: { slidesPerView: 1.4 },
            425: { slidesPerView: 1.8 },
            768: { slidesPerView: 3.6 },
            1024: { slidesPerView: 4.2, spaceBetween: 20 },
            1440: { slidesPerView: 4.8 },
          }}
          navigationRef={swiperRef}
          initialSlide={carouselState.gameManufacturersCurrentSlide}
          onSlideChange={handleGameManufacturersSlideChange}
          carouselId="game-manufacturers"
        />
      </div>
    </div>
  )
}

// Game Grid Component
const GameGrid: React.FC<{
  data: any[]
  renderCard: (item: any, index: number) => React.ReactNode
}> = ({ data, renderCard }) => (
  <div className="grid grid-cols-3 gap-3 p-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
    {data.map((item, index) => renderCard(item, index))}
  </div>
)

// Filtered Page Header Component
const FilteredPageHeader: React.FC<{
  title: string
  count: number
  icon: string
}> = ({ title, count, icon }) => {
  const { openGameProviderModal, openChooseModal } = useModal()
  const { t } = useI18n()
  const [isOpenSearch, setIsOpenSearch] = useState(true)

  const toggleOpenSearch = () => {
    setIsOpenSearch(!isOpenSearch)
  }

  return (
    <div className="py-4">
      <div className="mb-4 flex items-center justify-between [@media(max-width:1024px)]:mt-[-4px]">
        <div className="rounded-lg bg-[rgba(255,255,255,0.08)] p-[7px]">
          <h1 className="flex items-center gap-2 text-[14px] font-bold text-white">
            <img src={icon} className="hidden h-6 w-6 lg:block" alt="game" />
            {title}{' '}
            <span className="rounded-[4px] bg-[#111923] px-2 py-0.5 text-[12px] text-[#2283F6]">
              {count}
            </span>
          </h1>
        </div>
        <div
          onClick={toggleOpenSearch}
          className="lg:w-50 flex items-center gap-1 rounded-lg bg-[#111923] p-[10px] transition-colors hover:bg-[rgba(255,255,255,0.08)] lg:hidden lg:bg-[rgba(255,255,255,0.04)]"
        >
          {!isOpenSearch ? (
            <X className="h-[18px] w-[18px] text-white" />
          ) : (
            <img
              src="/icons/search.svg"
              alt="search"
              className="h-[18px] w-[18px]"
            />
          )}
          <span className="hidden text-sm text-[#A7B5CA] lg:block">Search</span>
        </div>
        <div className="flex gap-4 [@media(max-width:1024px)]:hidden">
          <div
            onClick={openGameProviderModal}
            className="w-50 hidden h-12 cursor-pointer items-center justify-between rounded-lg bg-[rgba(255,255,255,0.04)] px-3 transition-colors hover:bg-[rgba(255,255,255,0.08)] lg:flex"
          >
            <span className="text-sm text-[#A7B5CA]">Game provider</span>
            <svg
              className="h-4 w-4 text-[#A7B5CA]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <div
            onClick={openChooseModal}
            className="w-50 hidden h-12 cursor-pointer items-center justify-between rounded-lg bg-[rgba(255,255,255,0.04)] px-3 transition-colors hover:bg-[rgba(255,255,255,0.08)] lg:flex"
          >
            <span className="text-sm text-[#A7B5CA]">All</span>
            <svg
              className="h-4 w-4 text-[#A7B5CA]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div
            onClick={toggleOpenSearch}
            className="lg:w-50 flex items-center gap-1 rounded-lg bg-[#111923] p-[10px] transition-colors hover:bg-[rgba(255,255,255,0.08)] lg:bg-[rgba(255,255,255,0.04)]"
          >
            <img
              src="/icons/search.svg"
              alt="search"
              className="h-[18px] w-[18px]"
            />
            <span className="hidden text-sm text-[#A7B5CA] lg:block">
              {t('app.search')}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 xl:hidden">
        {isOpenSearch ? (
          <>
            <div
              onClick={openGameProviderModal}
              className="flex h-10 w-[50%] cursor-pointer items-center justify-between rounded-lg bg-[rgba(255,255,255,0.04)] px-3 transition-colors hover:bg-[rgba(255,255,255,0.08)]"
            >
              <span className="text-sm text-[#A7B5CA]">
                {t('games.providers')}
              </span>
              <svg
                className="h-4 w-4 text-[#A7B5CA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            <div
              onClick={openChooseModal}
              className="flex h-10 w-[50%] cursor-pointer items-center justify-between rounded-lg bg-[rgba(255,255,255,0.04)] px-3 transition-colors hover:bg-[rgba(255,255,255,0.08)]"
            >
              <span className="text-sm text-[#A7B5CA]">All</span>
              <svg
                className="h-4 w-4 text-[#A7B5CA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-10 w-full items-center gap-2 rounded-lg bg-[rgba(255,255,255,0.04)] px-3 transition-colors hover:bg-[rgba(255,255,255,0.08)]">
              <img
                src="/icons/search.svg"
                alt="search"
                className="h-[18px] w-[18px] flex-shrink-0"
              />
              <input
                type="text"
                placeholder={t('app.search')}
                className="min-w-0 flex-1 border-none bg-transparent text-sm text-[#A7B5CA] outline-none placeholder:text-[#A7B5CA]"
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function SportsPage() {
  const { t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  // Redux state and dispatch
  const dispatch = useAppDispatch()
  const carouselState = useAppSelector(state => state.carousel)

  // Carousel slide change handlers
  const handleMainBannerSlideChange = (swiper: SwiperType) => {
    dispatch(setMainBannerSlide(swiper.realIndex ?? swiper.activeIndex))
  }

  const handleSportsSlideChange = (swiper: SwiperType) => {
    dispatch(setSportSlide(swiper.realIndex ?? swiper.activeIndex))
  }

  const handleLatestEarningsSlideChange = (swiper: SwiperType) => {
    dispatch(setLatestEarningsSlide(swiper.realIndex ?? swiper.activeIndex))
  }

  return (
    <div
      className="mx-auto w-full max-w-[1920px] overflow-x-hidden px-1 py-6 pt-4 lg:px-6"
      style={{ margin: 'auto' }}
    >
      <SuccessForm isOpen={isOpen} />

      {/* Mobile Filtered View */}
      <div className="">
        <FilteredPageHeader
          title="Sports"
          icon="/icons/Sports1.svg"
          count={card5.length}
        />

        <GameGrid
          data={card5}
          renderCard={(card, index) => <CasinoCard key={index} {...card} />}
        />
      </div>

      {/* Latest Bets Section */}
      <div className="mb-8 lg:mb-16">
        <LatestBetsTable />
      </div>

      {/* Game Manufacturers Section */}
      <GameManufacturersSection />

      {/* Latest Earnings Section */}
      <div className="mb-8 lg:mb-16">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-4.5 flex items-center font-bold text-white">
            Latest earnings
          </h2>
          <span className="flex items-center text-[14px] font-bold text-[#2283F6]">
            <span>online users 36</span>
          </span>
        </div>
        <SwiperSlider
          data={card7}
          autoplayDelay={1000000}
          renderSlide={(card, index) => <EarningCard {...card} />}
          slidesPerView={7}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 3.3 },
            375: { slidesPerView: 3.5 },
            425: { slidesPerView: 4.1 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1440: { slidesPerView: 7.3 },
          }}
          initialSlide={carouselState.latestEarningsCurrentSlide}
          onSlideChange={handleLatestEarningsSlideChange}
          carouselId="latest-earnings"
        />
      </div>
    </div>
  )
}
