// PortfolioProjectDetail.js
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from './IconComponents';
import { portfolioData } from './ProjectData';
import PortfolioOverviewSection from './PortfolioOverviewSection';
import PortfolioNarrativeSection from './PortfolioNarrativeSection';
import PortfolioCoreSection from './PortfolioCoreSection';
import PortfolioKeyFeatures from './PortfolioKeyFeatures';
import PortfolioDeepDiveSection from './PortfolioDeepDiveSection';
import PortfolioConclusionSection from './PortfolioConclusionSection';
import ImageModal from '../Modal/ImageModal';

const PortfolioProjectDetail = ({ project, onBack, onNext, onPrevious, hasNext, hasPrevious, isMobile }) => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-container">
        <div className="portfolio-project-detail">
          {/* Navigation Header */}
          <div className="portfolio-header">
            <button className="back-button" onClick={onBack}>
              <ChevronLeft /> Back
            </button>
            
            <div className="project-navigation">
              {hasNext && (
                <button className="nav-button next" onClick={onNext}>
                  <div className="nav-content">
                    <span className="nav-label">Next Project</span>
                    <span className="nav-title">{portfolioData[portfolioData.findIndex(p => p.id === project.id) + 1].overview.shortName}</span>
                  </div>
                  <ChevronRight />
                </button>
              )}
              {hasPrevious && (
                <button className="nav-button prev" onClick={onPrevious}>
                  <ChevronLeft />
                  <div className="nav-content">
                    <span className="nav-label">Previous</span>
                    <span className="nav-title">{portfolioData[portfolioData.findIndex(p => p.id === project.id) - 1].overview.shortName}</span>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="portfolio-content">
            {/* Section 1: High-Level Overview */}
            <PortfolioOverviewSection project={project} />

            {/* Section 2: Narrative & Context */}
            <PortfolioNarrativeSection narrative={project.narrative} />

            {/* Section 3: Core Design Elements (3Cs) */}
            {project.coreMechanics && <PortfolioCoreSection coreMechanics={project.coreMechanics} />}

            {/* Section 4: Key Features */}
            {project.keyFeatures && <PortfolioKeyFeatures keyFeatures={project.keyFeatures} />}

            {/* Section 5: Deep Dive (for projects that have it) */}
            {project.deepDive && <PortfolioDeepDiveSection deepDive={project.deepDive} />}

            {/* Section 6: Conclusion */}
            <PortfolioConclusionSection conclusion={project.conclusion} />

            {/* External Links Section */}
            {project.technicalDetails.externalLinks && project.technicalDetails.externalLinks.length > 0 && (
              <section className="external-links">
                <h2 className="section-main-title">External Links</h2>
                <div className="links-container">
                  {project.technicalDetails.externalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* Additional Screenshots/Media Section */}
            {project.technicalDetails.screenshots && project.technicalDetails.screenshots.length > 0 && (
              <section className="additional-media">
                <h2 className="section-main-title">Additional Screenshots</h2>
                <div className="screenshots-grid">
                  {project.technicalDetails.screenshots.map((screenshot, index) => (
                    <div key={index} className="screenshot-item">
                      <img 
                        src={screenshot.src} 
                        alt={screenshot.description}
                        onClick={() => setModalImage({
                          url: screenshot.src,
                          description: screenshot.description
                        })}
                        style={{ cursor: 'pointer' }}
                      />
                      <p className="screenshot-caption">{screenshot.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
      <ImageModal 
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageUrl={modalImage?.url}
        description={modalImage?.description}
      />
    </div>
  );
};

export default PortfolioProjectDetail;