import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header'
import './UnityGamePage.css';

import gameVideo from '../../../assets/mp4/game.mp4';
import gameVideoWebM from '../../../assets/mp4/gamewebm.webm';
import gameGif from '../../../assets/mp4/gamegif.gif';
import menuGif from '../../../assets/mp4/menugif.gif';
import bossGif from '../../../assets/mp4/bossgif.gif';
import eventGif from '../../../assets/mp4/realeventgif.gif';
import gamePic1 from '../../../assets/images/gamepic1.PNG';
import gamePic2 from '../../../assets/images/gamepic2.PNG';
import gamePic3 from '../../../assets/images/gamepic3.PNG';
import drone from '../../../assets/mp4/Drone.gif';
import sniper from '../../../assets/mp4/sniper.gif';
import shielder from '../../../assets/mp4/Shielder.gif';
import healerTrapper from '../../../assets/mp4/healer&Trapper.gif';
import summoner from '../../../assets/mp4/Summoner.gif';
import carrier from '../../../assets/mp4/Carrier.gif';

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

const UnityGamePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  // Mock image data - replace with your actual images
  const screenshots = [
    { src: menuGif, description: 'Upgrade System' },
    { src: bossGif, description: 'Intricate Boss Design' },
    { src: eventGif, description: 'Event System' },
    { src: menuGif, description: 'simple atmosphere with engaging combat' }
    ];

  const features = [
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
    },
  ];

  const technologies = [
    'Unity', 'C#', 'AI Behavior',
    'Dynamic Event System', '3D Modeling', 'Sound Design',
    'Firebase'
  ];

  const achievements = [
   'Successfully created a demo level that received positive feedback from playtesters.',
          'Implemented a UI system that enhances the experience.',
          'Developed a robust AI system that provides a challenging gameplay experience.',
          'Designed an intricate yet simple game that is easy to pick up and play.',
          'Simple enemy design that allows the player to quickly identify threats.',
          'Created a cohesive space combat atmosphere with immersive sound design and visuals.',
          'Optimized performance for smooth gameplay on a variety of hardware configurations.',
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
          backgroundImage: `url(${gameGif})`
            }}
          ></div>
          
          <div className="hero-content">
            <h1 className="hero-title">
            Galactica/Starfox Inspired Game
            </h1>
            <p className="hero-description">
            A space combat game inspired by Galactica and Starfox, featuring intense dogfights and a thrilling mission.
            </p>
            
            <div className="role-badges">
          {['Level Designer', 'Game Designer', 'Programmer', 'Sound Designer', 'Artist'].map((role, index) => (
            <span key={index} className="role-badge">
              {role}
            </span>
          ))}
            </div>

            <div className="hero-buttons">
          {/* <button className="btn-primary" onClick={() => window.open('https://www.youtube.com/embed/BKFmySQyaJk?si=GOkZfpdchO2uzseL', '_blank')}>
            <Play />
            Watch Demo
          </button> */}
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
              I prioritize creating a believable and engaging space combat world that draws players in and keeps them on edge. I achieve this through:
              </p>
            </div>
            
            <div className="philosophy-card agency">
              <h3>Simplicity with Complexity</h3>
              <p>
              Simple yet Detailed environmental storytelling and subtle world and enemy building.
              </p>
            </div>
            
            <div className="philosophy-card innovation">
              <h3>Attention to detail</h3>
              <p>
              Careful use of sound design to evoke specific emotions.
              </p>
            </div>
            <div className="philosophy-card innovation">
              <h3>intricate challenges going back ot the basics</h3>
              <p>
              Limited resources and challenging encounters to create a sense of vulnerability.
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
          <h2 className="section-title">Ambient Video</h2>
          
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src={gameVideoWebM}
              title="Unity Game Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="video-info">
            <p>Development Timeline: January 2023 - April 2023</p>
            <div className="status-badges">
              <span className="status-badge complete">Demo Complete</span>
              <span className="status-badge progress">Full Release</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnityGamePage;