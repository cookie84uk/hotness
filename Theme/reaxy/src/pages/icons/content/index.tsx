import { Box, Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import { styles } from "./IconsGrid.styles";
import { Link } from "react-router-dom";
import {
  AccessAlarmIcon,
  AccessAlarmsIcon,
  AccessTimeIcon,
  AccessibilityIcon,
  AccountBalanceIcon,
  AccountBalanceWalletIcon,
  AccountBoxIcon,
  AccountCircleIcon,
  AdbIcon,
  AddAlarmIcon,
  AddAlertIcon,
  AddBoxIcon,
  AddCircleIcon,
  AddCircleOutlineIcon,
  AddIcon,
  AddShoppingCartIcon,
  AddToPhotosIcon,
  AdjustIcon,
  AirlineSeatFlatAngledIcon,
  AirlineSeatFlatIcon,
  AirlineSeatIndividualSuiteIcon,
  AirlineSeatLegroomExtraIcon,
  AirlineSeatLegroomNormalIcon,
  AirlineSeatLegroomReducedIcon,
  AirlineSeatReclineExtraIcon,
  AirlineSeatReclineNormalIcon,
  AirplanemodeActiveIcon,
  AirplanemodeInactiveIcon,
  AirplayIcon,
  ThreeDRotationIcon,
} from "@config/assets";
import React from "react";

export function IconsGrid() {
  const icons = [
    { icon: ThreeDRotationIcon, name: "ThreeDRotationIcon" },
    { icon: AccessAlarmIcon, name: "AccessAlarmIcon" },
    { icon: AccessAlarmsIcon, name: "AccessAlarmsIcon" },
    { icon: AccessTimeIcon, name: "AccessTimeIcon" },
    { icon: AccessibilityIcon, name: "AccessibilityIcon" },
    { icon: AccountBalanceIcon, name: "AccountBalanceIcon" },
    { icon: AccountBalanceWalletIcon, name: "AccountBalanceWalletIcon" },
    { icon: AccountBoxIcon, name: "AccountBoxIcon" },
    { icon: AccountCircleIcon, name: "AccountCircleIcon" },
    { icon: AdbIcon, name: "AdbIcon" },
    { icon: AddIcon, name: "AddIcon" },
    { icon: AddAlarmIcon, name: "AddAlarmIcon" },
    { icon: AddAlertIcon, name: "AddAlertIcon" },
    { icon: AddBoxIcon, name: "AddBoxIcon" },
    { icon: AddCircleIcon, name: "AddCircleIcon" },
    { icon: AddCircleOutlineIcon, name: "AddCircleOutlineIcon" },
    { icon: AddShoppingCartIcon, name: "AddShoppingCartIcon" },
    { icon: AddToPhotosIcon, name: "AddToPhotosIcon" },
    { icon: AdjustIcon, name: "AdjustIcon" },
    { icon: AirlineSeatFlatIcon, name: "AirlineSeatFlatIcon" },
    { icon: AirlineSeatFlatAngledIcon, name: "AirlineSeatFlatAngledIcon" },
    {
      icon: AirlineSeatIndividualSuiteIcon,
      name: "AirlineSeatIndividualSuiteIcon",
    },
    { icon: AirlineSeatLegroomExtraIcon, name: "AirlineSeatLegroomExtraIcon" },
    {
      icon: AirlineSeatLegroomNormalIcon,
      name: "AirlineSeatLegroomNormalIcon",
    },
    {
      icon: AirlineSeatLegroomReducedIcon,
      name: "AirlineSeatLegroomReducedIcon",
    },
    { icon: AirlineSeatReclineExtraIcon, name: "AirlineSeatReclineExtraIcon" },
    {
      icon: AirlineSeatReclineNormalIcon,
      name: "AirlineSeatReclineNormalIcon",
    },
    { icon: AirplanemodeActiveIcon, name: "AirplanemodeActiveIcon" },
    { icon: AirplanemodeInactiveIcon, name: "AirplanemodeInactiveIcon" },
    { icon: AirplayIcon, name: "AirplayIcon" },
  ];

  const theme = useTheme();
  const style = styles(theme);

  return (
    <Grid container spacing={3}>
      {icons.map((item, index) => (
        <Grid item key={index} xl={2.4} lg={3} md={4} xs={6}>
          <Box component={Paper} sx={style.content}>
            <item.icon />
            <Typography
              fontWeight={400}
              textAlign={"center"}
              pt={2}
              variant={"h6"}
            >
              {item.name}
            </Typography>
          </Box>
        </Grid>
      ))}
      <Box sx={style.iconContainer}>
        <Button
          component={Link}
          target="_blank"
          to="https://mui.com/material-ui/material-icons"
          variant="contained"
        >
          More icons
        </Button>
      </Box>
    </Grid>
  );
}
