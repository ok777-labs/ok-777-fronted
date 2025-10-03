import React, { useState } from 'react'
import EditIcon from '@/components/ui/icons/edit'
import TDButton from '@/components/ui/Button/TDButton'
import { Input } from '@/components/ui'
import FlatButton from '@/components/ui/Button/FlatButton'
import ModalContainer from '@/components/modals/ModalContainer'
import LockKeyholeIcon from '@/components/ui/icons/lock-keyhole'
import CheckIcon from '@/components/ui/icons/check'
import XIcon from '@/components/ui/icons/x'
import EnvelopeIcon from '@/components/ui/icons/envelope'
import MobileIcon from '@/components/ui/icons/mobile'
import { LabeledInput } from '@/components/ui/LabeledInput'
import EyeSlashIcon from '@/components/ui/icons/eye-slash'
import EyeIcon from '@/components/ui/icons/eye'
import CheckCircleIcon from '@/components/ui/icons/check-circle'
import TelegramIcon from '@/components/ui/icons/TelegramIcon'

const Security: React.FC = () => {
  const [passwordModal, setPasswordModal] = useState(false)
  const [withdrawModal, setWithdrawModal] = useState(false)
  const [emailModal, setEmailModal] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const toggleSuccessForm = () => {
    setIsOpen(!isOpen)
    const authContainer = document.getElementById('auth-container')
    const successForm = document.getElementById('success-form')
    if (successForm) {
      successForm.style.display = isOpen ? 'block' : 'none'
    }
    if (authContainer) {
      authContainer.style.display = isOpen ? 'none' : 'block'
    }
    console.log(successForm?.style.display, isOpen)
  }

  const togglePasswordModal = () => {
    setPasswordModal(!passwordModal)
  }

  const toggleWithdraw = () => {
    setWithdrawModal(!withdrawModal)
  }

  const toggleEmailModal = () => {
    setEmailModal(!emailModal)
  }

  const securityInfo = [
    {
      title: 'Password',
      icon: <LockKeyholeIcon />,
      state: 'ok',
      desc: 'For security reasons, it is recommended to change your login password regularly.',
      button: 'Change password',
      onClick: togglePasswordModal,
    },
    {
      title: 'Withdrawal Password',
      icon: <LockKeyholeIcon />,
      state: 'ok',
      desc: 'For security reasons, please create your fund password.',
      button: 'Change Withdrawal Password',
      onClick: toggleWithdraw,
    },
    {
      title: 'Email address',
      icon: <EnvelopeIcon />,
      state: 'no',
      desc: 'You have bound your email address. If you need to modify it, please contact customer service!',
      button: 'Verify now',
      onClick: toggleEmailModal,
    },
    {
      title: 'Mobile Number',
      icon: <MobileIcon />,
      state: 'no',
      desc: 'Bind your phone number to secure your account.',
      button: 'Go to binding',
      onClick: () => {},
    },
  ]

  return (
    <div className="[@media(max-width:768px)]:w-full">
      <div className="flex w-full flex-col gap-4">
        {/* Security Header */}
        <h1 className="hidden text-lg font-bold text-white sm:text-xl lg:block">
          Security
        </h1>
        <div className="grid gap-4 lg:grid-cols-2">
          {securityInfo.map(item => (
            <div
              key={item.title}
              className="flex flex-col justify-between gap-4 rounded-[12px] bg-white-4 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[14px] font-bold text-casper">
                  {item.icon}
                  {item.title}
                </div>
                {item.state === 'ok' ? (
                  <div className="flex items-center gap-2 text-[14px] font-medium text-malachite">
                    <CheckIcon className="h-6 w-6" />
                    <span className="lg:hidden">Verified</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-[14px] font-medium text-crimson">
                    <XIcon className="h-6 w-6" />
                    <span className="lg:hidden">Not activated</span>
                  </div>
                )}
              </div>
              <div className="text-[14px] text-casper">{item.desc}</div>
              <TDButton
                onClick={item.onClick}
                type="blue"
                className="h-[41px] w-full text-[14px] text-gallery"
              >
                {item.button}
              </TDButton>
            </div>
          ))}
        </div>

        <ModalContainer
          isOpen={passwordModal}
          title="Change Login Password"
          className="lg:w-[30%]"
          onClose={togglePasswordModal}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
              <h2 className="text-[0.875rem] font-bold text-white">
                New login password
              </h2>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <div
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="h-6 w-6" />
                  )}
                </div>
              </div>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <div
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="h-6 w-6" />
                  )}
                </div>
              </div>
              <h2 className="text-[0.875rem] font-bold text-white">
                Confirm login password
              </h2>

              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <div
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="h-6 w-6" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <TDButton
            type="blue"
            onClick={togglePasswordModal}
            className="h-[41px] w-full text-[14px] text-gallery"
          >
            Submit
          </TDButton>
        </ModalContainer>
        <ModalContainer
          isOpen={withdrawModal}
          title="Set Withdrawal Password"
          className="lg:w-[30%]"
          onClose={toggleWithdraw}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
              <h2 className="text-[0.875rem] font-bold text-white">
                Login Password
              </h2>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <div
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="h-6 w-6" />
                  )}
                </div>
              </div>
              <h2 className="text-[0.875rem] font-bold text-white">
                Withdrawal Password
              </h2>

              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <div
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="h-6 w-6" />
                  )}
                </div>
              </div>
              <h2 className="text-[0.875rem] font-bold text-white">
                Withdrawal Password
              </h2>

              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <div
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="h-6 w-6" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[56px] items-center justify-between rounded-[8px] bg-white-4 p-4">
            <span className="text-[12px] font-bold text-dodger-blue">
              q106316519@gmail.com
            </span>
            <span className="flex items-center gap-2 font-medium text-malachite">
              <CheckCircleIcon />
              Verified
            </span>
          </div>
          <TDButton
            type="blue"
            onClick={toggleWithdraw}
            className="h-[41px] w-full text-[14px] text-gallery"
          >
            Submit
          </TDButton>
        </ModalContainer>
        <ModalContainer
          isOpen={emailModal}
          title="Verify Email"
          className="lg:w-[30%]"
          onClose={toggleEmailModal}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
              <h2 className="text-[14px] font-bold text-white">Email</h2>
              <div className="flex items-center justify-between rounded-[0.75rem] bg-white-8 p-2">
                <span className="text-[12px] font-medium text-white">
                  q106316519@gmail.com
                </span>
                <FlatButton className="h-9 w-[64px] text-[12px] font-bold text-gallery">
                  Send
                </FlatButton>
              </div>
            </div>
            <h2 className="indent-[20px] text-[12px] font-bold text-white">
              Change email to verify
            </h2>
            <div className="rounded-[12px] bg-[#1BB83D21] p-4 text-[14px] font-medium text-white">
              Changing it won't affect the original email, which remains usable
              for login.
            </div>
            <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
              <h2 className="text-[14px] font-bold text-white">
                Verification Code
              </h2>
              <input type="text" placeholder="" className="form-input" />
            </div>
            <TDButton
              type="blue"
              onClick={toggleEmailModal}
              className="h-[41px] w-full text-[14px] text-gallery"
            >
              Bind
            </TDButton>
          </div>
        </ModalContainer>
      </div>
    </div>
  )
}

export default Security
