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
  Stack,
  Grid,
  InputBase,
} from "@mui/material";

type Props = {};

function Subscribe({}: Props) {
  return (
    <Box sx={{ background: "#081A53", color: "white", marginBottom: "1px" }}>
      <Container maxWidth="lg" sx={{ paddingY: "2rem" }}>
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { sm: "center" },
          }}
        >
          <Box sx={{ padding: "0.5rem 1rem 0.5rem 0", flex: { xs: 1, md: 2 } }}>
            <Typography pb={2} variant="body2" sx={{ opacity: 0.65 }}>
              NEWSLETTER
            </Typography>
            <Typography variant="h6">GET INSIGHTS BEHIND THE SCENES</Typography>
          </Box>
          <Stack direction="row" sx={{ flex: 1 }}>
            <FormControl
              fullWidth
              sx={{
                // background: "#333645",
                borderRadius: "0.25rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                marginRight: "0.75rem",

                "& .MuiInputBase-input": { color: "white" },
                "& .MuiFormLabel-root": {
                  color: "#81828C",
                },
              }}
            >
              <InputBase
                fullWidth
                placeholder="E-mail"
                sx={{
                  color: "white",
                  paddingLeft: "0.5rem ",
                  paddingY: ".5rem",
                }}
              />
            </FormControl>
            <Button variant="contained" sx={{ paddingX: "1rem" }}>
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Subscribe;
