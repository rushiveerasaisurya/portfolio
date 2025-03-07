import { useRef } from "react";
import "./parallax.css";
import planets from "../assets/planets.png";
import sun from "../assets/sun.png";
import {motion, useScroll,useTransform} from "framer-motion";
function Parallax({type}){
    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })
    const yText=useTransform(scrollYProgress, [0,1], ["0%","500%"])
    const yBg=useTransform(scrollYProgress, [0,1], ["0%","100%"])
    return(
        <div className="section parallax" ref={ref} style={{background: type==="about" ? "Linear-gradient(180deg, #111132,#0c0c1d" : "Linear-gradient(180deg, #111132,#505064"}}>
            <motion.h1 style={{y: yText}}>{type==="about" ? "What I Do?" : "What I Did?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets" style={{y: yBg, backgroundImage: `url(${type==="about" ? planets : sun})`,}}></motion.div>
            <motion.div style={{x: yBg}} className="stars"></motion.div>
        </div>
    )
}
export default Parallax;




