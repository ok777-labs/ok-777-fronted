import React from 'react'

interface TikTokIconProps {
  className?: string
  color?: string
}

const TikTokIcon: React.FC<TikTokIconProps> = ({
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
        d="M17.8079 0H13.7632V16.3478C13.7632 18.2957 12.2075 19.8957 10.2716 19.8957C8.33569 19.8957 6.78004 18.2957 6.78004 16.3478C6.78004 14.4348 8.30112 12.8695 10.1679 12.8V8.69567C6.05407 8.7652 2.73535 12.1391 2.73535 16.3478C2.73535 20.5913 6.12321 24 10.3062 24C14.4891 24 17.877 20.5565 17.877 16.3478V7.9652C19.3981 9.07827 21.2648 9.73913 23.2354 9.77393V5.66957C20.1932 5.56522 17.8079 3.06087 17.8079 0Z"
        fill={color}
      />
    </svg>
  )
}

export default TikTokIcon
