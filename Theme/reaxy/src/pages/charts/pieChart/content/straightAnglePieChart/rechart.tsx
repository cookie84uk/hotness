import { PieChart, Pie } from "recharts";
import { Box } from "@mui/material";
import React from "react";
import { StraightAnglePieChartData } from "@config/data";

export function Rechart() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="350px"
    >
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={StraightAnglePieChartData}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    </Box>
  );
}
