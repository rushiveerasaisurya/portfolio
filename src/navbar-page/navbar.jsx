import "./navbar.css";
import {motion} from "framer-motion";
import { useState, useEffect } from "react";
import home from "../assets/home.svg";
import about from "../assets/about.svg";
import skills from "../assets/skills.svg";
import projects from "../assets/project.svg";
import contact from "../assets/contact.svg";
const varients={
    visible:(i)=>({
        opacity:1,
        x:0,
        transition:{delay:i*0.3}
    }),
    hidden:{opacity:0,x:-10}
};
const items=["Home","About Me","Skills","Projects","Contact Me"];
const imgs=[home,about,skills,projects,contact];
function Navbar(){
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight*0.8)
      {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <motion.nav 
            className={`navbar ${isScrolled ? "scrolled" : ""}`} 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
            >
            <div className="navbar-name">Portfolio</div>
            <motion.ul className="nav-links" initial="hidden" animate="visible" variants={varients}>
                
                {items.map((item,i)=>(
                    <div className="nav-link-container" key={item}>
                        <motion.li variants={varients} key={item} className="link"  custom={i}>
                          <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                                <img src={imgs[i]} className="links-img"/>
                                <span className="link-names">{item}</span>
                            </a>
                        </motion.li>
                        
                    </div>
                ))}                
            </motion.ul>
        </motion.nav>
    );
}
export default Navbar;