import React, { useState, useEffect } from 'react';
import './Highlights.css';

import { FaUnity, FaGamepad, FaRocket, FaCode, FaBug } from 'react-icons/fa';
import { SiUnrealengine, SiCsharp, SiBlender, SiUnity } from 'react-icons/si';
// Import images (replace with your actual image imports)
// Import statements for Unity Game
import gameVideo from '../../assets/mp4/game.mp4';
import gameVideoWebM from '../../assets/mp4/gamewebm.webm';
import gameGif from '../../assets/mp4/gamegif.gif';
import menuGif from '../../assets/mp4/menugif.gif';
import eventGif from '../../assets/mp4/realeventgif.gif';
import gamePic1 from '../../assets/images/gamepic1.PNG';
import gamePic2 from '../../assets/images/gamepic2.PNG';
import gamePic3 from '../../assets/images/gamepic3.PNG';
import drone from '../../assets/mp4/Drone.gif';
import sniper from '../../assets/mp4/sniper.gif';
import shielder from '../../assets/mp4/Shielder.gif';
import healerTrapper from '../../assets/mp4/healer&Trapper.gif';
import summoner from '../../assets/mp4/Summoner.gif';
import carrier from '../../assets/mp4/Carrier.gif';

// Import statements for Souls-like Game
import unrealPic from '../../assets/images/unreal.png';
import thirdRpgGif from '../../assets/mp4/thirdrpgGif.gif';

import slimeBoss from '../../assets/mp4/Slime_Boss.gif';
import bossGif from '../../assets/mp4/bossgif.gif'
import spiderBoss from '../../assets/mp4/spiderEnemy.gif';

// Required imports for Horror FPS Game Page
import SCREENSHOT01 from '../../assets/images/fpsPhotos/SCREENSHOT01.PNG';
import SCREENSHOT02 from '../../assets/images/fpsPhotos/SCREENSHOT02.PNG';
import SCREENSHOT03 from '../../assets/images/fpsPhotos/SCREENSHOT03.PNG';
import SCREENSHOT04 from '../../assets/images/fpsPhotos/SCREENSHOT04.PNG';
import dynamicEvent from '../../assets/mp4/dynamiceventsshowcase.gif';
import dynamicEvent2 from '../../assets/mp4/dynamiceventsshowcasetwo.gif';
import UIShowcase from '../../assets/mp4/UIShowcase.gif';
import spiderEnemy from '../../assets/mp4/spiderEnemy.gif';
import gameshotfeature01 from '../../assets/images/fpsPhotos/GameshotFeature01.png';
import gameshotfeature02 from '../../assets/images/fpsPhotos/GameshotFeature02.png';
import gameshotfeature03 from '../../assets/images/fpsPhotos/GameshotFeature03.png';
import gameshotfeature04 from '../../assets/images/fpsPhotos/GameshotFeature04.png';
import gameshotfeature05 from '../../assets/images/fpsPhotos/GameshotFeature05.png';

// image selection

// Simple icon components
const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

const Play = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5,3 19,12 5,21"></polygon>
  </svg>
);

const ExternalLink = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Code = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6"></polyline>
    <polyline points="8,6 2,12 8,18"></polyline>
  </svg>
);

const Target = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const Trophy = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C11.56 18.75 12 19.5 12 20.24"></path>
    <path d="M14 14.66V17c0 .55-.47.98-.97 1.21C12.44 18.75 12 19.5 12 20.24"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

