import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Fab } from "@mui/material";

import { Sidebar } from "../sidebar";

import { ContentLayout } from "../contentLayout";

import { styles } from "./Root.styles";
import { RightSidebar } from "@layout/rightSidebar";
import { KeyboardArrowUp } from "@mui/icons-material";
import { useAppSelector, useScrollToTop } from "@config/hooks";
import HeaderDrawer from "@layout/headerDrawer";
import { Navbar } from "@layout/dropdowNavbar";
import Footer from "@layout/footer";
import { LoaderApp } from "@config/components";

export function Root() {
  // ** redux
  const { fixed, isRtl, vertical, drawerWidth, footer } = useAppSelector(
    (state) => state.palette
  );

  // ** useState
  const [isScroll, setIsScroll] = useState(false);

  // ** hook
  const { scrollToTop, handleScroll, containerRef } =
    useScrollToTop(setIsScroll);

  const { isLoading } = useAppSelector((state) => state.slices.loader);

  // ** styles
  const style = styles(
    { fixed },
    { isRtl },
    { vertical },
    { drawerWidth },
    { isScroll },
    { footer }
  );

  if (isLoading) {
    return <LoaderApp />;
  }

  return (
    <Box sx={style.mainLayout} ref={containerRef} onScroll={handleScroll}>
      <HeaderDrawer />
      <Navbar />
      <Sidebar />
      <RightSidebar />
      <Footer />
      <Box sx={style.content}>
        <ContentLayout>
          <Outlet />
          <Box role="presentation" sx={style.presentation}>
            <Fab
              onClick={scrollToTop}
              color="primary"
              size="large"
              aria-label="Scroll back to top"
            >
              <KeyboardArrowUp fontSize="large" />
            </Fab>
          </Box>
        </ContentLayout>
      </Box>
    </Box>
  );
}
