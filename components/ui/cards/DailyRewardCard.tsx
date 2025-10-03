'use client'

import { cn } from '@/lib/utils'

interface DailyRewardProps {
  date: number
  reward: string
  className: string
}

const DailyRewardCard: React.FC<DailyRewardProps> = ({
  date,
  reward,
  className,
}) => {
  return (
    <>
      <div className={cn('overflow-hidden rounded-[12px]', className)}>
        <div className="flex w-full items-center justify-center bg-white-8 py-[8px] text-[14px] font-bold text-white">
          <span>Day {date}</span>
        </div>
        <div className="flex flex-col items-center gap-4 bg-white-4 p-4">
          <img src="/images/coins.svg" alt="coins" />
          <span className="text-[14px] font-bold uppercase text-dodger-blue">
            {reward}
          </span>
        </div>
      </div>
    </>
  )
}

export default DailyRewardCard
