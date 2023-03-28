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

    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            border: "1px solid #C4C4C4",
            color: "#FFFFFF",
            marginInline: "0.5rem",
            textTransform: "capitalize",
            fontWeight: 300,
            borderRadius: "0.5rem",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            color: "#FFFFFF",
            marginInline: "0.5rem",
            textTransform: "capitalize",
            fontWeight: 400,
            borderRadius: "0.5rem",
          },
        },
      ],
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
