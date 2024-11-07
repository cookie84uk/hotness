import { useRef, useState } from "react";

import { MenuItem, IconButton, Box } from "@mui/material";
import Menu from "@mui/material/Menu";

import { styles } from "./LanguageDropdown.styles";
import { IGetLanguageTable } from "@config/models";
import { languageLocalizationList } from "@config/constant";
import React from "react";
import { TranslateIcon } from "@config/assets";
import { langList } from "@config/libs/data";
import { useAppSelector, useOnClickOutside } from "@config/hooks";

interface ILanguageDropdown {
  selectedLanguageCode: string;
  langList: IGetLanguageTable[];
  handleLanguageChange: (language: string) => void;
  header: any;
}

export function LanguageDropdown({
  selectedLanguageCode,
  header,
  handleLanguageChange,
}: ILanguageDropdown) {
  // ** redux
  const { isRtl } = useAppSelector((state) => state.palette);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const selectedLanguage =
    languageLocalizationList[selectedLanguageCode.split("-")[0]].shortName;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    handleLanguageChange(event.currentTarget.id);
    setAnchorEl(null);
  };

  // ** hook

  const menuRef = useRef<HTMLElement | null>(null);

  const handler = () => {
    setAnchorEl(null);
  };

  useOnClickOutside({ ref: menuRef, handler });

  // ** styles
  const style = styles({ isRtl });

  return (
    <Box ref={menuRef}>
      <IconButton sx={style.languageIcon} onClick={handleClick}>
        <TranslateIcon />
      </IconButton>
      <Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          elevation={0}
          PaperProps={{
            sx: {
              width: anchorEl && anchorEl.offsetWidth,
              minWidth: "150px",
              ...style.dropdownMenu,
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Box>{header}</Box>
          <Box sx={style.content}>
            {langList.map((item) => {
              const name = item.shortName.toLowerCase();
              const image = item.img;
              const { shortName, code } = languageLocalizationList[name];

              return (
                <MenuItem
                  onClick={handleClose}
                  key={item.idHash}
                  selected={shortName === selectedLanguage}
                  id={code}
                >
                  <>
                    <Box component={"img"} src={image} />
                    {shortName}
                  </>
                </MenuItem>
              );
            })}
          </Box>
        </Menu>
      </Box>
    </Box>
  );
}
