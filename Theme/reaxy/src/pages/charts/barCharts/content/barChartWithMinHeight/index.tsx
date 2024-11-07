import React from "react";
import { MuiCard } from "@config/components";
import { Rechart } from "./rechart";

export function BarChartWithMinHeight() {
  return (
    <MuiCard title="Min height bar chart">
      <Rechart />
    </MuiCard>
  );
}
