import React from "react";
import { Chip, styled, Box, useTheme } from "@mui/material";
import { styles } from "./All.styles";
import { MuiCard } from "@config/components";
import { TagFacesIcon } from "@config/assets/icons";
import { IChipDataProps } from "@config/models";

// ** styled mui
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(1),
}));

export function Array() {
  // ** useState
  const [chipData, setChipData] = React.useState<readonly IChipDataProps[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  // ** handle method
  const handleDelete = (chipToDelete: IChipDataProps) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme);
  return (
    <MuiCard title="Array chip">
      <Box sx={style.container} component="ul">
        {chipData.map((data) => {
          let icon;

          if (data.label === "React") {
            icon = <TagFacesIcon />;
          }

          return (
            <ListItem key={data.key}>
              <Chip
                icon={icon}
                label={data.label}
                onDelete={
                  data.label === "React" ? undefined : handleDelete(data)
                }
              />
            </ListItem>
          );
        })}
      </Box>
    </MuiCard>
  );
}
