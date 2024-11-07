import { Theme } from "@mui/material";
import BG from "@config/assets/images/admin/headerBg.png";

export const styles = ({ isRtl }: { isRtl: boolean }) => ({
  card: {
    ".MuiTypography-root": {
      color: (theme: Theme) => theme.palette.text.primary,
    },
    height: "100%",
  },

  swiperContainer: {
    backgroundImage: `url(${BG})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    margin: 0,

    ".swiper": {
      width: "100%",
      height: "100%",
      ".swiper-pagination-bullet": {
        background: (theme: Theme) => theme.palette.common.white,
      },
    },
    ".swiper-slide": {
      width: "100%",
      height: "100%",
      direction: isRtl ? "rtl" : "ltr",
      margin: 0,
      backgroundImage: `url(${BG})`,
      background: (theme: Theme) => theme.palette.customColors.gradient,

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
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    paddingTop: "65px",
    direction: isRtl ? "rtl" : "ltr",
  },
  statisticsBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    pt: 3,
  },
  statistics: {
    height: "40px",
    width: "60px",
    background: (theme: Theme) => theme.palette.primary.dark,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
