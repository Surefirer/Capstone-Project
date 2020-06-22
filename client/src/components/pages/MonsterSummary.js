import React, { Component } from "react";
import axios from "axios";
import { Icons } from "../assets";
import { Link } from "react-router-dom";

// function Database() {
class MonsterSummary extends Component {
  state = {
    mobs: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/monster/${id}?apiKey=02c7580d618374dbc3f1a593291d5394`
      )
      .then(
        (response) => {
          console.log(response);
          this.setState({ mobs: response.data });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    if (this.state.mobs.stats === undefined) {
      return <p>Loading data...</p>;
    }
    return (
      <div className="database">
        <div className="database__title">
          <Link to={`/database/monster`}>
            <img src={Icons.chevronDoubleLeft} alt="" />
          </Link>
          <h1>Monster Info</h1>
        </div>

        <div className="searchMonster-result">
          <table className="searchMonster-result__genInfo">
            <caption>General Information</caption>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.mobs.name}</td>
              </tr>
              <tr>
                <td>ID</td>
                <td> {this.state.mobs.id}</td>
              </tr>
              <tr>
                <td>Level</td>
                <td>{this.state.mobs.stats.level}</td>
              </tr>
              <tr>
                <td>HP</td>
                <td>{this.state.mobs.stats.health}</td>
              </tr>
            </tbody>
          </table>

          <table className="searchMonster-result__property">
            <caption>Element</caption>
            <tbody>
              <tr>
                <td>Neutral</td>
                <td>{this.state.mobs.propertyTable[0]}%</td>
              </tr>
              <tr>
                <td>Water</td>
                <td>{this.state.mobs.propertyTable[1]}%</td>
              </tr>
              <tr>
                <td>Earth</td>
                <td>{this.state.mobs.propertyTable[2]}%</td>
              </tr>
              <tr>
                <td>Fire</td>
                <td>{this.state.mobs.propertyTable[3]}%</td>
              </tr>
              <tr>
                <td>Wind</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[4]}
                  %
                </td>
              </tr>
              <tr>
                <td>Poison</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[5]}
                  %
                </td>
              </tr>
              <tr>
                <td>Holy</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[6]}
                  %
                </td>
              </tr>
              <tr>
                <td>Dark</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[7]}
                  %
                </td>
              </tr>
              <tr>
                <td>Ghost</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[8]}
                  %
                </td>
              </tr>
              <tr>
                <td>Undead</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[9]}
                  %
                </td>
              </tr>
            </tbody>
          </table>

          <table className="searchMonster-result__stats">
            <caption>Stats</caption>
            <tbody>
              <tr>
                <td>Base Experience</td>
                <td>{this.state.mobs.stats.baseExperience}</td>
              </tr>
              <tr>
                <td>Job Experience</td>
                <td>{this.state.mobs.stats.jobExperience}</td>
              </tr>
              <tr>
                <td>STR</td>
                <td>{this.state.mobs.stats.str}</td>
              </tr>
              <tr>
                <td>AGI</td>
                <td>{this.state.mobs.stats.agi}</td>
              </tr>
              <tr>
                <td>VIT</td>
                <td>{this.state.mobs.stats.vit}</td>
              </tr>
              <tr>
                <td>DEX</td>
                <td>{this.state.mobs.stats.dex}</td>
              </tr>
              <tr>
                <td>INT</td>
                <td>{this.state.mobs.stats.int}</td>
              </tr>
              <tr>
                <td>LUK</td>
                <td>{this.state.mobs.stats.luk}</td>
              </tr>
              <tr>
                <td>Attact (min)</td>
                <td>{this.state.mobs.stats.attack.minimum}</td>
              </tr>
              <tr>
                <td>Attack (max)</td>
                <td>{this.state.mobs.stats.attack.maximum}</td>
              </tr>
              <tr>
                <td>Magic Attack (min)</td>
                <td>{this.state.mobs.stats.magicAttack.minimum}</td>
              </tr>
              <tr>
                <td>Magic Attack (max)</td>
                <td>{this.state.mobs.stats.magicAttack.maximum}</td>
              </tr>
              <tr>
                <td>Def</td>
                <td>{this.state.mobs.stats.defense}</td>
              </tr>
              <tr>
                <td>Magic Def</td>
                <td>{this.state.mobs.stats.magicDefense}</td>
              </tr>
              <tr>
                <td>Hit</td>
                <td>{this.state.mobs.stats.hit}</td>
              </tr>
            </tbody>
          </table>

          <table className="searchMonster-result__drops">
            <caption>Drops</caption>
            <thead>
              <tr>
                <th>ID</th>
                <th>Chance</th>
                <th>Server Type</th>
                <th>Steal Protected</th>
              </tr>
            </thead>
            {this.state.mobs.drops.map((drop, index) => (
              <tbody key={index}>
                <tr>
                  <td>{this.state.mobs.drops[index].itemId}</td>
                  <td>{this.state.mobs.drops[index].chance}</td>
                  <td>{this.state.mobs.drops[index].serverTypeName}</td>
                  {this.state.mobs.drops[index].stealProtected === true ? (
                    <td>是</td>
                  ) : (
                    <td>否</td>
                  )}
                </tr>
              </tbody>
            ))}
          </table>

          <table className="searchMonster-result__spawn">
            <caption>Spawn</caption>
            <thead>
              <tr>
                <th>Map Name</th>
                <th>Amount</th>
                <th>Respawn Time</th>
              </tr>
            </thead>
            {this.state.mobs.spawn.map((drop, index) => (
              <tbody key={index}>
                <tr>
                  <td>{this.state.mobs.spawn[index].mapname}</td>
                  <td>{this.state.mobs.spawn[index].amount}</td>
                  <td>{this.state.mobs.spawn[index].respawnTime}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default MonsterSummary;
