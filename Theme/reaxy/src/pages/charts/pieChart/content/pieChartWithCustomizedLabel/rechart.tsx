import { PieChart, Pie, Cell } from "recharts";
import { Box } from "@mui/material";
import React from "react";
import { PieChartWithCustomizedLabelData } from "@config/data";

export function Rechart() {
  // ** radian
  const RADIAN = Math.PI / 180;

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // ** render recharts
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="350px"
    >
      <PieChart width={400} height={400}>
        <Pie
          data={PieChartWithCustomizedLabelData}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {PieChartWithCustomizedLabelData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
}
