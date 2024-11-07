export const muiCodeString = `import React, { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@router/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = {
  palette: {
    primary: 'green',
    text: '#fff',
  },
}

const GitHubButton = styled(Button)(
  ({ theme }) => '
    background-color: theme.palette.primary  => 'green' ;
  ',
);

export default function App() {
 
  return (
    <>
      <ThemeProvider theme={theme}>
        <GitHubButton>Create Repository</GitHubButton>
      </ThemeProvider>
    </>
  );
}

`;
