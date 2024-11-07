import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styles } from "./Content.styles";
import { contentData } from "@config/data";

export function Content() {
  // ** data
  const data = contentData();

  // **style
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box sx={style.container} id="content">
      <Box sx={style.header}>
        <Typography variant="h2" sx={style.text}>
          Check out our demo styles
        </Typography>
        <Typography variant="h4" sx={style.colorText}>
          Fully responsive, organized folder structure, clean & customizable
          code, easy to use and much more...
        </Typography>
      </Box>
      <Grid container spacing={6}>
        {data.map((data, index) => (
          <Grid item lg={6} key={index}>
            <Box sx={style.content}>
              <Typography variant="h4">{data.title}</Typography>
              <Box component={NavLink} to={"/"} onClick={data.get}>
                <Box sx={style.imgBox} component={"img"} src={data.img} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
