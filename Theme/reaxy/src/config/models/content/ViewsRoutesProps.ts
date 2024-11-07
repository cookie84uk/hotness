import { RouteObject } from "react-router-dom";
import { ReactNode, ComponentType } from "react";

export type Handle = {
  id: string;
  crumb: () => React.ReactElement;
  icon?: React.ElementType;
};

export type RouteConfig = RouteObject & {
  index?: boolean;
  element?: ReactNode | ComponentType<any> | JSX.Element;
  handle?: Handle;
  children?: RouteConfig[];
};

export type ViewsRoutesProps = RouteConfig[];
