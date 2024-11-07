import React from "react";
import { Box, IconButton, Tooltip, Zoom } from "@mui/material";

import { styles } from "./header.styles";
import {
  useAppDispatch,
  useAppSelector,
  useThemeConstants,
} from "@config/hooks";
import { layoutSize } from "@config/constant";
import {
  handleRadioChange,
  handleVariant,
  setThemeOptions,
} from "@config/redux";
import { AdjustIcon, LogoIcon, PushPinIcon } from "@config/assets";
import { Circle } from "@mui/icons-material";
import { LogoText } from "@config/components";

export default function Header() {
  // ** redux
  const dispatch = useAppDispatch();

  const { onHover } = useAppSelector(
    (state) => state.generalModels.themeOptions
  );

  const { drawerWidth, variant } = useAppSelector((state) => state.palette);

  // ** hook
  const { MINI } = useThemeConstants();

  // ** handle methods
  const handleOnHover = () => {
    if (drawerWidth === layoutSize.DRAWER_WIDTH.DEFAULT) {
      dispatch(handleRadioChange(layoutSize.DRAWER_WIDTH.MINI));
      dispatch(setThemeOptions({ onHover: true }));
    } else if (drawerWidth === layoutSize.DRAWER_WIDTH.MINI) {
      dispatch(handleRadioChange(layoutSize.DRAWER_WIDTH.DEFAULT));
      dispatch(setThemeOptions({ onHover: false }));
    }
  };

  const handleOnVariant = () => {
    dispatch(handleVariant(!variant));
    dispatch(setThemeOptions({ onHover: false }));
  };

  // ** styles
  const style = styles();

  return (
    <Box sx={style.container}>
      <Box sx={style.drawerNav}>
        <LogoText
          firstLetter={"R"}
          text={"EAXY"}
          onHover={onHover}
          MINI={MINI}
        />
        <Tooltip
          TransitionComponent={Zoom}
          title={`variant sidebar ${variant ? "persistent" : "temporary"}`}
          placement="top"
        >
          <IconButton
            className="variant"
            type="button"
            onClick={() => handleOnVariant()}
          >
            {<PushPinIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          title="Hover sidebar"
          placement="top"
        >
          <IconButton
            className={"circle"}
            type="button"
            onClick={() => handleOnHover()}
          >
            {!onHover ? <AdjustIcon /> : <Circle />}
          </IconButton>
        </Tooltip>
      </Box>
      <Box className={"logo"}>
        <LogoIcon />
      </Box>
    </Box>
  );
}
