'use client'

import { useState } from 'react'
import { UnifiedButton } from '@/components/ui'
import { setAuthUser } from '@/lib/auth'
import { X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageProvider'
import { useOverlay } from '@/context/OverlayProvider'
import WalletIcon from '../icons/wallet'
import NotificationIcon from '../icons/notification'
import MedalStarAlt2Icon from '../icons/medal-star-alt-2'
import ChartNetworkIcon from '../icons/chart-network'
import CrownIcon from '../icons/crown'
import LikeIcon from '../icons/like'
import DoughnutChartIcon from '../icons/doughnut-chart'
import SliderAltIcon from '../icons/slider-alt'
import EditIcon from '../icons/edit'
import PriceTagIcon from '../icons/price-tag'
import DockRightArrowIcon from '../icons/dock-right-arrow'
import FlatButton from '../Button/FlatButton'
import Link from 'next/link'
import { useModal } from '@/context/ModalProvider'

interface UserProfileDropdownProps {
  onClose?: () => void
}

const UserProfileDropdown = ({ onClose }: UserProfileDropdownProps) => {
  const [bonusCode, setBonusCode] = useState('')
  const { currentLanguage } = useLanguage()
  const { openNotifications } = useOverlay()

  const menuItems = [
    {
      icon: <WalletIcon />,
      label: 'Wallet',
      count: null,
      href: '/wallet',
      event: onClose,
    },
    {
      icon: <NotificationIcon />,
      label: 'Notifications',
      count: 4,
      href: '#',
      event: () => {
        openNotifications()
        onClose
      },
    },
    {
      icon: <CrownIcon />,
      label: 'VIP Club',
      count: null,
      href: '/vip-club',
      event: onClose,
    },
    {
      icon: <LikeIcon />,
      label: 'Alliance Plan',
      count: null,
      href: '/alliance',
      event: onClose,
    },
    {
      icon: <MedalStarAlt2Icon />,
      label: 'Game records',
      count: null,
      href: '/wallet?tab=gamehistory',
      event: onClose,
    },
    {
      icon: <DoughnutChartIcon />,
      label: 'Data Statistics',
      count: null,
      href: '/wallet?tab=datastatistics',
      event: onClose,
    },
    {
      icon: <SliderAltIcon />,
      label: 'Settings',
      count: null,
      href: '/settings',
      event: onClose,
    },
    {
      label: `Default Lang: ${currentLanguage.name}`,
      count: null,
      flag: currentLanguage.code,
      href: '#',
      event: onClose,
    },
  ]

  return (
    <div className="glass-bg h-screen w-full overflow-y-auto p-0 font-montserrat text-white backdrop-blur-[32px] md:w-[282px] lg:h-auto lg:w-[282px] lg:rounded-[14px]">
      <div
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg border border-white-4 bg-white-4 backdrop-blur-[32px] transition-colors hover:bg-white-8 lg:hidden"
        style={{
          boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.16) inset',
        }}
      >
        <X size={16} className="text-[var(--casper)]" />
      </div>
      {/* User Profile Section */}
      <div className="flex flex-col items-center p-4 pt-5 lg:min-h-0 lg:justify-start lg:p-4 lg:pt-4">
        <div className="flex w-[88%] flex-col items-center gap-2">
          {/* Avatar with VIP Badge */}
          <div className="relative flex flex-col items-center gap-[-10px]">
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/381f33b8ee9dde920a0b2278348be945b8886b91?width=128"
                alt="User avatar"
                className="h-16 w-16 rounded-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.16)_inset] backdrop-blur-[32px]"
              />
              {/* VIP Badge - positioned to overlap the bottom of the avatar */}
              <div className="absolute -bottom-2.5 left-1/2 z-10 -translate-x-1/2 transform">
                <div
                  className="flex h-5 items-center justify-center rounded-2xl border border-white px-2 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset]"
                  style={{ backgroundColor: 'var(--malachite)' }}
                >
                  <span className="whitespace-nowrap text-xs font-bold text-white">
                    VIP 1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Username */}
          <div className="mt-2 flex items-center gap-1">
            <span className="text-sm font-bold text-white">
              <span>User8527681</span>
            </span>
            <EditIcon className="h-4 w-4" />
          </div>

          {/* VIP Progress */}
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-white">
                <span>VIP 1</span>
              </span>
              <span className="text-[10px] font-bold text-white">
                <span>VIP 1</span>
              </span>
            </div>

            {/* Progress Bar */}
            <div className="glass-input rounded-lg p-0.5">
              <div className="relative h-2 w-full rounded-lg">
                <div
                  className="h-full w-[116px] rounded-lg border border-white-4"
                  style={{ backgroundColor: 'var(--crimson)' }}
                ></div>
                <div className="absolute right-1 top-1/2 flex -translate-y-1/2 transform items-center gap-1">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b06c41ce5f767b8fe02cc82d8bf934e68565f90a?width=24"
                    alt="Chest"
                    className="h-3 w-3"
                  />
                  <span className="text-[10px] text-white">50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bonus Code Section */}
      <div className="px-4 pb-4 lg:pb-2">
        <div className="rounded-xl p-4">
          {/* Bonus Code Header */}
          <div className="mb-4 flex items-center gap-2">
            <PriceTagIcon className="h-4 w-4" />
            <span
              className="text-sm font-bold"
              style={{ color: 'var(--casper)' }}
            >
              Bonus code
            </span>
          </div>

          {/* Input Field */}
          <div className="glass-input flex gap-1 rounded-xl p-1.5">
            <input
              type="text"
              value={bonusCode}
              onChange={e => setBonusCode(e.target.value)}
              placeholder="Enter bonus code"
              className="w-[30px] flex-1 border-none bg-transparent px-3 text-xs text-gallery outline-none placeholder:text-blue-bayoux"
              style={{ color: 'var(--blue-bayoux)' }}
            />
            <FlatButton className="h-9 px-4 text-xs font-bold">
              <span>Send</span>
            </FlatButton>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 pb-4 lg:pb-2">
        <div className="flex flex-col gap-0.5">
          {menuItems.map((item, index) => {
            const isActive = (item as any).isActive
            return (
              <Link
                href={item.href}
                onClick={item.event}
                key={index}
                className={`group flex h-12 items-center gap-2 rounded-lg px-4 text-casper backdrop-blur-[32px] transition-colors ${
                  isActive
                    ? 'bg-[var(--chip-purple)]/20 border-[var(--chip-purple)]/30 border'
                    : 'hover:bg-white/5'
                }`}
              >
                {item.icon}
                {/* Flag icon for language item */}
                {(item as any).flag && (
                  <img
                    src={`/icons/flag-icon/${(item as any).flag}.svg`}
                    className="h-5 w-5"
                    alt="language flag"
                  />
                )}
                <span
                  className={`flex items-center gap-2 text-left text-sm font-bold transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-[var(--casper)] group-hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.count && (
                    <div
                      className="rounded-md px-1.5 py-0.5 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset]"
                      style={{
                        backgroundColor: 'var(--malachite)',
                      }}
                    >
                      <span className="text-xs font-bold text-white">
                        {item.count}
                      </span>
                    </div>
                  )}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Log Out */}
      <div className="px-4 pb-8 lg:pb-2">
        <div
          onClick={() => {
            setAuthUser(null)
            onClose?.() // 🔥 close modal immediately
          }}
          className="group flex h-12 w-full items-center gap-2 rounded-lg px-4 text-casper backdrop-blur-[32px] transition-colors hover:bg-white/5"
        >
          <DockRightArrowIcon />
          <span
            className="flex-1 text-left text-sm font-bold transition-colors group-hover:text-white"
            style={{ color: 'var(--casper)' }}
          >
            Log out
          </span>
        </div>
      </div>
    </div>
  )
}

export default UserProfileDropdown
