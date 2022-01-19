import "./Introduction.css";

const Introduction = () => (
  <section id="intro">
    <p>
      {/* TODO: Give this a big & strong look */}
      <strong>
        Hi! my name is
        {/* TODO: Give the name some swag */}
        <span>
          Quinten <br /> <p className="last-name">Favorite</p>
        </span>
      </strong>
      <br />I am a software developer based in Atlanta, Georgia. I love building
      software using cutting-edge technologies and with best practices and
      paradigms in the fore-front.
    </p>
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
