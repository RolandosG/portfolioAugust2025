import React from 'react';
import { useParams } from 'react-router-dom';
import { portfolioData } from './ProjectData';
import PortfolioOverview from './PortfolioOverview';
import PortfolioNarrativeSection from './PortfolioNarrativeSection';
import PortfolioCoreSection from './PortfolioCoreSection';
import PortfolioKeyFeatures from './PortfolioKeyFeatures';
import PortfolioConclusion from './PortfolioConclusion';
import './Portfolio.css';

const GameDesign = () => {
  const { id } = useParams();
  const project = portfolioData.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Debug log
  console.log('Project data:', {
    id: project.id,
    hasCoreSection: !!project.coreMechanics,
    coreMechanicsLength: project.coreMechanics?.length,
    hasKeyFeatures: !!project.keyFeatures,
    keyFeaturesTitle: project.keyFeatures?.title
  });

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-container">
        {/* Overview */}
        <PortfolioOverview overview={project.overview} />
        
        {/* Background */}
        <PortfolioNarrativeSection narrative={project.narrative} />
        
        {/* 01. Core Design Elements */}
        <PortfolioCoreSection coreMechanics={project.coreMechanics} />
        
        {/* 02. Core Systems */}
        <PortfolioKeyFeatures keyFeatures={project.keyFeatures} />
        
        {/* 03. Conclusion */}
        <PortfolioConclusion conclusion={project.conclusion} />
      </div>
    </div>
  );
};

export default GameDesign;
