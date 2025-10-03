'use client'

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import mainContentData from '../main-content-data.json'
import { useSidebar } from '../context/SidebarProvider'
import { useI18n } from '../context/I18nProvider'
import { Swiper as SwiperType } from 'swiper'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import {
  setMainBannerSlide,
  setNewLaunchesSlide,
  setLatestEarningsSlide,
  setGameManufacturersSlide,
} from '../store/slices/carouselSlice'
import CasinoCard from './ui/cards/CasinoCard'
import RewardCard from './ui/cards/RewardCard'
import FutureCard from './ui/cards/FutureCard'
import GameCard from './ui/cards/GameCard'
import { SuccessForm } from './auth/SuccessForm'
import SwiperSlider from './ui/slider/SwiperSlider'
import { HomepageSections } from './HomepageSections'

import {
  StatusDropdown,
  StatusDropdownTrigger,
  StatusDropdownContent,
  StatusDropdownItem,
} from '@/components/ui/StatusDropdown'
import EarningCard from './ui/cards/EarningCard'
import { GameBreakpoints } from '@/components/HomepageSections'

const statusOptions = [
  'Up to date',
  'Daily',
  'Checking for updates...',
  'Installing updates',
  'Update failed',
  'Connected',
  'Disconnected',
  'Syncing...',
  'Sync complete',
]

// Extract data from JSON
const {
  card1,
  card2,
  card3,
  cryptoCards,
  card4,
  card5,
  card6,
  card7,
  card9,
  latestBets,
  gameManufacturers,
} = mainContentData

// Generate extended hash games data (30 total)
const generateHashGames = () => {
  const baseGames = card9
  const extendedGames = []

  // Add the original 5 games
  extendedGames.push(...baseGames)

  // Generate 25 more hash games with variations
  const gameTemplates = [
    { title: 'Dice Roll', chances: '1.95' },
    { title: 'Coin Flip', chances: '1.98' },
    { title: 'Number Guess', chances: '1.92' },
    { title: 'Color Pick', chances: '1.96' },
    { title: 'Card Draw', chances: '1.94' },
    { title: 'Lucky 7', chances: '1.97' },
    { title: 'High Low', chances: '1.93' },
    { title: 'Sum Total', chances: '1.91' },
    { title: 'Pattern Match', chances: '1.99' },
    { title: 'Random Pick', chances: '1.89' },
    { title: 'Double Up', chances: '1.88' },
    { title: 'Triple Win', chances: '1.87' },
    { title: 'Mega Roll', chances: '1.86' },
    { title: 'Super Flip', chances: '1.85' },
    { title: 'Ultra Guess', chances: '1.84' },
    { title: 'Pro Pick', chances: '1.83' },
    { title: 'Elite Draw', chances: '1.82' },
    { title: 'Master 7', chances: '1.81' },
    { title: 'Champion Low', chances: '1.80' },
    { title: 'Legend Sum', chances: '1.79' },
    { title: 'Hero Match', chances: '1.78' },
    { title: 'King Pick', chances: '1.77' },
    { title: 'Queen Up', chances: '1.76' },
    { title: 'Ace Win', chances: '1.75' },
    { title: 'Joker Roll', chances: '1.74' },
  ]

  gameTemplates.forEach((template, index) => {
    extendedGames.push({
      title: template.title,
      chances: template.chances,
      background: '/images/games/6850b36f2bd45516f6329cf19663fc91b6440882.png',
      bettingAddress: 'TXS3PfAU9hemKkoBWRUfsUkGBSrZGagh6X',
      leftButtonLink: `/hashgames/${template.title
        .toLowerCase()
        .replace(/\s+/g, '')}/transfer-betting`,
      rightButtonLink: `/hashgames/${template.title
        .toLowerCase()
        .replace(/\s+/g, '')}/page-betting`,
    })
  })

  return extendedGames
}

const extendedHashGames = generateHashGames()

