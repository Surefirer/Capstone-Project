import React from "react";
import Clock from "react-live-clock";
import { Link } from "react-router-dom";
import { Icons } from "../assets";
import AOS from "aos";
import TestimonialsCard from "../testimonialsCard/TestimonialsCard";
import PatchNews from "../patchNews/PatchNews";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({ duration: 2000 });

function Home(props) {
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
          <p>
            <Link to="/download">
              <span className="yellow">Download it today!</span>
            </Link>
          </p>
        </div>
      </div>

      <div className="news">
        <div className="news__title">
          <h1>LATEST NEWS</h1>
        </div>
        <PatchNews {...props} />
      </div>

      <div className="tabletWrapper-body">
        <div className="server-intro">
          <div className="server-intro__title">
            <h1 data-aos="fade">GENERAL INFORMATION</h1>
          </div>
          <div data-aos="fade" className="server-intro__discription">
            <p>
              YYRO is a Renewal Ragnarok Online private server which recently
              updated to Episode 16.2. Third jobs are fully implemented. We've
              got plenty of official instances availiable, as well as dozens of
              convenient player settings. We're also one of the few servers to
              have one of the best management team.
            </p>
          </div>
        </div>

        <div className="monthly-stat">
          <div className="monthly-stat__title">
            <h1 data-aos="fade">MONTHLY STATISTICS</h1>
          </div>
          <div className="monthly-stat__cardWrapper">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="monthly-stat__card"
            >
              <img src={Icons.trophySolid} alt="" />
              <h1>5,4505</h1>
              <h4>BOSSES KILLED</h4>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="monthly-stat__card"
            >
              <img src={Icons.userSolid} alt="" />
              <h1>1527</h1>
              <h4>NEW CHARACTERS</h4>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="monthly-stat__card"
            >
              <img src={Icons.addressCardSolid} alt="" />
              <h1>2931</h1>
              <h4>SIGN-UPS</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="TestimonialsCardWrapper">
        <TestimonialsCard {...props} />
      </div>
    </div>
  );
}

export default Home;
