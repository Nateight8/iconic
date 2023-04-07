import React, { ReactNode } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Box
      sx={{ width: "100%", background: "", height: "100%", paddingY: "3rem" }}
    >
      <Box maxWidth="30rem" width="100%">
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
