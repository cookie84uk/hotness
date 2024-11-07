// ** MUI Imports
import { Theme } from "@mui/material/styles";
import { transition } from "../transition";
import { layoutSize } from "@config/constant";

const appbar = (theme: Theme) => {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          transition: transition,
          background: theme.palette.primary.main,
          position: "fixed",
          boxShadow: 3,
          zIndex: 1,
          "& .MuiToolbar-root": {
            minHeight: "45px",
            maxHeight: layoutSize.APPBAR_HEIGHT,
            transition: transition,
            width: "auto",
            position: "fixed",
            ".MuiListItemButton-root.active": {
              color: theme.palette.common.white,
              "& .MuiTypography-root": {
                color: theme.palette.common.white,
              },
              "&:before": {
                background: theme.palette.primary.main,
              },
            },
            "&.Mui-selected, &.active": {
              "&:before": {
                content: "unset",
              },
            },
          },
        },
      },
    },
  };
};

export default appbar;
