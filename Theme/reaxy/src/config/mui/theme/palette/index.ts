// ** Type Imports
import { myPrimaryMode } from "@config/constant";
import { ThemeType } from "@config/models";
import { PaletteMode, alpha } from "@mui/material";

const defaultPalette = (selectedPrimaryMode: string) => {
  let value = selectedPrimaryMode;

  const primaryMode: ThemeType = myPrimaryMode[value];

  let PALETTE_THEME: {
    MODE: PaletteMode;
    PRIMARY: string;
    PRIMARY_DARK: string;
    PRIMARY_LIGHT: string;
    SECONDARY_LIGHT: string;
    SECONDARY_DARK: string;
    SECONDARY: string;
    PAPER: string;
    DEFAULT: string;
    STROKE: string;
  } = {
    MODE: primaryMode.mode,
    PRIMARY: primaryMode.primary,
    PRIMARY_DARK: primaryMode.primaryDark,
    PRIMARY_LIGHT: primaryMode.primaryLight,
    SECONDARY: primaryMode.secondary,
    SECONDARY_LIGHT: primaryMode.secondaryLight,
    SECONDARY_DARK: primaryMode.secondaryDark,
    PAPER: primaryMode.paper,
    DEFAULT: primaryMode.default,
    STROKE: primaryMode.stroke,
  };

  // ** Vars
  let darkMode = PALETTE_THEME.MODE === "dark";
  let lightMode = PALETTE_THEME.MODE === "light";

  const main = PALETTE_THEME.PRIMARY;

  const primary = PALETTE_THEME.PRIMARY;
  const primaryLight = PALETTE_THEME.PRIMARY_LIGHT;
  const primaryDark = PALETTE_THEME.PRIMARY_DARK;

  const secondary = PALETTE_THEME.SECONDARY;
  const secondaryLight = PALETTE_THEME.SECONDARY_LIGHT;
  const secondaryDark = PALETTE_THEME.SECONDARY_DARK;

  const backgroundDefault = PALETTE_THEME.DEFAULT;
  const backgroundPaper = PALETTE_THEME.PAPER;

  const whiteColor = "#FFF";
  const blackColor = "#000";

  const wbColor = darkMode ? whiteColor : blackColor;

  const ldColor = lightMode ? whiteColor : blackColor;

  // error
  const errorLightColor = "#f44336";
  const errorColor = "#d32f2f";
  const errorDarkColor = "#b71c1c";
  // ** success
  const successLightColor = "#77C378";
  const successColor = "#56AE5A";
  const successDarkColor = "#3B8D38";
  // ** warning
  const warningLightColor = "#FFA733";
  const warningColor = "#FD9915";
  const warningDarkColor = "#B34D00";
  // ** info
  const infoLightColor = "#3AC0FF";
  const infoColor = "#22C0D4";
  const infoDarkColor = "#0E7082";

  const contrastText = "rgba(0, 0, 0, 0.87)";

  // ** custom
  const twitter = "#0F1419";
  const linkedin = "#0766C2";
  const facebook = "#0B66FF";
  const telegram = "#3290EC";
  const backgroundForm = "#212121";
  const backgroundFormHeader = "#0e0e0e";

  // ** textLight
  const textLightColor = "#5C5A68";
  const textDarkColor = "#ADB1CD";
  const modeColor = darkMode ? textDarkColor : textLightColor;
  const textShadow = "#0000008a";

  return {
    mode: PALETTE_THEME.MODE,
    ...(darkMode
      ? {
          primary: {
            main: primary,
            light: primaryLight,
            dark: primaryDark,
          },
          secondary: {
            main: secondary,
            light: secondaryLight,
            dark: secondaryDark,
          },
          background: {
            default: backgroundDefault,
            paper: backgroundPaper,
          },
          divider: primaryDark,
          text: {
            primary: textDarkColor,
            secondary: textDarkColor,
          },
          contrastText: contrastText,
        }
      : {
          primary: {
            main: primary,
            light: primaryLight,
            dark: primaryDark,
          },
          secondary: {
            main: secondary,
            light: secondaryLight,
            dark: secondaryDark,
          },
          background: {
            default: backgroundDefault,
            paper: backgroundPaper,
          },
          divider: primaryDark,
          text: {
            primary: textLightColor,
            secondary: textLightColor,
          },
          contrastText: contrastText,
        }),
    customColors: {
      main: main,
      light: lightMode.toString(),
      dark: darkMode.toString(),
      tableBackground: PALETTE_THEME.PRIMARY,
      white: whiteColor,
      black: blackColor,
      modeColor: modeColor,
      wbColor: wbColor,
      twitter: twitter,
      linkedin: linkedin,
      facebook: facebook,
      telegram: telegram,
      backgroundForm: backgroundForm,
      backgroundFormHeader: backgroundFormHeader,
      ldColor,
      textShadow,
      gradient: `linear-gradient(245deg, ${alpha(
        secondaryLight,
        0.4
      )}, ${primary})`,
    },

    info: {
      main: infoColor,
      light: infoLightColor,
      dark: infoDarkColor,
    },
    error: {
      main: errorLightColor,
      light: errorColor,
      dark: errorDarkColor,
    },
    warning: {
      main: warningColor,
      light: warningLightColor,
      dark: warningDarkColor,
    },
    success: {
      main: successColor,
      light: successLightColor,
      dark: successDarkColor,
    },
  };
};

export default defaultPalette;
