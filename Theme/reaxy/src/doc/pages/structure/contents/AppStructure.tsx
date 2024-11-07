import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { styles } from "./styles";

export default function AppStructure() {
  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box sx={style.structureContainer}>
      <Typography textAlign={"center"} variant="h4">
        Map
      </Typography>
      <Box component={"pre"} sx={style.structureWrapper}>
        {`
  ├── node_modules/              * Folder containing all external dependencies used by the project.
  ├── public/                    * Directory containing static files accessible in the browser.
  ├── src/                       * Directory containing the source code of the project.
  │   ├── app/                   * Entry file.
  │   ├── doc/                   * Documentation.
  │   ├── layouts/               * Contains general layout components for the application.
  │   ├── pages/                 * Contains page components.
  │   ├── router/                * Handles application routing.
  │   ├── main.tsx               * The parent component for the application layout.
  │   ├── vite-env.d.ts          * Custom typings for third-party modules.
  │   └── config/                * Contains configuration files.
  │       ├── assets/            * All forms of the application are located here.
  │       ├── components/        * Custom components of the application.
  │       ├── constant/          * Immutable values of the app.
  │       ├── data/              * File where global data is stored.
  │       ├── hooks/             * Custom hooks folder.
  |       ├── libs/              * Translations folder.
  |       ├── models             * File where global models are stored.
  │       ├── redux/             * Global state management of the application.
  │       ├── mui/               * Mui designs, styles, icons, palettes, etc.
  |             └── theme/       * Global template components/directives/pipes/styles and utilities.
  ├── .eslintrc.cjs              * File specifying ESLint configuration settings for the project.
  ├── .gitignore                 * File specifying Git configuration settings for the project.
  ├── declaration.d.ts           * File specifying TypeScript declaration settings for the project.
  ├── index.html                 * HTML file for the application.
  ├── package.json               * Contains all dependencies used for production and development.
  ├── README.md                  * Readme file.
  ├── tsconfig.json              * TypeScript configuration file for the app.
  ├── tsconfig.node.json         * TypeScript configuration file.
  ├── vite.config.ts             * Configuration file for Vite.
  └── yarn.lock                  * Lockfile for package versions.

`}
      </Box>
    </Box>
  );
}
