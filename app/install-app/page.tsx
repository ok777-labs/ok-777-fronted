'use client'

import { ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'
import ArrowLeftStrokeIcon from '@/components/ui/icons/arrow-left-stroke'
import BlackButton from '@/components/ui/Button/BlackButton'
import FlatButton from '@/components/ui/Button/FlatButton'
import { FAQ } from '@/features/alliance/components'
import TDButton from '@/components/ui/Button/TDButton'
import ModalContainer from '@/components/modals/ModalContainer'
import AppleIcon from '@/components/ui/icons/Apple'
import AndroidIcon from '@/components/ui/icons/Android'

const appDownloads = [
  {
    icon: '/icons/apple.svg',
    alt: 'Apple',
    platform: 'iOS',
  },
  {
    icon: '/icons/windows.svg',
    alt: 'Windows',
    platform: 'Windows',
  },
  {
    icon: '/icons/android.svg',
    alt: 'Android',
    platform: 'Android',
  },
]

const installApps = [
  {
    icon: '/images/rocket1.svg',
    title: 'Lightning speed',
    desc: 'Enjoy even faster site loading and an improved BetFury experience. Make big wins with our fast app!',
  },
  {
    icon: '/images/rocket2.svg',
    title: 'First to know',
    desc: "Don't miss out on the latest news, special offers, bonuses, and new releases. Subscribe to our web push notifications on your mobile and desktop for instant updates.",
  },
  {
    icon: '/images/rocket3.svg',
    title: 'Quick access',
    desc: 'Access BetFury with just one click! Enjoy the convenience of easy access to our platform and explore a wide range of crypto features, exciting games, and sports betting options.',
  },
]

const faqs = {
  1: [
    {
      question: 'How to install on Android with Chrome?',
      answer:
        'Open BetFury in a Safari browser. Tap the "Share” icon on the bottom bar of the Safari. Select "Add to Home Screen" in the dropdown menu.Move the new application icon to any convenient place.',
    },
    {
      question: 'How to install on iOS with Chrome?',
      answer:
        'Open BetFury in a Safari browser. Tap the "Share” icon on the bottom bar of the Safari. Select "Add to Home Screen" in the dropdown menu.Move the new application icon to any convenient place.',
    },
    {
      question: 'How to install on iOS with Safari?',
      answer:
        'Open BetFury in a Safari browser. Tap the "Share” icon on the bottom bar of the Safari. Select "Add to Home Screen" in the dropdown menu.Move the new application icon to any convenient place.',
    },
    {
      question: 'Which browsers is the app available in?  ',
      answer:
        'Open BetFury in a Safari browser. Tap the "Share” icon on the bottom bar of the Safari. Select "Add to Home Screen" in the dropdown menu.Move the new application icon to any convenient place.',
    },
  ],
  2: [
    {
      question: 'How to install on Windows with Chrome?',
      answer:
        'Open BetFury in a Safari browser. Tap the "Share” icon on the bottom bar of the Safari. Select "Add to Home Screen" in the dropdown menu.Move the new application icon to any convenient place.',
    },
    {
      question: 'How to install on MacOS with Chrome?',
      answer:
        'Open BetFury in a Safari browser. Tap the "Share” icon on the bottom bar of the Safari. Select "Add to Home Screen" in the dropdown menu.Move the new application icon to any convenient place.',
    },
    {
      question: 'How to install on MacOS with Safari?',
      answer:
        'Open BetFury in a Safari browser. Tap the "Share” icon on the bottom bar of the Safari. Select "Add to Home Screen" in the dropdown menu.Move the new application icon to any convenient place.',
    },
    {
      question: 'How to install if registered via crypto wallet?',
      answer:
        'Open BetFury in a Safari browser. Tap the "Share” icon on the bottom bar of the Safari. Select "Add to Home Screen" in the dropdown menu.Move the new application icon to any convenient place.',
    },
  ],
}

const tabs = [
  {
    id: 'apple',
    icon: <AppleIcon />,
    title: 'iOS',
  },
  {
    id: 'android',
    icon: <AndroidIcon />,
    title: 'Android',
  },
]

const InstallAppPage = () => {
  const [modal, setModal] = useState(false)
  const [selectedTab, setSelectedTab] = useState('apple')

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="overflow-hidden lg:mb-64">
      <div
        className={cn(
          'relative flex h-[426px] w-full flex-col items-center justify-end gap-8 bg-[radial-gradient(at_top_right,#2283F6,#111923)] p-12 lg:items-start lg:justify-start'
        )}
      >
        <div className="hidden lg:block">
          <span className="text-caper text-[18px] font-bold text-casper">
            Quick and convenient
          </span>
          <h2 className="font-black uppercase text-white">Install OK777 app</h2>
          <span className="text-[18px] font-medium text-casper">
            Get fast access to OK777 from iOS, <br /> Android, Windows or MacOS
          </span>
        </div>
        <FlatButton className="bg-[linear-gradient(#0C60FF 40%,#2C9FFA 60%)] hidden h-[3rem] w-[15rem] rounded-[12px] text-[1rem] font-bold uppercase text-white lg:flex">
          How to Install App
        </FlatButton>
        <div className="hidden items-center gap-4 lg:flex">
          {appDownloads.map(item => (
            <img
              src={item.icon}
              className="h-6 w-6"
              alt={item.alt}
              key={item.platform}
            />
          ))}
        </div>
        <TDButton
          onClick={toggleModal}
          type="blue"
          className="z-[2] h-[41px] w-[200px] text-[14px] font-bold text-white lg:hidden"
        >
          How to Install App
        </TDButton>
        <img
          src="/images/phone.png"
          alt="phone"
          className="absolute bottom-0 right-0 w-[375px]"
        />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-[96px]">
        <div className="grid gap-[86px] rounded-[12px] bg-white-4 p-4 pt-[86px] lg:grid-cols-3 lg:gap-8 lg:bg-[#00000000]">
          {installApps.map(app => (
            <div className="relative flex flex-col items-center gap-4 rounded-[12px] bg-white-4 p-8 pt-[73px]">
              <h2 className="text-[14px] font-bold text-white">{app.title}</h2>
              <p className="flex items-center justify-center text-[14px] text-casper">
                {app.desc}
              </p>
              <img
                src={app.icon}
                alt="app"
                className="absolute -top-[52px] left-1/2 h-[96px] w-[144px] -translate-x-1/2 transform"
              />
            </div>
          ))}
        </div>
        <div>
          <h2 className="pb-4 indent-[20px] text-[18px] font-bold text-white">
            How to download BetFury App?
          </h2>
          <div className="flex flex-col gap-4 lg:flex-row">
            <FAQ faqs={faqs[1]} title={false} />
            <FAQ faqs={faqs[2]} title={false} />
          </div>
        </div>
      </div>
      <ModalContainer
        title="How to Install"
        className=""
        isOpen={modal}
        onClose={toggleModal}
        position="bottom"
      >
        <div className="flex flex-col gap-6 p-2">
          <div className="grid grid-cols-2 gap-2 rounded-[12px] bg-white-4 p-1">
            {tabs.map(tab => (
              <div
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={cn(
                  'flex h-9 items-center justify-center gap-2 rounded-[8px] text-[14px] font-bold text-casper',
                  selectedTab === tab.id ? 'bg-white-13 text-white' : ''
                )}
              >
                {tab.icon}
                <span>{tab.title}</span>
              </div>
            ))}
          </div>

          {selectedTab === 'apple' ? (
            <div className="flex flex-col gap-6">
              {/* Step 1 */}
              <div className="flex flex-col gap-3">
                <h2 className="text-[16px] font-bold text-white">
                  1. Open The Website In Safari
                </h2>
                <p className="text-[14px] text-casper">
                  Make sure you're using Safari browser on your iOS device
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-3">
                <h2 className="text-[16px] font-bold text-white">
                  2. Tap The Share Icon
                </h2>
                <div className="flex justify-center rounded-[12px] bg-white-4 p-4">
                  <div className="flex items-center gap-4 rounded-[8px] bg-[#1a1a1a] p-3">
                    {/* Back/Forward arrows */}
                    <div className="flex gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-[#333]">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15 18L9 12L15 6"
                            stroke="#666"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-[#333]">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="#666"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Share icon (highlighted) */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-2 ring-white ring-opacity-50">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12C9 11.518 8.886 11.062 8.684 10.658M3 12H21M12 3L21 12L12 21"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Bookmarks icon */}
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-[#333]">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                          stroke="#666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.5 2H20V22L13.5 17L7 22V2Z"
                          stroke="#666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-3">
                <h2 className="text-[16px] font-bold text-white">
                  3. Select 'Add To Home Screen'
                </h2>
                <div className="flex justify-center rounded-[12px] bg-white-4 p-4">
                  <div className="flex min-w-[200px] items-center gap-3 rounded-[8px] bg-[#2a2a2a] p-3">
                    <span className="text-[14px] font-medium text-white">
                      Add To Home Screen
                    </span>
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-white ring-2 ring-white ring-opacity-50">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 5V19M5 12H19"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div className="rounded-[12px] bg-[#1a1a1a] p-4">
                <p className="flex items-center justify-center text-[14px] text-casper">
                  After adding to lobby screen, you can move the app icon to any
                  convenient place on your device.
                </p>
              </div>
            </div>
          ) : selectedTab === 'android' ? (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-[16px] font-bold text-white">
                  1. Open The Website In Chrome
                </h2>
                <p className="text-[14px] text-casper">
                  Make sure you're using Chrome browser on your Android device
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-[16px] font-bold text-white">
                  2. Tap The Menu Icon
                </h2>
                <p className="text-[14px] text-casper">
                  Look for the three dots menu in the top-right corner
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-[16px] font-bold text-white">
                  3. Select 'Add to Home screen'
                </h2>
                <p className="text-[14px] text-casper">
                  Choose the option to add the website to your lobby screen
                </p>
              </div>

              <div className="rounded-[12px] bg-[#1a1a1a] p-4">
                <p className="flex items-center justify-center text-[14px] text-casper">
                  After adding to lobby screen, you can move the app icon to any
                  convenient place on your device.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </ModalContainer>
    </div>
  )
}

export default InstallAppPage
