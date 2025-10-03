'use client'

import ChevronLeftIcon from '@/components/ui/icons/chevron-left'
import ChevronRightIcon from '@/components/ui/icons/chevron-right'
import SwiperSlider from '@/components/ui/slider/SwiperSlider'
import { Swiper as SwiperType } from 'swiper'
import { useRef, useState } from 'react'
import InfoCircleIcon from '@/components/ui/icons/info-circle'
import HeadphoneMicIcon from '@/components/ui/icons/headphone-mic'
import ArrowUpRightStrokeIcon from '@/components/ui/icons/arrow-up-right-stroke'
import WhatsAppIcon from '@/components/ui/icons/WhatsAppIcon'
import { FAQ } from '@/features/alliance/components'
import ModalContainer from '@/components/modals/ModalContainer'
import TelegramIcon from '@/components/ui/icons/TelegramIcon'
import { useI18n } from '@/context/I18nProvider'

const data = [1, 2, 3, 4, 5]

const vips = {
  1: [
    {
      level: 'v1',
      promotion: '0',
      moonthly: '0',
      change: '0.20%',
    },
    {
      level: 'v1',
      promotion: '2',
      moonthly: '2',
      change: '0.30%',
    },
    {
      level: 'v3',
      promotion: '5',
      moonthly: '5',
      change: '0.40%',
    },
  ],
  2: [
    {
      level: 'v1',
      deposit: '0',
      income: '0',
      change: '0',
    },
    {
      level: 'v2',
      deposit: '100',
      income: '800',
      change: '200',
    },
    {
      level: 'v3',
      deposit: '500',
      income: '4k',
      change: '1k',
    },
  ],
}

