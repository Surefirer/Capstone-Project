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
          <h1>物品信息</h1>
        </div>

        <div className="searchItem-result">
          <table className="searchItem-result__genInfo">
            <tbody>
              <tr>
                <td>Id</td>
                <td>{this.state.items.id}</td>
              </tr>

              <tr>
                <td>名称</td>
                <td>{this.state.items.name}</td>
              </tr>
              <tr>
                <td>NPC 售价</td>
                <td>{this.state.items.weight}</td>
              </tr>
              <tr>
                <td>类别</td>
                <td>{this.state.items.itemTypeId}</td>
              </tr>
              <tr>
                <td>重量</td>
                <td> {this.state.items.weight}</td>
              </tr>
              <tr>
                <td>可破坏</td>
                <td> {this.state.items.indestructible}</td>
              </tr>
              <tr>
                <td>位置</td>
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
                <td>可精炼</td>
                <td> {this.state.items.refinable}</td>
              </tr>
              <tr>
                <td>装备等级要求</td>
                <td> {this.state.items.requiredLevel}</td>
              </tr>
              <tr>
                <td>洞</td>
                <td> {this.state.items.slots}</td>
              </tr>
              <tr>
                <td>武器等级</td>
                <td> {this.state.items.weaponLevel}</td>
              </tr>
              <tr>
                <td>属性</td>
                <td> {this.state.items.attribute}</td>
              </tr>
            </tbody>
          </table>

          <table className="searchItem-result__itemMoveinfo">
            <caption>物品 移动 信息</caption>
            <tbody>
              <tr>
                <td>可以丢弃</td>
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
                <td>可以交易</td>
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
                <td>可以存仓库</td>
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
                <td>可以存入手推车</td>
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
                <td>可以卖NPC</td>
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
                <td>可以邮寄</td>
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
                <td>可以拍卖</td>
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
                <td>可以存入工会仓库</td>
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
            <caption>物品描述</caption>
            <tbody>
              <tr>
                <td>{this.state.items.description}</td>
              </tr>
            </tbody>
          </table>

          <table className="searchItem-result_obtainFrom">
            <caption>其他获得方式</caption>
            <thead>
              <tr>
                <th>名称</th>
                <th>ID</th>
                <th>几率</th>
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
            <caption>商店销售点</caption>
            <thead>
              <tr>
                <th>NPC ID</th>
                <th>地图名称</th>
                <th>位置</th>
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
