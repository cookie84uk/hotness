import { ContactSupportIcon } from "@config/assets";
import { urls } from "@config/constant";
import { LayoutBox } from "@doc/components";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";
import { useLayoutSize } from "@config/hooks";

export default function Support() {
  // ** language
  const { t } = useTranslation(["support"]);

  // ** hook
  const { LAYOUT_SIZE } = useLayoutSize();

  // ** style
  const theme = useTheme();
  const style = styles(theme, { LAYOUT_SIZE });

  return (
    <Box sx={style.cont}>
      <LayoutBox icon={<ContactSupportIcon />} id={"support" as string}>
        <Box sx={{ ...style.container }}>
          <Typography component={"ol"} variant="h4">
            {t("intro")}
          </Typography>
          <Box sx={style.linkBox}>
            <Typography component={"li"} variant="h6">
              {t("header")} :
            </Typography>
            <Typography
              component={"a"}
              href={urls.monster}
              target="_blank"
              variant="h6"
            >
              {t("here")}
            </Typography>
          </Box>
          <Typography component={"li"} variant="h6">
            {t("questions")}
          </Typography>
          <Typography component={"li"} variant="h6">
            {t("panic")}
          </Typography>
          <Box sx={style.container}>
            <Typography component={"ol"} variant="h4">
              {t("section_1.title")}
            </Typography>
            <Typography component={"li"} variant="h6">
              {t("section_1.li_1")}
            </Typography>
            <Typography component={"li"} variant="h6">
              {t("section_1.li_2")}
            </Typography>
            <Typography component={"li"} variant="h6">
              {t("section_1.li_3")}
            </Typography>
            <Typography component={"li"} variant="h6">
              {t("section_1.li_4")}
            </Typography>
          </Box>
          <Box sx={style.container}>
            <Typography component={"ol"} variant="h4">
              {t("section_2.title")}
            </Typography>
            <Typography component={"li"} variant="h6">
              {t("section_2.li_1")}
            </Typography>
            <Typography component={"li"} variant="h6">
              {t("section_2.li_2")}
            </Typography>
            <Typography component={"li"} variant="h6">
              {t("section_2.li_3")}
            </Typography>
            <Typography component={"li"} variant="h6">
              {t("section_2.li_4")}
            </Typography>
            <Typography component={"li"} variant="h6">
              {t("section_2.li_5")}
            </Typography>
            <Box sx={style.linkBox}>
              <Typography component={"li"} variant="h6">
                {t("section_2.more")}
              </Typography>
              <Typography
                component="a"
                href={`mailto:${urls.MSupport}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="h6"
              >
                {t("here")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </LayoutBox>
    </Box>
  );
}
