import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    background: theme.palette.background.default,
    padding: "16px",
    borderRadius: "16px",
  },
  accordion: {
    boxShadow: 0,
    background: theme.palette.background.paper,
    ".MuiAccordionSummary-content": {
      overflow: "hidden",
    },
  },

  inside: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "center",
  },
  //   ** app structure

  structureContainer: {
    width: "auto",
    padding: "16px",
    background: theme.palette.background.default,
    borderRadius: "16px",
  },

  structureWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.default,
    margin: 0,
    padding: 0,
    borderRadius: "16px",
    fontWeight: 900,
    fontSize: "16px",
    overflow: "hidden",
    fontFamily: "monospace",
    textOverflow: "ellipsis",
    whiteSpace: "pre-wrap",
    overflowX: "auto",
  },
});
