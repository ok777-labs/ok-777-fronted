import { CopyBox } from '@/components/ui/CopyBox'
import SwapDiagonalIcon from '@/components/ui/icons/swap-diagonal'
import React from 'react'

const Swap: React.FC = () => {
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

  return (
    <div className="flex flex-col gap-4 [@media(max-width:660px)]:w-full">
      <p className="text-[18px] font-bold text-white [@media(max-width:660px)]:hidden">
        Swap
      </p>
      <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
        <h2 className="flex items-center justify-between indent-[20px] text-[14px] font-bold text-white">
          Send
          <span>
            Balance <span className="text-dodger-blue"> 0 USDT</span>
          </span>
        </h2>
        <div className="flex h-[47px] items-center rounded-[8px] bg-white-8 px-4 text-[12px] font-bold text-casper">
          0
        </div>
        <div className="grid h-[47px] grid-cols-4 items-center gap-4 text-[12px] font-bold">
          <div className="flex h-full items-center justify-center rounded-[8px] bg-white-8 text-[12px] font-bold text-casper">
            Lowest
          </div>
          <div className="flex h-full items-center justify-center rounded-[8px] bg-white-8 text-[12px] font-bold text-casper">
            25%
          </div>
          <div className="flex h-full items-center justify-center rounded-[8px] bg-white-8 text-[12px] font-bold text-casper">
            50%
          </div>
          <div className="flex h-full items-center justify-center rounded-[8px] bg-white-8 text-[12px] font-bold text-casper">
            Highest
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <SwapDiagonalIcon className="h-8 w-8" color="#A7B5CA" />
      </div>
      <div className="flex flex-col gap-4 overflow-hidden rounded-[12px] bg-white-4 p-4">
        <h2 className="text-[14px] font-bold text-gallery">Get</h2>
        <div className="flex gap-2 overflow-hidden rounded-[12px] bg-white-8 p-1">
          <div className="flex h-9 items-center gap-2 rounded-[12px] bg-white-13 px-3">
            <img
              src="/icons/coin-icon/USDT.svg"
              className="h-6 w-6"
              alt="usdt"
            />
            <span className="text-[14px] font-bold uppercase text-gallery">
              trx
            </span>
          </div>
          <div className="flex items-center justify-end text-[14px] font-bold uppercase text-casper">
            0
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
        <h2 className="flex items-center justify-between indent-[20px] text-[14px] font-bold text-white">
          Exchange Address
        </h2>
        <CopyBox className="bg-white-8">
          <span className="break-all p-4 text-[12px] font-bold text-casper">
            <span className="text-dodger-blue">TXS3</span>
            PfAU9hemKkoBWRUfsUkGBSrZGa
            <span className="text-dodger-blue">gh6X</span>
          </span>
        </CopyBox>
      </div>
      <div className="flex flex-col gap-4 border-t border-white-8 py-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-[12px] font-medium text-casper">
            Exchange rate:
          </span>
          <span className="text-[12px] font-bold text-white">
            1 USDT - NaN TRX
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-[12px] font-medium text-casper">
            Exchange fee:
          </span>
          <span className="text-[12px] font-bold text-white">0 USDT</span>
        </div>
      </div>
    </div>
  )
}

export default Swap
