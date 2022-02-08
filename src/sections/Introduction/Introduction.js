import "./Introduction.css";
import TypeWriter from "react-typewriter";
import profile from "./profile.png";

const Introduction = () => (
  <section id="intro">
    <div>
      {/* TODO: Give this a big & strong look */}
      <div className="intro-container">
        <div className="greeting">
          <h1>Hi! my name is</h1>
        </div>
        {/* TODO: Give the name some swag */}
        <div className="logo-container">
          <img className="head-picture" src="https://i.imgur.com/j55UPNh.png" />
          <span className="name">
            <p className="first">Quinten</p> <p className="last">Favorite</p>
          </span>
        </div>
      </div>
      <br />
      <p className="type-writer">
        <TypeWriter typing={2.5}>
          I am a software developer based in Atlanta, Georgia. I love building
          software using cutting-edge technologies and with best practices and
          paradigms in the fore-front.
        </TypeWriter>
      </p>
    </div>
    {/* TODO: make them pretty */}
    <div className="buttons-container">
      <a href="#portfolio" className=" btn primary">
        My Portfolio
      </a>
      <a href="#contact" className=" btn secondary">
        Contact Me
      </a>
    </div>
  </section>
);

export default Introduction;
