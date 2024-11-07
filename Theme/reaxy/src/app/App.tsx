import React, { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@router/index";
import ThemeComponent from "@config/mui/theme/ThemeComponent";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import { setItemData } from "@config/redux";
import { navData } from "@config/data";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LoaderApp } from "@config/components";
import { Toast } from "@config/components/toast/index";
import Error from "@pages/pages/error";
import ConsoleTextContainer from "@config/components/console/ConsoleTextContainer";

export default function App() {
  // ** dispatch
  const dispatch = useAppDispatch();

  // ** redux selected primary mode
  const selectedPrimaryMode = useAppSelector(
    (state) => state.slices.mode.selectedPrimaryMode
  );

  // ** useEffect with sidebar data
  useEffect(() => {
    dispatch(setItemData(navData()));
  }, []);

  return (
    <>
      <ThemeComponent selectedPrimaryMode={selectedPrimaryMode}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Suspense fallback={<LoaderApp />}>
            <RouterProvider router={router} fallbackElement={<Error />} />
            <ConsoleTextContainer text={"Reaxy"} />
          </Suspense>
        </LocalizationProvider>
      </ThemeComponent>
      <Toast />
    </>
  );
}
