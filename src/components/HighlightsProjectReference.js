import React, { useState, useEffect } from 'react';
import HighlightsCSS from '../assets/wrappers/HighlightsCSS';
//SiCss3, SiMaterialUi, SiNodeDotJs,
import { SiReact, SiTypescript, SiExpress, SiMongodb, SiAwsamplify, SiLeaflet, SiSass, SiJest } from 'react-icons/si';
import { FaUnity, FaNodeJs } from "react-icons/fa";

import MWImage from '../assets/images/MindWave.png';
import U3DImage from '../assets/images/gamepic3.PNG';
import WS from '../assets/images/websocket.svg';
// Use `techIcons` in your component where appropriate

const projectData = [
  {
    title: "Social Media Website",
    description: "A dynamic platform for real-time social interactions.",
    siteLink: "https://master.d72pvjeru1c09.amplifyapp.com/login",
    githubLink: "https://github.com/RolandosG/SM_MindWave",
    learnMoreLink: "http://rolandosg.com/MindWave",
    techIcons: [
        <SiReact size={20} />,
        <SiTypescript size={20} />,
        <SiExpress size={20} />,
        <SiMongodb size={20} />,
        <SiAwsamplify size={20} />,
        <SiLeaflet size={20} />,
        <SiSass size={20} />,
        <SiJest size={20} />,
        <FaNodeJs size={20} />,
        <img src={WS} style={{ width: '20px' }} alt="WebSocket" />
      ],
      backgroundImage: MWImage,
  },
  {
    title: "Space Odyssey",
    description: "A 3D game of interstellar challenges and rewards.",
    siteLink: "https://rolandosg.com/3D-Unity-Game",
    githubLink: "https://github.com/RolandosG/Shape_Shooter_Game",
    learnMoreLink: "https://rolandosg.com/3D-Unity-Game",
    techIcons: [
    <FaUnity size={20} />,
    
    ],
    backgroundImage: U3DImage,
  },
  {
    title: "Space Odyssey",
    description: "A 3D game of interstellar challenges and rewards.",
    siteLink: "https://rolandosg.com/3D-Unity-Game",
    githubLink: "https://github.com/RolandosG/Shape_Shooter_Game",
    learnMoreLink: "https://rolandosg.com/3D-Unity-Game",
    techIcons: [
    <FaUnity size={20} />,
    
    ],
    backgroundImage: U3DImage,
  },
  {
    title: "Space Odyssey",
    description: "A 3D game of interstellar challenges and rewards.",
    siteLink: "https://rolandosg.com/3D-Unity-Game",
    githubLink: "https://github.com/RolandosG/Shape_Shooter_Game",
    learnMoreLink: "https://rolandosg.com/3D-Unity-Game",
    techIcons: [
    <FaUnity size={20} />,
    
    ],
    backgroundImage: U3DImage,
  },
];

const Highlights = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
    const [selectedProject, setSelectedProject] = useState('Social Media Website');
    
    const renderProject = (projectName) => {
      const project = projectData.find(p => p.title === projectName);
      return project ? (
        <div className={`project-card`} style={{ backgroundImage: `url(${project.backgroundImage})`}}>
          <div className="title">{project.title}</div>
          <div className="project-details">
            <p>{project.description}</p>
          </div>
          <div className="tech-icons">{project.techIcons}</div>
          <div className="links">
            <a href={project.siteLink} target="_blank" rel="noopener noreferrer">View Site</a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <a href={project.learnMoreLink} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        </div>
      ) : null;
    };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
      <HighlightsCSS>
      
      <div className="highlights">
      <div><h1>HIGHLIGHTS</h1></div>
        {isMobile ? (
          <>
           <div className="project-selector">
          <button onClick={() => setSelectedProject('Social Media Website')}>MindWave</button>
          <button onClick={() => setSelectedProject('Space Odyssey')}>Unity3D</button>
        </div>
        {renderProject(selectedProject)}
        </>
        ) : (
          <div className="project-grid">
            {projectData.map((project, i) => (
              <div
              className={`project-card ${hoveredCardIndex === i ? 'expanded' : 'collapsed'}`}
              style={{ backgroundImage: `url(${project.backgroundImage})`}}
              onMouseEnter={() => setHoveredCardIndex(i)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              key={i}
            >
              <div className="title">{project.title}</div>
              <div className="project-details">
                <p>{project.description}</p>
              </div>
              <div className="tech-icons">
                {project.techIcons}
              </div>
              <div className="links">
                <a href={project.siteLink} target="_blank" rel="noopener noreferrer">View Site </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                <a href={project.learnMoreLink} target="_blank" rel="noopener noreferrer">Learn More</a>
              </div>
            </div>
            ))}
          </div>
        )}
      </div>
    </HighlightsCSS>
  );
};

export default Highlights;
