import React from 'react'

interface TonIconProps {
  className?: string
  color?: string
}

const TonIcon: React.FC<TonIconProps> = ({
  className = '',
  color = 'currentColor',
}) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1637 1.3667H5.30618C2.57444 1.3667 0.842966 4.21518 2.21731 6.51785L11.3868 21.881C11.9852 22.8842 13.4847 22.8842 14.0831 21.881L23.2544 6.51785C24.6269 4.21885 22.8955 1.3667 20.1656 1.3667H20.1637ZM11.3794 17.2738L9.38241 13.5379L4.5639 5.20746C4.24607 4.67432 4.6387 3.991 5.30434 3.991H11.3775V17.2756L11.3794 17.2738ZM20.9022 5.2057L16.0856 13.5397L14.0887 17.2738V3.98925H20.1618C20.8275 3.98925 21.2201 4.67249 20.9022 5.2057Z"
        fill={color}
      />
    </svg>
  )
}

export default TonIcon
