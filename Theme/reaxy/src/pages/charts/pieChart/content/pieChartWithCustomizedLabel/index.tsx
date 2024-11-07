import { MuiCard } from "@config/components";
import { Rechart } from "./rechart";
import React from "react";

export function PieChartWithCustomizedLabel() {
  return (
    <MuiCard title="Pie Chart With Customized Label">
      <Rechart />
    </MuiCard>
  );
}
