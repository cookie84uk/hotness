import { Theme } from "@mui/material/styles";

export const styles = () => ({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    transition: ".2s ease-in-out all",
    padding: "8px  16px",
    borderRadius: "16px",
    ".MuiTypography-root": {
      color: (theme: Theme) => theme.palette.primary.main,
    },
    ".MuiButtonBase-root": {
      p: 0,
    },
    svg: {
      width: 25,
      height: 25,
      stroke: (theme: Theme) => theme.palette.primary.main,
    },
    "&.MuiTooltip-popper": {
      borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
    },
    "& .MuiTooltip-tooltip": {
      borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
    },

    ".circle": {
      display: { xl: "flex", lg: "none", md: "none", sm: "none", xs: "none" },
    },
  },

  drawerNav: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    svg: {
      width: "2.2rem",
      height: "2.2rem",
      fontSize: "2.6rem",
      stroke: (theme: Theme) => theme.palette.primary.main,
    },
  },

  iconBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
