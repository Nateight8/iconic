import React from "react";
import { Typography, Stack, Box } from "@mui/material";

type Props = {};

function Hero({}: Props) {
  return (
    <>
      <Box sx={{ marginY: "6rem" }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            color: "white",
            height: "45vh",
            background: "",
            // marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          <Typography
            textAlign="center"
            variant="h1"
            sx={{
              color: "white",
              fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
              fontWeight: 100,
              paddingBottom: { md: "1.65rem" },
            }}
          >
            The Key to Your Financial Future
          </Typography>
          <Typography
            textAlign="center"
            variant="body2"
            maxWidth="52rem"
            sx={{ paddingY: "1rem", opacity: 0.75 }}
          >
            Subtitle reinforces the message that investment is the key to
            achieving long-term financial success, and highlights Iconic
            Trade&apos;s focus on diversified investment opportunities
            highlights Iconic Trade&apos;s
          </Typography>
        </Stack>
        <Box
          sx={{
            color: "white",
            height: { xs: "40vh", md: "60vh" },
            width: "100%",
            position: "relative",
          }}
        >
          <video
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src="/background.mp4"
            autoPlay={true}
            muted
            loop
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(50% 54.61% at 50% 50%, rgba(24, 24, 24, 0.38) 0%, #181818 100%)",
            }}
          />
        </Box>

        <Typography
          textAlign="center"
          variant="subtitle1"
          sx={{ color: "white", marginTop: "3.5rem", paddingBottom: "3.5rem" }}
        >
          empowering the next generation of wealth builders
        </Typography>
      </Box>
    </>
  );
}

export default Hero;
