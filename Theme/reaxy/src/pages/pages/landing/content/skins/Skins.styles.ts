import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  container: {
    margin: " auto",
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "1200px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "0px 0px 24px 0px",
    gap: "8px",
  },

  text: {
    fontSize: "36px",
    color: theme.palette.text.primary,
  },
  colorText: {
    color: theme.palette.text.secondary,
  },
  imgBox: {
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
    transition: "box-shadow 0.2s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "  0 1px 5px 5px #999",
    },
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  // ** skins
  skinsHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "32px 16px 32px 0",
    gap: "8px",
  },
});
