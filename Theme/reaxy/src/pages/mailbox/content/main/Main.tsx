import { Box, Divider, Typography, useTheme } from "@mui/material";
import { MainHeader } from "./MainHeader";
import { styles } from "./Main.styles";
import Sender from "../sender/Sender";
import { AdfScannerIcon, MailOutlineIcon } from "@config/assets/icons";
import { useAppSelector } from "@config/hooks";
import React from "react";

export function Main() {
  // ** redux
  const { selected, isSender } = useAppSelector((state) => state.slices.mail);

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box sx={style.container}>
      <MainHeader />
      <Box sx={style.content}>
        {isSender ? (
          <Sender />
        ) : (
          selected.id !== 0 && (
            <>
              <Box sx={style.senderHeader}>
                <Typography variant="h5">{selected.subject}</Typography>
                <AdfScannerIcon />
              </Box>
              <Divider component={"div"} />
              <Box sx={style.senderName}>
                <Box sx={style.senderText}>
                  <Box
                    sx={style.senderImg}
                    component={"img"}
                    src={selected.img}
                  />
                  <Typography variant="h6">
                    {selected.name}
                    {selected.email}
                    <br />
                    <span style={style.senderSubText}> {"To me"}</span>
                  </Typography>
                  <br />
                </Box>
                <Typography variant="h6"> {selected.date}</Typography>
              </Box>
              <Divider component={"div"} />
              <Box dangerouslySetInnerHTML={{ __html: selected.text }} />
            </>
          )
        )}
        {selected.id === 0 && !isSender && (
          <Box sx={style.iconContainer}>
            <MailOutlineIcon  />
            <Typography variant="h5">Select a mail to read</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
