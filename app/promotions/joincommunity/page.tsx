'use client'

import BetTemplate from '@/components/BetTemplate'
import BlackButton from '@/components/ui/Button/BlackButton'
import FlatButton from '@/components/ui/Button/FlatButton'
import TabButton from '@/components/ui/Button/TabButton'
import TDButton from '@/components/ui/Button/TDButton'
import TaskCard from '@/components/ui/cards/TaskCard'
import TXCard from '@/components/ui/cards/TXCard'
import { CopyBox } from '@/components/ui/CopyBox'
import AlertSquareIcon from '@/components/ui/icons/alert-square'
import CopyIcon from '@/components/ui/icons/copy'
import CurrencyNotes1Icon from '@/components/ui/icons/currency-notes-1'
import InfoCircleIcon from '@/components/ui/icons/info-circle'

const JoinCommunityPage = () => {
  const clickSubmit = () => {}

  const socials = [
    'Telegram',
    'Facebook',
    'X',
    'Instagram',
    'WhatsApp',
    'Line',
    'Discord',
    'Tiktok',
  ] as const

  const clickButton = () => {
    return
  }
  const data = {
    heading: 'Join the community now',
    title: {
      line1: 'Join the community',
      line2: 'Start a mission journey',
    },
    background: "bg-[url('/images/banner/Banner01-1.jpg')]",
    submit: 'join the fun!',
    onClick: clickSubmit,
    button: 'Recommend Friends',
    onButtonClick: clickButton,
  }

  const tasks = [2500, 3000, 400, 345300, 23400, 5670, 345300, 23400, 5670]
  return (
    <BetTemplate {...data}>
      <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
        <div className="flex items-center justify-center text-[18px] font-bold text-white">
          Complete tasks every day and give bonuses every day!
        </div>
        <div className="mx-auto flex w-full items-center justify-center text-[14px] text-casper lg:w-[70%]">
          Want to play around and make money? Now join the official community of
          OK777 to complete the designated 
          <span className="text-yellow-orange">
            interactive tasks, betting challenges, and friend invitation
            activities.{' '}
          </span>
          There are new tasks every day, with prizes, and you can also be on the
          “Task King List”! Click the social media link below to join the event.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-[12px] text-[14px] text-casper">
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

      <div className="mt-4 flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
        <div className="flex items-center justify-center text-[14px] font-bold text-white">
          How to claim the bonus
        </div>
        <div className="grid gap-4 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col gap-8 rounded-[12px] bg-white-4 p-8">
            <div>
              <TabButton
                type="one"
                title="Super simple mission"
                className="h-[23px] text-[12px] font-bold text-white"
              />
              <span className="pt-4 text-[14px] font-bold text-casper">
                Leave a message, share, and invite friends
              </span>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/images/Device3.png"
                className="mx-auto h-[330.49px]"
                alt="phone"
              />
              <img
                src="/images/star1.svg"
                alt="star"
                className="absolute right-[15%] top-[30%]"
              />
              <div className="absolute left-1/2 top-[70%] flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-2">
                <FlatButton
                  onClick={() => {}}
                  className="h-[41px] w-[242px] text-[12px]"
                >
                  Message
                </FlatButton>
                <FlatButton
                  onClick={() => {}}
                  className="h-[41px] w-[242px] text-[12px]"
                >
                  Share
                </FlatButton>
                <FlatButton
                  onClick={() => {}}
                  className="h-[41px] w-[242px] bg-cornflower-blue text-[12px]"
                >
                  Invite friends
                </FlatButton>
                <img
                  src="/icons/cursor.svg"
                  alt="cursor"
                  className="rotate absolute -bottom-1/3 -left-1/4"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-8">
            <div className="flex flex-col items-start gap-4">
              <TabButton
                type="one"
                title="There will be rewards when you finish"
                className="h-[23px] text-[12px] font-bold text-white"
              />
              <span className="text-[14px] font-bold text-casper">
                No new users are allowed, everyone can participate
              </span>
              <span className="text-[14px] font-bold text-casper">
                Continuous participation can still be limited 
              </span>
              <span className="text-[14px] font-bold text-dodger-blue">
                Headframe, lottery qualifications, ranking awards!
              </span>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/images/giftbox.png"
                alt="gift"
                className="absolute left-[-10px] top-[10px] z-[99] h-[98.25px] -rotate-[17.81deg] transform blur-[2px]"
              />
              <img
                src="/images/giftbox.png"
                alt="gift"
                className="relative z-[999] h-[250px]"
              />
              <img
                src="/images/giftbox.png"
                alt="gift"
                className="absolute bottom-[50px] right-[-10px] z-[99] h-[72.61px] rotate-[12.02deg] blur-[2px]"
              />
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
    </BetTemplate>
  )
}

export default JoinCommunityPage
