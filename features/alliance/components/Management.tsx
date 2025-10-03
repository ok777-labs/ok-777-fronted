import React from 'react'
import FAQ from './FAQ'

const Management: React.FC = () => {
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
    <div className="">
      <div className="relative mb-4 w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img
            src="/icons/search.svg"
            alt="search"
            className="h-5 w-5 text-[#55657E]"
          />
        </div>
        <input
          type="text"
          placeholder="Manufacturer search"
          className="w-full rounded-lg border border-[#55657E] bg-transparent py-3 pl-10 pr-3 text-white placeholder-[#55657E] outline-none"
        />
      </div>
      <div className="mb-4 overflow-x-auto rounded-[12px]">
        <table className="w-full text-white">
          <thead>
            <tr className="bg-[#1119238A]">
              <th className="px-4 py-3 text-[12px] font-bold text-[#55657E] [@media(max-width:500px)]:px-0">
                Ranking
              </th>
              <th className="px-4 py-3 text-[12px] font-bold text-[#55657E] [@media(max-width:500px)]:px-0">
                ID
              </th>
              <th className="px-4 py-3 text-[12px] font-bold text-[#55657E] [@media(max-width:500px)]:px-0">
                Performance USDT
              </th>
              <th className="px-4 py-3 text-[12px] font-bold text-[#55657E] [@media(max-width:500px)]:px-0">
                Performance TRX
              </th>
            </tr>
          </thead>
        </table>
        <img
          src="/images/login-into-banner.png"
          alt="arrow-down"
          className="z--1 relative mx-auto mt-4 h-[150px] w-[150px] grayscale"
        />
      </div>
      {/* FAQs Section */}
      <FAQ faqs={faqs} />
    </div>
  )
}

export default Management
