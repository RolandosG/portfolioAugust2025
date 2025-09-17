// ProjectDetailPanel.js
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, Trophy, Play, ExternalLink } from './IconComponents';

const ProjectDetailPanel = ({ activePanel, onClose, isMobile }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Auto-advance carousel for active panel
  useEffect(() => {
    if (!activePanel) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % activePanel.detailedData.screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activePanel]);

  // Reset image index when panel changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setSelectedImage(null);
  }, [activePanel]);

  const handleImageNavigation = (direction) => {
    if (!selectedImage) return;
    
    const currentIdx = activePanel.detailedData.screenshots.findIndex(img => img.src === selectedImage.src);
    let newIdx;
    
    if (direction === 'prev') {
      newIdx = (currentIdx - 1 + activePanel.detailedData.screenshots.length) % activePanel.detailedData.screenshots.length;
    } else {
      newIdx = (currentIdx + 1) % activePanel.detailedData.screenshots.length;
    }
    
    setSelectedImage(activePanel.detailedData.screenshots[newIdx]);
  };

  return (
    <div className="project-details-panel">
      <div className="modal-header" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginTop: '2.5rem', paddingBottom: '0.3rem', minHeight: '40px' }}>
        <button className="back-button" onClick={onClose} style={{ marginBottom: 0, marginRight: '1.2rem', alignSelf: 'flex-start', paddingTop: '2px', height: '32px', display: 'flex', alignItems: 'center' }}>
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
                {!isMobile && (
                  <h3 className="section-title"><Target />Visual Showcase</h3>
                )}
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
                  <button 
                    className="image-modal-arrow left" 
                    aria-label="Previous image" 
                    onClick={e => {e.stopPropagation(); handleImageNavigation('prev');}}
                  >
                    <ChevronLeft />
                  </button>
                  <button 
                    className="image-modal-arrow right" 
                    aria-label="Next image" 
                    onClick={e => {e.stopPropagation(); handleImageNavigation('next');}}
                  >
                    <ChevronRight />
                  </button>
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
              {(activePanel.detailedData.externalLinks.store || activePanel.detailedData.externalLinks.demo || activePanel.detailedData.externalLinks.github) && (
                <div className="action-buttons">
                  {activePanel.detailedData.externalLinks.store && (
                    <a href={activePanel.detailedData.externalLinks.store} target="_blank" rel="noopener noreferrer" className="action-button store-button">
                      <ExternalLink />Visit Store
                    </a>
                  )}
                  {activePanel.detailedData.externalLinks.demo && (
                    <a href={activePanel.detailedData.externalLinks.demo} target="_blank" rel="noopener noreferrer" className="action-button demo-button">
                      <Play />Watch Demo
                    </a>
                  )}
                  {activePanel.detailedData.externalLinks.github && (
                    <a href={activePanel.detailedData.externalLinks.github} target="_blank" rel="noopener noreferrer" className="action-button demo-button">
                      <ExternalLink />GitHub
                    </a>
                  )}
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

          {/* Achievements Row */}
          <div className="modal-row achievements-row">
            <div className="section">
              {!isMobile && (<h3 className="section-title"><Trophy />What makes this special</h3>)}
              <div className="achievements-grid">
                {activePanel.detailedData.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Video Row */}
          {/* <div className="modal-row demo-video-row">
            {activePanel.detailedData.videoEmbed && (
              <div className="section">
                {!isMobile && (<h3 className="section-title"><Target />Demo Video</h3>)}
                <div className="video-container">
                  <iframe 
                    width="100%" 
                    height="180" 
                    src={activePanel.detailedData.videoEmbed} 
                    title="Demo Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                  />
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPanel;