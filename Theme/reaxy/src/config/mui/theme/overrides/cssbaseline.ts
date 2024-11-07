// ** MUI Imports
import { layoutSize, themeConst } from "@config/constant";
import { Theme } from "@mui/material/styles";

const cssBaseLine = (theme: Theme, { isRtl }: { isRtl: boolean }) => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          dir: isRtl ? "rtl" : "ltr",
          fontSize: 10,
          textAlign: isRtl ? "right" : "left",
          [theme.breakpoints.down("sm")]: {
            fontSize: 10,
          },
          "*[dir='rtl']": {
            textAlign: "right",
          },
          scrollBehavior: "smooth",
        },
        body: {
          direction: isRtl ? "rtl" : "ltr",
          backgroundColor: theme.palette.common.white,
          scrollBehavior: "smooth",
       

          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: layoutSize.SCROLL_WIDTH,
            height: "12px",
            backgroundColor: "#FAF5F1",
            transition: "2s ease-in-out all",
          },
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.background.default,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 8,
            minHeight: 24,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: theme.palette.primary.dark,
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: theme.palette.primary.dark,
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: theme.palette.primary.dark,
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        fallbacks: [
          {
            "@font-face": {
              fontFamily: themeConst.MAIN_FONT,
              fontStyle: "normal",
              fontWeight: 400,
            },
          },
          {
            "@font-face": {
              fontFamily: themeConst.MAIN_FONT,
              fontStyle: "normal",
              fontWeight: 500,
            },
          },
          {
            "@font-face": {
              fontFamily: themeConst.MAIN_FONT,
              fontStyle: "normal",
              fontWeight: 700,
            },
          },
        ],
      },
    },
  };
};

export default cssBaseLine;
