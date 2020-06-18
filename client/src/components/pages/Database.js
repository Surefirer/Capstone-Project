import React from "react";
import { Icons } from "../assets";

function Database() {
  return (
    <div className="database">
      <div className="database__title">
        <h1>Data Search</h1>
      </div>

      <form className="database__searchBox">
        <div className="database__searchBoxWrapper">
          <input type="text" name="search" placeholder="item id/name" />
          <button type="submit">SEARCH</button>
        </div>
        <div className="database__searchBoxWrapper">
          <input type="text" name="search" placeholder="monster id/name" />
          <button type="submit">SEARCH</button>
        </div>
      </form>

      <div className="database__searchResult">
        <div className="database__titleWrapper">
          <p className="database__itemTitle database__id">Id</p>
          <p className="database__itemTitle database__image">Image</p>
          <p className="database__itemTitle database__name">Name</p>
          <p className="database__itemTitle database__type">Type</p>
        </div>

        <div className="database__contentWrapper">
          <p className="database__content database__id">501</p>
          <div className="database__content database__image">
            <img src={Icons.defultSearchImg} alt="" />
          </div>
          <p className="database__content database__name">Red Potion</p>
          <p className="database__content database__type">Healing</p>
        </div>
      </div>
    </div>
  );
}

export default Database;
