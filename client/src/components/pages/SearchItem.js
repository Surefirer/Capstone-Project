import React, { Component } from "react";
//import { Icons } from "../assets";
import axios from "axios";

const searchByItemID = (searchKeyword) =>
  `https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/item/${searchKeyword}?apiKey=02c7580d618374dbc3f1a593291d5394&server=cro`;

// function Database() {
class SearchItem extends Component {
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
        "https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/item/501?apiKey=02c7580d618374dbc3f1a593291d5394&server=cRo"
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
          <h1>Search Item</h1>
        </div>

        <div className="database__searchBox">
          <form
            onSubmit={this.searchItem}
            className="database__searchBoxWrapper"
          >
            <input
              type="text"
              name="searchItemInput"
              placeholder="item id/name"
            />
            <button type="submit">SEARCH</button>
          </form>
        </div>

        <div className="database__searchResult">
          <div className="database__titleWrapper">
            <div className="database__itemTitle">
              <p className="database__id">Id</p>
              <p className="database__itemCont">{this.state.items.id}</p>
            </div>
            <div className="database__itemTitle database__image">
              <p className="database__id">Name</p>
              <p className="database__itemCont">{this.state.items.name} </p>
            </div>
            <div className="database__itemTitle database__name">
              <p className="database__id">NPC Sell Price</p>
              <p className="database__itemCont"> {this.state.items.weight}</p>
            </div>
            <div className="database__itemTitle database__type">
              <p className="database__id">TypeId</p>
              <p className="database__itemCont">
                {" "}
                {this.state.items.itemTypeId}
              </p>
            </div>
          </div>

          <div className="database__itemDiscription">
            <div className="database__itemdiscriptionTitle">
              <p>Item Description</p>
            </div>
            <div className="database__itemdiscriptionContent">
              <p>{this.state.items.description}</p>
              <p>Weight: {this.state.items.weight}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchItem;
