import { Theme } from "@mui/material";

export const styles = (theme: Theme, { expanded }: { expanded: boolean }) => ({
  card: {
    "& .MuiCardHeader-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ".MuiCardHeader-action": {
      display: "contents",
      svg: {
        path: {
          fill: theme.palette.customColors.modeColor,
        },
      },
    },
    ".MuiCardActions-root": {
      padding: "16px",
      svg: {
        cursor: "pointer",
      },
    },
  },
  avatar: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  favorite: {
    color: theme.palette.error.main,
  },
  expand: {
    transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
});
