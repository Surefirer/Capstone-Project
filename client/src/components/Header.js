import React from "react";
import { Logos } from "./assets";
import DrawerToggleButton from "../components/sideDrawer/DrawerToggleButton";
//import { NavLink, Link } from "react-router-dom";

// function Header(props) {
class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById("nav");
      if (isTop) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }

  componentWillUnmont() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <>
        <div id="nav" className="nav-bar">
          <div>
            <DrawerToggleButton click={this.props.drawerClickHandler} />
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
}

export default Header;
