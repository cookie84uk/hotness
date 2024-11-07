import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    customColors: {
      dark: string;
      light: string;
      main: string;
      tableBackground: string;
      modeColor: string;
      light: string;
      wbColor: string;
      ldColor: string;
      gradient: any;
      twitter: string;
      facebook: string;
      telegram: string;
      linkedin: string;
      backgroundForm: string;
      backgroundFormHeader: string;
      textShadow: "string";
    };
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string;
      main?: string;
      light?: string;
      tableBackground?: string;
    };
  }
}

export {};
