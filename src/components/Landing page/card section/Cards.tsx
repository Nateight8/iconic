import React from "react";

import { Typography, Stack, Box, Container } from "@mui/material";
import CardComp from "./CardComp";
import Section from "../sections/Section";

type Props = {};

function Cards({}: Props) {
  const cardData = [
    {
      id: "1",
      src: "url(/images/grow.jpg)",
      heading: "Agriculture",
      bodyCopy: "",
    },
    {
      id: "2",
      src: "url(/images/real.jpg)",
      heading: "Real Estate",
      bodyCopy: "",
    },
    {
      id: "3",
      src: "url(/images/forex.jpg)",
      heading: "Forex",
      bodyCopy: "",
    },
    {
      id: "4",
      src: "url(/images/crypto.jpg)",
      heading: "Crypto",
      bodyCopy: "",
    },
  ];
  return (
    <Container maxWidth="lg">
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          color: "white",
          paddingY: { xs: "3rem", md: "6rem" },
          padding: { md: "2rem" },
        }}
      >
        <Box sx={{ paddingBottom: "1.8rem" }}>
          <Typography
            textAlign="center"
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
              paddingY: "1.25rem",
            }}
          >
            Invest for Long-Term Growth
          </Typography>
          <Typography
            textAlign="center"
            variant="body2"
            maxWidth="52rem"
            sx={{ opacity: 0.75 }}
          >
            Don&apos;t go it alone when it comes to investing. At Iconic Trade,
            our team of experts is here to help you make smart investment
            decisions that lead to long-term growth and financial success.
          </Typography>
        </Box>
        <Box
          sx={{
            minHeight: "60vh",
            width: "100%",
            gap: "1rem",
            display: { xs: "block", md: "flex" },
          }}
        >
          {cardData.map((cardItem, index) => (
            <CardComp key={index} cardItem={cardItem} index={index} />
          ))}
        </Box>
      </Stack>
    </Container>
  );
}

export default Cards;
