import React, { useState, useEffect } from "react";
import Typed from 'typed.js';
import "./home.css";
import profile from "../assets/profile.png";
import emailLogo from "../assets/email.svg";
import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import resume from "../assets/resume.pdf";
import {motion} from "framer-motion";
const roles = ["Web Developer", "Frontend Developer","Web Designer","Code Craftsman"];

function Home(){
    const [tooltip, setTooltip] = useState({ text: "", x: 0, y: 0, visible: false });
    const el = React.useRef(null);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); 
    return () => clearInterval(interval); 
    }, []);

    

    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: roles,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay:1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
    }, []);
    const handleMouseEnter = (e, text) => {
        setTooltip({ text, x: e.pageX, y: e.pageY, visible: true });
    };

    const handleMouseMove = (e) => {
        setTooltip((prev) => ({ ...prev, x: e.pageX, y: e.pageY }));
    };

    const handleMouseLeave = () => {
        setTooltip({ text: "", x: 0, y: 0, visible: false });
    };
    return(
        <div className="home-section">
        <motion.div id='home' className="section home"
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:1}} >
            <motion.div className="right-side"
            initial={{opacity:0,scale:0.5,x:-200}} 
            animate={{opacity:1,scale:1,x:0}} 
            whileInView={{opacity:1,scale:1}}
            transition={{duration:2,delay:0.5}}>
                <div className="details">
                    <p className="hello-msg">Hi, I am</p>
                    <p className="name">Nunnaguppala </p>
                    <p className="f-name">Rushi Veera Sai Surya</p>
                    <p className="role"><span ref={el}/></p>
                    <div className="buttons">
                        <a href={`#contact-me`}><button  className="contact-button">Contact Me</button></a>
                        <a href={resume} target="blank"><button  className="download-button">Download Resume</button></a>
                    </div>
                </div>
            
                <div className="home-links">
                    <a href={`#contact-me`} className="btn" 
                        onMouseEnter={(e) => handleMouseEnter(e, "Email")}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}>
                        <img src={emailLogo} alt="Email"/>
                    </a>

                    <a href="https://github.com/rushiveerasaisurya" target="blank" rel="noopener noreferrer" className="btn" 
                        onMouseEnter={(e) => handleMouseEnter(e, "GitHub")}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}>
                        <img src={githubLogo} alt="GitHub"/>
                    </a>

                    <a href="http://www.linkedin.com/in/rushi-veera-sai-surya" target="blank" rel="noopener noreferrer" className="btn"
                        onMouseEnter={(e) => handleMouseEnter(e, "LinkedIn")}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}>
                        <img src={linkedinLogo} alt="LinkedIn"/>
                    </a>
                </div>
            </motion.div>
            
            <img src={profile} alt="profile pic" className="profile-photo"/>
                
            {tooltip.visible && (
                <div className="tooltip"
                    style={{
                        left: tooltip.x + 10 + "px",
                        top: tooltip.y + 10 + "px",
                    }}>
                    {tooltip.text}
                </div>
            )}
            
        </motion.div>
        </div>
    )
}
export default Home;


