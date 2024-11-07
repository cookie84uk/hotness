import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Paper } from "@mui/material";
import { MuiCard } from "@config/components";
import { styles } from "../styles/All.styles";

// ** fields
const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function SortingTable() {
  // ** data
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  return (
    <MuiCard title="Sorting table data grid">
      <Paper style={styles.table}>
        <DataGrid
          {...data}
          initialState={{
            ...data.initialState,
            sorting: {
              ...data.initialState?.sorting,
              sortModel: [
                {
                  field: "rating",
                  sort: "desc",
                },
              ],
            },
          }}
        />
      </Paper>
    </MuiCard>
  );
}
