'use client'

import React from 'react'
import DefaultPageLayout from '@/components/hashgames/PageBettingLayout'
import { User } from '@/components/ui/icons'
const BigSmallDefault: React.FC = () => {
  const bettingOptions = [
    {
      id: 'small',
      label: 'SMALL',
      color: '#ED1D49',
      progress: 57,
      amount: '10038',
      users: 12,
      odds: '1 : 1.95',
    },
    {
      id: 'big',
      label: 'BIG',
      color: '#FFB636',
      progress: 43,
      amount: '7592',
      users: 11,
      odds: '1 : 1.95',
    },
  ]

  return (
    <DefaultPageLayout>
      <div className="flex w-full items-start gap-2 rounded-xl bg-white/[0.04] p-2 md:gap-4 md:p-8">
        {/* ODD Section */}
        <div className="flex flex-1 flex-col items-center gap-2">
          <div className="flex w-full items-center justify-between pb-4">
            <div className="flex flex-col items-start">
              <div className="text-base font-bold">
                <span className="text-casper">$</span>
                <span className="text-white">10038</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4 text-casper" />
                <span className="text-sm font-bold text-casper">12</span>
              </div>
            </div>
            {/* Progress Circle for ODD */}
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
                  stroke="#ED1D49"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${57 * 1.13} ${(100 - 57) * 1.13}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-crimson">57%</span>
              </div>
            </div>
          </div>
          <div className="flex h-9 items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-mirage px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
            <span className="text-sm font-bold text-white">$0</span>
          </div>
          <div className="text-2xl font-bold text-crimson">SMALL</div>
          <div className="flex h-9 items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-mirage px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
            <span className="text-sm font-bold text-white">1 : 1.95</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[188px] w-[1px] bg-white/[0.04]"></div>

        {/* EVEN Section */}
        <div className="flex flex-1 flex-col items-center gap-2">
          <div className="flex w-full items-center justify-between pb-4">
            {/* Progress Circle for EVEN */}
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
                  stroke="#FFB636"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${43 * 1.13} ${(100 - 43) * 1.13}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-yellow-orange">
                  43%
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-right text-base font-bold">
                <span className="text-casper">$</span>
                <span className="text-white">7592</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-casper">11</span>
                <User className="h-4 w-4 text-casper" />
              </div>
            </div>
          </div>
          <div className="flex h-9 items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-mirage px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
            <span className="text-sm font-bold text-white">$0</span>
          </div>
          <div className="text-2xl font-bold text-yellow-orange">BIG</div>
          <div className="flex h-9 items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-mirage px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
            <span className="text-sm font-bold text-white">1 : 1.95</span>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  )
}

export default BigSmallDefault
