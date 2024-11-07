import React from "react";
import { Box, IconButton } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { styles } from "./Fullscreen.styles";

// export  Fullscreen;

export function Fullscreen() {
  // ** useState
  const [_isFullscreen, setIsFullscreen] = React.useState(false);

  // ** handle method
  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  // ** useEffect
  React.useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      setIsFullscreen(!!document.fullscreenElement);
    });
  }, []);

  return (
    <Box>
      <IconButton onClick={handleFullscreen}>
        <FullscreenIcon sx={styles.color} />
      </IconButton>
    </Box>
  );
}
