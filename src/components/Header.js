import React, { Component } from "react";
import "../img/Menuicon.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="mainMenu">
          <span className="logo">
            E &amp; L <i>tutorials</i>
          </span>
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
              <ul>
                <li>About E&amp;L</li>
                <li>
                  <a>Profile 1</a>
                </li>
                <li>
                  <a>Profile 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">VIDEO TUTORIALS</a>
            </li>
            <li>
              <a href="">LEARNING RESOURCES</a>
            </li>
            <li>
              <a href="">EXTERNAL LINKS</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
