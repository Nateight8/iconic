import React from "react";
import {
  Typography,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Divider,
  Grid,
  TextField,
  Button,
  Link,
} from "@mui/material";
import Container from "@mui/material/Container";
import Layout from "@/components/layout/Layout";

type Props = {};

function Home({}: Props) {
  return (
    <Layout>
      <>
        <Box pb={3}>
          <Typography variant="h4" sx={{ color: "white" }}>
            Create an account.
          </Typography>
          <Stack direction="row">
            <Typography variant="body1" sx={{ color: "white" }}>
              Already Have an account?{" "}
            </Typography>
            <Link sx={{ fontWeight: 700, ml: 1 }} href="/signin">
              Log in
            </Link>
          </Stack>
        </Box>
        <Grid container sx={{ background: "" }}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              paddingY: ".5rem",
              paddingRight: { sm: ".5rem", xs: 0 },
            }}
          >
            <TextField
              size="small"
              fullWidth
              label="First Name"
              variant="filled"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              paddingY: "0.5rem",
              paddingLeft: { sm: ".5rem", xs: 0 },
            }}
          >
            <TextField
              size="small"
              fullWidth
              label="Last Name"
              variant="filled"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
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
        </Grid>{" "}
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
        <Button size="large" variant="outlined" fullWidth>
          continue with Google
        </Button>
      </>
    </Layout>
  );
}

export default Home;
