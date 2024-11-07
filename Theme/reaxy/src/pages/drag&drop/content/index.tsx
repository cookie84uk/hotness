import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { styles } from "./All.styles";

import { DragDropItem2 } from "@config/models";
import {
  AccessAlarmIcon,
  EmailIcon,
  FavoriteIcon,
  HomeIcon,
  PersonIcon,
  WorkIcon,
} from "@config/assets";

export function ListDragDrop() {
  // ** useState
  const [items, setItems] = useState<DragDropItem2[]>([
    {
      id: "1",
      icon: HomeIcon,
      content:
        " There's also the possibility of moving elements around in the same container, changing their position. ",
    },
    {
      id: "2",
      icon: PersonIcon,
      content:
        " There's also the possibility of moving elements around in the same container, changing their position. ",
    },
    {
      id: "3",
      icon: AccessAlarmIcon,
      content:
        " There's also the possibility of moving elements around in the same container, changing their position. ",
    },
    {
      id: "4",
      icon: WorkIcon,
      content:
        " There's also the possibility of moving elements around in the same container, changing their position. ",
    },
    {
      id: "5",
      icon: EmailIcon,
      content:
        " There's also the possibility of moving elements around in the same container, changing their position. ",
    },
    {
      id: "6",
      icon: FavoriteIcon,
      content:
        " There's also the possibility of moving elements around in the same container, changing their position. ",
    },
  ]);

  // ** handle methods
  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    item: DragDropItem2
  ) => {
    event.dataTransfer.setData("text/plain", item.id);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    targetId: string
  ) => {
    event.preventDefault();

    // ** methods
    const draggedItemId = event.dataTransfer.getData("text/plain");
    const draggedItemIndex = items.findIndex(
      (item) => item.id === draggedItemId
    );
    const targetItemIndex = items.findIndex((item) => item.id === targetId);

    if (draggedItemIndex > -1 && targetItemIndex > -1) {
      const newItems = [...items];
      const draggedItem = newItems[draggedItemIndex];

      newItems.splice(draggedItemIndex, 1);
      newItems.splice(targetItemIndex, 0, draggedItem);

      setItems(newItems);
    }
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid key={item.id} item lg={4} md={6} xs={12}>
          <Box
            draggable
            onDragStart={(event) => handleDragStart(event, item)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, item.id)}
          >
            <Box component={Paper}>
              <Box sx={style.content}>
                <item.icon />
                <Typography
                  paragraph
                  variant="h6"
                  fontWeight={400}
                  textAlign={"center"}
                >
                  {item.content}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
