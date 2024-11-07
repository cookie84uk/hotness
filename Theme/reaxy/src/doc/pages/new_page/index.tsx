import { NoteAddIcon } from "@config/assets";
import { nameSpaces } from "@config/libs/i18n";
import { Formatter, LayoutBox } from "@doc/components";
import { newPageCodeString, routerNewPageCodeString } from "@doc/data";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function New_page() {
  // ** language
  const { t } = useTranslation(nameSpaces);

  return (
    <LayoutBox icon={<NoteAddIcon />} id={"new_page" as string}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Box>
          <Typography
            paragraph
            component={"ol"}
            fontWeight={900}
            variant="h5"
            lineHeight={"2.6em"}
          >
            {t("ol", { ns: "new_page" as string })}

            <Typography component={"li"} variant="h6">
              {t("create", { ns: "new_page" as string })}
            </Typography>
          </Typography>
          <Formatter children={newPageCodeString} fileType={"tsx"} />
        </Box>
        <Box>
          <Typography component={"li"} variant="h6">
            {t("route", { ns: "new_page" as string })}
          </Typography>
          <Formatter children={routerNewPageCodeString} fileType={"tsx"} />
        </Box>
      </Box>
    </LayoutBox>
  );
}
