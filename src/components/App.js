import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import External_Links from "./External_Links";
import Profile1 from "./Profile1";
import Profile2 from "./Profile2";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/External_Links" component={External_Links} />
          <Route exact path="/Profile1" component={Profile1} />
          <Route exact path="/Profile2" component={Profile2} />
          <Route path="/About" component={About} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
