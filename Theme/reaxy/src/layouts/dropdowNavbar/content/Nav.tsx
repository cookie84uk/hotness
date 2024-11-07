import React from "react";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { nameSpaces } from "@config/libs/i18n";
import { useAppSelector, useThemeConstants } from "@config/hooks";
import { INavDataProps, ItemMapProps } from "@config/models";
import { styles } from "./Nav.styles";
import { KeyboardDoubleArrowRightIcon } from "@config/assets";

const Nav: React.FC<ItemMapProps> = ({
  item,
  index,
  size,
  level = 0,
  show,
  setShow,
}) => {
  const { t } = useTranslation(nameSpaces);

  // ** Redux
  const { itemData } = useAppSelector((state) => state.slices.dynamicMenu);

  const { isRtl } = useAppSelector((state) => state.palette);

  // ** Theme Constants
  const { COMPACT, MINI, DEFAULT } = useThemeConstants();

  // ** Filter parentId
  const filteredItems = itemData?.filter(
    (menuItem: { parentId: string | null }) => menuItem.parentId === item.id
  );

  // ** Style
  const style = styles(
    { COMPACT },
    { DEFAULT },
    { MINI },
    { show },
    { level },
    { isRtl }
  );

  return (
    <>
      {item.horizontal && (
        <Box sx={style.container}>
          <Tooltip
            arrow
            title={MINI && t(item.title, { ns: item.id as string })}
            placement={level > 0 ? (isRtl ? "right" : "left") : "top"}
          >
            <ListItemButton
              component={item.routerLink ? NavLink : "div"}
              key={index}
              to={item.routerLink ? item.path : null}
              target={item.target === "_blank" ? "_blank" : "_self"}
            >
              <ListItemIcon>
                <Icon sx={{ fontSize: size }}>{item.icon}</Icon>
              </ListItemIcon>
              <Typography component={"span"}>
                {t(item.title, { ns: item.id as string })}
              </Typography>

              {item.subNav && level ? (
                <KeyboardDoubleArrowRightIcon className={"arrowRight"} />
              ) : null}
            </ListItemButton>
          </Tooltip>
          <Box component="ul">
            {filteredItems && (
              <>
                {filteredItems.map((items: INavDataProps) => (
                  <Nav
                    key={items.id}
                    item={items}
                    index={index}
                    size={size}
                    level={level + 1}
                    show={show}
                    setShow={setShow}
                  />
                ))}
              </>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Nav;
