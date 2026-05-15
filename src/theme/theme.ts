import { alpha, createTheme } from "@mui/material/styles";
import { brand } from "./brand";

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: brand.navy,
          light: brand.navyLight,
          dark: brand.navyDark,
          contrastText: "#FFFFFF",
        },
        secondary: {
          main: brand.navyMuted,
          light: brand.navyLight,
          dark: brand.navyDark,
          contrastText: "#FFFFFF",
        },
        background: { default: "#FAFAFA", paper: "#FFFFFF" },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#A8BDD4",
          light: "#C5D8EB",
          dark: brand.navyDark,
          contrastText: "#0A0F14",
        },
        secondary: {
          main: "#8FA3B8",
          light: "#B0C2D4",
          dark: brand.navyMuted,
          contrastText: "#0A0F14",
        },
        background: { default: "#0A0F14", paper: "#121A22" },
        text: {
          primary: "#F0F4F8",
          secondary: "rgba(240, 244, 248, 0.7)",
        },
        divider: "rgba(255, 255, 255, 0.12)",
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 400, letterSpacing: "-0.02em" },
    h2: { fontWeight: 400 },
    h3: { fontWeight: 500 },
    button: { textTransform: "none", fontWeight: 500 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 20, paddingInline: 24 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 16 },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundImage: "none",
        },
        colorDefault: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: ({ theme }) => ({
          "&.MuiChip-outlinedPrimary": {
            borderColor: alpha(theme.palette.primary.main, 0.4),
          },
        }),
      },
    },
  },
});
