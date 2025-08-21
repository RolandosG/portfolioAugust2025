import React, { useState, useEffect } from 'react';
import { FaUnity } from "react-icons/fa";
import './Highlights.css';

import { SiPuppeteer, SiReact, SiJavascript, SiNodedotjs, SiExpress } from 'react-icons/si';
import { FaGamepad, FaCode, FaRobot } from 'react-icons/fa';

// Import images (replace with your actual image imports)
import analyticspic from '../../assets/images/analyticspic.jpg';
import puppeteer from '../../assets/images/puppeteer.png';
import wowAddonImage from '../../assets/images/wowAddonImage.png';
import robotC from '../../assets/images/robotC.png';

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
    id: 'browser-automation-tool',
    title: "Browser Automation Tool",
    description: "A simple to use automation application to browse through media thoroughly with advanced automation features",
    techIcons: [<SiPuppeteer key="puppeteer" size={20} />, <SiReact key="react" size={20} />, <SiJavascript key="js" size={20} />],
    backgroundImage: analyticspic,
    gradient: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
    detailedData: {
      heroTitle: "Browser Automation Tool",
      heroDescription: "A simple to use automation application to browse through media thoroughly. This tool is designed to automate the process of browsing and interacting with various media platforms.",
      roles: ['Developer', 'UI/UX Designer', 'Programmer'],
      screenshots: [
        { src: analyticspic, description: 'A Simple to use automation application to browse through media thoroughly' }
      ],
      features: [
        {
          title: 'Simple to use with complexity',
          description: 'A user-friendly interface that allows users to easily navigate and utilize the automation features without overwhelming complexity.',
          image: puppeteer
        }
      ],
      technologies: [
        'Puppeteer', 'React', 'JavaScript', 'Node.js', 'Express.js'
      ],
      achievements: [
        'Picked up an abandoned application and made it functional',
        'Improved user interface for better usability',
        'Implemented advanced automation features',
        'Enhanced performance and reliability',
        'Achieved a 50% reduction in manual browsing time',
        'Integrated with multiple media platforms for seamless browsing',
        'Ensured cross-browser compatibility',
        'Implemented robust error handling and logging',
        'Achieved a 95% success rate in automated tasks',
        'Received positive feedback from users for ease of use and functionality'
      ],
      externalLinks: {
        live: '',
        github: 'https://github.com/RolandosG/Advanced-Automation-for-form-submission-and-api-interaction',
        demo: ''
      },
      developmentPhilosophy: [
        {
          title: 'Challenge',
          description: 'I wanted to challenge myself to create a tool that simplifies complex tasks while maintaining a user-friendly interface. The goal was to automate mundane browsing tasks, making it easier for users to focus on content rather than navigation.'
        },
        {
          title: 'Simplicity with Complexity',
          description: 'The design philosophy revolves around creating a simple yet powerful tool. The interface is designed to be intuitive, allowing users to easily navigate through features while still providing advanced functionalities for those who need them.'
        },
        {
          title: 'Attention to detail',
          description: 'Every aspect of the tool, from the user interface to the underlying code, is crafted with meticulous attention to detail. This ensures a seamless user experience and high performance, making the tool reliable and efficient.'
        },
        {
          title: 'Intricate challenges',
          description: 'The project presented intricate challenges, such as ensuring cross-browser compatibility and implementing robust error handling. These challenges were met with innovative solutions, resulting in a tool that is both reliable and versatile.'
        }
      ],
      developmentTimeline: 'April 2024 - May 2024',
      status: ['Complete', 'Full Release']
    }
  },
  {
    id: 'compare-ilvl-tooltip',
    title: "Compare Item Level Tooltip",
    description: "A World of Warcraft Addon that enhances the in-game item comparison experience with detailed tooltips",
    techIcons: [<FaGamepad key="wow" size={20} />, <FaCode key="lua" size={20} />],
    backgroundImage: wowAddonImage,
    gradient: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
    detailedData: {
      heroTitle: "Compare Item Level Tooltip",
      heroDescription: "A World of Warcraft Addon that enhances the in-game item comparison experience by providing detailed item level tooltips, allowing players to make informed decisions about their gear FAST.",
      roles: ['Developer', 'Designer', 'Creator', 'Programmer'],
      screenshots: [
        { src: wowAddonImage, description: 'A simple yet intuitive addon' }
      ],
      features: [
        {
          title: 'Simple text based approach',
          description: 'A intuitive and easy to use addon that provides a simple text based approach to item level comparison.',
          image: wowAddonImage
        }
      ],
      technologies: [
        'WoW Addon Development', 'Lua Programming', 'World of Warcraft API',
        'CurseForge Integration', 'In-Game Tooltip Enhancement', 'User Interface Design',
        'Player Experience Optimization', 'Game Addon Development',
        'World of Warcraft Community Engagement', 'Add-on Distribution'
      ],
      achievements: [
        'Over 200 downloads on CurseForge',
        'Removed the need for complex item level comparison',
        'Improved player decision-making in gear selection',
        'Enhanced in-game item tooltip experience',
        'Streamlined item level comparison process',
        'Increased player engagement with gear management',
        'Facilitated informed gear decisions',
        'Simplified item level evaluation',
        'Boosted player satisfaction with gear upgrades',
        'Contributed to the WoW addon community'
      ],
      developmentPhilosophy: [
        {
          title: 'Immersion',
          description: 'We prioritized creating a believable and engaging website that draws players in and keeps them engaged like the real thing.'
        },
        {
          title: 'Simplicity with Complexity',
          description: 'Simple yet Detailed design driving players to look at their progress and how it affects their gaming habits.'
        },
        {
          title: 'Attention to detail',
          description: 'Careful use of design to engage players minimalistically and drawing away from the use of actual gambling site designs.'
        },
        {
          title: 'Intricate challenges',
          description: 'Achievements and challenges to create a sense of accomplishment.'
        }
      ],
      externalLinks: {
        store: 'https://www.curseforge.com/wow/addons/compareilvltooltip',
        github: 'https://github.com/RolandosG/CompareIlvlToolTip_Addon',
      },
      developmentTimeline: 'September 2024 - October 2024',
      status: ['Complete', 'Full Release']
    }
  },
  {
    id: 'exploration-machine-robotics',
    title: "Exploration Machine Robotics",
    description: "A project showcasing robotic sonar exploration and data analysis in a realistic robotics environment",
    techIcons: [<FaRobot key="robot" size={20} />, <FaCode key="c" size={20} />],
    backgroundImage: robotC,
    gradient: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
    detailedData: {
      heroTitle: "Exploration Machine Robotics",
      heroDescription: "A project showcasing robotic sonar exploration and data analysis, designed to simulate a realistic robotics environment.",
      roles: ['Developer', 'Programmer'],
      screenshots: [
        { src: robotC, description: 'Robot Relocating for certain tasks using sonar technology' }
      ],
      features: [
        {
          title: 'Robotic Sonar Exploration',
          description: 'Utilizes advanced sonar technology to navigate and explore environments.',
          image: robotC
        }
      ],
      technologies: [
        'C'
      ],
      achievements: [
        'Successfully implemented robotic sonar navigation',
        'Developed a user-friendly interface for data visualization',
        'Integrated real-time data processing for efficient exploration',
        'Optimized algorithms for enhanced robotic performance',
        'Achieved seamless communication between robotic components',
        'Conducted extensive testing to ensure reliability and accuracy',
        'Created a comprehensive documentation for future reference'
      ],
      externalLinks: {
        live: 'https://www.youtube.com/watch?v=a51OEI5wD8A',
        github: 'https://github.com/RolandosG/exploration-machine',
        demo: 'https://www.youtube.com/watch?v=a51OEI5wD8A'
      },
      developmentPhilosophy: [
        {
          title: 'Clear Code',
          description: 'Code that is easy to read and understand, making it accessible for future developers.'
        },
        {
          title: 'Simplicity with Complexity',
          description: 'A simple user interface that hides complex functionality, allowing users to focus on the task at hand.'
        },
        {
          title: 'Attention to detail',
          description: 'Every aspect of the project is meticulously crafted, from the user interface to the underlying code.'
        },
        {
          title: 'Robot Task',
          description: 'The robot is designed to relocate for certain tasks using sonar technology, showcasing its advanced capabilities.'
        }
      ],
      videoEmbed: 'https://www.youtube.com/embed/a51OEI5wD8A?si=J0Eky2VvZxKb0HLz',
      developmentTimeline: 'January 2023 - August 2023',
      status: ['Complete', 'Full Release']
    }
  }
];

