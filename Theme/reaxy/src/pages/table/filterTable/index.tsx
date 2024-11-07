import { Paper } from "@mui/material";
import * as React from "react";
import { DataGrid, GridFilterModel, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { MuiCard } from "@config/components";
import { styles } from "../styles/All.styles";

// ** fields
const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function FilterTable() {
  // ** data
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  // ** useState
  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [
      {
        field: "rating",
        operator: ">",
        value: "2.5",
      },
    ],
  });

  return (
    <MuiCard title="Filter table data grid">
      <Paper sx={styles.table}>
        <DataGrid
          {...data}
          slots={{
            toolbar: GridToolbar,
          }}
          filterModel={filterModel}
          onFilterModelChange={(newFilterModel) =>
            setFilterModel(newFilterModel)
          }
        />
      </Paper>
    </MuiCard>
  );
}
