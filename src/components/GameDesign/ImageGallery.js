import React from 'react';
import './ImageGallery.css';
const ImageGallery = ({ projects, onImageClick }) => {
  const handleMouseEnter = (e, gif) => {
    e.target.src = gif;
  };

  const handleMouseLeave = (e, image) => {
    e.target.src = image;
  };

  return (
    <div className="image-gallery">
      {projects.map((project) => (
        <div key={project.id} className="image-container" onClick={() => onImageClick(project)}>
          <img
            src={project.image}
            alt={project.title}
            onMouseEnter={(e) => handleMouseEnter(e, project.gif)}
            onMouseLeave={(e) => handleMouseLeave(e, project.image)}
          />
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;