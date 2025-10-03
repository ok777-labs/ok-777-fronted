'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react'
import { AUTH_CHANGED_EVENT, getIsLoggedIn } from '@/lib/auth'
import UserProfileDropdown from './ui/notification/Profile'
import { Button, UnifiedButton } from './ui'
import LanguageSelect from './ui/LanguageSelect'
import { useModal } from '../context/ModalProvider'
import { useSidebar } from '../context/SidebarProvider'
import { useProfile } from '../context/ProfileProvider'
import { useOverlay } from '../context/OverlayProvider'
import { useLanguage } from '../context/LanguageProvider'
import { useI18n } from '../context/I18nProvider'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import Link from 'next/link'
import BlackButton from './ui/Button/BlackButton'
import ArrowToRightStrokeIcon from './ui/icons/arrow-to-right-stroke'
import { cn } from '@/lib/utils'
import SearchIcon from './ui/icons/search'
import TDButton from './ui/Button/TDButton'
import MessageDots2Icon from './ui/icons/message-dots-2'
import NotificationIcon from './ui/icons/notification'
import { useRouter, useSearchParams } from 'next/navigation'

// Game navigation tabs for mobile - will be created with translations

// Reusable components to eliminate duplication
const MenuButton: React.FC<{ onClick: () => void; isCollapsed: boolean }> = ({
  onClick,
  isCollapsed,
}) => (
  <div className="relative hidden lg:flex">
    <BlackButton onClick={onClick}>
      <ArrowToRightStrokeIcon
        className={cn('h-4 w-4', isCollapsed ? 'rotate-180' : '')}
      />
    </BlackButton>
  </div>
)

const Logo: React.FC = () => (
  <div className="flex items-center">
    <Link href="/">
      <img src="/images/logo.svg" alt="777 Gaming Logo" />
    </Link>
  </div>
)

const BonusesButton: React.FC = () => (
  <div className="relative hidden sm:block">
    <UnifiedButton
      variant="gradient"
      className="px-3 py-2"
      style={{
        border: '0.0625rem solid var(--gray-600)',
      }}
    >
      <div className="flex items-center gap-2">
        <img src="/images/awards/Chest-box.svg" className="h-8" alt="bonuses" />
        <span className="hidden text-xs font-medium text-white lg:block">
          Bonuses
        </span>
      </div>
    </UnifiedButton>
    {/* Notification badge overlapping the button */}
    <div className="absolute -right-1 -top-1 flex w-5 items-center justify-center rounded bg-green-500 text-xs text-white">
      4
    </div>
  </div>
)

const SearchButton: React.FC = () => {
  const { openGameSearchModal } = useModal()

  return (
    <BlackButton className="hidden sm:flex" onClick={openGameSearchModal}>
      <SearchIcon className="h-4 w-4" />
    </BlackButton>
  )
}

const NotificationBadge: React.FC = () => (
  <div className="absolute -right-1 -top-1 flex w-5 items-center justify-center rounded bg-green-500 text-xs text-white">
    4
  </div>
)

const LeftSection: React.FC<{
  toggleSidebar: () => void
  isCollapsed: boolean
}> = ({ toggleSidebar, isCollapsed }) => (
  <div className="flex items-center gap-2">
    <MenuButton onClick={toggleSidebar} isCollapsed={isCollapsed} />
    <Logo />
    <BonusesButton />
    <SearchButton />
  </div>
)

const AuthSection: React.FC<{
  toggleAuthModal: () => void
  isLoggedIn: boolean
}> = ({ toggleAuthModal, isLoggedIn }) => {
  const { t } = useI18n()
  return (
    <div className="flex items-center gap-2">
      {isLoggedIn ? (
        <>
          <WalletSection />
        </>
      ) : (
        <>
          <div className="relative">
            <BlackButton className="w-[4.4375rem]" onClick={toggleAuthModal}>
              <span className="text-xs text-white">{t('auth.login')}</span>
            </BlackButton>
          </div>
          <TDButton
            type="red"
            className="h-[2.0625rem] w-[5.3125rem]"
            onClick={toggleAuthModal}
          >
            <span className="text-xs">{t('auth.register')}</span>
          </TDButton>
        </>
      )}
    </div>
  )
}

