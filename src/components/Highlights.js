import React, { useState } from 'react';
import HighlightsCSS from '../assets/wrappers/HighlightsCSS';

import { SiReact, SiTypescript, SiCss3, SiMaterialUi, SiNodeDotJs, SiExpress, SiMongodb, SiAwsamplify, SiLeaflet, SiSass, SiJest } from 'react-icons/si';
import { FaUnity, FaNodeJs } from "react-icons/fa";

import MWImage from '../assets/images/MindWave.png';
import U3DImage from '../assets/images/space.png';
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
    title: "Space shooter",
    description: "A 3D game of interstellar challenges and rewards.",
    siteLink: "https://rolandosg.com/RecentProject",
    githubLink: "https://github.com/RolandosG/Shape_Shooter_Game",
    learnMoreLink: "https://rolandosg.com/RecentProject",
    techIcons: [
    <FaUnity size={20} />,
    
    ],
    backgroundImage: U3DImage,
  },
];

const Highlights = () => {
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  
    return (
      <HighlightsCSS>
        <div><h1>HIGHLIGHTS</h1></div>
        <div className="highlights">
        <div className="project-grid">
          {projectData.map((project, index) => (
            <div
              className={`project-card ${hoveredCardIndex === index ? 'expanded' : 'collapsed'}`}
              style={{ backgroundImage: `url(${project.backgroundImage})`}}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              key={index}
            >
              <div className="title">{project.title}</div>
              <div className="project-details">
                <p>{project.description}</p>
              </div>
              <div className="tech-icons">
                {project.techIcons}
              </div>
              <div className="links">
                <a href={project.siteLink} target="_blank">View Site </a>
                <a href={project.githubLink} target="_blank">View on GitHub</a>
                <a href={project.learnMoreLink} target="_blank">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HighlightsCSS>
  );
};

export default Highlights;
