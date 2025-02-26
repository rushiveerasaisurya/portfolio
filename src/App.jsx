import Navbar from "./navbar-page/navbar";
import Home from "./home-page/home";
import Parallax from "./parallax/parallax";
import About from "./about-page/about";
import Design from "./bg-design/Design";
import Skills from "./skills-page/skills"
import Projects from "./project-page/projects";
import Contact from "./contact-page/contact";
import "./index.css";
function App() {

  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <Parallax type="about"/>
      <About/>
      <Skills/>
      <Parallax type="projects"/>
      <Projects/>
      <Contact/>
      <Design/>
    </div>
  )
}

export default App
