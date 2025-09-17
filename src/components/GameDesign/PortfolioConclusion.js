import React from 'react';
import './Portfolio.css';

const PortfolioConclusion = ({ conclusion }) => {
  return (
    <section className="portfolio-conclusion">
      <div className="section-header">
        <h2>Conclusion & Reflection</h2>
      </div>

      <div className="conclusion-content">
        <div className="conclusion-block takeaway-block">
          <h3 className="conclusion-subtitle">Key Takeaways</h3>
          <p className="conclusion-text">{conclusion.takeaway}</p>
        </div>

        <div className="conclusion-block growth-block">
          <h3 className="conclusion-subtitle">Personal Growth</h3>
          <p className="conclusion-text">{conclusion.personalGrowth}</p>
        </div>

        <div className="conclusion-block future-block">
          <h3 className="conclusion-subtitle">Future Plans</h3>
          <p className="conclusion-text">{conclusion.futurePlans}</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioConclusion;
