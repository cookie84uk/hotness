import {
  Box,
  Radio,
  Typography,
  FormControlLabel,
  Switch,
  Tooltip,
  Zoom,
} from "@mui/material";
import { styles } from "../../Content.styles";
import { useSelector } from "react-redux";
import { RootState, handleRadioChange, setThemeOptions } from "@config/redux";
import {
  useAppDispatch,
  useAppMediaQuery,
  useAppSelector,
} from "@config/hooks";
import React, { useEffect } from "react";
import { layoutSize } from "@config/constant";

export function Content() {
  // ** redux
  const { drawerWidth, variant, vertical } = useSelector(
    (state: RootState) => state.palette
  );

  const { onHover } = useAppSelector(
    (state) => state.generalModels.themeOptions
  );
  // ** dispatch
  const dispatch = useAppDispatch();

  // ** handle methods
  const handleOffHover = () => {
    dispatch(setThemeOptions({ onHover: false }));
  };

  const handleHover = () => {
    dispatch(setThemeOptions({ onHover: !onHover }));
    dispatch(handleRadioChange(layoutSize.DRAWER_WIDTH.MINI));
  };

  const { isXlDown } = useAppMediaQuery();

  useEffect(() => {
    if (isXlDown) {
      handleOffHover();
    }
  }, [isXlDown]);

  return (
    <>
      {/* ** DEFAULT */}
      <Box sx={styles.wrapperMenu}>
        <Radio
          checked={drawerWidth === layoutSize.DRAWER_WIDTH.DEFAULT}
          onChange={() =>
            dispatch(handleRadioChange(layoutSize.DRAWER_WIDTH.DEFAULT))
          }
          onClick={() => handleOffHover()}
          value={layoutSize.DRAWER_WIDTH.DEFAULT}
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <Typography variant={"h4"}>default</Typography>
      </Box>
      {/* ** COMPACT */}
      <Box sx={styles.wrapperMenu}>
        <Radio
          checked={drawerWidth === layoutSize.DRAWER_WIDTH.COMPACT}
          onChange={() =>
            dispatch(handleRadioChange(layoutSize.DRAWER_WIDTH.COMPACT))
          }
          onClick={() => handleOffHover()}
          value={layoutSize.DRAWER_WIDTH.COMPACT}
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
        <Typography variant={"h4"}>compact</Typography>
      </Box>
      {/* ** MINI */}
      <Box sx={styles.wrapperMenu}>
        <Radio
          checked={drawerWidth === layoutSize.DRAWER_WIDTH.MINI}
          onChange={() =>
            dispatch(handleRadioChange(layoutSize.DRAWER_WIDTH.MINI))
          }
          value={layoutSize.DRAWER_WIDTH.MINI}
          name="radio-buttons"
          inputProps={{ "aria-label": "C" }}
        />
        <Typography variant={"h4"}>mini</Typography>
        <Tooltip
          TransitionComponent={Zoom}
          followCursor
          title={
            variant && vertical ? (
              ""
            ) : (
              <React.Fragment>
                <Typography variant="h6" color="inherit">
                  Hover disable
                </Typography>
                To make the sidebar's <u>{"variant persistent"}</u> and{" "}
                <u>{"vertical mode"}</u>
                {" for enabling "}
                {"the"} <b>{" HOVER "}</b>
                {"to activate "}
              </React.Fragment>
            )
          }
        >
          <FormControlLabel
            disabled={!variant || !vertical || isXlDown}
            control={
              <Switch
                checked={onHover}
                onChange={handleHover}
                disabled={!variant || !vertical || isXlDown}
              />
            }
            label={
              onHover ? (
                <Typography variant={"h6"}>hover is active</Typography>
              ) : (
                <Typography variant={"h6"}>hover is not active</Typography>
              )
            }
          />
        </Tooltip>
      </Box>
    </>
  );
}
