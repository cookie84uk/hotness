import React from "react";
import { useState } from "react";
import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useTranslation } from "react-i18next";
import { nameSpaces } from "@config/libs/i18n";
import { useTheme } from "@mui/material";
import { CustomCard } from "@config/components";
import { productData } from "@config/data";

export function Product() {
  // ** language
  const { t } = useTranslation(nameSpaces);

  const theme = useTheme();

  const [chipColor, setChipColor] = useState<"primary" | "secondary">(
    "secondary"
  );

  const handleChipClick = () => {
    setChipColor(chipColor === "primary" ? "secondary" : "primary");
  };

  return (
    <CustomCard
      title={t("charts.product", { ns: "dashboard" })}
      chipColor={chipColor}
      icon={<TrendingUpIcon />}
      chipOnClick={handleChipClick}
      label={"37%"}
      color={theme.palette.customColors.gradient}
    >
      <ResponsiveContainer width="100%" height={100}>
        <BarChart
          width={500}
          height={200}
          data={productData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill={theme.palette.secondary.dark} />
          <Bar dataKey="uv" fill={theme.palette.secondary.light} />
        </BarChart>
      </ResponsiveContainer>
    </CustomCard>
  );
}
