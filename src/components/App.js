import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import External_Links from "./External_Links";
import ProfileLucia from "./ProfileLucia";
import Profile_Eme from "./Profile_Eme";
import LearningResources from "./LearningResources";
import LearningResource from "./LearningResource";
import VideoTutorials from "./VideoTutorials";
import VideoTutorial from "./VideoTutorial";
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
          <Route path="/about/lucia" component={ProfileLucia} />
          <Route path="/about/eme" component={Profile_Eme} />
          <Route path="/about" component={About} />
          <Route exact path="/learning" component={LearningResources} />
          <Route path="/learning/:slug" component={LearningResource} />
          <Route exact path="/video" component={VideoTutorials} />
          <Route path="/video/:slug" component={VideoTutorial} />
          <Route path="/blog" component={Blog} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
