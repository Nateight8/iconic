import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

type Props = {};

function Counter({}: Props) {
  const listStyle = {
    display: "flex",
    "& .MuiListItemText-primary": {
      color: "white",
      fontSize: "1.75rem",
      fontWeight: 700,
      textAlign: "center",
    },
    "& .MuiListItemText-secondary": {
      color: "#BCBCBD",
      fontSize: "1rem",
      fontWeight: 300,
      textAlign: "center",
    },
    "& .MuiListItem-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "Center",
    },
  };

  const [remainingTime, setRemainingTime] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const targetDate = new Date("2023-04-01T00:00:00.000Z");

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setRemainingTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{ paddingTop: "2rem" }}>
      <Stack
        justifyContent="center"
        sx={{
          background: "#202022",
          width: "100%",
          minHeight: "14rem",
          padding: { sm: "1.5rem 3rem " },
          borderRadius: "0.5rem",
          border: "1px solid rgba(255, 255, 255, 0.04)",
        }}
      >
        <Box px={2}>
          <Typography
            variant="body1"
            sx={{ color: "#BCBCBD", textAlign: "Center", p: 2.5 }}
          >
            Your next return on investment drops in:
          </Typography>
        </Box>

        <List sx={listStyle}>
          <ListItem>
            <ListItemText primary={remainingTime.days} secondary="Days" />
          </ListItem>
          <ListItem>
            <ListItemText primary={remainingTime.hours} secondary="Hours" />
          </ListItem>
          <ListItem>
            <ListItemText primary={remainingTime.minutes} secondary="Minutes" />
          </ListItem>
          <ListItem>
            <ListItemText primary={remainingTime.seconds} secondary="Seconds" />
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
}

export default Counter;
