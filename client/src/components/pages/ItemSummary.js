import React, { Component } from "react";
import axios from "axios";
import { Icons } from "../assets";
import { Link } from "react-router-dom";

class ItemSummary extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/item/${id}?apiKey=02c7580d618374dbc3f1a593291d5394&server=cRO`
      )
      .then(
        (response) => {
          console.log(response);
          this.setState({
            items: response.data,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    if (this.state.items.itemSummonInfoContainedIn === undefined) {
      return <p>Loading data...</p>;
    }
    return (
      <div className="database">
        <div className="database__title">
          <Link to={`/database/item`}>
            <img src={Icons.chevronDoubleLeft} alt="" />
          </Link>
          <h1>Search Result</h1>
        </div>

        <div className="searchItem-result">
          <table className="searchItem-result__genInfo">
            <tbody>
              <tr>
                <td>Id</td>
                <td>{this.state.items.id}</td>
              </tr>

              <tr>
                <td>Name</td>
                <td>{this.state.items.name}</td>
              </tr>
              <tr>
                <td>NPC Sell Price</td>
                <td>{this.state.items.weight}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{this.state.items.itemTypeId}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td> {this.state.items.weight}</td>
              </tr>
              <tr>
                <td>Indestructible</td>
                <td> {this.state.items.indestructible}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td> {this.state.items.location}</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td> {this.state.items.attack}</td>
              </tr>
              <tr>
                <td>Matk</td>
                <td> {this.state.items.matk}</td>
              </tr>
              <tr>
                <td>Refinable</td>
                <td> {this.state.items.refinable}</td>
              </tr>
              <tr>
                <td>Required Level</td>
                <td> {this.state.items.requiredLevel}</td>
              </tr>
              <tr>
                <td>Slots</td>
                <td> {this.state.items.slots}</td>
              </tr>
              <tr>
                <td>Weapon Level</td>
                <td> {this.state.items.weaponLevel}</td>
              </tr>
              <tr>
                <td>Attribute</td>
                <td> {this.state.items.attribute}</td>
              </tr>
            </tbody>
          </table>

          <table className="searchItem-result__itemMoveinfo">
            <caption>Item Move Info</caption>
            <tbody>
              <tr>
                <td>Can be dropped by player</td>
                {this.state.items.itemMoveInfo.drop === true ? (
                  <td>
                    <img src={Icons.checkGreen} alt="" />
                  </td>
                ) : (
                  <td>
                    {" "}
                    <img src={Icons.timesRed} alt="" />
                  </td>
                )}
              </tr>
              <tr>
                <td>Can be traded to another player</td>
                {this.state.items.itemMoveInfo.trade === true ? (
                  <td>
                    <img src={Icons.checkGreen} alt="" />
                  </td>
                ) : (
                  <td>
                    {" "}
                    <img src={Icons.timesRed} alt="" />
                  </td>
                )}
              </tr>
              <tr>
                <td>Can be placed in storage</td>
                {this.state.items.itemMoveInfo.store === true ? (
                  <td>
                    <img src={Icons.checkGreen} alt="" />
                  </td>
                ) : (
                  <td>
                    {" "}
                    <img src={Icons.timesRed} alt="" />
                  </td>
                )}
              </tr>
              <tr>
                <td>Can be placed in cart</td>
                {this.state.items.itemMoveInfo.cart === true ? (
                  <td>
                    <img src={Icons.checkGreen} alt="" />
                  </td>
                ) : (
                  <td>
                    {" "}
                    <img src={Icons.timesRed} alt="" />
                  </td>
                )}
              </tr>
              <tr>
                <td>Can be sold to NPC</td>
                {this.state.items.itemMoveInfo.sell === true ? (
                  <td>
                    <img src={Icons.checkGreen} alt="" />
                  </td>
                ) : (
                  <td>
                    {" "}
                    <img src={Icons.timesRed} alt="" />
                  </td>
                )}
              </tr>
              <tr>
                <td>Can be send via mail</td>
                {this.state.items.itemMoveInfo.mail === true ? (
                  <td>
                    <img src={Icons.checkGreen} alt="" />
                  </td>
                ) : (
                  <td>
                    {" "}
                    <img src={Icons.timesRed} alt="" />
                  </td>
                )}
              </tr>
              <tr>
                <td>Can be sold as an auction</td>
                {this.state.items.itemMoveInfo.auction === true ? (
                  <td>
                    <img src={Icons.checkGreen} alt="" />
                  </td>
                ) : (
                  <td>
                    {" "}
                    <img src={Icons.timesRed} alt="" />
                  </td>
                )}
              </tr>
              <tr>
                <td>Can be placed in guild storage</td>
                {this.state.items.itemMoveInfo.guildStore === true ? (
                  <td>
                    <img src={Icons.checkGreen} alt="" />
                  </td>
                ) : (
                  <td>
                    {" "}
                    <img src={Icons.timesRed} alt="" />
                  </td>
                )}
              </tr>
            </tbody>
          </table>

          <table className="searchItem-result__itemDiscription">
            <caption>Item Discription</caption>
            <tbody>
              <tr>
                <td>{this.state.items.description}</td>
              </tr>
            </tbody>
          </table>

          <table className="searchItem-result_obtainFrom">
            <caption>Obtainable From</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Chance</th>
              </tr>
            </thead>

            {this.state.items.itemSummonInfoContainedIn.map(
              (itemSum, index) => (
                <tbody key={index}>
                  <tr>
                    <td>
                      {
                        this.state.items.itemSummonInfoContainedIn[index]
                          .sourceName
                      }
                    </td>
                    <td>
                      {
                        this.state.items.itemSummonInfoContainedIn[index]
                          .sourceId
                      }
                    </td>
                    <td>
                      {this.state.items.itemSummonInfoContainedIn[index].chance}
                    </td>
                  </tr>
                </tbody>
              )
            )}
          </table>

          <table className="searchItem-result_soldBy">
            <caption>Buyable At</caption>
            <thead>
              <tr>
                <th>NPC ID</th>
                <th>Map Name</th>
                <th>Position</th>
              </tr>
            </thead>

            {this.state.items.soldBy.map((npc, index) => (
              <tbody key={index}>
                <tr>
                  <td>{this.state.items.soldBy[index].npc.id}</td>
                  <td>{this.state.items.soldBy[index].npc.mapname}</td>
                  <td>
                    ({this.state.items.soldBy[index].npc.x}), (
                    {this.state.items.soldBy[index].npc.y})
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default ItemSummary;
