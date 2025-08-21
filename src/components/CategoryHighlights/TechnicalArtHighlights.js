import React, { useState, useEffect } from 'react';
import { SiReact, SiUnrealengine } from 'react-icons/si';
import { FaUnity } from "react-icons/fa";
import './Highlights.css';

import coverRetroFX from '../../assets/images/RetroFXPhotos/Cover.png';
import BeforeAndAfter from '../../assets/images/RetroFXPhotos/Before&After.png';
import fogImage from '../../assets/images/RetroFXPhotos/FOG.png';
import HauntedHouseImage from '../../assets/images/RetroFXPhotos/HauntedHouse.png';
import OldSchool from '../../assets/images/RetroFXPhotos/OldSchool.png';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import waterShader from '../../assets/mp4/wave2.gif';
import PostProcess01 from '../../assets/mp4/PostProcess01.gif';
import softwarePhoto from '../../assets/images/SoftwarePhoto.jpg';


// water shader
import wave1 from '../../assets/mp4/wave1.gif';
import wave3 from '../../assets/mp4/wave3.gif';
import causticLighting1 from '../../assets/mp4/CausticLighting1.gif';
import causticLighting2 from '../../assets/mp4/CausticLighting2.gif';

// NarrativeFX
import narrativeDemoMap from '../../assets/images/NarrativeFXPhotos/narrativeDemoMap.jpg';
import narrativeEffect02 from '../../assets/images/NarrativeFXPhotos/narrativeEffect02.jpg';
import narrativeEffects03 from '../../assets/images/NarrativeFXPhotos/NarrativeEffects03.jpg';
import narrativeEffects05 from '../../assets/images/NarrativeFXPhotos/NarrativeEffects05.jpg';
import narrativeEffects06 from '../../assets/images/NarrativeFXPhotos/NarrativeEffects06.jpg';
import narrativeEffects08 from '../../assets/images/NarrativeFXPhotos/NarrativeEffects08.jpg';
import narrativeEffects09 from '../../assets/images/NarrativeFXPhotos/NarrativeEffects09.jpg';
import narrativePoster01 from '../../assets/images/NarrativeFXPhotos/narrativePoster01.jpg';
import narrativeSettings from '../../assets/images/NarrativeFXPhotos/NarrativeSettings.jpg';

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
    id: 'retro-fx',
    title: "RetroFX Tools",
    description: "A collection of retro aesthetic shaders and post-processing effects for Unreal Engine 5",
    techIcons: [<SiUnrealengine key="unreal" size={20} />],
    backgroundImage: coverRetroFX,
    gradient: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
    detailedData: {
      heroTitle: "RetroFX Toolkit",
      heroDescription: "A collection of retro aesthetic shaders and post-processing effects for Unreal Engine 5, designed to enhance the visual appeal of your projects with a unique classical retro style.",
      roles: ['Developer', 'Designer', 'Programmer'],
      screenshots: [
        { src: coverRetroFX, description: 'RetroFX Cover' },
        { src: BeforeAndAfter, description: 'Before and After Effects' },
        { src: HauntedHouseImage, description: 'Haunted House Effect' },
        { src: OldSchool, description: 'Old School Retro Effect' },
        { src: fogImage, description: 'Dynamic Fog Effect' }
      ],
      features: [
        {
          title: 'Unique classical retro aesthetic',
          description: 'A collection of shaders and post-processing effects that create a unique retro style.',
          image: BeforeAndAfter
        },
        {
          title: 'Engaging and immersive design',
          description: 'A design that draws players in and keeps them engaged.',
          image: HauntedHouseImage
        },
        {
          title: 'Variety of retro effects',
          description: 'Includes effects like CRT scanlines, VHS distortion, and more.',
          image: OldSchool
        },
        {
          title: 'Dynamic lighting and atmospheric effects',
          description: 'Real-time lighting and atmospheric effects for an immersive experience.',
          image: fogImage
        }
      ],
      technologies: [
        'Unreal Engine 5', 'Blueprints', 'HLSL Shaders', 'Post-Processing Effects',
        'Retro Aesthetic Design', 'Real-time Rendering', 'Shader Development',
        'Material Editor', 'Performance Optimization', 'Visual Effects'
      ],
      achievements: [
        'Successfully launched on Fab.com',
        'Diverse range of retro effects implemented',
        'Enhanced visual appeal of projects',
        'Improved player engagement through unique aesthetics',
        'Achieved high performance with optimized shaders'
      ],
      externalLinks: {
        store: 'https://www.fab.com/listings/168e3d8e-4103-4b62-beb3-b1529459f419',
        demo: 'https://www.youtube.com/watch?v=AcO3RVv_1lE'
      },
      videoEmbed: 'https://www.youtube.com/embed/AcO3RVv_1lE?si=CipGUprny5GwCdnB'
    }
  },
  {
    id: 'narrative-post',
    title: "Narrative PostProcessing",
    description: "Advanced post-processing effects for storytelling and narrative enhancement",
    techIcons: [<SiUnrealengine key="unreal" size={20} />],
    backgroundImage: PostProcess01,
    gradient: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
    detailedData: {
      heroTitle: "Narrative PostProcessing",
      heroDescription: "Advanced post-processing effects designed to enhance storytelling and create immersive narrative experiences.",
      roles: ['Technical Artist', 'Shader Developer'],
      screenshots: [
        { src: PostProcess01, description: 'Post Processing Effects' },
        { src: narrativeDemoMap, description: 'Demo Map with Post Processing' },
        { src: narrativeEffect02, description: 'Narrative Effect 02' },
        { src: narrativeEffects03, description: 'Narrative Effects 03' },
        { src: narrativeEffects05, description: 'Narrative Effects 05' },
        { src: narrativeEffects06, description: 'Narrative Effects 06' },
        { src: narrativeEffects08, description: 'Narrative Effects 08' },
        { src: narrativeEffects09, description: 'Narrative Effects 09' },
        { src: narrativePoster01, description: 'Poster Design' },
        { src: narrativeSettings, description: 'Settings for Post Processing' }
      ],
      features: [
        {
          title: 'Story-driven effects',
          description: 'Post-processing effects that enhance narrative storytelling.',
          image: PostProcess01
        },
        {
          title: 'Over 10 unique effects',
          description: 'A diverse range of effects designed for various narrative contexts.',
          image: narrativePoster01
        },
        {
          title: 'Customizable parameters',
          description: 'Allows developers to adjust effects for specific storytelling needs.',
          image: narrativeSettings
        },
        {
          title: 'Immersive demo map',
          description: 'A demo map showcasing the effects in a narrative context.',
          image: narrativeDemoMap
        },
        {
          title: 'Dynamic post-processing effects',
          description: 'Real-time effects that adapt to the narrative context.',
          image: narrativeEffect02
        },
        {
          title: 'Customizable settings',
          description: 'Allows developers to tweak effects for specific narrative needs.',
          image: narrativeSettings
        }
      ],
      technologies: ['Unreal Engine 5', 'Post-Processing', 'Narrative Design','Shader Development',
        'Visual Effects', 'Real-time Rendering', 'Material Editor', 'Blueprints', 'HLSL', 'Performance Optimization'],
      achievements: ['Enhanced storytelling through visual effects',
        'Developed a diverse range of narrative effects',
        'Improved player immersion with dynamic effects',
        'Optimized performance for real-time rendering',
        'Created a user-friendly interface for effect customization',
        'Showcased the potential of post-processing in narrative design'
      ],
      externalLinks: {
        store: 'https://www.fab.com/listings/7f8675a5-e21e-4208-a77c-5fd94330adfd',
        demo: 'https://www.youtube.com/watch?v=do6CR3QBNgA'
      },
      videoEmbed: 'https://www.youtube.com/embed/do6CR3QBNgA?si=I0WqybsENODpFlla'
    }
  },
  {
    id: 'water-shaders',
    title: "Water Shaders",
    description: "A showcase of advanced water shader techniques using Grestner waves in Unreal Engine 5",
    techIcons: [<SiUnrealengine key="unreal" size={20} />],
    backgroundImage: waterShader,
    gradient: 'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
    detailedData: {
      heroTitle: "Water Shaders",
      heroDescription: "A showcase of advanced water shader techniques using Grestner waves in Unreal Engine 5.",
      roles: ['HLSL Developer', 'Designer', 'Programmer'],
      screenshots: [
        { src: waterShader, description: 'Water simulation using grestner waves' },
        { src: wave3, description: 'Realistic water shader with advanced effects' },
        { src: wave1, description: 'Dynamic water movement and reflections' },
        { src: causticLighting1, description: 'Caustic lighting effects on water surface' },
        { src: causticLighting2, description: 'Enhanced caustic lighting for realism' }
      ],
      features: [
        {
          title: 'Stylish simplistic water design',
          description: 'Designed with realism in mind for a unique aesthetic.',
          image: waterShader
        },
        {
          title: 'Engaging wave simulation system',
          description: 'Utilizes Grestner waves for realistic water movement.',
          image: wave3
        },
        {
          title: 'Advanced water shader',
          description: 'Combines multiple techniques for a visually stunning effect.',
          image: wave1
        },
        {
          title: 'Caustic lighting effects',
          description: 'Realistic light interaction with water surfaces.',
          image: causticLighting1
        },
        {
          title: 'Dynamic reflections and refractions',
          description: 'Enhances immersion with realistic water behavior.',
          image: causticLighting2
        }
      ],
      technologies: [
        'Unreal Engine 5', 'Blueprints', 'Grestner Waves', 'Water Simulation', 
        'Shader Development', 'Real-time Rendering', 'Visual Effects', 'HLSL'
      ],
      achievements: [
        'Developed a unique water simulation system using Grestner waves',
        'Created a visually appealing water shader with realistic movement',
        'Integrated advanced visual effects for enhanced realism',
        'Optimized shader performance for real-time rendering',
        'Implemented user-friendly parameters for easy interaction',
        'Achieved a balance between aesthetics and performance in water rendering',
        'Demonstrated the potential of Grestner waves in game development'
      ],
      externalLinks: {
        live: '',
        github: '',
        demo: ''
      },
      videoEmbed: null
    }
  },
  {
    id: 'tools',
    title: "Tools",
    description: "Development tools and utilities for game development",
    techIcons: [],
    backgroundImage: softwarePhoto,
    gradient: 'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
    detailedData: {
      heroTitle: "Development Tools",
      heroDescription: "A collection of development tools and utilities to streamline game development workflows.",
      roles: ['Tool Developer', 'Technical Artist'],
      screenshots: [
        { src: softwarePhoto, description: 'Development Tools' }
      ],
      features: [
        {
          title: 'Development utilities',
          description: 'Tools to enhance development workflow efficiency.',
          image: softwarePhoto
        }
      ],
      technologies: ['Python', 'C++', 'Tool Development'],
      achievements: ['Streamlined development workflows'],
      externalLinks: {},
      videoEmbed: null
    }
  }
];

const TechnicalArtHighlights = () => {
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
                alignItems: 'flex-start',
                gap: '1.5rem',
                marginTop: '0px', // raise header even further up
                paddingBottom: '0.5rem',
                minHeight: '56px',
                background: 'rgba(30, 41, 59, 0.15)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <button
                className="back-button"
                onClick={closePanel}
                style={{
                  marginBottom: 0,
                  marginRight: '1.5rem',
                  alignSelf: 'flex-start',
                  paddingTop: '2px',
                  height: '40px',
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
                  alignSelf: 'flex-start',
                  lineHeight: '40px',
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

            {/* Modal Body */}
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

{/* Full-size image modal (with navigation arrows, like GameDevelopmentHighlights) */}
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
              {/* <div 
                  className="hero-banner"
                >
                  <div className="hero-overlay"></div>
                  <span className="hero-title">{activePanel.title}
                  </span>
                </div> */}
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
        </div>
      )}
    </div>
  );
};

export default TechnicalArtHighlights;