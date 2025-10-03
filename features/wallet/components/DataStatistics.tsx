import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Dropdown, Select } from '@/components/ui'
import { PiIcon } from 'lucide-react'
import { DropdownSelect } from '@/components/ui/DropdownSelect'
import CopyIcon from '@/components/ui/icons/copy'
import InfoCircleIcon from '@/components/ui/icons/info-circle'
import TDButton from '@/components/ui/Button/TDButton'

const DataStatistics: React.FC = () => {
  const [selectedCurrencyType, setSelectedCurrencyType] = useState('Game data')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedValue, setSelectedValue] = useState('usdt')
  const [selectedNetworkValue, setSelectedNetworkValue] =
    useState('Past 7 days')
  const [selectedCurrencyValue, setSelectedCurrencyValue] = useState('uah')

  const currencyOptions = [
    {
      value: 'usdt',
      label: 'USDT',
      icon: <img src="/icons/coin-icon/USDT.svg" />,
    },
  ]

  const currencyOptions1 = [
    {
      value: 'uah',
      label: 'UAH',
      icon: <img src="/icons/flag-icon/ua.svg" className="h-6 rounded-[4px]" />,
    },
  ]

  const networkOptions = [{ value: 'Past 7 days', label: 'Past 7 days' }]

  const games = [
    {
      name: 'Hash Games',
      icon: '/icons/Hash.svg',
      numberBet: '1',
      betAmount: '1',
      win: 1,
    },
    {
      name: 'Slots',
      icon: '/icons/Slots.svg',
      numberBet: '1',
      betAmount: '1',
      win: 1,
    },
    {
      name: 'Sport',
      icon: '/icons/Sport.svg',
      numberBet: '1',
      betAmount: '1',
      win: 1,
    },
    {
      name: 'Live Casino',
      icon: '/icons/Casino1.svg',
      numberBet: '1',
      betAmount: '1',
      win: 1,
    },
    {
      name: 'Crypto Games',
      icon: '/icons/Cryptogra1.svg',
      numberBet: '1',
      betAmount: '1',
      win: 1,
    },
    {
      name: 'Table Games',
      icon: '/icons/tablegame.svg',
      numberBet: '1',
      betAmount: '1',
      win: 1,
    },
  ]

  useEffect(() => {
    const sub = searchParams.get('sub')
    if (sub === 'Game data') setSelectedCurrencyType('Game data')
    if (sub === 'Betting data') setSelectedCurrencyType('Betting data')
  }, [searchParams])

  const handleCurrencyTypeClick = (gameType: string) => {
    setSelectedCurrencyType(gameType)
    const params = new URLSearchParams(searchParams.toString())
    const value = gameType === 'Game data' ? 'Game data' : 'Betting data'
    params.set('sub', value)
    router.replace(`${pathname}?${params.toString()}`)
  }

  const paymentMethods = [
    {
      icon: '/images/wallets/visa.png',
      alt: 'visa',
    },
    {
      icon: '/images/wallets/apay.png',
      alt: 'Apple Pay',
    },
    {
      icon: '/images/wallets/mc.png',
      alt: 'mc',
    },
    {
      icon: '/images/wallets/gpay.png',
      alt: 'gpay',
    },
  ]

  return (
    <div className="[@media(max-width:660px)]:w-full">
      <div className="flex w-full flex-col gap-4 space-y-4">
        {/* DataStatistics Header */}
        <h1 className="hidden text-lg font-bold text-white sm:text-xl lg:block">
          Statistics
        </h1>
        <div className="grid h-11 grid-cols-2 gap-4 overflow-hidden rounded-[12px] bg-white-4 p-1">
          {['Game data', 'Betting data'].map((item, index) => (
            <div
              className={cn(
                'flex items-center justify-center overflow-hidden rounded-[8px] text-[14px] font-bold',
                selectedCurrencyType === item
                  ? 'bg-white-13 text-gallery'
                  : 'text-casper'
              )}
              onClick={() => handleCurrencyTypeClick(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {selectedCurrencyType === 'Game data' ? (
          <>
            <div className="grid grid-cols-2 gap-4 rounded-[12px]">
              <DropdownSelect
                value={selectedNetworkValue}
                options={networkOptions}
                onChange={setSelectedNetworkValue}
              />
              <DropdownSelect
                value={selectedValue}
                options={currencyOptions}
                onChange={setSelectedValue}
              />
            </div>

            <div className="grid grid-cols-3 gap-4 rounded-[12px] bg-white-4 p-4">
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-casper">Total bets</span>
                <span className="text-[0.875rem] font-bold text-white">2</span>
              </div>
              <div className="flex flex-col items-center border-l border-r border-white-13">
                <span className="text-[10px] text-casper">Bet Amount</span>
                <span className="text-[0.875rem] font-bold text-white">
                  0.2
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-casper">
                  Total win or loss
                </span>
                <span className="text-[0.875rem] font-bold text-dodger-blue">
                  -0.2
                </span>
              </div>
            </div>
            <div className="overflow-hidden rounded-t-[8px]">
              <div className="grid grid-cols-[auto_70px_70px_70px] items-center gap-4 bg-mirage p-4 text-[12px] font-bold text-casper">
                <span>Game</span>
                <span className="flex items-center justify-center">
                  Number of Bets
                </span>
                <span className="flex items-center justify-center">
                  Bet amount
                </span>
                <span className="flex items-center justify-center">
                  Win or lose
                </span>
              </div>
              {games.map((game, index) => (
                <div
                  key={index}
                  className={cn(
                    'grid h-12 grid-cols-[auto_70px_70px_70px] items-center gap-4 px-4 py-2 text-[12px] font-bold',
                    index % 2 === 0 ? 'bg-white-4' : 'bg-white-8'
                  )}
                >
                  <div className="flex items-center gap-2 text-casper">
                    <img src={game.icon} alt="game" />
                    {game.name}
                  </div>
                  <div className="flex items-center justify-center text-white">
                    {game.numberBet}
                  </div>
                  <div className="flex items-center justify-center text-white">
                    {game.betAmount}
                  </div>
                  <div className="flex items-center justify-center text-dodger-blue">
                    {game.win}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <DropdownSelect
              label="Currency"
              value={selectedCurrencyValue}
              options={currencyOptions1}
              onChange={setSelectedCurrencyValue}
            />
            <div className="flex flex-col gap-4 overflow-hidden rounded-[12px] bg-white-4 p-4">
              <h2 className="text-[14px] font-bold text-white">
                Replenishment method
              </h2>
              <div className="grid h-[48px] grid-cols-[auto_auto_56px] items-center rounded-[12px] bg-mirage p-[6px] pl-2">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/wallets/transak.png"
                    alt="transak"
                    className="h-6"
                  />
                </div>
                <div className="text-[12px] font-medium text-dodger-blue">
                  Transak
                </div>
                <div className="text-[12px] font-bold text-polo-blue">
                  10-99999
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 overflow-hidden rounded-[12px] bg-white-4 p-4">
              <h2 className="text-[14px] font-bold text-gallery">
                No Game datacurrency?
              </h2>
              <p className="text-[14px] text-casper">
                Follow these simple steps and the funds will be automatically
                transferred to your wallet as shown below.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden rounded-[12px] bg-white-4 p-4">
              <h2 className="text-[14px] font-bold text-gallery">Networks</h2>
              <div className="flex justify-between overflow-hidden rounded-[12px] bg-white-8 p-1">
                <div className="flex h-9 w-[148px] items-center gap-2 rounded-[12px] bg-white-13 px-3">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    className="h-6 w-6"
                    alt="usdt"
                  />
                  <span className="text-[14px] font-bold text-gallery">
                    Tether
                  </span>
                  <span className="text-[14px] font-bold text-casper">
                    USDT
                  </span>
                </div>
                <div className="flex items-center justify-end text-[14px] font-bold uppercase text-white">
                  tron
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden rounded-[12px] bg-white-4 p-4">
              <h2 className="text-[14px] font-bold text-gallery">
                Purchase amount
              </h2>
              <div className="flex justify-between overflow-hidden rounded-[12px] bg-white-8 p-1">
                <div className="flex h-9 items-center gap-2 rounded-[12px] bg-white-13 px-3">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    className="h-6 w-6"
                    alt="usdt"
                  />
                  <span className="text-[14px] font-bold text-gallery">0</span>
                </div>
                <div className="flex items-center justify-end gap-1 text-[14px] font-bold text-white">
                  pay <span className="text-malachite">+0</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 py-4 text-[14px] font-medium text-white">
              Minimum purchase amount{' '}
              <span className="text-dodger-blue">10 USDT</span>
            </div>
            <TDButton
              onClick={() => {}}
              className="h-[41px] w-full text-[14px] text-gallery"
              type="blue"
            >
              Top up now
            </TDButton>
            <div className="flex items-center justify-center gap-4">
              {paymentMethods.map(paymentMethod => (
                <img
                  src={paymentMethod.icon}
                  className="h-[25.5px] lg:h-8"
                  alt="payment"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DataStatistics