// Generate game data with images
const generateGameImages = () => {
  const gameImages = []
  for (let i = 1; i <= 15; i++) {
    const gameNumber = i.toString().padStart(2, '0')
    gameImages.push({
      id: `game-${gameNumber}`,
      image: `/images/games/Game${gameNumber}.jpg`,
      title: `Game ${gameNumber}`,
      link: `/hashgames/game${gameNumber}`,
    })
  }
  return gameImages
}

const gameImages = generateGameImages()

// Game Image Card Component
const GameImageCard: React.FC<{
  id: string
  image: string
  title: string
  link: string
}> = ({ image, title, link }) => (
  <Link href={link} className="block">
    <div className="group relative cursor-pointer">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-800">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          onError={e => {
            // Fallback if image doesn't exist
            e.currentTarget.src = '/images/placeholder-game.jpg'
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20">
        <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-white px-3 py-1 text-sm font-bold text-black">
            {title}
          </div>
        </div>
      </div>
    </div>
  </Link>
)

// Latest bets table component
const LatestBetsTable: React.FC = () => {
  const { t } = useI18n()
  const [selectedStatus, setSelectedStatus] = useState('Up to date')
  return (
    <>
      <div className="text-4.5 mb-4 flex w-full items-center justify-between gap-2 font-bold text-white">
        <span>{t('app.latestBetting')}</span>
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
        <div className="py-2 text-left text-sm font-bold text-white">
          {t('games.title')}
        </div>
        <div className="py-2 text-left text-sm font-bold text-white">
          {t('games.player')}
        </div>
        <div className="hidden py-2 text-left text-sm font-bold text-white md:lg:block">
          {t('games.betTime')}
        </div>
        <div className="hidden truncate py-2 text-left text-sm font-bold text-white md:lg:block">
          {t('games.betAmount')}
        </div>
        <div className="py-2 text-left text-sm font-bold text-white">
          {t('games.multiplier')}
        </div>
        {selectedStatus !== 'Daily' && (
          <div className="py-2 text-left text-sm font-bold text-white">
            {t('games.payout')}
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
          autoplayDelay={1500}
          className="h-full"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 z-[30] h-[254px] w-full bg-gradient-to-b from-transparent to-[#111923]"></div>
      </div>
    </>
  )
}

const MainContent: React.FC = () => {
  const { activeGameCategory } = useSidebar()
  const { t } = useI18n()
  const searchParams = useSearchParams()

  // Redux state and dispatch
  const dispatch = useAppDispatch()
  const carouselState = useAppSelector(state => state.carousel)

  // Helper function to get category display labels

  // Carousel slide change handlers
  const handleMainBannerSlideChange = (swiper: SwiperType) => {
    dispatch(setMainBannerSlide(swiper.realIndex ?? swiper.activeIndex))
  }

  const handleNewLaunchesSlideChange = (swiper: SwiperType) => {
    dispatch(setNewLaunchesSlide(swiper.realIndex ?? swiper.activeIndex))
  }

  const handleLatestEarningsSlideChange = (swiper: SwiperType) => {
    dispatch(setLatestEarningsSlide(swiper.realIndex ?? swiper.activeIndex))
  }

  const handleGameManufacturersSlideChange = (swiper: SwiperType) => {
    dispatch(setGameManufacturersSlide(swiper.realIndex ?? swiper.activeIndex))
  }

  // Function to determine which sections to show based on query parameter
  const shouldShowSection = (sectionType: string) => {
    const tabFromQuery = searchParams.get('tab')

    // If no tab parameter, show all sections (lobby page)
    if (!tabFromQuery) {
      return true
    }

    // Map tab parameters to section types
    const tabToSectionMap: { [key: string]: string[] } = {
      hash: ['hash', 'latest-bets', 'game-manufacturers', 'latest-earnings'],
      slots: ['slots', 'latest-bets', 'game-manufacturers', 'latest-earnings'],
      casino: [
        'live-casino',
        'latest-bets',
        'game-manufacturers',
        'latest-earnings',
      ],
      sport: ['sport', 'latest-bets', 'game-manufacturers', 'latest-earnings'],
      futures: [
        'futures',
        'latest-bets',
        'game-manufacturers',
        'latest-earnings',
      ],
      crypto: [
        'crypto',
        'latest-bets',
        'game-manufacturers',
        'latest-earnings',
      ],
      table: ['table', 'latest-bets', 'game-manufacturers', 'latest-earnings'],
    }

    const allowedSections = tabToSectionMap[tabFromQuery] || []
    return allowedSections.includes(sectionType)
  }

  // Game Grid Component
  const GameGrid: React.FC<{
    data: unknown[]
    renderCard: (item: unknown, index: number) => React.ReactNode
    viewAllLink: string
    maxCards?: number
  }> = ({ data, renderCard, viewAllLink, maxCards }) => {
    // Mobile: 3 per row, 6 rows = 18 cards max
    // Desktop: 6 per row, 4 rows = 24 cards max
    const mobileMaxCards = 18 // 6 rows × 3 cards
    const desktopMaxCards = 24 // 4 rows × 6 cards

    // Use responsive max cards - show 18 on mobile, 24 on desktop
    const maxDisplayCards = maxCards || desktopMaxCards
    const displayData = data.slice(0, maxDisplayCards)

    return (
      <div className="space-y-4">
        {/* Mobile: 3 cards per row, max 18 cards (6 rows) */}
        <div className="grid grid-cols-3 gap-3 md:hidden">
          {displayData
            .slice(0, mobileMaxCards)
            .map((item, index) => renderCard(item, index))}
        </div>

        {/* Desktop: 6 cards per row, max 24 cards (4 rows) */}
        <div className="hidden grid-cols-6 gap-3 md:grid xl:grid-cols-8">
          {displayData.map((item, index) => renderCard(item, index))}
        </div>

        {/* Show View All button if there are more cards than the mobile limit */}
        {data.length > mobileMaxCards && (
          <div className="flex justify-center">
            <Link
              href={viewAllLink}
              className="hover:bg-ebony-clay/80 flex h-9 w-[157px] items-center justify-center gap-2 rounded-[8px] bg-ebony-clay font-montserrat text-[14px] font-bold text-casper transition-colors"
            >
              {t('app.viewall')}
            </Link>
          </div>
        )}
      </div>
    )
  }

  // Section header component
  const SectionHeader: React.FC<{
    icon: string
    title: string
    alt: string
    count?: number
  }> = ({ icon, title, alt, count }) => {
    return (
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-4.5 flex items-center gap-2 font-bold text-white">
          <img className="grayscale" src={icon} alt={alt} />
          {title}
        </h2>
        {count && (
          <span className="flex items-center text-[14px] font-bold text-[#2283F6]">
            <span>
              {t('app.all')} {count}
            </span>
          </span>
        )}
      </div>
    )
  }
  const bannerCards = [
    {
      button: t('banner.firstDepost.button'),
      image: '/images/banner/banner-first-depost.jpg',
      mainTitle: t('banner.firstDepost.mainTitle'),
      subTitle: t('banner.firstDepost.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.cryptoGame.button'),
      image: '/images/banner/banner-crypto-game.jpg',
      mainTitle: t('banner.cryptoGame.mainTitle'),
      subTitle: t('banner.cryptoGame.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.dailyDepost.button'),
      image: '/images/banner/banner-daily-depost.jpg',
      mainTitle: t('banner.dailyDepost.mainTitle'),
      subTitle: t('banner.dailyDepost.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.dailyQuests.button'),
      image: '/images/banner/banner-daily-quests.jpg',
      mainTitle: t('banner.dailyQuests.mainTitle'),
      subTitle: t('banner.dailyQuests.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.footerball.button'),
      image: '/images/banner/banner-footerball.jpg',
      mainTitle: t('banner.footerball.mainTitle'),
      subTitle: t('banner.footerball.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.hash.button'),
      image: '/images/banner/banner-hash.jpg',
      mainTitle: t('banner.hash.mainTitle'),
      subTitle: t('banner.hash.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.live.button'),
      image: '/images/banner/banner-live.jpg',
      mainTitle: t('banner.live.mainTitle'),
      subTitle: t('banner.live.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.rebate.button'),
      image: '/images/banner/banner-rebate.jpg',
      mainTitle: t('banner.rebate.mainTitle'),
      subTitle: t('banner.rebate.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.solts.button'),
      image: '/images/banner/banner-solts.jpg',
      mainTitle: t('banner.solts.mainTitle'),
      subTitle: t('banner.solts.subTitle'),
      description: '',
      link: '#',
    },
  ] as const

  // Render lobby view
  return (
    <div
      className="mx-auto w-full overflow-x-hidden p-2 pt-6 lg:p-6"
      style={{ margin: 'auto' }}
    >
      <SuccessForm isOpen={false} />

      {/* Main Banner Section */}
      <div className="mb-8 mt-[2rem] lg:mb-16 lg:mt-0">
        <SwiperSlider
          key={`banner-swiper-${activeGameCategory}`}
          data={bannerCards}
          renderSlide={(card, index) => <RewardCard {...card} />}
          breakpoints={{
            320: { slidesPerView: 1 },
            375: { slidesPerView: 1 },
            425: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: {
              slidesPerView: 2,
            },
            1440: { slidesPerView: 3 },
          }}
          // slideClassName="!w-[min(486.76px,100%)]"
          showProgressBars={true}
          customPagination={true}
          initialSlide={carouselState.mainBannerCurrentSlide}
          onSlideChange={handleMainBannerSlideChange}
          carouselId="main-banner"
        />
      </div>

      {/* Lobbypage Sections with SwiperSlider - only show on lobbypage */}
      {!searchParams.get('tab') && (
        <HomepageSections
          card1={card1}
          card2={card2}
          card3={card3}
          card4={card4}
          card5={card5}
          card6={card6}
          cryptoCards={cryptoCards}
          extendedHashGames={extendedHashGames}
        />
      )}

      {/* Game Grid Sections for other pages */}
      {searchParams.get('tab') && (
        <>
          {/* New Launches Section */}
          {shouldShowSection('new-launches') && (
            <div className="mb-8 lg:mb-16">
              <SectionHeader
                icon="/icons/Home.svg"
                title={t('games.new')}
                alt="lobby"
                count={card1.length}
              />
              <SwiperSlider
                key="new-launches-swiper"
                autoplay={false}
                data={card1}
                renderSlide={(card, index) => <CasinoCard {...card} />}
                slidesPerView={7}
                spaceBetween={12}
                breakpoints={{
                  320: { slidesPerView: 3.3 },
                  375: { slidesPerView: 3.5 },
                  425: { slidesPerView: 4.1 },
                  768: { slidesPerView: 4.3 },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1440: { slidesPerView: 7.3 },
                }}
                showProgressBars={true}
                initialSlide={carouselState.newLaunchesCurrentSlide}
                onSlideChange={handleNewLaunchesSlideChange}
                carouselId="new-launches"
              />
            </div>
          )}
          {/* Homepage Sections */}
          {/* Live Casino Section */}
          {shouldShowSection('live-casino') && (
            <div className="mb-8 lg:mb-16">
              <SectionHeader
                icon="/icons/Casino1.svg"
                title={t('games.live')}
                alt="lobby"
                count={card2.length}
              />
              <GameGrid
                data={card2}
                renderCard={(card, index) => (
                  <CasinoCard key={index} {...(card as any)} />
                )}
                viewAllLink="/live-casino"
              />
            </div>
          )}

          {/* Hash Section */}
          {shouldShowSection('hash') && (
            <div className="mb-8 lg:mb-16">
              <SectionHeader
                icon="/icons/Hash.svg"
                title={t('games.hashgames')}
                alt="hash"
                count={gameImages.length}
              />
              <GameGrid
                data={gameImages}
                renderCard={(card: any) => (
                  <GameImageCard key={card.id} {...card} />
                )}
                viewAllLink="/hash-games"
              />
            </div>
          )}

          {/* Slots Section */}
          {shouldShowSection('slots') && (
            <div className="mb-8 lg:mb-16">
              <SectionHeader
                icon="/icons/Slots.svg"
                title={t('games.slots')}
                alt="slots"
                count={card3.length}
              />
              <GameGrid
                data={card3}
                renderCard={(card, index) => (
                  <CasinoCard key={index} {...(card as any)} />
                )}
                viewAllLink="/slots"
              />
            </div>
          )}

          {/* P/F Futures Section */}
          {shouldShowSection('futures') && (
            <div className="mb-8 lg:mb-16">
              <SectionHeader
                icon="/icons/Futures1.svg"
                title={t('games.pfFutures')}
                alt="future"
                count={card4.length}
              />

              <GameGrid
                data={cryptoCards}
                renderCard={(card, index) => (
                  <FutureCard key={index} {...(card as any)} />
                )}
                viewAllLink="/futures"
              />
            </div>
          )}

          {/* Cryptogra Section */}
          {shouldShowSection('crypto') && (
            <div className="mb-8 lg:mb-16">
              <SectionHeader
                icon="/icons/Cryptogra1.svg"
                title={t('games.crypto')}
                alt="cryptogra"
                count={cryptoCards.length}
              />
              <GameGrid
                data={card4}
                renderCard={(card, index) => (
                  <CasinoCard key={index} {...(card as any)} />
                )}
                viewAllLink="/crypto-games"
              />
            </div>
          )}

          {/* Sport Section */}
          {shouldShowSection('sport') && (
            <div className="mb-8 lg:mb-16">
              <SectionHeader
                icon="/icons/Sport.svg"
                title={t('games.sports')}
                alt="Sport"
                count={card5.length}
              />
              <GameGrid
                data={card5}
                renderCard={(card, index) => (
                  <CasinoCard key={index} {...(card as any)} />
                )}
                viewAllLink="/sports"
              />
            </div>
          )}

          {/* Chess and cards Section */}
          {shouldShowSection('table') && (
            <div className="mb-8 lg:mb-16">
              <SectionHeader
                icon="/icons/tablegame.svg"
                title={t('games.table')}
                alt="tablegame"
                count={card6.length}
              />
              <GameGrid
                data={card6}
                renderCard={(card, index) => (
                  <CasinoCard key={index} {...(card as any)} />
                )}
                viewAllLink="/table-games"
              />
            </div>
          )}
        </>
      )}

      {/* Latest Bets Section */}
      {shouldShowSection('latest-bets') && <LatestBetsTable />}

      {/* Game Manufacturers Section */}
      {shouldShowSection('game-manufacturers') && (
        <div className="mb-8 lg:mb-16">
          <SectionHeader
            icon="/icons/game.svg"
            title={t('app.gameProvider')}
            alt="gameProvider"
          />
          <SwiperSlider
            key={`game-manufacturers-swiper-${activeGameCategory}`}
            data={gameManufacturers}
            autoplay={false}
            renderSlide={(card, index) => <GameCard key={index} {...card} />}
            spaceBetween={12}
            slidesPerView={6}
            breakpoints={{
              320: { slidesPerView: 1.3 },
              375: { slidesPerView: 1.5 },
              425: { slidesPerView: 2.3 },
              768: { slidesPerView: 3.3 },
              1024: { slidesPerView: 3.3 },
              1440: { slidesPerView: 4.5 },
            }}
            initialSlide={carouselState.gameManufacturersCurrentSlide}
            onSlideChange={handleGameManufacturersSlideChange}
            carouselId="game-manufacturers"
          />
        </div>
      )}

      {/* Latest earnings Section */}
      {shouldShowSection('latest-earnings') && (
        <div className="mb-8 lg:mb-16">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-4.5 flex items-center font-bold text-white">
              {t('app.latestEarining')}
            </h2>
            <span className="flex items-center text-[14px] font-bold text-[#2283F6]">
              <span>{t('app.onlinePlayer')} 36</span>
            </span>
          </div>
          <SwiperSlider
            data={card7}
            autoplay={false}
            renderSlide={(card, index) => <EarningCard {...card} />}
            slidesPerView={7}
            spaceBetween={12}
            breakpoints={GameBreakpoints}
            initialSlide={carouselState.latestEarningsCurrentSlide}
            onSlideChange={handleLatestEarningsSlideChange}
            carouselId="latest-earnings"
          />
        </div>
      )}
    </div>
  )
}

export default MainContent
