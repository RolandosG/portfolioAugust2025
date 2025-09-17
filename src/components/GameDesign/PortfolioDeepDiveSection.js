// PortfolioDeepDiveSection.js
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from './IconComponents';
import ImageModal from '../Modal/ImageModal';

const PortfolioDeepDiveSection = ({ deepDive }) => {
  const [modalImage, setModalImage] = useState(null);

  // Handle different deep dive formats
  if (!Array.isArray(deepDive)) {
    return null;
  }

  return (
    <section className="portfolio-deep-dive">
      <h2 className="section-main-title">The Deep Dive</h2>
      <p className="section-subtitle">Here's where the real problem-solving happened</p>
      
      {deepDive.map((contribution, index) => (
        <div key={index} className="contribution-section">
          <h3 className="contribution-title">
            {String.fromCharCode(65 + index)}. {contribution.title}
          </h3>
          
          <div className="contribution-content">
            <div className="narrative-block">
              {contribution.challenge && (
                <div className="challenge-block">
                  <h4 className="block-subtitle">Challenge</h4>
                  <p className="block-text">{contribution.challenge}</p>
                </div>
              )}
              
              {contribution.process && (
                <div className="process-block">
                  <h4 className="block-subtitle">Process</h4>
                  <p className="block-text">{contribution.process}</p>
                </div>
              )}

              {contribution.solution && (
                <div className="solution-block">
                  <h4 className="block-subtitle">Solution</h4>
                  <p className="block-text">{contribution.solution}</p>
                </div>
              )}
            </div>

            {contribution.visuals && contribution.visuals.length > 0 && (
              <div className="visuals-section">
                <h4 className="block-subtitle">Visual Progress</h4>
                <div className="visuals-grid">
                  {contribution.visuals.map((visual, vIdx) => (
                    <div key={vIdx} className="visual-item">
                      <img 
                        src={visual.src} 
                        alt={visual.description}
                        onClick={() => setModalImage({
                          url: visual.src,
                          description: visual.description
                        })}
                        style={{ cursor: 'pointer' }}
                      />
                      <div className="visual-caption">{visual.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      <ImageModal 
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageUrl={modalImage?.url}
        description={modalImage?.description}
      />
    </section>
  );
};

export default PortfolioDeepDiveSection;