import React, { useState } from 'react';
import './Portfolio.css';
import ImageModal from '../Modal/ImageModal';

const PortfolioKeyFeatures = ({ keyFeatures }) => {
  const [modalImage, setModalImage] = useState(null);

  if (!keyFeatures) {
    return null;
  }

  return (
    <section className="portfolio-key-features">
      <div className="section-header">
        <h2>{keyFeatures.title}</h2>
        <p>{keyFeatures.description}</p>
      </div>

      <div className="features-grid">
        {keyFeatures.features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-content">
              <h3>{feature.name}</h3>
              <p>{feature.description}</p>
            </div>
            <div className="feature-visual">
              <img 
                src={feature.visual.src} 
                alt={feature.visual.description}
                onClick={() => setModalImage({
                  url: feature.visual.src,
                  description: feature.visual.description
                })}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        ))}
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

export default PortfolioKeyFeatures;
