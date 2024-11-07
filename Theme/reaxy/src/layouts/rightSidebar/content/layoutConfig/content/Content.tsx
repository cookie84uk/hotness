import { Box, Switch, Typography } from "@mui/material";
import { styles } from "../../Content.styles";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import { toggleFooter, togglePosition, toggleRtl } from "@config/redux";
import React from "react";

export function Content() {
  // ** redux
  const { fixed, isRtl, footer } = useAppSelector((state) => state.palette);

  // ** dispatch
  const dispatch = useAppDispatch();

  return (
    <>
      <Box sx={styles.wrapper}>
        <Typography variant="h4">Fixed header</Typography>
        <Switch
          checked={fixed}
          onChange={() => dispatch(togglePosition())}
          name="fixed"
        />
      </Box>
      <Box sx={styles.wrapper}>
        <Typography variant="h4">RTL</Typography>
        <Switch
          checked={isRtl}
          onChange={() => dispatch(toggleRtl())}
          name="isRtl"
        />
      </Box>
      <Box sx={styles.wrapper}>
        <Typography variant="h4">Has Footer</Typography>
        <Switch
          checked={footer}
          onChange={() => dispatch(toggleFooter())}
          name="footer"
        />
      </Box>
    </>
  );
}
