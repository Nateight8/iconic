import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import theme from "@/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
