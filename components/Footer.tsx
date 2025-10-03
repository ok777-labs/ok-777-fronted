'use client'

import React from 'react'
import Link from 'next/link'
import XIcon from './ui/icons/XIcon'
import InstagramIcon from './ui/icons/InstagramIcon'
import YouTubeIcon from './ui/icons/YouTubeIcon'
import DiscordIcon from './ui/icons/DiscordIcon'
import TikTokIcon from './ui/icons/TikTokIcon'
import BlackButton from './ui/Button/BlackButton'
import FacebookIcon from './ui/icons/FacebookIcon'
import TelegramIcon from './ui/icons/TelegramIcon'
import { useI18n } from '../context/I18nProvider'
import TDButton from '@/components/ui/Button/TDButton'

const coins = ['USDT', 'SOL', 'BNB', 'LTC', 'ETC', 'TRX', 'BTC', 'TON'] as const

const Footer: React.FC = () => {
  const { t } = useI18n()
  return (
    <footer className="w-full px-4 py-8 pb-[5rem] text-gray-300 lg:mb-[2rem] lg:bg-[#1C2532]">
      <div className="mx-auto max-w-7xl">
        <div className="hidden gap-8 lg:flex">
          {/* Left Section - Company Info */}
          <div className="w-[50%] md:col-span-2">
            {/* Logo */}
            <div className="mb-4 flex items-center">
              <img src="/images/logo.svg" alt="777 Gaming Logo" />
            </div>

            {/* Company Description */}
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              {t('licence.company')}
            </p>

            {/* Supported Currencies */}
            <div className="mb-6 hidden lg:block">
              <h4 className="mb-3 font-medium text-white">
                {t('app.supportedCurrencies')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {coins.map((item, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={'/icons/coin-icon/' + item + '.svg'}
                      className="h-8 w-8"
                      alt="coin"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section - General Information */}
          <div className="w-[25%]">
            <h3 className="mb-4 font-semibold text-white">
              {t('generalInformation.generalInformation')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t('generalInformation.commonProblem')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t('generalInformation.responsibleGambling')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t('generalInformation.honestlyAndFairly')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t('generalInformation.termsOfService')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t('generalInformation.privacyPolicy')}
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - About Us */}
          <div className="w-[25%]">
            <h3 className="mb-4 font-semibold text-white">
              <span>{t('aboutUs.aboutUs')}</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t('help.onlineService')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Skype
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="block w-full lg:hidden">
          <h4 className="mb-3 font-medium text-white">
            <span>Support/Legal support</span>
          </h4>
          <div className="flex flex-col gap-1 overflow-hidden rounded-[0.5rem]">
            <div className="flex h-[3rem] items-center justify-between bg-[#2a3546] px-4">
              <span className="text-[0.875rem] font-bold text-[#A7B5CA]">
                Common Problem
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
            <div className="flex h-[3rem] items-center justify-between bg-[#2a3546] px-4">
              <span className="text-[0.875rem] font-bold text-[#A7B5CA]">
                Responsible gambling
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
            <div className="flex h-[3rem] items-center justify-between bg-[#2a3546] px-4">
              <span className="text-[0.875rem] font-bold text-[#A7B5CA]">
                Honestly and fairly
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
            <div className="flex h-[3rem] items-center justify-between bg-[#2a3546] px-4">
              <span className="text-[0.875rem] font-bold text-[#A7B5CA]">
                Terms of Service
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
            <div className="flex h-[3rem] items-center justify-between bg-[#2a3546] px-4">
              <span className="text-[0.875rem] font-bold text-[#A7B5CA]">
                Private Policy
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
            <div className="flex h-[3rem] items-center justify-between bg-[#2a3546] px-4">
              <span className="text-[0.875rem] font-bold text-[#A7B5CA]">
                About Us
              </span>
              <Link href="">
                <img src="/icons/arrow-up-right-stroke.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
          {/* Partners and Industry Associations */}
          <div className="w-full lg:w-[50%]">
            <h4 className="my-4 font-medium text-white">
              {t('app.gamblingLicense')}
            </h4>
            <div className="flex gap-3">
              <div>
                <img
                  className="h-8"
                  alt="brand"
                  src="/images/brand/brand.svg"
                />
              </div>
              <div>
                <img src="/images/brand/18.svg" className="h-8" alt="18+" />
              </div>
            </div>
          </div>
          <div className="block w-full lg:hidden">
            <h4 className="my-3 w-full font-medium text-white">
              {t('app.supportedCurrencies')}
            </h4>
            <div className="flex items-center justify-between lg:gap-2">
              {coins.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={'/icons/coin-icon/' + item + '.svg'}
                    className="h-8 w-8"
                    alt="coin"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Social Media Links */}
          <div className="w-full lg:w-[50%]">
            <h4 className="my-3 text-left font-medium text-white">
              {t('app.communityEntrance')}
            </h4>
            <div className="flex justify-between lg:justify-start lg:gap-4">
              <BlackButton>
                <TelegramIcon className="h-4 w-4" />
              </BlackButton>
              <BlackButton>
                <FacebookIcon className="h-4 w-4" />
              </BlackButton>
              <BlackButton>
                <XIcon className="h-4 w-4" />
              </BlackButton>
              <BlackButton>
                <InstagramIcon className="h-4 w-4" />
              </BlackButton>
              <BlackButton>
                <YouTubeIcon className="h-4 w-4" />
              </BlackButton>
              <BlackButton>
                <DiscordIcon className="h-4 w-4" />
              </BlackButton>
              <BlackButton>
                <TikTokIcon className="h-4 w-4" />
              </BlackButton>
            </div>
          </div>
        </div>
        <div className="block w-full md:col-span-2 lg:hidden">
          {/* Logo */}
          <div className="my-4 flex items-center">
            <img src="/images/logo.svg" alt="777 Gaming Logo" />
          </div>

          {/* Company Description */}
          <p className="text-sm leading-relaxed text-gray-400">
            {t('licence.company')}
          </p>

          {/* Supported Currencies */}
          <div className="mb-6 hidden pl-[12px] lg:block">
            <h4 className="mb-3 font-medium text-white">
              {t('app.supportedCurrencies')}
            </h4>
            <div className="flex justify-between">
              {coins.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={'/icons/coin-icon/' + item + '.svg'}
                    className="h-8 w-8"
                    alt="coin"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section - Social Media & Install App */}
      <div className="fixed bottom-0 right-0 z-10 hidden w-full bg-[rgb(15,23,32)] pl-[248px] lg:block">
        {/* Install App Banner */}
        <div className="flex items-center justify-center gap-3 px-4 py-2">
          <div className="text-2xl">
            <img src="/images/brand/cookie.svg" alt="cookie" />
          </div>
          <div>
            <div className="flex text-sm font-medium text-[#A7B5CA]">
              <span>{t('install.install')}</span>
              <div>
                <img
                  src="/images/logo.svg"
                  className="h-[1.2rem] px-[.5rem]"
                  alt="logo"
                />
              </div>
              <span>{t('install.onTheDesktop')}</span>
            </div>
          </div>
          {/* <div className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
            {t('install.accept')}
          </div> */}
          <TDButton
            type="blue"
            className="h-[2.0625rem] w-[5.3125rem] rounded-lg"
          >
            <span className="text-[0.85rem]">{t('install.accept')}</span>
          </TDButton>
          {/* <BlackButton>
            <span className="px-2.5">
              <span>X</span>
            </span>
          </BlackButton> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
