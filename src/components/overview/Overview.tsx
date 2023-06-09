import React from "react";
import { Typography, Stack } from "@mui/material";
import UserComponent from "../user/UserAvatar";

type Props = {};

function Overview({}: Props) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ height: "20vh", width: "100%", color: "white" }}
    ></Stack>
  );
}

export default Overview;
