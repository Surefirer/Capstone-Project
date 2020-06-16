import React from "react";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show === true) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul className="side-drawer__menu">
        <li>Information</li>
        <li>Forum</li>
        <li>Database</li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
