import { StarRateIcon } from "@config/assets";
import { LayoutBox } from "@doc/components";
import Swal from "sweetalert2";
import {
  Box,
  Divider,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styles } from "./styles";
import { AnimatePresence } from "@config/components";
import { useLayoutSize } from "@config/hooks";

export default function Conclusion() {
  // ** language
  const { t } = useTranslation(["conclusion"]);

  // ** hook
  const { LAYOUT_SIZE } = useLayoutSize();

  // ** Show toast when the rating is selected
  const handleRatingSelect = (value: number | null) => {
    Swal.fire({
      title: t("inside.thankYouMessage"),
      html: `<div class="starr_conclusion">${value} ⭐</div>`,
      timer: 2000,
      showClass: {
        popup: "animate__animated animate__fadeInUp animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutDown animate__faster",
      },
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
    });
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <AnimatePresence direction={"center"} duration={1}>
      <LayoutBox
        sx={{ height: LAYOUT_SIZE }}
        icon={<StarRateIcon />}
        id={"conclusion" as string}
      >
        <Box sx={style.cont}>
          <Typography component={"ol"} variant="h5">
            {t("inside.title")}
          </Typography>
          <Typography variant="h6">{t("inside.content")}</Typography>
          <Divider component={"li"} sx={{ display: "flex", width: "100%" }} />
          <Box sx={style.wrapper}>
            <Box sx={style.iconBox}>
              <StarRateIcon
                sx={{ width: "56px", height: "56px", overflow: "hidden" }}
              />
            </Box>
            <Typography paragraph component={"ol"} variant="h5">
              {t("inside.ratingText")}
            </Typography>
            <Stack spacing={1}>
              <Rating
                size={"large"}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
                onChange={(_event, value) => handleRatingSelect(value)}
              />
            </Stack>
          </Box>
        </Box>
        <ToastContainer />
      </LayoutBox>
    </AnimatePresence>
  );
}
