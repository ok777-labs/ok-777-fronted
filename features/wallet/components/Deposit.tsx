import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { DropdownSelect } from '@/components/ui/DropdownSelect'
import CopyIcon from '@/components/ui/icons/copy'
import InfoCircleIcon from '@/components/ui/icons/info-circle'
import TDButton from '@/components/ui/Button/TDButton'
import { useI18n } from '@/context/I18nProvider'

const Deposit: React.FC = () => {
  const { t } = useI18n()
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
      icon: <img src="/icons/coin-icon/USDT.svg" alt="" />,
    },
  ]

  const currencyOptions1 = [
    {
      value: 'uah',
      label: 'UAH',
      icon: (
        <img
          src="/icons/flag-icon/ua.svg"
          alt=""
          className="h-6 rounded-[4px]"
        />
      ),
    },
  ]

  const networkOptions = [
    {
      value: 'trc',
      label: 'TRC20',
      icon: <img src="/icons/coin-icon/TRX.svg" alt="" />,
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
    <div className="w-full">
      <div className="flex w-full flex-col gap-2">
        {/* Deposit Header */}
        <h1 className="hidden text-lg font-bold text-white sm:text-xl lg:block">
          {selectedCurrencyType === 'Crypto' ? 'Deposit' : 'To replenish'}
        </h1>
        <div className="grid h-11 grid-cols-2 gap-4 overflow-hidden rounded-[12px] bg-white-4 p-1">
          {[
            { label: 'crypto', key: 'Crypto' },
            { label: 'fiat', key: 'Fiat' },
          ].map((item, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center justify-center overflow-hidden rounded-[8px] text-[14px] font-bold',
                selectedCurrencyType === item.key
                  ? 'bg-white-13 text-gallery'
                  : 'text-casper'
              )}
              onClick={() => handleCurrencyTypeClick(item.key)}
            >
              {t(`wallet.${item.label}`)}
            </div>
          ))}
        </div>

        {selectedCurrencyType === 'Crypto' ? (
          <>
            <div className="grid grid-cols-2 gap-4 rounded-[12px]">
              <DropdownSelect
                label={t('wallet.currency')}
                value={selectedValue}
                options={currencyOptions}
                onChange={setSelectedValue}
              />
              <DropdownSelect
                label={t('wallet.network')}
                value={selectedNetworkValue}
                options={networkOptions}
                onChange={setSelectedNetworkValue}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 rounded-[12px] bg-white-4 p-2 sm:grid-cols-[150px_auto] align-bottom">
              <div className="mx-auto rounded-[8px] p-2">
                <img
                  src="images/qr.png"
                  className="aspect-[1/1] h-[125px]"
                  alt="qr"
                />
              </div>
              <div className="flex w-full flex-col justify-between gap-2">
                <h2 className="text-md font-bold text-white">
                  {t('wallet.address')}
                </h2>
                <div className="flex h-[62px] w-full items-center justify-center rounded-[8px] bg-white-8">
                  <span className="break-all p-2 text-sm font-semibold text-casper">
                    <span className="text-dodger-blue">TXS3</span>
                    PfAU9hemKkoBWRUfsUkGBSrZGa
                    <span className="text-dodger-blue">gh6X</span>
                  </span>
                </div>
                <div className="flex h-9 w-full items-center justify-center gap-1 rounded-[12px] bg-white-13 text-[1rem] font-bold text-casper">
                  <CopyIcon />
                  <span>{t('wallet.copy')}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-[12px] bg-[#1BB83D21] p-2 pl-2">
              <InfoCircleIcon className="h-6 w-6" color="#1BB83D" />
              <p className="w-[90%] text-[14px] font-medium text-white">
                <span>{t('wallet.noticeUsdt')}</span>
              </p>
            </div>
          </>
        ) : (
          <>
            <DropdownSelect
              label={t('wallet.currency')}
              value={selectedCurrencyValue}
              options={currencyOptions1}
              onChange={setSelectedCurrencyValue}
            />
            <div className="flex flex-col gap-4 overflow-hidden rounded-[12px] bg-white-4 p-4">
              <h2 className="text-[14px] font-bold text-white">
                <span>{t('wallet.relenishmentMethod')}</span>
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
                {t('wallet.noCurrency')}?
              </h2>
              <p className="text-[14px] text-casper">
                {t('wallet.relenishmentMethodDescription')}
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

export default Deposit
