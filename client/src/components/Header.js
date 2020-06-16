import React from "react";
import { Logos } from "./assets";
import DrawerToggleButton from "../components/sideDrawer/DrawerToggleButton";
//import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <div className="nav-bar">
        <div>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="nav-bar__logo">
          <img src={Logos.logo} alt="yyro logo" />
        </div>

        <ul className="nav-bar__menu">
          <li>Information</li>
          <li>Download</li>
          <li>Forum</li>
          <li>Database</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
