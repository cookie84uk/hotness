import { Box, Card } from "@mui/material";
import { styles } from "./Chat.styles";
import React from "react";
import { Main, Sidebar } from "./content";
import { useAppDispatch, useAppMediaQuery, useAppSelector, useLayoutSize } from "@config/hooks";
import { setIsOpen } from "@config/redux/slices/content/chatSlice";

export default function Chat() {
    // ** redux
    const dispatch = useAppDispatch();
    
    const { isOpen,  } = useAppSelector((state) => state.slices.chat);

    
  // ** hook
  const { LAYOUT_SIZE } = useLayoutSize();

  
  const { isMdDown } = useAppMediaQuery();

  const handleClose = () => {
    dispatch(setIsOpen(!isOpen));
  };


  // ** styles
  const style = styles({LAYOUT_SIZE},{isOpen},{isMdDown});
  return (
    <Card sx={style.container}>
      <Sidebar />
      <Main />
      {isMdDown && <Box sx={style.backDrop} onClick={handleClose} />}

    </Card>
  );
}
