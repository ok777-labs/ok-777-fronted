import React, { useState } from 'react'
import EditIcon from '@/components/ui/icons/edit'
import TDButton from '@/components/ui/Button/TDButton'
import FlatButton from '@/components/ui/Button/FlatButton'
import ModalContainer from '@/components/modals/ModalContainer'
import { DropdownSelect } from '@/components/ui/DropdownSelect'
import WalletIcon from '@/components/ui/icons/wallet'
import { FAQ } from '@/features/alliance/components'
import PlusIcon from '@/components/ui/icons/plus'
import { cn } from '@/lib/utils'
import ChevronsUpIcon from '@/components/ui/icons/chevrons-up'
import ChevronsDownIcon from '@/components/ui/icons/chevrons-down'
import { CopyBox } from '@/components/ui/CopyBox'
import TelegramIcon from '@/components/ui/icons/TelegramIcon'

const WalletAdd: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('usdt')
  const [selectedNetworkValue, setSelectedNetworkValue] = useState('trc')
  const [selectedTab, setSelectedTab] = useState('add')
  const [collapsedAddress, setCollapsedAddress] = useState(true)
  const toggleAddress = () => {
    setCollapsedAddress(!collapsedAddress)
  }

  const tabs = [
    {
      id: 'add',
      desc: 'Add address',
    },
    {
      id: 'activate',
      desc: 'Activation address',
    },
  ]

  const faqs = [
    {
      question: 'How to activate a wallet address?',
      answer:
        'Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.',
    },
    {
      question: 'Why do I need to activate the wallet address?',
      answer:
        'Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.',
    },
    {
      question: 'Will not activating the wallet address affect withdrawals?',
      answer:
        'Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.',
    },
  ]

  const networkOptions = [
    {
      value: 'trc',
      label: 'TRC20',
      icon: <img src="/icons/coin-icon/TRX.svg" />,
    },
  ]

  const currencyOptions = [
    {
      value: 'usdt',
      label: 'USDT',
      icon: <img src="/icons/coin-icon/USDT.svg" />,
    },
  ]

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="[@media(max-width:660px)]:w-full">
      <div className="flex w-full flex-col gap-4">
        {/* WalletAdd Header */}
        <h1 className="hidden text-lg font-bold text-white sm:text-xl lg:block">
          Wallet Address
        </h1>
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
        <div className="flex flex-col items-center gap-4 p-4 text-casper">
          <WalletIcon className="h-[3.5rem] w-[3.5rem]" />
          <p className="text-[0.875rem]">
            You have not added a wallet address yet.
          </p>
        </div>
        <TDButton
          onClick={toggleModal}
          type="blue"
          className="mx-auto h-[2.5625rem] w-[14.8125rem] gap-3 text-[0.875rem] font-bold text-gallery"
        >
          <PlusIcon />
          Add wallet address
        </TDButton>
        <h2 className="indent-[1.25rem] text-[1.125rem] font-bold uppercase text-white">
          faqs
        </h2>
        <FAQ faqs={faqs} title={false} />
      </div>
      <ModalContainer
        isOpen={isModalOpen}
        onClose={toggleModal}
        title="Activation address"
        className="lg:w-[30%]"
      >
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-4 rounded-[0.75rem] bg-white-4 p-1">
            {tabs.map(tab => (
              <div
                onClick={() => setSelectedTab(tab.id)}
                className={cn(
                  'flex h-9 items-center justify-center rounded-[0.5rem] text-[0.875rem] font-bold',
                  tab.id === selectedTab
                    ? 'bg-white-13 text-white'
                    : 'text-casper'
                )}
              >
                {tab.desc}
              </div>
            ))}
          </div>
          {selectedTab === 'add' ? (
            <>
              <div className="flex flex-col gap-4 rounded-[0.75rem] bg-white-4 p-4">
                <h2 className="text-[0.875rem] font-bold text-white">
                  Your address
                </h2>
                <input
                  type="text"
                  placeholder="Please enter the address to be activated"
                  className="form-input"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-4 rounded-[0.75rem] bg-white-4 p-4">
                <h2 className="flex items-center justify-between text-[0.875rem] font-bold text-white">
                  Transfer activation amount{' '}
                  <img src="/icons/coin-icon/USDT.svg" className="h-4 w-4" />
                </h2>
                <CopyBox className="bg-white-8">0.0888</CopyBox>
              </div>
              <div className="flex flex-col gap-4 rounded-[0.75rem] bg-white-4 p-4">
                <h2 className="text-[0.875rem] font-bold text-white">
                  Activate transfer address
                </h2>
                <CopyBox className="bg-white-8">
                  <span className="text-dodger-blue">TXS3</span>
                  PfAU9hemKkoBWRUfsUkGBSrZGa
                  <span className="text-dodger-blue">gh6X</span>
                </CopyBox>
              </div>
            </>
          )}
          <h2 className="text-[0.875rem] font-bold text-white">
            Activated address: <span className="text-dodger-blue">0</span>
          </h2>
          {collapsedAddress ? (
            <div className="overflow-hidden rounded-[0.5rem]">
              <div className="grid h-[56px] grid-cols-[20%_40%_40%] items-center border-b border-white-13 bg-mirage text-[12px] font-bold text-blue-bayoux">
                <span className="flex items-center justify-center">Type</span>
                <span className="flex items-center justify-center">
                  Address
                </span>
                <span className="flex items-center justify-center">State</span>
              </div>
              <div className="grid h-[48px] grid-cols-[20%_40%_40%] items-center bg-white-4 text-[12px] font-bold text-white">
                <span className="flex items-center justify-center">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    className="mx-auto h-6 w-6"
                  />
                </span>
                <span className="flex items-center justify-center">
                  TGFf7****ePvThd
                </span>
                <span className="flex items-center justify-center font-medium">
                  To be activated
                </span>
              </div>
            </div>
          ) : (
            <div className="h-px w-full bg-mirage-4" />
          )}
          <div onClick={toggleAddress} className="mx-auto">
            {collapsedAddress ? (
              <ChevronsUpIcon
                className="mx-auto h-[26px] w-[26px]"
                color="#A7B5CA"
              />
            ) : (
              <ChevronsDownIcon className="h-[26px] w-[26px]" color="#A7B5CA" />
            )}
          </div>
        </div>
      </ModalContainer>
    </div>
  )
}

export default WalletAdd
