import { IMediaQueries } from "@config/models";
import { useMediaQuery, useTheme } from "@mui/material";

export const useAppMediaQuery = (): IMediaQueries => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  // ** down
  const isXsDown = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const isXlDown = useMediaQuery(theme.breakpoints.down("xl"));

  // ** up
  const isXsUp = useMediaQuery(theme.breakpoints.up("xs"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));


  return {
    // ** only
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,

    // ** down
    isXsDown,
    isSmDown,
    isMdDown,
    isLgDown,
    isXlDown,

    // ** up
    isSmUp,
    isXsUp,
    isMdUp,
    isLgUp,
    isXlUp,
  };
};
