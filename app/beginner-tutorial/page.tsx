'use client'

import { UnifiedButton } from '@/components/ui'
import FlatButton from '@/components/ui/Button/FlatButton'
import { CopyBox } from '@/components/ui/CopyBox'
import ArrowUpRightStrokeIcon from '@/components/ui/icons/arrow-up-right-stroke'
import DesktopIcon from '@/components/ui/icons/desktop'
import WalletIcon from '@/components/ui/icons/wallet'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ModalContainer from '@/components/modals/ModalContainer'
import CartIcon from '@/components/ui/icons/cart'
import VpnIcon from '@/components/ui/icons/vpn'
import HeadphoneMicIcon from '@/components/ui/icons/headphone-mic'
import Link from 'next/link'
import TelegramIcon from '@/components/ui/icons/TelegramIcon'
interface TabBarProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

const tabs1 = [
  { title: 'Hash size', id: 'hash' },
  { title: 'Even and odd hash', id: 'even' },
  { title: 'Happy hash', id: 'happy' },
  { title: 'Happy banker', id: 'banker' },
  { title: 'Default', id: 'default' },
]
const tabs = ['Use a wallet', 'Start the game', 'Refund']
const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    const index = tabs1.findIndex(t => t.id === activeTab)
    if (swiperRef.current && index >= 0) {
      swiperRef.current.slideTo(index, 300)
    }
  }, [activeTab])

  return (
    <div>
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={6}
        onSwiper={inst => {
          swiperRef.current = inst
        }}
      >
        {tabs1.map((tab, idx) => (
          <SwiperSlide key={tab.id} className="!w-auto">
            <UnifiedButton
              onClick={() => {
                onTabChange(tab.id)
                swiperRef.current?.slideTo(idx, 250)
              }}
              variant={activeTab === tab.id ? 'primary' : 'secondary'}
              className="min-w-fit whitespace-nowrap px-2 py-1"
            >
              <span className="text-[0.75rem] font-bold">{tab.title}</span>
            </UnifiedButton>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const BeginnerTutorialPage = () => {
  // const wallets = ["imtoken", "ownbit", "bitpie", "tw", "tp", "tl"];

  const [tab, setTab] = useState('Use a wallet')
  const [activeTab, setActiveTab] = useState('hash')
  const [walletModal, setWalletModal] = useState(false)
  const [softwareModal, setSoftwareModal] = useState(false)
  const [tutorialModal, setTutorialModal] = useState(false)

  // Enable smooth scrolling for the page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Add a small delay for better UX
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }, 100)
    }
  }

  const toggleWalletModal = () => {
    setWalletModal(!walletModal)
  }
  const toggleSoftwareModal = () => {
    setSoftwareModal(!softwareModal)
  }

  const toggleTutorialModal = () => {
    setTutorialModal(!tutorialModal)
  }

  const tutorials = [
    {
      icon: '/images/wallets/htx.svg',
      website: 'huobi.com',
    },
    {
      icon: '/images/wallets/bin.svg',
      website: 'binance.com',
    },
    {
      icon: '/images/wallets/okex.svg',
      website: 'okx.com',
    },
    {
      icon: '/images/wallets/gate.svg',
      website: 'Gate.io',
    },
  ]

  const wallets = [
    {
      icon: '/images/wallets/imtoken.svg',
      website: 'token.im',
    },
    {
      icon: '/images/wallets/tp.svg',
      website: 'tokenpocket.pro',
    },
    {
      icon: '/images/wallets/bitpie.svg',
      website: 'bitpie.com',
    },
    {
      icon: '/images/wallets/ownbit.svg',
      website: 'ownbit.com',
    },
    {
      icon: '/images/wallets/tw.svg',
      website: 'trustwallet.com',
    },
    {
      icon: '/images/wallets/tl.svg',
      website: 'tronlink.org',
    },
  ]

  const vpns = ['Mango VPN', 'NordVPN']

  const others = [
    {
      icon: <TelegramIcon color="#A7B5CA" />,
      title: 'Telegram',
    },
  ]

  const hashCards = [
    {
      gameName: 'Big/Small',
      odds: '1.95X',
      betRange: '10USDT Starting/2TRX Starting',
      bettingAddress: 'TXS3PfAU9hemKkoBWRUfsUkGBSrZGagh6X',
    },
    {
      gameName: 'Big/Small',
      odds: '1.95X',
      betRange: '10USDT Starting/2TRX Starting',
      bettingAddress: 'TXS3PfAU9hemKkoBWRUfsUkGBSrZGagh6X',
    },
    {
      gameName: 'Big/Small',
      odds: '1.95X',
      betRange: '10USDT Starting/2TRX Starting',
      bettingAddress: 'TXS3PfAU9hemKkoBWRUfsUkGBSrZGagh6X',
    },
  ]

  return (
    <>
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="relative h-[14.49375rem] overflow-hidden rounded-[0.75rem] bg-cover bg-center 2xl:mt-4">
          <img
            src="/images/block-coin.png"
            className="absolute z-[1] h-full w-full object-cover grayscale"
            alt=""
          />
          <div className="absolute z-[2] h-full w-full bg-[radial-gradient(circle,_#f2f2f2_0.125rem,_transparent_0.125rem)] [background-size:1.875rem_1.875rem]" />

          <div className="absolute left-0 top-0 z-[2] h-full w-full bg-[linear-gradient(#2283f633,#111923)]" />

          <img
            src="/images/help-34344.png"
            className="absolute left-1/2 top-1/3 z-[3] w-[18.75rem] -translate-x-1/2 -translate-y-1/2 transform lg:hidden"
            alt="image"
          />
          <div
            id="Use a wallet"
            className="relative z-[3] flex h-full w-full flex-col items-start justify-end gap-8 p-4 2xl:p-8"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[1.125rem] font-bold text-white">
                Beginner's Tutorial
              </span>
              <div className="flex">
                {tabs.map((item, index) => (
                  <>
                    <div
                      onClick={() => {
                        setTab(item)
                        scrollToSection(item)
                      }}
                      className={cn(
                        'flex h-9 w-[8.25rem] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] text-[0.75rem] font-bold transition-all duration-300',
                        tab === item
                          ? 'bg-dodger-blue text-white'
                          : 'text-casper hover:bg-white-4'
                      )}
                    >
                      {index + 1}. {item}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-2 2xl:gap-16">
          <div>
            <div className="grid grid-cols-3 gap-3">
              {wallets.map((item, index) => (
                <>
                  <div className="flex h-[3.5rem] items-center justify-center overflow-hidden rounded-[0.5rem] bg-mirage-4">
                    <img src={item.icon} className="" />
                  </div>
                </>
              ))}
            </div>
            <div className="mt-4 grid gap-2 lg:grid-cols-3">
              <FlatButton
                onClick={toggleWalletModal}
                className="h-9 gap-2 text-[0.75rem]"
              >
                <WalletIcon className="h-4 w-4" />
                Wallet Install
              </FlatButton>
              <FlatButton
                onClick={toggleSoftwareModal}
                className="h-9 gap-2 text-[12px]"
              >
                <DesktopIcon className="h-4 w-4" />
                Useful Software
              </FlatButton>
              <FlatButton
                onClick={toggleTutorialModal}
                className="h-9 gap-2 truncate text-[12px]"
              >
                <CartIcon className="h-4 w-4" />
                Currency Purchase Tutorial
              </FlatButton>
              {/* <FlatButton onClick={toggleServiceModal} className="h-9 gap-2 text-[12px] truncate" >
                                <HeadphoneMicIcon className="w-4 h-4" />
                                Online service
                            </FlatButton> */}
            </div>
          </div>
          <div id="Start the game" className="flex flex-col gap-4">
            <h2 className="text-[14px] text-white">
              2.Transfer to the following address to start
            </h2>
            <div className="flex items-center justify-end text-white">
              <span className="text-[12px] font-medium text-dodger-blue">
                Graphic Tutorial
              </span>
              <ArrowUpRightStrokeIcon className="h-6 w-6" />
            </div>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              {hashCards.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-[12px] bg-[url('/images/games/dice-glass-1.png')] bg-cover bg-center px-3 py-4"
                    style={{ backgroundColor: '#0D131C' }}
                  >
                    <div className="absolute left-0 top-0 z-[1] h-full w-full bg-[#0D131CC2]" />
                    <div className="relative z-[2]">
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-bold text-white">
                          Hash:{data.gameName}
                        </span>
                        <div className="flex items-center justify-end text-white">
                          <span className="text-[12px] font-medium text-dodger-blue">
                            Graphic Tutorial
                          </span>
                          <ArrowUpRightStrokeIcon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="block text-[14px] text-white">
                          Odds:{data.odds}
                        </span>
                        <span className="block text-[14px] text-white">
                          Bet:{data.betRange}
                        </span>
                      </div>
                      <div className="mt-4 flex w-full flex-col gap-4 overflow-hidden rounded-[12px] bg-white-4 py-2">
                        <div className="indent-[20px]">
                          <span className="mr-2 text-[12px] font-medium text-white">
                            Betting Address
                          </span>
                          <span className="text-[12px] font-medium text-casper">
                            Use a Decentralized Wallet
                          </span>
                        </div>
                        <CopyBox className="bg-white-8">
                          {data.bettingAddress}
                        </CopyBox>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4" id="Refund">
            <div>
              <h2 className="text-[14px] font-bold text-white">3.Payouts</h2>
              <h3 className="text-casper">
                Do not send bets from exchange accounts
              </h3>
            </div>
            <TabBar activeTab={activeTab} onTabChange={handleTabChange} />

            <p className="text-[14px] text-white">
              1. Result Determination: The last digit of the hash of the block
              created by your transaction is used to determine the winning
              result. Ignore any letters and decimal points in the hash.
            </p>
            <p className="text-[14px] text-white">
              2.Determination of small bets: If the last digit of the block hash
              is 0, 1, 2, 3 or 4, the result is considered 'small'.
            </p>
            <p className="text-[14px] text-white">
              3.Determination of big bets: If the last digit is 5, 6, 7, 8 or 9,
              the result is considered 'big'.
            </p>
            <p className="text-[14px] text-white">
              4. Determining the bet type: The type of your bet (small or large)
              is determined by the last digit of the amount you bet.
            </p>
            <p className="text-[14px] text-white">
              5.Small bet example: If you bet 1000 USDT, the last digit of your
              bet amount is 0. According to the rules, since 0 is in the range
              of 0 to 4, your bet is a 'small' bet.
            </p>
            <p className="text-[14px] text-white">
              6. Example of a large bet: If you bet 1009 USDT, the last digit of
              your bet amount is 9. Since 9 is in the range of 5 to 9, your bet
              is a 'large' bet.
            </p>
          </div>
        </div>
        <ModalContainer
          isOpen={walletModal}
          onClose={toggleWalletModal}
          title="Wallet registration"
        >
          <div className="flex flex-col gap-2 pt-2">
            <h2 className="indent-[20px] text-[14px] font-bold text-casper">
              Recommended wallet registration
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex grid h-[56px] grid-cols-3 items-center justify-center rounded-[8px] bg-mirage-8a text-[12px] font-bold text-casper">
                <span>Wallet</span>
                <span>Official website</span>
                <span>Link</span>
              </div>
              {wallets.map(wallet => (
                <div className="grid grid-cols-3 items-center justify-between gap-1 rounded-[12px] bg-white-4 p-[6px] pl-6">
                  <span className="text-left">
                    <img src={wallet.icon} alt="wallet" />
                  </span>
                  <span className="flex items-center justify-center text-[12px] font-medium text-dodger-blue">
                    {wallet.website}
                  </span>
                  <div className="text-right">
                    <FlatButton className="h-9 w-[97px] text-[12px] text-gallery">
                      Download
                    </FlatButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalContainer>
        <ModalContainer
          isOpen={softwareModal}
          onClose={toggleSoftwareModal}
          title="Software Downloads"
        >
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex flex-col gap-4">
              <h2 className="indent-[20px] text-[14px] font-bold text-casper">
                VPN Recommendations
              </h2>
              {vpns.map(vpn => (
                <div
                  key={vpn}
                  className="flex items-center justify-between gap-1 rounded-[12px] bg-white-4 p-[6px] pl-6"
                >
                  <span className="text-left text-[14px] font-bold text-white">
                    {vpn}
                  </span>
                  <div className="text-right">
                    <FlatButton className="h-9 w-[97px] text-[12px] text-gallery">
                      Download
                    </FlatButton>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="indent-[20px] text-[14px] font-bold text-casper">
                Recommended wallet registration
              </h2>
              <div className="flex flex-col gap-2">
                {wallets.map(wallet => (
                  <div className="grid grid-cols-3 items-center justify-between gap-1 rounded-[12px] bg-white-4 p-[6px] pl-6">
                    <span className="text-left">
                      <img src={wallet.icon} alt="wallet" />
                    </span>
                    <span className="flex items-center justify-center text-[12px] font-medium text-dodger-blue">
                      {wallet.website}
                    </span>
                    <div className="text-right">
                      <FlatButton className="h-9 w-[97px] text-[12px] text-gallery">
                        Download
                      </FlatButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="indent-[20px] text-[14px] font-bold text-casper">
                Other downloads
              </h2>
              {others.map(other => (
                <div
                  key={other.title}
                  className="flex items-center justify-between gap-1 rounded-[12px] bg-white-4 p-[6px] pl-6"
                >
                  <span className="flex gap-4 text-left text-[14px] font-bold text-casper">
                    {other.icon}
                    {other.title}
                  </span>
                  <div className="text-right">
                    <FlatButton className="h-9 w-[97px] text-[12px] text-gallery">
                      Download
                    </FlatButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalContainer>
        <ModalContainer
          isOpen={tutorialModal}
          onClose={toggleTutorialModal}
          title="Currency Purchase Tutorial"
        >
          <div className="flex flex-col gap-2 pt-2">
            <h2 className="indent-[20px] text-[14px] font-bold text-casper">
              Recommended exchange
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex grid h-[56px] grid-cols-3 items-center justify-center rounded-[8px] bg-mirage-8a text-[12px] font-bold text-casper">
                <span>Wallet</span>
                <span>Official website</span>
                <span>Link</span>
              </div>
              {tutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 items-center justify-between gap-1 rounded-[12px] bg-white-4 p-[6px] pl-6"
                >
                  <span className="text-left">
                    <img src={tutorial.icon} alt="tutorial" />
                  </span>
                  <span className="flex items-center justify-center text-[12px] font-medium text-dodger-blue">
                    {tutorial.website}
                  </span>
                  <div className="text-right">
                    <FlatButton className="h-9 w-[97px] text-[12px] text-gallery">
                      Download
                    </FlatButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalContainer>
      </div>
    </>
  )
}

export default BeginnerTutorialPage