const UtilitySection: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const [showLang, setShowLang] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const { currentLanguage, setCurrentLanguage } = useLanguage()
  const { openNotifications } = useOverlay()

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapperRef.current) return
      if (!wrapperRef.current.contains(e.target as Node)) setShowLang(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  // Prevent scroll penetration when dropdown is open
  useEffect(() => {
    if (showLang) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [showLang])

  const handleToggleLang = () => {
    setShowLang(s => !s)
  }

  return (
    <div className="flex items-center gap-2" ref={wrapperRef}>
      <div className="relative hidden lg:block">
        <BlackButton onClick={handleToggleLang}>
          <img
            src={`/icons/flag-icon/${
              currentLanguage.code === 'en' ? 'uk' : currentLanguage.code
            }.svg`}
            className="h-4"
            alt="flag"
          />
        </BlackButton>
        {showLang && (
          <div className="absolute right-0 top-full z-[1000] mt-2">
            <LanguageSelect
              open
              triggerless
              onRequestClose={() => setShowLang(false)}
              onChange={lang =>
                setCurrentLanguage({
                  code: lang.code,
                  name: lang.name,
                })
              }
            />
          </div>
        )}
      </div>
      {isLoggedIn && <NotificationButton onClick={openNotifications} />}
      <BlackButton className="hidden lg:flex">
        <MessageDots2Icon className="h-4 w-4" />
      </BlackButton>
      {isLoggedIn && <ProfileButton />}
    </div>
  )
}

const WalletSection: React.FC = () => {
  const router = useRouter()
  const { t } = useI18n()
  return (
    <div className="flex items-center gap-1 rounded-lg bg-gray-700 pl-2 sm:gap-2">
      <div className="flex items-center gap-1 sm:gap-2">
        <img
          src="/icons/coin-icon/USDT.svg"
          alt="USDT"
          className="h-5 w-5 sm:h-6 sm:w-6"
        />
        <p className="text-[0.75rem] font-bold text-white sm:text-[0.875rem]">
          0.15
        </p>
      </div>
      <Button
        onClick={() => router.push('/wallet')}
        variant="Wallet"
        className="!h-[2.0625rem] !w-[2.0625rem] sm:!w-[7.5rem] md:!w-[9.125rem]"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <img
            src="/icons/wallet.svg"
            alt="wallet"
            className="h-3 w-3 sm:h-4 sm:w-4"
          />
          <span className="hidden text-[0.625rem] sm:inline sm:text-[0.75rem]">
            {t('navigation.wallet')}
          </span>
        </div>
      </Button>
    </div>
  )
}

const NotificationButton: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => (
  <div className="relative">
    <BlackButton className="hidden lg:flex" onClick={onClick}>
      <NotificationIcon className="h-4 w-4" />
    </BlackButton>
  </div>
)

const ProfileButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { isProfileOpen, setIsProfileOpen } = useProfile()
  const { openProfile } = useOverlay()
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(event.target as Node)) {
        // Only close on click outside for desktop (lg and above)
        if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
          setIsProfileOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [setIsProfileOpen])

  const handleButtonClick = () => {
    // For mobile, use overlay system
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      openProfile()
    } else {
      // For desktop, use the existing profile system
      setIsProfileOpen(!isProfileOpen)
    }
    if (onClick) onClick()
  }

  return (
    <div className="relative" ref={containerRef}>
      <BlackButton
        className="rounded-[0.625rem] bg-[conic-gradient(var(--malachite)_0_75%,transparent_75%_100%)] px-[0.125rem] hover:bg-[conic-gradient(var(--malachite)_0_75%,transparent_75%_100%)]"
        onClick={handleButtonClick}
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/381f33b8ee9dde920a0b2278348be945b8886b91?width=128"
          className="h-[1.875rem] w-[2.1875rem]"
          alt="frame"
        />
      </BlackButton>
      <NotificationBadge />
      {isProfileOpen && (
        <div className="absolute -right-4 top-full z-[1000] mt-2 w-[98vw] lg:w-auto">
          <UserProfileDropdown onClose={() => setIsProfileOpen(false)} />
        </div>
      )}
    </div>
  )
}

// Mobile Game Navigation Component
interface MobileGameNavProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

