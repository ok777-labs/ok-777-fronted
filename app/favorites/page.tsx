'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Search, ChevronDown, Play } from 'lucide-react'
import CasinoCard from '@/components/ui/cards/CasinoCard'
import { Button } from '@/components/ui'
import { useI18n } from '@/context/I18nProvider'
import { createPortal } from 'react-dom'

// Mock game data for favorites
const gameImages = [
  'https://api.builder.io/api/v1/image/assets/TEMP/a79278fafd9b48c78c8388123f81620317fe8d54?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/8b925652b70e2da887252313faf53f95f3a960e8?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/e791e1fa9f325156debd5ac895252c60b3b371c2?width=230',
]

const favoritesGames = [
  {
    id: 101,
    title: 'HUNTRESS WILD VENGEANCE',
    provider: 'PRINT STUDIOS',
    image: gameImages[0],
    badge: 'NEW',
  },
  {
    id: 102,
    title: 'SPEED BACCARAT',
    provider: 'DBLIVE',
    image: gameImages[1],
    badge: 'HOT',
  },
  {
    id: 103,
    title: 'LIGHTNING ROULETTE',
    provider: 'EVOLUTION',
    image: gameImages[2],
    badge: 'NEW',
  },
  {
    id: 104,
    title: 'MEGA MONEY WHEEL',
    provider: 'EVOLUTION',
    image: gameImages[0],
    badge: 'HOT',
  },
  {
    id: 105,
    title: 'BLACKJACK LIVE',
    provider: 'EVOLUTION',
    image: gameImages[1],
    badge: 'NEW',
  },
  {
    id: 106,
    title: 'IMMERSIVE ROULETTE',
    provider: 'EVOLUTION',
    image: gameImages[2],
    badge: 'HOT',
  },
  {
    id: 107,
    title: "GONZO'S QUEST",
    provider: 'NETENT',
    image: gameImages[0],
    badge: 'NEW',
  },
  {
    id: 108,
    title: 'STARBURST',
    provider: 'NETENT',
    image: gameImages[1],
    badge: 'HOT',
  },
]

