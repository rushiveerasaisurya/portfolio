import "./projects.css";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import MobileRecharge from "../assets/MobileRecharge.png";
import fed from "../assets/fileEncryption_Decryption.png";
import gamesHub from "../assets/GamesHub.png";
import TicTacToe from "../assets/tic-tac-toe.png";
import calculator from "../assets/calculator.png";
import GuessANumber from "../assets/guess-a-number.png";
import { useRef } from "react";

const items=[
    {
        id:1,
        title:"RechargeMeeet",
        img: MobileRecharge,
        desc:"It is a robust full-stack application built with React and Spring Boot, designed to streamline mobile prepaid transactions and plan management. It features secure authentication with OTP recovery, a dynamic admin dashboard for revenue analytics, and a seamless user experience for browsing and purchasing recharge plans.",
        githubLink:"https://github.com/rushiveerasaisurya/mobile-recharge-app"
    },
    {
        id:2,
        title:"GamesHub",
        img:gamesHub,
        desc:"It is a modern collection of 9 classic arcade & puzzle games built with React, Vite, and Tailwind. Features Single Player, Local PvP, and CPU modes.",
        githubLink:"https://github.com/rushiveerasaisurya/games_hub",
        websiteLink:"https://rushiveerasaisurya.github.io/games_hub/"
    },
    {
        id:3,
        title:"File Encryption and Decryption",
        img:fed,
        desc:"It is a Flask web app for secure file encryption and decryption using AES‑256 and password‑derived keys. Supports file upload, key generation, encrypted file download, and restoring original files via a simple, responsive HTML/CSS interface.",
        githubLink:"https://github.com/rushiveerasaisurya/file-encryption-and-decryption",
    },
    {
        id:4,
        title:"Tic-Tac-Toe",
        img:TicTacToe,
        desc:"A classic Tic-Tac-Toe game built with HTML5, CSS3, and JavaScript. Features include Player vs Player and Player vs Computer modes, intuitive UI, and responsive design for all devices.",
        githubLink:"https://github.com/rushiveerasaisurya/tic-tac-toe-game",
        websiteLink:"https://rushiveerasaisurya.github.io/tic-tac-toe-game/"
    },
    {
        id:5,
        title:"Calculator",
        img:calculator,
        desc:"A responsive calculator built with HTML5, CSS3, and JavaScript. Features include dark/light mode, real-time calculations, and basic arithmetic operations. Designed for seamless use on desktop and mobile devices.",
        githubLink:"https://github.com/rushiveerasaisurya/calculator",
        websiteLink:"https://rushiveerasaisurya.github.io/calculator/"
    },
    {
        id:6,
        title:"Guess A Number",
        img:GuessANumber,
        desc:"A simple Guess A Number Game built with HTML5, CSS3, and JavaScript. Players guess a randomly generated number within a specified range, with feedback on whether the guess is too high or too low. Includes a restart option and responsive design for all devices.",
        githubLink:"https://github.com/rushiveerasaisurya/Guess-A-Number",
        websiteLink:"https://rushiveerasaisurya.github.io/Guess-A-Number/"
    }
]

const Single=({item})=>{
    const ref =useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
    });
    const y = useTransform(scrollYProgress,[0,1],[-500,500]);
    return(
        <section className="section">
            <div className="container">
                <div className="wrapper">
                    <div className="image-container">
                        <img src={item.img} ref={ref}/>
                    </div>
                    <motion.div className="text-container" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <div className="project-buttons">
                            <a href={item.githubLink} target="_blank"><button className="cursor-target">github</button></a>
                            {item.websiteLink && <a href={item.websiteLink} target="_blank"><button className="cursor-target">see demo</button></a>}
                        </div>
                        
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
function Projects(){
    const ref=useRef();
    const {scrollYProgress}=useScroll({target: ref,offset:["end end","start start"]});
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })
    return(
        
        <div id='projects' className="projects" ref={ref}>
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style={{scaleX}} className="progress-bar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
}
export default Projects;


