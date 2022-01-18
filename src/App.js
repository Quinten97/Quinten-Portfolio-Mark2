import Contact from "./sections/Contact/Contact";
import Introduction from "./sections/Introduction/Introduction";
import Portfolio from "./sections/Portfolio/Portfolio";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Introduction />
      <Portfolio />
      <Contact />
    </div>
  );
}
