import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  containerForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: { lg: 2, md: 0, xs: 0 },
  },
  card: {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    width: { lg: "50%", md: "100%", xs: "100%" },
    p: 3,
    gap: 3,
  },
  button: { width: "250px", textAlign: "center" },

  labelMui: {
    fontSize: "8px",
    "&.MuiFormControlLabel-root .MuiFormControlLabel-label": {
      fontSize: "16px",
      color: theme.palette.text.secondary,
    },
  },
});
