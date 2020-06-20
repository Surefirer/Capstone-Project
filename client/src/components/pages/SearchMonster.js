import React, { Component } from "react";
import axios from "axios";

const searchByItemID = (searchKeyword) =>
  `https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/monster/${searchKeyword}?apiKey=02c7580d618374dbc3f1a593291d5394&server=Cro`;

// function Database() {
class SearchMonster extends Component {
  searchItem = (event) => {
    event.preventDefault();
    axios
      .get(searchByItemID(event.target.searchItemInput.value))
      .then((response) => {
        console.log(response);
        this.setState({ mobs: response.data });
      });
    console.log(event.target.searchItemInput.value);
    event.target.reset();
  };

  state = {
    mobs: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/monster/1002?apiKey=02c7580d618374dbc3f1a593291d5394&server=Cro"
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
          <h1>魔物数据查询(beta)</h1>
        </div>

        <div className="database__searchBox">
          <form
            onSubmit={this.searchItem}
            className="database__searchBoxWrapper"
          >
            <input type="text" name="searchItemInput" placeholder="魔物ID" />
            <button className="database__subBtn" type="submit">
              搜寻
            </button>
          </form>
        </div>

        <div className="searchMonster-result">
          <table className="searchMonster-result__genInfo">
            <caption>基本信息</caption>
            <tbody>
              <tr>
                <td>魔物名称</td>
                <td>{this.state.mobs.name}</td>
              </tr>
              <tr>
                <td>魔物ID</td>
                <td> {this.state.mobs.id}</td>
              </tr>
              <tr>
                <td>等级</td>
                <td>{this.state.mobs.stats.level}</td>
              </tr>
              <tr>
                <td>HP</td>
                <td>{this.state.mobs.stats.health}</td>
              </tr>
            </tbody>
          </table>

          <table className="searchMonster-result__property">
            <caption>属性表</caption>
            <tbody>
              <tr>
                <td>无</td>
                <td>{this.state.mobs.propertyTable[0]}%</td>
              </tr>
              <tr>
                <td>水</td>
                <td>{this.state.mobs.propertyTable[1]}%</td>
              </tr>
              <tr>
                <td>地</td>
                <td>{this.state.mobs.propertyTable[2]}%</td>
              </tr>
              <tr>
                <td>火</td>
                <td>{this.state.mobs.propertyTable[3]}%</td>
              </tr>
              <tr>
                <td>风</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[4]}
                  %
                </td>
              </tr>
              <tr>
                <td>毒</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[5]}
                  %
                </td>
              </tr>
              <tr>
                <td>圣</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[6]}
                  %
                </td>
              </tr>
              <tr>
                <td>暗</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[7]}
                  %
                </td>
              </tr>
              <tr>
                <td>恶魔</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[8]}
                  %
                </td>
              </tr>
              <tr>
                <td>不死</td>
                <td>
                  {Object.keys(this.state.mobs).length > 0 &&
                    this.state.mobs.propertyTable[9]}
                  %
                </td>
              </tr>
            </tbody>
          </table>

          <table className="searchMonster-result__stats">
            <caption>素质表</caption>
            <tbody>
              <tr>
                <td>基本经验值</td>
                <td>{this.state.mobs.stats.baseExperience}</td>
              </tr>
              <tr>
                <td>职业经验值</td>
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
                <td>物理攻击 (最低)</td>
                <td>{this.state.mobs.stats.attack.minimum}</td>
              </tr>
              <tr>
                <td>物理攻击 (最高)</td>
                <td>{this.state.mobs.stats.attack.maximum}</td>
              </tr>
              <tr>
                <td>魔法攻击 (最低)</td>
                <td>{this.state.mobs.stats.magicAttack.minimum}</td>
              </tr>
              <tr>
                <td>魔法攻击 (最高)</td>
                <td>{this.state.mobs.stats.magicAttack.maximum}</td>
              </tr>
              <tr>
                <td>防御</td>
                <td>{this.state.mobs.stats.defense}</td>
              </tr>
              <tr>
                <td>魔法防御</td>
                <td>{this.state.mobs.stats.magicDefense}</td>
              </tr>
              <tr>
                <td>命中</td>
                <td>{this.state.mobs.stats.hit}</td>
              </tr>
            </tbody>
          </table>

          <table className="searchMonster-result__drops">
            <caption>掉落</caption>
            <thead>
              <tr>
                <th>道具 ID</th>
                <th>几率</th>
                <th>版本</th>
                <th>偷窃</th>
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
            <caption>地图刷新</caption>
            <thead>
              <tr>
                <th>地图名称</th>
                <th>数量</th>
                <th>重生时间（秒）</th>
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

export default SearchMonster;
