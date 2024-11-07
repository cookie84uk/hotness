import React from 'react'

interface PinOffIconProps {
  height?: number
  sx?: React.CSSProperties
  color?: string
}

const PinOffIcon: React.FC<PinOffIconProps> = ({
  height = 22,
  sx = {},
  color = 'currentColor',
}) => {
  return (
    <svg viewBox="0 0 22 22" height={height} style={sx}>
      {/* <path d="M0 0h24v24H0z" fill="none" /> */}
      <path
        fill={color}
        d="M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z"
      />
    </svg>
  )
}

export default PinOffIcon
