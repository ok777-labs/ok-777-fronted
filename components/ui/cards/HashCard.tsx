'use client'
// this is the game card
import React from 'react'
import { Copy, Info, ArrowLeftRight } from 'lucide-react'
import TDButton from '@/components/ui/Button/TDButton'
import Link from 'next/link'
import { useI18n } from '@/context/I18nProvider'

export interface TypeTwoProps {
  title: string
  chances: string
  bettingAddress: string
  leftButtonLink: string
  rightButtonLink: string
  background: string
}

const HashCard: React.FC<TypeTwoProps> = ({
  title,
  chances,
  bettingAddress,
  leftButtonLink,
  rightButtonLink,
  background,
}) => {
  const { t } = useI18n()
  const handleCopy = () => navigator.clipboard.writeText(bettingAddress)

  return (
    <div
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative flex w-full flex-col overflow-hidden rounded-lg p-3 text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl sm:p-2"
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-60" />
      <div className="relative z-10 flex h-full flex-col">
        {/* Header Section */}
        <div className="mb-2 flex items-center justify-between sm:mb-3">
          <div className="flex min-w-0 flex-1 items-center gap-1 sm:gap-2">
            <h1 className="truncate text-[0.85rem] font-bold text-white">
              {title}
            </h1>
            <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30 sm:h-5 sm:w-5">
              <Info className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3" />
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center gap-1 sm:gap-2">
            <span className="text-[.9rem] font-medium text-gray-300 sm:text-[1rem]">
              {t('hashgame.chances')}:
            </span>
            <span className="rounded bg-red-500/20 px-1 py-0.5 text-sm font-bold text-red-400 sm:px-1.5 sm:py-1">
              {chances}
            </span>
          </div>
        </div>

        {/* Betting Address Section */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium text-white">
              {t('hashgame.bettingAddress')}
            </span>
            <span className="text-sm leading-tight text-gray-400">
              <span
                className="block overflow-hidden"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  lineHeight: '1.2',
                  maxHeight: '2.4em',
                }}
              >
                {t('hashgame.useDecWallet')}
              </span>
            </span>
          </div>
          <div className="relative">
            <div className="border-gray-600/50 flex h-[2rem] w-full items-center rounded-lg bg-mirage-54 transition-colors hover:border-gray-500/70">
              <span className="ml-2 pr-8 font-mono text-xs font-medium leading-tight text-gray-300">
                <span
                  className="block w-[85%] overflow-hidden text-ellipsis"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.5',
                    maxHeight: '2.4em',
                  }}
                >
                  {bettingAddress}
                </span>
              </span>
            </div>
            <div
              onClick={handleCopy}
              className="bg-gray-700/50 hover:bg-gray-600/70 absolute right-1.5 top-1/2 flex h-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded transition-colors sm:right-2"
            >
              <Copy className="h-[1rem] text-gray-300" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-1.5 py-2 sm:gap-2">
          {/* <Button
            variant="green"
            className="min-h-[28px] flex-1 sm:min-h-[32px]"
          >
            <Link
              className="flex items-center justify-center gap-1 sm:gap-1.5"
              href={leftButtonLink}
            >
              <ArrowLeftRight className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
              <span className="text-xs font-medium sm:text-[11px]">
                Junior field
              </span>
            </Link>
          </Button>
          <Button
            variant="blue"
            className="min-h-[28px] flex-1 sm:min-h-[32px]"
          >
            <Link
              href={rightButtonLink}
              className="flex items-center justify-center"
            >
              <span className="text-xs font-medium sm:text-[11px]">Put</span>
            </Link>
          </Button> */}
          <Link href={leftButtonLink} className="w-full">
            <TDButton type="red" className="w-full">
              <span className="h-9 text-sm leading-9">进入游戏</span>
            </TDButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HashCard
