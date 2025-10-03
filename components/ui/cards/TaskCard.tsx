'use client'

import TDButton from '../Button/TDButton'
import AlertSquareIcon from '../icons/alert-square'

interface TaskCardProps {
  n: Number
  price: Number
}

const TaskCard: React.FC<TaskCardProps> = ({ n, price }) => {
  return (
    <div className="overflow-hidden rounded-[12px]">
      <div className="w-full bg-white-8 px-4 py-2 text-[14px] font-bold text-white">
        The <>{n}</>th level task
      </div>
      <div className="bg-white-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <img
              src="/icons/game-icon/NiuNiu1.svg"
              className="h-12 w-12"
              alt="coin"
            />
            <div className="font-bold text-white">
              <span className="block">
                <span>Cumulative valid bets on the day</span>
              </span>
              <span className="block uppercase">
                <span>
                  <span className="text-yellow-orange">
                    <>{price}</>
                  </span>
                  usdt
                </span>
              </span>
            </div>
          </div>
          <TDButton
            onClick={() => {}}
            type="blue"
            className="h-[33px] w-[87px] gap-[10px] rounded-[8px] text-[12px] font-bold text-white"
          >
            <AlertSquareIcon />
            Claim
          </TDButton>
        </div>
        <div className="flex pt-4">
          <div className="relative h-[14px] w-full rounded-full bg-white-13 p-[3px]">
            <div className="h-full w-[50%] rounded-full border-t border-white-33 bg-crimson"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[10px] font-bold text-white">
              50%
            </div>
          </div>
          <div className="flex w-8 items-center justify-center text-[10px] font-bold text-dodger-blue">
            1U
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
