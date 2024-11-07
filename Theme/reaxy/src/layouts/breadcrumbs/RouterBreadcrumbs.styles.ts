import { layoutSize } from "@config/constant";
import { Theme } from "@mui/material";

export const styles = ({ unShow }: { unShow: any }) => ({
  container: {
    display: unShow ? "none" : "flex",
    flexDirection: "row",
    background: (theme: Theme) => theme.palette.background.paper,
    padding: "0 16px",
    height: layoutSize.CRUMB_HEIGHT,
    gap: "16px",
    borderRadius: "16px",
    overflow: "hidden",
    marginBottom: "16px",
    fontSize: "16px",
    width:"100%",
    a: {
      textDecoration: "none",
      linkStyle: "none",
      fontSize: "1.4rem",
      whiteSpace: "pre",
      textTransform: "unset",
      textOverflow: "ellipsis",
      overflow: "hidden",
      transition: "all .2s ease-in-out",
      width: "100%",
    },
    ".MuiTypography-root": {
      fontSize: "1.4rem",
      whiteSpace: "pre",
      textTransform: "unset",
      textOverflow: "ellipsis",
      overflow: "hidden",
      transition: "all .2s ease-in-out",
      width: "100%",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
});
