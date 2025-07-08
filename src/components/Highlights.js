import React, { useState, useEffect } from 'react';
import HighlightsCSS from '../assets/wrappers/HighlightsCSS';
import { SiReact, SiTypescript, SiExpress, SiMongodb, SiAwsamplify, SiLeaflet, SiSass, SiJest } from 'react-icons/si';
import { FaUnity, FaNodeJs } from "react-icons/fa";
import { SiUnrealengine } from 'react-icons/si';
import MWImage from '../assets/images/MindWave.png';
import TechArtImage from '../assets/mp4/wave2.gif';
import WS from '../assets/images/websocket.svg';
import GameGif from '../assets/mp4/gamegif.gif';
import softwarePhoto from '../assets/images/SoftwarePhoto.jpg';
import { SiCsharp, SiCplusplus, SiJavascript } from 'react-icons/si';

const projectData = [
  {
    title: "Game Developer",
    link: "http://rolandosg.com/Game-Development", // Using learnMoreLink as example
    techIcons: [
      <FaUnity size={20} />,
      <SiUnrealengine size={20} />,
    ],
    backgroundImage: GameGif,
  },
  {
    title: "Technical Artist",
    // link: "https://rolandosg.com/Technical-Art", // Using learnMoreLink as example
    link: "http://lrolandosg.com/Technical-Art",
    techIcons: [
      <FaUnity size={20} />,
      <SiUnrealengine size={20} />,
    ],
    backgroundImage: TechArtImage,
  },
  {
    title: "Web Developer",
    link: "http://rolandosg.com/web-development", // Placeholder, as no link provided
    techIcons: [
      <SiReact size={20} />,
    ],
    backgroundImage: MWImage,
  },
  {
    title: "Software Engineer",
    link: "http://rolandosg.com/Software-engineer", // Placeholder, as no link provided
    techIcons: [
    ],
    backgroundImage: softwarePhoto,
  },
];

const Highlights = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState('Game Developer'); // Updated default to match projectData

  const renderProject = (projectName) => {
    const project = projectData.find(p => p.title === projectName);
    return project ? (
      <div
        className="project-card"
        style={{ backgroundImage: `url(${project.backgroundImage})`, cursor: 'pointer' }}
        onClick={() => window.location.href = project.link}
        onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = project.link; }}
        tabIndex="0"
        role="link"
      >
        <div className="title">{project.title}</div>
        <div className="project-details">
          <p>{project.description}</p>
        </div>
        <div className="tech-icons">{project.techIcons}</div>
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
        {isMobile ? (
          <>
            <div className="project-selector">
              {projectData.map((project, i) => (
                <button key={i} onClick={() => setSelectedProject(project.title)}>
                  {project.title}
                </button>
              ))}
            </div>
            {renderProject(selectedProject)}
          </>
        ) : (
          <div className="project-grid">
            {projectData.map((project, i) => (
              <div
                className={`project-card ${hoveredCardIndex === i ? 'expanded' : 'collapsed'}`}
                style={{ backgroundImage: `url(${project.backgroundImage})`, cursor: 'pointer' }}
                onClick={() => window.location.href = project.link}
                onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = project.link; }}
                tabIndex="0"
                role="link"
                onMouseEnter={() => setHoveredCardIndex(i)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                key={i}
              >
                <div className="title">{project.title}</div>
                <div className="project-details">
                  <p>{project.description}</p>
                </div>
                <div className="tech-icons">{project.techIcons}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </HighlightsCSS>
  );
};

export default Highlights;