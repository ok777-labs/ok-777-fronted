'use client'

import React from 'react'
import { useT } from '@/context/I18nProvider'

export default function ExampleI18nUsage() {
  const t = useT()

  return (
    <div className="rounded-lg bg-gray-100 p-4">
      <h2 className="mb-4 text-xl font-bold">{t('app.title')}</h2>

      <div className="space-y-2">
        <p>
          <strong>Navigation:</strong>
        </p>
        <ul className="ml-4 list-inside list-disc">
          <li>{t('navigation.lobby')}</li>
          <li>{t('navigation.games')}</li>
          <li>{t('navigation.wallet')}</li>
          <li>{t('navigation.settings')}</li>
        </ul>

        <p>
          <strong>Games:</strong>
        </p>
        <ul className="ml-4 list-inside list-disc">
          <li>{t('games.play')}</li>
          <li>{t('games.bet')}</li>
          <li>{t('games.balance')}</li>
        </ul>

        <p>
          <strong>Messages with parameters:</strong>
        </p>
        <p>{t('messages.jackpotWon', { amount: '$1,000,000' })}</p>

        <p>
          <strong>Status:</strong>
        </p>
        <p>
          {t('status.active')} - {t('status.completed')}
        </p>
      </div>
    </div>
  )
}
