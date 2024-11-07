import React from "react";
// ** React Imports
import { ReactNode } from "react";

// ** MUI Imports
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Theme, ThemeProvider, createTheme } from "@mui/material/styles";

// ** Global Styles
import GlobalStyling from "./globalStyles";
import themeOptions from "./themeOptions";
import overrides from "./overrides";
import typography from "./typography";
import breakpoints from "./breakpoints";

interface IThemeComponent {
  children: ReactNode;
  selectedPrimaryMode: string;
}

function ThemeComponent({
  children,
  selectedPrimaryMode,
}: IThemeComponent): JSX.Element {
  const coreThemeConfig = themeOptions(selectedPrimaryMode);

  let theme: Theme = createTheme(coreThemeConfig);
  theme = createTheme(theme, {
    components: { ...overrides(theme) },
    typography: { ...typography(theme) },
    breakpoints:{ ...breakpoints()},
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme)} />
      {children}
    </ThemeProvider>
  );
}

export default ThemeComponent;
