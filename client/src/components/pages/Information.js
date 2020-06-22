import React from "react";
import { Logos } from "../assets";
import { Icons } from "../assets";

function Information() {
  return (
    <div className="information">
      <div className="information__logo">
        <img src={Logos.logo} alt="" />
      </div>
      <div className="information__title">
        <h1>Server Information</h1>
        <div className="information__titleCont">
          <p>
            YYRO is a free-to-play Ragnarok Online private server that seeks out
            to bring you the best and most fun Renewal experience possible.With
            us you can enjoy a multitude of official instances, fully
            implemented 3rd jobs, functioning Achievement and Title System, and
            much more. We work hard on our updates and take pride in being able
            to offer something for everyone. So hop online and begin forging
            your own unforgettable adventure! If you are new to the game, you
            can read our Getting Started guide for more information in the
            forum.
          </p>
        </div>
      </div>

      <div className="serverInfoTab-container">
        <table className="genInfo-table">
          <caption>server Information</caption>
          <tbody>
            <tr>
              <td>Episode</td>
              <td>16.2 Renewal</td>
            </tr>
            <tr>
              <td>Max Level</td>
              <td>200/70</td>
            </tr>
            <tr>
              <td>Max Stats</td>
              <td>130(3rd job)</td>
            </tr>
            <tr>
              <td>Max ASPD</td>
              <td>193</td>
            </tr>
            <tr>
              <td>Open Since</td>
              <td>Octorber, 2018</td>
            </tr>
            <tr>
              <td>Part Share</td>
              <td>50 Levels</td>
            </tr>
          </tbody>
        </table>

        <table className="genInfo-table">
          <caption>Exp and Drop Rates</caption>
          <tbody>
            <tr>
              <td>Base & Job</td>
              <td>30x</td>
            </tr>
            <tr>
              <td>Quest EXP</td>
              <td>30x</td>
            </tr>
            <tr>
              <td>Item Drop</td>
              <td>50x</td>
            </tr>
            <tr>
              <td>Card Drop</td>
              <td>50</td>
            </tr>
            <tr>
              <td>MVP Card Drop</td>
              <td>5x</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="custom-feature">
        <div className="custom-feature__title">
          <img id="staffs_admin__uvIcon" src={Icons.starShooting} alt="" />
          <h2>Customer Feature</h2>
        </div>
        <div className="custom-feature__titleCont">
          <p>
            Our custom features are designed for maximum engagement while
            providing you with the top-tier official content. To this effort, we
            have removed the Renewal drop penalty and increased the party share
            limit so you can play with more friends while obtaining full loot.
          </p>
          <p>
            We have also worked tirelessly to keep RO fresh by developing
            authentic experiences, which include our famed seasonal events.
            Below are a few exerpts of what we have on offer. If you would like
            to learn more about our customizations, including the player
            commands we provide, all of the other nitty-gritty details can be
            found on our fourm.
          </p>
        </div>

        <table className="custom-feature__table">
          <tr>
            <td>New Beginner Tutorial</td>
            <td>Main Office</td>
          </tr>
          <tr>
            <td>Automated Events</td>
            <td>Vending Map</td>
          </tr>
          <tr>
            <td>Quest Boards up to 175</td>
            <td>Achievements and Titles</td>
          </tr>
          <tr>
            <td>Renewal Drop penalty removed</td>
            <td>LGP</td>
          </tr>
        </table>

        <div className="events">
          <div className="events__title">
            <img id="staffs_admin__uvIcon" src={Icons.dice} alt="" />
            <h2>Events</h2>
          </div>
          <div className="events__titleCont">
            <p>
              With many events, there is always something to do! Our automated
              events activate several times a day. When it is time for such an
              event to begin, it is broadcast in-game, after which a glowing NPC
              makes an appearance in Prontera. You have a couple of minutes to
              talk to this NPC to join before the entrance is closed. Winners
              are rewarded with YY Gold Coins.
            </p>
          </div>
        </div>

        <div className="pvp">
          <div className="pvp__title">
            <img src={Icons.shieldAlt} alt="" />
            <h2>PvP and PvM</h2>
          </div>
          <div className="pvp__titleCont">
            <p>
              While our official language remains Chinese, we are a truly
              international server with players from all corners of the world.
              This means that there will always be many players online
              regardless of your timezone.
            </p>
            <p>
              For PvP oriented players we have Battlegrounds, If instead of
              fighting other players you would rather team up to take on
              different bosses, don't hesistate to try our Boss Nest instances.
              These are challenging end-game PvM experiences for small parties.
            </p>
          </div>

          <table className="pvp__table">
            <caption>WoE times(server Time)</caption>
            <tr>
              <td className="pvp__table--center">WoE: Friday at 10:00PM</td>
            </tr>
          </table>
        </div>

        <div className="dressUp">
          <div className="dressUp__title">
            <img src={Icons.crown} alt="" />
            <h2>Dress Up!</h2>
          </div>
          <div className="dressUp__titleCont">
            <p>
              If character customization is closer to your heart, we have a
              great number of headgears and quests for fashionistas both big and
              small. This means you can wear another hat underneath which
              looking as stylish as ever! Come find your favorite so you can
              slay monsters and make new friends while looking fabulous!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
