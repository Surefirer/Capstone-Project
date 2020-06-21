import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import SideDrawer from "./components/sideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop";
import yypoints from "./components/pages/YyPoints";
import information from "./components/pages/Information";
// import database from "./components/pages/SearchItem";
import Staffs from "./components/pages/Staffs";
import support from "./components/pages/Support";
import Footer from "./components/Footer";
import searchItem from "./components/pages/SearchItem";
import searchMonster from "./components/pages/SearchMonster";
import ItemSummary from "./components/pages/ItemSummary";
import MonsterSummary from "./components/pages/MonsterSummary";
import ScroolToTop from "./components/scrollToTop/scrollToTop";

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
    adminList: [],
    devList: [],
    GMList: [],
    reviewList: [],
  };

  componentDidMount() {
    axios.get("/administrator").then((response) => {
      this.setState({
        adminList: response.data,
      });
    });
    axios.get("/developer").then((response) => {
      this.setState({
        devList: response.data,
      });
    });
    axios.get("/gameMaster").then((response) => {
      this.setState({
        GMList: response.data,
      });
    });
    axios.get("/review").then((response) => {
      const setFirstThreeVar = response.data.slice(0, 5);
      this.setState({
        reviewList: setFirstThreeVar,
        review: response.data[0],
      });
    });
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { adminList, devList, GMList, reviewList } = this.state;
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
          <Route
            path="/"
            exact
            render={(props) => <Home reviewList={reviewList} />}
          />
          <Route path="/yypoints" component={yypoints} />
          <Route path="/information" component={information} />
          <Route path="/database/item" exact component={searchItem} />
          <Route path="/database/item/:id" component={ItemSummary} />
          <Route path="/database/monster" exact component={searchMonster} />
          <Route path="/database/monster/:id" component={MonsterSummary} />
          <Route
            path="/staffs"
            render={(props) => (
              <Staffs adminList={adminList} devList={devList} GMList={GMList} />
            )}
          />
          <Route path="/support" component={support} />
        </Switch>
        <ScroolToTop />
        <Footer />
      </Router>
    );
  }
}

export default App;
