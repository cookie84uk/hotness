import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Box,
  Card,
  Grid,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { styles } from "./Carousel.styles";
import { nameSpaces } from "@config/libs/i18n";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@config/hooks";
import { getSlidesData } from "@config/data";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Carousel() {
  // ** language
  const { t } = useTranslation(nameSpaces);

  // ** redux
  const { isRtl } = useAppSelector((state) => state.palette);

  // ** data
  const slidesData = getSlidesData();

  // ** ref
  const swiperRef = useRef<SwiperCore | null>(null);

  // ** styles
  const theme = useTheme();
  const style = styles({ isRtl });

  // ** useEffect
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.destroy(true, true);
      const newSwiper = new SwiperCore(".mySwiper", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          clickable: true,
        },
        navigation: true,
      });
      swiperRef.current = newSwiper;
    }
  }, [isRtl]);

  return (
    <Card sx={style.card} title={""}>
      <Box sx={style.swiperContainer}>
        <Swiper
          key={isRtl ? "rtl" : "ltr"}
          dir={isRtl ? "rtl" : "ltr"}
          spaceBetween={0}
          onProgress={() => 20}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={isRtl ? "mySwiper" : "mySwiper"}
        >
          {slidesData.map((data, index) => (
            <SwiperSlide key={index}>
              <Box sx={style.content}>
                <Box sx={style.content.header}>
                  <Box>
                    <Typography variant="h4">{data.title}</Typography>
                    <Typography variant="h6">{data.conversionRate}</Typography>
                  </Box>
                </Box>
                <Box sx={style.iconBox}>
                  <LinearProgress
                    variant="buffer"
                    value={data.rating}
                    valueBuffer={data.rating}
                    color={data.rating < 0 ? "error" : "primary"}
                    sx={{
                      color:
                        data.rating < 0
                          ? theme.palette.error.dark
                          : theme.palette.primary.dark,
                    }}
                  />
                </Box>

                <Box sx={style.wrapper}>
                  <Typography variant="h5">
                    {t("carousel.statistics.title", { ns: "dashboard" })}
                  </Typography>
                  <Grid container spacing={3}>
                    {data.statistics.map((statistic, idx) => (
                      <Grid item lg={6} key={idx}>
                        <Box sx={style.statisticsBox}>
                          <Box sx={style.statistics}>
                            <Typography variant="h6">
                              {statistic.value}
                            </Typography>
                          </Box>
                          <Typography variant="h6">
                            {statistic.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Card>
  );
}
