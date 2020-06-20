import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const searchByItemID = (searchKeyword) =>
  `https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/item/${searchKeyword}?apiKey=02c7580d618374dbc3f1a593291d5394`;

// function Database() {
class SearchItem extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.divine-pride.net/api/database/item/501?apiKey=02c7580d618374dbc3f1a593291d5394"
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

  searchItem = (event) => {
    event.preventDefault();
    axios
      .get(searchByItemID(event.target.searchItemInput.value))
      .then((response) => {
        // console.log(response);
        this.setState({
          items: response.data,
        });
      })
      .catch((err) => console.log("err"));
    event.target.reset();
  };

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
            <input type="text" name="searchItemInput" placeholder="item id" />
            <button className="database__subBtn" type="submit">
              SEARCH
            </button>
          </form>
        </div>

        <div className="searchItem-result">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  {" "}
                  <Link to={`/database/item/${this.state.items.id}`}>
                    {this.state.items.id}
                  </Link>
                </td>
                <td>{this.state.items.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SearchItem;
