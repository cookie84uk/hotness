import {
  JointLineScatterChartData1,
  JointLineScatterChartData2,
} from "@config/data/content/charts/lineChart/JointLineScatterChart";
import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  ZAxis,
  Legend,
  Scatter,
} from "recharts";

export function Rechart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <ZAxis type="number" range={[100]} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter
          name="A school"
          data={JointLineScatterChartData1}
          fill="#8884d8"
          line
          shape="cross"
        />
        <Scatter
          name="B school"
          data={JointLineScatterChartData2}
          fill="#82ca9d"
          line
          shape="diamond"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
