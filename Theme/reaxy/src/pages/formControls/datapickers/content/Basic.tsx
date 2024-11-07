import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MuiCard } from "@config/components";
import React from "react";


export function Basic() {
  return (
    <MuiCard title={"Basic date picker"}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </MuiCard>
  );
}
