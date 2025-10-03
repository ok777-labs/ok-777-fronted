'use client'

import BetTemplate from '@/components/BetTemplate'
import BlackButton from '@/components/ui/Button/BlackButton'
import TDButton from '@/components/ui/Button/TDButton'
import TaskCard from '@/components/ui/cards/TaskCard'
import AlertSquareIcon from '@/components/ui/icons/alert-square'
import CopyIcon from '@/components/ui/icons/copy'

const LoadToChampionPage = () => {
  const clickSubmit = () => {}

  const clickButton = () => {}
  const data = {
    heading: 'The Road to Sports Champion',
    title: {
      line1: 'The Road to Sports Champion',
      line2: 'The maximum is 588U, and you can se',
    },
    background: "bg-[url('/images/banner/Banner05-1.jpg')]",
    submit: 'Experience now',
    onClick: clickSubmit,
    button: 'Go to bet',
    onButtonClick: clickButton,
  }

  const tasks = [2500, 3000, 400, 345300, 23400, 5670, 345300, 23400, 5670]
  return (
    <BetTemplate {...data}>
      <div className="mb-8 grid grid-cols-1 gap-4 rounded-[12px] bg-white-4 p-4 lg:grid-cols-2">
        {tasks.map((task, index) => (
          <TaskCard key={index} n={index + 1} price={task} />
        ))}
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
    </BetTemplate>
  )
}

export default LoadToChampionPage
