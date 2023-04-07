import React from "react";
import { Typography, Stack, Box, Button } from "@mui/material";
import Transactions from "../table/Transactions";
import DrawerComp from "./DrawerComp";

type Props = {};

function Payment({}: Props) {
  const [open, setOpen] = React.useState(false);

  const handler = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ paddingTop: "2rem" }}>
        <Stack
          alignItems="end"
          sx={{ width: "100%", color: "white", marginBottom: "1rem" }}
        >
          <Box>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginRight: "0.5rem" }}
            >
              Withdraw
            </Button>
            <Button onClick={handler} variant="contained" color="primary">
              Deposit
            </Button>
          </Box>
        </Stack>
        <Transactions />
      </Box>
      <DrawerComp open={open} handler={handler} />
    </>
  );
}

export default Payment;
