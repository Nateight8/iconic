import React from "react";
import { Stack, Box, Grid, Container } from "@mui/material";

type Props = { children: React.ReactElement<any, any> };

function Layout({ children }: Props) {
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack
          justifyContent="center"
          sx={{
            height: "100vh",
          }}
        >
          <Grid container sx={{ width: "100%" }}>
            <Grid item xs={12} sm={9} md={6}>
              {children}
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default Layout;
