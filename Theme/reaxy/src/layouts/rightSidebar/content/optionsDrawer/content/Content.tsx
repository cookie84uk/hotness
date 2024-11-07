import React from "react";
import { Box, Switch, Typography } from "@mui/material";
import { styles } from "../../Content.styles";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@config/hooks";
import { handleVariant, setShowLogo, setThemeOptions } from "@config/redux";

export function Content() {
  // ** redux
  const { variant, show } = useAppSelector((state) => state.palette);

  const { sidebarIsOpen } = useAppSelector(
    (state) => state.generalModels.themeOptions
  );

  const handleSidebar = () => {
    dispatch(setThemeOptions({ sidebarIsOpen: !sidebarIsOpen }));
  };

  // ** handle show logo
  const handleShowLogo = () => {
    dispatch(setShowLogo(!show));
  };

  // ** dispatch
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={styles.wrapper}>
        <Typography variant="h4">Opened sidenav</Typography>
        <Switch
          checked={sidebarIsOpen}
          onChange={() => handleSidebar()}
          name="fixed"
        />
      </Box>
      <Box sx={styles.wrapper}>
        <Typography variant="h4">
          Variant :{variant === true ? " persistent" : " temporary"}
        </Typography>

        <Switch
          checked={variant}
          onChange={() => dispatch(handleVariant(!variant))}
          name="variant"
        />
      </Box>
      <Box sx={styles.wrapper}>
        <Typography variant="h4">Sidenav user info</Typography>
        <Switch checked={show} onChange={() => handleShowLogo()} name="show" />
      </Box>
    </>
  );
}
