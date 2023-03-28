import React from "react";
import Navlinks from "./Navlinks";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";

type Props = {};

function Navbar({}: Props) {
  const drawerWidth = "90%";
  const [open, setopen] = React.useState(false);
  return (
    <>
      <AppBar position="fixed" color="secondary" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="body1" sx={{ color: "#737373" }}>
              ICONICTRADE
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Navlinks navlink="Home" url="/" />
              <Navlinks navlink="Settings" url="/settings" />
              <Navlinks navlink="Help" url="/help" />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Navlinks navlink="Profile" url="/profile" />
              <Navlinks navlink="Log out" url="/log-out" />
            </Box>
            <Button
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => setopen(true)}
            >
              menu
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Drawer
        onClick={() => setopen(false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#202022",
          },
        }}
        anchor="left"
        open={open}
      >
        <Navlinks navlink="Home" url="/" />
        <Navlinks navlink="Settings" url="/settings" />
        <Navlinks navlink="Help" url="/help" />
        <Navlinks navlink="Profile" url="/profile" />
        <Navlinks navlink="Log out" url="/log-out" />
      </Drawer>
    </>
  );
}

export default Navbar;
