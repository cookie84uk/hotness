import React, { useEffect, useRef } from "react";

import { Box, Typography } from "@mui/material";
import { styles } from "./skins.styles";
import { nameSpaces } from "@config/libs/i18n";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@config/hooks";
import { Formatter, LayoutBox } from "@doc/components";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import RED_DARK from "@config/assets/images/landing/RED_DARK.png";
import RED_LIGHT from "@config/assets/images/landing/RED_LIGHT.png";
import BLUE_DARK from "@config/assets/images/landing/BLUE_DARK.png";
import BLUE_LIGHT from "@config/assets/images/landing/BLUE_LIGHT.png";

import GREEN_LIGHT from "@config/assets/images/landing/GREEN_LIGHT.png";
import GREEN_DARK from "@config/assets/images/landing/GREEN_DARK.png";
import YELLOW_LIGHT from "@config/assets/images/landing/YELLOW_LIGHT.png";
import YELLOW_DARK from "@config/assets/images/landing/YELLOW_DARK.png";
import PURPLE_LIGHT from "@config/assets/images/landing/PURPLE_LIGHT.png";
import PURPLE_DARK from "@config/assets/images/landing/PURPLE_DARK.png";
import ORANGE_LIGHT from "@config/assets/images/landing/ORANGE_LIGHT.png";
import ORANGE_DARK from "@config/assets/images/landing/ORANGE_DARK.png";
import CYAN_LIGHT from "@config/assets/images/landing/CYAN_LIGHT.png";
import CYAN_DARK from "@config/assets/images/landing/CYAN_DARK.png";
import PINK_LIGHT from "@config/assets/images/landing/PINK_LIGHT.png";
import PINK_DARK from "@config/assets/images/landing/PINK_DARK.png";
import BROWN_LIGHT from "@config/assets/images/landing/BROWN_LIGHT.png";
import BROWN_DARK from "@config/assets/images/landing/BROWN_DARK.png";
import { ColorLensIcon } from "@config/assets";
import { modeCodeString, paletteCodeString } from "@doc/data";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Intro() {
  // ** language
  const { t } = useTranslation(nameSpaces);

  // ** redux
  const { isRtl } = useAppSelector((state) => state.palette);

  // ** data
  const images = [
    BLUE_LIGHT,
    BLUE_DARK,
    RED_LIGHT,
    RED_DARK,
    GREEN_LIGHT,
    GREEN_DARK,
    YELLOW_LIGHT,
    YELLOW_DARK,
    PURPLE_LIGHT,
    PURPLE_DARK,
    ORANGE_LIGHT,
    ORANGE_DARK,
    CYAN_LIGHT,
    CYAN_DARK,
    PINK_LIGHT,
    PINK_DARK,
    BROWN_LIGHT,
    BROWN_DARK,
  ];

  // ** ref
  const swiperRef = useRef<SwiperCore | null>(null);

  // ** styles
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
    <LayoutBox
      background="paper"
      icon={<ColorLensIcon />}
      id={"skins" as string}
    >
      <Box sx={style.swiperContainer}>
        <Swiper
          spaceBetween={0}
          onProgress={() => 20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className={isRtl ? "mySwiper" : "mySwiper"}
          key={isRtl ? "rtl" : "ltr"}
          dir={isRtl ? "rtl" : "ltr"}
          grabCursor={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          effect={"cards"}
          modules={[EffectCards]}
        >
          {images.map((data, index) => (
            <SwiperSlide key={index}>
              <Box sx={style.slideBox}>
                <img src={data} alt={`Slide ${index + 1}`} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box sx={{ position: "relative", p: "24px 0" }}>
        <Typography paragraph component={"li"} variant="h6">
          {t("paletteString", { ns: "skins" as string })}
        </Typography>
        <Typography paragraph component={"li"} variant="h6">
          {t("open", { ns: "skins" as string })}:
          src/config/constant/content/myPrimaryMode.ts
        </Typography>
      </Box>
      <Box>
        <Formatter children={paletteCodeString} fileType={"ts"} />
      </Box>
      <Box sx={{ position: "relative", p: "24px 0" }}>
        <Typography paragraph component={"li"} variant="h6">
          {t("modeString", { ns: "skins" as string })}
        </Typography>
      </Box>
      <Box>
        <Formatter children={modeCodeString} fileType={"ts"} />
      </Box>
    </LayoutBox>
  );
}
