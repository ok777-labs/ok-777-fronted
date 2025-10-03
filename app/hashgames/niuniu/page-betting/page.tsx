'use client'

import React from 'react'
import PageBettingLayout from '@/components/hashgames/PageBettingLayout'
const NiuniuDefault: React.FC = () => {
  const bullRatios = [
    { name: 'Bull1', ratio: '1:1' },
    { name: 'Bull2', ratio: '1:2' },
    { name: 'Bull3', ratio: '1:3' },
    { name: 'Bull4', ratio: '1:4' },
    { name: 'Bull5', ratio: '1:5' },
    { name: 'Bull6', ratio: '1:6' },
    { name: 'Bull7', ratio: '1:7' },
    { name: 'Bull8', ratio: '1:8' },
    { name: 'Bull9', ratio: '1:9' },
    { name: 'Bull10', ratio: '1:10' },
  ]

  // Note: Removed NiuniuBettingSection (missing component) to fix build

  return (
    <PageBettingLayout>
      <div className="w-full">
        <div className="space-y-4 rounded-xl md:bg-white-4 md:p-8">
          {/* Bull Ratios Grid */}
          <div className="rounded-lg bg-white-4 p-2">
            <div className="grid grid-cols-10 gap-2">
              {bullRatios.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="font-montserrat text-[10px] font-normal leading-none text-casper">
                    {item.name}
                  </div>
                  <div className="font-montserrat text-[10px] font-normal leading-none text-dodger-blue">
                    {item.ratio}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4 px-4">
            {/* Balance and User Info */}
            <div className="space-y-2">
              <div className="text-left">
                <span className="font-montserrat text-base font-bold text-casper">
                  $
                </span>
                <span className="font-montserrat text-base font-bold text-white">
                  10038
                </span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M8 1.83334C7.11595 1.83334 6.2681 2.18453 5.64298 2.80965C5.01786 3.43478 4.66667 4.28262 4.66667 5.16668C4.66667 6.05073 5.01786 6.89858 5.64298 7.5237C6.2681 8.14882 7.11595 8.50001 8 8.50001C8.88406 8.50001 9.7319 8.14882 10.357 7.5237C10.9821 6.89858 11.3333 6.05073 11.3333 5.16668C11.3333 4.28262 10.9821 3.43478 10.357 2.80965C9.7319 2.18453 8.88406 1.83334 8 1.83334ZM2.66667 15.1667H13.3333C13.7 15.1667 14 14.8667 14 14.5V13.8333C14 11.26 11.9067 9.16668 9.33333 9.16668H6.66667C4.09333 9.16668 2 11.26 2 13.8333V14.5C2 14.8667 2.3 15.1667 2.66667 15.1667Z"
                    fill="#A7B5CA"
                  />
                </svg>
                <span className="font-montserrat text-sm font-bold leading-none text-casper">
                  12
                </span>
              </div>
            </div>
          </div>

          {/* $0 Button */}
          <div className="flex justify-center">
            <div className="flex h-9 items-center justify-center rounded-lg border border-white-8 bg-mirage px-4 shadow-[0_1px_0_0_rgba(255,255,255,0.16)_inset] backdrop-blur-[32px]">
              <span className="font-montserrat text-sm font-bold text-white">
                $0
              </span>
            </div>
          </div>

          {/* BULL PLAYER Title */}
          <div className="flex items-center justify-center">
            <h1 className="font-montserrat text-2xl font-bold text-yellow-orange">
              BULL PLAYER
            </h1>
          </div>

          {/* 1:1.95 Button */}
          <div className="flex justify-center">
            <div className="flex h-9 items-center justify-center rounded-lg border border-white-8 bg-mirage px-4 shadow-[0_1px_0_0_rgba(255,255,255,0.16)_inset] backdrop-blur-[32px]">
              <span className="font-montserrat text-sm font-bold text-white">
                1 : 1.95
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageBettingLayout>
  )
}

export default NiuniuDefault
