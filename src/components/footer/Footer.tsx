import React from "react";
import {
  Container,
  Box,
  Typography,
  Divider,
  TextField,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  ListItem,
  Grid,
  List,
} from "@mui/material";
import Subscribe from "./Subscribe";
import FLinksCol from "./FLinksCol";
import LinkComp from "./LinkComp";
import Sitemap from "./Sitemap";
import Socials from "./Socials";

type Props = {};

function Footer({}: Props) {
  return (
    <Box sx={{ background: "", color: "white", marginTop: "3rem" }}>
      <Subscribe />
      <Sitemap />
    </Box>
  );
}

export default Footer;
