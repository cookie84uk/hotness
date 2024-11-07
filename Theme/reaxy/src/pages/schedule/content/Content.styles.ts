import { Theme } from "@mui/material";

export const styles = (
  theme: Theme,
  { LAYOUT_SIZE }: { LAYOUT_SIZE: string }
) => ({
  main: {
    height: LAYOUT_SIZE,
    padding: "16px",
    overflow: "hidden",
    "& .fc": {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      color: theme.palette.text.primary,
    },
    "& .fc-toolbar-title": {
      fontSize: "1.5rem",
      fontWeight: theme.typography.fontWeightBold,
    },
    "&.fc-today-button": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
      borderColor: theme.palette.divider,
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
      "&:active": {
        backgroundColor: theme.palette.action.selected,
      },
    },
    "& .fc-button-primary": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderColor: theme.palette.primary.main,
      "&:hover": {
        borderColor: theme.palette.primary.dark,
      },
      "&:active": {
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
      },
      "& .fc-popover": {
        background: theme.palette.background.paper,
      },
    },
  },
  card: {
    height: LAYOUT_SIZE,
  },
  section: {
    padding: "16px",
  },
  sectionEvents: {
    padding: "16px",
    height: "470px",
    overflow: "auto",
  },
});
