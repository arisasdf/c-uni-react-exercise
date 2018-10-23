import React, { Component } from "react";
import { Link } from "react-router-dom";

function myFunction() {
  var x = document.getElementById("menu_Items");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="mainMenu">
          <button type="button" onClick={myFunction}>
            <div>
              <img src={"/menu.png"} alt="menu" width="30" height="35" />
            </div>
          </button>

          <span className="logo">
            E &amp; L <i>tutorials</i>
          </span>
          <div id="menu_Items">
            <ul>
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
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
