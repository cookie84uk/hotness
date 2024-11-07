import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Card, useTheme } from "@mui/material";
import { ResponsiveContainer } from "recharts";
import Swal from "sweetalert2";
import {
  EventApi,
  EventClickArg,
  EventContentArg,
} from "@fullcalendar/core/index.js";
import { styles } from "./Content.styles";
import React from "react";
import { useLayoutSize } from "@config/hooks";

export default function Calendar({
  weekendsVisible,
  handleDateSelect,
  setCurrentEvents,
}: any) {
  // ** handle methods
  const handleEventClick = (clickInfo: EventClickArg) => {
    Swal.fire({
      title: `Are you sure?`,
      text: `Do you want to delete the event named '${clickInfo.event.title}'?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        clickInfo.event.remove();
        Swal.fire("Deleted!", "Your event has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your event is safe :)", "error");
      }
    });
  };

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };

  // ** hook
  const { LAYOUT_SIZE } = useLayoutSize();

  // ** styles
  const theme = useTheme();
  const style = styles(theme, { LAYOUT_SIZE });

  // ** render
  const renderEventContent = (eventContent: EventContentArg) => {
    return (
      <>
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
      </>
    );
  };

  return (
    <Card sx={style.main}>
      <ResponsiveContainer>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </ResponsiveContainer>
    </Card>
  );
}
