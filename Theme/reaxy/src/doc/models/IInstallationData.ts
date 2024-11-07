import { ReactNode } from "react";

export interface IInstallationData {
  id: string;
  name: string;
  title: string | string[];
  aboutText: string;
  link?: string | undefined;
  formatter?: string;
  isAbout?: boolean;
}

export interface ICopyBox {
  children?: ReactNode;
  id?: string;
  header?: ReactNode;
  copyText: string | string[];
  other: any;
  name: string;
}
