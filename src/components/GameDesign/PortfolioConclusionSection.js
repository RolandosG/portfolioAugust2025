// PortfolioConclusionSection.js
import React from 'react';

const PortfolioConclusionSection = ({ conclusion }) => {
  return (
    <section className="portfolio-conclusion">
      <h2 className="section-main-title">Conclusion</h2>
      
      <div className="conclusion-content">
        <div className="takeaway-block">
          <h3 className="conclusion-subtitle">What I Learned</h3>
          <p className="conclusion-text">{conclusion.takeaway}</p>
        </div>

        {conclusion.personalGrowth && (
          <div className="growth-block">
            <h3 className="conclusion-subtitle">Personal Growth</h3>
            <p className="conclusion-text">{conclusion.personalGrowth}</p>
          </div>
        )}

        {conclusion.futurePlans && (
          <div className="future-block">
            <h3 className="conclusion-subtitle">What's Next</h3>
            <p className="conclusion-text">{conclusion.futurePlans}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioConclusionSection;