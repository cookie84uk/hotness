import React from "react";
import { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Legend,
  Line,
} from "recharts";
import { useTranslation } from "react-i18next";
import { nameSpaces } from "@config/libs/i18n";
import { useTheme } from "@mui/material";
import { CustomCard } from "@config/components";
import { customersData } from "@config/data";

export function Customers() {
  // ** language
  const { t } = useTranslation(nameSpaces);

  //  ** useState
  const [chipColor, setChipColor] = useState<"primary" | "secondary">(
    "secondary"
  );

  // ** handle method
  const handleChipClick = () => {
    setChipColor(chipColor === "secondary" ? "primary" : "secondary");
  };
  // ** style
  const theme = useTheme();

  return (
    <CustomCard
      title={t("charts.customers", { ns: "dashboard" })}
      chipColor={chipColor}
      icon={<TrendingUpIcon />}
      chipOnClick={handleChipClick}
      label={"12%"}
      color={theme.palette.customColors.gradient}
    >
      <ResponsiveContainer width="100%" height={100}>
        <LineChart width={1000} height={200} data={customersData}>
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="uv"
            stroke={theme.palette.secondary.main}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </CustomCard>
  );
}
