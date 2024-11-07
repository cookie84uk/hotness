import { Theme } from "@mui/material";
import { layoutSize } from "@config/constant";

export const styles = (theme: Theme, { vertical }: { vertical: boolean }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%",
    height: vertical
      ? layoutSize.CONTENT.vertical
      : layoutSize.CONTENT.horizontal,
    background: theme.palette.background.paper,
    borderRadius: "16px",
    padding: "40px 16px",
  },

  loading_text: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "32px",
    ".MuiLinearProgress-root": {
      width: "100%",
    },
    ".loader": {
      position: "relative",
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: ".5em",
      span: {
        color: "#fff",
        mixBlendMode: "difference",
      },
      ":before": {
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "80px",
        height: "100%",
        background: "transparent",
        animation: "animate 3s linear infinite",
        borderRadius: "16px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
      },
      "@keyframes animate": {
        "0%": {
          left: "0",
        },
        "50%": {
          left: "75%",
        },
        "100%": {
          left: "0",
        },
      },
    },
  },
});
