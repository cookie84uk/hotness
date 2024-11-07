import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
// import {
//   setForm,
//   setIsFlipped,
// } from '@layouts/headerDrawer/slice/formHeaderSlice'
import { styles } from "./Accept.styles";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import { setForm, setIsFlipped } from "@config/redux/slices/content/formHeaderSlice";

export const Accept = () => {
  // ** redux
  const state = useAppSelector((state) => state.slices.formHeaderSlice);

  const { acceptTerms, isFlipped } = useAppSelector(
    (state) => state.slices.formHeaderSlice
  );
  // ** dispatch
  const dispatch = useAppDispatch();

  // * handle methods

  const handleButtonClick = () => {
    dispatch(setIsFlipped(!isFlipped));
  };

  const handleAccept = () => {
    dispatch(
      setForm({
        ...state,
        acceptTerms: !state.acceptTerms,
      })
    );
  };

  const handleDisAgreeAccept = () => {
    dispatch(
      setForm({
        ...state,
        acceptTerms: false,
      })
    );
    handleButtonClick();
  };

  const style = styles({ acceptTerms });

  return (
    <Box sx={style.container}>
      <Box sx={style.terms}>
        <Typography variant="h5">Terms</Typography>
        <Typography textAlign={"left"} variant="h6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut illo
          architecto tempore, perferendis impedit vitae quis modi nulla
          voluptate est incidunt in sed exercitationem! Fuga exercitationem quae
          incidunt reprehenderit enim maxime quaerat fugiat quis atque
          consectetur qui consequatur vel natus voluptates, in corporis dolores
          laborum id ex obcaecati eligendi minima at dolorem modi! Eveniet, sed
          voluptate. Itaque at voluptas aut soluta cum eum. Asperiores corporis
          doloremque sed! Expedita voluptatum obcaecati quia reprehenderit
          commodi, in odit natus nobis deserunt dicta dolor eligendi ipsum sit
          culpa harum ab explicabo totam quod a quaerat rerum! Praesentium quia
          facilis quisquam nesciunt culpa ipsum earum suscipit id? Quos
          architecto nam cum assumenda, commodi suscipit veritatis vitae
          doloribus, veniam beatae omnis! Temporibus quos velit sapiente facere
          explicabo laboriosam tempora laborum odit pariatur modi tempore quis
          voluptas, sed eligendi quaerat rerum nihil perspiciatis laudantium!
          Nostrum, dolores quae libero ut vel architecto asperiores non a ex
          odio doloremque voluptatibus tempora suscipit dicta deserunt eius
          velit aut unde deleniti voluptates? Nam in nemo porro doloribus eum
          earum veritatis repellat veniam! Enim minus pariatur libero, similique
          fuga error nulla numquam, aliquid beatae incidunt nesciunt hic
          molestiae maxime nobis est! Temporibus autem laudantium rem quia, sit
          eveniet quos ea ratione recusandae!
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.acceptTerms}
              onChange={() => handleAccept()}
              color="primary"
            />
          }
          label={
            <Typography variant="h6">
              I have read and agree to the Terms
            </Typography>
          }
        />
      </Box>
      <Box sx={style.buttonBox}>
        <Button
          fullWidth
          color="success"
          variant="contained"
          onClick={handleButtonClick}
          disabled={!acceptTerms}
        >
          Agree
        </Button>
        <Button
          fullWidth
          color="error"
          variant="contained"
          onClick={() => handleDisAgreeAccept()}
        >
          Disagree
        </Button>
      </Box>
      <Box></Box>
    </Box>
  );
};
