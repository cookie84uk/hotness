import React, { useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import {
  setForm,
  setIsFlipped,
} from "@config/redux/slices/content/formHeaderSlice";
import { styles } from "./Form.styles";
import { Slide, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import { IUserSubmitForm } from "@config/models";

export const Form = () => {
  // **redux
  const { isRtl } = useAppSelector((state) => state.palette);

  // ** dispatch
  const dispatch = useAppDispatch();

  // ** useState
  const [loading, setLoading] = useState(false);

  const {
    name,
    surName,
    email,
    password,
    phone,
    acceptTerms,
    confirmPassword,
    isFlipped,
    job,
    address,
  } = useAppSelector((state) => state.slices.formHeaderSlice);

  // ** validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    surName: Yup.string()
      .required("surName is required")
      .min(6, "surName must be at least 6 characters")
      .max(20, "surName must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), ""], "Confirm Password does not match"),
    // acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserSubmitForm>({
    resolver: yupResolver(
      validationSchema
    ) as unknown as Resolver<IUserSubmitForm>,
  });

  // ** add
  const onSubmit = (data: IUserSubmitForm) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(setForm({ ...data, acceptTerms }));
      toast.success("Submitting", {
        position: isRtl ? "top-left" : "top-right",
        rtl: isRtl ? true : false,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
        autoClose: 2000,
      });
      setLoading(false);
    }, 2000);
  };

  const handleButtonClick = () => {
    dispatch(setIsFlipped(!isFlipped));
  };

  // ** styles
  const style = styles({ loading });

  return (
    <Box sx={style.form} component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={style.middleContent}>
        <TextField
          variant="outlined"
          size="small"
          label="Name"
          placeholder={!!errors ? errors.name?.message : ""}
          type="text"
          defaultValue={name}
          {...register("name")}
          error={!!errors.name}
          fullWidth
        />
        <TextField
          size="small"
          label="Surname"
          fullWidth
          type="text"
          variant="outlined"
          defaultValue={surName}
          {...register("surName")}
          error={!!errors.surName}
          placeholder={!!errors ? errors.surName?.message : ""}
        />
      </Box>
      <Box sx={style.middleContent}>
        <TextField
          fullWidth
          size="small"
          label="Job"
          type="text"
          variant="outlined"
          defaultValue={job}
          {...register("job")}
          error={!!errors.job}
          placeholder={!!errors ? errors.job?.message : ""}
        />
        <TextField
          label="Address"
          size="small"
          fullWidth
          type="text"
          variant="outlined"
          defaultValue={address}
          {...register("address")}
          error={!!errors.address}
          placeholder={!!errors ? errors.address?.message : ""}
        />
      </Box>
      <Box sx={style.middleContent}>
        <TextField
          fullWidth
          size="small"
          label="Email"
          type="text"
          variant="outlined"
          defaultValue={email}
          {...register("email")}
          error={!!errors.email}
          placeholder={!!errors ? errors.email?.message : ""}
        />
        <TextField
          fullWidth
          size="small"
          label="Phone"
          type="text"
          variant="outlined"
          defaultValue={phone}
          {...register("phone")}
          error={!!errors.phone}
          placeholder={!!errors ? errors.phone?.message : ""}
        />
      </Box>
      <Box sx={style.middleContent}>
        <TextField
          fullWidth
          size="small"
          label="Password"
          type="password"
          variant="outlined"
          defaultValue={password}
          {...register("password")}
          error={!!errors.password}
          placeholder={!!errors ? errors.password?.message : ""}
        />
        <TextField
          fullWidth
          size="small"
          label="confirmPassword"
          type="password"
          variant="outlined"
          defaultValue={confirmPassword}
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          placeholder={!!errors ? errors.confirmPassword?.message : ""}
        />
      </Box>

      <Box sx={style.accept}>
        <Typography variant="h6" onClick={() => handleButtonClick()}>
          Accept the terms
        </Typography>
      </Box>
      <Box sx={style.buttonBox}>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="success"
          className="success"
          disabled={!acceptTerms}
        >
          {loading ? (
            <Box sx={style.insideButton}>
              Loading...
              <CircularProgress />
            </Box>
          ) : (
            "Submit"
          )}
        </Button>
        <Button
          fullWidth
          type="button"
          onClick={() => reset()}
          variant="contained"
          className="success"
          color="warning"
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};
