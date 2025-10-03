'use client'

import BetTemplate from '@/components/BetTemplate'
import BlackButton from '@/components/ui/Button/BlackButton'
import TabButton from '@/components/ui/Button/TabButton'
import TDButton from '@/components/ui/Button/TDButton'
import TaskCard from '@/components/ui/cards/TaskCard'
import TXCard from '@/components/ui/cards/TXCard'
import AlertSquareIcon from '@/components/ui/icons/alert-square'
import CopyIcon from '@/components/ui/icons/copy'
import CurrencyNotes1Icon from '@/components/ui/icons/currency-notes-1'
import InfoCircleIcon from '@/components/ui/icons/info-circle'

const EnergyBankPage = () => {
  const clickSubmit = () => {}

  const clickButton = () => {
    return
  }
  const data = {
    heading: 'Hash Game Energy Bank',
    title: {
      line1: 'hash game',
      line2: 'energy bank',
    },
    background: "bg-[url('/images/banner/Banner07-1.jpg')]",
    submit: 'Claim now',
    onClick: clickSubmit,
    button: 'Go to bet',
    onButtonClick: clickButton,
  }

  const tasks = [2500, 3000, 400, 345300, 23400, 5670, 345300, 23400, 5670]
  return (
    <BetTemplate {...data}>
      <div className="flex flex-col gap-4 2xl:flex-row">
        <div className="flex w-full flex-col items-center gap-4 overflow-hidden rounded-[12px] bg-white-4 p-4 2xl:p-8">
          <span className="text-[22px] font-bold text-white">
            Amount Per Bet <span className="text-yellow-orange">≥50U</span>
          </span>
          <span className="text-[14px] text-casper">Award Tron Energy</span>
        </div>
        <div className="flex w-full flex-col items-center gap-4 overflow-hidden rounded-[12px] bg-white-4 p-4 2xl:p-8">
          <span className="text-[22px] font-bold text-white">
            <span className="text-yellow-orange">≥50U </span> Free with every
            bet{' '}
          </span>
          <span className="text-[14px] text-casper">Award Tron Energy</span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
        <div className="flex items-center justify-center text-[18px] font-bold text-white">
          How to claim the bonus
        </div>
        <div className="grid gap-4 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col gap-8 rounded-[12px] bg-white-4 p-8">
            <div>
              <TabButton
                type="one"
                title="Step One"
                className="h-[23px] text-[12px] font-bold text-white"
              />
              <span className="pt-4 text-[14px] font-bold text-casper">
                Place a single ≥50 bet in the game. The system automatically
                gives energy to offset the miner's fee required for the next
                transaction
              </span>
            </div>
            <div className="relative flex h-full items-center justify-center">
              <img src="/images/Frame5.png" alt="phone" className="h-[140px]" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-[12px] bg-white-4 p-8">
            <TabButton
              type="one"
              title="Step Two"
              className="h-[23px] text-[12px] font-bold text-white"
            />
            <span className="text-[14px] font-bold text-casper">
              When there is energy in the account, the next transfer
              automatically reduces the fee
            </span>
            <div className="relative flex w-full items-center justify-center">
              <img
                src="/images/Device6.png"
                className="h-[225px]"
                alt="phone"
              />
              <div className="absolute left-1/2 top-1/2 flex w-[255px] -translate-x-1/2 translate-y-1/2 transform">
                <div className="flex h-[49px] w-full items-center justify-center rounded-[16px] border-l-[3px] border-t-[1px] border-l-malachite border-t-casper bg-mirage text-[14px] font-bold text-casper shadow-[0_8px_16px_#3389FF40]">
                  Fee exemption
                </div>
                <img
                  src="/images/percent.png"
                  alt="percent"
                  className="ml-[-15px] h-[84.85px] w-[84.85px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-[12px] bg-white-4 p-4">
          <h2 className="text-[18px] text-gallery">Rules and Terms</h2>
          <div className="text-[14px] font-bold text-white">
            <p>Event Venue: Live Game </p>
            <p>Eligible: All </p>
            <p>Promotion Period: Long-term activity</p>
          </div>
          <div className="px-4">
            <ol className="list-decimal text-[14px] text-casper">
              <li className="pb-4">
                To receive the reward amount in this activity, you can withdraw
                money with only 3 times the turnover.
              </li>

              <li className="pb-4">
                You can participate in this event every day and you can claim 7
                rewards.
              </li>

              <li className="pb-4">
                Definition of valid turnover: Bets that result in a win or loss
                are considered valid betting turnover
              </li>

              <li className="pb-4">
                Each player can only register one account. Registering multiple
                accounts to participate in this event will be considered bonus
                abuse, and all profits and bonuses will be canceled. If any user
                or group uses abnormal methods to exploit offers, the platform
                reserves the right to freeze the account or cancel the bonus
                qualification without notice.
              </li>
            </ol>
            <div className="flex justify-center py-16">
              <BlackButton>
                <CopyIcon className="g-4 w-4" />
              </BlackButton>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 rounded-[12px] bg-white-4 p-4">
        <h2 className="text-[18px] text-gallery">Rules and Terms</h2>
        <div className="text-[14px] font-bold text-white">
          <p>Event Venue: Live Game </p>
          <p>Eligible: All </p>
          <p>Promotion Period: Long-term activity</p>
        </div>
        <div className="px-4">
          <ol className="list-decimal text-[14px] text-casper">
            <li className="pb-4">
              To receive the reward amount in this activity, you can withdraw
              money with only 3 times the turnover.
            </li>

            <li className="pb-4">
              You can participate in this event every day and you can claim 7
              rewards.
            </li>

            <li className="pb-4">
              Definition of valid turnover: Bets that result in a win or loss
              are considered valid betting turnover
            </li>

            <li className="pb-4">
              Each player can only register one account. Registering multiple
              accounts to participate in this event will be considered bonus
              abuse, and all profits and bonuses will be canceled. If any user
              or group uses abnormal methods to exploit offers, the platform
              reserves the right to freeze the account or cancel the bonus
              qualification without notice.
            </li>
          </ol>
          <div className="flex justify-center py-16">
            <BlackButton>
              <CopyIcon className="g-4 w-4" />
            </BlackButton>
          </div>
        </div>
      </div>
    </BetTemplate>
  )
}

export default EnergyBankPage
