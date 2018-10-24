import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Video_Tutorials from "./Video_Tutorials";
import External_Links from "./External_Links";
import Learning_Resources from "./Learning_Resources";
import Profile1 from "./Profile1";
import Profile2 from "./Profile2";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/Home" component={Home} />

          <Route path="/Video_Tutorials" component={Video_Tutorials} />
          <Route path="/External_Links" component={External_Links} />
          <Route path="/Learning_Resources" component={Learning_Resources} />
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
