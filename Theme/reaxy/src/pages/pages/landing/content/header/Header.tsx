// Salam
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { styles } from "./Header.styles";
// import Background from "@config/assets/images/pages/landing/BACKGROUND_IMG.jpg";
import React from "react";
import { urls } from "@config/constant";

export function Header() {
  // ** handleScroll
  const handleScroll = () => {
    const content = document.getElementById("content");
    if (content) {
      content.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error("null");
    }
  };
  // ** style
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box sx={style.container}>
      <Box sx={style.header}>
        <Typography sx={style.headerText} variant="h1">
          REAXY
        </Typography>

        <Box sx={style.body}>
          <Typography sx={style.bodyText} variant="h2">
            React Material Design Admin Template
          </Typography>
          <Box sx={style.subTitle}>
            <Typography variant="h5">
              Start creating your app with REAXY template
            </Typography>
            <Typography variant="h5">
              8 layouts, 18 color styles, 35+ pages
            </Typography>
          </Box>
        </Box>
        <Stack
          spacing={4}
          direction={"row"}
          sx={{
            ".MuiButtonBase-root": {
              width: "150px",
            },
          }}
        >
          <Button variant="contained" onClick={() => handleScroll()}>
            View demos
          </Button>
          <Button
            href={urls.monster}
            target="_blank"
            variant="contained"
            color="error"
          >
            Purchase now
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
