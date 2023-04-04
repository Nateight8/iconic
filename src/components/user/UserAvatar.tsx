import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import React from "react";
import Typography from "@mui/material/Typography";
import { useSession, signIn, signOut } from "next-auth/react";
type Props = {};

const UserAvatar = (props: Props) => {
  // const { data: session } = useSession(true);

  // console.log(session?.user?.name);

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
        {/* <Stack sx={{ ml: 2 }}>
          <Typography
            variant="body1"
            sx={{
              color: "#737373",
              textTransform: "capitalize",
            }}
          >
            {session?.user?.name}
          </Typography>
        </Stack> */}
      </Stack>
    </>
  );
};

export default UserAvatar;
