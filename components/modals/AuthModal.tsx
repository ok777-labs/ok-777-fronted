'use client'

import { useEffect, useState } from 'react'
import { setAuthUser } from '@/lib/auth'
import { X, Eye, EyeOff, ChevronDown } from 'lucide-react'
import { useSidebar } from '../../context/SidebarProvider'
import { cn } from '@/lib/utils'
import { useI18n } from '@/context/I18nProvider'

import './style.css'
import TDButton from '../ui/Button/TDButton'
import TonIcon from '../ui/icons/TONIcon'
import GoogleIcon from '../ui/icons/GoogleIcon'
import MetamaskIcon from '../ui/icons/MetamaskIcon'
import TelegramIcon from '../ui/icons/TelegramIcon'

interface SocialButtonProps {
  icon: React.ReactNode
  onClick?: () => void
}

const SocialButton = ({ icon, onClick }: SocialButtonProps) => (
  <div
    onClick={onClick}
    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white-4 text-casper backdrop-blur-[32px] transition-colors hover:bg-white-8"
    style={{
      boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.16) inset',
    }}
  >
    <span>{icon}</span>
  </div>
)

const TrustWalletIcon = () => (
  <svg width="25" height="24" viewBox="0 0 16 16" fill="none">
    <path
      d="M7.5 14.5554C3.51622 12.6038 1.9815 9.29679 1.98145 7.51141V3.14716L7.5 1.35419V14.5554Z"
      fill="currentColor"
      stroke="currentColor"
      className="text-casper"
    />
    <g style={{ mixBlendMode: 'luminosity' }}>
      <path
        d="M14.5184 2.78533L8 0.666687V15.3334C12.656 13.3776 14.5184 9.6295 14.5184 7.51131V2.78533Z"
        fill="url(#paint0_linear_trust)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_trust"
        x1="12.7869"
        y1="-0.360368"
        x2="7.86282"
        y2="15.133"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--tw-color-border-light)" />
        <stop offset="1" stopColor="var(--tw-color-border-dark)" />
      </linearGradient>
    </defs>
  </svg>
)

