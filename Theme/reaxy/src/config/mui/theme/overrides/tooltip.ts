// ** MUI Imports
import { Theme } from "@mui/material/styles";

const tooltip = (theme: Theme) => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          zIndex: 1200,
          fontSize: "12px",
          backgroundColor: theme.palette.customColors.modeColor,
          color: theme.palette.customColors.ldColor,
        },
        arrow: {
          "&:before": {
            backgroundColor: theme.palette.customColors.modeColor,
          },
        },
      },
    },
  };
};

export default tooltip;
