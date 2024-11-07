

import { PaletteMode } from "@mui/material";

export interface ThemeType {
  readonly value: string;
  readonly primary: string;
  readonly primaryDark: string;
  readonly primaryLight: string;
  readonly secondary: string;
  readonly secondaryLight: string;
  readonly secondaryDark: string;
  readonly paper: string;
  readonly default: string;
  readonly stroke: string;
  readonly mode: PaletteMode;
}

export interface IPrimaryModeProps {
  readonly [key: string | number]: ThemeType;
}