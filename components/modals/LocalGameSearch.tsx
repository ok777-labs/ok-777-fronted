'use client'

import { X, Search, ChevronDown, Play } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import CasinoCard from '@/components/ui/cards/CasinoCard'
import { Button } from '@/components/ui'
import Overlay from '@/components/overlays/Overlay'

interface LocalGameSearchModalProps {
  isOpen: boolean
  onClose: () => void
  category: string // The specific category to search within
  categoryLabel: string // Display name for the category
}

const gameImages = [
  'https://api.builder.io/api/v1/image/assets/TEMP/a79278fafd9b48c78c8388123f81620317fe8d54?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/8b925652b70e2da887252313faf53f95f3a960e8?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/e791e1fa9f325156debd5ac895252c60b3b371c2?width=230',
]

// Mock game data for different categories
const gamesByCategory = {
  favorites: [
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
  ],
  recent: [], // Empty array for recent games
  slots: [
    {
      id: 1,
      title: 'Mahjong Ways',
      provider: 'PG Soft',
      image: gameImages[0],
      badge: 'HOT',
    },
    {
      id: 2,
      title: 'Fortune Tiger',
      provider: 'PG Soft',
      image: gameImages[1],
      badge: 'NEW',
    },
    {
      id: 3,
      title: 'Gates of Olympus',
      provider: 'Pragmatic',
      image: gameImages[2],
      badge: 'HOT',
    },
    {
      id: 4,
      title: 'Sweet Bonanza',
      provider: 'Pragmatic',
      image: gameImages[0],
      badge: 'NEW',
    },
    {
      id: 5,
      title: 'Starlight Princess',
      provider: 'Pragmatic',
      image: gameImages[1],
      badge: 'HOT',
    },
    {
      id: 6,
      title: 'Wild West Gold',
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
    {
      id: 10,
      title: 'Live Poker',
      provider: 'Evolution',
      image: gameImages[0],
      badge: 'HOT',
    },
  ],
  hash: [
    {
      id: 11,
      title: 'Hash Banker Player',
      provider: '777 Gaming',
      image: gameImages[0],
      badge: 'HOT',
    },
    {
      id: 12,
      title: 'Hash Odd Even',
      provider: '777 Gaming',
      image: gameImages[1],
      badge: 'NEW',
    },
    {
      id: 13,
      title: 'Hash Big Small',
      provider: '777 Gaming',
      image: gameImages[2],
      badge: 'HOT',
    },
  ],
  sport: [
    {
      id: 14,
      title: 'Football Manager',
      provider: 'Sports Co',
      image: gameImages[0],
      badge: 'HOT',
    },
    {
      id: 15,
      title: 'Basketball Pro',
      provider: 'Sports Co',
      image: gameImages[1],
      badge: 'NEW',
    },
    {
      id: 16,
      title: 'Tennis Ace',
      provider: 'Sports Co',
      image: gameImages[2],
      badge: 'HOT',
    },
  ],
}

const gameProviders = [
  { id: 'all', label: 'All Providers' },
  { id: 'pg-soft', label: 'PG Soft' },
  { id: 'evolution', label: 'Evolution' },
  { id: 'pragmatic', label: 'Pragmatic Play' },
  { id: 'cfg-gaming', label: 'CFG Gaming' },
  { id: '777-gaming', label: '777 Gaming' },
  { id: 'sports-co', label: 'Sports Co' },
]

const gameTypes = [
  { id: 'all', label: 'All' },
  { id: 'new', label: 'New' },
  { id: 'popular', label: 'Popular' },
  { id: 'hot', label: 'Hot' },
  { id: 'featured', label: 'Featured' },
]

export default function LocalGameSearchModal({
  isOpen,
  onClose,
  category,
  categoryLabel,
}: LocalGameSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
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

  if (!isOpen) return null

  const currentGames =
    gamesByCategory[category as keyof typeof gamesByCategory] || []

  // Filter games based on search term
  const filteredGames = currentGames.filter(
    game =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.provider.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Overlay
      isOpen={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      backdropClassName="bg-black/80"
      contentClassName="w-full max-w-4xl mx-auto h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto modal-content-scroll transform transition-all duration-300 ease-out translate-y-0"
      zIndex={50}
      closeOnBackdropClick={true}
      closeOnEscape={true}
      preventScroll={true}
    >
      <div className="mx-auto flex h-full w-full flex-col sm:h-auto">
        {/* Header */}
        <div className="flex w-full items-center gap-4 rounded-t-[14px] border-t border-white-16 bg-gradient-to-b from-[rgba(17,25,35,0.54)] to-[#002554] px-6 py-4 backdrop-blur-[32px]">
          <h2 className="flex-1 font-montserrat text-lg font-bold text-white">
            Search in {categoryLabel}
          </h2>
          <div
            onClick={onClose}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white-4 bg-white-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] transition-colors hover:bg-white-8"
          >
            <span>
              <X className="h-4 w-4 text-[white]" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex w-full flex-1 flex-col gap-6 rounded-b-[14px] bg-[rgba(17,25,35,0.54)] p-4 backdrop-blur-[32px] sm:flex-none">
          {/* Search and filters - only show for non-recent modals */}
          {category !== 'recent' && (
            <div className="flex flex-col gap-4">
              <div className="flex w-full flex-col items-start gap-3 lg:flex-row">
                {/* Search Input */}
                <div className="flex w-full flex-1 items-center gap-2 rounded-lg border border-gray-600 bg-transparent px-4 py-3">
                  <Search className="h-6 w-6 flex-shrink-0 stroke-gray-400 text-white" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder={`Search ${categoryLabel.toLowerCase()}...`}
                    className="min-w-0 flex-1 border-none bg-transparent font-montserrat text-sm font-medium text-gray-300 outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Dropdowns */}
                <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                  {/* Game Provider Dropdown */}
                  <div ref={providerRef} className="relative">
                    <div
                      onClick={() => setIsProviderOpen(!isProviderOpen)}
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
                              selectedType.id === type.id
                                ? 'bg-blue-500/20'
                                : ''
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
          )}

          {/* Results count - only show for non-recent modals */}
          {category !== 'recent' && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                {filteredGames.length} games found in {categoryLabel}
              </p>
            </div>
          )}

          {/* Game Grid or Empty State */}
          {category === 'recent' ? (
            // Recent modal - show empty state with image
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center py-16">
                <div className="relative mb-6">
                  <img
                    src="/images/login-into-banner.png"
                    alt="Empty state"
                    className="h-32 w-32 object-contain"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  You haven't played yet
                </h3>
                <p className="max-w-md text-center text-gray-400">
                  The last games you've played will be displayed here
                </p>
              </div>
            </div>
          ) : (
            // Other modals - show game grid
            <div className="grid w-full grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 lg:grid-cols-6">
              {filteredGames.length > 0 ? (
                filteredGames.map((game, index) => (
                  <div key={game.id} className="group relative">
                    <CasinoCard badge={game.badge} image={game.image} />

                    {/* Hover overlay with play button */}
                    <div className="absolute inset-0 flex items-center justify-center rounded-[8px] bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Button variant="red" className="h-12 w-12 p-0">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-8 text-center">
                  <p className="text-lg text-gray-400">
                    <span>No games found</span>
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    <span>Try adjusting your search terms</span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Overlay>
  )
}
