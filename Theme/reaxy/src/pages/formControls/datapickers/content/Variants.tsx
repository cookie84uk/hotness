import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { MuiCard } from "@config/components";
import React from "react";

export function Variants() {
  return (
    <MuiCard title={"Variants date picker"}>
      <DemoContainer
        components={[
          "DatePicker",
          "MobileDatePicker",
          "DesktopDatePicker",
          "StaticDatePicker",
        ]}
      >
        <DemoItem label="Desktop variant">
          <DesktopDatePicker defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
        <DemoItem label="Mobile variant">
          <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
        <DemoItem label="Responsive variant">
          <DatePicker defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
        <DemoItem label="Static variant">
          <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
      </DemoContainer>
    </MuiCard>
  );
}
