'use client'

import { Search, ChevronDown, Play } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useSidebar } from '@/context/SidebarProvider'
import CasinoCard from '@/components/ui/cards/CasinoCard'
import { Button } from '@/components/ui'
import { useModalScrollPrevention } from '@/hooks/useModalScrollPrevention'
import ModalContainer from './ModalContainer'
import { useI18n } from '@/context/I18nProvider'

interface GameSearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const gameImages = [
  'https://api.builder.io/api/v1/image/assets/TEMP/a79278fafd9b48c78c8388123f81620317fe8d54?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/8b925652b70e2da887252313faf53f95f3a960e8?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/e791e1fa9f325156debd5ac895252c60b3b371c2?width=230',
]

// Mock game data for different categories
const gamesByCategory = {
  hash: [
    {
      id: 1,
      title: 'Mahjong Ways',
      provider: 'PG Soft',
      image: gameImages[0],
      badge: 'HOT',
    },
    {
      id: 2,
      title: 'Black Wolf 2',
      provider: 'CFG Gaming',
      image: gameImages[1],
      badge: 'NEW',
    },
    {
      id: 3,
      title: 'Banker Bull Bull',
      provider: 'CFG Gaming',
      image: gameImages[2],
      badge: 'HOT',
    },
  ],
  slots: [
    {
      id: 4,
      title: 'Fortune Tiger',
      provider: 'PG Soft',
      image: gameImages[0],
      badge: 'NEW',
    },
    {
      id: 5,
      title: 'Gates of Olympus',
      provider: 'Pragmatic',
      image: gameImages[1],
      badge: 'HOT',
    },
    {
      id: 6,
      title: 'Sweet Bonanza',
      provider: 'Pragmatic',
      image: gameImages[2],
      badge: 'NEW',
    },
  ],
  casino: [
    {
      id: 7,
      title: 'Live Blackjack',
      provider: 'Evolution',
      image: gameImages[0],
      badge: 'NEW',
    },
    {
      id: 8,
      title: 'Live Roulette',
      provider: 'Evolution',
      image: gameImages[1],
      badge: 'HOT',
    },
    {
      id: 9,
      title: 'Live Baccarat',
      provider: 'Evolution',
      image: gameImages[2],
      badge: 'NEW',
    },
  ],
  futures: [
    {
      id: 10,
      title: 'Crypto Future 1',
      provider: 'Future Games',
      image: gameImages[0],
      badge: 'HOT',
    },
    {
      id: 11,
      title: 'Crypto Future 2',
      provider: 'Future Games',
      image: gameImages[1],
      badge: 'NEW',
    },
    {
      id: 12,
      title: 'Crypto Future 3',
      provider: 'Future Games',
      image: gameImages[2],
      badge: 'HOT',
    },
  ],
  crypto: [
    {
      id: 13,
      title: 'Bitcoin Miner',
      provider: 'Crypto Games',
      image: gameImages[0],
      badge: 'NEW',
    },
    {
      id: 14,
      title: 'Ethereum Rush',
      provider: 'Crypto Games',
      image: gameImages[1],
      badge: 'HOT',
    },
    {
      id: 15,
      title: 'Dogecoin Rally',
      provider: 'Crypto Games',
      image: gameImages[2],
      badge: 'NEW',
    },
  ],
  sport: [
    {
      id: 16,
      title: 'Football Manager',
      provider: 'Sports Co',
      image: gameImages[0],
      badge: 'HOT',
    },
    {
      id: 17,
      title: 'Basketball Pro',
      provider: 'Sports Co',
      image: gameImages[1],
      badge: 'NEW',
    },
    {
      id: 18,
      title: 'Tennis Ace',
      provider: 'Sports Co',
      image: gameImages[2],
      badge: 'HOT',
    },
  ],
  table: [
    {
      id: 19,
      title: 'Poker Master',
      provider: 'Table Games',
      image: gameImages[0],
      badge: 'NEW',
    },
    {
      id: 20,
      title: 'Blackjack Pro',
      provider: 'Table Games',
      image: gameImages[1],
      badge: 'HOT',
    },
    {
      id: 21,
      title: 'Roulette Elite',
      provider: 'Table Games',
      image: gameImages[2],
      badge: 'NEW',
    },
  ],
}

