import { Theme } from "@mui/material";

export const styles = (theme: Theme, { isRtl }: { isRtl: boolean }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  aboutText: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    background: theme.palette.background.default,
    padding: 3,
    borderRadius: "16px",
    gap: "16px",
    a: {
      margin: "16px 0",
      textDecoration: "none",
      color: theme.palette.info.main,
      fontSize: "16px",
      marginRight: "16px",
      marginLeft: "auto",
      ...(isRtl && {
        marginRight: "auto",
        marginLeft: "16px",
      }),
    },
  },
});
