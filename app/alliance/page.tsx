'use client'

import React, { useEffect, useMemo, useState, Suspense } from 'react'
import InviteFriends from '@/features/alliance/components/InviteFriends'
import Management from '@/features/alliance/components/Management'
import Performance from '@/features/alliance/components/Performance'
import Report from '@/features/alliance/components/Report'
import Introduction from '@/features/alliance/components/Introduction'
import AllianceBottomBar from '@/features/alliance/components/AllianceBottomBar'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useI18n } from '@/context/I18nProvider'

function AlliancePageContent() {
  const { t } = useI18n()

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const tabSlugToName = useMemo(
    () =>
      ({
        invite: 'invite',
        management: 'management',
        performance: 'performance',
        report: 'report',
        introduction: 'introduction',
      }) as const,
    []
  )

  const [activeTab, setActiveTab] = useState<string>('invite')

  useEffect(() => {
    const fromQuery = searchParams.get('tab')
    if (fromQuery && tabSlugToName[fromQuery as keyof typeof tabSlugToName]) {
      setActiveTab(tabSlugToName[fromQuery as keyof typeof tabSlugToName])
    }
  }, [searchParams, tabSlugToName])

  const updateQuery = (nextTabName: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('tab', tabSlugToName[nextTabName as keyof typeof tabSlugToName])
    router.replace(`${pathname}?${params.toString()}`)
  }

  const navigationItems = [
    {
      name: t('alliance.inviteFriends'),
      key: 'invite',
      icon: '/icons/user-plus.svg',
    },
    {
      name: t('alliance.management'),
      key: 'management',
      icon: '/icons/group.svg',
    },
    {
      name: t('alliance.performance'),
      key: 'performance',
      icon: '/icons/chart-network.svg',
    },
    {
      name: t('alliance.report'),
      key: 'report',
      icon: '/icons/file-report.svg',
    },
    {
      name: t('alliance.introduction'),
      key: 'introduction',
      icon: '/icons/form.png',
    },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'invite':
        return <InviteFriends />
      case 'management':
        return <Management />
      case 'performance':
        return <Performance />
      case 'report':
        return <Report />
      case 'introduction':
        return <Introduction />
      default:
        return <InviteFriends />
    }
  }

  return (
    <>
      <div className="m-auto flex max-w-6xl flex-col justify-between gap-4 p-2 pb-16 md:pb-0">
        {/* Left Sidebar Navigation */}
        <div className="hidden h-full w-full rounded-lg bg-[#FFFFFF0A] lg:block">
          <div className="grid grid-cols-5 gap-3 p-3">
            {navigationItems.map(item => (
              <div
                key={item.key}
                onClick={() => {
                  setActiveTab(item.key)
                  updateQuery(item.key)
                }}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                  activeTab === item.key
                    ? 'bg-[#FFFFFF14] text-white shadow-lg'
                    : 'text-gray-300 hover:bg-[rgba(255,255,255,0.08)]'
                }`}
              >
                <img src={item.icon} alt={item.key} />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1">{renderContent()}</div>
      </div>

      {/* Mobile Bottom Navigation */}
      <AllianceBottomBar />
    </>
  )
}

// Wrapper component with Suspense boundary
export default function AllianceClient() {
  const { t } = useI18n()
  return (
    <Suspense fallback={<div>{t('app.loading')}</div>}>
      <AlliancePageContent />
    </Suspense>
  )
}
