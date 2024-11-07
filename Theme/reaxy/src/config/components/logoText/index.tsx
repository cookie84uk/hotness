import React from "react";
import { Box, SxProps } from "@mui/system";
import { useTheme } from "@mui/material";
import { useAppSelector } from "@config/hooks";

interface LogoTextProps {
  firstLetter: string;
  text: string;
  onHover: boolean | undefined;
  MINI: boolean;
}

export const LogoText: React.FC<LogoTextProps> = ({
  firstLetter,
  text,
  onHover,
  MINI,
}) => {
  // ** redux
  const { isRtl } = useAppSelector((state) => state.palette);

  // ** styles
  const theme = useTheme();

  const styles: SxProps = {
    display: "flex",
    flexDirection: isRtl ? "row-reverse" : "row",
    alignItems: "center",
    gap: "4px",
    transition: ".2s",
    ".letter": {
      fontSize: "2.6rem",
      display: "inline",
      fontWeight: "bold",
      transition: ".2s",
      color: theme.palette.primary.main,
    },
    ".text": {
      fontWeight: "bold",
      fontSize: "2.6rem",
      transition: ".2s",
      color: theme.palette.primary.main,
      overflow: "hidden",
      letterSpacing: "4px",
      display: onHover || MINI ? "none" : "inline",
      "&::first-letter": {
        color: theme.palette.error.main,
        width: "1ch",
        fontSize: "2.6rem",
      },
    },
  };

  return (
    <Box sx={styles}>
      <Box component="span" className="letter">
        {firstLetter}
      </Box>
      <Box component="span" className="text">
        {text}
      </Box>
    </Box>
  );
};
