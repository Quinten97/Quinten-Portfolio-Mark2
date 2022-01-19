import "./Introduction.css";
import TypeWriter from "react-typewriter";

const Introduction = () => (
  <section id="intro">
    <div>
      {/* TODO: Give this a big & strong look */}
      <strong>
        Hi! my name is
        {/* TODO: Give the name some swag */}
        <span className="name">
          <p className="first">Quinten</p> <p className="last">Favorite</p>
        </span>
      </strong>
      <br />
      <p className="type-writer">
        <TypeWriter typing={1}>
          I am a software developer based in Atlanta, Georgia. I love building
          software using cutting-edge technologies and with best practices and
          paradigms in the fore-front.
        </TypeWriter>
      </p>
    </div>
    {/* TODO: make them pretty */}
    <div className="buttons-container">
      <a href="#portfolio" className="primary">
        My Portfolio
      </a>
      <a href="#contact" className="secondary">
        Contact Me
      </a>
    </div>
  </section>
);

export default Introduction;
