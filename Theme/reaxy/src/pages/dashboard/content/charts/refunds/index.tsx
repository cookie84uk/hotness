import React from "react";
import { useState } from "react";
import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { nameSpaces } from "@config/libs/i18n";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import { CustomCard } from "@config/components";
import { refundsData } from "@config/data";

export function Refunds() {
  // ** language
  const { t } = useTranslation(nameSpaces);

  // ** useState
  const [chipColor, setChipColor] = useState<"primary" | "secondary">(
    "primary"
  );

  // ** handle method
  const handleChipClick = () => {
    setChipColor(chipColor === "primary" ? "secondary" : "primary");
  };

  // ** style
  const theme = useTheme();

  return (
    <CustomCard
      title={t("charts.refunds", { ns: "dashboard" })}
      chipColor={chipColor}
      icon={<TrendingDownIcon />}
      chipOnClick={handleChipClick}
      label={"-9%"}
    >
      <ResponsiveContainer width="100%" height={100}>
        <BarChart
          width={500}
          height={200}
          data={refundsData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill={theme.palette.primary.light} />
          <Bar dataKey="uv" fill={theme.palette.primary.dark} />
        </BarChart>
      </ResponsiveContainer>
    </CustomCard>
  );
}
