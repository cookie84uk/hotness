import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { MuiCard } from "@config/components";
import { styles } from "../styles/All.styles";
import React from "react";

// ** function
function createData(id: number, name: string, weight: number, symbol: string) {
  return { id, name, weight, symbol };
}

// ** rows
const rows = [
  createData(1, "Hydrogen", 1.0079, "H"),
  createData(2, "Helium", 4.0026, "He"),
  createData(3, "Lithium", 6.941, "Li"),
  createData(4, "Beryllium", 9.0122, "Be"),
  createData(5, "Carbon", 12.0107, "C"),
  createData(6, "Nitrogen", 14.0067, "N"),
  createData(7, "Oxygen", 15.9994, "O"),
  createData(8, "Fluorine", 18.9984, "F"),
  createData(9, "Neon", 20.1797, "Ne"),
  createData(10, "Sodium", 22.9897, "Na"),
  createData(11, "Magnesium", 24.305, "Mg"),
  createData(12, "Aluminum", 26.9815, "Al"),
  createData(13, "Silicon", 28.0855, "Si"),
  createData(14, "Phosphorus", 30.9738, "P"),
  createData(15, "Sulfur", 32.065, "S"),
  createData(16, "Chlorine", 35.453, "Cl"),
  createData(17, "Argon", 39.948, "Ar"),
  createData(18, "Potassium", 39.0983, "K"),
  createData(19, "Calcium", 40.078, "Ca"),
  createData(20, "Boron", 10, "B"),
];

export default function BasicTable() {
  return (
    <MuiCard title="Basic table mui">
      <TableContainer component={Paper}>
        <Table sx={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography fontWeight={600} variant="h6">
                  No.
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={600} variant="h6">
                  Name
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={600} variant="h6">
                  Weight
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={600} variant="h6">
                  Symbol
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.weight}</TableCell>
                <TableCell align="left">{row.symbol}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MuiCard>
  );
}
