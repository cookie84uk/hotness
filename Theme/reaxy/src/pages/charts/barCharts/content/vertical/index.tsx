import React from "react";
import { Rechart } from "./recharts";
import { MuiCard } from "@config/components";

export function VerticalBarChart() {
  return (
    <MuiCard title="Horizontal bar chart">
      <Rechart />
    </MuiCard>
  );
}
