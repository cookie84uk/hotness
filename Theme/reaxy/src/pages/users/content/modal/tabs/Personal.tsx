import React from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  DateRangeIcon,
  DriveFileRenameOutlineIcon,
} from "@config/assets/icons";
import { IChange } from "@config/models";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import { CustomLabel } from "@config/components";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { setValues } from "@config/redux/slices/userSlice";

export function Personal({ handleChange }: IChange) {
  // ** redux
  const { values } = useAppSelector((state) => state.users);

  // ** useDispatch
  const dispatch = useAppDispatch();

  return (
    <Box>
      <TextField
        autoFocus
        margin="dense"
        name="name"
        value={values.name}
        onChange={handleChange}
        id="name"
        label={
          <CustomLabel icon={<DriveFileRenameOutlineIcon />} name="Name" />
        }
        fullWidth
        variant="filled"
      />
      <TextField
        margin="dense"
        name="surName"
        value={values.surName}
        onChange={handleChange}
        id="surName"
        label={
          <CustomLabel icon={<DriveFileRenameOutlineIcon />} name="Surname" />
        }
        fullWidth
        variant="filled"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label={<CustomLabel icon={<DateRangeIcon />} name="Birthday" />}
            value={dayjs(values.birthday)}
            onChange={(newValue) =>
              dispatch(
                setValues({ ...values, birthday: newValue?.toISOString() })
              )
            }
            slotProps={{
              textField: {
                fullWidth: true,
                variant: "filled",
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>

      <RadioGroup
        aria-label="gender"
        name="gender"
        value={values.gender}
        onChange={handleChange}
        row
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="faMale" control={<Radio />} label="Female" />
      </RadioGroup>
      <TextField
        margin="dense"
        name="url"
        value={values.url}
        onChange={handleChange}
        id="url"
        label={
          <CustomLabel icon={<DriveFileRenameOutlineIcon />} name="Image URL" />
        }
        fullWidth
        variant="filled"
      />
    </Box>
  );
}
