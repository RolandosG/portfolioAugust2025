// PortfolioNarrativeSection.js
import React from 'react';

const PortfolioNarrativeSection = ({ narrative }) => {
  return (
    <section className="portfolio-narrative">
      <div className="narrative-content">
        <div className="narrative-text-section">
          <h2 className="narrative-title">Background</h2>
          <div className="narrative-text">
            {narrative.context} <br></br><br></br> {narrative.myWork}
          </div>
        </div>
        
        {narrative.beforeAfter ? (
          <div className="comparison-container">
            <div className="comparison-item">
              <h3>Before</h3>
              <img src={narrative.beforeAfter.before} alt="Before implementation" />
            </div>
            <div className="comparison-item">
              <h3>After</h3>
              <img src={narrative.beforeAfter.after} alt="After implementation" />
            </div>
          </div>
        ) : narrative.showcaseGif && (
          <div className="showcase-container">
            <img src={narrative.showcaseGif} alt="Project showcase" className="showcase-gif" />
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioNarrativeSection;