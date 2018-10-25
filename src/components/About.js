import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contact_Us from "./Contact_Us";

class About extends Component {
  render() {
    return (
      <div>
        <div className="flex-container">
          <section className="about_us_banner">
            <h1>Improving lives through Learning</h1>
            <br />
            <p>
              Talent is Universal but opportunities are not.With access to
              online learning resources and instruction, anyone,anywhere can
              gain skills that can transform thier lives in meaningful ways.
            </p>
          </section>
          <h1>OUR TEAM</h1>
          <div className="flex-container About_us_Profiles">
            <figure>
              <img
                src="/img/lucia-photo.png"
                alt="About us"
                class="center"
                width="50%"
                height="200"
              />
              <br />
              <br />

              <figcaption>
                <p>Luc&iacute;a Serrano</p>
                <Link to="/about/lucia">Discover more</Link>
              </figcaption>
            </figure>
            <figure>
              <img
                src="/img/eme-photo.png"
                alt="About us"
                class="center"
                width="50%"
                height="200"
              />
              <br />
              <br />
              <figcaption>
                <p>Eme Effiom</p>

                <Link to="/about/eme">Discover more</Link>
              </figcaption>
            </figure>
          </div>
          <div className="ContactForm">
            <h1>CONTACT US</h1>
            <Contact_Us />
          </div>
          <footer />
        </div>
      </div>
    );
  }
}

export default About;
