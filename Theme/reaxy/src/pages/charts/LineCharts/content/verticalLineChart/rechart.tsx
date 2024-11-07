import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
  LineChart,
  ResponsiveContainer,
} from "recharts";
import { VerticalLineChartData } from "@config/data";

export function Rechart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        layout="vertical"
        width={500}
        height={300}
        data={VerticalLineChartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Line dataKey="pv" stroke="#8884d8" />
        <Line dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
