import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../assets";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show === true) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul className="side-drawer__menu" onClick={props.click}>
        <Link to={"/"}>
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.home}
              alt="questionCircle"
            />
            Home
          </li>
        </Link>
        {/* <Link to="/yypoints">
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.sackDollar}
              alt="questionCircle"
            />
            YY Points
          </li>
        </Link> */}
        <Link to="/information">
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.infoSquare}
              alt="questionCircle"
            />
            Information
          </li>
        </Link>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://yyragnarok.com/forum.php"
        >
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.commentsAlt}
              alt="questionCircle"
            />
            Forum
          </li>
        </a>
        <Link to="/database/item">
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.search}
              alt="questionCircle"
            />
            Search Item
          </li>
        </Link>
        <Link to="/database/monster">
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.search}
              alt="questionCircle"
            />
            Search Monster
          </li>
        </Link>
        <Link to="/staffs">
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.commentAltSmile}
              alt="questionCircle"
            />
            Staffs
          </li>
        </Link>
        <Link to="/support">
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.questionSquare}
              alt="questionCircle"
            />
            Support
          </li>
        </Link>
      </ul>
      <div className="side-drawer__social">
        <div className="side-drawer__socialWrapper1">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCWSJggjVEluC4rS54BbliPQ?view_as=public"
          >
            <img
              className="side-drawer__svg--social"
              src={Icons.youtube}
              alt="youtube"
            ></img>
          </a>
        </div>
        <div className="side-drawer__socialWrapper2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://space.bilibili.com/514479945"
          >
            <img
              className="side-drawer__svg--social"
              src={Icons.bilibiliTv}
              alt="bilibili"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default sideDrawer;
