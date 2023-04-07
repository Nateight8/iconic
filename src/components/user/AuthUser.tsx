import React from "react";
import { Typography, Toolbar, Container, Box } from "@mui/material";
import TabComponent from "../tabs/TabComponent";
type Props = {};

function AuthUser({}: Props) {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{ marginTop: { xs: "1rem", md: "4.5rem" }, minHeight: "100svh" }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontWeight: { xs: 500, md: 700 },
          }}
        >
          Main Dashboard
        </Typography>

        <TabComponent />
      </Box>
    </Container>
  );
}

export default AuthUser;
