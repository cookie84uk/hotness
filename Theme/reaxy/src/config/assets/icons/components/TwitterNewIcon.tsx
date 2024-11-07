import React from 'react'

interface TwitterNewIconProps {
  height?: number
  sx?: React.CSSProperties
  color?: string
}

const TwitterNewIcon: React.FC<TwitterNewIconProps> = ({
  height = 32,
  sx = {},
  color = 'currentColor',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={height}
      height={height}
      color={color}
      style={{ background: 'new 0 0 1668.56 1221.19', ...sx }}
    >
      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
    </svg>
  )
}

export default TwitterNewIcon