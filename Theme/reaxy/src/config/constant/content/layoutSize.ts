import { ILayoutSizeProps } from "../../models";

const appBarHeight = 65;

const crumbHeight = "50px";

export const allSpacingVertical = "35px"; // **@ This is the value of theme spacing, if it says spacing, it is necessary to calculate the total value of spacing here

const allSpacingHorizontal = "52px"; // **@ This is the value of theme spacing, if it says spacing, it is necessary to calculate the total value of spacing here

const footerHeight = "50px";

const scrollWidth = "0.5rem";

const defaultSpacing = "17px";

export const layoutSize: ILayoutSizeProps = {
  APPBAR_HEIGHT: appBarHeight,
  CRUMB_HEIGHT: crumbHeight,
  FOOTER_HEIGHT: footerHeight,
  SCROLL_WIDTH: scrollWidth,
  SPACING:defaultSpacing,
  DRAWER_WIDTH: {
    DEFAULT: "270px",
    COMPACT: "200px",
    MINI: "102px",
  },
  DRAWER_HEADER_BOX_HEIGHT: 480,
  VERTICAL_HORIZONTAL: { SHOW: "flex", HIDDEN: "none" },
  TOP_SIDEBAR: { HEIGHT: "350px" },
  CONTENT: {
    vertical: `calc(100vh - (${appBarHeight}px + ${crumbHeight} + ${allSpacingVertical}))`,
    horizontal: `calc(100vh - (${
      appBarHeight * 2
    }px + ${crumbHeight} + ${allSpacingHorizontal}))`,
  }, // **  I used the value 65 for APPBAR_HEIGHT here
};
