import React from "react";
import { Logos } from "../assets";
import { Icons } from "../assets";
//import axios from "axios";

// class Staffs extends Component {
function Staffs(props) {
  return (
    <div className="staffs">
      <div className="staffs__logo">
        <img src={Logos.logo} alt="" />
      </div>
      <div className="staffs__title">
        <h1>Meet the Team</h1>
        <div className="staffs__titleCont">
          <p>
            YYRO wouldn't be the server it is without its staff. We may be from
            different backgrounds and timezones but together we feel it is our
            duty and collective mission to bring you the best Renewal gaming
            experience possible. From administrators to developers to game
            masters, we continue working tirelessly on content, user experience
            and all the other aspects that make up the server. Every one of us
            is here because we genuinely love this game. In addition to the core
            team, we have a small network of people we have the honor to
            collaborate with on regular basis.{" "}
          </p>
        </div>

        <div className="staffs-admin">
          <div className="staffs-admin__title">
            <div className="staffs-admin__titleWrapper">
              <img id="staffs_admin__uvIcon" src={Icons.userVisor} alt="" />
              <h2>Administrators</h2>
            </div>
            <div className="staffs-admin__titleCont">
              <p>
                The administrators are the core members of the staff who are in
                charge of the day-to-day running of, and work in many ways to
                improve YYRO. They are the staff with the highest-level access
                to the server, the website and the forum. However, the ability
                to recover and create items, zeny and monsters is exclusive to
                [GM]00 and [GM]YY.
              </p>
            </div>
          </div>
          <div className="adminCard-wrapper">
            {props.adminList.map((admin) => (
              <div className="staffs-admin__admCard">
                <img src={admin.headShot} alt="" />
                <div className="staffs-admin__title">
                  <h3>{admin.name}</h3>
                  <h4 className="staffs-admin__titleSub">{admin.position}</h4>
                </div>
                <div className="staffs-admin__admIntro">
                  <p>{admin.discription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="staffs-dev">
        <div className="staffs-admin__title">
          <div className="staffs-admin__titleWrapper">
            <img src={Icons.code} alt="" />
            <h2>Developers</h2>
          </div>
          <div className="staffs-admin__titleCont">
            <p>
              The focus of the developers in on implementing official content,
              actualizing custom concepts and fixing bugs. They are the
              heavy-lifters behind transforming ideas from other players and
              staff members into stable and functional content. By and large,
              their work with the game files is done from the background.
            </p>
          </div>
          <div className="staffs-admin__admCard">
            <img src={Logos.gm00} alt="" />
            <div className="staffs-admin__title">
              <h3>[GM]00</h3>
              <h4 className="staffs-admin__titleSub">Lead Developer</h4>
            </div>
            <div className="staffs-admin__admIntro">
              <p>
                Hi! I am a developer in charge of all heavy-duty coding. When
                I'm not microwaving tea of taking care of my two little kids, I
                verify and fix bugs, and test and port content from twRo and
                kRo. When I can, I also spend time in-game, where I like to help
                players.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="staffs-gm">
        <div className="staffs-admin__title">
          <div className="staffs-admin__titleWrapper">
            <img src={Icons.dragon} alt="" />
            <h2>Game Masters</h2>
          </div>
          <div className="staffs-admin__titleCont">
            <p>
              Game Masters (GMs) are the members of staff who are in charge of
              helping players and enforcing the server rules. As GMs are allowed
              to continue playing the game on separate accounts, their power is
              limited to tasks that don't require handling confidential
              information, such as replying to support tickets on the forum,
              providing in-game assistance and answering player's questions. In
              addition, many Game Masters hold events and some also choose to
              help in the development process by testing new features and bugs.
            </p>
          </div>
          <div className="staffs-admin__admCard">
            <img src={Logos.yyrologohuicir} alt="" />
            <div className="staffs-admin__title">
              <h3>[GM]YY</h3>
              <h4 className="staffs-admin__titleSub">Head Game Master</h4>
            </div>
            <div className="staffs-admin__admIntro">
              <p>
                Greetings friends! I've been playing RO for a long time and it
                still is one of my favorite games. I will try my best to help
                everyone who needs help, and making sure everything continue to
                run like a well-oiled machine. So don't be shy, feel free to ask
                me anything or just to day hi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staffs;
