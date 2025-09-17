// ProjectGrid.js
import React from 'react';

const ProjectGrid = ({ projectData, onProjectSelect }) => {
  return (
    <div className="highlights">
      <div className="project-grid vertical-layout">
        {projectData.map((project, index) => {
          // Assign different grid classes for visual variety
          const gridClasses = ['wide1', 'short1', 'short2', 'wide2'];
          const gridClass = gridClasses[index % gridClasses.length];
          
          return (
            <div
              key={project.id}
              className={`project-card ${gridClass}`}
              onClick={() => onProjectSelect(project)}
              onKeyDown={e => { if (e.key === 'Enter') onProjectSelect(project); }}
              tabIndex="0"
              role="button"
            >
              <div className="project-image-preview">
                <img src={project.overview.backgroundImage} alt={project.overview.title} />
              </div>
              <div className="project-info">
                <div className="title">{project.overview.title}</div>
                <div className="project-duration">{project.overview.duration}</div>
                <div className="project-roles">
                  <strong>Roles:</strong> {project.overview.roles.join(", ")}
                </div>
                <div className="project-pitch">{project.overview.shortPitch}</div>
                <div className="tech-icons">
                  {Array.isArray(project.overview.techIcons) 
                    ? project.overview.techIcons.map((icon, i) => (
                        <span key={i} className="tech-icon">{icon}</span>
                      ))
                    : project.overview.techIcons}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGrid;