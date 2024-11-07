import { Theme, alpha } from "@mui/material";

export const styles = ({ isRtl }: { isRtl: boolean }) => ({
  languageIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ".MuiSvgIcon-root": {
      fontSize: "24px",
      width: {
        xs: "20px",
        md: "24px",
      },
      height: {
        xs: "20px",
        md: "24px",
      },
      stroke: (theme: Theme) => theme.palette.primary.main,
    },
  },
  dropdown: {
    display: {
      xs: "none",
      lg: "none",
    },
    fontSize: "1.7rem",
    fontWeight: 400,
    lineHeight: "1.17em",
    alignItems: "center",
    minWidth: "unset",
    height: "unset",
    padding: ".7em 2.23em",
    color: (theme: Theme) => theme.palette.primary.main,
    border: (theme: Theme) => `1px solid ${theme.palette.secondary.main}`,

    ".MuiButton-endIcon": {
      marginLeft: ".4em",
      marginRight: 0,
      transition: ".2s ease-in-out transform",
      svg: {
        width: "1.8em",
        height: "1.8em",
        path: {
          fill: (theme: Theme) => theme.palette.primary.main,
        },
      },
      "& > :nth-of-type(1)": {
        fontSize: "1rem",
      },
    },

    '&[aria-expanded="true"] .MuiButton-endIcon': {
      transform: "rotate(180deg)",
    },

    "&:hover, &:active": {
      backgroundColor: "unset",
    },
  },
  content: { maxHeight: "250px", overflow: "auto" },
  dropdownMenu: {
    "&.MuiPaper-root": {
      fontSize: "1.4rem",
      lineHeight: "1.17em",
      marginTop: {
        xs: "1.6em",
        lg: ".5em",
      },
      borderRadius: !isRtl ? "16px 0 16px 16px" : " 0 16px 16px 16px",
      background: (theme: Theme) => theme.palette.background.paper,
      boxShadow: 3,
      ul: {
        padding: 0,
      },
    },

    ".MuiMenuItem-root": {
      fontSize: "1.7rem",
      lineHeight: "1.17em",
      color: (theme: Theme) => theme.palette.primary.main,
      padding: ".6em 1.1em",
      minHeight: 0,
      display: "flex",
      gap: 4,
      alignItems: "center",
      height: "100%",

      "&:after": {
        content: "unset",
      },
    },

    ".MuiButtonBase-root": {
      color: (theme: Theme) => theme.palette.primary.main,
      transition: "transform .2s",
      "&:hover": {
        color: (theme: Theme) => theme.palette.customColors.wbColor,
        background: (theme: Theme) => alpha(theme.palette.primary.dark, 0.1),
        img: {
          transition: "all .2s ease",
          transform: "scale(1.08)",
        },
      },
    },
  },
});
