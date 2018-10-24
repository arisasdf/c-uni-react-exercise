import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import External_Links from "./External_Links";
import Profile1 from "./Profile1";
import Profile2 from "./Profile2";
import Blog from "./Blog";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/external" component={External_Links} />
          <Route path="/about/lucia" component={Profile1} />
          <Route path="/about/eme" component={Profile2} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