export default function FavoritesPage() {
  const { t } = useI18n()
  const gameProviders = [
    { id: 'all', label: t('games.allProviders') },
    { id: 'pragmatic', label: 'Pragmatic Play' },
    { id: 'netent', label: 'NetEnt' },
    { id: 'playngo', label: "Play'n GO" },
    { id: 'evolution', label: 'Evolution' },
  ]

  const gameTypes = [
    { id: 'all', label: t('app.allTypes') },
    { id: 'new', label: t('games.new') },
    { id: 'hot', label: t('games.hot') },
    { id: 'featured', label: t('games.featured') },
    { id: 'exclusive', label: t('games.exclusive') },
  ]
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProvider, setSelectedProvider] = useState(gameProviders[0])
  const [selectedType, setSelectedType] = useState(gameTypes[0])
  const [isProviderOpen, setIsProviderOpen] = useState(false)
  const [isTypeOpen, setIsTypeOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  })
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

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
        setActiveDropdown(null)
      }
      if (typeRef.current && !typeRef.current.contains(event.target as Node)) {
        setIsTypeOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Filter games based on search term and filters
  const filteredGames = favoritesGames.filter(game => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.provider.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesProvider =
      selectedProvider.id === 'all' ||
      game.provider.toLowerCase().includes(selectedProvider.id.toLowerCase())

    const matchesType =
      selectedType.id === 'all' ||
      game.badge?.toLowerCase() === selectedType.id.toLowerCase()

    return matchesSearch && matchesProvider && matchesType
  })

  return (
    <div className="m-auto max-w-7xl p-2">
      {/* Header */}
      <div className="bg-[#111923]/54 border-b border-gray-700 py-4 backdrop-blur-[2rem]">
        <div className="mx-auto">
          <h1 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <span className="text-red-500">❤️</span>
            <span className="text-white">{t('games.favorites')}</span>
          </h1>

          {/* Search and filters */}
          <div className="flex flex-col gap-4">
            <div className="flex w-full flex-col items-start gap-3 lg:flex-row">
              {/* Search Input */}
              <div className="flex w-full flex-1 items-center gap-2 rounded-lg border border-gray-600 bg-transparent px-4 py-3">
                <Search className="h-6 w-6 flex-shrink-0 stroke-gray-400 text-white" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder={t('app.favoritesPlaceholder')}
                  className="min-w-0 flex-1 border-none bg-transparent font-montserrat text-sm font-medium text-gray-300 outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Dropdowns */}
              <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                {/* Game Provider Dropdown */}
                <div ref={providerRef} className="relative">
                  <div
                    onClick={() => {
                      if (providerRef.current) {
                        const rect = providerRef.current.getBoundingClientRect()
                        setDropdownPosition({
                          top: rect.bottom + window.scrollY + 4,
                          left: rect.left + window.scrollX,
                          width: rect.width,
                        })
                        setActiveDropdown('provider')
                        setIsProviderOpen(!isProviderOpen)
                      }
                    }}
                    className="hover:bg-white/12 flex h-12 w-full cursor-pointer items-center justify-between rounded-lg bg-white-8 px-4 transition-colors sm:w-[180px]"
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
                </div>

                {/* Game Type Dropdown */}
                <div ref={typeRef} className="relative">
                  <div
                    onClick={() => {
                      if (typeRef.current) {
                        const rect = typeRef.current.getBoundingClientRect()
                        setDropdownPosition({
                          top: rect.bottom + window.scrollY + 4,
                          left: rect.left + window.scrollX,
                          width: rect.width,
                        })
                        setActiveDropdown('type')
                        setIsTypeOpen(!isTypeOpen)
                      }
                    }}
                    className="hover:bg-white/12 flex h-12 w-full cursor-pointer items-center justify-between rounded-lg bg-white-8 px-4 transition-colors sm:w-[150px]"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl py-4">
        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-400">
            {filteredGames.length}{' '}
            {filteredGames.length === 1 ? 'game' : 'games'} found
          </p>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
            {filteredGames.map(game => (
              <CasinoCard key={game.id} {...game} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="mb-4 text-6xl">❤️</div>
            <h3 className="mb-2 text-xl font-semibold">No favorites found</h3>
            <p className="text-gray-400">
              {searchTerm
                ? 'Try adjusting your search terms'
                : 'Start adding games to your favorites!'}
            </p>
          </div>
        )}
      </div>

      {/* Portal-based Dropdown */}
      {(isProviderOpen || isTypeOpen) &&
        typeof window !== 'undefined' &&
        createPortal(
          <div
            className="fixed rounded-lg border border-white-8 bg-[rgba(17,25,35,0.95)] shadow-lg backdrop-blur-[32px]"
            style={{
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              width: dropdownPosition.width,
              zIndex: 99999,
            }}
          >
            {activeDropdown === 'provider' &&
              gameProviders.map(provider => (
                <div
                  key={provider.id}
                  onClick={() => {
                    setSelectedProvider(provider)
                    setIsProviderOpen(false)
                    setActiveDropdown(null)
                  }}
                  className={`w-full cursor-pointer px-4 py-3 text-left transition-colors hover:bg-white-8 ${
                    selectedProvider.id === provider.id ? 'bg-blue-500/20' : ''
                  }`}
                >
                  <span className="font-montserrat text-sm font-medium text-gray-300">
                    {provider.label}
                  </span>
                </div>
              ))}
            {activeDropdown === 'type' &&
              gameTypes.map(type => (
                <div
                  key={type.id}
                  onClick={() => {
                    setSelectedType(type)
                    setIsTypeOpen(false)
                    setActiveDropdown(null)
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
          </div>,
          document.body
        )}
    </div>
  )
}
