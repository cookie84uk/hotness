export interface INavDataProps {
  id: string | number;
  parentId: string | null;
  title: string;
  path: string | any;
  icon: string;
  subNav: boolean;
  routerLink: boolean | any;
  target?: string;
  horizontal?:boolean
}

export type ItemMapProps = {
  item: INavDataProps;
  index: number;
  size: number | string;
  level?: number;
  show: string | null;
  setShow: any;
};

// ** define a NavItem prop
export interface INavItem {
  id?: string;
  parentId?: string;
  label?: string;
  title?: string;
  path?: string;
  icon?: React.ReactNode;
  subNav?: Array<INavItem>;
}
