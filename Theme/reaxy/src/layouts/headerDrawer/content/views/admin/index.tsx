import React from "react";

import Admin from "@config/assets/images/admin/Admin.jpg";

import { Box } from "@mui/material";

import { styles } from "./Admin.styles";

export default function AdminImage() {
  // ** style
  const style = styles();

  return (
    <Box sx={style.container}>
      <Box sx={style.img} component={"img"} src={Admin} />
    </Box>
  );
}
