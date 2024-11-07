// ** MUI Imports
import { useAppSelector } from "@config/hooks";
import { Theme, alpha } from "@mui/material/styles";

const GlobalStyles = (theme: Theme) => {
  const { isRtl } = useAppSelector((state) => state.palette);
  return {
    // ** toast
    ".Toastify__toast-body": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "1.4rem",
    },

    ".image-transition": {
      opacity: 1,
      transition: "opacity 1s ease-in-out",
      width: "100%",
      boxShadow: 3,
      borderRadius: "16px",
    },

    ".image-transition.fade-out": {
      opacity: 0,
    },

    "& .mySwiper": {
      direction: isRtl ? "rtl" : "ltr",
    },

    // ** mailbox dangerouslySetInnerHTML
    ".container": {
      display: "flex",
      padding: "16px",
      ".content": {
        ".text": {
          fontFamily: "Roboto",
          fontWeight: 400,
          color: theme.palette.text.primary,
          lineHeight: "1.6rem",
          letterSpacing: "0.72px",
          fontSize: "14px",
        },
      },
      h3: {
        fontSize: "14px",
        color: theme.palette.text.primary,
      },
    },

    ".attachments": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "12px",
      h3: {
        fontSize: "16px",
        color: theme.palette.primary.main,
      },
    },

    ".circle-button": {
      display: "inline-block",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "transparent",
      color: theme.palette.text.primary,
      textAlign: "center",
      lineHeight: "40px",
      cursor: "pointer",
      border: "none",
      transition: "all 0.3s",
      zIndex: 1,
      "&:hover": {
        backgroundColor: theme.palette.customColors.modeColor,
        color: theme.palette.customColors.ldColor,
        i: {
          color: theme.palette.customColors.ldColor,
        },
      },
      "&:active": {
        transform: "scale(.90)",
      },
      i: {
        fontSize: "18px",
        color: theme.palette.text.primary,
      },
    },

    ".img": {
      padding: "8px 0",
    },

    ".link": {
      textDecoration: "none",
      fontSize: "1.2rem",
      fontWeight: 50,
      lineHeight: "1.6rem",
      letterSpacing: "1px",
      color: theme.palette.info.main,
      "&:hover": {
        color: alpha(theme.palette.info.main, 0.9),
      },
    },

    // **  swall overrides
    ".swal2-popup": {
      background: theme.palette.background.paper,
      borderRadius: "16px",
    },
    ".swal2-container": {
      zIndex: 2050,
      ".swal2-html-container": {
        color: theme.palette.primary.main,
        fontWeight: 400,
      },
      ".swal2-title": {
        color: theme.palette.primary.main,
        fontWeight: 400,
        fontSize: "24px",
      },

      ".swal2-input": {
        borderRadius: "16px",
        color: theme.palette.customColors.modeColor,
      },
      "& .swal2-actions": {
        button: {
          borderRadius: "16px",
        },
        "& .swal2-confirm": {
          minWidth: "100px",
          backgroundColor: theme.palette.success.main,
        },

        "& .swal2-cancel": {
          minWidth: "100px",
          backgroundColor: theme.palette.error.main,
        },
      },

      // ** starr starr_conclusion emoji
      ".starr_conclusion": {
        fontSize: "24px",
        fontWeight: 900,
        borderTop: "1px solid",
      },
      ".form_swall": {
        fontSize: "16px",
        fontWeight: 900,
        borderTop: "1px solid",
      },
    },

    // ** calendar
    ".calender_wrap": {
      width: "100%",
      borderRadius: "10px",
      minHeight: "350px",
    },

    ".calender_wrap header": {
      display: "flex",
      alignItems: "center",
      padding: " 10px 20px",
      justifyContent: "space-between",
    },
    "header .icons": {
      display: "flex",
    },
    "header .icons span ": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "34px",
      width: "34px",
      margin: " 0 1px",
      cursor: "pointer",
      textAlign: "center",
      lineHeight: "34px",
      fontSize: "2.4rem",
      userSelect: "none",
      borderRadius: " 50%",
    },
    ".icons span:last-child": {
      marginRight: "-10px",
    },
    "header .icons span:hover": {
      background: "#f2f2f2",
    },
    " header .current-date": {
      fontSize: "1.4rem",
      fontWeight: 600,
      padding: 0,
      margin: 0,
    },

    ".calendar": {
      padding: "1px 8px",
    },

    ".calendar ul ": {
      display: "flex",
      flexWrap: "wrap",
      margin: 0,
      padding: 0,
      listStyle: "none",
      textAlign: "center",
    },

    ".calendar .days": {
      marginBottom: "20px",
    },

    ".calendar li": {
      color: theme.palette.text.primary,
      width: "calc(100% / 7)",
      fontSize: " 13px",
    },
    ".calendar .weeks li": {
      fontWeight: 600,
      cursor: "auto",
      fontSize: "16px",
      color: theme.palette.primary.main,
    },

    ".calendar .days li": {
      zIndex: 1,
      cursor: "pointer",
      position: "relative",
      marginTop: "16px",
    },
    ".days li.inactive ": {
      color: "#aaa",
      cursor: "not-allowed",
    },
    ".days li.active": {
      color: "#fff",
    },
    ".days li::before": {
      position: "absolute",
      content: `''`,
      left: "50%",
      top: "50%",
      height: "32px",
      width: "32px",
      zIndex: -1,
      borderRadius: "11%",
      transform: "translate(-50%, -50%)",
    },
    ".days li.active::before": {
      background: theme.palette.primary.main,
    },
    ".fc .fc-button .fc-icon": {
      color: "white",
    },
    ".fc .fc-button-group ": {
      ".fc-button": {
        color: "white",
        background: theme.palette.primary.main,
      },
      ".fc-button:active": {
        color: "white",
        background: theme.palette.primary.dark,
      },
      ".fc-button:focus": {
        color: "white",
        background: theme.palette.primary.dark,
      },
    },

    ".days li:not(.active):hover::before": {
      background: "#f2f2f2",
    },

    // ** ck editor css styles
    ".ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar, .ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners":
      {
        background: theme.palette.background.paper,
        color: theme.palette.customColors.modeColor,
        borderColor: `${theme.palette.primary.main} !important`,
        borderRadius: "16px 16px 0 0 !important",
        button: {
          borderRadius: "16px",
          ":hover": {
            background: theme.palette.primary.main,
            svg: {
              color: theme.palette.common.white,
            },
            span: {
              color: theme.palette.common.white,
              fontSize: "16px",
              ":hover": {},
            },
          },
          "&.ck-on": {
            background: theme.palette.primary.main,
            color: theme.palette.text.primary,
            svg: {
              color: theme.palette.common.white,
            },
            span: {
              color: theme.palette.common.white,
              fontSize: "16px",
            },
          },
          svg: {
            color: theme.palette.text.primary,
          },
        },

        span: {
          color: theme.palette.text.primary,
          fontSize: "16px",
          textAlign: isRtl ? "right" : "left",

          ":hover": {},
        },
      },

    ".ck.ck-editor__main>.ck-editor__editable": {
      background: theme.palette.background.paper,
      color: theme.palette.customColors.modeColor,
      minHeight: "150px",
      borderRadius: "0 0 16px 16px  !important",
    },

    ".ck.ck-editor__main>.ck-editor__editable:not(.ck-focused)": {
      background: theme.palette.background.paper,
      color: theme.palette.customColors.modeColor,
      borderColor: `${theme.palette.primary.main} !important`,
      minHeight: "150px",

      span: {
        color: theme.palette.text.primary,
        fontSize: "16px",
      },
      p: {
        color: theme.palette.text.primary,
        fontSize: "16px",
      },
      h2: {
        color: theme.palette.text.primary,
        fontSize: "28px",
      },
      h3: {
        color: theme.palette.text.primary,
        fontSize: "24px",
      },
      h4: {
        color: theme.palette.text.primary,
        fontSize: "20px",
      },
    },

    ".ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable)": {
      background: theme.palette.background.paper,
      borderColor: `${theme.palette.primary.light} !important`,
      color: theme.palette.customColors.modeColor,
      minHeight: "150px",
      span: {
        color: theme.palette.text.primary,
        fontSize: "16px",
      },
      p: {
        color: theme.palette.text.primary,
        fontSize: "16px",
      },
      h2: {
        color: theme.palette.text.primary,
        fontSize: "28px",
      },
      h3: {
        color: theme.palette.text.primary,
        fontSize: "24px",
      },
      h4: {
        color: theme.palette.text.primary,
        fontSize: "20px",
      },
    },
    ".ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]": {
      display: "none",
    },

    ".ck.ck-editor__editable_inline": {
      textAlign: "right",
    },
  };
};

export default GlobalStyles;
