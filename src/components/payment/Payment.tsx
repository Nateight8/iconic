import React from "react";
import { Typography, Stack } from "@mui/material";

type Props = {};

function Payment({}: Props) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ height: "20vh", width: "100%", color: "white" }}
    >
      <Typography variant="body1">Payment</Typography>
    </Stack>
  );
}

export default Payment;
