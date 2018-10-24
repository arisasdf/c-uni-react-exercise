import React, { Component } from "react";

import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <div className="flex-container">
          <section className="about_us_banner">
            <h1>IMPROVING LIVES THROUGH LEARNING</h1>
            <br />
            <p>
              Talent is Universal but opportunities are not.With access to
              online learning resources and instruction, anyone,anywhere can
              gain skills that can transform thier lives in meaningful ways.
            </p>
            <p>
              Our Instructors come from virtually every country and offers
              courses on practically any topic in any of our domains.Our
              instructors are passionate about sharing their knowledge and
              helping students. They are experts who stay active in thier fields
              in order to deliver the most up-to-date contents.
            </p>
          </section>
          <h1>OUR TEAM</h1>
          <div className="flex-container About_us_Profiles">
            <figure>
              <img
                src="/About_banner.jpeg"
                alt="About us"
                class="center"
                width="50%"
                height="200"
              />
              <br />
              <br />

              <figcaption>
                <p>Lucia Serrano</p>
                <Link to="/Profile1">Discover more</Link>
              </figcaption>
            </figure>
            <figure>
              <img
                src="/About_banner.jpeg"
                alt="About us"
                class="center"
                width="50%"
                height="200"
              />
              <br />
              <br />
              <figcaption>
                <p>Eme Effiom</p>

                <Link to="/About/Profile2">Discover more</Link>
              </figcaption>
            </figure>
          </div>
          <div className="ContactForm">
            <h1>CONTACT US</h1>
          </div>
          <footer />
        </div>
      </div>
    );
  }
}

export default About;