const projectData = [
  {
    id: 'horror-fps-game',
    title: "Horror FPS Game",
    description: "A dynamic storytelling in an immersive horror experience.",
    techIcons: [<SiUnrealengine key="unreal" size={20} />, <FaCode key="blueprint" size={20} />, <FaGamepad key="gamepad" size={20} />],
    backgroundImage: gameshotfeature03,
    gradient: 'linear-gradient(45deg, #7c3aed 0%, #a855f7 100%)',
    detailedData: {
      heroTitle: "Horror FPS Game",
      heroDescription: "A terrifying FPS adventure combining challenging combat, atmospheric environments, and dynamic storytelling in an immersive horror experience.",
      roles: ['Level Designer', 'Game Designer', 'Programmer', 'Sound Designer', 'Artist'],
      screenshots: [
        { src: gameshotfeature01, description: 'Atmospheric lighting' },
        { src: gameshotfeature04, description: 'Simple engaging mechanics' },
        { src: gameshotfeature03, description: 'Dynamic environmental storytelling' },
        { src: gameshotfeature05, description: 'Eerie atmosphere with detailed environments' },
      ],
      features: [
        {
          title: 'Dynamic Environmental Events',
          description: 'Both distant and close-up environmental events that create an immersive, ever-changing world',
          image: dynamicEvent
        },
        {
          title: 'Dynamic Environmental Events 2',
          description: 'Enhanced environmental interactions with real-time physics and weather effects for deeper immersion',
          image: dynamicEvent2
        },
        {
          title: 'Immersive UI Design',
          description: 'Dynamic UI system designed to keep players engaged without breaking immersion',
          image: UIShowcase
        },
        {
          title: 'Adaptive Enemy AI',
          description: 'Complex rigged enemy AI that adapts to player actions, movements and sounds, providing challenging and unpredictable encounters',
          image: spiderEnemy
        }
      ],
      technologies: [
        'Unreal Engine 4',
        'Blueprint Scripting',
        'AI Behavior Trees',
        'Dynamic Lighting',
        '3D Modeling',
        'Sound Design',
        'Chaos Physics',
        'Substance Painter',
        'Perforce',
        'Niagara Particles'
      ],
      achievements: [
        'Successfully created demo level with positive playtester feedback',
        'Implemented dynamic UI system enhancing player experience',
        'Developed robust AI system providing challenging gameplay',
        'Designed intricate levels with hidden secrets and exploration rewards',
        'Created cohesive eerie atmosphere with immersive audio-visual design',
        'Optimized performance for smooth gameplay across hardware configurations'
      ],
      externalLinks: {
        live: null,
        github: null,
        demo: 'https://www.youtube.com/embed/BKFmySQyaJk?si=GOkZfpdchO2uzseL'
      },
      developmentPhilosophy: [
        {
          title: 'Immersion and Atmosphere',
          description: 'I prioritize creating a believable and unsettling world that draws players in and keeps them on edge through detailed environmental storytelling, careful sound design, and strategic resource limitation.'
        },
        {
          title: 'Player Agency and Choice',
          description: 'I ensure players feel their decisions matter by offering multiple approaches to challenges and incorporating meaningful choices that impact story progression and character relationships.'
        },
        {
          title: 'Innovation and Experimentation',
          description: 'I push genre boundaries through dynamic environmental storytelling, unique mechanics like light manipulation, and psychological horror elements that create lasting unease.'
        }
      ],
      videoEmbed: 'https://www.youtube.com/embed/BKFmySQyaJk?si=GOkZfpdchO2uzseL',
      developmentTimeline: 'June 2024 - May 2025',
      status: ['Demo Complete', 'Pre-Alpha in Progress']
    }
  },
  {
    id: 'galactica-starfox-game',
    title: "Galactica/Starfox Inspired Game",
    description: "A space combat game inspired by Galactica and Starfox.",
    techIcons: [<FaUnity key="unity" size={20} />, <SiCsharp key="csharp" size={20} />, <FaGamepad key="gamepad" size={20} />],
    backgroundImage: gameGif,
    gradient: 'linear-gradient(45deg, #1e3a8a 0%, #3b82f6 100%)',
    detailedData: {
      heroTitle: "Galactica/Starfox Inspired Game",
      heroDescription: "A space combat game inspired by Galactica and Starfox, featuring intense dogfights and a thrilling mission.",
      roles: ['Level Designer', 'Game Designer', 'Programmer', 'Sound Designer', 'Artist'],
      screenshots: [
        { src: menuGif, description: 'Upgrade System' },
        { src: bossGif, description: 'Intricate Boss Design' },
        { src: eventGif, description: 'Event System' },
        { src: menuGif, description: 'Simple atmosphere with engaging combat' },
        { src: gamePic1, description: 'Simple and Intuitive Controls' },
        { src: gamePic2, description: 'Engaging Gameplay Mechanics' },
        { src: gamePic3, description: 'Immersive Space Combat' },
        { src: sniper, description: 'Sniper AI with Precision Targeting' },
        { src: shielder, description: 'Shielder AI with Defensive Capabilities' },
        { src: healerTrapper, description: 'Healer and Trapper AI' },
        { src: summoner, description: 'Summoner AI with Minion Spawning' },
        { src: carrier, description: 'Carrier AI with Randomly Generated Obstacles' }

      ],
      features: [
        {
          title: 'Intricate choice driven upgrade system',
          description: 'A modular system allowing players to incrementally enhance their abilities.',
          image: menuGif
        },
        {
          title: 'Fun & complicated boss designs',
          description: 'Multiple script boss with different phases & behaviours.',
          image: bossGif
        },
        {
          title: 'Simple and intuitive Event driven system',
          description: 'Managing and spawning various types of enemies during the course of the game.',
          image: eventGif
        }
      ],
      technologies: [
        'Unity',
        'C#',
        'AI Behavior',
        'Dynamic Event System',
        '3D Modeling',
        'Sound Design',
        'Firebase'
      ],
      achievements: [
        'Successfully created a demo level that received positive feedback from playtesters.',
        'Implemented a UI system that enhances the experience.',
        'Developed a robust AI system that provides a challenging gameplay experience.',
        'Designed an intricate yet simple game that is easy to pick up and play.',
        'Simple enemy design that allows the player to quickly identify threats.',
        'Created a cohesive space combat atmosphere with immersive sound design and visuals.',
        'Optimized performance for smooth gameplay on a variety of hardware configurations.'
      ],
      externalLinks: {
        live: null,
        github: null,
        demo: null
      },
      developmentPhilosophy: [
        {
          title: 'Immersion and Atmosphere',
          description: 'I prioritize creating a believable and engaging space combat world that draws players in and keeps them on edge. I achieve this through:'
        },
        {
          title: 'Simplicity with Complexity',
          description: 'Simple yet Detailed environmental storytelling and subtle world and enemy building.'
        },
        {
          title: 'Attention to detail',
          description: 'Careful use of sound design to evoke specific emotions.'
        },
        {
          title: 'Intricate challenges going back to the basics',
          description: 'Limited resources and challenging encounters to create a sense of vulnerability.'
        }
      ],
      videoEmbed: gameVideoWebM,
      developmentTimeline: 'January 2023 - April 2023',
      status: ['Demo Complete', 'Full Release']
    }
  },
  {
    id: 'souls-like-adventure-game',
    title: "Souls-like Adventure Game",
    description: "A 3rd person souls-like adventure game.",
    techIcons: [<SiUnrealengine key="unreal" size={20} />, <FaCode key="blueprint" size={20} />, <FaGamepad key="gamepad" size={20} />],
    backgroundImage: thirdRpgGif,
    gradient: 'linear-gradient(45deg, #7c3aed 0%, #a855f7 100%)',
    detailedData: {
      heroTitle: "Souls-like Adventure Game",
      heroDescription: "A 3rd person souls-like adventure game with challenging combat, atmospheric environments, and a focus on exploration.",
      roles: ['Level Designer', 'Game Designer', 'Programmer', 'Sound Designer', 'Artist'],
      screenshots: [
        { src: unrealPic, description: 'An Engaging Lore Deep World' },
        { src: thirdRpgGif, description: 'Simple and Intuitive Controls' }
      ],
      features: [
        {
          title: 'Beautiful cartoonish world design',
          description: 'Simplistic and low poly world design for a unique aesthetic.',
          image: unrealPic
        },
        {
          title: 'Fun & engaging gameplay systems',
          description: 'A variety of gameplay systems that keep players engaged and challenged.',
          image: thirdRpgGif
        }
      ],
      technologies: [
        'Unreal Engine 4',
        'Blueprint Scripting',
        'AI Behavior Trees',
        'Dynamic Lighting and Post-Processing Effects',
        '3D Modeling and Animation',
        'Sound Design and Audio Implementation'
      ],
      achievements: [
        'Successfully created a demo levels that received positive feedback from playtesters.',
        'Implemented a dynamic UI system that enhances the experience.',
        'Developed a robust AI system that provides a challenging gameplay experience.',
        'Designed intricate levels with hidden secrets.',
        'Crafted a compelling storyline with multiple approaches based on player choices.',
        'Created a cohesive eerie atmosphere with immersive sound design and visuals.',
        'Optimized performance for smooth gameplay on a variety of hardware configurations.'
      ],
      externalLinks: {
        live: null,
        github: null,
        demo: 'https://www.youtube.com/watch?v=GpPjLehmRSk'
      },
      developmentPhilosophy: [
        {
          title: 'Immersion and Atmosphere',
          description: 'I prioritize creating a believable and engaging world that draws players in and keeps them challenged.'
        },
        {
          title: 'Simplicity with Complexity',
          description: 'Simple yet detailed environmental storytelling and subtle world building.'
        },
        {
          title: 'Attention to detail',
          description: 'Careful use of sound design to evoke specific emotions.'
        },
        {
          title: 'Intricate challenges',
          description: 'Limited resources and challenging encounters to create a sense of vulnerability.'
        }
      ],
      videoEmbed: 'https://www.youtube.com/embed/GpPjLehmRSk?si=ZdajTF8a1DL75SnO',
      developmentTimeline: 'January 2023 - April 2023',
      status: ['Demo Complete', 'Full Release']
    }
  },
  {
    id: 'ai-npc-designs',
    title: "AI & NPC Designs",
    description: "Intelligent and dynamic AI to enhance immersion.",
    techIcons: [<SiUnity key="unity" size={20} />, <FaCode key="csharp" size={20} />, <SiUnrealengine key="unreal" size={20} />],
    backgroundImage: slimeBoss,
    gradient: 'linear-gradient(45deg, #ef4444 0%, #f97316 100%)',
    detailedData: {
      heroTitle: "AI & NPC Designs",
      heroDescription: "Crafting intelligent and dynamic NPCs to enhance gameplay immersion and challenge.",
      roles: ['Level Designer', 'Game Designer', 'Programmer', 'Sound Designer', 'Artist'],
      screenshots: [
        { src: slimeBoss, description: 'Chiyome3DLand' },
        { src: bossGif, description: 'multiple phase Boss Designs' },
        { src: spiderBoss, description: 'Dynamic & Responsive AI Designs' },
        { src: eventGif, description: 'Enemy event driven systems' }
      ],
      features: [
        {
          title: 'Intricate Boss designs that engage players',
          description: 'A variety of boss designs that challenge players with unique mechanics.',
          image: slimeBoss
        },
        {
          title: 'Fun & complicated boss designs',
          description: 'Multiple script boss with different phases & behaviours.',
          image: bossGif
        },
        {
          title: 'Simple and intuitive Event driven system',
          description: 'Managing and spawning various types of enemies during the course of the game.',
          image: spiderBoss
        },
        {
          title: 'Drone AI with Tactical Movement',
          description: 'Drones that strategically move and attack players, adding dynamic challenges.',
          image: drone
        },
        {
          title: 'Sniper AI with Precision Targeting',
          description: 'Snipers that maintain distance and target players with high accuracy.',
          image: sniper
        },
        {
          title: 'Shielder AI with Defensive Capabilities',
          description: 'Enemies that protect allies with shields, requiring strategic approaches.',
          image: shielder
        },
        {
          title: 'Healer and Trapper AI',
          description: 'Healers that restore health to allies and trappers that set up obstacles for players.',
          image: healerTrapper
        },
        {
          title: 'Summoner AI with Minion Spawning',
          description: 'Summoners that call forth minions to overwhelm players in combat.',
          image: summoner
        },
        {
          title: 'Carrier AI with actual randomly generated 3x10 obsticles',
          description: 'Carriers that requires good movement, encouraging player movement.',
          image: carrier
        }
      ],
      technologies: [
        'Unity',
        'C#',
        'Unreal Engine',
        'Blueprints',
        'AI Behavior',
        'Dynamic Event System',
        '3D Modeling',
        'Sound Design'
      ],
      achievements: [
        'Designed and implemented AI systems that adapt dynamically to player actions.',
        'Created diverse NPC behaviors, including tactical movement, precision targeting, and defensive strategies.',
        'Developed event-driven systems for spawning and managing enemies during gameplay.',
        'Crafted unique boss designs with multiple phases and challenging mechanics.',
        'Integrated AI that enhances player immersion and engagement through responsive interactions.',
        'Optimized AI performance to ensure smooth gameplay across various scenarios.',
        'Received positive feedback from playtesters for innovative and engaging AI designs.'
      ],
      externalLinks: {
        live: null,
        github: null,
        demo: null
      },
      developmentPhilosophy: [
        {
          title: 'Immersion and Engagement',
          description: 'Creating a captivating AI that draws players into the game world.'
        },
        {
          title: 'Simplicity with Complexity',
          description: 'Simple yet Detailed and unique AI building.'
        },
        {
          title: 'Attention to detail',
          description: 'Careful use of design to evoke unique gameplay from AI.'
        },
        {
          title: 'intricate Game design per AI creation',
          description: 'Challenging, Creative & engaging encounters to create a sense of purpose to players.'
        }
      ],
      videoEmbed: null,
      developmentTimeline: 'January 2023 - April 2023',
      status: ['Demo Complete', 'Full Release']
    }
  },  
];

