import { Rechart } from "./rechart";
import React from "react";
import { MuiCard } from "@config/components";

export function BrushBarChart() {
  return (
    <MuiCard title="Brush bar chart">
      <Rechart />
    </MuiCard>
  );
}
