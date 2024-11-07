import { DownloadIcon } from "@config/assets";
import { useAppSelector } from "@config/hooks";
import { CopyBox, Formatter, LayoutBox } from "@doc/components";
import { getInstallationData } from "@doc/data";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { styles } from "./styles";

export default function Installation() {
  // ** language
  const { t } = useTranslation();

  const { isRtl } = useAppSelector((state) => state.palette);

  // ** data installation libs
  const data = getInstallationData();

  // ** styles
  const theme = useTheme();
  const style = styles(theme, { isRtl });

  return (
    <Box sx={style.container}>
      {data.map((item, index) => (
        <LayoutBox
          key={item.id}
          background={"paper"}
          icon={index == 0 && <DownloadIcon />}
          id={(index == 0 && "installation") || ""}
        >
          <Box>
            {item.isAbout && (
              <Box sx={style.aboutText}>
                <Typography variant={"h5"}>{item.name}</Typography>
                {item.aboutText && (
                  <Typography paragraph variant={"h6"}>
                    {t(item.aboutText, { ns: "about" })}
                  </Typography>
                )}
                <Link target="_blank" to={item.link || ""}>
                  {t("more", { ns: "general" })}
                </Link>
              </Box>
            )}

            {/* Check if 'item.link' exists before rendering and only render once */}
            <Box sx={{ textAlign: "center" }}>
              {index === 6 && item.link && !item.isAbout && (
                <Typography variant="h4">
                  Libraries used and download titles
                </Typography>
              )}
            </Box>
            <Grid container spacing={3}>
              <Grid item lg={6} md={12} xs={12} sm={12}>
                <CopyBox
                  id={item.id}
                  name={!item.isAbout ? item.name : ""}
                  other={!item.isAbout ? item.link : ""}
                  copyText={item?.title}
                />
              </Grid>
              <Grid item lg={6} md={12} xs={12} sm={12}>
                {item.formatter && item.isAbout && (
                  <Formatter fileType={"tsx"}>{item.formatter}</Formatter>
                )}
              </Grid>
            </Grid>
          </Box>
        </LayoutBox>
      ))}
    </Box>
  );
}
