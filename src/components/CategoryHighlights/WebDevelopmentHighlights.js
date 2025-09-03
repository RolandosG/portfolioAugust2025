import React, { useState, useEffect } from 'react';
import { SiReact, SiTypescript, SiExpress, SiMongodb, SiAwsamplify, SiLeaflet, SiSass, SiJest } from 'react-icons/si';
import './Highlights.css';

import {  
  SiJavascript, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss3,   
  SiMongodb as SiMongoose 
} from 'react-icons/si';

import MWImage from '../../assets/images/MindWave.png';
import blackjack from '../../assets/images/blackjackBorders.png';
import portfolioShot from '../../assets/images/portfolioshot.png';

import blackjackpng from '../../assets/images/blackjack.png';
import analyticspic from '../../assets/images/analyticspic.jpg';
import unrealPic from '../../assets/images/unreal.png';
import thirdRpgGif from '../../assets/mp4/thirdrpgGif.gif';
import MindWaveph1 from '../../assets/images/MindWave_ph1.png';
import GlobalMoodMapImage from '../../assets/images/map.png';
import FirstImage from '../../assets/images/Explore.png';
import SecondImage from '../../assets/images/Profile.png';
import TrendAnalysisImage from '../../assets/images/trends.png';
import profilepng from '../../assets/images/Profile.png';


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
    id: 'mindwave-social-media',
    title: "MindWave: A Social Media Revolution",
    description: "An innovative platform that connects people globally and visualizes collective moods in real-time.",
    techIcons: [
      <SiReact key="react" size={20} />,
      <SiTypescript key="typescript" size={20} />,
      <SiExpress key="express" size={20} />,
      <SiMongodb key="mongodb" size={20} />,
      <SiAwsamplify key="aws" size={20} />,
      // <SiLeaflet key="leaflet" size={20} />,
      <SiSass key="sass" size={20} />,
      // <SiJest key="jest" size={20} />,
      <SiNodedotjs key="nodejs" size={20} />
    ],
    backgroundImage: MindWaveph1,
    gradient: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
    detailedData: {
      heroTitle: "MindWave: A Social Media Revolution",
      heroDescription: "An innovative platform that connects people globally and visualizes collective moods in real-time.",
      roles: ['Developer', 'Designer', 'Data Analyst', 'UI/UX Specialist', 'Project Manager'],
      screenshots: [
        { src: MindWaveph1, description: 'Welcome to MindWave: Connect Globally' },
        { src: GlobalMoodMapImage, description: 'Explore Global Mood Mapping' }
      ],
      features: [
        {
          title: 'Global Mood Mapping',
          description: 'Visualize the collective mood of users worldwide in real-time.',
          image: GlobalMoodMapImage
        },
        {
          title: 'Real-Time Interaction',
          description: 'Engage with the community instantly through live updates.',
          image: FirstImage
        },
        {
          title: 'Communicate with more than just words',
          description: 'Interactions are open to interpertation, allowing users to express themselves in unique ways.',
          image: profilepng
        }
      ],
      technologies: [
        'React', 'TypeScript', 'Express', 'MongoDB', 'AWS Amplify', 'Leaflet', 'Sass', 'Jest', 'Node.js', 'WebSocket'
      ],
      achievements: [
        'Successfully implemented real-time global mood mapping.',
        'Optimized WebSocket communication for seamless updates.',
        'Enhanced user experience with an interactive map.',
        'Developed a scalable backend architecture.',
        'Integrated advanced trend analysis features.',
        'Created a visually appealing and responsive UI.',
        'Achieved high user engagement and positive feedback.'
      ],
      externalLinks: {
        live: '',
        github: 'https://github.com/RolandosG/SM_MindWave',
        demo: ''
      },
      developmentTimeline: 'August 2023 - January 2024',
      status: ['Demo Complete', 'Full Release']
    }
  },
  {
    id: 'blackjack-gambling',
    title: "Black-Jack Safety Gaming Site",
    description: "A web-based platform designed to provide a safe and responsible gaming experience, focusing on Blackjack and other casino games",
    techIcons: [
      <SiReact key="react" size={20} />,
      <SiMongodb key="mongodb" size={20} />,
      <SiJavascript key="javascript" size={20} />,
      <SiNodedotjs key="nodejs" size={20} />,
      <SiExpress key="express" size={20} />,
      <SiHtml5 key="html5" size={20} />,
      <SiCss3 key="css3" size={20} />
    ],
    backgroundImage: blackjackpng,
    gradient: 'linear-gradient(45deg, #1a1a2e 0%, #16213e 100%)',
    detailedData: {
      heroTitle: "Black-Jack Safety Gaming Site",
      heroDescription: "A web-based platform designed to provide a safe and responsible gaming experience, focusing on Blackjack and other casino games",
      roles: ['Team Manager', 'UI/UX Designer', 'Programmer', 'Jira Manager'],
      screenshots: [
        { src: blackjackpng, description: 'An Engaging Blackjack website' }
      ],
      features: [
        {
          title: 'Stylish simplistic friendly user design',
          description: 'Simplistic and low poly world design for a unique aesthetic.',
          image: blackjackpng
        },
        {
          title: 'Fun & engaging gameplay systems',
          description: 'A variety of gameplay systems that keep players engaged.',
          image: analyticspic
        }
      ],
      technologies: [
        'React', 'MongoDB', 'Mongoose', 'Javascript (ES6+)', 'Node.js', 'Express.js', 'HTML5', 'CSS3'
      ],
      achievements: [
        'Developed a fully functional Blackjack game with real-time multiplayer capabilities.',
        'Implemented a user-friendly interface with smooth animations and transitions.',
        'Optimized performance for seamless gameplay across devices.',
        'Integrated secure user authentication and data management.',
        'Utilized modern web technologies to enhance user experience.'
      ],
      externalLinks: {
        live: '',
        github: 'https://github.com/RolandosG/PRJ666-BlackJack-main',
        demo: ''
      },
      videoEmbed: null,
      developmentTimeline: 'January 2023 - August 2023',
      status: ['Complete', 'Full Release']
    }
  },
  {
    id: 'portfolio',
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing development projects and skills",
    techIcons: [
      <SiReact key="react" size={20} />
    ],
    backgroundImage: portfolioShot,
    gradient: 'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
    detailedData: {
      heroTitle: "Portfolio Website",
      heroDescription: "A modern, responsive portfolio website designed to showcase development projects, skills, and professional experience.",
      roles: ['Frontend Developer', 'UI/UX Designer', 'Web Designer'],
      screenshots: [
        { src: portfolioShot, description: 'Portfolio Website Interface' }
      ],
      features: [
        {
          title: 'Modern Design',
          description: 'Clean, modern interface with smooth animations and transitions.',
          image: portfolioShot
        },
        {
          title: 'Responsive Layout',
          description: 'Fully responsive design that works on all devices.',
          image: portfolioShot
        },
        {
          title: 'Interactive Elements',
          description: 'Engaging interactive components and smooth user experience.',
          image: portfolioShot
        }
      ],
      technologies: [
        'React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design',
        'Animation', 'Modern Web Standards'
      ],
      achievements: [
        'Created modern, professional portfolio interface',
        'Implemented responsive design for all devices',
        'Added smooth animations and transitions',
        'Optimized for performance and accessibility',
        'Showcased projects with detailed information'
      ],
      externalLinks: {
        live: 'http://localhost:3000/Portfolio-Site',
        github: '',
        demo: ''
      },
      videoEmbed: null
    }
  },
];

