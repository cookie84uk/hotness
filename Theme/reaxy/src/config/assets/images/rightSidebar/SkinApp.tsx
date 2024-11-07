import React from "react";
import BG from "@config/assets/images/admin/headerBg.png";

interface ISkinApp {
  onClick: () => void;
  sx?: React.CSSProperties;
  width?: string;
  height?: string;
  color1: string;
  color2: string;
}

const SkinApp: React.FC<ISkinApp> = ({
  onClick,
  sx,
  width,
  height,
  color1,
  color2,
}) => {
  return (
    <svg
      width="106"
      height="69"
      viewBox="0 0 106 69"
      fill="none"
      style={{
        ...sx,
        width: width,
        height: height,
        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        background: `linear-gradient(-45deg, ${color2} 0 50%, ${color1} 0 50%), url(${BG})`,
        backgroundColor: "transparent",
        cursor: "pointer",
        border: `1px solid ${color1}`,
      }}
      onClick={onClick}
    >
      <rect
        y="0.284363"
        width="106"
        height="68"
        rx="4"
        fill="#4B465C"
        fillOpacity="0.02"
      />
      <path
        d="M0 4.28436C0 2.07522 1.79086 0.284363 4 0.284363H28V68.2844H4C1.79086 68.2844 0 66.4935 0 64.2844V4.28436Z"
        fill="#4B465C"
        fillOpacity="0.08"
      />
      <rect
        x="5"
        y="24.8921"
        width="18"
        height="2.87399"
        rx="1.43699"
        fill="#4B465C"
        fillOpacity="0.16"
      />
      <rect
        x="5"
        y="24.8921"
        width="18"
        height="2.87399"
        rx="1.43699"
        stroke="#DBDADE"
      />
      <rect
        x="9"
        y="6.34387"
        width="10"
        height="10"
        rx="2"
        fill="#4B465C"
        fillOpacity="0.16"
      />
      <rect x="9" y="6.34387" width="10" height="10" rx="2" stroke="#DBDADE" />
      <rect
        x="5"
        y="35.7661"
        width="18"
        height="2.87399"
        rx="1.43699"
        fill="#4B465C"
        fillOpacity="0.16"
      />
      <rect
        x="5"
        y="35.7661"
        width="18"
        height="2.87399"
        rx="1.43699"
        stroke="#DBDADE"
      />
      <rect
        x="5"
        y="46.64"
        width="18"
        height="2.87399"
        rx="1.43699"
        fill="#4B465C"
        fillOpacity="0.16"
      />
      <rect
        x="5"
        y="46.64"
        width="18"
        height="2.87399"
        rx="1.43699"
        stroke="#DBDADE"
      />
      <rect
        x="5"
        y="57.514"
        width="18"
        height="2.87399"
        rx="1.43699"
        fill="#4B465C"
        fillOpacity="0.16"
      />
      <rect
        x="5"
        y="57.514"
        width="18"
        height="2.87399"
        rx="1.43699"
        stroke="#DBDADE"
      />
      <rect
        x="32.7715"
        y="5.09766"
        width="66"
        height="9.06667"
        rx="2"
        fill="#4B465C"
        fillOpacity="0.08"
      />
      <rect
        x="35.752"
        y="7.36426"
        width="4"
        height="4.53333"
        rx="1"
        fill="#4B465C"
        fillOpacity="0.16"
      />
      <rect
        x="35.752"
        y="7.36426"
        width="4"
        height="4.53333"
        rx="1"
        stroke="#DBDADE"
      />
      <rect
        x="79.752"
        y="7.36426"
        width="4"
        height="4.53333"
        rx="1"
        fill="#4B465C"
        fillOpacity="0.16"
      />
      <rect
        x="79.752"
        y="7.36426"
        width="4"
        height="4.53333"
        rx="1"
        stroke="#DBDADE"
      />
      <rect
        x="85.752"
        y="7.36426"
        width="4"
        height="4.53333"
        rx="1"
        fill="#4B465C"
        fillOpacity="0.16"
      />
      <rect
        x="85.752"
        y="7.36426"
        width="4"
        height="4.53333"
        rx="1"
        stroke="#DBDADE"
      />
      <rect
        x="91.752"
        y="7.36426"
        width="4"
        height="4.53333"
        rx="1"
        fill="#4B465C"
        fillOpacity="0.16"
      />
      <rect
        x="91.752"
        y="7.36426"
        width="4"
        height="4.53333"
        rx="1"
        stroke="#DBDADE"
      />
      <rect
        x="58.1836"
        y="20.4922"
        width="41"
        height="18.1333"
        rx="2"
        fill="#4B465C"
        fillOpacity="0.08"
      />
      <rect
        x="32.7715"
        y="20.4922"
        width="19.4118"
        height="18.1333"
        rx="2"
        fill="#4B465C"
        fillOpacity="0.08"
      />
      <rect
        x="32.7715"
        y="44.0254"
        width="66.4121"
        height="18.1333"
        rx="2"
        fill="#4B465C"
        fillOpacity="0.08"
      />
    </svg>
  );
};

export default SkinApp;
