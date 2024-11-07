import { PieChart, Pie, Cell } from "recharts";
import { Box } from "@mui/material";
import React from "react";
import { PieChartWithPaddingAngleData } from "@config/data";

export function Rechart() {
  // ** colors
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="350px"
    >
      <PieChart width={800} height={400}>
        <Pie
          data={PieChartWithPaddingAngleData}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {PieChartWithPaddingAngleData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={PieChartWithPaddingAngleData}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {PieChartWithPaddingAngleData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
}
