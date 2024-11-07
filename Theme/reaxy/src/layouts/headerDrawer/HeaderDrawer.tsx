import { Theme, Tooltip } from "@mui/material";
import { styles } from "./HeaderDrawerStyles";
import React, { useEffect, useRef } from "react";

import { Content } from "./content";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Box, IconButton, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";
import { HeaderMenu } from "./content/headerMenu";
import {
  useAppDispatch,
  useAppMediaQuery,
  useAppSelector,
  useOnClickOutside,
} from "@config/hooks";
import { setOpen, setShowLogo, setThemeOptions } from "@config/redux";
import { CloseIcon, LogoIcon, MenuIcon } from "@config/assets";

export default function HeaderDrawer() {
  // ** redux
  const dispatch = useAppDispatch();

  const { fixed, open, vertical, show } = useAppSelector(
    (state) => state.palette
  );

  const { name, surName } = useAppSelector(
    (state) => state.slices.formHeaderSlice
  );

  const { sidebarIsOpen } = useAppSelector(
    (state) => state.generalModels.themeOptions
  );

  // ** language
  const { t } = useTranslation();

  // ** hook
  const { isMd, isSmDown } = useAppMediaQuery();

  // ** handler methods
  const handleSidebar = () => {
    dispatch(setThemeOptions({ sidebarIsOpen: !sidebarIsOpen }));
  };

  // ** handle show logo
  const handleShowLogo = () => {
    dispatch(setShowLogo(!show));
  };

  // @ outside
  const handler = () => {
    dispatch(setOpen(false));
  };

  useEffect(() => {
    if (isMd) {
      handler();
    }

    if (isSmDown) {
      dispatch(setShowLogo(false));
    } else {
      dispatch(setShowLogo(true));
    }
  }, [isMd, isSmDown]);

  // ** ref
  const drawerRef = useRef<HTMLElement | null>(null);

  useOnClickOutside({ ref: drawerRef, handler });

  // ** style
  const style = styles({ open }, { fixed });

  return (
    <Box sx={style.container}>
      <Box component={"aside"} sx={style.sidebar} ref={drawerRef}>
        <Content />
        <Box sx={style.appBar}>
          <Box sx={style.start}>
            <Tooltip
              title={!open ? "Open app setting" : "Close app setting"}
              placement="top"
            >
              <IconButton
                sx={style.appBar.expand}
                onClick={() => {
                  dispatch(setOpen(!open));
                }}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              placement="top"
              title={sidebarIsOpen ? "Close sidebar" : " Open sidebar"}
            >
              <IconButton
                sx={{ display: open || !vertical ? "none" : "flex" }}
                onClick={() => handleSidebar()}
              >
                {sidebarIsOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip
              title={`Sidebar logo ${!show ? "show" : "hide"} `}
              placement="top"
            >
              <IconButton
                type="button"
                onClick={() => handleShowLogo()}
                sx={{
                  display: open || !vertical ? "none" : "flex",
                  svg: {
                    line: {
                      stroke: (theme: Theme) => theme.palette.primary.main,
                    },
                    path: {
                      stroke: (theme: Theme) => theme.palette.primary.main,
                      fill: (theme: Theme) => theme.palette.primary.main,
                    },
                  },
                }}
              >
                {show ? <LogoIcon /> : <LogoIcon />}
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={style.organization}>
            <Typography color={"primary"} variant="h4">
              {t("organizationName", { ns: "general" })}
            </Typography>
            <Typography variant="h6">
              <>
                {name} {surName}
              </>
            </Typography>
            <HeaderMenu />
          </Box>
        </Box>
      </Box>
      <Box sx={style.backDrop} />
    </Box>
  );
}
