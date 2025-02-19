import { createTheme } from "@mui/material/styles";
import colors from "./constants/colors";

declare module "@mui/material/styles" {
  interface Palette {
    accent1: Palette["primary"];
    accent2: Palette["primary"];
    accent3: Palette["primary"];
    accent4: Palette["primary"];
    accent5: Palette["primary"];
    accent6: Palette["primary"];
    accent7: Palette["primary"];
    accent8: Palette["primary"];
    accent9: Palette["primary"];
    accent10: Palette["primary"];
    accent11: Palette["primary"];
  }
  interface PaletteOptions {
    accent1?: PaletteOptions["primary"];
    accent2?: PaletteOptions["primary"];
    accent3?: PaletteOptions["primary"];
    accent4?: PaletteOptions["primary"];
    accent5?: PaletteOptions["primary"];
    accent6?: PaletteOptions["primary"];
    accent7?: PaletteOptions["primary"];
    accent8?: PaletteOptions["primary"];
    accent9?: PaletteOptions["primary"];
    accent10?: PaletteOptions["primary"];
    accent11?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
    },
    text: {
      primary: colors.text,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
    accent1: {
      main: colors.accent1,
    },
    accent2: {
      main: colors.accent2,
    },
    accent3: {
      main: colors.accent3,
    },
    accent4: {
      main: colors.accent4,
    },
    accent5: {
      main: colors.accent5,
    },
    accent6: {
      main: colors.accent6,
    },
    accent7: {
      main: colors.accent7,
    },
    accent8: {
      main: colors.accent8,
    },
    accent9: {
      main: colors.accent9,
    },
    accent10: {
      main: colors.accent10,
    },
    accent11: {
      main: colors.accent11,
    },
  },
  // Add other customizations as needed
});

export default theme;
