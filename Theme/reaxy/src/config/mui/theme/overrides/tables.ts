// ** MUI Imports
import { Theme } from "@mui/material";
import { transition } from "../transition";

const tables = (theme: Theme) => {
  return {
    MuiTable: {
      styleOverrides: {
        root: {
          zIndex: 1,
          padding: "0 16px",
          background: theme.palette.background.default,
          ".MuiTableRow-root": {
            "& .MuiTableCell-root": {
              borderBottom: `1px solid ${theme.palette.text.primary}`,
              fontSize: "1.2rem",
              color: theme.palette.customColors.modeColor,
            },
          },

          "& .MuiToolbar-root": {
            borderBottom: `1px solid ${theme.palette.text.primary}`,
            height: "50px",
            transition: transition,
            position: "sticky",
            padding: "0 16px",
            ".MuiTablePagination-selectLabel": {
              fontSize: "1.2rem",
            },
            ".MuiTablePagination-displayedRows": {
              fontSize: "1.2rem",
            },
            svg: {
              color: theme.palette.primary.dark,
            },

            ".MuiButtonBase-root.Mui-disabled": {
              svg: {
                color: theme.palette.primary.light,
              },
            },
          },
        },
      },
    },
  };
};

export default tables;
