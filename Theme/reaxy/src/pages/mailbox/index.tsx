import { Box, Card } from "@mui/material";
import { Sidebar, Main } from "./content";
import { styles } from "./Mail.styles";
import React from "react";
import {
  useAppDispatch,
  useAppMediaQuery,
  useAppSelector,
  useLayoutSize,
} from "@config/hooks";
import { setIsOpen } from "@config/redux/slices/content/mailBoxSlice";

export default function MailBox() {
  // *** redux
  const dispatch = useAppDispatch();
  // ** hook
  const { LAYOUT_SIZE } = useLayoutSize();

  const { isOpen } = useAppSelector((state) => state.slices.mail);

  const handleClose = () => {
    dispatch(setIsOpen(!isOpen));
  };

  // ** hook
  const { isMdDown } = useAppMediaQuery();

  //   ** style
  const style = styles({ LAYOUT_SIZE }, { isOpen }, { isMdDown });

  return (
    <Card sx={style.container}>
      <Sidebar />
      {/* </Backdrop> */}
      <Main />
      {isMdDown && <Box sx={style.backDrop} onClick={handleClose} />}
    </Card>
  );
}
