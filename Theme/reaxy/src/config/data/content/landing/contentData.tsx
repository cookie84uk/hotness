import BLUE_LIGHT from "@config/assets/images/landing/BLUE_LIGHT.png";
import DEFAULT_H from "@config/assets/images/landing/default_horizontal.png";
import V_COMPACT from "@config/assets/images/landing/compact_vertical.png";
import H_COMPACT from "@config/assets/images/landing/compact_horizontal.png";

import H_MINI from "@config/assets/images/landing/mini_horizontal.png";
import V_MINI from "@config/assets/images/landing/mini_vertical.png";

import R_H from "@config/assets/images/landing/rtl_horizontal.png";
import R_V from "@config/assets/images/landing/rtl_vertical.png";

import { useLanding } from "@config/hooks";
import { ILandingData } from "@config/models";



export const contentData = (): ILandingData[] => {
  const {
    setVertical,
    setVerticalCompact,
    setHorizontalCompact,
    setVerticalMini,
    setHorizontalMini,
    setRtl,
    setRtlHorizontal,
    setPrimaryMode,
  } = useLanding();

  return [
    {
      title: "VERTICAL DEFAULT MENU",
      img: BLUE_LIGHT,
      get: () => {
        setPrimaryMode("BLUE_LIGHT");
      },
    },
    {
      title: "HORIZONTAL DEFAULT MENU",
      img: DEFAULT_H,
      get: () => {
        setVertical();
      },
    },

    {
      title: "VERTICAL COMPACT MENU",
      img: V_COMPACT,
      get: () => {
        setVerticalCompact();
      },
    },

    {
      title: "HORIZONTAL COMPACT MENU",
      img: H_COMPACT,
      get: () => {
        setHorizontalCompact();
      },
    },

    {
      title: "VERTICAL MINI MENU",
      img: V_MINI,
      get: () => {
        setVerticalMini();
      },
    },

    {
      title: "HORIZONTAL MINI MENU",
      img: H_MINI,
      get: () => {
        setHorizontalMini();
      },
    },

    {
      title: "VERTICAL RTL MENU",
      img: R_V,
      get: () => {
        setRtl();
      },
    },

    {
      title: "HORIZONTAL RTL MENU",
      img: R_H,
      get: () => {
        setRtlHorizontal();
      },
    },
  ];
};
