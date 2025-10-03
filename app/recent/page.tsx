'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Search, ChevronDown, Clock } from 'lucide-react'
import CasinoCard from '@/components/ui/cards/CasinoCard'
import { Button } from '@/components/ui'
import { useI18n } from '@/context/I18nProvider'
import { createPortal } from 'react-dom'

// Mock game data for recent games
const gameImages = [
  'https://api.builder.io/api/v1/image/assets/TEMP/a79278fafd9b48c78c8388123f81620317fe8d54?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/8b925652b70e2da887252313faf53f95f3a960e8?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/e791e1fa9f325156debd5ac895252c60b3b371c2?width=230',
]

const recentGames = [
  {
    id: 201,
    title: 'GATES OF OLYMPUS',
    provider: 'PRAGMATIC PLAY',
    image: gameImages[0],
    badge: 'HOT',
    lastPlayed: '2 hours ago',
  },
  {
    id: 202,
    title: 'SWEET BONANZA',
    provider: 'PRAGMATIC PLAY',
    image: gameImages[1],
    badge: 'NEW',
    lastPlayed: '1 day ago',
  },
  {
    id: 203,
    title: 'BOOK OF DEAD',
    provider: "PLAY'N GO",
    image: gameImages[2],
    badge: 'HOT',
    lastPlayed: '2 days ago',
  },
  {
    id: 204,
    title: 'DEAD OR ALIVE 2',
    provider: 'NETENT',
    image: gameImages[0],
    badge: 'NEW',
    lastPlayed: '3 days ago',
  },
  {
    id: 205,
    title: 'BIG BASS BONANZA',
    provider: 'PRAGMATIC PLAY',
    image: gameImages[1],
    badge: 'HOT',
    lastPlayed: '4 days ago',
  },
  {
    id: 206,
    title: 'STARBURST',
    provider: 'NETENT',
    image: gameImages[2],
    badge: 'HOT',
    lastPlayed: '1 week ago',
  },
  {
    id: 207,
    title: "GONZO'S QUEST",
    provider: 'NETENT',
    image: gameImages[0],
    badge: 'NEW',
    lastPlayed: '1 week ago',
  },
  {
    id: 208,
    title: 'MEGA MONEY WHEEL',
    provider: 'EVOLUTION',
    image: gameImages[1],
    badge: 'HOT',
    lastPlayed: '2 weeks ago',
  },
]

export default function RecentPage() {
  const { t } = useI18n()
  const gameProviders = [
    { id: 'all', label: t('games.allProviders') },
    { id: 'pragmatic', label: 'Pragmatic Play' },
    { id: 'netent', label: 'NetEnt' },
    { id: 'playngo', label: "Play'n GO" },
    { id: 'evolution', label: 'Evolution' },
  ]

  const timeFilters = [
    { id: 'all', label: t('app.allTime') },
    { id: 'today', label: t('app.toDay') },
    { id: 'week', label: t('app.thisWeek') },
    { id: 'month', label: t('app.thisMonth') },
  ]
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProvider, setSelectedProvider] = useState(gameProviders[0])
  const [selectedTimeFilter, setSelectedTimeFilter] = useState(timeFilters[0])
  const [isProviderOpen, setIsProviderOpen] = useState(false)
  const [isTimeFilterOpen, setIsTimeFilterOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  })
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const providerRef = useRef<HTMLDivElement>(null)
  const timeFilterRef = useRef<HTMLDivElement>(null)

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
      if (
        timeFilterRef.current &&
        !timeFilterRef.current.contains(event.target as Node)
      ) {
        setIsTimeFilterOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Filter games based on search term and filters
  const filteredGames = recentGames.filter(game => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.provider.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesProvider =
      selectedProvider.id === 'all' ||
      game.provider.toLowerCase().includes(selectedProvider.id.toLowerCase())

    // For time filtering, we'll use the lastPlayed field
    // In a real app, you'd filter based on actual timestamps
    const matchesTime = selectedTimeFilter.id === 'all' || true // Simplified for demo

    return matchesSearch && matchesProvider && matchesTime
  })

  return (
    <div className="m-auto max-w-7xl p-2">
      {/* Header */}
      <div className="bg-[#111923]/54 border-b border-gray-700 py-4 backdrop-blur-[2rem]">
        <div className="mx-auto">
          <h1 className="mb-4 flex items-center gap-2 text-2xl font-bold text-white">
            <Clock className="h-6 w-6 text-blue-400" />
            {t('app.recently')}
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
                  placeholder={t('app.recentlyPlaceholder')}
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

                {/* Time Filter Dropdown */}
                <div ref={timeFilterRef} className="relative">
                  <div
                    onClick={() => {
                      if (timeFilterRef.current) {
                        const rect =
                          timeFilterRef.current.getBoundingClientRect()
                        setDropdownPosition({
                          top: rect.bottom + window.scrollY + 4,
                          left: rect.left + window.scrollX,
                          width: rect.width,
                        })
                        setActiveDropdown('timeFilter')
                        setIsTimeFilterOpen(!isTimeFilterOpen)
                      }
                    }}
                    className="hover:bg-white/12 flex h-12 w-full cursor-pointer items-center justify-between rounded-lg bg-white-8 px-4 transition-colors sm:w-[150px]"
                  >
                    <span className="font-montserrat text-sm font-bold text-gray-300 transition-colors hover:text-white">
                      {selectedTimeFilter.label}
                    </span>
                    <ChevronDown
                      className={`h-6 w-6 stroke-gray-400 text-white transition-transform ${
                        isTimeFilterOpen ? 'rotate-180' : ''
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
              <div key={game.id} className="relative">
                <CasinoCard {...game} />
                {/* Last played indicator */}
                <div className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 text-xs text-gray-300">
                  {game.lastPlayed}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="mb-4 text-6xl">🕒</div>
            <h3 className="mb-2 text-xl font-semibold">No recent games</h3>
            <p className="text-gray-400">
              {searchTerm
                ? 'Try adjusting your search terms'
                : 'Start playing games to see them here!'}
            </p>
          </div>
        )}
      </div>

      {/* Portal-based Dropdown */}
      {(isProviderOpen || isTimeFilterOpen) &&
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
            {activeDropdown === 'timeFilter' &&
              timeFilters.map(filter => (
                <div
                  key={filter.id}
                  onClick={() => {
                    setSelectedTimeFilter(filter)
                    setIsTimeFilterOpen(false)
                    setActiveDropdown(null)
                  }}
                  className={`w-full cursor-pointer px-4 py-3 text-left transition-colors hover:bg-white-8 ${
                    selectedTimeFilter.id === filter.id ? 'bg-blue-500/20' : ''
                  }`}
                >
                  <span className="font-montserrat text-sm font-medium text-gray-300">
                    {filter.label}
                  </span>
                </div>
              ))}
          </div>,
          document.body
        )}
    </div>
  )
}
