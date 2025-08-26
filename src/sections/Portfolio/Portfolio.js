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
    <div className="projects-container">
      <Project
        title="NetScuffed"
        img="https://raw.githubusercontent.com/Quinten97/NetScuffed/main/images/LLDP.png"
        description="Network diagnostics tool meant to replicate the core functionality of a NetScout"
        preview="https://github.com/Quinten97/NetScuffed"
        repo="https://github.com/Quinten97/NetScuffed"
      />
      <Project
        title="OpenClip"
        img="https://raw.githubusercontent.com/Quinten97/Open-Clip/refs/heads/main/OpenClip%20Logo.png"
        description="AI powered powershell script for automatically clipping long form content into short form content."
        preview="https://drive.google.com/drive/folders/1G1KB0cb561VgCHTXeRaEd6J0q0J4lIIm?usp=drive_link"
        repo="https://github.com/Quinten97/Open-Clip"
      />
      <Project
        title="ConjureCast"
        img="https://conjurecast.net/ConjurecastLogo.svg"
        description="Website built for the popular D&D podcast ConjureCast."
        preview="https://conjurecast.net"
        repo="https://github.com/Quinten97/conjurecast"
      />
      <Project
        title="Chatter Ai"
        htt
        img="https://i.imgur.com/LZt0Lr0.png"
        description="A PWA chatbot integrating ollama for locally hosted ai conversations."
        preview="https://ai-chatter.netlify.app/"
        repo="https://github.com/Quinten97/Chatter"
      />
      <Project
        title="Tiny Components"
        img="https://user-images.githubusercontent.com/89324378/236610468-bd1a7c41-3540-44ee-829c-a3b848dfc56f.svg"
        description="A journey of could I not should I."
        preview="https://tinycomponents.netlify.app/"
        repo="https://github.com/Quinten97/TinyComponents"
      />
      <Project
        title="Spaceship Clicker"
        img="https://i.imgur.com/PIPIUME.jpg"
        description="An idle clicker game programmed in React."
        preview="https://rocketship-clicker.netlify.app/"
        repo="https://github.com/Quinten97/Space-Clicker-ReactGame"
      />
      <Project
        title="Monthly Global Land-Surface Temp"
        img="https://i.imgur.com/w3pPcd8.jpg"
        description="A heatmap made with d3.js"
        preview="https://codepen.io/Quinten97/full/oNemdmy"
        repo="https://github.com/Quinten97/D3-Heatmap-FCCProject"
      />
      <Project
        title="Simple Chat"
        img="https://i.imgur.com/4PCSpJj.png"
        description="A simple chat application using web sockets."
        preview="https://simplechat.adaptable.app/"
        repo="https://github.com/Quinten97/Chat-app"
      />
    </div>
  </section>
);

export default Portfolio;
