import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <header>
        <nav className="mainMenu">
          <button type="button" onClick={this.toggleMenu}>
            <div>
              <img src={"/menu.png"} alt="menu" width="30" height="35" />
            </div>
          </button>

          <span className="logo">
            E &amp; L <i>tutorials</i>
          </span>

          <ul id="menu_Items" class={this.state.showMenu ? "" : "hidden"}>
            <li>
              <Link to="/Home">HOME</Link>
            </li>
            <li>
              <Link to="/Home">ABOUT US</Link>
            </li>
            <li class="videos">
              <Link to="/Home">VIDEO TUTORIALS</Link>
            </li>
            <li class="resources">
              <Link to="/Home">LEARNING RESOURCES</Link>
            </li>
            <li class="ext_links">
              <Link to="/Home">EXTERNAL LINKS</Link>
            </li>
            <li>
              <Link to="/Home">BLOG</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
