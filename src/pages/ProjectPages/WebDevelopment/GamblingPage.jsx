import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header'
import './GamblingPage.css';

import blackjackpng from '../../../assets/images/blackjack.png';
import analyticspic from '../../../assets/images/analyticspic.jpg';

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

const GamblingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  // Mock image data - replace with your actual images
  const screenshots = [
    { src: blackjackpng, description: 'An Engaging Blackjack website' },
    ];

  const features = [
    {
      title: 'Stylish simplistic friendly user design',
      description: 'Simplistic and low poly world design for a unique aesthetic.',
      image: blackjackpng
    },
    {
      title: 'Fun & engaging gameplay systems',
      description: 'A variety of gameplay systems that keep players engaged.',
      image: analyticspic
    },
  ];

  const technologies = [
    'React',
          'MongoDB',
          'Mongoose',
          'Javascript (ES6+)',
          'Node.js',
          'Express.js',
          'HTML5',
          'CSS3',
        ];

  const achievements = [
         'Developed a fully functional Blackjack game with real-time multiplayer capabilities.',
         'Implemented a user-friendly interface with smooth animations and transitions.',
         'Optimized performance for seamless gameplay across devices.',
         'Integrated secure user authentication and data management.',
         'Utilized modern web technologies to enhance user experience.',
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
          backgroundImage: `url(${blackjackpng})`
            }}
          ></div>
          
          <div className="hero-content">
            <h1 className="hero-title">
            Black-Jack Safety Gaming Site
            </h1>
            <p className="hero-description">
              A web-based platform designed to provide a safe and responsible gaming experience, focusing on Blackjack and other casino games
            </p>
            
            <div className="role-badges">
          {['Team Manager', 'UI/UX Designer', 'Programmer', 'Jira Manager'].map((role, index) => (
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
              <h3>Immersion</h3>
              <p>
              We prioritized creating a believable and engaging website that draws players in and keeps them engaged like the real thing.
              </p>
            </div>
            
            <div className="philosophy-card agency">
              <h3>Simplicity with Complexity</h3>
              <p>
              Simple yet Detailed design driving players to look at their progress and how it affects their gaming habits.
              </p>
            </div>
            
            <div className="philosophy-card innovation">
              <h3>Attention to detail</h3>
              <p>
              Careful use of design to engage players minimalistically and drawing away from the use of actual gambling site designs.
              </p>
            </div>
            <div className="philosophy-card innovation">
              <h3>intricate challenges</h3>
              <p>
              Achievements and challenges to create a sense of accomplishment.
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
          {/* <h2 className="section-title">Gameplay Demo</h2>
          
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src= 'https://www.youtube.com/embed/GpPjLehmRSk?si=ZdajTF8a1DL75SnO'
              title="Horror FPS Game Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
          
          <div className="video-info">
            <p>Development Timeline: January 2023 - August 2023</p>
            <div className="status-badges">
              <span className="status-badge complete">Complete</span>
              <span className="status-badge progress">Full Release</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamblingPage;