import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header'
import './HorrorGamePage.css';
import SCREENSHOT01 from '../../../assets/images/fpsPhotos/SCREENSHOT01.PNG';
import SCREENSHOT02 from '../../../assets/images/fpsPhotos/SCREENSHOT02.PNG';
import SCREENSHOT03 from '../../../assets/images/fpsPhotos/SCREENSHOT03.PNG';
import SCREENSHOT04 from '../../../assets/images/fpsPhotos/SCREENSHOT04.PNG';
import dynamicEvent from '../../../assets/mp4/dynamiceventsshowcase.gif';
import dynamicEvent2  from '../../../assets/mp4/dynamiceventsshowcasetwo.gif';
import UIShowcase from '../../../assets/mp4/UIShowcase.gif';
import spiderEnemy from '../../../assets/mp4/spiderEnemy.gif';

import gameshotfeature01 from '../../../assets/images/fpsPhotos/GameshotFeature01.png';
import gameshotfeature02 from '../../../assets/images/fpsPhotos/GameshotFeature02.png';
import gameshotfeature03 from '../../../assets/images/fpsPhotos/GameshotFeature03.png';
import gameshotfeature04 from '../../../assets/images/fpsPhotos/GameshotFeature04.png';
import gameshotfeature05 from '../../../assets/images/fpsPhotos/GameshotFeature05.png';



// Simple icon components to replace Lucide icons
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

const Lightbulb = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21h6"></path>
    <path d="M12 17h.01"></path>
    <path d="M12 3a4 4 0 0 0-4 4v.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V7a4 4 0 0 0-4-4z"></path>
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

const HorrorGamePortfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  // Mock image data - replace with your actual images
  const screenshots = [
    { src: gameshotfeature01, description: 'Atmospheric lighting' },
    { src: gameshotfeature04, description: 'Simple engaging mechanics ' },
    { src: gameshotfeature03, description: 'Dynamic environmental storytelling' },
    { src: gameshotfeature05, description: 'Eerie atmosphere with detailed environments' }
    ];

  const features = [
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
    },
  ];

  const technologies = [
    'Unreal Engine 4', 'Blueprint Scripting', 'AI Behavior Trees',
    'Dynamic Lighting', '3D Modeling', 'Sound Design',
    'Chaos Physics', 'Substance Painter', 'Perforce', 'Niagara Particles'
  ];

  const achievements = [
    'Successfully created demo level with positive playtester feedback',
    'Implemented dynamic UI system enhancing player experience',
    'Developed robust AI system providing challenging gameplay',
    'Designed intricate levels with hidden secrets and exploration rewards',
    'Created cohesive eerie atmosphere with immersive audio-visual design',
    'Optimized performance for smooth gameplay across hardware configurations'
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const nextFeature = () => {
    setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeatureIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="horror-portfolio">
     <Header/>
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div 
            className="hero-background"
            style={{
          backgroundImage: `url(${gameshotfeature03})`
            }}
          ></div>
          
          <div className="hero-content">
            <h1 className="hero-title">
          Horror FPS Game
            </h1>
            <p className="hero-description">
          A terrifying FPS adventure combining challenging combat, atmospheric environments, 
          and dynamic storytelling in an immersive horror experience.
            </p>
            
            <div className="role-badges">
          {['Level Designer', 'Game Designer', 'Programmer', 'Sound Designer', 'Artist'].map((role, index) => (
            <span key={index} className="role-badge">
              {role}
            </span>
          ))}
            </div>

            <div className="hero-buttons">
          <button className="btn-primary" onClick={() => window.open('https://www.youtube.com/embed/BKFmySQyaJk?si=GOkZfpdchO2uzseL', '_blank')}>
            <Play />
            Watch Demo
          </button>
          {/* <button className="btn-secondary">
            <ExternalLink />
            View Documentation
          </button> */}
            </div>
          </div>
        </div>

        {/* Screenshot Carousel */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Visual Showcase</h2>
          
          <div className="carousel-container">
            <div className="carousel-main">
              <img
                src={screenshots[currentImageIndex].src}
                alt={screenshots[currentImageIndex].description}
                className="carousel-image"
              />
              <div className="carousel-overlay"></div>
              <div className="carousel-caption">
                <p>{screenshots[currentImageIndex].description}</p>
              </div>
            </div>
            
            <button
              onClick={prevImage}
              className="carousel-nav carousel-nav-left"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="carousel-nav carousel-nav-right"
            >
              <ChevronRight />
            </button>
            
            <div className="carousel-dots">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`carousel-dot ${
                    index === currentImageIndex ? 'carousel-dot-active' : 'carousel-dot-inactive'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Carousel */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">
            <Target style={{ color: '#ef4444' }} />
            Key Features
          </h2>
          
          <div className="carousel-container">
            <div className="feature-carousel">
              <div className="feature-grid">
                <div>
                  <img
                    src={features[currentFeatureIndex].image}
                    alt={features[currentFeatureIndex].title}
                    className="feature-image"
                  />
                </div>
                <div className="feature-content">
                  <h3>
                    {features[currentFeatureIndex].title}
                  </h3>
                  <p>
                    {features[currentFeatureIndex].description}
                  </p>
                </div>
              </div>
            </div>
            
            <button
              onClick={prevFeature}
              className="feature-nav feature-nav-left"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextFeature}
              className="feature-nav feature-nav-right"
            >
              <ChevronRight />
            </button>
            
            <div className="carousel-dots">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeatureIndex(index)}
                  className={`carousel-dot ${
                    index === currentFeatureIndex ? 'carousel-dot-active' : 'carousel-dot-inactive'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            <Code style={{ color: '#60a5fa' }} />
            Technology Stack
          </h2>
          
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="section section-purple">
        <div className="container-small">
          <h2 className="section-title">
            <Lightbulb style={{ color: '#fbbf24' }} />
            Design Philosophy
          </h2>
          
          <div className="philosophy-grid">
            <div className="philosophy-card immersion">
              <h3>Immersion and Atmosphere</h3>
              <p>
                I prioritize creating a believable and unsettling world that draws players in and keeps them on edge through detailed environmental storytelling, careful sound design, and strategic resource limitation.
              </p>
            </div>
            
            <div className="philosophy-card agency">
              <h3>Player Agency and Choice</h3>
              <p>
                I ensure players feel their decisions matter by offering multiple approaches to challenges and incorporating meaningful choices that impact story progression and character relationships.
              </p>
            </div>
            
            <div className="philosophy-card innovation">
              <h3>Innovation and Experimentation</h3>
              <p>
                I push genre boundaries through dynamic environmental storytelling, unique mechanics like light manipulation, and psychological horror elements that create lasting unease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            <Trophy style={{ color: '#fbbf24' }} />
            Key Achievements
          </h2>
          
          <div className="achievement-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section section-dark">
        <div className="container-small">
          <h2 className="section-title">Gameplay Demo</h2>
          
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BKFmySQyaJk?si=GOkZfpdchO2uzseL"
              title="Horror FPS Game Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="video-info">
            <p>Development Timeline: June 2024 - May 2025</p>
            <div className="status-badges">
              <span className="status-badge complete">Demo Complete</span>
              <span className="status-badge progress">Pre-Alpha in Progress</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HorrorGamePortfolio;