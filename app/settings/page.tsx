'use client'

import React, { useEffect, useMemo, useState, Suspense } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import UserSquareIcon from '@/components/ui/icons/user-square'
import FingerprintIcon from '@/components/ui/icons/fingerprint'
import WalletIcon from '@/components/ui/icons/wallet'
import ChecklistIcon from '@/components/ui/icons/checklist'
import AccountInfo from '@/features/settings/components/AccountInfo'
import Security from '@/features/settings/components/Security'
import WalletAdd from '@/features/settings/components/WalletAdd'
import Barrier from '@/features/settings/components/Barrier'
import ChevronDownIcon from '@/components/ui/icons/chevron-down'
import SettingsTabModal from '@/components/modals/SettingsTabModal'

function SettingsPageContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tabSlugToName = useMemo(
    () =>
      ({
        accountinfo: 'Account information',
        security: 'Security',
        wallet: 'Wallet Address',
      }) as const,
    []
  )

  const tabNameToSlug = useMemo(
    () =>
      ({
        'Account information': 'accountinfo',
        Security: 'security',
        'Wallet Address': 'wallet',
      }) as const,
    []
  )

  const [activeTab, setActiveTab] = useState<string>('Account information')

  useEffect(() => {
    const fromQuery = searchParams.get('tab')
    if (fromQuery && tabSlugToName[fromQuery as keyof typeof tabSlugToName]) {
      setActiveTab(tabSlugToName[fromQuery as keyof typeof tabSlugToName])
    }
  }, [searchParams, tabSlugToName])

  useEffect(() => {
    console.log('Active tab changed to:', activeTab)
  }, [activeTab])

  const updateQuery = (nextTabName: string) => {
    const slug = tabNameToSlug[nextTabName as keyof typeof tabNameToSlug]
    if (slug) {
      const params = new URLSearchParams(searchParams.toString())
      params.set('tab', slug)
      router.replace(`${pathname}?${params.toString()}`)
    }
  }

  const handleTabSelect = (tabName: string) => {
    console.log('Tab selected:', tabName)
    setActiveTab(tabName)
    updateQuery(tabName)
  }

  const navigationItems = [
    {
      name: 'Account information',
      key: 'account',
      icon: <UserSquareIcon className="h-6 w-6" />,
    },
    {
      name: 'Security',
      key: 'security',
      icon: <FingerprintIcon className="h-6 w-6" />,
    },

    {
      name: 'Wallet Address',
      key: 'walletAdd',
      icon: <WalletIcon className="h-6 w-6" />,
    },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountInfo />
      case 'security':
        return <Security />
      case 'walletAdd':
        return <WalletAdd />
      default:
        return <AccountInfo />
    }
  }

  return (
    <>
      <div className="mx-auto max-w-6xl flex flex-col justify-between gap-2 p-2 lg:py-6 lg:pb-8">
        {/* Left Sidebar Navigation */}
        <div className="h-full w-full rounded-lg md:bg-[#FFFFFF0A]">
          <div className="hidden grid-cols-3 gap-3 p-2 md:grid">
            {navigationItems.map(item => (
              <div
                key={item.key}
                onClick={() => handleTabSelect(item.key)}
                className={`flex h-11 w-full items-center gap-3 rounded-lg transition-all duration-200 cursor-pointer px-4 ${
                  activeTab === item.key
                    ? 'bg-[#FFFFFF14] text-white shadow-lg'
                    : 'text-gray-300 hover:bg-[rgba(255,255,255,0.08)]'
                }`}
              >
                {item.icon}
                <span className="text-sm font-semibold">{item.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:hidden">
            <div
              onClick={() => setIsModalOpen(true)}
              className="flex h-12 items-center justify-between rounded-lg bg-white-4 p-2 text-sm font-semibold text-casper transition-colors hover:bg-white-8"
            >
              <span>
                <span>{activeTab}</span>
              </span>
              <ChevronDownIcon />
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div key={activeTab} className="flex-1 rounded-lg lg:bg-white-4">
          {renderContent()}
        </div>
      </div>

      {/* Settings Tab Modal */}
      <SettingsTabModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeTab={activeTab}
        onTabSelect={handleTabSelect}
      />
    </>
  )
}

// Wrapper component with Suspense boundary
export default function AllianceClient() {
  return (
    <Suspense fallback={<div>Loading settings...</div>}>
      <SettingsPageContent />
    </Suspense>
  )
}
