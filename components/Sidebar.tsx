'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useSidebar } from '../context/SidebarProvider'
import { useOverlay } from '../context/OverlayProvider'
import { useHoverTimeout } from '../hooks/useHoverTimeout'
import { useLanguage } from '../context/LanguageProvider'
import { useT } from '../context/I18nProvider'
import { LanguageSelector } from './ui/Internationalization'
import SidebarTopSection from './SidebarTopSection'
import SidebarSections from './SidebarSections'
import SidebarBottomSection from './SidebarBottomSection'
import SidebarLanguageSection from './SidebarLanguageSection'
import { createSidebarData } from '../lib/sidebar-data-i18n'
import HeadphoneMicIcon from './ui/icons/headphone-mic'
import ModalContainer from './modals/ModalContainer'
import ArrowUpRightStrokeIcon from './ui/icons/arrow-up-right-stroke'
import TelegramIcon from './ui/icons/TelegramIcon'
import Overlay from './overlays/Overlay'
import Link from 'next/link'

const useOnlineService = () => {
  const [serviceModal, setServiceModal] = useState(false)
  const toggleServiceModal = () => {
    setServiceModal(!serviceModal)
  }
  return { serviceModal, toggleServiceModal }
}

const Sidebar: React.FC = () => {
  const {
    isCollapsed,
    toggleSidebar,
    openHashHover,
    scheduleCloseHashHover,
    setHashHoverTop,
  } = useSidebar()
  const { openHashHover: openOverlayHashHover, closeOverlay } = useOverlay()
  const t = useT()

  const { clearTimeout, setCloseTimeout } = useHoverTimeout()
  const { serviceModal, toggleServiceModal } = useOnlineService()

  // Get i18n sidebar data
  const sidebarData = createSidebarData(t)

  // Create service items with onClick handler
  const serviceItemsWithHandler = sidebarData.serviceItems.map(item =>
    item.id === 'online-service'
      ? { ...item, onClick: toggleServiceModal }
      : item
  )
  const handleHashHoverLeave = () => {
    setCloseTimeout(closeOverlay, 200)
  }

  const services = [
    {
      icon: (
        <HeadphoneMicIcon color="var(--yellow-orange)" className="h-4 w-4" />
      ),
      title: t('help.onlineService'),
      desc: t('help.serviceDescription'),
      color: 'var(--yellow-orange)',
    },
    {
      icon: <TelegramIcon color="var(--dodger-blue)" className="h-4 w-4" />,
      title: 'Telegram',
      desc: t('help.telegramDescription'),
      color: 'var(--dodger-blue)',
    },
  ]

  const handleHashHoverEnter = () => {
    // Clear any pending close timeout when re-entering
    clearTimeout()
  }
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false)
  const { currentLanguage, setCurrentLanguage } = useLanguage()

  const currentLanguageDisplay =
    sidebarData.languageData[
      currentLanguage.code as keyof typeof sidebarData.languageData
    ] || sidebarData.languageData.zh

  return (
    <>
      <aside
        ref={sidebarRef}
        className={`sidebar bg-[var(--mirage)]/54 fixed top-[6.25rem] z-40 h-[calc(100dvh-9.9375rem)] overflow-y-auto overflow-x-visible backdrop-blur-[2rem] transition-all duration-300 lg:top-[3.5rem] lg:block lg:h-[calc(100dvh-3.5rem)] ${
          isCollapsed ? 'close' : 'open'
        }`}
        style={{
          borderRight: '1px solid var(--white-4)',
          backdropFilter: 'blur(2rem)',
          background: 'var(--mirage-54)',
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch',
        }}
        onWheel={e => {
          // Prevent scroll events from bubbling up to the parent
          e.stopPropagation()
        }}
        onTouchMove={e => {
          // Prevent touch scroll events from bubbling up to the parent
          e.stopPropagation()
        }}
      >
        <div className="flex h-full flex-col">
          {/* Top Section - Casino/Sport buttons */}
          <SidebarTopSection
            isCollapsed={isCollapsed}
            topButtons={sidebarData.topButtons}
          />

          {/* Main Content Sections */}
          <div
            className={`p-4 pt-0 ${isCollapsed ? 'px-0' : ''} flex-1 space-y-1`}
          >
            <div className=" ">
              <SidebarSections
                isCollapsed={isCollapsed}
                sidebarSections={sidebarData.sidebarSections}
                serviceItemsWithHandler={serviceItemsWithHandler}
                onHashHover={e => {
                  const rect = (
                    e.currentTarget as HTMLDivElement
                  ).getBoundingClientRect()
                  setHashHoverTop(rect.top)
                  handleHashHoverEnter()
                  openOverlayHashHover()
                }}
                onHashHoverLeave={handleHashHoverLeave}
              />
            </div>
            <Link
              href={'/install-app'}
              className="flex h-[5.1875rem] flex-col justify-center gap-2 rounded-lg bg-[linear-gradient(45deg,#111923,#002554)] px-4 py-2 lg:hidden"
            >
              <span className="text-sm font-bold text-white">
                {t('app.title')}
              </span>
              <span className="text-[0.625rem] text-casper">
                {t('app.subtitle')}
              </span>
            </Link>

            {/* Language Selection - Mobile */}
            <SidebarLanguageSection
              isCollapsed={isCollapsed}
              currentLanguage={currentLanguage}
              onLanguageClick={() => setIsLanguageModalOpen(true)}
            />
          </div>

          {/* Bottom Section - Payment Methods */}
          <SidebarBottomSection
            isCollapsed={isCollapsed}
            currentLanguage={currentLanguage}
            onLanguageClick={() => setIsLanguageModalOpen(true)}
            paymentMethods={sidebarData.paymentMethods}
            appDownloads={sidebarData.appDownloads}
            languageData={sidebarData.languageData}
          />
        </div>
      </aside>
      <Overlay
        isOpen={!isCollapsed}
        onClose={toggleSidebar}
        className="fixed left-0 right-0 z-[9] lg:hidden"
        backdropClassName="h-[calc(100dvh-7.1rem)] bg-[var(--mirage-73)] backdrop-blur-[0.1875rem]"
        contentClassName=""
        zIndex={9}
        closeOnBackdropClick={true}
        closeOnEscape={true}
        preventScroll={true}
      >
        {null}
      </Overlay>

      {/* Language Selection Modal */}
      <LanguageSelector
        open={isLanguageModalOpen}
        onOpenChange={setIsLanguageModalOpen}
        onLanguageChange={langCode =>
          setCurrentLanguage({
            code: langCode,
            name:
              sidebarData.languageData[
                langCode as keyof typeof sidebarData.languageData
              ]?.name || t('languages.chinese'),
          })
        }
        initialLanguage={currentLanguage.code}
      />

      <ModalContainer
        isOpen={serviceModal}
        width="95vw"
        onClose={toggleServiceModal}
        title={t('help.onlineService')}
        className="!w-[46.25rem]"
      >
        <div className="relative -ml-[0.9375rem] -mt-[0.9375rem] h-[14.875rem] w-[calc(100%+1.875rem)] overflow-hidden">
          <img
            src="/images/block-coin.png"
            alt="blockcoin"
            className="absolute z-[1] h-full w-full object-cover grayscale"
          />
          <div className="absolute left-0 top-0 z-[2] h-full w-full bg-[linear-gradient(#2283F6,#2283F600)]"></div>
          <img
            src="/images/calf/mascot14.png"
            className="absolute -right-[3.125rem] top-[20%] z-[3] w-[18.75rem] lg:right-[1.875rem]"
            alt="mascot"
          />
          <div className="relative z-[3] flex h-full flex-col items-start justify-center gap-1 pl-[1.875rem] lg:pl-[3.75rem]">
            <img src="/images/logo.svg" className="h-9" alt="" />
            <span className="text-[1rem] font-bold text-dodger-blue">
              {t('help.onlineService')}
            </span>
            <span className="text-sm font-medium text-yellow-orange">
              {t('help.hours24')}
            </span>
            <span className="text-sm font-medium text-white">
              {t('help.dedicatedService')}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-xl bg-white-4 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2 text-sm font-bold text-white">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-[0.5rem] border"
                    style={{ borderColor: service.color }}
                  >
                    {service.icon}
                  </div>
                  {service.title}
                </div>
                <ArrowUpRightStrokeIcon
                  className="h-6 w-6"
                  color="var(--casper)"
                />
              </div>
              <div className="text-sm text-casper">{service.desc}</div>
            </div>
          ))}
        </div>
      </ModalContainer>
    </>
  )
}

export default Sidebar
