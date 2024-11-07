import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  container: {
    // padding: "16px 32px",
    margin: " auto",
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "1200px",
    gap: "24px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: theme.spacing(3, 0, 3, 0),
    mt:"24px"
    // gap: theme.spacing(1),
  },

  text: {
    fontWeight: 750,
    color: theme.palette.text.primary,
  },
  colorText: {
    mt: "8px",
    color: theme.palette.customColors.textShadow,
    fontSize: "20px",
    fontWeight: 400,
  },
  imgBox: {
    height: "auto",
    width: "100%",
    maxHeight: "100%",
    objectFit: "cover",
    boxShadow: "  0 1px 5px 1px #999",
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
    transition: "all 0.2s ease-in-out",
    ":hover": {
      transform: "scale(1.02)",
      transition: "transform 0.2s ease-in-out",
      ".MuiTypography-root": {
        color: theme.palette.primary.main,
        transform: "scale(1.02)",
        transition: "all 0.2s ease-in-out",
      },
    },
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
