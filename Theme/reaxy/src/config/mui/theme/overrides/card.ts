// ** MUI Imports
import { Theme } from "@mui/material/styles";

const card = (theme: Theme) => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          "& .MuiCardMedia-root": {
            backgroundSize: "cover",
          },
          svg: {
            fontSize: "24px",
          },
          height: "auto",
          "& .MuiCardHeader-root": {
            "& .MuiTypography-root": {
              fontWeight: 500,
              color: theme.palette.text.primary,
            },
          },
          "& .MuiCardContent-root": {
            background: theme.palette.background.paper,
            height: "100%",
            width: "100%",
            "& .recharts-surface": {
              fontSize: "12px",
            },
          },
        },
      },
    },
  };
};

export default card;
