import { Box, Grid, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styles } from "./Skins.styles";
import { useLanding } from "@config/hooks";
import React from "react";
import { imagesData } from "@config/data";

export function Skins() {
  // **  hook
  const { setPrimaryMode } = useLanding();

  // **style
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box sx={style.container}>
      <Box sx={style.skinsHeader}>
        <Typography sx={style.colorText} variant="h2">
          SKINS
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ marginBottom: "16px" }}>
        {imagesData.map((image, index) => (
          <Grid item lg={4} key={index}>
            <Box sx={style.content}>
              <Box
                component={NavLink}
                to={"/"}
                onClick={() => setPrimaryMode(image.mode)}
              >
                <Box sx={style.imgBox} component={"img"} src={image.src} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
