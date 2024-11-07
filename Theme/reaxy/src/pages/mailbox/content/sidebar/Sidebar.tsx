import { Box, ListItemButton, Typography, useTheme } from "@mui/material";
import { styles } from "./Sidebar.styles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SidebarHeader } from "./SidebarHeader";
import { useAppMediaQuery, useAppSelector, useLayoutSize } from "@config/hooks";

import React from "react";
import { mailData } from "@config/data";
import { IDataMailBox } from "@config/models";
import {
  setData,
  setIsOpen,
  setIsSender,
  setSelected,
} from "@config/redux/slices/content/mailBoxSlice";

export function Sidebar() {
  // ** useDispatch
  const dispatch = useDispatch();

  // ** redux
  const {
    isOpen,
    selectedMenu,
    selected,
    data: myData,
    searchQuery,
  } = useAppSelector((state) => state.slices.mail);

  const { isRtl } = useAppSelector((state) => state.palette);

  // ** handle method
  const handleReadAndSelected = (d: IDataMailBox, item: { id: number }) => {
    dispatch(setIsSender(false));
    dispatch(setSelected(d));
    if (selected && isMdDown) {
      dispatch(setIsOpen(false));
    }

    // ** isRead method
    const index = myData.findIndex((d) => d.id === item.id);
    if (index !== -1) {
      const newData = [...myData];
      newData[index] = {
        ...newData[index],
        isRead: false,
      };
      dispatch(setData(newData));
    }
  };

  // ** filter data selected menu
  const filteredData = myData?.filter((item) => {
    switch (selectedMenu) {
      case "All":
        return !item.trash;
      case "Trash":
        return item.trash;
      case "Starred":
        return item.starred && !item.trash;
      case "Drafts":
        return item.draft && !item.trash;
      default:
        return true;
    }
  });

  // ** filter data filtered name
  const filteredAndSearchedData = filteredData.filter((item) => {
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(searchLower) ||
        item.subject.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  // ** hook
  const { isMdDown } = useAppMediaQuery();

  const { LAYOUT_SIZE } = useLayoutSize();

  // ** useEffect
  useEffect(() => {
    dispatch(setData(mailData));
    if (isMdDown) {
      dispatch(setIsOpen(false));
    } else {
      dispatch(setIsOpen(true));
    }
  }, [isMdDown]);

  // ** style @app config
  const theme = useTheme();
  const style = styles(theme, { isOpen }, { LAYOUT_SIZE }, { isRtl });

  return (
    <Box sx={style.container}>
      <SidebarHeader />
      <Box sx={style.content}>
        {filteredAndSearchedData.map((d: IDataMailBox, index: number) => (
          <Box key={index}>
            <ListItemButton
              sx={style.listButton}
              className={selected?.id === d.id ? "active" : ""}
              onClick={() => handleReadAndSelected(d, d)}
            >
              <Box sx={style.img} component={"img"} src={d.img} />
              <Box sx={style.textContainer}>
                <Box sx={style.textWrapper}>
                  <Typography
                    fontWeight={!!d.isRead ? 600 : 400}
                    variant={"h6"}
                  >
                    {d.name}
                  </Typography>
                  <Typography
                    fontWeight={!!d.isRead ? 600 : 400}
                    variant="body1"
                  >
                    {d.date}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontWeight={d.isRead ? 600 : 400}
                    sx={style.subText}
                    variant={"body2"}
                  >
                    {d.subject}
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
