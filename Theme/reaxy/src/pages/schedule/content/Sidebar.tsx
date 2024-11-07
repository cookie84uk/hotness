import { EventApi, formatDate } from "@fullcalendar/core/index.js";
import {
  Box,
  Card,
  FormControlLabel,
  List,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import { styles } from "./Content.styles";
import React from "react";
import { useLayoutSize } from "@config/hooks";

export function Sidebar({
  handleWeekendsToggle,
  weekendsVisible,
  currentEvents,
}: any) {
  // ** hook
  const { LAYOUT_SIZE } = useLayoutSize();

  // ** styles
  const theme = useTheme();
  const style = styles(theme, { LAYOUT_SIZE });

  // ** render
  const renderSidebarEvent = (event: EventApi) => {
    return (
      <List key={event.id}>
        <b>
          {formatDate(event.start!, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <Typography variant="body2">{event.title}</Typography>
      </List>
    );
  };

  return (
    <Card sx={style.card}>
      <Box sx={style.section}>
        <Typography paragraph variant="h5" fontWeight={500}>
          Instructions
        </Typography>
        <Typography paragraph variant="body1" fontWeight={400}>
          Select dates and you will be prompted to create a new event
        </Typography>
        <Typography paragraph variant="body1" fontWeight={400}>
          Drag, drop, and resize events
        </Typography>
        <Typography paragraph variant="body1" fontWeight={400}>
          Click an event to delete it
        </Typography>
      </Box>

      <Box sx={style.section}>
        <Typography variant="h5">Weekends</Typography>
        <FormControlLabel
          label={
            <Typography variant="body1">
              {weekendsVisible ? "on" : "off"}
            </Typography>
          }
          control={
            <Switch checked={weekendsVisible} onChange={handleWeekendsToggle} />
          }
        />
      </Box>

      <Box sx={style.sectionEvents}>
        <Typography variant="h5">
          All Events ({currentEvents.length})
        </Typography>

        <List>{currentEvents.map(renderSidebarEvent)}</List>
      </Box>
    </Card>
  );
}
