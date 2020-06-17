import React from "react";
import Clock from "react-live-clock";
import newsImg from "../../assets/images/news.png";

function Home() {
  return (
    <div className="main">
      <div className="main__hero">
        <div className="main__time">
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
        </div>
        <div className="main__intro">
          <p>
            YYRO is a Renewal RO private server dedicated to bring players
            together in an active, friendly community.
          </p>
          <p> Download it today!</p>
        </div>
      </div>
      <a href="http://yyragnarok.com/forum.php?mod=viewthread&tid=459&extra=page%3D1">
        <div className="news">
          <div className="news__title">
            <h1>LATEST NEWS</h1>
          </div>
          <div className="news__cover">
            <img src={newsImg} alt="" />
          </div>
          <div className="news__sub">
            <h2>Jun 7,2020</h2>
            <h3 className="news__pn">Patch Notes</h3>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Home;
