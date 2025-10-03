import React, { useState } from 'react'
import EditIcon from '@/components/ui/icons/edit'
import TDButton from '@/components/ui/Button/TDButton'
import FlatButton from '@/components/ui/Button/FlatButton'
import ModalContainer from '@/components/modals/ModalContainer'
import TelegramIcon from '@/components/ui/icons/TelegramIcon'

const AccountInfo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-4 md:p-2">
        {/* AccountInfo Header */}
        <h1 className="hidden text-lg font-semibold text-white sm:text-xl lg:block">
          User Information
        </h1>
        <div className="flex justify-between gap-4 overflow-hidden rounded-[12px] bg-white-4 p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex flex-col items-center gap-[-10px]">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/381f33b8ee9dde920a0b2278348be945b8886b91?width=128"
                  alt="User avatar"
                  className="h-16 w-16 rounded-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.16)_inset] backdrop-blur-[32px]"
                />
                {/* VIP Badge - positioned to overlap the bottom of the avatar */}
                <div className="absolute -bottom-2.5 left-1/2 z-10 -translate-x-1/2 transform">
                  <div
                    className="flex h-5 items-center justify-center rounded-2xl border border-white px-2 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset]"
                    style={{ backgroundColor: 'var(--malachite)' }}
                  >
                    <span className="whitespace-nowrap text-xs font-bold text-white">
                      VIP 1
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px font-bold] text-white">
                User8527682
              </span>
              <span className="text-[14px] text-casper">User ID: 59363996</span>
            </div>
          </div>
          <div
            onClick={toggleModal}
            className="flex h-9 cursor-pointer items-center gap-1 overflow-hidden rounded-[8px] bg-mirage-4 px-3 text-[14px] font-bold text-casper hover:bg-mirage active:bg-mirage"
          >
            <EditIcon className="h-6 w-6" />
            Edit
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 rounded-[12px] bg-white-4 p-4 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-[14px] font-bold text-white">Email Address</h2>
            <p className="text-[14px] text-casper">
              Link your email to protect your account security and recover your
              password.
            </p>
          </div>
          <TDButton
            type="blue"
            className="h-[41px] w-full text-[14px] font-bold text-gallery lg:w-[164px]"
            onClick={() => {}}
          >
            Go to binding
          </TDButton>
        </div>
        <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
          <h2 className="indent-[1.25rem] text-[0.875rem] font-bold text-white">
            Telegram
          </h2>
          <div className="flex items-center justify-between gap-1 rounded-[12px] bg-white-8 p-[6px] pl-4">
            <div className="flex gap-1 text-[14px] font-bold text-casper">
              <TelegramIcon color="var(--casper)" className="h-6 w-6" />
              Not intertwined
            </div>
            <FlatButton className="h-9 w-[82px] text-[12px] font-bold text-gallery">
              Binding
            </FlatButton>
          </div>
        </div>
      </div>

      <ModalContainer
        onClose={toggleModal}
        isOpen={isModalOpen}
        title="Edit profile"
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center gap-[10px] overflow-hidden rounded-[14px] bg-white-4 p-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/381f33b8ee9dde920a0b2278348be945b8886b91?width=128"
              alt="User avatar"
              className="h-16 w-16 rounded-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.16)_inset] backdrop-blur-[32px]"
            />
            <span className="p-3 text-[12px] font-bold text-casper">
              Change avatar
            </span>
          </div>
          <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
            <div className="input-group">
              <label className="input-label">Pseudonym</label>
              <input
                type="text"
                placeholder="Enter Pseudonym"
                className="form-input rounded-[8px]"
                value={'User8527681'}
              />
            </div>
            <p className="w-[50%] text-[14px] text-casper">
              Do not use special characters, otherwise it may not be saved.
            </p>
            <TDButton
              onClick={toggleModal}
              type="blue"
              className="h-[41px] w-full text-[14px] font-bold text-gallery"
            >
              Save
            </TDButton>
          </div>
        </div>
      </ModalContainer>
    </div>
  )
}

export default AccountInfo
