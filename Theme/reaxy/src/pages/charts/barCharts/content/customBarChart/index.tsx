import React from "react";
import { Rechart } from "./rechart";
import { MuiCard } from "@config/components";

export function CustomBarChart() {
  return (
    <MuiCard title="Custom bar chart">
      <Rechart />
    </MuiCard>
  );
}
