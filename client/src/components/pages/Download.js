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
            Make surethat you run the patcher after you finishing your
            installation
          </p>
        </div>
      </div>

      <div className="download-clientWrapper">
        <a href="https://share.weiyun.com/5BsSGXT" target="_blank">
          <div className="download__clientCard download-red">
            <img src={Icons.qqBrands} alt="" />
            <h3>QQ</h3>
          </div>
        </a>
        <a
          href="http://www.mediafire.com/file/04d51uv7t5u7lfc/YYRO_2.0_FullClient_20200109.exe/file"
          target="_blank"
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
