import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion'; 
import './about.css';

const About = () => {
  const education = [
    {
      year: '2022 - 2025',
      course: 'B-Tech in Electrical and Electronics Engineering',
      institution: 'Godavari Institute of Engineering and Technology',
      details: 'Graduated with a solid understanding of electrical systems, power electronics, and circuit analysis. Completed practical training in substation operations.'
    },
    {
      year: '2019 - 2022',
      course: 'Diploma in Electrical and Electronics Engineering',
      institution: 'Aditya polytechnic colleges',
      details: 'Completed a comprehensive diploma program focusing on electrical machines, power distribution, and control systems. Gained hands-on experience through training at a 33/11kV substation.'
    }
  ];

  const experiences = [
    {
      duration: '6 Weeks',
      role: 'MERN Stack Intern',
      company: 'ExcelR Edtech',
      details: 'Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Built dynamic user interfaces, implemented RESTful APIs, and collaborated in an agile team environment, enhancing both technical and teamwork skills.'
    },
    {
      duration: '8 Weeks',
      role: 'VLSI Intern',
      company: 'Pantech solutions',
      details: 'Worked on the development and implementation of a Kogge-Stone (KS) adder.Gained hands-on experience in VLSI design and verification, improved understanding of digital logic design, and developed skills in using industry-standard EDA tools.'
    }
  ];

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  const descriptionVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }
    }
  };

  const timelineVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.4 }
    }
  };

  const TimelineSection = ({ items, type }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const timelineRef = useRef(null);
    const ballRef = useRef(null);
    const startY = useRef(0);
    const startIndex = useRef(0);
    const minSwipeDistance = 50;

    const updateActiveIndex = (newIndex) => {
      const clampedIndex = Math.max(0, Math.min(items.length - 1, newIndex));
      if (clampedIndex !== activeIndex) {
        setActiveIndex(clampedIndex);
      }
    };

    const handlePrev = () => {
      updateActiveIndex(activeIndex - 1);
    };

    const handleNext = () => {
      updateActiveIndex(activeIndex + 1);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      updateActiveIndex(activeIndex + direction);
    };

    useEffect(() => {
      const timeline = timelineRef.current;
      if (timeline) {
        timeline.addEventListener('wheel', handleWheel, { passive: false });
        return () => timeline.removeEventListener('wheel', handleWheel);
      }
    }, [activeIndex]);

    const handleMouseDown = (e) => {
      e.preventDefault();
      setIsDragging(true);
      startY.current = e.clientY;
      startIndex.current = activeIndex;
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
      if (!isDragging || !timelineRef.current) return;
      
      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();
      const deltaY = e.clientY - startY.current;
      const totalHeight = rect.height - 40; 
      const itemHeight = totalHeight / (items.length - 1);
      const indexDelta = Math.round(deltaY / itemHeight);
      
      updateActiveIndex(startIndex.current + indexDelta);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const getBallPosition = () => {
      if (!timelineRef.current) return 0;
      const height = timelineRef.current.clientHeight - 64; 
      return 20 + (height / (items.length - 1)) * activeIndex;
    };

    return (
      <motion.div 
        className="timeline-section"
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2 }}
        variants={timelineVariants}
      >
        <h2 className="about-section-title">{type === 'education' ? 'Education' : 'Experience'}</h2>
        <div className="timeline" ref={timelineRef}>
          <div 
            className={`timeline-ball ${isDragging ? 'dragging' : ''}`}
            ref={ballRef}
            style={{ top: `${getBallPosition()}px` }}
            onMouseDown={handleMouseDown}
          />
          <div className="timeline-items">
            {items.map((item, index) => (
              <div 
                key={index}
                className={`timeline-item ${index === activeIndex ? 'active' : ''}`}
                style={{
                  opacity: index === activeIndex ? 1 : 0,
                  transform: `translateY(${(index - activeIndex) * 100}%)`
                }}
              >
                <div className="timeline-date">
                  {type === 'education' ? item.year : item.duration}
                </div>
                <div className="timeline-content">
                  <h3>{type === 'education' ? item.course : item.role}</h3>
                  <h4>{type === 'education' ? item.institution : item.company}</h4>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mobile-nav">
            <button 
              className={`nav-button up-btn ${activeIndex === 0 ? 'disabled' : ''}`}
              onClick={handlePrev}
              disabled={activeIndex === 0}
            >
              <ChevronUp size={24} />
            </button>
            <button 
              className={`nav-button down-btn ${activeIndex === items.length - 1 ? 'disabled' : ''}`}
              onClick={handleNext}
              disabled={activeIndex === items.length - 1}
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div id='about-me' className="section about-container">
      <motion.h1 
        className="about-title"
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.1 }}
        variants={titleVariants}
      >
        About Me
      </motion.h1>


      <motion.p 
        className='about-description'
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2 }}
        variants={descriptionVariants}
      >
        Hi, I'm a passionate front-end developer with expertise in the MERN stack. I love creating intuitive and visually appealing web applications that deliver great user experiences. I’m constantly learning and enjoy turning ideas into reality through code and creativity.
      </motion.p>


      <div className="timeline-container">
        <TimelineSection items={education} type="education" />
        <TimelineSection items={experiences} type="experience" />
      </div>
    </div>
  );
};

export default About;


