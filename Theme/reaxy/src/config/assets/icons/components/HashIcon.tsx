import React from "react";

interface HashTagIconProps {
  sx?: React.CSSProperties;
  color?: string;
}

const HashIcon: React.FC<HashTagIconProps> = ({ color, sx }) => {
  return (
    <svg
      fill={color}
      height="24px"
      width="24px"
      version="1.1"
      viewBox="0 0 490 490"
      style={sx}
    >
      <path
        d="M64.333,490h58.401l33.878-137.69h122.259L245.39,490h58.401l33.878-137.69h119.92v-48.162h-108.24l29.2-117.324h79.04
   v-48.162H390.23L424.108,0H365.31l-33.878,138.661H208.79L242.668,0h-58.415l-33.864,138.661H32.411v48.162h106.298l-28.818,117.324
   h-77.48v48.162h65.8L64.333,490z M197.11,186.824h122.642l-29.2,117.324H168.292L197.11,186.824z"
      />
    </svg>
  );
};

export default HashIcon;
