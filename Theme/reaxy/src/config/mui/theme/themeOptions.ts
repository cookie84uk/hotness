// ** MUI Theme Provider
import { ThemeOptions } from "@mui/material";

// ** Theme Override Imports
import palette from "./palette";
import spacing from "./spacing";
import { themeConst } from "@config/constant";
import { shadows } from "./shadows";

const themeOptions = (selectedPrimaryMode: string): ThemeOptions => {
  return {
    typography: { fontFamily: themeConst.MAIN_FONT },
    palette: palette(selectedPrimaryMode),
    ...spacing,

    shape: {
      borderRadius: 16,
    },
    shadows: shadows,
    mixins: {
      toolbar: {
        minHeight: 56,
      },
    },
  };
};

export default themeOptions;
