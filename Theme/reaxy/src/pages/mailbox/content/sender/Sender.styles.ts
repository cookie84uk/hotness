import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: theme.spacing(3),
    gap: theme.spacing(3),
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    ".MuiButtonBase-root": {
      color: theme.palette.common.white,
      maxHeight: "40px",
    },
  },
  quill: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    height: "250px",
  },
});
