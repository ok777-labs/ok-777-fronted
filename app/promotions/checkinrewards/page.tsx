'use client'

import BetTemplate from '@/components/BetTemplate'
import BlackButton from '@/components/ui/Button/BlackButton'
import TabButton from '@/components/ui/Button/TabButton'
import TDButton from '@/components/ui/Button/TDButton'
import DailyRewardCard from '@/components/ui/cards/DailyRewardCard'
import TaskCard from '@/components/ui/cards/TaskCard'
import TXCard from '@/components/ui/cards/TXCard'
import { CopyBox } from '@/components/ui/CopyBox'
import AlertSquareIcon from '@/components/ui/icons/alert-square'
import CopyIcon from '@/components/ui/icons/copy'
import CurrencyNotes1Icon from '@/components/ui/icons/currency-notes-1'
import InfoCircleIcon from '@/components/ui/icons/info-circle'

const CheckinRewardPage = () => {
  const clickSubmit = () => {}

  const socials = [
    'Telegram',
    'Facebook',
    'X',
    'Instagram',
    'WhatsApp',
    'Line',
    'Youtube',
    'Discord',
    'Tiktok',
    'qr-scan',
  ] as const

  const clickButton = () => {
    return
  }
  const data = {
    heading: 'First Deposit Bonus for New Members',
    title: {
      line1: 'Refer &',
      line2: 'Rewards',
    },
    background: "bg-[url('/images/banner/Banner06-1.jpg')]",
    submit: 'Claim now',
    onClick: clickSubmit,
  }

  const rewards = ['1U', '2u', '5u', '5u', '5u', '5u', '24u + 18u']
  return (
    <BetTemplate {...data}>
      <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
        <div className="flex items-center justify-center text-[18px] font-bold text-white">
          <span>Activity Fund Application</span>
        </div>
        <div className="grid grid-cols-10 items-center justify-between gap-4 rounded-[12px]">
          {rewards.map((reward, index) => (
            <DailyRewardCard
              className={index > 4 ? 'col-span-5' : 'col-span-2'}
              reward={reward}
              key={index}
              date={index + 1}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
        <div className="mx-auto flex w-[70%] items-center justify-center text-[14px] text-casper">
          <span>
            Sign in The seventh day continuously, and you can unlock additional
            rewards. After signing out, it will be recalculated from the first
            day
          </span>
        </div>
        <div className="grid grid-cols-1 items-center justify-between gap-4 rounded-[12px] 2xl:grid-cols-3">
          <div className="flex flex-col items-center gap-4 rounded-[12px] bg-white-4 p-4">
            <span className="text-[14px] font-bold text-white">
              <span>0Day</span>
            </span>
            <span className="text-[14px] font-bold text-dodger-blue">
              <span>Continuous sign-ins this round</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-[12px] bg-white-4 p-4">
            <span className="text-[14px] font-bold text-white">
              <span>0U</span>
            </span>
            <span className="text-[14px] font-bold text-dodger-blue">
              <span>Reward received</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-[12px] bg-white-4 p-4 2xl:flex-row">
            <div>
              <img src="/images/coins.svg" alt="coins" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-[14px] font-bold text-white">65U</span>
              <span className="text-[14px] font-bold text-dodger-blue">
                Rewards to be collected this round
              </span>
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

export default CheckinRewardPage
