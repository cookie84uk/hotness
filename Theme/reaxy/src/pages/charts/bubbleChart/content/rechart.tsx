import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ScatterChart,
  Scatter,
} from "recharts";

import React from "react";
import { BubbleData1, BubbleData2 } from "@config/data";

export function Rechart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ScatterChart
        width={500}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis
          yAxisId="left"
          type="number"
          dataKey="y"
          name="weight"
          unit="kg"
          stroke="#8884d8"
        />
        <YAxis
          yAxisId="right"
          type="number"
          dataKey="y"
          name="weight"
          unit="kg"
          orientation="right"
          stroke="#82ca9d"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter yAxisId="left" name="A school" data={BubbleData1} fill="#8884d8" />
        <Scatter yAxisId="right" name="A school" data={BubbleData2} fill="#82ca9d" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
