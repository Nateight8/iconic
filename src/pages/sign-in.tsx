import React from "react";
import {
  Typography,
  Stack,
  Box,
  Divider,
  Grid,
  TextField,
  Button,
  Link,
} from "@mui/material";
import Layout from "@/components/layout/Layout";
import { signIn } from "next-auth/react";

type Props = {};

function Home({}: Props) {
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Layout>
      <>
        <Box pb={3}>
          <Typography variant="h4" sx={{ color: "white" }}>
            Welcome back
          </Typography>
          <Stack direction="row">
            <Typography variant="body1" sx={{ color: "white" }}>
              Opss...you dont have an account?
            </Typography>{" "}
            <Link sx={{ fontWeight: 700, ml: 1 }} href="/register">
              Sing up
            </Link>
          </Stack>
        </Box>
        <Grid container sx={{ background: "" }}>
          <Grid item xs={12} sx={{ paddingY: "0.5rem" }}>
            <TextField
              size="small"
              fullWidth
              label="Email address"
              variant="filled"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>{" "}
          <Grid item xs={12} sx={{ paddingY: "0.5rem" }}>
            <TextField
              size="small"
              fullWidth
              label="Password"
              variant="filled"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ paddingY: "0.5rem" }}>
            <Button size="large" fullWidth variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
        <Divider
          sx={{
            color: "white",
            paddingY: "1rem",
            "&::before, &::after": {
              borderColor: "rgba(255, 255, 255, 0.15)",
            },
          }}
        >
          OR
        </Divider>
        <Button
          size="large"
          variant="outlined"
          fullWidth
          onClick={handleGoogleSignin}
        >
          Sign in with Google
        </Button>
      </>
    </Layout>
  );
}

export default Home;
