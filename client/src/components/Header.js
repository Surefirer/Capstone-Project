import React from "react";
import { Logos } from "./assets";
import Clock from "react-live-clock";
import DrawerToggleButton from "../components/sideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";

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
            <Link to={"/"}>
              <img src={Logos.logo} alt="yyro logo" />
            </Link>
          </div>

          <ul className="nav-bar__menu">
            <Link to="/information">
              <li>Information</li>
            </Link>
            <li>Download</li>
            <li>
              <a href="http://yyragnarok.com/forum.php">Forum</a>
            </li>
            <li>
              Search
              <ul className="nav-bar__subMenu">
                <Link to="/database/item">
                  <li>Item</li>
                </Link>
                <Link to="/database/monster">
                  <li>Monster</li>
                </Link>
              </ul>
            </li>
            <Link to="/staffs">
              <li>Staffs</li>
            </Link>
            <Link to="/support">
              <li>Support</li>
            </Link>
          </ul>
          <div className="nav-bar__clock">
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
