'use client'

import React, { useState } from 'react'
import MenuModal from '@/components/modals/MenuModal'
import Link from 'next/link'
import { useSidebar } from '@/context/SidebarProvider'
import { CopyBox } from '@/components/ui/CopyBox'
import { board } from './mockboard'
import { useI18n } from '@/context/I18nProvider'
import TDButton from '@/components/ui/Button/TDButton'

const TransferBettingLayout: React.FC = () => {
  const { t } = useI18n()
  const { isCollapsed } = useSidebar()
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Intermediate'>(
    'Beginner'
  )

  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)

  const handleCloseMenuModal = () => {
    setIsMenuModalOpen(false)
  }

  const GameBoard = ({ board }: { board: (string | null)[][] }) => {
    return (
      <div className="mb-4 w-full rounded-lg">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-1 flex gap-1 bg-[#1b2430]">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="flex h-10 w-10 items-center justify-center border border-gray-700"
              >
                {cell === 'E' ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black [@media(max-width:850px)]:h-4 [@media(max-width:850px)]:w-4 [@media(max-width:850px)]:text-[10px]">
                    E
                  </div>
                ) : cell === 'O' ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white [@media(max-width:850px)]:h-4 [@media(max-width:850px)]:w-4 [@media(max-width:850px)]:text-[10px]">
                    O
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div
        className={`mx-auto w-full max-w-6xl p-2 lg:px-0 ${isCollapsed ? 'sidebar-collapsed' : ''}`}
      >
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between rounded-lg bg-[#222d3d] pr-4 [@media(max-width:768px)]:hidden">
          <div className="flex rounded-lg bg-[#72707038] p-1">
            <div
              className={`flex items-center gap-2 rounded-lg border border-none border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.13)] px-8 py-1.5 text-sm font-bold text-gray-300 transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]`}
            >
              {' '}
              <img
                src="/icons/swap-horizontal.svg"
                alt="transfer"
                className="h-6 w-6"
              />
              {t('hashgame.transferBetting')}
            </div>
            <Link
              href="/hashgames/bankerplayer/page-betting"
              className={`bg-color-[#FFFFFF] flex items-center gap-2 rounded-lg border-none px-8 py-1.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]`}
            >
              {' '}
              <img src="/icons/wallet.svg" alt="page" className="h-6 w-6" />
              {t('hashgame.pageBetting')}
            </Link>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="text-sm text-gray-300">
              {t('hashgame.beginner')}
            </span>
            <div className="relative">
              <input
                type="checkbox"
                id="difficulty-toggle"
                className="sr-only"
                checked={difficulty === 'Intermediate'}
                onChange={e =>
                  setDifficulty(e.target.checked ? 'Intermediate' : 'Beginner')
                }
              />
              <label
                htmlFor="difficulty-toggle"
                className={`relative block h-6 w-12 cursor-pointer rounded-full ${
                  difficulty === 'Intermediate'
                    ? 'bg-[#2283F6]'
                    : 'bg-[#a7b5ca73]'
                }`}
              >
                <span
                  className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                    difficulty === 'Intermediate' ? 'translate-x-6' : ''
                  }`}
                />
              </label>
            </div>
            <span className="text-sm text-gray-300">
              {t('hashgame.intermediate')}
            </span>
          </div>
        </div>
        {/* Mobile view Header Section*/}
        <div className="hidden w-full rounded-lg bg-[#72707038] p-1 [@media(max-width:768px)]:flex">
          <div
            className={`flex w-[50%] items-center justify-center gap-2 rounded-lg border border-none border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.13)] py-1.5 text-sm font-bold text-gray-300 transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]`}
          >
            {' '}
            <img
              src="/icons/swap-horizontal.svg"
              alt="transfer"
              className="h-6 w-6"
            />
            {t('hashgame.transferBetting')}
          </div>
          <Link
            href="/hashgames/bankerplayer/page-betting"
            className={`flex w-[50%] items-center justify-center gap-2 rounded-lg border-none py-1.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]`}
          >
            {' '}
            <img
              src="/icons/swap-horizontal.svg"
              alt="page"
              className="h-6 w-6"
            />
            {t('hashgame.pageBetting')}
          </Link>
        </div>

        {/* Mobile view Header Section1s*/}
        <div className="mb-4 mt-4 hidden items-center justify-center gap-2 [@media(max-width:768px)]:flex">
          <span className="text-sm text-gray-300">
            {t('hashgame.beginner')}
          </span>
          <div className="relative">
            <input
              type="checkbox"
              id="difficulty-toggle"
              className="sr-only"
              checked={difficulty === 'Intermediate'}
              onChange={e =>
                setDifficulty(e.target.checked ? 'Intermediate' : 'Beginner')
              }
            />
            <label
              htmlFor="difficulty-toggle"
              className="relative block h-6 w-12 cursor-pointer rounded-full bg-gray-600"
            >
              <span
                className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                  difficulty === 'Intermediate' ? 'translate-x-6' : ''
                }`}
              />
            </label>
          </div>
          <span className="text-sm text-gray-300">
            {t('hashgame.intermediate')}
          </span>
        </div>

        {/* Desktop view Bid address and Wallet Section*/}
        <div className="mb-6 hidden rounded-lg border border-[rgba(12,96,255,0.1)] bg-[#111923] p-3 shadow-xl [@media(max-width:768px)]:block">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#FFFFFF]">
            {t('hashgame.bettingAddress')}
            <span className="text-xs font-bold opacity-80">
              {t('hashgame.useDecWallet')}
            </span>
          </h2>
          <CopyBox className="mb-4 w-full">
            <span className="text-chip-blue">TXS3</span>
            PfAUShemKkoBWRUFsUkGBSrZ
            <span className="text-chip-blue">gh..</span>
          </CopyBox>

          <div className="relative mb-4">
            <TDButton type="red">
              <span className="h-9 text-sm leading-9">
                {t('hashgame.activeAddress')}
              </span>
            </TDButton>
          </div>
          <div className="mb-6 rounded-lg border border-[rgba(12,96,255,0.1)] bg-[#FFFFFF0A] p-3 shadow-xl">
            <p className="mb-2 text-sm font-bold text-white">
              {t('hashgame.chances')}:
              <span className="text-chip-blue">1:1.95</span>
            </p>
            <p className="text-sm font-bold text-white">
              {t('hashgame.limitation')}:
              <span className="text-chip-blue">10-15000 USDT 2-30000 </span>
              TRX
            </p>
            <div className="mt-5 text-sm font-normal text-chip-blue opacity-80">
              {t('hashgame.notetitle')}
            </div>

            <div className="mt-4 text-sm font-normal text-[#FFFFFF] opacity-80">
              {t('hashgame.notecontent')}
            </div>
          </div>
          {/* Mobile view Desktop View Example Section */}
          <div className="hidden bg-[url('/images/agloss.png')] bg-cover bg-center bg-no-repeat [@media(max-width:768px)]:block">
            <div className="overflow-none relative mb-6 rounded-lg bg-[linear-gradient(to_bottom,#253041_70%,#0C60FF_100%)] p-4 opacity-85 shadow-xl">
              {/* Background cryptocurrency coin outlines - Exact match to image */}
              <div className="relative z-10 flex gap-8">
                {/* Left Column - Title, Hash Example, and Rules */}
                <div>
                  <p className="text-align-left mb-5 text-sm font-bold leading-tight text-white">
                    {t('hashgame.blockChainRule')}
                  </p>
                  <img
                    src="/icons/down-arrow.svg"
                    alt="down-arrow"
                    className="m-auto mb-2 h-4 w-6 opacity-40"
                  />
                  <div className="text-left">
                    <div className="relative flex items-center justify-center gap-6 rounded-xl px-8">
                      <span className="flex text-left text-sm font-bold tracking-wider text-white">
                        EX:0000000 .... e
                        <span className="text-sm font-bold text-[#FFB636]">
                          5
                        </span>
                        s
                      </span>
                      {/* Enhanced Magnifying Glass Effect - Exact Match */}
                      <div className="relative flex-shrink-0">
                        <img
                          src="/images/magnifying.png"
                          alt="magnifying.png"
                          className="h-6 w-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="t-[14px] space-y-6 rounded-xl bg-[#FFFFFF0A] p-4 font-bold">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-normal text-white">
              {t('hashgame.bettingRules')}
            </h3>
            <p className="text-sm font-normal leading-relaxed text-white opacity-80">
              The last digit of the Active amount, 1,3,5,7,9 are placed on{' '}
              <span className="font-normal text-[#64B5F6]">odd</span>, 0,2,4,6,8
              are placed on{' '}
              <span className="font-normal text-[#64B5F6]">even</span>.
            </p>
            <h3 className="mb-3 flex items-center gap-2 text-lg font-normal text-white">
              {t('hashgame.gameRules')}
            </h3>
            <p className="text-sm font-normal leading-relaxed text-white opacity-80">
              1,3,5,7,9 is{' '}
              <span className="font-normal text-[#64B5F6]">odd</span>, 0,2,4,6,8
              is <span className="font-normal text-[#64B5F6]">even</span>.
            </p>
          </div>
        </div>

        {/* Game Description and Rules */}
        <div className="bg-[url('/images/agloss.png')] bg-cover bg-center bg-no-repeat [@media(max-width:768px)]:hidden">
          <div className="overflow-none relative mb-6 rounded-lg bg-[linear-gradient(to_bottom,#253041_70%,#0C60FF_100%)] p-8 opacity-85 shadow-xl">
            {/* Background cryptocurrency coin outlines - Exact match to image */}

            <div className="relative z-10 flex gap-8">
              {/* Left Column - Title, Hash Example, and Rules */}
              <div className="w-[60%]">
                <p className="text-align-left mb-5 text-2xl font-bold leading-tight text-white">
                  {t('hashgame.blockChainRule')}
                </p>

                <div className="mb-6 text-left">
                  <div className="relative inline-flex items-center gap-6 rounded-xl border border-[rgba(12,96,255,0.3)] bg-gradient-to-r from-[#2283F621] to-[#2283F621] px-12 py-4 shadow-2xl">
                    <span className="flex-1 text-left text-[20px] font-bold tracking-wider text-white">
                      EX:0000000 .... e
                      <span className="text-[20px] font-bold text-[#FFB636]">
                        5
                      </span>
                      s
                    </span>
                    {/* Enhanced Magnifying Glass Effect - Exact Match */}
                    <div className="relative flex-shrink-0">
                      <img
                        src="/images/magnifying.png"
                        alt="magnifying.png"
                        className="h-12 w-20"
                      />
                    </div>
                  </div>
                </div>

                <div className="t-[14px] none space-y-6 rounded-xl bg-[#1119238A] p-4 font-bold [@media(max-width:768px)]:block">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-normal text-white">
                    {t('hashgame.bettingRules')}
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-white">
                    The last digit of the Active amount, 1,3,5,7,9 are placed on{' '}
                    <span className="font-normal text-[#64B5F6]">odd</span>,
                    0,2,4,6,8 are placed on{' '}
                    <span className="font-normal text-[#64B5F6]">even</span>.
                  </p>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-normal text-white">
                    {t('hashgame.gameRules')}
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-white">
                    1,3,5,7,9 is{' '}
                    <span className="font-normal text-[#64B5F6]">odd</span>,
                    0,2,4,6,8 is{' '}
                    <span className="font-normal text-[#64B5F6]">even</span>.
                  </p>
                </div>
              </div>

              {/* Right Column - Examples */}
              <div className="t-[14px] h-min-content w-[40%] space-y-2 rounded-xl bg-[#1119238A] p-6">
                <h3 className="mb-3 flex items-center gap-2 font-bold text-white">
                  Example 1
                </h3>
                <p className="text-sm font-normal text-white">
                  Your Active amount is:{' '}
                  <span className="font-normal text-[#64B5F6]">100.22</span>,
                  recognized as{' '}
                  <span className="font-normal text-[#64B5F6]">a pair</span>,
                  Decimal point is an invalid amount, Block hash of this Active:
                  646rgd**d9f9{' '}
                  <span className="font-normal text-[#64B5F6]">2</span> The last
                  digit of block hash 2 is determined as{' '}
                  <span className="font-normal text-[#64B5F6]">a pair</span>,
                  the result is{' '}
                  <span className="font-normal text-[#64B5F6]">a win</span>.
                  System refund amount: 100*1.95=195.00
                </p>
                <h3 className="font-bold text-white">Example 2</h3>
                <p className="text-sm font-normal text-white">
                  Your Active amount is:{' '}
                  <span className="font-normal text-[#64B5F6]">9</span>, limit:
                  10 - 900 USDT, No Active amount{' '}
                  <span className="font-normal text-[#64B5F6]">
                    Within the specified bet value
                  </span>
                  , the platform directly calculates the Active amount for
                  invalid bets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bid Address and Wallet Section */}
        <div className="mb-6 rounded-lg bg-[#111923] p-6 shadow-xl [@media(max-width:768px)]:hidden">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#FFFFFF]">
            {t('hashgame.bettingAddress')}
            <span className="text-xs font-bold">
              {t('hashgame.useDecWallet')}
            </span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="p-3Icon.svg flex w-[80%] justify-between rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#2a3546] p-3 opacity-80">
              <div className="flex items-center">
                <span className="text-xs font-bold text-gray-300">
                  <span className="text-[#2283F6]">TXS3</span>
                  <span className="text-[#FFFFFF]">
                    PfAUShemKkoBWRUFsUkGBSrZGagh6X
                  </span>
                  <span className="text-[#2283F6]">gh6X</span>
                </span>
              </div>
              <img src="/icons/copy.svg" alt="copy" className="h-6 w-6" />
            </div>
            <div className="relative w-1/5">
              <TDButton type="red" className="w-full">
                <span className="h-9 text-sm leading-9">
                  {t('hashgame.activeAddress')}
                </span>
              </TDButton>
            </div>
          </div>
          <h2 className="mb-4 mt-5 hidden items-center gap-2 text-sm font-bold text-[#FFFFFF] md:flex">
            {t('hashgame.lotteryRule')}
          </h2>
          <div className="hidden rounded-lg border-2 border-[#0C60FF] bg-[#2283F621] shadow-inner md:flex">
            <div className="flex w-[50%] items-center justify-center gap-3 border-r border-[#0C60FF] p-10">
              <span className="text-sm font-bold text-white">Odds:</span>
              <div className="rounded-lg bg-[#111923] px-5 py-1.5">
                <span className="text-sm font-bold text-[#0C60FF]">1:1.95</span>
              </div>
            </div>
            <div className="flex w-[50%] items-center justify-center gap-3">
              <span className="text-sm font-bold text-white">
                {t('hashgame.limitation')}:
              </span>
              <div className="mt-2 rounded-lg bg-[#111923] px-3 py-2">
                <p className="text-sm font-medium text-[#2283F6]">
                  10-15000 <span className="text-white">USDT</span>
                </p>
                <p className="text-sm font-medium text-[#2283F6]">
                  2-30000 <span className="text-white">TRX</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 text-sm font-normal text-[#2283F6] opacity-80 [@media(max-width:768px)]:hidden">
            {t('hashgame.notetitle')}
          </div>
          <div className="mt-4 text-sm font-normal text-[#FFFFFF] opacity-80 [@media(max-width:768px)]:hidden">
            {t('hashgame.notecontent')}
          </div>
        </div>

        {/* Lottery Trend Section */}
        <div className="mb-6 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#111923] px-6 py-4 shadow-xl [@media(max-width:768px)]:hidden">
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="flex items-center gap-2 text-sm font-bold text-white">
                  {t('hashgame.lotteryTrend')}
                </h2>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 shadow-lg">
                      <span className="text-xs font-bold text-white">O</span>
                    </div>
                    <span className="text-sm text-white">91</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 shadow-lg">
                      <span className="text-xs font-bold text-black">E</span>
                    </div>
                    <span className="text-sm text-white">112</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 mt-2 flex items-center rounded-lg">
              <div className="flex gap-2 rounded-lg bg-[#FFFFFF0A] p-2">
                <div
                  className={`flex cursor-pointer items-center gap-2 rounded-lg border border-none border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.13)] px-8 py-1.5 text-sm font-bold text-gray-300 transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]`}
                >
                  {t('hashgame.blockTrend')}
                </div>
                <div
                  className={`flex cursor-pointer items-center gap-2 rounded-lg border border-none border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.13)] px-8 py-1.5 text-sm font-bold text-gray-300 transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]`}
                >
                  {t('hashgame.myTrend')}
                </div>
              </div>
            </div>
          </div>
          <GameBoard board={board} />
          <div className="flex items-center gap-2 rounded-lg bg-[#FFFFFF0A] p-4 text-sm text-gray-300">
            <img src="/icons/Vector.svg" alt="info" className="h-5 w-5" />
            <p className="opacity-80">{t('hashgame.roadMap')}</p>
          </div>
        </div>

        {/* Tutorial Video Section */}
        <div className="mb-6 rounded-lg bg-[url('/images/game-video.png')] bg-cover bg-center p-6">
          <div className="overflow-none relative rounded-lg md:p-4">
            {/* Left Side - Text and Button */}
            <div className="flex h-full flex-col items-start justify-center">
              <h2 className="mb-6 text-left text-sm font-bold text-white md:text-lg">
                Hash even and odd {t('help.video')}
              </h2>
              <div className="relative">
                <div className="relative transform rounded-lg bg-[#2283F6] px-8 py-3 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(#0a56e6,#2590e6)] active:translate-y-0">
                  {t('hashgame.viewPlay')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Betting Record Section */}
        <div className="hidden rounded-lg border border-[rgba(12,96,255,0.1)] bg-[#111923] p-6 shadow-xl md:block">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-[18px] font-bold text-white">
              {t('hashgame.bettingRecord')}
            </h2>
            <div className="text-sm font-bold text-[#0C60FF] transition-colors hover:text-[#64B5F6]">
              {t('app.showMore')}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4 p-2 px-8">
            <span className="text-xs font-bold text-[#55657E] opacity-80">
              {t('wallet.currency')}
            </span>
            <span className="text-xs font-bold text-[#55657E] opacity-80">
              {t('hashgame.betLimit')}
            </span>
            <span className="text-xs font-bold text-[#55657E] opacity-80">
              {t('hashgame.betAmount')}
            </span>
            <span className="text-right text-xs font-bold text-[#55657E] opacity-80">
              {t('hashgame.toDayWinOrLoss')}
            </span>
          </div>
          <div className="space-y-3">
            {/* USDT Row */}
            <div className="rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#1C2532] p-4 px-8 shadow-md">
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    alt="usdt"
                    className="h-5 w-5"
                  />
                  <span className="mt-1 text-sm font-bold text-white">
                    USDT
                  </span>
                </div>
                <div className="text-white">0</div>
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    alt="tron"
                    className="h-5 w-5"
                  />
                  <span className="text-white">4.77000000</span>
                </div>
                <div className="ml-6 flex items-center justify-end gap-1 font-medium text-crimson">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    alt="tron"
                    className="h-5 w-5"
                  />
                  <span>3214.789</span>
                </div>
              </div>
            </div>

            {/* TRX Row */}
            <div className="rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#1C2532] p-4 px-8 shadow-md">
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/coin-icon/TRX.svg"
                    alt="tron"
                    className="h-5 w-5"
                  />
                  <span className="mt-1 text-sm font-bold text-white">TRX</span>
                </div>
                <div className="text-white">0</div>
                <div className="flex items-center gap-2">
                  <img
                    src="/icons/coin-icon/BTC.svg"
                    alt="tron"
                    className="h-5 w-5"
                  />
                  <span className="text-white">7.60300</span>
                </div>
                <div className="flex items-center justify-end gap-1 font-medium text-crimson">
                  <img
                    src="/icons/coin-icon/TRX.svg"
                    alt="tron"
                    className="h-5 w-5"
                  />
                  <span>5785.685</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View Example Section */}
        <div className="t-[14px] h-min-content hidden w-full space-y-2 rounded-xl bg-[#FFFFFF0A] p-6 [@media(max-width:768px)]:block">
          <h3 className="mb-3 flex items-center gap-2 font-bold text-white">
            Example 1
          </h3>
          <p className="text-sm font-normal text-white opacity-80">
            Your Active amount is:{' '}
            <span className="font-normal text-[#64B5F6]">100.22</span>,
            recognized as{' '}
            <span className="font-normal text-[#64B5F6]">a pair</span>, Decimal
            point is an invalid amount, Block hash of this Active: 646rgd**d9f9{' '}
            <span className="font-normal text-[#64B5F6]">2</span> The last digit
            of block hash 2 is determined as{' '}
            <span className="font-normal text-[#64B5F6]">a pair</span>, the
            result is <span className="font-normal text-[#64B5F6]">a win</span>.
            System refund amount: 100*1.95=195.00
          </p>
          <h3 className="font-bold text-white">Example 2</h3>
          <p className="text-sm font-normal text-white opacity-80">
            Your Active amount is:{' '}
            <span className="font-normal text-[#64B5F6]">9</span>, limit: 10 -
            900 USDT, No Active amount{' '}
            <span className="font-normal text-[#64B5F6]">
              Within the specified bet value
            </span>
            , the platform directly calculates the Active amount for invalid
            bets.
          </p>
        </div>
      </div>
      <MenuModal isOpen={isMenuModalOpen} onClose={handleCloseMenuModal} />
    </>
  )
}

export default TransferBettingLayout
