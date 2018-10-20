import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="mainMenu">
          <span className="logo">
            E &amp; L <i>tutorials</i>
          </span>
          <ul>
            <li>HOME</li>
            <li>
              ABOUT US
              <ul className="about">
                <li>About E&amp;L</li>
                <li>Profile 1</li>
                <li>Profile 2</li>
              </ul>
            </li>
            <li class="videos">VIDEO TUTORIALS</li>
            <li class="resources">LEARNING RESOURCES</li>
            <li class="ext_links">EXTERNAL LINKS</li>
            <li class="mobile">
              MORE
              <ul class="more">
                <li>Video Tutorials</li>
                <li>Learning Resources</li>
                <li>External Links</li>
              </ul>
            </li>
            <li>BLOG</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
