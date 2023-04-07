import React from "react";
import { Drawer, Box, Button, Container } from "@mui/material";
import DepositTabs from "./DepositTabs";

type Props = {
  open: boolean;
  handler: () => void;
};

function DrawerComp({ open, handler }: Props) {
  return (
    <div>
      <Drawer variant="temporary" anchor="bottom" open={open} onClose={handler}>
        <Box sx={{ height: "70vh", width: "100%", background: "" }}>
          <Container
            maxWidth="lg"
            sx={{ padding: "1rem", color: "whitesmoke" }}
          >
            <DepositTabs />
          </Container>
        </Box>
      </Drawer>
    </div>
  );
}

export default DrawerComp;
