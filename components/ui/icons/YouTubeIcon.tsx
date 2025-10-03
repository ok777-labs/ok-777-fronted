import React from 'react'

interface YouTubeIconProps {
  className?: string
  color?: string
}

const YouTubeIcon: React.FC<YouTubeIconProps> = ({
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
      <g clipPath="url(#clip0_181_4406)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.4815 4.83413C23.8539 5.20889 24.1213 5.67489 24.257 6.18547C24.7588 8.07002 24.7588 12 24.7588 12C24.7588 12 24.7588 15.93 24.257 17.8146C24.1213 18.3251 23.8539 18.7911 23.4815 19.1659C23.1091 19.5407 22.6449 19.8111 22.1352 19.95C20.2588 20.4546 12.7588 20.4546 12.7588 20.4546C12.7588 20.4546 5.25879 20.4546 3.38243 19.95C2.87272 19.8111 2.40845 19.5407 2.03608 19.1659C1.66371 18.7911 1.39629 18.3251 1.26061 17.8146C0.758789 15.93 0.758789 12 0.758789 12C0.758789 12 0.758789 8.07002 1.26061 6.18547C1.39629 5.67489 1.66371 5.20889 2.03608 4.83413C2.40845 4.45936 2.87272 4.18897 3.38243 4.05002C5.25879 3.54547 12.7588 3.54547 12.7588 3.54547C12.7588 3.54547 20.2588 3.54547 22.1352 4.05002C22.6449 4.18897 23.1091 4.45936 23.4815 4.83413ZM16.577 12L10.3043 8.43141V15.5687L16.577 12Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_181_4406">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.735352)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default YouTubeIcon
