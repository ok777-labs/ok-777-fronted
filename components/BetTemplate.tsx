'use client'

import { ReactNode } from 'react'
import BlackButton from './ui/Button/BlackButton'
import FlatButton from './ui/Button/FlatButton'
import TDButton from './ui/Button/TDButton'
import ArrowLeftStrokeIcon from './ui/icons/arrow-left-stroke'
import { cn } from '@/lib/utils'

interface BetTemplateProps {
  children: ReactNode
  background: string
  heading: string
  title: {
    line1: string
    line2: string
  }
  submit: string
  onClick: () => void
  button?: string
  onButtonClick?: () => void
}

const BetTemplate: React.FC<BetTemplateProps> = ({
  children,
  background,
  title,
  heading,
  submit,
  onClick,
  onButtonClick,
  button,
}) => {
  return (
    <>
      <div className="mx-auto w-full md:w-[70%]">
        <div className="hidden items-center gap-4 py-8 lg:flex">
          <BlackButton>
            <ArrowLeftStrokeIcon className="h-4 w-4" />
          </BlackButton>
          <span className="text-[18px] font-bold text-white">{heading}</span>
        </div>
        <div className="overflow-hidden rounded-[12px] lg:mb-64">
          <div
            className={cn(
              'flex h-[426px] w-full flex-col justify-around gap-10 bg-cover bg-right bg-no-repeat lg:justify-center',
              background
            )}
          >
            <div className="hidden max-w-[50%] pl-10 font-bold uppercase text-white xl:block">
              <div className="text-[40px]">{title.line1}</div>
              <div className="text-[32px]">{title.line2}</div>
            </div>
            <FlatButton
              onClick={onClick}
              className="ml-10 hidden h-[82px] w-[371.52px] rounded-[19.88px] bg-[linear-gradient(#0C60FF,#2C9FFA)] text-[29.82px] font-bold uppercase xl:flex"
            >
              {submit}
            </FlatButton>
            {button && (
              <div className="itemes-end flex justify-center pt-[32px] lg:hidden">
                <TDButton
                  onClick={() => onButtonClick?.()}
                  type="blue"
                  className="h-[42px] w-[217px] text-[14px]"
                >
                  {button}
                </TDButton>
              </div>
            )}
          </div>
          <div className="bg-white-4 px-4 pt-8">
            {button && (
              <div className="hidden justify-center pb-[32px] lg:flex">
                <TDButton
                  onClick={() => onButtonClick}
                  type="blue"
                  className="h-[42px] w-[217px] text-[14px]"
                >
                  {button}
                </TDButton>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default BetTemplate
