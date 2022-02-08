import "./Project.css";

// TODO: make this componet use the props to generate a nice project display
const Project = ({ title, img, description, preview, repo }) => (
  <article>
    <img src={img} alt="project thumbnail" />
    <p>{title}</p>
    <p>{description}</p>
    <div className="button-container">
      <a className="btn primary" href={repo} target="_blank">
        👁 Source
      </a>
      <a className="btn secondary-variant" href={preview} target="_blank">
        Demo
      </a>
    </div>
  </article>
);

export default Project;
