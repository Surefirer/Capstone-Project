import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const searchByItemID = (searchKeyword) =>
  `https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/monster/${searchKeyword}?apiKey=02c7580d618374dbc3f1a593291d5394`;

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
        "https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/monster/1002?apiKey=02c7580d618374dbc3f1a593291d5394"
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
          <h1>Search Monster</h1>
        </div>

        <div className="database__searchBox">
          <form
            onSubmit={this.searchItem}
            className="database__searchBoxWrapper"
          >
            <input
              type="text"
              name="searchItemInput"
              placeholder="monster id"
            />
            <button className="database__subBtn" type="submit">
              SEARCH
            </button>
          </form>
        </div>

        <div className="searchMonster-result">
          <table className="searchMonster-result__genInfo">
            <tbody>
              <tr>
                <th>Name</th>
                <th>ID</th>
              </tr>
              <tr>
                <td>
                  <Link to={`/database/monster/${this.state.mobs.id}`}>
                    {this.state.mobs.name}
                  </Link>
                </td>

                <td>{this.state.mobs.id}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SearchMonster;
