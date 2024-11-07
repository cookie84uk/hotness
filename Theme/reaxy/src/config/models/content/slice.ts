import { IGetLanguageTable } from "./services";

interface IGetTableFilters {
  value?: string;
  fieldName?: string;
  equalityType?: string;
}

interface IGetTableSort {
  columnName: string;
  isDesc: boolean;
  isId: boolean;
}

export interface IGetTable {
  page: number;
  pageSize: number;
  filters: IGetTableFilters[];
  sortOptions: IGetTableSort[];
}

export interface IThemeOptions {
  sidebarIsOpen: boolean;
  onHover: boolean;
}

export interface IGeneralModelsSlice {
  currentModule: string;
  languages: IGetLanguageTable[];
  tableParams: IGetTable;
  themeOptions: Partial<IThemeOptions>;
}

// ** State interface
export interface PaletteProps {
  isRtl: boolean;
  open: boolean;
  variant: any;
  fixed: boolean;
  footer: any;
  show: boolean;
  drawerWidth: string;
  vertical: boolean;
}
