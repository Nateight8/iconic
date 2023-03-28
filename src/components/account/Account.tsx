import React from "react";
import { Typography, Stack } from "@mui/material";

type Props = {};

function Account({}: Props) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ height: "20vh", width: "100%", color: "white" }}
    >
      <Typography variant="body1">Account</Typography>
    </Stack>
  );
}

export default Account;
