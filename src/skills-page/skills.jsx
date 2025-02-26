import React from 'react';
import { delay, motion } from 'framer-motion';
import { 
  FileCode, 
  Palette, 
  Code2, 
  Blocks, 
  Server, 
  Database, 
  Cpu, 
  Coffee,
  GitBranch,
  Figma,
  Container
} from 'lucide-react';
import SkillCard from './skillcard';

const mainSkills = [
  {
    name: 'HTML',
    proficiency: 90,
    description: 'Expert-level HTML5 development with strong focus on semantic markup, accessibility, and SEO best practices.',
    icon: <FileCode className="w-full h-full" />
  },
  {
    name: 'CSS',
    proficiency: 90,
    description: 'Advanced CSS3 skills including flexbox, grid, animations, and responsive design. Proficient in creating modern, pixel-perfect layouts.',
    icon: <Palette className="w-full h-full" />
  },
  {
    name: 'JavaScript',
    proficiency: 85,
    description: 'Strong command of modern JavaScript (ES6+) with expertise in DOM manipulation, async programming, and modern JS features.',
    icon: <Code2 className="w-full h-full" />
  },
  {
    name: 'React.js',
    proficiency: 85,
    description: 'Extensive experience building scalable applications with React, including hooks, context API, and state management.',
    icon: <Blocks className="w-full h-full" />
  },
  {
    name: 'Node.js',
    proficiency: 85,
    description: 'Proficient in server-side JavaScript development using Node.js, including API development and server management.',
    icon: <Server className="w-full h-full" />
  },
  {
    name: 'Express.js',
    proficiency: 70,
    description: 'Skilled in building RESTful APIs and web applications using Express.js framework with proper middleware integration.',
    icon: <Server className="w-full h-full" />
  },
  {
    name: 'MongoDB',
    proficiency: 70,
    description: 'Experience in NoSQL database design, CRUD operations, and integration with Node.js applications.',
    icon: <Database className="w-full h-full" />
  },
  {
    name: 'Python',
    proficiency: 75,
    description: 'Proficient in Python programming for backend development, data processing, and automation tasks.',
    icon: <Cpu className="w-full h-full" />
  },
  {
    name: 'Java',
    proficiency: 65,
    description: 'Solid foundation in Java programming with experience in object-oriented design and application development.',
    icon: <Coffee className="w-full h-full" />
  }
];

const extraSkills = [
  {
    name: 'Git',
    description: 'Proficient in version control, branching strategies, and collaborative development workflows.',
    icon: <GitBranch className="w-full h-full" />
  },
  {
    name: 'VSCode',
    description: 'Proficient in using Visual Studio Code for efficient coding, debugging, and extensions customization.',
    icon: <FileCode className="w-full h-full" />
  },
  {
    name: 'Docker',
    description: 'Experience in containerization and managing application deployments using Docker.',
    icon: <Container className="w-full h-full" />
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0.2 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10, delay:0.2 }
    }
  };

  return (
    <motion.div 
      id='skills' 
      className="section skills-section"
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={itemVariants}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-description">
            A comprehensive overview of my technical expertise and proficiency levels across various domains of software development.
          </p>
        </motion.div>
        
        <motion.div className="skills-grid" variants={containerVariants}>
          <motion.span 
            className="tools"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={itemVariants}
          >
            Languages & Frameworks
          </motion.span>
          {mainSkills.map((skill, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{amount: 0.2 }}
              variants={itemVariants}
            >
              <SkillCard
                name={skill.name}
                proficiency={skill.proficiency}
                description={skill.description}
                icon={skill.icon}
              />
            </motion.div>
          ))}
          <motion.span 
            className="tools"
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2 }}
            variants={itemVariants}
          >
            Technical Tools
          </motion.span>
          {extraSkills.map((skill, index) => (
            <motion.div 
              key={`extra-${index}`}
              initial="hidden"
              whileInView="visible"
              viewport={{amount: 0.2 }}
              variants={itemVariants}
            >
              <SkillCard
                name={skill.name}
                description={skill.description}
                icon={skill.icon}
                isExtraSkill={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
export default Skills;