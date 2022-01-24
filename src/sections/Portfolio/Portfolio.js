import "./Portfolio.css";
import heatmap from "./thumbnail-photos/HeatmapThumb.JPG";
import joke from "./thumbnail-photos/JokeThumb.JPG";
import counter from "./thumbnail-photos/MTGCounterThumb.JPG";
import clicker from "./thumbnail-photos/SpaceClickerThumb.JPG";

const Portfolio = () => (
  <section id="portfolio">
    <h1>Portfolio</h1>
    <p>
      Here are some of my personal projects that I would like to show you. If
      you have any questions, feel free to contact me and I'd be delighted to
      provide additional information.
    </p>
    {/* Show a project component below */}
    <div className="projects-container">
      <h4>Rocketship Clicker</h4>
      <button>
        <a href="https://rocketship-clicker.netlify.app/" target="_blank">
          <img src={clicker} alt="thumbnail of app" />
        </a>
      </button>
      <h4>Get a Joke!</h4>
      <button>
        <a href="https://get-joke.netlify.app/" target="_blank">
          <img src={joke} alt="thumbnail of app" />
        </a>
      </button>
      <h4>Two Player Point Tracker</h4>
      <button>
        <a href="https://magiccounter.netlify.app/" target="_blank">
          <img src={counter} alt="thumbnail of app" />
        </a>
      </button>
      <h4>Monthly Global Land-Surface Temp.</h4>
      <button>
        <a href="https://codepen.io/Quinten97/full/oNemdmy" target="_blank">
          <img src={heatmap} alt="thumbnail of app" />
        </a>
      </button>
    </div>
  </section>
);

export default Portfolio;
