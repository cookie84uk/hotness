import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

export const CustomClock = () => {
  const [ctime, setCtime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setCtime(newTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 3,
      }}
    >
      <Typography variant="h1">{ctime}</Typography>
    </Box>
  );
};
