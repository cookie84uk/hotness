import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  container: {
    flexDirection: "row",
    boxSizing: "border-box",
    display: "flex",
    placeContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    background: theme.palette.background.default,
  },

  wrapper: {
    flex: "1 1 100%",
    boxSizing: " border-box",
    minWidth: { lg: "50rem", md: "45rem", sm: "20rem", xs: "20rem" },
  },

  header: {
    flexDirection: "column",
    background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main} 50%, ${theme.palette.background.paper} 40%)   `,
    boxSizing: "border-box",
    display: "flex",
    placeContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    boxShadow: `0 0 1px ${theme.palette.customColors.modeColor}`,
    p: 6,
    gap: 3,
    "& .MuiFab-root": {
      mt: 2,
      background: theme.palette.secondary.main,
      boxShadow: 3,
    },
    ".MuiButtonBase-root": {
      color: theme.palette.common.white,
      boxShadow: 3,
    },
    "& .MuiTextField-root": { m: 1, width: "100%" },
  },

  cardContent: {
    flexDirection: "column",
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    alignItems: "center",
    placeContent: "center",
    width: "100%",
    borderRadius: "8px",
    background: theme.palette.background.paper,
    boxShadow: 3,
  },

  cardProdaction: {
    flexDirection: "column",
    boxSizing: "border-box",
    display: "flex",
    placeContent: "center",
    alignItems: "center",
    bgcolor: "background.paper",
    width: "inherit",
    p: 2,
  },

  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 2,
    width: "100%",
    p: 2,
    paddingBottom: "48px",
    "& .MuiFormLabel-root": {
      display: "flex",
    },
    ".MuiTypography-root": {
    },
  },

  button: {
    minWidth: "40%",
    position: "absolute",
    left: "50%",
    bottom: "0",
    borderRadius: "25px",
    transform: "translate(-50%, 50%)",
    zIndex: 1000,
    background: theme.palette.primary.main,
  },
});
