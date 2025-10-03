'use client'

import BetTemplate from '@/components/BetTemplate'
import BlackButton from '@/components/ui/Button/BlackButton'
import TabButton from '@/components/ui/Button/TabButton'
import TDButton from '@/components/ui/Button/TDButton'
import TaskCard from '@/components/ui/cards/TaskCard'
import AlertSquareIcon from '@/components/ui/icons/alert-square'
import CopyIcon from '@/components/ui/icons/copy'
import CurrencyNotes1Icon from '@/components/ui/icons/currency-notes-1'
import InfoCircleIcon from '@/components/ui/icons/info-circle'

const FirstDepositPage = () => {
  const clickSubmit = () => {}

  const clickButton = () => {
    return
  }
  const data = {
    heading: 'First Deposit Bonus for New Members',
    title: {
      line1: 'deposit to reigh',
      line2: 'get up to 1588 Usdt',
    },
    background: "bg-[url('/images/banner/Banner02-1.jpg')]",
    submit: 'Claim now',
    onClick: clickSubmit,
    button: 'Go to recharge',
    onButtonClick: clickButton,
  }

  const tasks = [2500, 3000, 400, 345300, 23400, 5670, 345300, 23400, 5670]
  return (
    <BetTemplate {...data}>
      <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
        <div className="flex items-center justify-center text-[18px] font-bold text-white">
          Activity Fund Application
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-4 rounded-[12px] pt-0 2xl:grid-cols-3">
          <div className="flex items-center justify-center gap-4 rounded-[12px] bg-white-4 p-4">
            <div className="relative flex w-full flex-col gap-4 p-4">
              <InfoCircleIcon className="absolute right-0 top-0 h-6 w-6 text-blue-bayoux" />
              <span className="text-[14px] font-normal text-white">
                First single transaction≥50U
              </span>
              <span className="text-[14px] text-dodger-blue">20%</span>
              <div className="text-[24px] text-yellow-orange">20</div>
              <span className="text-[14px] font-normal text-casper">
                HighestGift Turnover Multiple <b className="text-white">10</b>
              </span>
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
          <div className="flex items-center justify-center gap-4 rounded-[12px] bg-white-4 p-4">
            <div className="relative flex w-full flex-col gap-4 p-4">
              <InfoCircleIcon className="absolute right-0 top-0 h-6 w-6 text-blue-bayoux" />
              <span className="text-[14px] font-normal text-white">
                First single transaction≥50U
              </span>
              <span className="text-[14px] text-dodger-blue">20%</span>
              <div className="text-[24px] text-yellow-orange">20</div>
              <span className="text-[14px] font-normal text-casper">
                HighestGift Turnover Multiple <b className="text-white">10</b>
              </span>
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
          <div className="flex items-center justify-center gap-4 rounded-[12px] bg-white-4 p-4">
            <div className="relative flex w-full flex-col gap-4 p-4">
              <InfoCircleIcon className="absolute right-0 top-0 h-6 w-6 text-blue-bayoux" />
              <span className="text-[14px] font-normal text-white">
                First single transaction≥50U
              </span>
              <span className="text-[14px] text-dodger-blue">20%</span>
              <div className="text-[24px] text-yellow-orange">20</div>
              <span className="text-[14px] font-normal text-casper">
                HighestGift Turnover Multiple <b className="text-white">10</b>
              </span>
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
          <div className="flex items-center justify-center gap-4 rounded-[12px] bg-white-4 p-4">
            <div className="relative flex w-full flex-col gap-4 p-4">
              <InfoCircleIcon className="absolute right-0 top-0 h-6 w-6 text-blue-bayoux" />
              <span className="text-[14px] font-normal text-white">
                First single transaction≥50U
              </span>
              <span className="text-[14px] text-dodger-blue">20%</span>
              <div className="text-[24px] text-yellow-orange">20</div>
              <span className="text-[14px] font-normal text-casper">
                HighestGift Turnover Multiple <b className="text-white">10</b>
              </span>
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
          <div className="flex items-center justify-center gap-4 rounded-[12px] bg-white-4 p-4">
            <div className="relative flex w-full flex-col gap-4 p-4">
              <InfoCircleIcon className="absolute right-0 top-0 h-6 w-6 text-blue-bayoux" />
              <span className="text-[14px] font-normal text-white">
                First single transaction≥50U
              </span>
              <span className="text-[14px] text-dodger-blue">20%</span>
              <div className="text-[24px] text-yellow-orange">20</div>
              <span className="text-[14px] font-normal text-casper">
                HighestGift Turnover Multiple <b className="text-white">10</b>
              </span>
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
          <div className="flex items-center justify-center gap-4 rounded-[12px] bg-white-4 p-4">
            <div className="relative flex w-full flex-col gap-4 p-4">
              <InfoCircleIcon className="absolute right-0 top-0 h-6 w-6 text-blue-bayoux" />
              <span className="text-[14px] font-normal text-white">
                First single transaction≥50U
              </span>
              <span className="text-[14px] text-dodger-blue">20%</span>
              <div className="text-[24px] text-yellow-orange">20</div>
              <span className="text-[14px] font-normal text-casper">
                HighestGift Turnover Multiple <b className="text-white">10</b>
              </span>
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
          <div className="flex items-center justify-center gap-4 rounded-[12px] bg-white-4 p-4">
            <div className="relative flex w-full flex-col gap-4 p-4">
              <InfoCircleIcon className="absolute right-0 top-0 h-6 w-6 text-blue-bayoux" />
              <span className="text-[14px] font-normal text-white">
                First single transaction≥50U
              </span>
              <span className="text-[14px] text-dodger-blue">20%</span>
              <div className="text-[24px] text-yellow-orange">20</div>
              <span className="text-[14px] font-normal text-casper">
                HighestGift Turnover Multiple <b className="text-white">10</b>
              </span>
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
          <div className="flex items-center justify-center gap-4 rounded-[12px] bg-white-4 p-4">
            <div className="relative flex w-full flex-col gap-4 p-4">
              <InfoCircleIcon className="absolute right-0 top-0 h-6 w-6 text-blue-bayoux" />
              <span className="text-[14px] font-normal text-white">
                First single transaction≥50U
              </span>
              <span className="text-[14px] text-dodger-blue">20%</span>
              <div className="text-[24px] text-yellow-orange">20</div>
              <span className="text-[14px] font-normal text-casper">
                HighestGift Turnover Multiple <b className="text-white">10</b>
              </span>
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
          <div className="flex items-center justify-center gap-4 rounded-[12px] bg-white-4 p-4">
            <div className="relative flex w-full flex-col gap-4 p-4">
              <InfoCircleIcon className="absolute right-0 top-0 h-6 w-6 text-blue-bayoux" />
              <span className="text-[14px] font-normal text-white">
                First single transaction≥50U
              </span>
              <span className="text-[14px] text-dodger-blue">20%</span>
              <div className="text-[24px] text-yellow-orange">20</div>
              <span className="text-[14px] font-normal text-casper">
                HighestGift Turnover Multiple <b className="text-white">10</b>
              </span>
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
          <div className="hidden 2xl:block" />
          <div className="flex items-center justify-center gap-4 rounded-[12px] bg-white-4 p-4">
            <div className="relative flex w-full flex-col gap-4 p-4">
              <InfoCircleIcon className="absolute right-0 top-0 h-6 w-6 text-blue-bayoux" />
              <span className="text-[14px] font-normal text-white">
                First single transaction≥50U
              </span>
              <span className="text-[14px] text-dodger-blue">20%</span>
              <div className="text-[24px] text-yellow-orange">20</div>
              <span className="text-[14px] font-normal text-casper">
                HighestGift Turnover Multiple <b className="text-white">10</b>
              </span>
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
          <div className="hidden 2xl:block" />
        </div>
        <div className="flex items-center justify-center rounded-[12px] bg-white-4 p-4 text-[14px] text-casper">
          This event cannot be repeated or claimed multiple times. Please check
          the turnover multiple and <br className="hidden lg:block" /> choose
          your largest reward proactively
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
        <div className="flex items-center justify-center text-[18px] font-bold text-white">
          How to claim the bonus
        </div>
        <div className="grid gap-4 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col justify-between gap-8 rounded-[12px] bg-white-4 p-8">
            <div>
              <TabButton
                type="one"
                title="Step One"
                className="h-[23px] text-[12px] font-bold text-white"
              />
              <span className="pt-4 text-[14px] font-bold text-casper">
                New user registration 365 Select a single recharge level within
                days
              </span>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/images/Device.png"
                alt="phone"
                className="h-[224.03px]"
              />
              <div className="absolute left-1/2 top-2/3 z-[999] flex w-[312px] w-[320px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-between rounded-[16px] bg-mirage py-[10px] pl-[16px] pr-[9px] shadow-[0_8px_16px_#3389FF40]">
                <BlackButton className="">
                  <CurrencyNotes1Icon className="h-4 w-4" color="#1BB83D" />
                </BlackButton>
                <div>
                  <span className="block text-[10px] text-casper">
                    Recharge successful
                  </span>
                  <b className="block text-[18px] text-malachite">+5000.00</b>
                </div>
              </div>
              <div className="absolute left-1/2 top-3/4 z-[99] flex h-[58px] w-[276.88px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-between rounded-[16px] bg-mirage-8a py-[10px] pl-[16px] pr-[9px] shadow-[0_8px_16px_#3389FF40]"></div>
              <div className="absolute left-1/2 top-[80%] z-[9] flex h-[58px] w-[239.56px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-between rounded-[16px] bg-mirage-8a py-[10px] pl-[16px] pr-[9px] shadow-[0_8px_16px_#3389FF40]"></div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-[12px] bg-white-4 p-8">
            <TabButton
              type="one"
              title="Step Two"
              className="h-[23px] text-[12px] font-bold text-white"
            />
            <span className="text-[14px] font-bold text-casper">
              Receive corresponding bonus
            </span>
            <div className="flex items-center justify-center">
              <img src="/images/Frame2.png" alt="phone" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center justify-between gap-8 rounded-[12px] bg-white-4 p-8 2xl:grid-cols-[60%_40%]">
          <div>
            <TabButton
              type="one"
              title="Step Three"
              className="h-[23px] text-[12px] font-bold text-white"
            />
            <span className="pt-4 text-[14px] font-bold text-casper">
              New user registration 365 Select a single recharge level within
              days
            </span>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src="/images/Frame3.png"
              alt="phone"
              className="h-[224.03px]"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <TDButton
            onClick={() => {}}
            type="blue"
            className="h-[42px] w-[217px] text-[14px]"
          >
            Go to recharge
          </TDButton>
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
    </BetTemplate>
  )
}

export default FirstDepositPage