const GameDevHighlights = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(projectData[0].title);
  const [activePanel, setActivePanel] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance carousel for active panel
  useEffect(() => {
    if (!activePanel) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % activePanel.detailedData.screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activePanel]);

  const openPanel = (project) => {
    setActivePanel(project);
    setCurrentImageIndex(0);
    setCurrentFeatureIndex(0);
  };

  const closePanel = () => {
    setActivePanel(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activePanel.detailedData.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activePanel.detailedData.screenshots.length) % activePanel.detailedData.screenshots.length);
  };

  const nextFeature = () => {
    setCurrentFeatureIndex((prev) => (prev + 1) % activePanel.detailedData.features.length);
  };

  const prevFeature = () => {
    setCurrentFeatureIndex((prev) => (prev - 1 + activePanel.detailedData.features.length) % activePanel.detailedData.features.length);
  };

  const renderProject = (projectName) => {
    const project = projectData.find(p => p.title === projectName);
    return project ? (
      <div
        className="project-card"
        style={{ 
          backgroundImage: `url(${project.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer'
        }}
        onClick={() => openPanel(project)}
        onKeyDown={(e) => { if (e.key === 'Enter') openPanel(project); }}
        tabIndex="0"
        role="button"
      >
        <div className="title">{project.title}</div>
        <div className="project-details">
          <p>{project.description}</p>
        </div>
        <div className="tech-icons">{project.techIcons}</div>
      </div>
    ) : null;
  };

  return (
    <div className="portfolio-container">
      {/* Main Content */}
     
      {!activePanel ? (
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
                  style={{ 
                    backgroundImage: `url(${project.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => openPanel(project)}
                  onKeyDown={(e) => { if (e.key === 'Enter') openPanel(project); }}
                  tabIndex="0"
                  role="button"
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
      ) : (
        <div className="project-details-panel">
          {/* Header */}
          <div 
            className="modal-header" 
            style={{ 
              display: 'flex', 
              alignItems: 'flex-start', // align to top
              gap: '1.5rem', 
              marginTop: '2.5rem', // lower the modal header to avoid overlap with the page header
              paddingBottom: '0.5rem',
              minHeight: '56px' // ensure enough height for alignment
            }}
          >
            <button 
              className="back-button" 
              onClick={closePanel} 
              style={{ 
                marginBottom: 0, 
                marginRight: '1.5rem', 
                alignSelf: 'flex-start', // align button to top
                paddingTop: '2px', // nudge up for better alignment
                height: '40px', // match button height to title
                display: 'flex', 
                alignItems: 'center' 
              }}
            >
              <ChevronLeft /> Back
            </button>
            <h2 
              className="modal-title" 
              style={{ 
                flex: 1, 
                textAlign: 'center', 
                margin: 0, 
                alignSelf: 'flex-start', // align title to top
                lineHeight: '40px', // match button height
                fontSize: '2rem',
                fontWeight: 700
              }}
            >
              {activePanel.detailedData.heroTitle}
            </h2>
            {!isMobile && (
              <div className="role-badges" style={{ marginLeft: 'auto', alignSelf: 'flex-start', paddingTop: '2px' }}>
                {activePanel.detailedData.roles.map((role, index) => (
                  <span key={index} className="role-badge">
                    {role}
                  </span>
                ))}
              </div>
            )}
          </div>
          {/* Body */}
          <div className="modal-body">
            {/* Screenshot Carousel */}
            {activePanel.detailedData.screenshots.length > 0 && (
              <div className="section" style={{ paddingTop: '0px' }}>
                {!isMobile && (
                  <h3 className="section-title">
                    <Target />
                    Visual Showcase
                  </h3>
                )}
                <div className="visual-grid">
                  {activePanel.detailedData.screenshots.map((screenshot, index) => (
                    <div 
                      key={index} 
                      className="visual-grid-item"
                      onClick={() => setSelectedImage(screenshot)}
                    >
                      <img
                        src={screenshot.src}
                        alt={screenshot.description}
                        className="grid-thumbnail"
                      />
                      <div className="thumbnail-overlay">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full-size image modal (still as overlay for images) */}
            {selectedImage && (
              <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
                <div className="image-modal-content" onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
                  <button 
                    className="image-modal-close" 
                    onClick={() => setSelectedImage(null)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  {/* Left Arrow */}
                  <button
                    className="image-modal-arrow left"
                    aria-label="Previous image"
                    onClick={e => {
                      e.stopPropagation();
                      const currentIdx = activePanel.detailedData.screenshots.findIndex(img => img.src === selectedImage.src);
                      const prevIdx = (currentIdx - 1 + activePanel.detailedData.screenshots.length) % activePanel.detailedData.screenshots.length;
                      setSelectedImage(activePanel.detailedData.screenshots[prevIdx]);
                    }}
                  >
                    <ChevronLeft />
                  </button>
                  {/* Right Arrow */}
                  <button
                    className="image-modal-arrow right"
                    aria-label="Next image"
                    onClick={e => {
                      e.stopPropagation();
                      const currentIdx = activePanel.detailedData.screenshots.findIndex(img => img.src === selectedImage.src);
                      const nextIdx = (currentIdx + 1) % activePanel.detailedData.screenshots.length;
                      setSelectedImage(activePanel.detailedData.screenshots[nextIdx]);
                    }}
                  >
                    <ChevronRight />
                  </button>
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.description}
                    className="full-size-image"
                  />
                  <p className="image-description">{selectedImage.description}</p>
                </div>
              </div>
            )}

            {/* Hero Section */}
            <div className="hero-section" style={{ height: '180px' }}>
              <div className="hero-text">
                {activePanel.detailedData.heroDescription}
              </div>
              {(activePanel.detailedData.externalLinks.store || activePanel.detailedData.externalLinks.demo || activePanel.detailedData.externalLinks.github) && (
                <div className="action-buttons">
                  {activePanel.detailedData.externalLinks.store && (
                    <a
                      href={activePanel.detailedData.externalLinks.store}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button store-button"
                    >
                      <ExternalLink />
                      Visit Store
                    </a>
                  )}
                  {activePanel.detailedData.externalLinks.demo && (
                    <a
                      href={activePanel.detailedData.externalLinks.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button demo-button"
                    >
                      <Play />
                      Watch Demo
                    </a>
                  )}
                  {activePanel.detailedData.externalLinks.github && (
                    <a
                      href={activePanel.detailedData.externalLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button demo-button"
                    >
                      <ExternalLink />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Key Features */}
            {activePanel.detailedData.features.length > 0 && (
              <div className="section">
                {!isMobile && (
                  <h3 className="section-title">
                    <Target />
                    Key Features
                  </h3>
                )}
                <div className="features-container">
                  <div className="feature-showcase">
                    <div className="feature-image">
                      <img
                        src={activePanel.detailedData.features[currentFeatureIndex].image}
                        alt={activePanel.detailedData.features[currentFeatureIndex].title}
                      />
                    </div>
                    <div className="feature-content">
                      <h4 className="feature-title">
                        {activePanel.detailedData.features[currentFeatureIndex].title}
                      </h4>
                      <p className="feature-description">
                        {activePanel.detailedData.features[currentFeatureIndex].description}
                      </p>
                    </div>
                  </div>
                  {activePanel.detailedData.features.length > 1 && (
                    <>
                      <button className="feature-nav prev" onClick={prevFeature}>
                        <ChevronLeft />
                      </button>
                      <button className="feature-nav next" onClick={nextFeature}>
                        <ChevronRight />
                      </button>
                      <div className="feature-indicators">
                        {activePanel.detailedData.features.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentFeatureIndex(index)}
                            className={`feature-indicator ${index === currentFeatureIndex ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Technology Stack */}
            <div className="section">
              {!isMobile && (
                <h3 className="section-title">
                  <Code />
                  Technology Stack
                </h3>
              )}
              <div className="tech-grid">
                {activePanel.detailedData.technologies.map((tech, index) => (
                  <div key={index} className="tech-item">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="section">
              {!isMobile && (
                <h3 className="section-title">
                  <Trophy />
                  Key Achievements
                </h3>
              )}
              <div className="achievements-grid">
                {activePanel.detailedData.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Section */}
            {activePanel.detailedData.videoEmbed && (
              <div className="section">
                {!isMobile && (
                  <h3 className="section-title">
                    <Target />
                    Demo Video 
                  </h3>
                )}
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="400"
                    src={activePanel.detailedData.videoEmbed}
                    title="Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDevHighlights;