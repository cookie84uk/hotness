export const fullCalendarCodeString = `
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function MyCalendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'Event 1', date: '2022-01-01' },
        { title: 'Event 2', date: '2022-01-10' }
      ]}
    />
  );
}`;
