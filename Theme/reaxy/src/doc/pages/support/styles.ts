import { Theme } from "@mui/material";

export const styles = (
  theme: Theme,
  { LAYOUT_SIZE }: { LAYOUT_SIZE: string }
) => ({
  cont: {
    minHeight: LAYOUT_SIZE,
    background: theme.palette.background.paper,
    borderRadius: "16px",
    // overflow: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    ol: {
      color: theme.palette.primary.main,
    },
    a: {
      color: theme.palette.info.main,
      textDecoration: "none",
      fontWeight: 900,
    },
  },
  linkBox: { display: "flex", gap: "8px", flexDirection: "row" },
});
