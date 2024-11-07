// ** MUI Imports
import { layoutSize } from "@config/constant";
import { transition } from "../transition";
import { Theme } from "@mui/material";

const tables = (theme: Theme) => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-row": {
            fontSize: "1.2rem",
            fontWeight: 300,
            color: theme.palette.customColors.modeColor,
          },
          "& .MuiToolbar-root": {
            height: layoutSize.APPBAR_HEIGHT,
            transition: transition,
            position: "sticky",
          },
        },
      },
    },
  };
};

export default tables;
