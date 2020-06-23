import React from "react";
import { Logos } from "../assets";
import { Icons } from "../assets";

function Download() {
  return (
    <div className="download">
      <div className="download__logo">
        <img src={Logos.logo} alt="" />
      </div>
      <div className="download__title">
        <h1>Server Information</h1>
        <div className="download__titleCont">
          <p>
            The YYRO client is all you need to begin your adventure! Make sure
            that you run the patcher after you finishing your installation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Download;
