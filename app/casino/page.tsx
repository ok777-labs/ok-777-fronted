'use client'

import React, { useEffect, useRef, useState } from 'react'
import mainContentData from '../../main-content-data.json'
import { useSidebar } from '../../context/SidebarProvider'
import { useModal } from '../../context/ModalProvider'
import { useI18n } from '../../context/I18nProvider'
import { Swiper as SwiperType } from 'swiper'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
  setMainBannerSlide,
  setLiveCasinoSlide,
} from '../../store/slices/carouselSlice'
import CasinoCard from '../../components/ui/cards/CasinoCard'
import RewardCard from '../../components/ui/cards/RewardCard'
import { Icon } from '@iconify/react'
import { SuccessForm } from '../../components/auth/SuccessForm'
import SwiperSlider from '../../components/ui/slider/SwiperSlider'
import { X } from 'lucide-react'

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

// Game Grid Component
const GameGrid: React.FC<{
  data: any[]
  renderCard: (item: any, index: number) => React.ReactNode
}> = ({ data, renderCard }) => (
  <div className="grid grid-cols-3 gap-3 pb-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
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
            className="w-50 hidden h-12 cursor-pointer items-center justify-between rounded-lg bg-white-4 px-3 transition-colors hover:bg-white-8 lg:flex"
          >
            <span className="text-sm text-[#A7B5CA]">Game provider</span>
            <svg
              className="h-4 w-4 text-casper"
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
            className="w-50 hidden h-12 cursor-pointer items-center justify-between rounded-lg bg-white-4 px-3 transition-colors hover:bg-white-8 lg:flex"
          >
            <span className="text-sm text-casper">All</span>
            <svg
              className="h-4 w-4 text-casper"
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
                className="h-4 w-4 text-casper"
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
              <span className="text-sm text-casper">All</span>
              <svg
                className="h-4 w-4 text-casper"
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

// Section header component
const SectionHeader: React.FC<{
  icon: string
  title: string
  alt: string
}> = ({ icon, title, alt }) => (
  <div className="mb-4 flex items-center justify-between">
    <h2 className="text-4.5 flex items-center gap-2 font-bold text-white">
      <img className="grayscale" src={icon} alt={alt} />
      {title}
    </h2>
    <span className="flex items-center text-[14px] font-bold text-dodger-blue">
      <span>all 13</span>
    </span>
  </div>
)

export default function CasinoPage() {
  const { t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  // Redux state and dispatch
  const dispatch = useAppDispatch()
  const carouselState = useAppSelector(state => state.carousel)

  // Carousel slide change handlers
  const handleMainBannerSlideChange = (swiper: SwiperType) => {
    dispatch(setMainBannerSlide(swiper.realIndex ?? swiper.activeIndex))
  }

  const handleLiveCasinoSlideChange = (swiper: SwiperType) => {
    dispatch(setLiveCasinoSlide(swiper.realIndex ?? swiper.activeIndex))
  }

  return (
    <div
      className="mx-auto w-full max-w-[1920px] overflow-x-hidden lg:px-6"
      style={{ margin: 'auto' }}
    >
      <SuccessForm isOpen={isOpen} />

      {/* Main Banner Section */}
      <div className="mb-8 mt-[45px] lg:mb-16 lg:mt-0">
        <SwiperSlider
          key="banner-swiper"
          data={bannerCards}
          renderSlide={(card, index) => <RewardCard {...card} />}
          slidesPerView="auto"
          autoplay={false}
          spaceBetween={12}
          slideClassName="!w-[min(486.76px,100%)]"
          showProgressBars={true}
          customPagination={true}
          initialSlide={carouselState.mainBannerCurrentSlide}
          onSlideChange={handleMainBannerSlideChange}
          carouselId="main-banner"
        />
      </div>

      {/* Mobile Filtered View */}
      <div className="">
        <FilteredPageHeader
          title="Live Casino"
          icon="/icons/Casino1.svg"
          count={104}
        />

        <GameGrid
          data={card2}
          renderCard={(card, index) => <CasinoCard key={index} {...card} />}
        />
      </div>

      {/* Desktop Slider View */}
      <div className="hidden lg:block">
        <div className="mb-8 lg:mb-16">
          <SectionHeader
            icon="/icons/Casino1.svg"
            title={t('games.live')}
            alt="lobby"
          />
          <SwiperSlider
            data={card2}
            autoplayDelay={1000000}
            grid={{ rows: 2, fill: 'row' }}
            renderSlide={(card, index) => <CasinoCard {...card} />}
            slidesPerView={7}
            spaceBetween={12}
            slideClassName="mb-1"
            breakpoints={{
              320: {
                slidesPerView: 3.3,
                grid: { rows: 2, fill: 'row' },
              },
              375: {
                slidesPerView: 3.5,
                grid: { rows: 2, fill: 'row' },
              },
              425: {
                slidesPerView: 4.1,
                grid: { rows: 2, fill: 'row' },
              },
              768: {
                slidesPerView: 4.3,
                grid: { rows: 2, fill: 'row' },
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
                grid: { rows: 2, fill: 'row' },
              },
              1440: {
                slidesPerView: 7,
                grid: { rows: 2, fill: 'row' },
              },
            }}
            initialSlide={carouselState.liveCasinoCurrentSlide}
            onSlideChange={handleLiveCasinoSlideChange}
            carouselId="live-casino"
          />
        </div>
      </div>
    </div>
  )
}
