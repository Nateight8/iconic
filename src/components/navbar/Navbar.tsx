import React from "react";
import Navlinks from "./Navlinks";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Typography, Button, IconButton, List } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import UserComponent from "../user/UserAvatar";
import {
  PersonOutlined,
  SettingsOutlined,
  HelpOutline,
  LoginOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import UserAvatar from "../user/UserAvatar";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

type Props = {};

function Navbar({}: Props) {
  const drawerWidth = "90%";
  const [open, setopen] = React.useState(false);
  const path = usePathname();
  const { data: session } = useSession();

  console.log(session);

  const navigations = [
    {
      url: "/",
      navlink: "Home",
    },

    {
      url: "/settings",
      navlink: "Settings",
    },
  ];

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
              {navigations.map((item) => {
                const { navlink, url } = item;
                return <Navlinks navlink={navlink} url={url} key={navlink} />;
              })}

              {session ? (
                <Button
                  onClick={() => {
                    signOut();
                  }}
                  variant="text"
                  sx={{ color: "white", textTransform: "capitalize" }}
                >
                  Log out
                </Button>
              ) : (
                <Navlinks navlink="Log in" url="/sign-in" />
              )}
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
        <Toolbar />

        <List>
          <MobileNav url="/" navlink="Home" icon={<HomeOutlined />} />
          <MobileNav
            navlink="Profile"
            url="/profile"
            icon={<PersonOutlined />}
          />
          <MobileNav
            navlink="Settings"
            url="/settings"
            icon={<SettingsOutlined />}
          />

          <MobileNav navlink="Help" url="/help" icon={<HelpOutline />} />
          <MobileNav
            navlink="Log out"
            url="/log-out"
            icon={<LoginOutlined />}
          />
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
