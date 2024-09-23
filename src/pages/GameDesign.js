import React, { useState } from 'react';
import Header from '../components/Header';
import GameDesignWrapper from '../assets/wrappers/GameDesign'; 
import ImageGallery from '../components/GameDesign/ImageGallery';
import projectsData from '../components/GameDesign/ProjectsData';
import ExpandedProjectDetails from '../components/GameDesign/ExpandedProjectDetails';
import { AwesomeButton } from 'react-awesome-button';

const GameDesign = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  }

  const handleCloseDetails = () => {
    setSelectedProject(null);
  }

  return (
    <GameDesignWrapper>
      <Header />

      <main> 
        <div className="scroll-container">

          {/* Image Gallery */}
          <section className="section-container">
            <h2>Projects  <AwesomeButton type="secondary" style={{ marginLeft: "15px", height: "40px" }}>
                <a href="https://docs.google.com/document/d/1Ocbkzr-8DdA_CuxNABCw5Kv72_azld15/edit?usp=sharing&ouid=104420958901390331204&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Game Design Resume</a>
              </AwesomeButton>
              <AwesomeButton type="secondary" style={{ marginLeft: "15px", height: "40px" }}>
                <a href="https://docs.google.com/document/d/1xr9vkklsL1_mlrn2pzcGONRSBZWTGPNT/edit?usp=sharing&ouid=104420958901390331204&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Game Dev Resume</a>
              </AwesomeButton></h2>
            <ImageGallery 
              projects={projectsData} 
              onImageClick={handleImageClick}
            />
          </section>

          {/* Expanded Project Details (conditionally rendered) */}
          {selectedProject && (
            <div className="expanded-project-overlay">
              <ExpandedProjectDetails 
                project={selectedProject} 
                onClose={handleCloseDetails} 
              />
            </div>
          )}

        </div>
      </main>
    </GameDesignWrapper>
  );
};

export default GameDesign;