import React, { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  LineChart,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { nameSpaces } from "@config/libs/i18n";
import { CustomCard } from "@config/components";
import { totalData } from "@config/data/content/dashboard/TotalData";

export function Total() {
  // ** language
  const { t } = useTranslation(nameSpaces);

  const theme = useTheme();
  const [chipColor, setChipColor] = useState<"primary" | "secondary">(
    "primary"
  );

  const handleChipClick = () => {
    setChipColor(chipColor === "primary" ? "secondary" : "primary");
  };

  return (
    <CustomCard
      title={t("charts.total", { ns: "dashboard" })}
      chipColor={chipColor}
      icon={<TrendingUpIcon />}
      chipOnClick={handleChipClick}
      label={"15%"}
    >
      <ResponsiveContainer width="100%" height={100}>
        <LineChart width={1000} height={200} data={totalData}>
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="uv"
            stroke={theme.palette.primary.main}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </CustomCard>
  );
}
