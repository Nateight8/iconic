import React from "react";
import { Link, ListItem } from "@mui/material";

type Props = { link: string; url: string };

function LinkComp({ link, url }: Props) {
  return (
    <ListItem sx={{ papddingY: "0.25rem", paddingX: 0 }}>
      <Link href={url} sx={{ color: "white", fontSize: "14px", opacity: 0.65 }}>
        {link}
      </Link>
    </ListItem>
  );
}

export default LinkComp;
