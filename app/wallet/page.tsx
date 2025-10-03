'use client'

import React, { useEffect, useMemo, useState, Suspense } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Deposit from '@/features/wallet/components/Deposit'
import Withdraw from '@/features/wallet/components/Withdraw'
import Swap from '@/features/wallet/components/Swap'
import Transaction from '@/features/wallet/components/Transaction'
import GameHistory from '@/features/wallet/components/GameHistory'
import DataStatistics from '@/features/wallet/components/DataStatistics'
import CurrencyNotesIcon from '@/components/ui/icons/currency-notes'
import PrintDollarIcon from '@/components/ui/icons/print-dollar'
import SwapDiagonalIcon from '@/components/ui/icons/swap-diagonal'
import ReceiptIcon from '@/components/ui/icons/receipt'
import MedalStarAlt2Icon from '@/components/ui/icons/medal-star-alt-2'
import DoughnutChartIcon from '@/components/ui/icons/doughnut-chart'
import WalletBottomBar from '@/features/wallet/components/WalletBottomBar'
import { useI18n } from '@/context/I18nProvider'

function WalletPageContent() {
  const { t } = useI18n()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const tabSlugToName = useMemo(
    () =>
      ({
        deposit: 'Deposit',
        withdraw: 'Withdraw',
        swap: 'Swap',
        transaction: 'Transaction',
        gamehistory: 'GameHistory',
        datastatistics: 'Datastatistics',
      }) as const,
    []
  )

  const tabNameToSlug = useMemo(
    () =>
      ({
        Deposit: 'deposit',
        Withdraw: 'withdraw',
        Swap: 'swap',
        Transaction: 'transaction',
        GameHistory: 'gamehistory',
        Datastatistics: 'datastatistics',
      }) as const,
    []
  )

  const [activeTab, setActiveTab] = useState<string>('Deposit')

  useEffect(() => {
    const fromQuery = searchParams.get('tab')
    if (fromQuery && tabSlugToName[fromQuery as keyof typeof tabSlugToName]) {
      setActiveTab(tabSlugToName[fromQuery as keyof typeof tabSlugToName])
    }
  }, [searchParams, tabSlugToName])

  const updateQuery = (nextTabName: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('tab', tabNameToSlug[nextTabName as keyof typeof tabNameToSlug])
    router.replace(`${pathname}?${params.toString()}`)
  }

  const navigationItems = [
    { name: 'Deposit', icon: <CurrencyNotesIcon className="h-6 w-6" /> },
    { name: 'Withdraw', icon: <PrintDollarIcon className="h-6 w-6" /> },
    { name: 'Swap', icon: <SwapDiagonalIcon className="h-6 w-6" /> },
    { name: 'Transaction', icon: <ReceiptIcon className="h-6 w-6" /> },
    {
      name: 'GameHistory',
      icon: <MedalStarAlt2Icon className="h-6 w-6" />,
    },
    {
      name: 'Datastatistics',
      icon: <DoughnutChartIcon className="h-6 w-6" />,
    },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'Deposit':
        return <Deposit />
      case 'Withdraw':
        return <Withdraw />
      case 'Swap':
        return <Swap />
      case 'Transaction':
        return <Transaction />
      case 'GameHistory':
        return <GameHistory />
      case 'DataStatistics':
        return <DataStatistics />
      default:
        return <Deposit />
    }
  }

  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-4 pb-4 lg:py-6 lg:pb-8">
        {/* Left Sidebar Navigation */}
        <div className="h-full w-full rounded-lg bg-[#FFFFFF0A] hidden lg:block">
          <div className="flex justify-between gap-1 p-3">
            {navigationItems.map(item => (
              <div
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name)
                  updateQuery(item.name)
                }}
                className={`flex w-fit cursor-pointer items-center gap-1 rounded-lg p-2 transition-all duration-200 ${
                  activeTab === item.name
                    ? 'bg-[#FFFFFF14] text-white shadow-lg'
                    : 'text-gray-300 hover:bg-[rgba(255,255,255,0.08)]'
                }`}
              >
                {item.icon}
                <span className="text-[0.875rem] font-bold">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 rounded-[12px] p-2 lg:bg-white-4">
          {renderContent()}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <WalletBottomBar />
    </>
  )
}

// Wrapper component with Suspense boundary
export default function WalletPage() {
  const { t } = useI18n()

  return (
    <Suspense fallback={<div>{t('app.loading')}</div>}>
      <WalletPageContent />
    </Suspense>
  )
}
