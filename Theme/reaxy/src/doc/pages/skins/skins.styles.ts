import { Theme, alpha } from "@mui/material";

export const styles = ({ isRtl }: { isRtl: boolean }) => ({
  swiperContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "650px",
    margin: 0,
    background: (theme: Theme) => alpha(theme.palette.background.default, 0.5),
    padding: 7,
    borderRadius: "16px",

    ".swiper": {
      width: "100%",
      height: "100%",
      borderRadius: "16px",
      overflow: "hidden",
      ".swiper-pagination-bullet": {
        background: (theme: Theme) => theme.palette.primary.main,
      },
    },
    ".swiper-slide": {
      width: "850px",
      height: "500px",
      borderRadius: "16px",
      direction: isRtl ? "rtl" : "ltr",
      margin: 0,

      ".MuiTypography-root": {
        color: "#fff",
      },
      display: "flex",
      flexDirection: "column",
    },
    ".swiper-slide-prev": {
      margin: 0,
    },
    ".swiper-button-prev": {
      display: "none",
    },
    ".swiper-button-next": {
      display: "none",
    },
    ".swiper-pagination-bullet": {
      background: (theme: Theme) => theme.palette.common.white,
      borderRadius: "16px",
    },
  },
  content: {
    direction: isRtl ? "rtl" : "ltr",
    width: "100%",
    height: "100%",
    p: 4,
    header: { display: "flex" },
  },
  iconBox: {
    ".MuiLinearProgress-root": {
      width: "calc(100% - 5%)",
      height: "4px",
    },
    pt: 4,
    svg: {
      position: "absolute",
      right: "35px",
      fontSize: "200px",
      color: (theme: Theme) => theme.palette.primary.main,
    },
  },
  slideBox: {
    width: "100%",
    height: "100%",
    position: "relative",
    borderRadius: "16px",
    img: {
      width: "100%",
      height: "100%",
      objectFit: "fill",
      borderRadius: "16px",
    },
  },
  textBox: { position: "relative", padding: "24px 0" },
});
