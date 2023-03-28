import React from "react";
import { Link } from "@mui/material";
// import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  navlink: string;
  url: string;
};

function Navlinks({ navlink, url }: Props) {
  const path = usePathname();
  const linkStyle = {
    padding: "10px 16px",
    color: "white",
    textTransform: "capitalize",
    textDecoration: "none",
    //   "&:hover": {}
  };
  return (
    <Link
      href={url}
      //   underline="none"
      sx={
        url === path
          ? {
              ...linkStyle,
              color: "#FD4743",
              fontWeight: 700,
            }
          : {
              ...linkStyle,
            }
      }
    >
      {navlink}
    </Link>
  );
}

export default Navlinks;
