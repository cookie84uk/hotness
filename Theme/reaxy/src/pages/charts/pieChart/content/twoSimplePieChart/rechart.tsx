import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
import { Box } from "@mui/material";
import React from "react";
import { TwoSimplePieChartData1, TwoSimplePieChartData2 } from "@config/data";

export function Rechart() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="350px"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={TwoSimplePieChartData1}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="value"
            data={TwoSimplePieChartData2}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}
