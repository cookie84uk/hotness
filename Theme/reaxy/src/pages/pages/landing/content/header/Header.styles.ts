import { Theme } from "@mui/material";
import Background from "@config/assets/images/pages/landing/BACKGROUND_IMG.jpg";

export const styles = (theme: Theme) => ({
  // ** header
  container: {
    padding: 0,
    margin: 0,
    height: "100%",
    width: "100vw",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "520px",
    width: "100%",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: theme.palette.common.white,
    gap: "36px",
  },

  body: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  headerText: {
    color: theme.palette.common.white,
    letterSpacing: "24px",
    fontSize: "48px",
  },

  bodyText: {
    color: theme.palette.common.white,
    letterSpacing: "0.2px",
    fontWeight: 400,
    fontSize: "36px",
  },

  subTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    ".MuiTypography-root": {
      color: theme.palette.common.white,
      fontWeight: 300,
      letterSpacing: "0.4px",
      fontSize: "16px",
    },
  },
  secondary: {
    background: theme.palette.secondary.main,
  },
  // ** content
});
