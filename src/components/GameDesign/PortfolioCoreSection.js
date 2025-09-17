import React, { useState } from 'react';
import './Portfolio.css';
import ImageModal from '../Modal/ImageModal';

const PortfolioCoreSection = ({ coreMechanics }) => {
  const [modalImage, setModalImage] = useState(null);

  if (!coreMechanics || coreMechanics.length === 0) {
    return null;
  }

  return (
    <section className="portfolio-core">
      <div className="section-header">
        <h2>Core Design Elements</h2>
        <p>The fundamental building blocks that shape the player experience</p>
      </div>

      <div className="core-mechanics">
        {coreMechanics.map((mechanic, index) => (
          <div key={index} className="mechanic-card">
            <div className="mechanic-content">
              <h3>{mechanic.title}</h3>
              <p>{mechanic.description}</p>
              {mechanic.designProcess && (
                <div className="design-process">
                  <h4>Design Process</h4>
                  <p>{mechanic.designProcess}</p>
                </div>
              )}
            </div>
            <div className="mechanic-visual">
              <img 
                src={mechanic.visual.src} 
                alt={mechanic.visual.description}
                onClick={() => setModalImage({
                  url: mechanic.visual.src,
                  description: mechanic.visual.description
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

export default PortfolioCoreSection;
