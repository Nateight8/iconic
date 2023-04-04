import { Typography, Box } from "@mui/material";
import React from "react";

type Props = { header: string; children: React.ReactElement<any, any> };

function FLinksCol({ header, children }: Props) {
  return (
    <>
      <Box sx={{ paddingY: "0.5rem" }}>
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{ fontSize: "1.125rem" }}
        >
          {header}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </>
  );
}

export default FLinksCol;
