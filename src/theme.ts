import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3daede",
      light: "#67c5ee",
      dark: "#2b8bb0",
    },
    secondary: {
      main: "#a5e393",
      light: "#9fd591",
      dark: "#53774a",
    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#2a2a2a",
      secondary: "#474747",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 700,
      color: "#3daede",
    },
    body1: {
      color: "#2a2a2a",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundColor: "#f4f4f4",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          margin: "4px",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#5bc0de",
          },
        },
        containedSecondary: {
          "&:hover": {
            backgroundColor: "#b7e391",
          },
        },
      },
    },
  },
});

export default theme;