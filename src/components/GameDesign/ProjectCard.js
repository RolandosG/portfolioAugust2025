import React, { useState } from 'react';
import ImageModal from '../Modal/ImageModal';

const ProjectCard = ({ project }) => {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (e) => {
    e.preventDefault();
    setModalImage({
      url: project.image,
      description: project.title
    });
  };

  return (
    <div className="project-card">
      <div className="project-image-preview">
        <img 
          src={project.image} 
          alt={project.title}
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="project-info">
        <div className="title">{project.title}</div>
        <div className="project-duration">{project.duration}</div>
        <div className="project-roles">
          <strong>Roles:</strong> {project.roles.join(', ')}
        </div>
        <div className="project-pitch">{project.pitch}</div>
        <div className="tech-icons">
          {project.techIcons}
        </div>
      </div>

      <ImageModal 
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageUrl={modalImage?.url}
        description={modalImage?.description}
      />
    </div>
  );
};

export default ProjectCard;
