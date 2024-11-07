import React, { useEffect } from "react";
import { Box } from "@mui/material";

import { setThemeOptions } from "@config/redux";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Documentation() {
  // ** redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setThemeOptions({ sidebarIsOpen: false }));
  }, []);

  return (
    <Box sx={{ display: "flex", gap: "16px" }}>
      <Outlet />
    </Box>
  );
}
