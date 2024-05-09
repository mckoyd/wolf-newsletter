import { Theme, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CommonColors {
    darkNavy: string;
    paleNavy: string;
  }
}

const darkNavy: string = "#242742";
const paleNavy: string = "#36384D";

const theme: Theme = createTheme({
  palette: {
    common: {
      darkNavy,
      paleNavy,
    },
  },
  typography: {
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: "100%",
      color: darkNavy,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "150%",
      color: darkNavy,
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: "150%",
    },
  },

  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: darkNavy,
            fontSize: "0.75rem",
            fontWeight: 700,
            lineHeight: "150%",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(25, 24, 43, 0.25)",
          borderRadius: "0.5rem",
          padding: "0.5rem",
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            border: "none",
          },
        },
        underline: {
          "&:before": {
            border: "none",
          },
          "&:after": {
            border: "none",
          },
        },
      },
    },
  },
});

export default theme;
