import { Theme, alpha } from "@mui/material";

export const styles = () => ({
  container: { width: "100%", boxSizing: "border-box" },
  pagination: {
    mt: 3,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    background: (theme: Theme) => theme.palette.background.paper,
    borderRadius: (theme: Theme) => `${theme.shape.borderRadius}px`,

    nav: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      width: "100%",
    height: "50px",

      borderColor: (theme: Theme) => alpha(theme.palette.primary.main, 0.2),
      boxShadow: 3,
    },
  },
});
