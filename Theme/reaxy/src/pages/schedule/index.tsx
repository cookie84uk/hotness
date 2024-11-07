import { useState } from "react";
import { EventApi, DateSelectArg } from "@fullcalendar/core";
import { createEventId } from "./utils/event-utils";
import { styles } from "./Schedule.styles";
import { Box, Grid } from "@mui/material";
import { Sidebar } from "./content/Sidebar";
import Calendar from "./content/Calendar";
import React from "react";
import Swal from "sweetalert2";

export default function Schedule() {
  // ** useState
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  // ** handle methods
  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    Swal.fire({
      title: "Enter a title for the new event",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Add Event",
      cancelButtonText: "Cancel",
      preConfirm: (title) => {
        if (!title) {
          Swal.showValidationMessage("Please enter the event title");
        }
        return title;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();

        calendarApi.addEvent({
          id: createEventId(),
          title: result.value,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        });

        Swal.fire("Event Added!", "", "success");
      }
    });
  };

  const style = styles();

  return (
    <Box sx={style.container}>
      <Grid container spacing={2}>
        <Grid item lg={2} md={4} xs={12}>
          <Sidebar
            currentEvents={currentEvents}
            weekendsVisible={weekendsVisible}
            handleWeekendsToggle={handleWeekendsToggle}
          />
        </Grid>
        <Grid item lg={10} md={8} xs={12}>
          <Calendar
            width={"250px"}
            weekendsVisible={weekendsVisible}
            handleDateSelect={handleDateSelect}
            setCurrentEvents={setCurrentEvents}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
