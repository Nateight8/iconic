import Footer from "@/components/footer/Footer";
import LandingNav from "@/components/navbar/LandingNav";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import theme from "@/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  const hide = router.pathname === "/signin" || router.pathname === "/register";
  const landingNav = router.pathname === "/";

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* {landingNav ? <LandingNav /> : !hide && <Navbar />} */}
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>{" "}
    </SessionProvider>
  );
}
