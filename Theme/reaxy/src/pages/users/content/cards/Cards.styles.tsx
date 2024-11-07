import { Theme } from "@mui/material";

export const styles = (
  theme: Theme,
  { item }: { item: any },
  { alignments }: { alignments: string }
) => ({
  card: {
    boxShadow: 3,
    backgroundColor: theme.palette.background.paper,
    "& .MuiCardHeader-root": {
      width: "100%",
      padding: "12px",
      ".MuiTypography-root ": {
        color: theme.palette.primary.main,
      },
      "& .MuiCardHeader-action": {
        marginTop: "0px",
        svg: {
          fontSize: "24px",
        },
        ".MuiButtonBase-root": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  content: {
    "&.MuiCardContent-root": {
      height: alignments ? "100%" : "200px",
    },
  },

  gridContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
  },

  gridContent: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
  },

  contentCard: {
    display: "flex",
    flexDirection: "column",
    ul: {
      height: "30px",
    },
  },

  img: {
    opacity: item.status === "block" ? 0.5 : 1,
  },
  iconBlock: {
    display: item.status === "block" ? "flex" : "none",
    opacity: 1,
    color: "red",
    "& .MuiSvgIcon-root": {
      fontSize: "122px",
      height: "122px",
      width: "122px",
    },
  },

  switch: { position: "relative", top: "16px" },

  list: {
    opacity: item.status === "active" ? 1 : 0.5,
    display: "flex",
    flexDirection: "row",
    p: 0,
    "& .MuiListItemIcon-root": {
      minWidth: "40px",
      color: theme.palette.text.primary,
      svg: {
        fontSize: "24px",
      },
    },
    "& .MuiTypography-root": {
      color: theme.palette.text.primary,
      fontSize: "1.4rem",
      whiteSpace: "pre",
      textTransform: "unset",
      textOverflow: "ellipsis",
      overflow: "hidden",
      transition: "all .2s ease-in-out",
      width: "100%",
    },
    alignItems: "center",
  },

  listWrapper: {
    display: "flex",
    flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
    gap: { lg: "16px", md: "16px" },
    justifyContent: "space-between",
    p: 2,
    ul: {
      height: "30px",
    },
    "& > :not(style)": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
  },
});
