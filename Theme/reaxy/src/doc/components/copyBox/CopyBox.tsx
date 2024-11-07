import React, { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Tab,
  Tabs,
  alpha,
  useTheme,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import { ContentCopyIcon, FileCopyIcon } from "@config/assets";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import { setPackageManager } from "@config/redux/slices/content/docSlice";
import "react-toastify/dist/ReactToastify.css";
import { getInstallCommand } from "@doc/constants";
import { styles } from "./styles";
import { useCopyText } from "@doc/hook/useCopyText";
import { Link } from "react-router-dom";
import { ICopyBox } from "@doc/models";



const CopyBox: React.FC<ICopyBox> = ({
  id,
  copyText,
  other,
  name,
}: ICopyBox) => {
  const { t } = useTranslation("general");
  const dispatch = useAppDispatch();
  const { packageManager } = useAppSelector((state) => state.slices.doc);
  const { isRtl } = useAppSelector((state) => state.palette);

  const { sidebarIsOpen } = useAppSelector(
    (state) => state.generalModels.themeOptions
  );

  const handlePackageManagerChange = (pm: string) => {
    if (pm !== packageManager) {
      dispatch(setPackageManager(pm));
    }
  };

  const { handleCopyClick, isClicked } = useCopyText({
    copyText: getInstallCommand(copyText, packageManager),
  });

  const [selectedPackageManager, setSelectedPackageManager] = useState("npm");

  const handleTabChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedPackageManager(newValue);
    handlePackageManagerChange(newValue);
  };
  const theme = useTheme();
  const style = styles({ isRtl }, { isClicked }, { sidebarIsOpen });

  const CopyBoxFunction: React.FC = () => (
    <>
      <Box sx={style.tabHeader}>
        <Tabs
          value={selectedPackageManager}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="npm" value="npm" />
          <Tab label="yarn" value="yarn" />
          <Tab label="pnpm" value="pnpm" />
        </Tabs>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "end",
            padding: "0 24px",
            color: theme.palette.primary.main,
          }}
        >
          {name}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: alpha(theme.palette.background.default, 0.5),
          borderRadius: "0 0 16px 16px",
          p: 3,
        }}
      >
        <Box sx={style.copyBoxWrapper}>
          <Box sx={style.textBox}>
            {isRtl ? (
              <>
                <Typography variant="h5" sx={style.copyText}>
                  {getInstallCommand(copyText, selectedPackageManager)
                    .split(" ")
                    .slice(2)
                    .join(" ")}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    ...style.packageManager,
                  }}
                >
                  {getInstallCommand(copyText, selectedPackageManager)
                    .split(" ")
                    .slice(0, 2)
                    .join(" ")}
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="h5" sx={style.packageManager}>
                  {getInstallCommand(copyText, selectedPackageManager)
                    .split(" ")
                    .slice(0, 2)
                    .join(" ")}
                </Typography>
                <Typography variant="h5" sx={style.copyText}>
                  {getInstallCommand(copyText, selectedPackageManager)
                    .split(" ")
                    .slice(2)
                    .join(" ")}
                </Typography>
              </>
            )}
          </Box>
          <Box sx={style.buttonBox}>
            {isClicked ? t("textCopied") : t("copyTheText")}
            <IconButton onClick={handleCopyClick}>
              {isClicked ? <FileCopyIcon /> : <ContentCopyIcon />}
            </IconButton>
          </Box>
        </Box>
        {other && (
          <Box
            component={Link}
            target="blank"
            to={other}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <Typography variant="h6" sx={{ color: theme.palette.error.main }}>
              Link :
            </Typography>
            <Typography sx={{ color: theme.palette.info.main }}>
              {other}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );

  return (
    <Box component={"section"} id={id} sx={{ ...style.section }}>
      <Box sx={style.copyBox}>
        <CopyBoxFunction />
      </Box>
    </Box>
  );
};

export default CopyBox;
