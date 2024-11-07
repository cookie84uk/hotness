import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  initialState,
  setIsOpen,
  setUsers,
  setValues,
} from "@config/redux/slices/userSlice";
import { Box, Typography, useTheme } from "@mui/material";
import { Basic, Contacts, Personal, Settings, SocialLife, Work } from "./tabs";
import {
  useAppDispatch,
  useAppMediaQuery,
  useAppSelector,
} from "@config/hooks";
import { CustomTabs } from "@config/components";
import { styles } from "./Modal.styles";
import { setIsLoading } from "@config/redux";

export function FormDialog() {
  // ** redux
  const { isOpen, users, edit, values } = useAppSelector(
    (state) => state.users
  );

  // ** useDispatch
  const dispatch = useAppDispatch();

  // ** handle methods
  const handleReset = initialState.values;

  const handleClose = () => {
    dispatch(setIsOpen(false));
    dispatch(setValues(handleReset));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      dispatch(setIsLoading(true));

      if (edit) {
        dispatch(setValues(values));
        const updateData = users.map((value) => {
          if (value.id === values.id) {
            return {
              ...value,
              ...values,
            };
          }
          return value;
        });
        dispatch(setUsers(updateData));
      } else {
        dispatch(
          setUsers([
            ...users,
            { ...values, id: Math.floor(Math.random() * 1000000) },
          ])
        );
      }

      await new Promise((resolve) => setTimeout(resolve, 500));

      handleClose();
      dispatch(setValues(handleReset));
    } catch (error) {
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  // ** useEffect
  useEffect(() => {}, [values]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(setValues({ ...values, [name]: value }));
  };

  // **@ tabs components
  const tabContents: Array<React.ReactNode> = [
    <Basic handleChange={handleChange} />,
    <Personal handleChange={handleChange} />,
    <Work handleChange={handleChange} />,
    <Contacts handleChange={handleChange} />,
    <SocialLife handleChange={handleChange} />,
    <Settings handleChange={handleChange} />,
  ];
  const tabNames = [
    "Basic",
    "Personal",
    "Work",
    "Contacts",
    "SocialLife",
    "Settings",
  ];

  // ** hook
  const { isMdDown } = useAppMediaQuery();

  useEffect(() => {
    if (edit) {
      dispatch(setValues(values));
    }
  }, [values, edit, isMdDown]);

  // ** trim disable
  const isCredentialsEmpty =
    values.username.trim() === "" || values.password.trim() === "";

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box>
      <Dialog
        fullScreen={isMdDown}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box component={"form"} onSubmit={handleSubmit}>
          <Typography variant="h4" p={3}>
            {!edit ? "Add User" : "Update User"}
          </Typography>
          <DialogContent>
            <Box component={"div"}>
              <CustomTabs names={tabNames}>
                {tabContents.map((content, index) => (
                  <Box component={"div"} sx={style.container} key={index}>
                    {content}
                  </Box>
                ))}
              </CustomTabs>
            </Box>
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
          >
            <Button color="error" variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              color={"success"}
              sx={style.success}
              disabled={isCredentialsEmpty ? true : false}
              variant="contained"
              type="submit"
            >
              {!edit ? "Save" : "Update"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}
