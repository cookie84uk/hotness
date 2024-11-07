import { Theme, alpha } from "@mui/material";

export const styles = () => ({
  container: {
    width: "100%",
    position: "relative",
    " .flip-card": {
      height: "380px",
      borderRadius: "16px",
      perspective: "10000px",
    },

    ".flip-card.back-flip .flip-card-inner": {
      transform: " rotateY(180deg)",
    },

    ".flip-card .flip-card-inner": {
      width: "100%",
      height: "100%",
      textAlign: " center",
      borderRadius: "16px",

      transition: " transform 0.6s",
      transformStyle: "preserve-3d",
    },
    ".flip-card .flip-card-inner .flip-card-front, .flip-card .flip-card-inner .flip-card-back":
      {
        position: "absolute",
        width: "100%",
        height: "100%",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      },

    ".flip-card .flip-card-inner .flip-card-front": {
      background: (theme: Theme) => alpha(theme.palette.text.primary, 0.1),
      color: "black",
      borderRadius: "16px",
    },

    ".flip-card .flip-card-inner .flip-card-back ": {
      background: (theme: Theme) => alpha(theme.palette.text.primary, 0.1),
      color: "white",
      borderRadius: "16px",

      transform: "rotateY(180deg)",
    },
  },
});
