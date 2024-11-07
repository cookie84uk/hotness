export interface ILayoutSizeProps {
  APPBAR_HEIGHT: number;
  CRUMB_HEIGHT: string;
  FOOTER_HEIGHT: string;
  SCROLL_WIDTH: string;
  SPACING: string;
  DRAWER_WIDTH: {
    DEFAULT: string;
    COMPACT: string;
    MINI: string;
  };
  DRAWER_HEADER_BOX_HEIGHT: string | number | any;
  TOP_SIDEBAR: {
    HEIGHT: string;
  };
  VERTICAL_HORIZONTAL: {
    SHOW: string;
    HIDDEN: string;
  };

  CONTENT: {
    vertical: string;
    horizontal: string;
  };
}
