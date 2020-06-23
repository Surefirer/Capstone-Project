import React from "react";
import { Logos } from "../assets";
import { Icons } from "../assets";

function Support() {
  return (
    <div className="support">
      <div className="support__title">
        <h1>Support Portal</h1>
      </div>

      <div className="support-card-wrapper">
        <div className="support-card">
          <div className="support-card__title">
            <h2>Technical Support</h2>
          </div>
          <div className="support-card__cont">
            <img src={Icons.wrench} alt="" />
            <p className="img-ts">
              If heavy lag is an issue, make sure to first check out our Lagging
              Guide and perform all of the steps. Remember also our
              Troubleshooting page on our forum, which list all the most common
              technical problems and solutions. If your issue is not listed
              here, we offer an extended Technical Support section on the forum.
              All these types of errors are typically caused by variables
              outside the game.
            </p>
          </div>
        </div>
        <div className="support-card">
          <div className="support-card__title">
            <h2>Bug Reports</h2>
          </div>
          <div className="support-card__cont">
            <img src={Icons.bug} alt="" />
            <p>
              We fix bugs on regular basis. In order to do this effectively, we
              appreciate having all of these reports in one place. Thus, if you
              have encountered what you believe to be unexpected or unintended
              behaviour in-game, please report it directly in our forum Bug
              Tracker section. Provid as much detail as possible for our
              re-testing purposes.
            </p>
          </div>
        </div>
        <div className="support-card">
          <div className="support-card__title">
            <h2>Support Channels</h2>
          </div>
          <div className="support-card__cont">
            <img src={Icons.chargingStation} alt="" />
            <p>
              The support channels in-game and on fourm exist to help you find
              answers to simple questions that do not requre a GM present. You
              can also join our QQ group chat where we have over 400 players
              communicate everyday, I am sure you can find your answer in the
              group chat. QQ group chat number is 795444556. See you there!
            </p>
          </div>
        </div>
        <div className="support-card">
          <div className="support-card__title">
            <h2>Player Reports</h2>
          </div>
          <div className="support-card__cont">
            <img src={Icons.angry} alt="" />
            <p>
              It is in our interest to keep this server clean, friendly and free
              of bullying. For this to be possible, you will on occasion need to
              help us help you. Never tolerate any behaviour that is in
              violation of our rules. Instead, do your part to report
              misbehaving players in player Reports. This section is private and
              viewable only by you and the staff.
            </p>
          </div>
        </div>
        <div className="support-card">
          <div className="support-card__title">
            <h2>Game Masters</h2>
          </div>
          <div className="support-card__cont">
            <img src={Icons.userCrown} alt="" />
            <p>
              YYRO's international Game Masters strive to be available around
              the clock both in-game and on forum. When online, we primarily
              deal with more serious support cases that do not fall into the
              categories above. Please make use of the other venues provided
              here as much as possible and if you find you still require direct
              support, send one of us a private message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
