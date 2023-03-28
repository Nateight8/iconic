import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#181819",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "1.25rem",
          fontWeight: 700,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#FD4743",
    },

    secondary: {
      main: "#181819",
    },
  },
});

export default theme;
