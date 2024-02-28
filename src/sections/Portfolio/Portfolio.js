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
        title="Tiny Components"
        img="https://user-images.githubusercontent.com/89324378/236610468-bd1a7c41-3540-44ee-829c-a3b848dfc56f.svg"
        description="A journey of could I not should I."
        preview="https://tinycomponents.netlify.app/"
        repo="https://github.com/Quinten97/TinyComponents"
      />
      <Project
        title="Monthly Global Land-Surface Temp"
        img="https://i.imgur.com/w3pPcd8.jpg"
        description="A heatmap made with d3.js"
        preview="https://codepen.io/Quinten97/full/oNemdmy"
        repo="https://github.com/Quinten97/D3-Heatmap-FCCProject"
      />
      <Project
        title="Helpdesk Ticketing API"
        img="https://i.imgur.com/FNOs1xC.png"
        description="A simple API for helpdesk"
        preview="https://favoritecomputertech.netlify.app/"
        repo="https://github.com/Quinten97/Ticketing-System-API"
      />
      <Project
        title="Simple Chat"
        img="https://imgur.com/4PCSpJj"
        description="A simple chat application."
        preview="https://simplechat.adaptable.app/"
        repo="https://github.com/Quinten97/Chat-app"
      />
      <Project
        title="Spaceship Clicker"
        img="https://imgur.com/PIPIUME"
        description="An idle clicker game programmed in React."
        preview="https://rocketship-clicker.netlify.app/"
        repo="https://github.com/Quinten97/Space-Clicker-ReactGame"
      />
    </div>
  </section>
);

export default Portfolio;
