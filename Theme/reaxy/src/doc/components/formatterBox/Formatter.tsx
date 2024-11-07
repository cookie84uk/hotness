import { ContentCopyIcon, FileCopyIcon } from "@config/assets";
import {
  Box,
  Chip,
  Collapse,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { styles } from "./styles";
import { useOnClickOutside } from "@config/hooks";
import { useCopyText } from "@doc/hook/useCopyText";

interface IFormatter {
  children: string;
  fileType: string;
}

const Formatter: React.FC<IFormatter> = ({
  children,
  fileType,
}: IFormatter) => {
  // ** language
  const { t } = useTranslation("general");

  // ** copyMethod
  const { handleCopyClick, isClicked } = useCopyText({
    copyText: children,
  });

  const [expanded, setExpanded] = React.useState<boolean | false>(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handler = () => {
    setExpanded(false);
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme, { expanded });

  const boxRef = useRef<HTMLElement | null>(null);

  useOnClickOutside({ ref: boxRef, handler });

  return (
    <Box sx={{ p: { lg: "16px 0" } }}>
      <Box sx={style.container} ref={boxRef}>
        <Box sx={style.showCode}>
          <Chip
            sx={{ height: "30px", width: "150px", flex: "end" }}
            onClick={handleClick}
            label={
              expanded
                ? t("hideCode", { ns: "doc" })
                : t("showCode", { ns: "doc" })
            }
          />
        </Box>
        <Box sx={style.formatterBox}>
          {expanded ? (
            <Box sx={style.headerBox}>
              <Typography variant="h6">{fileType}</Typography>
              <Box onClick={handleCopyClick} sx={style.action}>
                <Typography variant="body1">
                  {isClicked ? t("textCopied") : t("copyTheText")}
                </Typography>
                <IconButton>
                  {isClicked ? <FileCopyIcon /> : <ContentCopyIcon />}
                </IconButton>
              </Box>
            </Box>
          ) : (
            <Box component={"code"} sx={style.unShow}>
              &lt;Script&gt;
              <p>&lt;p&gt;{t("showText", { ns: "doc" })}&lt;/p&gt;</p>
              &lt;/Script&gt;
            </Box>
          )}
          <Collapse in={expanded} sx={style.collapse}>
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={style.formatter}
            >
              {children}
            </SyntaxHighlighter>
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
};

export default Formatter;
