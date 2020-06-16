import React from "react";
import { Logos } from "./assets";
import { NavLink, Link } from "react-router-dom";

function Header({ currentTab, changeCurrentTab }) {
  return (
    <>
      <div className="nav-bar">
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
