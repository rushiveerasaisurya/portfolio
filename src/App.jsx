import Navbar from "./navbar-page/navbar";
import Home from "./home-page/home";
import Parallax from "./parallax/parallax";
import About from "./about-page/about";
import Design from "./bg-design/Design";
import Skills from "./skills-page/skills"
import Projects from "./project-page/projects";
import Contact from "./contact-page/contact";
import TargetCursor from "./components/TargetCursor";
import "./index.css";

function App() {
  return (
    <div className="app">
      <TargetCursor
        spinDuration={5}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.8}
      />
      <Design />
      <div className="content-container">
        <Navbar />
        <Home />
        <Parallax type="about" />
        <About />
        <Skills />
        <Parallax type="projects" />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;