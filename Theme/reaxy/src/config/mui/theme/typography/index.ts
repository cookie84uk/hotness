// ** Theme Type Import
import { Theme } from "@mui/material/styles";

const Typography = (theme: Theme) => {
  return {
    h1: {
      fontSize: "3.6rem",
      lineHeight: "1.16em",
      fontWeight: 600,
      color: theme.palette.text.primary,
    },
    h2: {
      fontSize: "2.8rem",
      lineHeight: "1.21em",
      fontWeight: 600,
      color: theme.palette.text.primary,
    },
    h3: {
      fontSize: "2.4rem",
      lineHeight: "1.25em",
      fontWeight: 600,
      color: theme.palette.text.primary,
    },
    h4: {
      fontSize: "1.8rem",
      lineHeight: "1.33em",
      fontWeight: 500,
      color: theme.palette.text.primary,
    },
    h5: {
      fontSize: "1.6rem",
      lineHeight: "1.37em",
      fontWeight: 500,
      color: theme.palette.text.primary,
    },
    h6: {
      color: theme.palette.text.primary,
      fontSize: "1.4rem",
      fontWeight: 500,
      lineHeight: "1.40em",
    },
    subtitle1: {
      fontSize: "1rem",

      color: theme.palette.text.primary,
    },
    subtitle2: {
      color: theme.palette.text.secondary,
    },
    body1: {
      color: theme.palette.text.primary,
      fontSize: "1.17rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem",
      color: theme.palette.text.secondary,
      fontWeight: 100,
    },
    button: {
      fontSize: "1.17rem",
      color: theme.palette.customColors.modeColor,
    },
    caption: {
      color: theme.palette.text.secondary,
    },
    overline: {
      color: theme.palette.text.secondary,
    },
  };
};

export default Typography;
