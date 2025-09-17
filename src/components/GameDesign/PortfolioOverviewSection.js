// PortfolioOverviewSection.js
import React, { useState } from 'react';
import { Play, ExternalLink } from './IconComponents';
import ImageModal from '../Modal/ImageModal';

const PortfolioOverviewSection = ({ project }) => {
  const { overview, technicalDetails } = project;
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="portfolio-overview">
      <div className="overview-container">
        <div className="overview-details">
          <h1 className="project-title">{overview.title}</h1>
          
          <div className="overview-content">
            <div className="overview-left">
              <div className="project-metadata">
                <p><span className="metadata-label">Duration:</span> {overview.duration}</p>
                <p><span className="metadata-label">Role:</span> {overview.roles.join(" | ")}</p>
                <p><span className="metadata-label">Tools & Team:</span> {overview.tools.join(" | ")}</p>
                <p><span className="metadata-label">Theme:</span> {overview.theme.join(" | ")}</p>
              </div>

              <div className="pitch-section">
                <p className="pitch-text">{overview.pitch}</p>
              </div>

              {(technicalDetails.externalLinks.demo || technicalDetails.externalLinks.github || technicalDetails.externalLinks.live) && (
                <div className="overview-actions">
                  {technicalDetails.externalLinks.github && (
                    <a 
                      href={technicalDetails.externalLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="overview-button github-button"
                    >
                      <ExternalLink />View Code
                    </a>
                  )}
                  {technicalDetails.externalLinks.live && Array.isArray(technicalDetails.externalLinks.live) ? (
                    // Handle array of live links
                    technicalDetails.externalLinks.live.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="overview-button live-button"
                      >
                        <ExternalLink />{link.name}
                      </a>
                    ))
                  ) : technicalDetails.externalLinks.live ? (
                    // Handle single live link (for backward compatibility)
                    <a 
                      href={technicalDetails.externalLinks.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="overview-button live-button"
                    >
                      <ExternalLink />Play Game
                    </a>
                  ) : null}
                </div>
              )}
            </div>

            <div className="overview-media">
              {technicalDetails.videoEmbed ? (
                <div className="video-container">
                  <iframe 
                    src={technicalDetails.videoEmbed} 
                    title={`${overview.title} Demo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="hero-image">
                  <img 
                    src={overview.backgroundImage} 
                    alt={overview.title}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ImageModal 
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageUrl={modalImage?.url}
        description={modalImage?.description}
      />
    </section>
  );
};

export default PortfolioOverviewSection;