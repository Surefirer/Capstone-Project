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
        <h1>Download YYRO</h1>
        <div className="download__titleCont">
          <p>The YYRO client is all you need to begin your adventure! </p>
          <p>
            Make sure that you run the patcher after you finishing your
            installation.
          </p>
        </div>
      </div>

      <div className="download-clientWrapper">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://share.weiyun.com/5BsSGXT"
        >
          <div className="download__clientCard download-red">
            <img src={Icons.qqBrands} alt="" />
            <h3>QQ</h3>
          </div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://www.mediafire.com/file/04d51uv7t5u7lfc/YYRO_2.0_FullClient_20200109.exe/file"
        >
          <div className="download__clientCard download-blue">
            <img src={Icons.mediaFire} alt="" />
            <h3>MEDIAFIRE</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Download;
