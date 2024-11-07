import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MuiCard } from "@config/components";
import React from "react";

export function Views() {
  return (
    <MuiCard title={"Views date picker"}>
      <DemoContainer components={["DatePicker", "DatePicker", "DatePicker"]}>
        <DatePicker
          label={'"year", "month" and "day"'}
          views={["year", "month", "day"]}
        />
        <DatePicker label={'"day"'} views={["day"]} />
        <DatePicker label={'"month" and "year"'} views={["month", "year"]} />
      </DemoContainer>
    </MuiCard>
  );
}