const WebDevHighlights = () => {
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
          <div className="project-grid vertical-layout">
            {/* Card 0: wide1 (top left) */}
            <div
              className="project-card wide1"
              onClick={() => openPanel(projectData[0])}
              onKeyDown={e => { if (e.key === 'Enter') openPanel(projectData[0]); }}
              tabIndex="0"
              role="button"
              key={0}
            >
              <div className="project-image-preview">
                <img src={projectData[0].backgroundImage} alt={projectData[0].title} />
              </div>
              <div className="project-info">
                <div className="title">{projectData[0].title}</div>
                <div className="project-features">
                  <strong>Key Feature:</strong> {projectData[0].detailedData.features[0]?.title}: {projectData[0].detailedData.features[0]?.description}
                </div>
                <div className="tech-icons">{projectData[0].techIcons}</div>
              </div>
            </div>
            {/* Card 1: short1 (top right) */}
            <div
              className="project-card short1"
              onClick={() => openPanel(projectData[1])}
              onKeyDown={e => { if (e.key === 'Enter') openPanel(projectData[1]); }}
              tabIndex="0"
              role="button"
              key={1}
            >
              <div className="project-image-preview">
                <img src={projectData[1].backgroundImage} alt={projectData[1].title} />
              </div>
              <div className="project-info">
                <div className="title">{projectData[1].title}</div>
                <div className="project-features">
                  <strong>Key Feature:</strong> {projectData[1].detailedData.features[0]?.title}: {projectData[1].detailedData.features[0]?.description}
                </div>
                <div className="tech-icons">{projectData[1].techIcons}</div>
              </div>
            </div>
            {/* Card 2: short2 (bottom left) */}
            <div
              className="project-card short2"
              onClick={() => openPanel(projectData[2])}
              onKeyDown={e => { if (e.key === 'Enter') openPanel(projectData[2]); }}
              tabIndex="0"
              role="button"
              key={2}
            >
              <div className="project-image-preview">
                <img src={projectData[2].backgroundImage} alt={projectData[2].title} />
              </div>
              <div className="project-info">
                <div className="title">{projectData[2].title}</div>
                <div className="project-features">
                  <strong>Key Feature:</strong> {projectData[2].detailedData.features[0]?.title}: {projectData[2].detailedData.features[0]?.description}
                </div>
                <div className="tech-icons">{projectData[2].techIcons}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="project-details-panel">
          <div className="modal-header" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginTop: '2.5rem', paddingBottom: '0.3rem', minHeight: '40px' }}>
            <button className="back-button" onClick={closePanel} style={{ marginBottom: 0, marginRight: '1.2rem', alignSelf: 'flex-start', paddingTop: '2px', height: '32px', display: 'flex', alignItems: 'center' }}>
              <ChevronLeft /> Back
            </button>
            <h2 className="modal-title" style={{ flex: 1, textAlign: 'center', margin: 0, alignSelf: 'flex-start', lineHeight: '32px', fontSize: '1.2rem', fontWeight: 700 }}>
              {activePanel.detailedData.heroTitle}
            </h2>
            {!isMobile && (
              <div className="role-badges" style={{ marginLeft: 'auto', alignSelf: 'flex-start', paddingTop: '2px' }}>
                {activePanel.detailedData.roles.map((role, index) => (
                  <span key={index} className="role-badge">{role}</span>
                ))}
              </div>
            )}
          </div>
          <div className="modal-body">
            <div className="modal-grid">
              {/* Visual Showcase Row */}
              <div className="modal-row visual-showcase-row">
                {activePanel.detailedData.screenshots.length > 0 && (
                  <div className="section" style={{ paddingTop: '0px' }}>
                    {!isMobile && (<h3 className="section-title"><Target />Visual Showcase</h3>)}
                    <div className="visual-grid">
                      {activePanel.detailedData.screenshots.map((screenshot, index) => (
                        <div key={index} className="visual-grid-item" onClick={() => setSelectedImage(screenshot)}>
                          <img src={screenshot.src} alt={screenshot.description} className="grid-thumbnail" />
                          <div className="thumbnail-overlay">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Full-size image modal overlay */}
                {selectedImage && (
                  <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="image-modal-content" onClick={e => e.stopPropagation()} style={{ position: 'relative' }}>
                      <button className="image-modal-close" onClick={() => setSelectedImage(null)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                      <button className="image-modal-arrow left" aria-label="Previous image" onClick={e => {e.stopPropagation(); const currentIdx = activePanel.detailedData.screenshots.findIndex(img => img.src === selectedImage.src); const prevIdx = (currentIdx - 1 + activePanel.detailedData.screenshots.length) % activePanel.detailedData.screenshots.length; setSelectedImage(activePanel.detailedData.screenshots[prevIdx]);}}><ChevronLeft /></button>
                      <button className="image-modal-arrow right" aria-label="Next image" onClick={e => {e.stopPropagation(); const currentIdx = activePanel.detailedData.screenshots.findIndex(img => img.src === selectedImage.src); const nextIdx = (currentIdx + 1) % activePanel.detailedData.screenshots.length; setSelectedImage(activePanel.detailedData.screenshots[nextIdx]);}}><ChevronRight /></button>
                      <img src={selectedImage.src} alt={selectedImage.description} className="full-size-image" />
                      <p className="image-description">{selectedImage.description}</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Hero Section Row */}
              <div className="modal-row hero-section-row">
                <div className="hero-section" style={{ height: '120px' }}>
                  <div className="hero-text">{activePanel.detailedData.heroDescription}</div>
                  {(activePanel.detailedData.externalLinks.live || activePanel.detailedData.externalLinks.github || activePanel.detailedData.externalLinks.demo) && (
                    <div className="action-buttons">
                      {activePanel.detailedData.externalLinks.live && (<a href={activePanel.detailedData.externalLinks.live} target="_blank" rel="noopener noreferrer" className="action-button live-button"><ExternalLink />View Live</a>)}
                      {activePanel.detailedData.externalLinks.github && (<a href={activePanel.detailedData.externalLinks.github} target="_blank" rel="noopener noreferrer" className="action-button github-button"><Code />View Code</a>)}
                      {activePanel.detailedData.externalLinks.demo && (<a href={activePanel.detailedData.externalLinks.demo} target="_blank" rel="noopener noreferrer" className="action-button demo-button"><Play />Watch Demo</a>)}
                    </div>
                  )}
                </div>
              </div>
              {/* Key Features Row */}
              <div className="modal-row key-features-row">
                {activePanel.detailedData.features.length > 0 && (
                  <div className="section">
                    {!isMobile && (<h3 className="section-title"><Target />Key Features</h3>)}
                    <div className="features-grid">
                      {activePanel.detailedData.features.map((feature, index) => (
                        <div key={index} className="feature-card">
                          <div className="feature-image">
                            <img src={feature.image} alt={feature.title} />
                          </div>
                          <div className="feature-content">
                            <h4 className="feature-title">{feature.title}</h4>
                            <p className="feature-description">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Technology Stack Row */}
              <div className="modal-row tech-stack-row">
                <div className="section">
                  {!isMobile && (<h3 className="section-title"><Code />Technology Stack</h3>)}
                  <div className="tech-grid">{activePanel.detailedData.technologies.map((tech, index) => (<div key={index} className="tech-item">{tech}</div>))}</div>
                </div>
              </div>
              {/* Achievements Row */}
              <div className="modal-row achievements-row">
                <div className="section">
                  {!isMobile && (<h3 className="section-title"><Trophy />Key Achievements</h3>)}
                  <div className="achievements-grid">{activePanel.detailedData.achievements.map((achievement, index) => (<div key={index} className="achievement-item"><p>{achievement}</p></div>))}</div>
                </div>
              </div>
              {/* Demo Video Row */}
              <div className="modal-row demo-video-row">
                {activePanel.detailedData.videoEmbed && (
                  <div className="section">
                    {!isMobile && (<h3 className="section-title"><Target />Demo Video</h3>)}
                    <div className="video-container"><iframe width="100%" height="180" src={activePanel.detailedData.videoEmbed} title="Demo Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDevHighlights;