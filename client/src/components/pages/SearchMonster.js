import React, { Component } from "react";
import axios from "axios";

const searchByItemID = (searchKeyword) =>
  `https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/item/${searchKeyword}?apiKey=02c7580d618374dbc3f1a593291d5394&server=cro`;

// function Database() {
class SearchMonster extends Component {
  searchItem = (event) => {
    event.preventDefault();
    axios
      .get(searchByItemID(event.target.searchItemInput.value))
      .then((response) => {
        console.log(response);
        this.setState({ items: response.data });
      });
    console.log(event.target.searchItemInput.value);
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
          console.log(response.data.stats.level);
          this.setState({ mobs: response.data });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    if (this.stats.mobs.stats === undefined) {
      return <p>Loading data...</p>;
    }
    //if (data.stats === undefined) {
    //  return <p>Loading data...</p>;
    //} // show error 'data' is not defined
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
              placeholder="monster id/name"
            />
            <button className="database__subBtn" type="submit">
              SEARCH
            </button>
          </form>
        </div>

        <div className="searchMonster-result">
          <h3>Mob Name: {this.state.mobs.name}</h3>
          <h3>Mob ID: {this.state.mobs.id}</h3>
          <h3>Level: {this.state.mobs.stats.level}</h3>
        </div>
      </div>
    );
  }
}

export default SearchMonster;
