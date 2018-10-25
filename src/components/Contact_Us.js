import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact_Us extends Component {
  render() {
    return (
      <section className="contact_form_section">
        <div class="container">
          <form>
            <p>Please fill in the form below</p>

            <div>
              <label>Enter Name</label>
              <input
                type="text"
                id="lastName"
                required
                name="lastName"
                placeholder="Please enter your lasttname"
              />
            </div>
            <div>
              <label>Enter Email</label>
              <input
                type="email"
                id="email"
                required
                name="email"
                placeholder="Please enter your email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                size="35"
              />
            </div>

            <div>
              <label>More Details</label>
              <textarea
                id="More"
                name="More"
                rows="2"
                cols="33"
                maxlength="200"
                wrap="hard"
              />
            </div>
            <input type="submit" value="SUBMIT" id="submit" />
          </form>
        </div>
      </section>
    );
  }
}

export default Contact_Us;
