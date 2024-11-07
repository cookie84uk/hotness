import React from "react";
import { Rechart } from "./rechart";
import { MuiCard } from "@config/components";

export function Simple() {
  return (
    <MuiCard title="Vertical bar chart">
      <Rechart />
    </MuiCard>
  );
}
