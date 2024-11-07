import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Selector from "./Selector";
import { useState } from "react";
import React from "react";
import {
  country,
  gender,
  salutation,
  state,
} from "@config/data/content/profile/userInfoData";
import { IUserInfoFormInputs } from "@config/models";
import { Loading } from "@config/components";
import { commonSubmitFunction, defaultValues } from "./FormFunction";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    control,
  } = useForm<IUserInfoFormInputs>({ defaultValues });

  const [loading, setLoading] = useState(false);

  const onSubmit = (data: IUserInfoFormInputs) => {
    commonSubmitFunction(data, errors, setError, setLoading, reset);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        ".MuiInputBase-root": {
          fontSize: "small",
        },
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={3}>
        <Grid item lg={2} md={12} xs={12}>
          <Selector
            name="salutation"
            options={salutation}
            control={control}
            defaultValue=""
            label="Salutation"
          />
        </Grid>
        <Grid item lg={5} md={12} xs={12}>
          <TextField
            label="First Name"
            required={!!errors.firstName}
            fullWidth
            error={!!errors.firstName}
            {...register("firstName")}
            helperText={errors.firstName?.message}
          />
        </Grid>
        <Grid item lg={5} md={12} xs={12}>
          <TextField
            label="Last Name"
            fullWidth
            required={!!errors.lastName}
            error={!!errors.lastName}
            {...register("lastName")}
            helperText={errors.lastName?.message}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={4} md={12} xs={12}>
          <Selector
            name="gender"
            options={gender}
            control={control}
            defaultValue=""
            label="Gender"
          />
        </Grid>

        <Grid item lg={4} md={12} xs={12}>
          <TextField
            label="Contact email"
            placeholder="email"
            type="email"
            fullWidth
            error={!!errors.email}
            required={!!errors.email}
            {...register("email")}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item lg={4} md={12} xs={12}>
          <TextField
            label="Phone"
            placeholder="Phone"
            required={!!errors.phone}
            fullWidth
            error={!!errors.phone}
            {...register("phone")}
            helperText={errors.phone?.message}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={2} md={12} xs={12}>
          <TextField
            label="Zip code"
            placeholder="Zip code"
            fullWidth
            required={!!errors.code}
            error={!!errors.code}
            {...register("code")}
            helperText={errors.code?.message}
          />
        </Grid>
        <Grid item lg={5} md={12} xs={12}>
          <Selector
            name="country"
            options={country}
            control={control}
            required={!!errors.phone}
            error={!!errors.country}
            defaultValue=""
            label="Country"
            helperText={errors.country?.message}
          />
        </Grid>
        <Grid item lg={5} md={12} xs={12}>
          <Selector
            name="state"
            options={state}
            control={control}
            defaultValue=""
            label="State"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item lg={12} md={12} xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Address"
            placeholder="Select address"
            multiline
            fullWidth
            {...register("address")}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{}}>
        Update
      </Button>
    </Box>
  );
}
