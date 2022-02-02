import "./Portfolio.css";
import Project from "./components/Project/Project.js";
import heatmap from "./thumbnail-photos/HeatmapThumb.JPG";
import joke from "./thumbnail-photos/JokeThumb.JPG";
import counter from "./thumbnail-photos/MTGCounterThumb.JPG";
import clicker from "./thumbnail-photos/SpaceClickerThumb.JPG";

const Portfolio = () => (
  <section id="portfolio">
    <h1>Portfolio</h1>
    <p className="paragraph">
      Here are some of my personal projects that I would like to show you. If
      you have any questions, feel free to contact me and I'd be delighted to
      provide additional information.
    </p>
    {/* Show a project component below */}
    <div className="projects-container">
      <Project
        title="Spaceship Clicker"
        img={clicker}
        description="an idle clicker game programmed in React."
        preview="https://rocketship-clicker.netlify.app/"
        repo=""
      />
      <Project
        title="Get a Joke!"
        img={joke}
        description="A simple app that generates a joke from an API"
        preview="https://get-joke.netlify.app/"
        repo=""
      />
      <Project
        title="Two Player Point Tracker"
        img={counter}
        description="A two player point tracker"
        preview="https://magiccounter.netlify.app/"
        repo=""
      />
      <Project
        title="Monthly Global Land-Surface Temp"
        img={heatmap}
        description="A heatmap made with d3.js"
        preview="https://codepen.io/Quinten97/full/oNemdmy"
        repo=""
      />
    </div>
  </section>
);

export default Portfolio;
