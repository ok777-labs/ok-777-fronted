'use client'

import React from 'react'
import TDButton from './Button/TDButton'

interface AuthButtonProps {
  type: 'login' | 'register'
  onClick?: () => void
  className?: string
}

const AuthButton: React.FC<AuthButtonProps> = ({
  type,
  onClick,
  className = 'w-full h-[40px] ',
}) => {
  const buttonInfo = {
    login: 'LOG IN',
    register: 'REGISTER',
  }

  return (
    <TDButton type="red" onClick={() => onClick} className={className}>
      <span className="text-sm">{buttonInfo[type]}</span>
    </TDButton>
  )
}

export default AuthButton
