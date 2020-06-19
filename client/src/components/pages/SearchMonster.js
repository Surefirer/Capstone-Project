import React, { Component } from "react";
//import { Icons } from "../assets";
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
    items: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/monster/1002?apiKey=02c7580d618374dbc3f1a593291d5394"
      )
      .then(
        (response) => {
          console.log(response);
          this.setState({ items: response.data });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
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
            <button type="submit">SEARCH</button>
          </form>
        </div>

        <div className="database__searchResult">
          <div className="database__titleWrapper">
            <p className="database__itemTitle database__id">Id</p>
            <p className="database__itemTitle database__image">Name</p>
            <p className="database__itemTitle database__name">HP</p>
            <p className="database__itemTitle database__type">TypeId</p>
          </div>

          <div className="database__contentWrapper">
            <p className="database__content database__id">
              {this.state.items.id}
            </p>
            <div className="database__content database__name">
              {this.state.items.name}
            </div>
            <p className="database__content database__weight">
              {this.state.items.weight}
            </p>
            <p className="database__content database__type">
              {this.state.items.itemTypeId}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchMonster;
