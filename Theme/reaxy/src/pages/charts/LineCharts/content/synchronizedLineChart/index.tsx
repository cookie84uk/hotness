import { MuiCard } from "@config/components";
import { Rechart } from "./rechart";
import React from "react";

export function SynchronizedLineChart() {
  return (
    <MuiCard title="Synchronized Line Chart">
      <Rechart />
    </MuiCard>
  );
}
