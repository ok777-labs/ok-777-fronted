'use client'

import React from 'react'
import { useT } from '@/context/I18nProvider'
import { useLanguage } from '@/context/LanguageProvider'

export default function ExampleI18nIntegration() {
  const t = useT()
  const { currentLanguage } = useLanguage()

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          {t('app.title')} - {t('settings.language')}
        </h2>
        <div className="text-sm text-gray-600">
          {t('settings.language')}: {currentLanguage.name}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-blue-600">
            {t('navigation.games')}
          </h3>
          <div className="space-y-2">
            <div className="w-full rounded-lg bg-blue-50 px-4 py-2 text-left transition-colors hover:bg-blue-100">
              {t('games.slots')}
            </div>
            <div className="w-full rounded-lg bg-blue-50 px-4 py-2 text-left transition-colors hover:bg-blue-100">
              {t('games.live')}
            </div>
            <div className="w-full rounded-lg bg-blue-50 px-4 py-2 text-left transition-colors hover:bg-blue-100">
              {t('games.table')}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-green-600">
            {t('wallet.title')}
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
              <span className="text-gray-700">{t('wallet.balance')}:</span>
              <span className="font-bold text-green-600">$1,234.56</span>
            </div>
            <div className="w-full rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
              {t('wallet.deposit')}
            </div>
            <div className="w-full rounded-lg bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700">
              {t('wallet.withdraw')}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-purple-600">
            {t('promotions.title')}
          </h3>
          <div className="space-y-2">
            <div className="rounded-lg bg-purple-50 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold">{t('promotions.welcome')}</span>
                <span className="text-sm text-purple-600">
                  {t('status.active')}
                </span>
              </div>
              <p className="mb-2 text-sm text-gray-600">
                {t('messages.bonusClaimed')}
              </p>
              <div className="w-full rounded bg-purple-600 px-3 py-1 text-sm text-white transition-colors hover:bg-purple-700">
                {t('promotions.claim')}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-orange-600">
            {t('help.title')}
          </h3>
          <div className="space-y-2">
            <div className="w-full rounded-lg bg-orange-50 px-4 py-2 text-left transition-colors hover:bg-orange-100">
              {t('help.faq')}
            </div>
            <div className="w-full rounded-lg bg-orange-50 px-4 py-2 text-left transition-colors hover:bg-orange-100">
              {t('help.liveChat')}
            </div>
            <div className="w-full rounded-lg bg-orange-50 px-4 py-2 text-left transition-colors hover:bg-orange-100">
              {t('help.contact')}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-gray-50 p-4">
        <h4 className="mb-2 font-semibold">{t('messages.info')}</h4>
        <p className="text-sm text-gray-600">
          {t('messages.jackpotWon', { amount: '$1,000,000' })}
        </p>
      </div>
    </div>
  )
}
