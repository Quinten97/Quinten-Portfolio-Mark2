import "./Introduction.css";
import TypeWriter from "react-typewriter";
import profile from "./profile.png";

const Introduction = () => (
  <section id="intro">
    <div>
      <div className="intro-container">
        <div className="greeting">
          <h1>Hi! my name is</h1>
        </div>
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
          I'm a passionate software developer based in South Atlanta, with a
          strong love for building innovative software solutions, automating
          tedious tasks, and creating dynamic web experiences. Whether it's
          streamlining workflows, optimizing performance, or crafting
          user-friendly websites, I enjoy tackling challenges and bringing ideas
          to life through code.
        </TypeWriter>
      </p>
    </div>
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
