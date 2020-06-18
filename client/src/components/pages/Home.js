import React from "react";
import Clock from "react-live-clock";
import newsImg from "../../assets/images/news.png";
import { Icons } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({ duration: 2000 });

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

      <div className="server-intro">
        <div className="server-intro__title">
          <h1 data-aos="fade">GENERAL INFORMATION</h1>
        </div>
        <div data-aos="fade" className="server-intro__discription">
          <p>
            YYRO is a Renewal Ragnarok Online private server which recently
            updated to Episode 16.2. Third jobs are fully implemented. We've got
            plenty of official instances availiable, as well as dozens of
            convenient player settings. We're also one of the few servers to
            have one of the best management team.
          </p>
        </div>
      </div>

      <div className="monthly-stat">
        <div className="monthly-stat__title">
          <h1 data-aos="fade">MONTHLY STATISTICS</h1>
        </div>
        <div data-aos="fade-up" className="monthly-stat__card">
          <img src={Icons.trophySolid} alt="" />
          <h1>5,4505</h1>
          <h4>BOSSES KILLED</h4>
        </div>
        <div data-aos="fade-up" className="monthly-stat__card">
          <img src={Icons.userSolid} alt="" />
          <h1>1527</h1>
          <h4>NEW CHARACTERS</h4>
        </div>
        <div data-aos="fade-up" className="monthly-stat__card">
          <img src={Icons.addressCardSolid} alt="" />
          <h1>2931</h1>
          <h4>SIGN-UPS</h4>
        </div>
      </div>

      <div data-aos="fade" className="testimonials">
        <h1 className="testimonials__title">TESTIMONIALS</h1>
        <div className="testimonials__card">
          <div className="testimonials__userName">
            <h3>Serrow</h3>
          </div>
          <div className="testimonials__disc">
            <p>
              Server has a good balance between helpful quality of life and
              classic adventuring elements keeping close to the original. I will
              continue to enjoy playing on this incredible server. 10/10 would
              recommend
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
