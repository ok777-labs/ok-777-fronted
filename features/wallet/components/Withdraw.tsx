import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Dropdown, Select } from '@/components/ui'
import { PiIcon } from 'lucide-react'
import { DropdownSelect } from '@/components/ui/DropdownSelect'
import CopyIcon from '@/components/ui/icons/copy'
import InfoCircleIcon from '@/components/ui/icons/info-circle'
import TDButton from '@/components/ui/Button/TDButton'
import { CopyBox } from '@/components/ui/CopyBox'
import FlatButton from '@/components/ui/Button/FlatButton'

const Withdraw: React.FC = () => {
  const [selectedCurrencyType, setSelectedCurrencyType] = useState('Crypto')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedValue, setSelectedValue] = useState('usdt')
  const [selectedNetworkValue, setSelectedNetworkValue] = useState('trc')
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
      icon: (
        <img src="/icons/flag-icon/ua.svg" className="h-6 rounded-[0.25rem]" />
      ),
    },
  ]

  const networkOptions = [
    {
      value: 'trc',
      label: 'TRC20',
      icon: <img src="/icons/coin-icon/TRX.svg" />,
    },
  ]

  useEffect(() => {
    const sub = searchParams.get('sub')
    if (sub === 'crypto') setSelectedCurrencyType('Crypto')
    if (sub === 'fiat') setSelectedCurrencyType('Fiat')
  }, [searchParams])

  const handleCurrencyTypeClick = (gameType: string) => {
    setSelectedCurrencyType(gameType)
    const params = new URLSearchParams(searchParams.toString())
    const value = gameType === 'Crypto' ? 'crypto' : 'fiat'
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
        {/* Withdraw Header */}
        <h1 className="hidden text-lg font-bold text-white sm:text-xl lg:block">
          {selectedCurrencyType === 'Crypto' ? 'Crypto' : 'To replenish'}
        </h1>
        <div className="grid h-11 grid-cols-2 gap-4 overflow-hidden rounded-[0.75rem] bg-white-4 p-1">
          {['Crypto', 'Fiat'].map((item, index) => (
            <div
              className={cn(
                'flex items-center justify-center overflow-hidden rounded-[0.5rem] text-[0.875rem] font-bold',
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

        {selectedCurrencyType === 'Crypto' ? (
          <>
            <div className="grid grid-cols-2 gap-4 rounded-[0.75rem]">
              <DropdownSelect
                label="Currency"
                value={selectedValue}
                options={currencyOptions}
                onChange={setSelectedValue}
              />
              <DropdownSelect
                label="Network"
                value={selectedNetworkValue}
                options={networkOptions}
                onChange={setSelectedNetworkValue}
              />
            </div>
            <div className="flex flex-col gap-4 rounded-[0.75rem] bg-white-4">
              <div className="flex justify-between"></div>
            </div>

            <div className="flex flex-col gap-4 rounded-[0.75rem] bg-white-4 p-4">
              <h2 className="flex items-center justify-between indent-[1.25rem] text-[0.875rem] font-bold text-white">
                Wallet Address{' '}
                <span className="text-dodger-blue">Address book</span>
              </h2>
              <CopyBox className="bg-white-8">
                <span className="break-all p-4 text-[0.75rem] font-bold text-casper">
                  <span className="text-dodger-blue">TXS3</span>
                  PfAU9hemKkoBWRUfsUkGBSrZGa
                  <span className="text-dodger-blue">gh6X</span>
                </span>
              </CopyBox>
            </div>

            <div className="flex flex-col gap-4 rounded-[0.75rem] bg-white-4 p-4">
              <h2 className="flex items-center justify-between indent-[1.25rem] text-[0.875rem] font-bold text-white">
                Withdrawal account
                <span>
                  Minimum <span className="text-crimson">1 USDT</span>
                </span>
              </h2>
              <input
                value={0}
                className="flex h-[47px] items-center rounded-[0.5rem] bg-white-8 px-4 text-[0.75rem] font-bold text-casper"
              />

              <div className="grid h-[47px] grid-cols-4 items-center gap-4 text-[0.75rem] font-bold">
                <div className="flex h-full items-center justify-center rounded-[0.5rem] bg-white-8 text-[0.75rem] font-bold text-casper">
                  Lowest
                </div>
                <div className="flex h-full items-center justify-center rounded-[0.5rem] bg-white-8 text-[0.75rem] font-bold text-casper">
                  25%
                </div>
                <div className="flex h-full items-center justify-center rounded-[0.5rem] bg-white-8 text-[0.75rem] font-bold text-casper">
                  50%
                </div>
                <div className="flex h-full items-center justify-center rounded-[0.5rem] bg-white-8 text-[0.75rem] font-bold text-casper">
                  Highest
                </div>
              </div>
            </div>

            <div className="">
              <span className="font-middle flex h-[47px] items-center gap-1 border-b border-white-8 text-casper">
                Available{' '}
                <span className="font-bold text-white"> 0.150263 USDT</span>
              </span>
              <div className="flex items-center justify-between py-2">
                <span className="text-[0.75rem] font-medium text-dodger-blue">
                  Withdraw amount
                </span>
                <span className="text-[0.75rem] font-bold text-dodger-blue">
                  0 USDT
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-1 text-[0.75rem] font-medium text-casper">
                  Handing fee: <InfoCircleIcon className="h-6 w-6" />
                </span>
                <span className="text-[0.75rem] font-bold text-white">
                  0 USDT
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-[0.75rem] font-medium text-casper">
                  Withdraw amount
                </span>
                <span className="text-[0.75rem] font-bold text-white">
                  0 USDT
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <FlatButton className="h-9 w-full text-[0.75rem] font-bold text-gallery">
                Withdraw money
              </FlatButton>
              <div className="flex items-center gap-2 text-[0.875rem] font-medium text-white">
                <InfoCircleIcon className="h-6 w-6" color="var(--malachite)" />
                Please set a fund password
              </div>

              <div className="items-center rounded-[0.75rem] bg-[var(--malachite)21] p-4 text-[0.875rem] font-medium text-white">
                For security reasons, larger or suspicious withdrawals may take
                1-6 hours to review. Thank you for your patience!
              </div>
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
            <div className="flex flex-col gap-4 overflow-hidden rounded-[0.75rem] bg-white-4 p-4">
              <h2 className="text-[0.875rem] font-bold text-white">
                Replenishment method
              </h2>
              <div className="grid h-[48px] grid-cols-[auto_auto_56px] items-center rounded-[0.75rem] bg-mirage p-[6px] pl-2">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/wallets/transak.png"
                    alt="transak"
                    className="h-6"
                  />
                </div>
                <div className="text-[0.75rem] font-medium text-dodger-blue">
                  Transak
                </div>
                <div className="text-[0.75rem] font-bold text-polo-blue">
                  10-99999
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 overflow-hidden rounded-[0.75rem] bg-white-4 p-4">
              <h2 className="text-[0.875rem] font-bold text-gallery">
                No cryptocurrency?
              </h2>
              <p className="text-[0.875rem] text-casper">
                Follow these simple steps and the funds will be automatically
                transferred to your wallet as shown below.
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden rounded-[0.75rem] bg-white-4 p-4">
              <h2 className="text-[0.875rem] font-bold text-gallery">
                Networks
              </h2>
              <div className="flex justify-between overflow-hidden rounded-[0.75rem] bg-white-8 p-1">
                <div className="flex h-9 w-[148px] items-center gap-2 rounded-[0.75rem] bg-white-13 px-3">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    className="h-6 w-6"
                    alt="usdt"
                  />
                  <span className="text-[0.875rem] font-bold text-gallery">
                    Tether
                  </span>
                  <span className="text-[0.875rem] font-bold text-casper">
                    USDT
                  </span>
                </div>
                <div className="flex items-center justify-end text-[0.875rem] font-bold uppercase text-white">
                  tron
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden rounded-[0.75rem] bg-white-4 p-4">
              <h2 className="text-[0.875rem] font-bold text-gallery">
                Purchase amount
              </h2>
              <div className="flex justify-between overflow-hidden rounded-[0.75rem] bg-white-8 p-1">
                <div className="flex h-9 items-center gap-2 rounded-[0.75rem] bg-white-13 px-3">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    className="h-6 w-6"
                    alt="usdt"
                  />
                  <span className="text-[0.875rem] font-bold text-gallery">
                    0
                  </span>
                </div>
                <div className="flex items-center justify-end gap-1 text-[0.875rem] font-bold text-white">
                  pay <span className="text-malachite">+0</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 py-4 text-[0.875rem] font-medium text-white">
              Minimum purchase amount{' '}
              <span className="text-dodger-blue">10 USDT</span>
            </div>
            <TDButton
              onClick={() => {}}
              className="h-[41px] w-full text-[0.875rem] text-gallery"
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

export default Withdraw
