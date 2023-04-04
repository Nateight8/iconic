import React from "react";
import Navlinks from "./Navlinks";

type Props = {};

function LandingNav({}: Props) {
  return (
    <div>
      <Navlinks navlink="Log in" url="signin" />
      <Navlinks navlink="Sign up" url="register" />
    </div>
  );
}

export default LandingNav;
