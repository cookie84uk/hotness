import { Box, Button, Toolbar, Typography, useTheme } from "@mui/material";
import { styles } from "./Footer.styles";
import React from "react";
import { urls } from "@config/constant";

export function Footer() {
  // ** style
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Toolbar sx={style.footer}>
      <Box sx={style.wrapper}>
        <Typography
          variant="h5"
          sx={style.text}
          color={theme.palette.common.white}
        >
          Copyright © 2024 All Rights Reserved
        </Typography>

        <Box sx={style.action}>
          <Typography variant="h5">Made by : Caspien</Typography>
          <Button href={urls.monster} target="blank" variant="contained">
            TemplateMonster
          </Button>
        </Box>
      </Box>
    </Toolbar>
  );
}
