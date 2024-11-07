import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/system";

interface ConsoleTextProps {
  text: string;
  style?: React.CSSProperties;
}

const ConsoleTextContainer = styled("div")({
  padding: "10px",
  fontFamily: "Courier New, monospace",
  width: "100%",
  display: "none",
});

const ConsoleText: React.FC<ConsoleTextProps> = ({ text, style }) => {
  const theme = useTheme();

  const styles = `
    font-weight: bold;
    font-size: 56px;
    text-align: center;
    text-overflow:auto;
    overflow:hidden;
    color: ${theme.palette.primary.main}; 
    text-shadow: 3px 3px 0 ${theme.palette.secondary.main} ,  9px 9px 0 #fff
  `;

  useEffect(() => {
    const styledText = `%c${text}`;
    console.info(styledText, styles);
  }, [text, style, theme]);

  return <ConsoleTextContainer style={style}>{text}</ConsoleTextContainer>;
};

export default ConsoleText;
