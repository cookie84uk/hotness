import * as React from "react";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import { MuiCard } from "@config/components";

export function ColorRadioButtons() {
  // ** useState
  const [selectedValue, setSelectedValue] = React.useState("a");

  // ** handle method
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  // ** radio props
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <MuiCard title="Color Radio Buttons">
      <div>
        <Radio {...controlProps("a")} />
        <Radio {...controlProps("b")} color="secondary" />
        <Radio {...controlProps("c")} color="success" />
        <Radio {...controlProps("d")} color="default" />
        <Radio
          {...controlProps("e")}
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
      </div>
    </MuiCard>
  );
}
