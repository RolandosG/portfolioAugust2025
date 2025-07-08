import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import './SocialMediaPage.css';

import MindWaveph1 from '../../../assets/images/MindWave_ph1.png';
import GlobalMoodMapImage from '../../../assets/images/map.png';
import FirstImage from '../../../assets/images/Explore.png';
import SecondImage from '../../../assets/images/Profile.png';
import TrendAnalysisImage from '../../../assets/images/trends.png';
import profilepng from '../../../assets/images/Profile.png';
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

const SocialMediaPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const screenshots = [
    { src: MindWaveph1, description: 'Welcome to MindWave: Connect Globally' },
    { src: GlobalMoodMapImage, description: 'Explore Global Mood Mapping' },
  ];

  const features = [
    {
      title: 'Global Mood Mapping',
      description: 'Visualize the collective mood of users worldwide in real-time.',
      image: GlobalMoodMapImage,
    },
    {
      title: 'Real-Time Interaction',
      description: 'Engage with the community instantly through live updates.',
      image: FirstImage,
    },
    {
      title: 'Communicate with more than just words',
      description: 'Interactions are open to interpertation, allowing users to express themselves in unique ways.',
      image: profilepng,
    },
  ];

  const technologies = [
    'React',
    'TypeScript',
    'Express',
    'MongoDB',
    'AWS Amplify',
    'Leaflet',
    'Sass',
    'Jest',
    'Node.js',
    'WebSocket',
  ];

  const achievements = [
    'Successfully implemented real-time global mood mapping.',
    'Optimized WebSocket communication for seamless updates.',
    'Enhanced user experience with an interactive map.',
    'Developed a scalable backend architecture.',
    'Integrated advanced trend analysis features.',
    'Created a visually appealing and responsive UI.',
    'Achieved high user engagement and positive feedback.',
  ];

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
    <div className="mindwave-portfolio">
      <Header />
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div
          className="hero-background"
          style={{
            backgroundImage: `url(${MindWaveph1})`,
          }}
        ></div>

        <div className="hero-content">
          <h1 className="hero-title">MindWave: A Social Media Revolution</h1>
          <p className="hero-description">
            An innovative platform that connects people globally and visualizes collective moods in real-time.
          </p>

          <div className="role-badges">
            {['Developer', 'Designer', 'Data Analyst', 'UI/UX Specialist', 'Project Manager'].map((role, index) => (
              <span key={index} className="role-badge">
                {role}
              </span>
            ))}
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

            <button onClick={prevImage} className="carousel-nav carousel-nav-left">
              <ChevronLeft />
            </button>
            <button onClick={nextImage} className="carousel-nav carousel-nav-right">
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
                  <h3>{features[currentFeatureIndex].title}</h3>
                  <p>{features[currentFeatureIndex].description}</p>
                </div>
              </div>
            </div>

            <button onClick={prevFeature} className="feature-nav feature-nav-left">
              <ChevronLeft />
            </button>
            <button onClick={nextFeature} className="feature-nav feature-nav-right">
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
          <h2 className="section-title">Platform Demo</h2>

          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GpPjLehmRSk?si=ZdajTF8a1DL75SnO"
              title="MindWave Platform Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-info">
            <p>Development Timeline: August 2023 - January 2024</p>
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

export default SocialMediaPage;
