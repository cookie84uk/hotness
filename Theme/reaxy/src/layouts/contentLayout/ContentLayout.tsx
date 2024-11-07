import React from "react";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@config/hooks";
import { styles } from "./ContentLayout.styles";
import { MuiMain } from "@config/components";
import { setCurrentModule } from "@config/redux";
import RouterBreadcrumbs from "@layout/breadcrumbs";

interface IContentLayout {
  children: ReactNode;
}

export function ContentLayout({ children }: IContentLayout) {
  // ** redux
  const dispatch = useAppDispatch();

  const { drawerWidth, variant, vertical, isRtl, footer } = useAppSelector(
    (state) => state.palette
  );

  const { sidebarIsOpen, onHover } = useAppSelector(
    (state) => state.generalModels.themeOptions
  );

  // ** location
  const location = useLocation();
  const currentModule = location.pathname.split("/")[1];

  // ** useEffect
  useEffect(() => {
    dispatch(setCurrentModule(currentModule));
  }, [currentModule]);

  // ** style
  const style = styles({ footer });

  return (
    <MuiMain
      open={sidebarIsOpen}
      onHover={onHover}
      drawerWidth={drawerWidth}
      variant={variant}
      vertical={vertical}
      isRtl={isRtl}
    >
      <Box sx={style.container}>
        <RouterBreadcrumbs />
        {children}
      </Box>
    </MuiMain>
  );
}
