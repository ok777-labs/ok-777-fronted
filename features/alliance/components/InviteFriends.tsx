import React from 'react'
import FAQ from './FAQ'
import FlatButton from '@/components/ui/Button/FlatButton'
import { CopyBox } from '@/components/ui/CopyBox'
import { XIcon } from 'lucide-react'
import BlackButton from '@/components/ui/Button/BlackButton'
import FacebookIcon from '@/components/ui/icons/FacebookIcon'
import InstagramIcon from '@/components/ui/icons/InstagramIcon'
import YouTubeIcon from '@/components/ui/icons/YouTubeIcon'
import DiscordIcon from '@/components/ui/icons/DiscordIcon'
import TikTokIcon from '@/components/ui/icons/TikTokIcon'
import TelegramIcon from '@/components/ui/icons/TelegramIcon'
import { useI18n } from '@/context/I18nProvider'

const InviteFriends: React.FC = () => {
  const { t } = useI18n()
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

  return (
    <div className="flex-1">
      {/* Header Section */}
      <div className="mb-8 hidden lg:block">
        <div className="relative h-[20rem] overflow-hidden rounded-md bg-[linear-gradient(170deg,#ED1D49_5%,#111923_90%)] text-left">
          <img
            src="/images/banner/invite-banner.png"
            className="center absolute left-1/2 top-0 h-full w-[81%] -translate-x-1/2 transform"
            alt=""
          />
          {/* <span className="text-white text-[1.125rem] font-bold relative z-10">
            Invite friends
          </span> */}
        </div>
      </div>

      {/* Referral Section */}
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-[#FFFFFF0A] p-3">
          <label className="text-md block font-medium leading-8 text-white">
            {t('alliance.referralLink')}
          </label>
          <div className="flex items-center gap-3">
            <CopyBox className="h-12 w-full bg-white-8 text-sm">
              https://ok777.io/?AgentCode=330395
            </CopyBox>
          </div>
        </div>

        <div className="rounded-lg bg-[#FFFFFF0A] p-3">
          <label className="text-md block font-medium leading-8 text-white">
            {t('alliance.referralCode')}
          </label>
          <div className="flex items-center gap-3">
            <CopyBox className="h-12 w-full bg-white-8 text-sm">330395</CopyBox>
          </div>
        </div>
      </div>

      {/* Share via Social Media and Statistics Section */}
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Left Card: Share via Social Media */}
        <div className="flex flex-col rounded-lg bg-white-4 p-3 md:justify-around">
          <h3 className="text-md font-medium leading-8 text-white">
            {t('alliance.shareMedia')}
          </h3>
          <div className="flex justify-around">
            <BlackButton>
              <TelegramIcon color="#A7B5CA" className="h-4 w-4" />
            </BlackButton>
            <BlackButton>
              <FacebookIcon color="#A7B5CA" className="h-4 w-4" />
            </BlackButton>
            <BlackButton>
              <XIcon color="#A7B5CA" className="h-4 w-4" />
            </BlackButton>
            <BlackButton>
              <InstagramIcon color="#A7B5CA" className="h-4 w-4" />
            </BlackButton>
            <BlackButton>
              <YouTubeIcon color="#A7B5CA" className="h-4 w-4" />
            </BlackButton>
            <BlackButton>
              <DiscordIcon color="#A7B5CA" className="h-4 w-4" />
            </BlackButton>
            <BlackButton>
              <TikTokIcon color="#A7B5CA" className="h-4 w-4" />
            </BlackButton>
          </div>
        </div>

        {/* Right Card: Statistics */}
        <div className="rounded-lg bg-white-4 p-3">
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left */}
            <div className="m-t block items-center text-center">
              <div className="mb-1 text-sm font-bold text-dodger-blue">
                <span>12</span>
              </div>
              <div className="text-sm text-gray-300">
                {t('alliance.newSibordinates')}
              </div>
            </div>
            {/* Top Right */}
            <div className="m-t block items-center text-center">
              <div className="mb-1 text-sm font-bold text-white">
                <span>22</span>
              </div>
              <div className="text-sm text-gray-300">
                {t('alliance.directSibordinates')}
              </div>
            </div>
            {/* Bottom Left */}
            <div className="m-t block items-center text-center">
              <div className="mb-1 text-sm font-bold text-dodger-blue">
                <span>465</span>
              </div>
              <div className="text-sm text-gray-300">
                {t('alliance.newTotalTeamMember')}
              </div>
            </div>
            {/* Bottom Right */}
            <div className="m-t block items-center text-center">
              <div className="mb-1 text-sm font-bold text-white">
                <span>1652</span>
              </div>
              <div className="text-sm text-gray-300">
                {t('alliance.totalTeamMember')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commission Rewards Section */}
      <div className="mb-8 rounded-lg bg-white-4 p-3">
        <div className="flex items-center justify-between font-medium leading-8">
          <h3 className="text-white">{t('alliance.commissionRewards')}</h3>
          <a
            href="#"
            className="text-sm font-bold text-[#2283F6] hover:underline"
          >
            {t('alliance.details')}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex w-full justify-between rounded-[12px] bg-[#FFFFFF14] p-2 pl-4 pr-4">
            <div className="flex items-center gap-3">
              <img src="/icons/coin-icon/USDT.svg" alt="coin w-6 h-6" />
              <span className="text-[12px] font-bold text-dodger-blue">0</span>
            </div>
            <FlatButton className="px-6 py-3 text-[12px] font-bold">
              {t('alliance.inviteFriends')}
            </FlatButton>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <FAQ faqs={faqs} />
    </div>
  )
}

export default InviteFriends
