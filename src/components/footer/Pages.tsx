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

type Props = {};

function Pages({}: Props) {
  return (
    <>
      <Box sx={{ width: "100%", paddingBottom: "2rem" }}>
        <FLinksCol header="Navigations">
          <List>
            {["Home", "About", "Log in", "Register", "Career"].map((item) => (
              <ListItem
                key={item}
                disablePadding
                sx={{ paddingBottom: "1rem" }}
              >
                <Link
                  sx={{
                    fontSize: "14px",
                    color: " rgba(255, 255, 255, 0.7)",
                  }}
                  href="/"
                >
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </FLinksCol>
      </Box>
    </>
  );
}

export default Pages;
