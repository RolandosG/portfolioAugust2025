// GameDesignPortfolio.js
import React, { useState, useEffect } from 'react';
import wrapper from '../GameDesign/Portfolio.css'; // You'll need to update this CSS file
import { portfolioData } from '../GameDesign/ProjectData';
import ProjectGrid from '../GameDesign/ProjectGrid';
import PortfolioProjectDetail from '../GameDesign/PortfolioProjectDetail';
// import Wrapper from '../../assets/wrappers/Dashboard';

const GameDesignPortfolio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleProjectSelect = (project) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedProject(project);
  };

  const handleBackToGrid = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    const currentIndex = portfolioData.findIndex(p => p.id === selectedProject.id);
    if (currentIndex < portfolioData.length - 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setSelectedProject(portfolioData[currentIndex + 1]);
    }
  };

  const handlePreviousProject = () => {
    const currentIndex = portfolioData.findIndex(p => p.id === selectedProject.id);
    if (currentIndex > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setSelectedProject(portfolioData[currentIndex - 1]);
    }
  };

  return (
    <>
      {!selectedProject ? (
        <div className="portfolio-grid-view">
          <header className="portfolio-main-header">
            <h1>Software Developer</h1>
            <p>Exploring the intersection of narrative, technology, and player experience</p>
          </header>
          <ProjectGrid 
            projectData={portfolioData} 
            onProjectSelect={handleProjectSelect}
          />
        </div>
      ) : (          <PortfolioProjectDetail 
            project={selectedProject}
            onBack={handleBackToGrid}
            onNext={handleNextProject}
            onPrevious={handlePreviousProject}
            hasNext={portfolioData.findIndex(p => p.id === selectedProject.id) < portfolioData.length - 1}
            hasPrevious={portfolioData.findIndex(p => p.id === selectedProject.id) > 0}
            isMobile={isMobile}
          />
      )}
    </>
  );
};

export default GameDesignPortfolio;