const SoftwareQAHighlights = () => {
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

      {/* Modal Overlay */}
      {activePanel && (
        <div className="modal-overlay active" onClick={closePanel}>
          {/* Modal Content */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div 
              className="modal-header"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '0px',
                padding: '0.5rem 2.5rem 0.5rem 2.5rem',
                minHeight: '48px',
                background: 'rgba(30, 41, 59, 0.18)',
                backdropFilter: 'blur(12px)',
                borderRadius: '18px',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
                width: 'calc(100% - 5rem)',
                left: 0,
                right: 0,
                position: 'absolute',
                zIndex: 20
              }}
            >
              <button
                className="back-button"
                onClick={closePanel}
                style={{
                  marginBottom: 0,
                  marginRight: '1.5rem',
                  alignSelf: 'center',
                  padding: '0 18px 0 0',
                  height: '40px',
                  minWidth: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: 'rgba(30,41,59,0.22)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                  transition: 'background 0.2s, box-shadow 0.2s'
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(30,41,59,0.32)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(30,41,59,0.22)'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '6px'}}>
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
                Back
              </button>
              <h2
                className="modal-title"
                style={{
                  flex: 1,
                  textAlign: 'center',
                  margin: 0,
                  alignSelf: 'center',
                  lineHeight: '40px',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '0.01em',
                  textShadow: '0 2px 8px rgba(0,0,0,0.10)'
                }}
              >
                {activePanel.detailedData.heroTitle}
              </h2>
              {!isMobile && (
                <div className="role-badges" style={{ marginLeft: 'auto', alignSelf: 'center', paddingTop: '2px' }}>
                  {activePanel.detailedData.roles.map((role, index) => (
                    <span key={index} className="role-badge">
                      {role}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Body */}
            <div className="modal-body">

              {/* Screenshot Carousel */}
{activePanel.detailedData.screenshots.length > 0 && (
  <div className="section">
    {!isMobile && (
      <h3 className="section-title">
        <Target />
        Visual Showcase
      </h3>
    )}
    <div className="visual-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '1.5rem',
      alignItems: 'center',
      justifyItems: 'center',
      width: '100%'
    }}>
      {activePanel.detailedData.screenshots.map((screenshot, index) => (
        <div 
          key={index} 
          className="visual-grid-item"
          style={{
            width: '100%',
            maxWidth: '260px',
            aspectRatio: '16/10',
            background: 'rgba(30,41,59,0.10)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative'
          }}
          onClick={() => setSelectedImage(screenshot)}
        >
          <img
            src={screenshot.src}
            alt={screenshot.description}
            className="grid-thumbnail"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              background: 'transparent',
              transition: 'transform 0.18s',
              borderRadius: '10px'
            }}
          />
          <div className="thumbnail-overlay" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(30,41,59,0.08)',
            opacity: 0,
            transition: 'opacity 0.18s',
            pointerEvents: 'none'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

{/* Full-size image modal */}
{selectedImage && (
  <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
      <button 
        className="image-modal-close" 
        onClick={() => setSelectedImage(null)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
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
              {/* <div 
                  className="hero-banner"
                >
                  <div className="hero-overlay"></div>
                  <span className="hero-title">{activePanel.title}
                  </span>
                </div> */}
             <div className="hero-section" style={{ height: '180px' }}>
    <p className="hero-description">
        <div className="hero-text">
            {activePanel.detailedData.heroDescription}
        </div>
    </p>
    
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
                    href={activePanel.detailedData.externalLinks.demo}
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
        </div>
      )}
    </div>
  );
};

export default SoftwareQAHighlights;