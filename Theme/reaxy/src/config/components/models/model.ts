import { IconType } from "react-icons";

// ** App bar
export interface AppBarProps {
  open?: boolean;
  variant?: any;
  drawerWidth?: string;
  fixed?: boolean;
  vertical?: boolean;
  isRtl?: boolean;
  children?: React.ReactNode;
}

// ** Main
export interface MainProps {
  open?: boolean;
  variant?: boolean;
  drawerWidth?: string;
  fixed?: boolean;
  vertical?: boolean;
  isRtl?: boolean;
  children?: React.ReactNode;
  footer?: boolean;
  onHover?: boolean;
}

// ** Drawer appBar
export interface AppBarDrawerProps {
  open?: boolean;
  variant?: any;
  drawerWidth?: string;
}

// ** Button box
export interface ButtonBoxProps {
  onClick?: () => void;
  children?: React.ReactNode;
  sx: object;
}

// ** Custom menu
export interface MenuProps {
  icon: IconType;
  children: React.ReactNode;
  sx?: object;
  onClose?: () => void;
}

// ** Custom card
export interface CustomCardProps {
  title: string;
  label?: string;
  icon?: any;
  chipColor?: any;
  chipOnClick?: () => void;
  sx?: object;
  justifyContent?: any;
  children?: React.ReactNode;
  color?: any;
}

// ** scrollbar
export interface ScrollbarProps {
  sx?: object;
  onClick?: () => void;
  children?: React.ReactNode;
}

// ** Animation page
export interface PageProps {
  children: React.ReactNode;
}

// ** Custom label
export interface CustomLabelProps {
  icon: React.ReactNode;
  name: string;
  color?: string;
}

// ** Custom tabs
export interface CustomTabsProps {
  children: Array<React.ReactNode>;
  names: Array<string>;
}

// ** Gradient box
export interface GradientBoxProps {
  width?: string;
  height?: string;
  color1: string;
  color2: string;
  onClick?: () => void;
  sx?: any;
}

// ** Img box
export interface CustomBoxProps {
  imageSrc: string;
  icon: React.ReactNode;
  iconRootSx?: object;
  containerSx?: object;
}

// ** Mui card
export interface MuiCardProps {
  title: string;
  children: React.ReactNode;
  sx?: any;
  textAlign?: any;
}
