import React from "react";
import { Icons } from "./assets";
import { Logos } from "./assets";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer__content">
            <p>YY Ragnarok Online</p>
            <p>©2020 YYRO. All rights reserved. </p>
            <p>
              All trademarks referenced herein are the properties of their
              respective owners
            </p>
          </div>
          <div className="footer-qq">
            <img src={Logos.QQ} alt="" />
          </div>

          <div className="footer__social">
            <a href="https://www.youtube.com/channel/UCWSJggjVEluC4rS54BbliPQ?view_as=public">
              <img src={Icons.youtubeBlack} alt="" />
            </a>
            <a href="https://space.bilibili.com/514479945">
              <img src={Icons.bilibiliTvBlack} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
