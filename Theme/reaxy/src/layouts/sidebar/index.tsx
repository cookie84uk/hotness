import React from "react";
import { Box, Drawer } from "@mui/material";

import Header from "./components/header";
import { useEffect } from "react";
import { MenuMap } from "./components";
import {
  useAppDispatch,
  useAppMediaQuery,
  useAppSelector,
} from "@config/hooks";
import { handleVariant, setThemeOptions } from "@config/redux";
import { useLocation } from "react-router-dom";

export function Sidebar() {
  // ** redux
  const dispatch = useAppDispatch();
  const { sidebarIsOpen, onHover } = useAppSelector(
    (state) => state.generalModels.themeOptions
  );
  const { variant, isRtl, vertical } = useAppSelector((state) => state.palette);

  // ** handle method
  const handleSidebar = () => {
    dispatch(setThemeOptions({ sidebarIsOpen: !sidebarIsOpen }));
  };

  // ** hook

  const location = useLocation();

  const { isMdDown } = useAppMediaQuery();

  // ** useEffect
  useEffect(() => {
    if (isMdDown) {
      dispatch(handleVariant(false));
      dispatch(setThemeOptions({ sidebarIsOpen: false }));
    } else {
      dispatch(handleVariant(true));
      dispatch(setThemeOptions({ sidebarIsOpen: true }));
    }
  }, [isMdDown, location]);

  return (
    <Drawer
      className={onHover && !vertical ? "" : "onHover"}
      variant={variant ? "persistent" : "temporary"}
      open={sidebarIsOpen}
      onClose={handleSidebar}
      anchor={isRtl ? "right" : "left"}
    >
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Header />
        <Box className="content">
          <MenuMap />
        </Box>
      </Box>
    </Drawer>
  );
}
