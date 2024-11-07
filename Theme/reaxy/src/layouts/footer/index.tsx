import { Box, Typography } from "@mui/material";
import React from "react";
import { styles } from "./Footer.styles";
import { useAppSelector } from "@config/hooks";
import { useTranslation } from "react-i18next";
import { nameSpaces } from "@config/libs/i18n";

export default function Footer() {
  // ** language
  const { t } = useTranslation(nameSpaces);

  // ** redux
  const { drawerWidth, isRtl, footer, vertical, variant } = useAppSelector(
    (state) => state.palette
  );

  const { sidebarIsOpen } = useAppSelector(
    (state) => state.generalModels.themeOptions
  );

  // ** styles
  const style = styles(
    { drawerWidth },
    { sidebarIsOpen },
    { isRtl },
    { footer },
    { vertical },
    { variant }
  );
  return (
    <Box sx={style.container}>
      <Box sx={style.content}>
        <Typography variant="h3">
          {t("organization", { ns: "general" as string })} : 2024
        </Typography>
      </Box>
      <Box sx={style.content}>
        <Typography variant="h3" color={"primary"}>
          @ Reaxy
        </Typography>
      </Box>
    </Box>
  );
}
