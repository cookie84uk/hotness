import * as React from "react";
import Radio from "@mui/material/Radio";
import { MuiCard } from "@config/components";

export function SizeRadioButtons() {
  //  ** useState
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  // ** radio props
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <MuiCard title="Size Radio Buttons">
      <div>
        <Radio {...controlProps("a")}     sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 18,
              width: 18,
              height: 18,
            },
          }} />
        <Radio
          {...controlProps("b")}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 28,
              width: 28,
              height: 28,
            },
          }}
        />
        <Radio
          {...controlProps("c")}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 36,
              width: 36,
              height: 36,
            },
          }}
        />
      </div>
    </MuiCard>
  );
}