const VipClubPage = () => {
  const { t } = useI18n()
  const faq = [
    {
      question: t('faq.vip-club.level-up-q'),
      answer: t('faq.vip-club.level-up-a'),
    },{
      question: t('faq.vip-club.promotion-rules-q'),
      answer: t('faq.vip-club.promotion-rules-a'),
    },{
      question: t('faq.vip-club.promotion-bonus-q'),
      answer: t('faq.vip-club.promotion-bonus-a'),
    },{
      question: t('faq.vip-club.distribution-time-q'),
      answer: t('faq.vip-club.distribution-time-a'),
    },{
      question: t('faq.vip-club.rebate-q'),
      answer: t('faq.vip-club.rebate-a'),
    },{
      question: t('faq.vip-club.demotion-q'),
      answer: t('faq.vip-club.demotion-a'),
    },{
      question: t('faq.vip-club.retain-membership-rank-q'),
      answer: t('faq.vip-club.retain-membership-rank-a'),
    },
   
  ]
  const swiperRef = useRef<SwiperType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="m-auto flex max-w-6xl flex-col gap-8 p-2">
      <div className="relative flex items-center gap-6 overflow-hidden rounded-[0.75rem] border-[0.0625rem] border-white-13 bg-[linear-gradient(#003F70,#0078D6)] px-6 py-8">
        <img
          src="/images/awards/Silver.svg"
          className="hidden h-[7.25rem] lg:block"
          alt="Silver"
        />
        <div className="flex w-full flex-col gap-6">
          <div className="items-between flex gap-4">
            <div className="flex w-full justify-center lg:hidden">
              <img
                src="/images/awards/Silver.svg"
                className="h-[7.25rem]"
                alt="Silver"
              />
            </div>

            <div className="flex w-full flex-col justify-center">
              <span className="block text-[0.75rem] font-medium text-casper">
                {t('vip.silver')}
              </span>
              <span className="block bg-[linear-gradient(#686150,#CFC8B5,#696150)] bg-clip-text text-[1.5rem] font-bold text-transparent">
                {t('vip.vip4')}
              </span>
              <span
                className="flex cursor-pointer items-center text-[0.75rem] font-medium text-white"
                onClick={() => setIsModalOpen(true)}
              >
                <span>{t('vip.upgradeDetails')} </span>
                <span>
                  <ChevronRightIcon className="h-6 w-6" />
                </span>
              </span>
            </div>
          </div>
          <div className="flex w-full gap-4">
            <div className="flex w-full flex-col gap-2">
              <span className="text-[0.875rem] font-bold text-white">
                {t('vip.currentDeposits')}
              </span>
              <div className="h-[0.375rem] rounded-full bg-white-4">
                <div className="h-full w-[10%] rounded-full bg-french-rose" />
              </div>
              <span className="text-[0.875rem] font-bold text-white">
                <span className="text-yellow-orange">25$</span> / 100$
              </span>
            </div>
            <div className="flex w-full flex-col gap-2">
              <span className="text-[14px] font-bold text-white">
                {t('vip.currentIncomes')}
              </span>
              <div className="h-[6px] rounded-full bg-white-4">
                <div className="h-full w-[10%] rounded-full bg-french-rose" />
              </div>
              <span className="text-[14px] font-bold text-white">
                <span className="text-yellow-orange">25$</span> / 800$
              </span>
            </div>
          </div>
        </div>
        <img
          src="/images/awards/badge.png"
          className="absolute -right-5 -top-8 h-[105%] opacity-20 lg:h-[140%]"
          alt="badge"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-4.5 mb-4 flex gap-2 font-bold text-white">
            {t('vip.levelSystem')}
          </h2>
          <div className="mb-4 flex justify-end">
            <div
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-l-lg transition-colors hover:bg-gray-600 active:bg-gray-600"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeftIcon className="text-white" />
            </div>
            <div
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-r-lg transition-colors hover:bg-gray-600 active:bg-gray-600"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRightIcon className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto">
          <SwiperSlider
            data={data}
            renderSlide={(manufacturer, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 overflow-hidden rounded-[12px] bg-white-4 p-4 hover:bg-white-8"
              >
                <div
                  className="flex items-start justify-center gap-4"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img
                    src="/images/awards/Bronze.svg"
                    className="h-10"
                    alt="bronze"
                  />
                  <div>
                    <div className="flex gap-2">
                      <span className="text-[14px] font-bold uppercase text-white">
                        {t('vip.vip')}
                      </span>
                      <span className="text-[14px] font-bold text-dodger-blue">
                        1-3
                      </span>
                    </div>
                    <span className="text-[14px] font-medium text-casper">
                      {t('vip.bronze')}
                    </span>
                  </div>
                  <div className="flex h-full items-start">
                    <InfoCircleIcon className="h-6 w-6 text-blue-bayoux hover:text-polo-blue" />
                  </div>
                </div>
                <div className="relative flex gap-4 rounded-[12px] bg-white-4 p-4 hover:bg-white-8">
                  <img src="/images/awards/image.svg" className="h-10" alt="" />
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-white">
                      {t('vip.rebateRatio')}
                    </span>
                    <span className="text-[14px] text-casper">0.20%-0.40%</span>
                  </div>
                  <InfoCircleIcon className="absolute right-1 top-1 h-6 w-6 text-blue-bayoux hover:text-polo-blue" />
                </div>
                <div className="relative flex gap-4 rounded-[12px] bg-white-4 p-4 hover:bg-white-8">
                  <img
                    src="/images/awards/image-1.svg"
                    className="h-10"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-white">
                      {t('vip.upgradeBonus')}
                    </span>
                    <span className="text-[14px] text-casper">0.20%-0.40%</span>
                  </div>
                  <InfoCircleIcon className="absolute right-1 top-1 h-6 w-6 text-blue-bayoux hover:text-polo-blue" />
                </div>
                <div className="relative flex gap-4 rounded-[12px] bg-white-4 p-4 hover:bg-white-8">
                  <img
                    src="/images/awards/image-2.svg"
                    className="h-10"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-white">
                      {t('vip.monthlyGiftMoney')}
                    </span>
                    <span className="text-[14px] text-casper">0.20%-0.40%</span>
                  </div>
                  <InfoCircleIcon className="absolute right-1 top-1 h-6 w-6 text-blue-bayoux hover:text-polo-blue" />
                </div>
                <div className="relative flex gap-4 rounded-[12px] bg-white-4 p-4 hover:bg-white-8">
                  <img
                    src="/images/awards/image-3.svg"
                    className="h-10"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-white">
                      {t('vip.freeWithdrawal')}
                    </span>
                    <span className="text-[14px] text-casper">
                      {t('vip.theFirst')}
                      <b className="text-malachite">3</b>
                      {t('vip.timesFree')}
                    </span>
                  </div>
                  <InfoCircleIcon className="absolute right-1 top-1 h-6 w-6 text-blue-bayoux hover:text-polo-blue" />
                </div>
              </div>
            )}
            slidesPerView={4.4}
            spaceBetween={12}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              375: { slidesPerView: 1.4 },
              425: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.3 },
              1024: { slidesPerView: 3.3 },
              1440: { slidesPerView: 4.3 },
            }}
            navigationRef={swiperRef}
            autoplay={false}
          />
        </div>
      </div>
      <div className="relative rounded-[12px] bg-cover bg-center 2xl:h-[292.9px] 2xl:overflow-hidden">
        <img
          alt=""
          src="/images/block-coin.png"
          className="absolute z-[9] hidden h-full w-full object-cover grayscale 2xl:block"
        />
        <div className="absolute left-0 top-0 z-[10] hidden h-full w-full bg-[linear-gradient(#2283f633,#111923)] 2xl:block" />

        <div className="relative z-[10] flex h-full w-full flex-col items-center justify-between gap-8 lg:flex-row 2xl:p-8">
          <div className="flex flex-col gap-2 rounded-[12px] bg-white-4 p-4 2xl:w-[250px] 2xl:bg-mirage">
            <span className="text-[14px] font-bold text-white">
              {t('vip.stayConnected')}
            </span>
            <p className="text-[14px] text-casper">
              {t('vip.stayConnectedDescription')}
            </p>
          </div>
          <img
            src="/images/headset.png"
            alt="headset"
            className="hidden w-[246px] 2xl:block"
          />
          <div className="flex w-full flex-col gap-px overflow-hidden rounded-[8px] 2xl:w-[330px]">
            <div className="flex h-12 items-center justify-between bg-white-4 p-3 2xl:bg-mirage">
              <div className="flex gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-[8px] border-[1px] border-yellow-orange text-yellow-orange">
                  <HeadphoneMicIcon className="h-4 w-4" />
                </div>
                <span className="text-[14px] font-bold text-casper">
                  24/7 {t('help.onlineService')}
                </span>
              </div>
              <ArrowUpRightStrokeIcon className="h-6 w-6 text-casper" />
            </div>
            <div className="flex h-12 items-center justify-between bg-white-4 p-3 2xl:bg-mirage">
              <div className="flex gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-[8px] border-[1px] border-dodger-blue text-yellow-orange">
                  <TelegramIcon className="h-4 w-4" color="#2283F6" />
                </div>
                <span className="text-[14px] font-bold text-casper">
                  Telegram
                </span>
              </div>
              <ArrowUpRightStrokeIcon className="h-6 w-6 text-casper" />
            </div>
            <div className="flex h-12 items-center justify-between bg-white-4 p-3 2xl:bg-mirage">
              <div className="flex gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-[8px] border-[1px] border-malachite text-yellow-orange">
                  <WhatsAppIcon className="h-4 w-4" color="#1BB83D" />
                </div>
                <span className="text-[14px] font-bold text-casper">
                  WhatsApp
                </span>
              </div>
              <ArrowUpRightStrokeIcon className="h-6 w-6 text-casper" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[18px] font-bold text-white">
         {t('help.faq')}
        </span>
        <div className="flex flex-col gap-4 2xl:flex-row">
          <FAQ faqs={faq} title={false} />
        </div>
      </div>
      <ModalContainer
        title="VIP system level"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col gap-[6px]">
            <div className="flex h-10 grid-cols-[auto_100px_90px_80px] items-center justify-center gap-2 rounded-t-[8px] bg-mirage-8a px-4 text-[12px] font-bold text-blue-bayoux">
              <span>VIP level</span>
              <span>Promotional bonus</span>
              <span>Monthly bonus</span>
              <span>Change of cutoff</span>
            </div>
            {vips[1].map((vip, index) => (
              <div
                key={index}
                className="flex h-10 grid-cols-[auto_100px_90px_80px] items-center justify-center gap-2 rounded-[8px] bg-white-4 px-4 text-[14px] font-bold text-white"
              >
                <span className="flex items-center gap-2">
                  <img
                    src="/images/awards/Bronze.svg"
                    alt="bronze"
                    className="h-6 w-6"
                  />
                  <span className="text-dodger-blue">{vip.level}</span>
                </span>
                <span>{vip.promotion}</span>
                <span>{vip.moonthly}</span>
                <span>{vip.change}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 py-4 text-[14px]">
            <span className="font-bold text-white">
              VIP promotion requirements
            </span>
            <span className="text-casper">
              For users betting with TRX, the system will convert it at the rate
              of <span className="font-bold text-dodger-blue">1U=25TRX.</span>
            </span>
          </div>
          <div className="flex w-full flex-col gap-[6px]">
            <div className="flex h-10 grid-cols-[auto_100px_90px_80px] items-center justify-center gap-2 rounded-t-[8px] bg-mirage-8a px-4 text-[12px] font-bold text-blue-bayoux">
              <span>VIP level</span>
              <span>Accumulated deposits</span>
              <span>Accumu-lated income</span>
              <span>Change of cutoff</span>
            </div>
            {vips[2].map((vip, index) => (
              <div
                key={index}
                className="flex h-10 grid-cols-[auto_100px_90px_80px] items-center justify-center gap-2 rounded-[8px] bg-white-4 px-4 text-[14px] font-bold text-white"
              >
                <span className="flex items-center gap-2">
                  <img
                    src="/images/awards/Bronze.svg"
                    alt="bronze"
                    className="h-6 w-6"
                  />
                  <span className="text-dodger-blue">{vip.level}</span>
                </span>
                <span>{vip.deposit}</span>
                <span>{vip.income}</span>
                <span>{vip.change}</span>
              </div>
            ))}
          </div>
        </div>
      </ModalContainer>
    </div>
  )
}

export default VipClubPage
