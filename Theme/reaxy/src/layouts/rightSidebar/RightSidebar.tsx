import * as React from "react";
import Box from "@mui/material/Box";
import { styles } from "./RightSidebar.styles";
import { Content } from "./content/Content";
import SettingsIcon from "@mui/icons-material/Settings";
import { Tooltip, Zoom, useTheme } from "@mui/material";
import { Palette } from "@mui/icons-material";
import { useAppSelector } from "@config/hooks";

export function RightSidebar() {
  // ** redux
  const { isRtl } = useAppSelector((state) => state.palette);

  // ** useState
  const [open, setOpen] = React.useState(false);

  const [content, setContent] = React.useState(false);

  // ** toggle method
  const setting = () => {
    setOpen(!open);
    setContent(true);
  };

  const palette = () => {
    setOpen(!open);
    setContent(false);
  };

  // ** style
  const theme = useTheme();
  const style = styles(theme, { isRtl }, { open });

  return (
    <>
      <Box sx={style.iconButton}>
        <Tooltip
          TransitionComponent={Zoom}
          placement="left"
          arrow
          title={"Settings"}
        >
          <SettingsIcon onClick={() => setting()} />
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          placement="left"
          arrow
          title={"Palette"}
        >
          <Palette onClick={() => palette()} />
        </Tooltip>
      </Box>

      <Box component={"aside"} sx={style.aside}>
        <Content content={content} />
      </Box>
      <Box onClick={() => setOpen(false)} sx={style.backDrop} />
    </>
  );
}
