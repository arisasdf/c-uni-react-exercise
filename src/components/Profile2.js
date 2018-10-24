import React, { Component } from "react";

class Profile2 extends Component {
  render() {
    return (
      <div>
        <div className="flex-container Profile_page2">
          <div className="Profile_page2_left">
            <img src={"/menu.png"} alt="my pix" width="180" height="180" />
            <h1>EFFIOM</h1>
            <i>Eme Umoh</i>

            <br />
            <br />
            <p>Front-End(UI/UX) Developer</p>

            <br />
            <br />
            <section>
              <p>
                ABOUT ME
                <span>
                  <hr />
                </span>
              </p>
              <p>
                Hi am Eme, I am a freelance User Interface developer living in
                Cardiff.
                <br />
                <br />I work with technologies like <br />
                <br />
                <ul>
                  <li>--HTML</li>
                  <li>--CSS</li>
                  <li>--Bootstrap</li>
                  <li>--JQuery</li>
                  <li>--Javascript</li>
                  <li>--React JS</li>
                </ul>
              </p>
            </section>
          </div>
          <div className="Profile_page2_right">
            <aside>
              <p>
                <b>MY HOBBIES</b>
              </p>
              <span>
                <hr />
              </span>
              My hobbies,when am not developing User interfaces/websites I also
              enjoy:
              <br />
              <br />
              <ul>
                <li>--Sing</li>
                <li>--Watch movies</li>
                <li>--Shop</li>
                <li>--dance</li>
                <li>--watch utube videos</li>
                <li>--Eat Out</li>
              </ul>
              <br />
              <p>
                <b>FAVOURITE QUOTES</b>
              </p>
              <span>
                <hr />
              </span>
              <ul>
                <li>--If You fail to plan, You plan to fail</li>
                <li>--United we stand, Divided we fall</li>
                <li>--Fix the cause, not the symptom</li>
                <li>--Make it work, make it right, make it fast</li>
              </ul>
              <br />
              <br />
              <p>
                <b>REACH ME</b>
              </p>
              <span>
                <hr />
              </span>
              <br />
              <ul>
                <li>--www.facebook.com/eme</li>
                <li>--www.linkedin.com/17hjhjw21</li>
                <li>--www.twitter.com/eme</li>
                <li>--www.Cardiff.ac.uk</li>
                <li>--+447762678987</li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile2;
