import "./Project.css";

// TODO: make this componet use the props to generate a nice project display
const Project = ({ title, img, description, preview, repo }) => (
  <article>
    <p>{title}</p>
    <p>{description}</p>
    <a href={repo} target="_blank">
      :eye: view source
    </a>
    <a href={preview} target="_blank">
      <img src={img} alt="project thumbnail" />
    </a>
  </article>
);

export default Project;
