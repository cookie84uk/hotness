import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  gridContent: {
    backgroundColor:
      theme.palette.mode === "dark" ? "background.paper" : "#0000002e",
    p: 2,
  },
  text: {
    color: theme.palette.text.secondary,
    ml: 2,
  },
});
