'use client'

import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Menu, Copy, Check } from 'lucide-react'
import { ResponsiveChipSelector } from '@/components/ui/chipSelector/ResponsiveChipSelector'
import MenuModal from '@/components/modals/MenuModal'
import { useModal } from '@/context/ModalProvider'
import Link from 'next/link'
import GameHistoryTable from '@/components/ui/GameHistoryTable'
import { useSidebar } from '@/context/SidebarProvider'

interface PageBettingLayoutProps {
  children: React.ReactNode
}

const PageBettingLayout: React.FC<PageBettingLayoutProps> = ({ children }) => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
  const [isBeginnerMode, setIsBeginnerMode] = useState(false)
  const { openChangeGameModal } = useModal()
  const { isCollapsed } = useSidebar()

  const handleCloseMenuModal = () => {
    setIsMenuModalOpen(false)
  }
  const handleMenuClick = () => {
    setIsMenuModalOpen(true)
  }
  return (
    <>
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-4 p-2 md:gap-8 ${isCollapsed ? 'sidebar-collapsed' : ''}`}
      >
        {/* Header with Segmented Control */}
        <div className="flex w-full flex-col items-center gap-4 p-0">
          <div className="mb-8 flex w-full items-center justify-between rounded-lg bg-[#222d3d] pr-4 [@media(max-width:768px)]:hidden">
            <div className="flex rounded-lg bg-[#72707038] p-1">
              <Link
                href="/hashgames/niuniu/transfer-betting"
                className={`bg-color-[#FFFFFF] flex items-center gap-2 rounded-lg border-none px-8 py-1.5 text-[14px] font-bold text-white shadow-lg transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]`}
              >
                {' '}
                <img
                  src="/icons/swap-horizontal.svg"
                  alt="active"
                  className="h-6 w-6"
                />
                Transfer betting
              </Link>
              <div
                className={`flex items-center gap-2 rounded-lg border border-none border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.13)] px-8 py-1.5 text-[14px] font-bold text-gray-300 transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]`}
              >
                {' '}
                <img src="/icons/wallet.svg" alt="active" className="h-6 w-6" />
                Page betting
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <div
                onClick={openChangeGameModal}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.04] bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] transition-colors hover:bg-white-8"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66683 10.6666H2.00016C1.63197 10.6666 1.3335 10.9651 1.3335 11.3333V14C1.3335 14.3681 1.63197 14.6666 2.00016 14.6666H4.66683C5.03502 14.6666 5.3335 14.3681 5.3335 14V11.3333C5.3335 10.9651 5.03502 10.6666 4.66683 10.6666Z"
                    fill="#A7B5CA"
                  />
                  <path
                    d="M9.33333 10.6666H6.66667C6.29848 10.6666 6 10.9651 6 11.3333V14C6 14.3681 6.29848 14.6666 6.66667 14.6666H9.33333C9.70152 14.6666 10 14.3681 10 14V11.3333C10 10.9651 9.70152 10.6666 9.33333 10.6666Z"
                    fill="#A7B5CA"
                  />
                  <path
                    d="M13.9998 10.6666H11.3332C10.965 10.6666 10.6665 10.9651 10.6665 11.3333V14C10.6665 14.3681 10.965 14.6666 11.3332 14.6666H13.9998C14.368 14.6666 14.6665 14.3681 14.6665 14V11.3333C14.6665 10.9651 14.368 10.6666 13.9998 10.6666Z"
                    fill="#A7B5CA"
                  />
                  <path
                    d="M4.66683 6H2.00016C1.63197 6 1.3335 6.29848 1.3335 6.66667V9.33333C1.3335 9.70152 1.63197 10 2.00016 10H4.66683C5.03502 10 5.3335 9.70152 5.3335 9.33333V6.66667C5.3335 6.29848 5.03502 6 4.66683 6Z"
                    fill="#A7B5CA"
                  />
                  <path
                    d="M9.33333 6H6.66667C6.29848 6 6 6.29848 6 6.66667V9.33333C6 9.70152 6.29848 10 6.66667 10H9.33333C9.70152 10 10 9.70152 10 9.33333V6.66667C10 6.29848 9.70152 6 9.33333 6Z"
                    fill="#A7B5CA"
                  />
                  <path
                    d="M13.9998 6H11.3332C10.965 6 10.6665 6.29848 10.6665 6.66667V9.33333C10.6665 9.70152 10.965 10 11.3332 10H13.9998C14.368 10 14.6665 9.70152 14.6665 9.33333V6.66667C14.6665 6.29848 14.368 6 13.9998 6Z"
                    fill="#A7B5CA"
                  />
                  <path
                    d="M4.66683 1.33331H2.00016C1.63197 1.33331 1.3335 1.63179 1.3335 1.99998V4.66665C1.3335 5.03484 1.63197 5.33331 2.00016 5.33331H4.66683C5.03502 5.33331 5.3335 5.03484 5.3335 4.66665V1.99998C5.3335 1.63179 5.03502 1.33331 4.66683 1.33331Z"
                    fill="#A7B5CA"
                  />
                  <path
                    d="M9.33333 1.33331H6.66667C6.29848 1.33331 6 1.63179 6 1.99998V4.66665C6 5.03484 6.29848 5.33331 6.66667 5.33331H9.33333C9.70152 5.33331 10 5.03484 10 4.66665V1.99998C10 1.63179 9.70152 1.33331 9.33333 1.33331Z"
                    fill="#A7B5CA"
                  />
                  <path
                    d="M13.9998 1.33331H11.3332C10.965 1.33331 10.6665 1.63179 10.6665 1.99998V4.66665C10.6665 5.03484 10.965 5.33331 11.3332 5.33331H13.9998C14.368 5.33331 14.6665 5.03484 14.6665 4.66665V1.99998C14.6665 1.63179 14.368 1.33331 13.9998 1.33331Z"
                    fill="#A7B5CA"
                  />
                </svg>
              </div>
              <div
                onClick={handleMenuClick}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.04] bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] transition-colors hover:bg-white-8"
              >
                <Menu className="h-4 w-4 text-casper" />
              </div>
            </div>
          </div>
          {/* Mobile view Header Section*/}
          <div className="hidden w-full rounded-lg bg-[#72707038] p-1 [@media(max-width:768px)]:flex">
            <Link
              href="/hashgames/bankerplayer/transfer-betting"
              className={`flex w-[50%] items-center justify-center gap-2 rounded-lg border-none py-1.5 text-[14px] font-bold transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]`}
            >
              {' '}
              <img
                src="/icons/swap-horizontal.svg"
                alt="active"
                className="h-6 w-6"
              />
              Transfer betting
            </Link>
            <div
              className={`flex w-[50%] items-center justify-center gap-2 rounded-lg border border-none border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.13)] py-1.5 text-[14px] font-bold text-gray-300 transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]`}
            >
              {' '}
              <img src="/icons/wallet.svg" alt="active" className="h-6 w-6" />
              Page betting
            </div>
          </div>

          {/* Betting Limit and Toggle */}
          <div className="flex w-full flex-row items-center justify-between gap-2 sm:gap-0 lg:flex-col">
            <div className="text-sm font-bold">
              <span className="text-white">Limit </span>
              <span className="text-dodger-blue">1-15000</span>
            </div>
            <div className="flex h-6 items-center gap-2">
              <span
                className={`text-xs font-bold sm:text-sm ${isBeginnerMode ? 'text-gray-400' : 'text-white'}`}
              >
                Beginner
              </span>
              <div className="relative">
                <div
                  onClick={() => setIsBeginnerMode(!isBeginnerMode)}
                  className={cn(
                    'relative h-6 w-10 rounded-full transition-colors',
                    isBeginnerMode ? 'bg-[#2283F6]' : 'bg-[#3C485C]'
                  )}
                >
                  <div
                    className={cn(
                      'absolute top-0.5 h-5 w-5 rounded-full transition-transform duration-200',
                      isBeginnerMode
                        ? 'translate-x-4 bg-white'
                        : 'translate-x-0.5 border-2 border-casper bg-casper'
                    )}
                  >
                    {isBeginnerMode && (
                      <Check
                        className="absolute left-1 top-1 h-3 w-3 text-[#2283F6]"
                        strokeWidth={3}
                      />
                    )}
                  </div>
                </div>
              </div>
              <span
                className={`text-xs font-bold sm:text-sm ${!isBeginnerMode ? 'text-gray-400' : 'text-white'}`}
              >
                Intermediate
              </span>
            </div>
          </div>

          {/* Block Information */}
          <div
            className="relative flex min-h-[80px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl p-4 md:h-[100px] md:gap-4"
            style={{
              background:
                "url('https://api.builder.io/api/v1/image/assets/TEMP/35f26e9aa061258b5e5f2783c73faff4c656c9a3?width=740') lightgray 50% / cover no-repeat, #111923",
              backgroundBlendMode: 'hard-light, normal',
            }}
          >
            <img
              src="/images/hashgame.jpg"
              className="z-1 absolute left-0 top-0 h-full w-full rounded-[14px]"
            />
            <div className="z-5 relative flex flex-1 flex-col items-center justify-center gap-1">
              <span className="text-xs font-bold text-casper md:text-sm">
                Current block
              </span>
              <div className="flex h-9 items-center justify-center gap-2 rounded-lg bg-black/[0.54] px-2 pr-3 md:px-3 md:pr-12">
                <Copy className="h-4 w-4 text-casper" />
                <span className="text-xs font-bold text-casper md:text-sm">
                  73852830
                </span>
              </div>
            </div>
            <div className="z-5 relative flex flex-1 flex-col items-center justify-center gap-1">
              <span className="text-xs font-bold text-casper md:text-sm">
                Next block
              </span>
              <div className="flex h-9 items-center justify-center gap-2 rounded-lg bg-black/[0.54] px-2 pr-3 md:px-3 md:pr-12">
                <Copy className="h-4 w-4 text-dodger-blue" />
                <span className="text-xs font-bold text-dodger-blue md:text-sm">
                  73872867
                </span>
              </div>
            </div>
          </div>
        </div>
        {children}
        {/* Betting Controls */}
        <ResponsiveChipSelector />

        {/* Betting Grid */}
        <div className="flex w-full flex-col items-center justify-end gap-4 rounded-xl bg-white/[0.04] px-2 py-4 md:py-8">
          {/* Betting History Tags - Above Table */}
          <div className="flex w-full items-center justify-between px-2">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="flex h-6 items-center gap-2">
                <span className="text-xs font-bold text-white">#3</span>
              </div>
              <div className="flex h-6 items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-crimson">
                  <span className="text-bunker text-xs font-bold">O</span>
                </div>
                <span className="text-xs font-bold text-white">1</span>
              </div>
              <div className="flex h-6 items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-orange">
                  <span className="text-bunker text-xs font-bold">E</span>
                </div>
                <span className="text-xs font-bold text-white">2</span>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="flex h-6 items-center gap-1">
                <div className="flex h-4 items-center gap-1 rounded-full bg-crimson px-1">
                  <span className="text-bunker text-xs font-bold">O</span>
                  <div className="h-2 w-2 rounded-full border border-yellow-orange"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-orange"></div>
                  <div className="h-2 w-2 rotate-45 transform bg-yellow-orange"></div>
                </div>
              </div>
              <div className="flex h-6 items-center gap-1">
                <div className="flex h-4 items-center gap-1 rounded-full bg-yellow-orange px-1">
                  <span className="text-bunker text-xs font-bold">E</span>
                  <div className="h-2 w-2 rounded-full border border-crimson"></div>
                  <div className="h-2 w-2 rounded-full bg-crimson"></div>
                  <div className="h-2 w-2 rotate-45 transform bg-crimson"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <GameHistoryTable />
        </div>
      </div>

      {/* Menu Modal */}
      <MenuModal isOpen={isMenuModalOpen} onClose={handleCloseMenuModal} />
    </>
  )
}

export default PageBettingLayout
