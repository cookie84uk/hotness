// ** MUI Imports
import { Theme } from "@mui/material/styles";

const toolbar = (theme: Theme) => {
  return {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "45px",
          boxShadow: 3,
          "& .MuiListItemButton-root.active": {
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
            "&:hover": {
              background: theme.palette.primary.main,
            },
            "& .MuiTypography-root": {
              color: theme.palette.common.white,
            },
            "&:before": {
              background: theme.palette.primary.main,
            },
          },
        },
      },
    },
  };
};

export default toolbar;
