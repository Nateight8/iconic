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

function Legal({}: Props) {
  return (
    <>
      <Box sx={{ width: "100%", paddingBottom: "2rem" }}>
        <FLinksCol header="Legal">
          <List>
            {["FAQs", "Privacy Policy", "Terms & Conditions"].map((item) => (
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

export default Legal;
