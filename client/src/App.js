import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import axios from "axios";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import SideDrawer from "./components/sideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop";
import yypoints from "./components/pages/YyPoints";
import information from "./components/pages/Information";
// import database from "./components/pages/SearchItem";
import staffs from "./components/pages/Staffs";
import support from "./components/pages/Support";
import Footer from "./components/Footer";
import searchItem from "./components/pages/SearchItem";
import searchMonster from "./components/pages/SearchMonster";
import ItemSummary from "./components/pages/ItemSummary";
import MonsterSummary from "./components/pages/MonsterSummary";

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Header drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            click={this.backdropClickHandler}
          />
          {backdrop}
        </div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/yypoints" component={yypoints} />
          <Route path="/information" component={information} />
          <Route path="/database/item" exact component={searchItem} />
          <Route path="/database/item/:id" component={ItemSummary} />
          <Route path="/database/monster" exact component={searchMonster} />
          <Route path="/database/monster/:id" component={MonsterSummary} />
          <Route path="/staffs" component={staffs} />
          <Route path="/support" component={support} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
