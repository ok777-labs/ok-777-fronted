import { ReactNode } from 'react'
import TDButton from '../Button/TDButton'
import AlertSquareIcon from '../icons/alert-square'
import InfoCircleIcon from '../icons/info-circle'

interface TXCard {
  title: string
  fee: string
  value: string
  desc: ReactNode
}

const TXCard: React.FC<TXCard> = ({ title, fee, value, desc }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 rounded-[12px] bg-white-4 p-4">
        <div className="relative flex w-full flex-col gap-4 p-4">
          <InfoCircleIcon className="absolute right-0 top-0 h-6 w-6 text-blue-bayoux" />
          <span className="text-[14px] font-normal text-white">{title}</span>
          <span className="text-[14px] text-dodger-blue">{fee}</span>
          <div className="text-[24px] text-yellow-orange">{value}</div>
          <span className="text-[14px] font-normal text-casper">{desc}</span>
        </div>
        <div>
          <TDButton
            type="blue"
            onClick={() => {}}
            className="h-[33px] w-[87px] gap-[10px] rounded-[8px] text-[12px] font-bold text-white"
          >
            <AlertSquareIcon className="h-4 w-4" />
            Claim
          </TDButton>
        </div>
      </div>
    </>
  )
}

export default TXCard
