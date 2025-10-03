import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import FAQ from './FAQ'

const Performance: React.FC = () => {
  const [activeTabOption, setActiveTabOption] = useState<'Active' | 'Default'>(
    'Active'
  )
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const sub = searchParams.get('sub')
    if (sub === 'today') {
      setActiveTabOption('Default') // Today corresponds to "Default" in current styling logic
    } else if (sub === 'yesterday') {
      setActiveTabOption('Active') // Yesterday corresponds to "Active"
    }
  }, [searchParams])

  const setSubQuery = (value: 'today' | 'yesterday') => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sub', value)
    router.replace(`${pathname}?${params.toString()}`)
  }

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

  const performanceData = [
    { gameType: 'Hash Game', total: 0, direct: 0, agent: 0 },
    { gameType: 'Crypto Games', total: 0, direct: 0, agent: 0 },
    { gameType: 'Hash Lottery', total: 0, direct: 0, agent: 0 },
    { gameType: 'Table Games', total: 0, direct: 0, agent: 0 },
    { gameType: 'Slots', total: 0, direct: 0, agent: 0 },
    { gameType: 'Live Casino', total: 0, direct: 0, agent: 0 },
    { gameType: 'Sports', total: 0, direct: 0, agent: 0 },
    { gameType: 'Low Frequency Lottery', total: 0, direct: 0, agent: 0 },
    { gameType: 'HASH Roulette', total: 0, direct: 0, agent: 0 },
  ]

  return (
    <div className="w-full lg:p-4">
      <div className="w-67 mb-4 flex w-fit rounded-lg bg-[#72707038] p-1 [@media(max-width:660px)]:w-full">
        <div
          onClick={() => {
            setActiveTabOption('Default')
            setSubQuery('today')
          }}
          className={`flex cursor-pointer items-center gap-2 rounded-lg border-none px-9 py-1.5 text-[14px] font-bold transition-all duration-200 hover:scale-[1.01] hover:bg-[rgba(255,255,255,0.08)] hover:shadow-lg [@media(max-width:660px)]:flex [@media(max-width:660px)]:w-[50%] [@media(max-width:660px)]:justify-center ${
            activeTabOption === 'Active'
              ? 'bg-transparent text-white shadow-lg'
              : 'border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.13)] text-gray-300'
          }`}
        >
          Today
        </div>
        <div
          onClick={() => {
            setActiveTabOption('Active')
            setSubQuery('yesterday')
          }}
          className={`flex cursor-pointer items-center gap-2 rounded-lg border-none px-9 py-1.5 text-[14px] font-bold transition-all duration-200 hover:scale-[1.01] hover:bg-[rgba(255,255,255,0.08)] hover:shadow-lg [@media(max-width:660px)]:flex [@media(max-width:660px)]:w-[50%] [@media(max-width:660px)]:justify-center ${
            activeTabOption === 'Default'
              ? 'bg-transparent text-white shadow-lg'
              : 'border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.13)] text-gray-300'
          }`}
        >
          Yesterday
        </div>
      </div>

      {/* Performance Table */}
      <div className="mb-4 overflow-x-auto rounded-lg">
        <table className="w-full text-white">
          <thead>
            <tr className="h-12 bg-gray-900">
              <th className="px-4 text-center text-sm font-semibold text-[#FFFFFFCC]">
                Game Type
              </th>
              <th className="px-4 text-center text-sm font-semibold text-[#FFFFFFCC]">
                Total performance
              </th>
              <th className="px-4 text-center text-sm font-semibold text-[#FFFFFFCC]">
                Direct performance
              </th>
              <th className="px-4 text-center text-sm font-semibold text-[#FFFFFFCC]">
                Agent performance
              </th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((row, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap text-center text-sm font-semibold text-casper">
                  {row.gameType}
                </td>
                <td className="whitespace-nowrap text-center text-sm font-semibold text-white">
                  {row.total}
                </td>
                <td className="whitespace-nowrap text-center text-sm font-semibold text-white">
                  <div className="inline-flex items-center justify-center gap-2">
                    {row.direct}
                    <img
                      src="/icons/file-report.svg"
                      alt="report"
                      className="h-4 w-4 opacity-60"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-center text-sm font-semibold text-white">
                  <div className="inline-flex items-center justify-center gap-2">
                    {row.agent}
                    <img
                      src="/icons/file-report.svg"
                      alt="report"
                      className="h-4 w-4 opacity-60"
                    />
                  </div>
                </td>
              </tr>
            ))}
            {/* Total Row */}
            <tr>
              <td className="whitespace-nowrap px-4 py-3 text-center text-[.8rem] font-bold text-[#A7B5CA]">
                Total
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-center text-[.8rem] font-bold text-[#60A5FA]">
                0
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-center text-[.8rem] font-bold text-[#60A5FA]">
                0
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-center text-[.8rem] font-bold text-[#60A5FA]">
                0
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* FAQs Section */}
      <FAQ faqs={faqs} />
    </div>
  )
}

export default Performance
