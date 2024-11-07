import { Box, Typography, useTheme } from "@mui/material";
import { styles } from "./Language.styles";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@config/hooks";
import React from "react";
import { LanguageDropdown } from "@config/components";

export function Language() {
  // ** redux
  const { isRtl } = useAppSelector((state) => state.palette);

  // ** style
  const theme = useTheme();
  const style = styles(theme, { isRtl });

  const { i18n } = useTranslation([
    "general",
    "catalogGeneral",
    "organizationGeneral",
  ]);

  // ** Get all languages from global store
  const { languages } = useAppSelector((state) => state.generalModels);

  const handleLanguageChange = async (value: string | undefined) => {
    await i18n.changeLanguage(value);
  };

  return (
    <Box sx={style.container}>
      <LanguageDropdown
        langList={languages}
        handleLanguageChange={handleLanguageChange}
        selectedLanguageCode={i18n.language}
        header={
          <Box sx={style.header}>
            <Typography variant="h5">LANGUAGE</Typography>
          </Box>
        }
      />
    </Box>
  );
}
