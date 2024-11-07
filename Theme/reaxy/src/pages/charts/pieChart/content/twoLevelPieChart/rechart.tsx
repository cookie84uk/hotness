import { PieChart, Pie } from "recharts";
import { Box } from "@mui/material";
import React from "react";
import { TwoLevelPieChartData1, TwoLevelPieChartData2 } from "@config/data";

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
          data={TwoLevelPieChartData1}
          dataKey="value"
          cx={200}
          cy={200}
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={TwoLevelPieChartData2}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </Box>
  );
}
