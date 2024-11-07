import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import { MultiInputDateRangeField } from "@mui/x-date-pickers-pro/MultiInputDateRangeField";
import { MultiInputTimeRangeField } from "@mui/x-date-pickers-pro/MultiInputTimeRangeField";
import { MultiInputDateTimeRangeField } from "@mui/x-date-pickers-pro/MultiInputDateTimeRangeField";
import { Stack, Tooltip } from "@mui/material";
import { MuiCard } from "@config/components";

function ProLabel({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction="row" spacing={0.5} component="span">
      <Tooltip title="Included in Pro package">
        <a href="/x/introduction/licensing/#pro-plan">
          <span className="plan-pro" />
        </a>
      </Tooltip>
      <span>{children}</span>
    </Stack>
  );
}

export function DateOrTime() {
  return (
    <MuiCard title={"Date or time editing"}>
      <DemoContainer
        components={[
          "DateField",
          "TimeField",
          "DateTimeField",
          "MultiInputDateRangeField",
          "MultiInputTimeRangeField",
          "MultiInputDateTimeRangeField",
        ]}
      >
        <DemoItem label="Date">
          <DateField defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
        <DemoItem label="Time">
          <TimeField defaultValue={dayjs("2022-04-17T15:30")} />
        </DemoItem>
        <DemoItem label="Date Time">
          <DateTimeField defaultValue={dayjs("2022-04-17T15:30")} />
        </DemoItem>
        <DemoItem
          label={<ProLabel>Date Range</ProLabel>}
          component="MultiInputDateRangeField"
        >
          <MultiInputDateRangeField
            defaultValue={[dayjs("2022-04-17"), dayjs("2022-04-21")]}
          />
        </DemoItem>
        <DemoItem
          label={<ProLabel>Time Range</ProLabel>}
          component="MultiInputTimeRangeField"
        >
          <MultiInputTimeRangeField
            defaultValue={[
              dayjs("2022-04-17T15:30"),
              dayjs("2022-04-17T18:30"),
            ]}
          />
        </DemoItem>
        <DemoItem
          label={<ProLabel>Date Time Range</ProLabel>}
          component="MultiInputDateTimeRangeField"
        >
          <MultiInputDateTimeRangeField
            defaultValue={[
              dayjs("2022-04-17T15:30"),
              dayjs("2022-04-21T18:30"),
            ]}
          />
        </DemoItem>
      </DemoContainer>
    </MuiCard>
  );
}