export default function AuthModal() {
  const { isAuthModalOpen, toggleAuthModal } = useSidebar()
  const { t } = useI18n()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('password123')
  const [referralCode, setReferralCode] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(true)
  const [agreedToNotifications, setAgreedToNotifications] = useState(true)
  const [showReferral, setShowReferral] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  const login = () => {
    if (email === 'dev.com@gmail.com' && password === '123') {
      setAuthUser(email)
    }
    toggleAuthModal()
  }

  const register = () => {
    console.log('register')
    toggleAuthModal()
  }

  useEffect(() => {
    if (isAuthModalOpen) {
      setShouldRender(true)
      const timer = setTimeout(() => setIsVisible(true), 10)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
      const timer = setTimeout(() => setShouldRender(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isAuthModalOpen])

  if (!shouldRender) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center overflow-hidden sm:items-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-mirage-73" />

      {/* Modal */}
      <div
        className={cn(
          'modal-content-scroll relative flex h-full max-h-screen w-full max-w-[740px] transform items-center justify-center transition-all duration-300 ease-out',
          isVisible ? 'translate-y-0' : 'translate-y-full sm:translate-y-8'
        )}
      >
        {/* Desktop Layout */}
        <div className="hidden h-[550px] w-full overflow-hidden rounded-xl bg-mirage-54 backdrop-blur-[32px] md:flex">
          {/* Left Side - Branding */}
          <div className="relative flex-1">
            {/* Background Image with Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-mirage"
              style={{
                backgroundImage:
                  "url('https://api.builder.io/api/v1/image/assets/TEMP/1966099a1a2c23b6a4509e98b3ec5376765f2b13?width=740')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
            <div className="to-mirage/90 absolute inset-0 bg-gradient-to-b from-transparent via-transparent" />

            {/* Bull Character and Text */}
            <div className="relative z-10 flex h-full flex-col items-center justify-between p-8 pt-16">
              {/* Logo/3D Character placeholder */}
              <div className="flex h-14 w-[115px] items-center justify-center rounded-lg"></div>

              {/* Welcome Text */}
              <div className="text-center">
                <h1 className="mb-2 text-[32px] font-black leading-none text-gallery">
                  WELCOME
                </h1>
                <h2 className="mb-2 text-[32px] font-black leading-none text-gallery">
                  BONUS
                </h2>
                <h3 className="mb-4 text-[32px] font-black leading-none text-gallery">
                  UP TO 590%
                </h3>
                <p className="text-base font-medium text-casper">
                  + 225 Free Spins
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="modal-content-scroll flex flex-1 flex-col overflow-y-auto p-6">
            {/* Close Button */}
            <div className="mb-6 flex justify-end">
              <div
                onClick={toggleAuthModal}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white-4 bg-white-4 backdrop-blur-[32px] transition-colors hover:bg-white-8"
                style={{
                  boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.16) inset',
                }}
              >
                <span>
                  <X size={16} className="text-casper" />
                </span>
              </div>
            </div>

            {/* Tab Switcher */}
            <div className="mb-6 flex rounded-xl p-1">
              <div
                onClick={() => setIsLogin(true)}
                className={`flex-1 cursor-pointer px-3 py-4 text-center text-sm font-bold transition-colors ${
                  isLogin
                    ? 'border-b-2 border-dodger-blue text-gallery'
                    : 'text-casper'
                }`}
              >
                <span>{t('auth.login')}</span>
              </div>
              <div
                onClick={() => setIsLogin(false)}
                className={`flex-1 cursor-pointer px-3 py-4 text-center text-sm font-bold transition-colors ${
                  !isLogin
                    ? 'border-b-2 border-dodger-blue text-gallery'
                    : 'text-casper'
                }`}
              >
                <span>{t('auth.register')}</span>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-1 flex-col">
              {/* Email Input */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute -top-2 left-2 z-10 bg-gradient-to-b from-mirage to-deep-blue px-1">
                    <span className="text-xs text-polo-blue">
                      {t('auth.usernameEmail')}
                    </span>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t('auth.userEmailPlaceholder')}
                    className="h-12 w-full rounded-xl border border-blue-bayoux bg-deep-blue px-4 pt-2 text-sm text-white placeholder-blue-bayoux focus:border-dodger-blue focus:outline-none"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute -top-2 left-2 z-10 bg-gradient-to-b from-mirage to-deep-blue px-1">
                    <span className="text-xs text-polo-blue">
                      <span>{t('auth.password')}</span>
                    </span>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={
                      !isLogin && password
                        ? '✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱'
                        : t('auth.passPlaceholder')
                    }
                    className={`h-12 w-full rounded-xl bg-deep-blue px-4 pr-12 pt-2 text-sm focus:outline-none ${
                      !isLogin && password
                        ? 'border-2 border-dodger-blue text-white'
                        : 'border border-blue-bayoux text-white placeholder-blue-bayoux'
                    }`}
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    <span>
                      {showPassword ? (
                        <Eye size={20} className="text-blue-bayoux" />
                      ) : (
                        <EyeOff size={20} className="text-blue-bayoux" />
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Forgot Password / Referral Code */}
              {isLogin ? (
                <div className="mb-6">
                  <div className="cursor-pointer text-sm font-bold text-dodger-blue">
                    <span>{t('auth.forgotPassword')}</span>
                  </div>
                </div>
              ) : (
                <div className="mb-4">
                  <div
                    onClick={() => setShowReferral(!showReferral)}
                    className="flex cursor-pointer items-center text-sm font-bold text-dodger-blue"
                  >
                    <span>{t('auth.referralPlaceholder')}</span>
                    <ChevronDown size={20} className="ml-1" />
                  </div>
                  {showReferral && (
                    <input
                      type="text"
                      value={referralCode}
                      onChange={e => setReferralCode(e.target.value)}
                      placeholder={t('auth.referralPlaceholder')}
                      className="mt-2 h-12 w-full rounded-xl border border-blue-bayoux bg-deep-blue px-4 text-sm text-white placeholder-blue-bayoux focus:border-dodger-blue focus:outline-none"
                    />
                  )}
                </div>
              )}

              {/* Registration Checkboxes */}
              {!isLogin && (
                <div className="mb-6 space-y-2">
                  <label className="flex cursor-pointer items-center gap-3">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={e => setAgreedToTerms(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded border-2 ${
                          agreedToTerms
                            ? 'border-dodger-blue bg-dodger-blue'
                            : 'border-blue-bayoux bg-transparent'
                        }`}
                      >
                        {agreedToTerms && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M2 6L5 9L10 3"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-casper">
                      {t('auth.agreeUserAgreement')}
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={agreedToNotifications}
                        onChange={e =>
                          setAgreedToNotifications(e.target.checked)
                        }
                        className="sr-only"
                      />
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded border-2 ${
                          agreedToNotifications
                            ? 'border-dodger-blue bg-dodger-blue'
                            : 'border-blue-bayoux bg-transparent'
                        }`}
                      >
                        {agreedToNotifications && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M2 6L5 9L10 3"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-casper">
                      {t('auth.agreePromotional')}{' '}
                      <span className="text-[#2283F6]">ok777.casino</span>
                    </span>
                  </label>
                </div>
              )}

              {/* Submit Button */}
              <TDButton
                onClick={isLogin ? login : register}
                type="red"
                className="h-11 w-full text-[14px] font-bold text-white"
              >
                {isLogin ? t('auth.signIn') : t('auth.signOut')}
              </TDButton>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Social Login */}
              <div className="space-y-4">
                <div className="flex cursor-pointer items-center gap-3">
                  <div className="h-px flex-1 bg-[#3C485C]" />
                  <span className="text-sm text-[#A7B5CA]">
                    <span>{t('auth.logInUsing')}</span>
                  </span>
                  <div className="h-px flex-1 bg-[#3C485C]" />
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <SocialButton icon={<GoogleIcon />} />
                  <SocialButton icon={<TelegramIcon />} />
                  <SocialButton icon={<MetamaskIcon />} />
                  <SocialButton icon={<TonIcon />} />

                  <SocialButton icon={<TrustWalletIcon />} />
                  <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white-4 text-xs font-bold text-[#A7B5CA] backdrop-blur-[32px]">
                    <span>+3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div
          className="animation-fade-in modal-content-scroll absolute top-0 mx-auto h-full w-full max-w-md overflow-y-auto overflow-x-hidden bg-[#111923] md:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Blue Gradient Background */}
          <div className="relative">
            <div
              className="h-80 w-full bg-gradient-to-b from-[#003A81] to-[#111923]"
              style={{
                filter: 'blur(175px)',
                position: 'absolute',
                top: 0,
                left: 0,
                transform: 'scale(1.5)',
              }}
            />

            {/* Hero Image */}
            <div className="relative h-[312.32px] overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e46eb9b989312e0dd83d423e4baeabe941ec23dd?width=804"
                alt="Casino"
                className="h-full w-full object-fill"
              />

              {/* Close Button */}
              <div
                onClick={toggleAuthModal}
                className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white-4 bg-white-4 backdrop-blur-[32px] transition-colors hover:bg-white-8"
                style={{
                  boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.16) inset',
                }}
              >
                <span>
                  <X size={16} className="text-casper" />
                </span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative flex flex-col justify-between space-y-6 bg-[#111923] px-4 pb-12">
            <div className="flex flex-col gap-[24px]">
              {/* Tab Switcher */}
              <div className="flex rounded-xl p-1">
                <div
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 cursor-pointer px-3 py-4 text-center text-sm font-bold transition-colors ${
                    isLogin
                      ? 'border-b-2 border-[#2283F6] text-[#EDEDED]'
                      : 'text-[#A7B5CA]'
                  }`}
                >
                  <span>{t('auth.login')}</span>
                </div>
                <div
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 cursor-pointer px-3 py-4 text-center text-sm font-bold transition-colors ${
                    !isLogin
                      ? 'border-b-2 border-[#2283F6] text-[#EDEDED]'
                      : 'text-[#A7B5CA]'
                  }`}
                >
                  <span>{t('auth.register')}</span>
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute -top-2 left-2 z-10 bg-gradient-to-b from-[#111923] to-[#0D131C] px-1">
                  <span className="text-xs text-[#93ACD3]">
                    <span>{t('auth.usernameEmail')}</span>
                  </span>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t('auth.userEmailPlaceholder')}
                  className="h-12 w-full rounded-xl border border-[#55657E] bg-[#0D131C] px-4 pt-2 text-sm text-white placeholder-[#55657E] focus:border-[#2283F6] focus:outline-none"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute -top-2 left-2 z-10 bg-gradient-to-b from-[#111923] to-[#0D131C] px-1">
                  <span className="text-xs text-[#93ACD3]">
                    {t('settings.password')}
                  </span>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder={
                    !isLogin && password
                      ? '✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱'
                      : t('auth.passPlaceholder')
                  }
                  className={`h-12 w-full rounded-xl bg-[#0D131C] px-4 pr-12 pt-2 text-sm focus:outline-none ${
                    !isLogin && password
                      ? 'border-2 border-[#2283F6] text-white'
                      : 'border border-[#55657E] text-white placeholder-[#55657E]'
                  }`}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <span>
                    <EyeOff size={20} className="text-white" />
                  </span>
                </div>
              </div>

              {/* Registration specific fields */}
              {!isLogin && (
                <div className="space-y-4">
                  {/* Referral Code */}
                  {!showReferral && (
                    <div
                      onClick={() => setShowReferral(!showReferral)}
                      className="flex w-full cursor-pointer items-center justify-between py-2 text-sm font-bold text-[#2283F6]"
                    >
                      <span>{t('alliance.referralCode')}</span>
                      <ChevronDown size={20} />
                    </div>
                  )}
                  {showReferral && (
                    <input
                      type="text"
                      value={referralCode}
                      onChange={e => setReferralCode(e.target.value)}
                      placeholder={t('auth.referralPlaceholder')}
                      className="mt-2 h-12 w-full rounded-xl border border-blue-bayoux bg-deep-blue px-4 text-sm text-white placeholder-blue-bayoux focus:border-dodger-blue focus:outline-none"
                    />
                  )}

                  {/* Submit Button */}
                  <TDButton
                    className="h-11 !w-full"
                    type="red"
                    onClick={register}
                  >
                    {t('auth.register')}
                  </TDButton>

                  {/* Checkboxes */}
                  <div className="space-y-2">
                    <label className="flex cursor-pointer items-center gap-3">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          checked={agreedToTerms}
                          onChange={e => setAgreedToTerms(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded border-2 ${
                            agreedToTerms
                              ? 'border-[#2283F6] bg-[#2283F6]'
                              : 'border-[#55657E] bg-transparent'
                          }`}
                        >
                          {agreedToTerms && (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M2 6L5 9L10 3"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-casper">
                        {t('auth.agreeUserAgreement')}
                      </span>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          checked={agreedToNotifications}
                          onChange={e =>
                            setAgreedToNotifications(e.target.checked)
                          }
                          className="sr-only"
                        />
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded border-2 ${
                            agreedToNotifications
                              ? 'border-[#2283F6] bg-[#2283F6]'
                              : 'border-[#55657E] bg-transparent'
                          }`}
                        >
                          {agreedToNotifications && (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M2 6L5 9L10 3"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-casper">
                        {t('auth.agreePromotional')}{' '}
                        <span className="text-[#2283F6]">ok777.casino</span>
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Login Submit Button */}
              {isLogin && (
                <>
                  <TDButton className="h-11 !w-full" type="red" onClick={login}>
                    {t('auth.login')}
                  </TDButton>
                </>
              )}
            </div>

            {/* Social Login */}
            <div className="space-y-4">
              <div className="flex cursor-pointer items-center gap-3">
                <div className="h-px flex-1 bg-[#3C485C]" />
                <span className="text-sm text-[#A7B5CA]">Log in using</span>
                <div className="h-px flex-1 bg-[#3C485C]" />
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <SocialButton icon={<GoogleIcon />} />
                <SocialButton icon={<TelegramIcon />} />
                <SocialButton icon={<MetamaskIcon />} />
                <SocialButton icon={<TonIcon />} />
                <SocialButton icon={<TrustWalletIcon />} />
                <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white-4 text-xs font-bold text-[#A7B5CA] backdrop-blur-[32px]">
                  <span>98</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
