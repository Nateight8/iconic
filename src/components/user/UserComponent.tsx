import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import React from "react";
import Typography from "@mui/material/Typography";

type Props = {};

const UserComponent = (props: Props) => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          "&:hover": {
            cursor: "pointer",
            color: "white",
          },
        }}
      >
        <Avatar
          alt="user name"
          src="images/person.png"
          sx={{
            background: "#202022",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        />
        <Stack sx={{ ml: 2 }}>
          <Typography
            variant="body1"
            sx={{
              color: "#737373",
            }}
          >
            Wade Warren
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", color: "#737373" }}
          >
            Bal: N27.5k
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default UserComponent;
