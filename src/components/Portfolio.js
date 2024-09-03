import React from 'react';
import Header from '../components/Header';
import { GridWrapper } from '../assets/wrappers/Portfolio.js';

import { FaReact, FaUnity } from 'react-icons/fa';
// import { SiGithub } from 'react-icons/si';
// import { MdWebAsset } from 'react-icons/md';
import { GiVintageRobot } from 'react-icons/gi';
import { SiCplusplus } from 'react-icons/si';
// import { SiYoutube } from 'react-icons/si';

import unityPic from '../assets/images/gamepic3.PNG';
import blackjackPic from '../assets/images/blackjack.png';
import robotCPic from '../assets/images/robotC.png';
import unrealPic from '../assets/images/unreal.png';
import websitePic from '../assets/images/websitePic.png';
import mwPic from '../assets/images/MindWave.png';
import wowAddonImage from '../assets/images/wowAddonImage.png'
//SiExpress, SiJest
import { SiReact, SiTypescript, SiMongodb, SiAwsamplify, SiLeaflet, SiSass,  } from 'react-icons/si';
import {FaNodeJs, FaGamepad} from 'react-icons/fa';
import WS from '../assets/images/websocketSkill.svg';
import { useEffect } from 'react';

const techIcons = {
  React: <SiReact size={30} title="React" />,
  TypeScript: <SiTypescript size={30} title="TypeScript" />,
  MongoDB: <SiMongodb size={30} title="MongoDB" />,
  AWSAmplify: <SiAwsamplify size={30} title="AWS Amplify" />,
  Leaflet: <SiLeaflet size={30} title="Leaflet" />,
  Sass: <SiSass size={30} title="Sass" />,
  NodeJs: <FaNodeJs size={30} title="Node.js" />,
  WebSocket: <img src={WS} style={{ width: '30px' }} alt="WebSocket" title="WebSocket" />
};

const recentWorkData = [
  {
    title: 'MindWave Social Media Platform',
    description: 'MindWave redefines global connection through a unique social media platform. Featuring real-time mapping & a dynamic and interactive global sentiment landscape.',
    imageUrl: mwPic, // Replace with the path to your image
    keyFeatures: [
      'Interactive user experience',
      'Advanced trend analysis tools',
      'WebSocket for live updates',
      'Responsive and interactive map visuals'
    ],
    techStack: ['React', 'TypeScript', 'Express', 'MongoDB', 'AWS Amplify', 'Leaflet', 'Sass', 'Jest', 'Node.js', 'WebSocket'],
    projectLink: 'https://mindwave.com/', // Replace with your project link
    githubLink: 'https://github.com/RolandosG/SM_MindWave' // Replace with your GitHub link
  },
  // Add more entries as needed
];

const projectData = [
  {
    title: '3D Unity Game',
    icon: <FaUnity size={'50px'} />,
    description: 'A complex intricate project with over 1000 lines of code.',
    githubLink: 'https://github.com/RolandosG/space_shooter',
    websiteLink: 'http://rolandosg.com/3D-Unity-Game',
    imageUrl: unityPic,
  },
  {
    title: 'Portfolio Website',
    icon: <FaReact size={'50px'} />,
    description: 'The website I\'ve designed here.',
    githubLink: 'https://github.com/RolandosG/portfolioSite',
    websiteLink: 'rolandosg.com',
    imageUrl: websitePic,
  },
  {
    title: 'BlackJack Website',
    icon: <FaReact size={'50px'} />,
    description: 'A project built with React to showcase abilities of full stack development.',
    githubLink: 'https://github.com/RolandosG/PRJ666-BlackJack-main',
    websiteLink: 'https://blackjack.herokuapp.com/landing',
    imageUrl: blackjackPic,
  },
  {
    title: 'CompareIlvlToolTip',
    icon: <FaGamepad size={'50px'} />, // Or another suitable icon
    description: 'Over 50 downloads on its first day. Optimizing gear with ease."', 
    websiteLink: 'https://www.curseforge.com/wow/addons/compareilvltooltip', // Link to CurseForge page
    imageUrl: wowAddonImage, // Path to your addon's image
  },
  {
    title: 'Robotics in C',
    icon: <GiVintageRobot size={'50px'} />,
    description: 'Real time robot simulation using sensors to locate & move objects.',
    githubLink: 'https://github.com/RolandosG/exploration-machine',
    youtubeLink: 'https://youtu.be/a51OEI5wD8A',
    imageUrl: robotCPic,
  },
  {
    title: 'Adventure Game',
    icon: <SiCplusplus size={'40px'} />,
    description: 'An RPG adventure game made from scratch using Unreal\'s blueprints.',
    githubLink: 'https://github.com/RolandosG/Rolos-Grand-Adventure',
    youtubeLink: 'https://youtu.be/GpPjLehmRSk',
    imageUrl: unrealPic,
  },
  
  // Add more projects as needed
];
const Portfolio = () => {
  useEffect(() => {
    const container = document.querySelector('.project-container');
    if (container) {
      container.scrollTop = 1; // Trigger a small scroll
      setTimeout(() => {
        container.scrollTop = 0; // Reset the scroll position
      }, 100);
    }
  }, []);
  return (
    <>
      <Header />
      <GridWrapper>
      <aside className="recent-work">
          <h2>Most Recent Work:</h2>
          {recentWorkData.map((work, index) => (
            <div key={index} className="work-item">
              <img src={work.imageUrl} alt={work.title} className="work-image" />
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <ul className="key-features">
                {work.keyFeatures.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="tech-stack">
  {work.techStack.map((tech, index) => {
    const formattedTechName = tech.replace(/\s/g, ''); // Removes spaces
    const icon = techIcons[formattedTechName];

    if (!icon) return null; // Skip rendering if the icon is not found

    return (
      <div key={index} className="tech-stack-icon" title={tech}>
        {icon}
      </div>
    );
  })}
</div>
              <a href={work.projectLink} target="_blank" rel="noopener noreferrer">Explore Now</a>
              <a href={work.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </aside>

        <main className="project-container">
          <ul className="project-list">
            {projectData.map((project, index) => (
              <li key={index} className={`project-item slide-${index}`}>
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">Website</a>
                  {project.youtubeLink && (
                    <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">Video</a>
                  )}
                </div>
                
                <div className="project-content">
                  <div className="project-title">
                    {project.title} {project.icon}
                  </div>
                  <div className="project-description">{project.description}</div>
                  <div className="additional-info">
                   
                    
                  </div>
                </div>
              </li>
            ))}
            
          </ul>
        </main>
      </GridWrapper>
    </>
  );
};

export default Portfolio;

