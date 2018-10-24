import React, { Component } from "react";
import { Link } from "react-router-dom";

class External_links extends Component {
  render() {
    return (
      <div>
        <main>
          <div className="flex-container External_links">
            <div>
              <h2>STACK OVERFLOW</h2>
              <p>
                Full stack development in Java
                <br />
                <Link to="/Home">
                  www.stackoverflow.com/full_stack_development_in java
                </Link>
              </p>
            </div>
            <div />
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
          </div>
        </main>
      </div>
    );
  }
}

export default External_links;
