import React from 'react'

interface XIconProps {
  className?: string
  color?: string
}

const XIcon: React.FC<XIconProps> = ({
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
        d="M19.0616 1.90393H22.4351L15.0651 10.3274L23.7354 21.7899H16.9466L11.6294 14.838L5.5453 21.7899H2.16978L10.0528 12.78L1.73535 1.90393H8.69646L13.5027 8.25826L19.0616 1.90393ZM17.8777 19.7707H19.7469L7.68075 3.81706H5.67481L17.8777 19.7707Z"
        fill={color}
      />
    </svg>
  )
}

export default XIcon
