import "./Project.css";

// TODO: make this componet use the props to generate a nice project display
const Project = ({ title, img, description, preview, repo }) => (
  <article>
    <img src={img} alt="project thumbnail" />
    <p>{title}</p>
    <p>{description}</p>
    <div className="button-container">
      <a className="source-button" href={repo} target="_blank">
        👁 View Source
      </a>
      <a className="demo-button" href={preview} target="_blank">
        Demo
      </a>
    </div>
  </article>
);

export default Project;
