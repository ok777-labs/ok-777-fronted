'use client'

import React from 'react'
import PageBettingLayout from '@/components/hashgames/PageBettingLayout'
import { User } from '@/components/ui/icons'
const BankerPlayerDefault: React.FC = () => {
  const mockData = [
    { type: 'banker', color: 'crimson', ratio: '1 : 1.95', percent: 100 },
    { type: 'tie', color: 'malachite', ratio: '1 : 8', percent: 0 },
    { type: 'player', color: 'yellow-orange', ratio: '1 : 1.95', percent: 0 },
  ]

  return (
    <PageBettingLayout>
      <div className="flex w-full items-start gap-4 rounded-xl bg-white/[0.04] p-2">
        {/* bnaker Section */}
        {mockData.map(item => (
          <div
            key={item.type}
            className="flex flex-1 flex-col items-center gap-8"
          >
            <div className="flex w-full items-center justify-around gap-1 sm:justify-center">
              {/* Progress Circle for banker */}
              <div className="relative h-10 w-10">
                <svg
                  className="h-10 w-10 -rotate-90 transform"
                  viewBox="0 0 40 40"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="rgba(255,255,255,0.13)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke={item.color}
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${item.percent * 1.13} ${
                      (100 - item.percent) * 1.13
                    }`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-xs font-bold text-${item.color}`}>
                    {item.percent}%
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-right text-base font-bold">
                  <span className="text-casper">$</span>
                  <span className="text-white">7592</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 text-casper" />
                  <span className="text-sm font-bold text-casper">11</span>
                </div>
              </div>
            </div>
            <div className="flex h-9 items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-mirage px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">$0</span>
            </div>
            <div className={`text-lg font-bold text-${item.color}`}>
              {item.type.toUpperCase()}
            </div>
            <div className="flex h-9 items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-mirage px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">{item.ratio}</span>
            </div>
          </div>
        ))}
      </div>
    </PageBettingLayout>
  )
}

export default BankerPlayerDefault