export default function GameSearchModal({
  isOpen,
  onClose,
}: GameSearchModalProps) {
  const { isCollapsed } = useSidebar()
  const { t } = useI18n()
  const [sidebarOffset, setSidebarOffset] = useState(0)

  const gameCategories = [
    {
      id: 'hash',
      label: t('games.hashgames'),
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/539e29d3dd35d4b4f7551e751c116f40a102eaa5?width=52',
    },
    {
      id: 'slots',
      label: t('games.slots'),
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/056061de0a658f58bc9d8b0d5fa49ebd2eb7243d?width=39',
    },
    {
      id: 'casino',
      label: t('games.live'),
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/7245cb568c2fb51c6094f50e99f10760ed43d47c?width=52',
    },
    {
      id: 'futures',
      label: t('games.pfFutures'),
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/ab3b5fe5364a6a5cf19370622e52a65297b9f2fd?width=48',
    },
    {
      id: 'crypto',
      label: t('games.crypto'),
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/da20222e69eb632beb025b819d563282485ae610?width=52',
    },
    {
      id: 'sport',
      label: t('games.sports'),
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/72146436b2617db347f4558bef4da1d7dc2be29e?width=52',
    },
    {
      id: 'table',
      label: t('games.table'),
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/f3965682be44f8f5716cdfd793a2929763c6f824?width=48',
    },
  ]

  const gameProviders = [
    { id: 'all', label: t('games.allProviders') },
    { id: 'pg-soft', label: 'PG Soft' },
    { id: 'evolution', label: 'Evolution' },
    { id: 'pragmatic', label: 'Pragmatic Play' },
    { id: 'cfg-gaming', label: 'CFG Gaming' },
    { id: 'future-games', label: 'Future Games' },
    { id: 'crypto-games', label: 'Crypto Games' },
    { id: 'sports-co', label: 'Sports Co' },
    { id: 'table-games', label: 'Table Games' },
  ]

  const gameTypes = [
    { id: 'all', label: t('games.all') },
    { id: 'new', label: t('games.new') },
    { id: 'featured', label: t('games.featured') },
    { id: 'hot', label: t('games.hot') },
    { id: 'exclusive', label: t('games.exclusive') },
  ]

  // Prevent background scrolling when modal is open
  useModalScrollPrevention(isOpen)

  useEffect(() => {
    if (!isOpen) return
    const updateOffset = () => {
      const sidebar = document.querySelector('.sidebar') as HTMLElement | null
      if (sidebar && isCollapsed) {
        setSidebarOffset(sidebar.clientWidth || 0)
      } else {
        setSidebarOffset(0)
      }
    }
    updateOffset()
    window.addEventListener('resize', updateOffset)
    return () => window.removeEventListener('resize', updateOffset)
  }, [isOpen, isCollapsed])

  const [activeCategory, setActiveCategory] = useState('hash')
  const [selectedProvider, setSelectedProvider] = useState(gameProviders[0])
  const [selectedType, setSelectedType] = useState(gameTypes[0])
  const [isProviderOpen, setIsProviderOpen] = useState(false)
  const [isTypeOpen, setIsTypeOpen] = useState(false)

  const providerRef = useRef<HTMLDivElement>(null)
  const typeRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        providerRef.current &&
        !providerRef.current.contains(event.target as Node)
      ) {
        setIsProviderOpen(false)
      }
      if (typeRef.current && !typeRef.current.contains(event.target as Node)) {
        setIsTypeOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const currentGames =
    gamesByCategory[activeCategory as keyof typeof gamesByCategory] || []

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      title={t('app.search')}
      size="xl"
      position="responsive"
      className="max-w-6xl"
      fullHeight={true}
    >
      {/* Search and filters */}
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-col items-start gap-3 lg:flex-row">
          {/* Search Input */}
          <div className="flex w-full flex-1 items-center gap-2 rounded-lg border border-gray-600 bg-transparent px-4 py-3">
            <Search className="h-6 w-6 flex-shrink-0 stroke-gray-400 text-white" />
            <input
              type="text"
              placeholder={t('games.searchPlaceholder')}
              className="min-w-0 flex-1 border-none bg-transparent font-montserrat text-sm font-medium text-gray-300 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Dropdowns */}
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            {/* Game Provider Dropdown */}
            <div ref={providerRef} className="relative">
              <div
                onClick={() => setIsProviderOpen(!isProviderOpen)}
                className="hover:bg-white/12 flex h-12 w-full cursor-pointer items-center justify-between rounded-lg bg-white-8 px-4 transition-colors sm:w-[200px]"
              >
                <span className="font-montserrat text-sm font-bold text-gray-300 transition-colors hover:text-white">
                  {selectedProvider.label}
                </span>
                <ChevronDown
                  className={`h-6 w-6 stroke-gray-400 text-white transition-transform ${
                    isProviderOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {isProviderOpen && (
                <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-white-8 bg-[rgba(17,25,35,0.95)] shadow-lg backdrop-blur-[32px]">
                  {gameProviders.map(provider => (
                    <div
                      key={provider.id}
                      onClick={() => {
                        setSelectedProvider(provider)
                        setIsProviderOpen(false)
                      }}
                      className={`w-full cursor-pointer px-4 py-3 text-left transition-colors hover:bg-white-8 ${
                        selectedProvider.id === provider.id
                          ? 'bg-blue-500/20'
                          : ''
                      }`}
                    >
                      <span className="font-montserrat text-sm font-medium text-gray-300">
                        {provider.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Game Type Dropdown */}
            <div ref={typeRef} className="relative">
              <div
                onClick={() => setIsTypeOpen(!isTypeOpen)}
                className="hover:bg-white/12 flex h-12 w-full cursor-pointer items-center justify-between rounded-lg bg-white-8 px-4 transition-colors sm:w-[200px]"
              >
                <span className="font-montserrat text-sm font-bold text-gray-300 transition-colors hover:text-white">
                  {selectedType.label}
                </span>
                <ChevronDown
                  className={`h-6 w-6 stroke-gray-400 text-white transition-transform ${
                    isTypeOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {isTypeOpen && (
                <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-white-8 bg-[rgba(17,25,35,0.95)] shadow-lg backdrop-blur-[32px]">
                  {gameTypes.map(type => (
                    <div
                      key={type.id}
                      onClick={() => {
                        setSelectedType(type)
                        setIsTypeOpen(false)
                      }}
                      className={`w-full cursor-pointer px-4 py-3 text-left transition-colors hover:bg-white-8 ${
                        selectedType.id === type.id ? 'bg-blue-500/20' : ''
                      }`}
                    >
                      <span className="font-montserrat text-sm font-medium text-gray-300">
                        {type.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Game Categories - Now with background changes when selected */}
      <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
        {gameCategories.map(category => (
          <div
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex h-9 flex-shrink-0 cursor-pointer items-center gap-2 rounded-lg px-2 transition-all duration-300 sm:px-3 ${
              activeCategory === category.id
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-gray-300 hover:bg-white-8 hover:text-white'
            }`}
          >
            <div className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center">
              <img
                src={category.icon}
                alt={category.label}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="hidden whitespace-nowrap font-montserrat text-sm font-bold sm:inline">
              {category.label}
            </span>
          </div>
        ))}
      </div>

      {/* Game Grid using CasinoCard component */}
      <div className="grid w-full grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {/* Repeat current games to fill the grid */}
        {Array.from({ length: 14 }, (_, index) => {
          const game = currentGames[index % currentGames.length]
          return (
            <div key={index} className="group relative">
              <CasinoCard badge={game.badge} image={game.image} />

              {/* Hover overlay with play button */}
              <div className="absolute inset-0 flex items-center justify-center rounded-[8px] bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Button variant="red" className="h-12 w-12 p-0">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </ModalContainer>
  )
}
