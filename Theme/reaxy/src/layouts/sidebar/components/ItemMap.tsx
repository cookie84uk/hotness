import React, { useState } from "react";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import { NavLink } from "react-router-dom";
import { styles } from "./ItemMap.styles";
import { useTranslation } from "react-i18next";
import { nameSpaces } from "@config/libs/i18n";
import { useAppSelector, useThemeConstants } from "@config/hooks";
import { INavDataProps, ItemMapProps } from "@config/models";
import { KeyboardArrowDownIcon } from "@config/assets";

export const ItemMap: React.FC<ItemMapProps> = ({
  item,
  index,
  size,
  level = 0,
  show,
  setShow,
}) => {
  const { t } = useTranslation(nameSpaces);

  // ** redux
  const { itemData } = useAppSelector((state) => state.slices.dynamicMenu);

  const { isRtl } = useAppSelector((state) => state.palette);

  const { onHover } = useAppSelector(
    (state) => state.generalModels.themeOptions
  );

  // ** drawer mode as useThemeConstants
  const { MINI, DEFAULT } = useThemeConstants();

  // ** state with sub menu
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);

  // ** methods
  const toggleOpenSubMenu = () => {
    if (item.parentId) {
      setOpenSubMenu(!openSubMenu);
    }
  };

  const toggleShow = (itemId: string) => {
    if (item.subNav && !item.parentId) {
      setShow((prev: string) => (prev === itemId ? null : itemId));
    } else if (item.subNav && item.parentId) {
      toggleOpenSubMenu();
    }
  };

  // ** filter parentId
  const filteredItems = itemData?.filter(
    (menuItem: { parentId: string | null }) => menuItem.parentId === item.id
  );

  // ** style
  const style = styles({ DEFAULT }, { level }, { isRtl });

  return (
    <>
      <Tooltip
        title={MINI && !onHover && t(item.title, { ns: item.id as string })}
        placement="right"
        arrow
      >
        <ListItemButton
          component={item.routerLink ? NavLink : "div"}
          key={index}
          onClick={() => {
            toggleShow(item.id as string);
          }}
          to={item.routerLink ? item.path : null}
          target={item.target === "_blank" ? "_blank" : "_self"}
        >
          <ListItemIcon sx={style.listIcons}>
            <Icon sx={{ fontSize: size }}>{item.icon}</Icon>
          </ListItemIcon>
          <Typography component={"span"} variant="h5">
            {t(item.title, { ns: item.id as string })}
          </Typography>
          {item.subNav ? (
            <KeyboardArrowDownIcon
              className={
                item.subNav
                  ? show === item.id || openSubMenu
                    ? "arrowDown"
                    : ""
                  : undefined
              }
            />
          ) : null}
        </ListItemButton>
      </Tooltip>

      <Collapse
        in={item.subNav ? show === item.id || openSubMenu : undefined}
        timeout="auto"
        unmountOnExit
      >
        {filteredItems && show && (
          <>
            {filteredItems.map((items: INavDataProps) => (
              <ItemMap
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
      </Collapse>
    </>
  );
};
