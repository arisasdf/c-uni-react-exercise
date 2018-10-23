import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/Home" component={Home} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
