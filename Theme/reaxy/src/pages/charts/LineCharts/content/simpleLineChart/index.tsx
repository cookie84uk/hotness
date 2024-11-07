import { MuiCard } from "@config/components";
import { Rechart } from "./rechart";
import React from "react";

export function SimpleLineChart() {
  return (
    <MuiCard title="Simple Line Chart">
      <Rechart />
    </MuiCard>
  );
}
