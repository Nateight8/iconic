import React from "react";
import {
  Container,
  Divider,
  Grid,
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
} from "@mui/material";
import FLinksCol from "./FLinksCol";
import LinkComp from "./LinkComp";
import { FacebookOutlined } from "@mui/icons-material";
import Legal from "./Legal";
import Pages from "./Pages";
import Socials from "./Socials";

type Props = {};

function Sitemap({}: Props) {
  return (
    <Box sx={{ background: "#081A53", color: "white", marginBottom: "1px" }}>
      <Container
        maxWidth="lg"
        sx={{
          paddingY: "2rem",
          display: { sm: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Pages />
        <Legal />
        <Socials />
      </Container>
    </Box>
  );
}

export default Sitemap;
