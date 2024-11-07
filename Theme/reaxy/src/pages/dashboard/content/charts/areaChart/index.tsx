import { nameSpaces } from "@config/libs/i18n";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ResponsiveContainer } from "recharts";

import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { Box, alpha, useTheme } from "@mui/material";
import { MuiCard } from "@config/components";
import { areaData } from "@config/data";


export function AreaChartRechart() {

  // ** language
  const { t } = useTranslation(nameSpaces);

  //  ** useState
  const [data, setData] = useState(areaData);

  //  ** useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = data.map((item) => ({
        name: item.name,
        uv: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000,
        pv: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
        amt: Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000,
      }));
      setData(updatedData);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  // ** style
  const theme = useTheme();

  return (
    <MuiCard title={t("charts.area.title", { ns: "dashboard" })}>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="25%" stopColor={theme.palette.primary.main} />
                <stop
                  offset="100%"
                  stopColor={alpha(theme.palette.primary.light, 0.1)}
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke={theme.palette.primary.dark}
              strokeWidth={3}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </MuiCard>
  );
};