const MobileGameNav: React.FC<MobileGameNavProps> = ({
  activeTab,
  onTabChange,
}) => {
  const swiperRef = useRef<SwiperType | null>(null)
  const { t } = useI18n()

  // Game navigation tabs for mobile with translations
  const gameNavTabs = useMemo(
    () => [
      {
        id: 'lobby',
        label: t('games.lobby'),
        icon: '/icons/Home.svg',
        active: false,
      },
      {
        id: 'hash',
        label: t('games.hashgames'),
        icon: '/icons/Hash.svg',
        active: false,
      },
      {
        id: 'slots',
        label: t('games.slots'),
        icon: '/icons/Slots.svg',
        active: false,
      },
      {
        id: 'casino',
        label: t('games.live'),
        icon: '/icons/Casino1.svg',
        active: false,
      },
      {
        id: 'futures',
        label: t('games.futures'),
        icon: '/icons/Futures1.svg',
        active: false,
      },
      {
        id: 'crypto',
        label: t('games.crypto'),
        icon: '/icons/Cryptogra1.svg',
        active: false,
      },
      {
        id: 'sport',
        label: t('games.sports'),
        icon: '/icons/Sport.svg',
        active: false,
      },
      {
        id: 'table',
        label: t('games.table'),
        icon: '/icons/tablegame.svg',
        active: false,
      },
    ],
    [t]
  )

  useEffect(() => {
    const index = gameNavTabs.findIndex(t => t.id === activeTab)
    if (swiperRef.current && index >= 0) {
      swiperRef.current.slideTo(index, 300)
    }
  }, [activeTab, gameNavTabs])

  return (
    <div className="px-2 py-1 lg:hidden">
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={6}
        onSwiper={inst => {
          swiperRef.current = inst
        }}
      >
        {gameNavTabs.map((tab, idx) => (
          <SwiperSlide key={tab.id} className="!w-auto">
            <UnifiedButton
              onClick={() => {
                onTabChange(tab.id)
                swiperRef.current?.slideTo(idx, 250)
              }}
              variant={activeTab === tab.id ? 'primary' : 'secondary'}
              className="!h-8 min-w-fit whitespace-nowrap px-2 py-4"
            >
              <img src={tab.icon} alt={tab.label} className="h-5 w-5" />
              <span className="text-[0.8rem] font-bold">{tab.label}</span>
            </UnifiedButton>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const Header: React.FC = () => {
  const { toggleSidebar, toggleAuthModal, isCollapsed } = useSidebar()
  const [activeGameTab, setActiveGameTab] = useState('lobby')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return
    const updateLoginState = () => setIsLoggedIn(getIsLoggedIn())
    updateLoginState()
    window.addEventListener(AUTH_CHANGED_EVENT, updateLoginState)
    return () => {
      window.removeEventListener(AUTH_CHANGED_EVENT, updateLoginState)
    }
  }, [])

  // Update active tab based on URL query parameters
  useEffect(() => {
    if (typeof window === 'undefined') return

    const tabFromQuery = searchParams.get('tab')
    if (tabFromQuery) {
      // Validate the tab parameter
      const validTabs = [
        'lobby',
        'hash',
        'slots',
        'casino',
        'sport',
        'futures',
        'crypto',
        'table',
      ]
      if (validTabs.includes(tabFromQuery)) {
        setActiveGameTab(tabFromQuery)
      } else {
        setActiveGameTab('lobby')
      }
    } else {
      // Fallback to pathname-based detection if no query parameter
      const path = window.location.pathname
      switch (path) {
        case '/':
          setActiveGameTab('lobby')
          break
        case '/hash-games':
          setActiveGameTab('hash')
          break
        case '/slots':
          setActiveGameTab('slots')
          break
        case '/casino':
          setActiveGameTab('casino')
          break
        case '/futures':
          setActiveGameTab('futures')
          break
        case '/crypto-games':
          setActiveGameTab('crypto')
          break
        case '/sports':
          setActiveGameTab('sport')
          break
        case '/table-games':
          setActiveGameTab('table')
          break
        default:
          setActiveGameTab('lobby')
      }
    }
  }, [searchParams])

  const handleTabChange = (tabId: string) => {
    try {
      setActiveGameTab(tabId)

      // Handle home tab navigation
      if (tabId === 'lobby') {
        router.push('/')
      } else {
        // Always navigate to root path with query parameter for other tabs
        const newUrl = `/?tab=${tabId}`
        router.push(newUrl)
      }
    } catch (error) {
      console.error('Navigation error:', error)
      // Fallback to window.location if router fails
      if (tabId === 'lobby') {
        window.location.href = '/'
      } else {
        window.location.href = `/?tab=${tabId}`
      }
    }
  }

  return (
    <>
      <header
        id="app-header"
        className="fixed left-0 right-0 top-0 z-50 flex flex-col"
        style={{
          backdropFilter: 'blur(2rem)',
          background: 'var(--mirage-54)',
          borderBottom: '1px solid var(--white-4)',
        }}
      >
        {/* Main Header Row */}
        <div className="flex items-center justify-between p-2">
          {/* Left side */}
          <LeftSection
            toggleSidebar={toggleSidebar}
            isCollapsed={isCollapsed}
          />

          {/* Center - empty space */}
          <div className="flex-1"></div>

          {/* Right side */}
          <div className="flex items-center sm:gap-2">
            <AuthSection
              toggleAuthModal={toggleAuthModal}
              isLoggedIn={isLoggedIn}
            />
            <UtilitySection isLoggedIn={isLoggedIn} />
          </div>
        </div>

        {/* Mobile Game Navigation */}
        <MobileGameNav
          activeTab={activeGameTab}
          onTabChange={handleTabChange}
        />
      </header>
    </>
  )
}

export default Header
