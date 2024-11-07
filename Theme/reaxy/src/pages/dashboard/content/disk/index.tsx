import { Checkbox, Stack, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { PieChart, Pie, Cell } from "recharts";
import React, { useCallback, useState } from "react";
import { renderActiveShape } from "./activeShape";
import { styles } from "./PieChart.styles";
import { shapeData } from "@config/data";
import { MuiCard } from "@config/components";
import { useTranslation } from "react-i18next";
import { nameSpaces } from "@config/libs/i18n";

export function MyPieChart() {
  // ** language
  const { t } = useTranslation(nameSpaces);

  const [checked, setChecked] = React.useState(true);
  const [show, setShow] = React.useState(true);

  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const toggle = () => setShow((prev) => !prev);

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_: any, index: React.SetStateAction<number>) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const COLORS = [
    theme.palette.primary.main,
    "#607d8b",
    theme.palette.secondary.main,
  ];
  return (
    <MuiCard title={t("disk", { ns: "dashboard" })} textAlign={"start"}>
      <Stack sx={styles.checkbox}>
        <Checkbox checked={checked} onChange={handleChange} />
        <Checkbox checked={show} onChange={toggle} />
      </Stack>
      <Box sx={styles.container}>
        <PieChart width={400} height={400}>
          {show && (
            <Pie
              data={shapeData}
              dataKey="value"
              cx={200}
              cy={200}
              outerRadius={60}
              innerRadius={show ? 30 : 0}
              animationBegin={0}
              animationDuration={800}
              animationEasing="ease-out"
              isAnimationActive
              fill={theme.palette.secondary.main}
              onMouseEnter={onPieEnter}
            >
              {shapeData.map((_entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          )}
          <Pie
            data={shapeData}
            dataKey="value"
            cx={200}
            cy={200}
            innerRadius={checked ? 70 : 55}
            animationDuration={800}
            animationEasing="ease-out"
            fill={theme.palette.secondary.main}
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            outerRadius={90}
            isAnimationActive={true}
            animationBegin={0}
            paddingAngle={1}
            onMouseEnter={onPieEnter}
          >
            {shapeData.map((_entry, index: number) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </Box>
    </MuiCard>
  );
}
