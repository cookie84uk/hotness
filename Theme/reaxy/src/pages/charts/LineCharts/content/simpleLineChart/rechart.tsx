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
import React from "react";
import { SimpleLineChartData } from "@config/data";

export function Rechart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        width={800}
        height={400}
        data={SimpleLineChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
