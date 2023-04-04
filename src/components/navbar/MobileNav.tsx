import { Link, ListItem, ListItemIcon } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = { navlink: string; url: string; icon: ReactNode };

function MobileNav({ navlink, url, icon }: Props) {
  const path = usePathname();
  const linkStyle = {
    padding: "10px 16px",
    color: "white",
    textTransform: "capitalize",
    textDecoration: "none",
    //   "&:hover": {}
  };
  return (
    <div>
      <ListItem sx={{ "& .css-cveggr-MuiListItemIcon-root": { minWidth: 0 } }}>
        <ListItemIcon
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
          {icon}
        </ListItemIcon>
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
      </ListItem>
    </div>
  );
}

export default MobileNav;
