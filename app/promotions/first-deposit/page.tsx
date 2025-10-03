'use client'

import BetTemplate from '@/components/BetTemplate'
import BlackButton from '@/components/ui/Button/BlackButton'
import TabButton from '@/components/ui/Button/TabButton'
import TDButton from '@/components/ui/Button/TDButton'
import TaskCard from '@/components/ui/cards/TaskCard'
import TXCard from '@/components/ui/cards/TXCard'
import { CopyBox } from '@/components/ui/CopyBox'
import AlertSquareIcon from '@/components/ui/icons/alert-square'
import CopyIcon from '@/components/ui/icons/copy'
import CurrencyNotes1Icon from '@/components/ui/icons/currency-notes-1'
import InfoCircleIcon from '@/components/ui/icons/info-circle'

const FirstDeposit1Page = () => {
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
    background: "bg-[url('/images/banner/Banner12-1.jpg')]",
    submit: 'Claim now',
    onClick: clickSubmit,
    button: 'Recommend Friends',
    onButtonClick: clickButton,
  }

  const tasks = [2500, 3000, 400, 345300, 23400, 5670, 345300, 23400, 5670]
  return (
    <BetTemplate {...data}>
      <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
        <div className="flex items-center justify-center text-[18px] font-bold text-white">
          Activity Fund Application
        </div>
        <div className="grid grid-cols-1 items-center justify-between gap-4 rounded-[12px] pb-4 xl:grid-cols-3 2xl:grid-cols-6">
          <TXCard
            title="Additional rewards"
            fee="188U"
            value="30"
            desc={<>Cumulative number of invitees</>}
          />
          <TXCard
            title="Additional rewards"
            fee="188U"
            value="100"
            desc={<>Cumulative number of invitees</>}
          />
          <TXCard
            title="Additional rewards"
            fee="188U"
            value="500"
            desc={<>Cumulative number of invitees</>}
          />
          <TXCard
            title="Additional rewards"
            fee="188U"
            value="1000"
            desc={<>Cumulative number of invitees</>}
          />
          <TXCard
            title="Additional rewards"
            fee="188U"
            value="3000"
            desc={<>Cumulative number of invitees</>}
          />
          <TXCard
            title="Additional rewards"
            fee="188U"
            value="5000"
            desc={<>Cumulative number of invitees</>}
          />
        </div>
        <div className="flex items-center justify-center justify-between rounded-[12px] bg-white-8 p-4 text-[14px] text-casper">
          <div>
            Total number of invitees <b className="text-dodger-blue">0</b>
          </div>
          <div className="hidden md:block">
            Bonus <b className="text-dodger-blue"> 0U</b>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
        <div className="flex items-center justify-center text-[18px] font-bold text-white">
          How to claim the bonus
        </div>
        <div className="grid gap-4 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-8">
            <div>
              <TabButton
                type="one"
                title="Step One"
                className="h-[23px] text-[12px] font-bold text-white"
              />
              <span className="pt-4 text-[14px] font-bold text-casper">
                Copy the invitation link and recommendation code to your friends
              </span>
            </div>
            <CopyBox className="bg-white-8">
              https://ok777.casino/?AgentCode=330395
            </CopyBox>
            <div className="flex flex-wrap justify-between gap-2">
              {socials.map(item => (
                <div
                  key={item}
                  className="flex h-9 w-9 items-center justify-center rounded-[8px] border-t border-white-4 bg-white-4"
                >
                  <img
                    className="h-4 w-4"
                    src={'/icons/social-icon/' + item + '.svg'}
                    alt="social"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-8">
            <div className="flex flex-col items-start gap-4">
              <TabButton
                type="one"
                title="Step Two"
                className="h-[23px] text-[12px] font-bold text-white"
              />
              <span className="text-[14px] font-bold text-casper">
                (Assist) friends to complete registration and recharge
              </span>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/images/Device1.png"
                className="mx-auto h-[224.03px]"
                alt="phone"
              />
              <div className="absolute left-1/2 top-1/2 z-[999] flex w-[312px] w-[320px] -translate-x-1/2 -translate-y-1/3 transform items-center justify-between rounded-[16px] bg-mirage py-[10px] pl-[16px] pr-[9px] shadow-[0_8px_16px_#3389FF40]">
                <img src="/images/logo.svg" alt="" />
                <div className="relative flex gap-2">
                  <BlackButton
                    onClick={() => {}}
                    className="text-[12px] text-casper"
                  >
                    Log in
                  </BlackButton>
                  <TDButton
                    onClick={() => {}}
                    className="h-[33px] w-[85px] rounded-[8px] text-[12px]"
                    type="red"
                  >
                    Register
                  </TDButton>
                  <img
                    src="/icons/cursor.svg"
                    alt="cursor"
                    className="rotate absolute left-[15%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center justify-between gap-8 rounded-[12px] bg-white-4 p-8 2xl:grid-cols-[40%_60%]">
          <div>
            <TabButton
              type="one"
              title="Step Three"
              className="h-[23px] text-[12px] font-bold text-white"
            />
            <span className="pt-4 text-[14px] font-bold text-casper">
              Unlock additional rewards and claim them to your account
            </span>
          </div>
          <div className="relative flex items-center justify-center">
            <img src="/images/Frame4.png" alt="phone" className="w-full" />
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
    </BetTemplate>
  )
}

export default FirstDeposit1Page
