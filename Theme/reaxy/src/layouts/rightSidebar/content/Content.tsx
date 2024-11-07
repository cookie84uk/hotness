import React from "react";
import { Box } from "@mui/material";
import { LayoutConfig } from "./layoutConfig";
import { styles } from "./Content.styles";
import { MenuType } from "./menuType";
import { DrawerType } from "./drawerType.tsx";
import { OptionsDrawer } from "./optionsDrawer";
import { Mode } from "./mode";
import { Header } from "./header";

export function Content({ content }: { content: boolean }) {
  const headerComponent = <Header title={content ? "Settings" : "Palette"} />;

  if (content) {
    return (
      <Box sx={{ position: "relative" }}>
        <Box sx={styles.container}>
          {headerComponent}
          <LayoutConfig />
          <MenuType />
          <DrawerType />
          <OptionsDrawer />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <Box sx={styles.container}>
          {headerComponent}
          <Mode />
        </Box>
      </Box>
    );
  }
}
