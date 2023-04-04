import { Box, Typography, Stack } from "@mui/material";
import React from "react";

type Props = {};

function Section({}: Props) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100vh" }}
    >
      <Box sx={{ color: "white" }}>
        <Box sx={{ paddingY: "1rem" }}>
          <Typography variant="body1">
            LET YOUR <span style={{ fontWeight: 700 }}>FUNDS</span>
          </Typography>
          <Typography variant="h4">Work for you</Typography>
        </Box>

        <Typography variant="body2" lineHeight={2} sx={{ opacity: 0.75 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in
          beatae ea laborum voluptatum laudantium inventore nobis temporibus
          placeat ab enim eaque deleniti eius, maxime ipsa eveniet. Commodi,
          animi suscipit! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Obcaecati in beatae ea laborum voluptatum laudantium inventore
          nobis temporibus placeat ab enim eaque deleniti eius, maxime ipsa
          eveniet. Commodi, animi suscipit!
        </Typography>
      </Box>
    </Stack>
  );
}

export default Section;
