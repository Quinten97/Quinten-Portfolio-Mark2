import "./Portfolio.css";
import Project from "./components/Project/Project.js";

const Portfolio = () => (
  <section id="portfolio">
    <h2>Portfolio</h2>
    <p className="paragraph">
      Here are some of my personal projects that I would like to show you. If
      you have any questions, feel free to contact me and I'd be delighted to
      provide additional information.
    </p>
    {/* Show a project component below */}
    <div className="projects-container">
      <Project
        title="Spaceship Clicker"
        img="https://i.imgur.com/PIPIUME.jpg"
        description="an idle clicker game programmed in React."
        preview="https://rocketship-clicker.netlify.app/"
        repo="https://github.com/Quinten97/Space-Clicker-ReactGame"
      />
      <Project
        title="Helpdesk Ticketing API"
        img="https://i.imgur.com/FNOs1xC.png"
        description="A simple API for helpdesk"
        preview="https://favoritecomputertech.netlify.app/"
        repo="https://github.com/Quinten97/Ticketing-System-API"
      />
      <Project
        title="Two Player Point Tracker"
        img="https://i.imgur.com/occJaZZ.jpg"
        description="A two player point tracker"
        preview="https://magiccounter.netlify.app/"
        repo="https://github.com/Quinten97/magic-counter"
      />
      <Project
        title="Monthly Global Land-Surface Temp"
        img="https://i.imgur.com/w3pPcd8.jpg"
        description="A heatmap made with d3.js"
        preview="https://codepen.io/Quinten97/full/oNemdmy"
        repo="https://github.com/Quinten97/D3-Heatmap-FCCProject"
      />
    </div>
  </section>
);

export default Portfolio;
