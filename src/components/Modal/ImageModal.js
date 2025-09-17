import React, { useEffect } from 'react';

const ImageModal = ({ isOpen, onClose, imageUrl, description }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <button className="image-modal-close" onClick={onClose}>
        <span>×</span>
      </button>
      <div className="image-modal-content" onClick={e => e.stopPropagation()}>
        <img 
          src={imageUrl} 
          alt={description || 'Full size view'} 
          className="full-size-image"
        />
        {description && <p className="image-description">{description}</p>}
      </div>
    </div>
  );
};

export default ImageModal;
