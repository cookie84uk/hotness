import React from "react";
import { MuiCard } from "@config/components";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { styles } from "../styles/All.styles";

export default function SelectingTable() {
  // ** data
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    maxColumns: 6,
  });

  return (
    <MuiCard title="Selecting table mui data grid">
      <Paper style={styles.table}>
        <DataGrid checkboxSelection disableRowSelectionOnClick {...data} />
      </Paper>
    </MuiCard>
  );
}
