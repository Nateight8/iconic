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
          backgroundColor: "#181818",
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
            border: "1px solid rgba(255, 255, 255, 0.6)",
            color: "rgba(255, 255, 255, 0.6)",

            textTransform: "capitalize",
            fontWeight: 300,

            // background: "#202022",
            transition: "1s ease-in",
            "&:hover": {
              border: "1px solid rgba(255, 255, 255, 1)",
              transition: "1s ease-out",
              color: "rgba(255, 255, 255, 0.9)",
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            color: "#FFFFFF",
            // marginInline: "0.5rem",
            textTransform: "capitalize",
            fontWeight: 400,
            // borderRadius: "0.5rem",
            background: "rgb(253,71,67)",
            transition: "1s ease-in",
            "&:hover": {
              background: "#FC5451",
              transition: "1s ease-out",
            },
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
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          background: "#202022",
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "filled" },
          style: {
            borderRadius: "0.25rem",
            border: "1px solid rgba(255, 255, 255, 0.)",

            "& .MuiInputBase-input": { color: "white" },
            "& .MuiFormLabel-root": {
              color: "#81828C",
            },
          },
        },
      ],
    },
  },

  palette: {
    primary: {
      main: "#81828C",
    },

    secondary: {
      main: "#181819",
    },
  },
});

export default theme;
