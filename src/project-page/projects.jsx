import "./projects.css";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import TicTacToe from "../assets/tic-tac-toe.png";
import calculator from "../assets/calculator.png";
import GuessANumber from "../assets/guess-a-number.png";
import { useRef } from "react";

const items=[
    {
        id:1,
        title:"Tic-Tac-Toe",
        img:TicTacToe,
        desc:"A classic Tic-Tac-Toe game built with HTML5, CSS3, and JavaScript. Features include Player vs Player and Player vs Computer modes, intuitive UI, and responsive design for all devices.",
        githubLink:"https://github.com/rushiveerasaisurya/tic-tac-toe-game",
        websiteLink:"https://rushiveerasaisurya.github.io/tic-tac-toe-game/"
    },
    {
        id:2,
        title:"Calculator",
        img:calculator,
        desc:"A responsive calculator built with HTML5, CSS3, and JavaScript. Features include dark/light mode, real-time calculations, and basic arithmetic operations. Designed for seamless use on desktop and mobile devices.",
        githubLink:"https://github.com/rushiveerasaisurya/calculator",
        websiteLink:"https://rushiveerasaisurya.github.io/calculator/"
    },
    {
        id:3,
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
                            <a href={item.githubLink} target="_blank"><button>github</button></a>
                            <a href={item.websiteLink} target="_blank"><button>see demo</button></a>
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


