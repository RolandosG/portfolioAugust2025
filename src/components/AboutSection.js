// AboutSection.js
import React from 'react';
import AboutSectionWrapper from '../assets/wrappers/AboutSection';
import selfie from '../assets/images/selfie.jpg';

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <div className="about-section">
        <div className="slideUp">
          <div className="profile-photo">
            <img src={selfie} alt="Rolandos" />
          </div>
          <div className="introduction" style={{ color: "#041121"}}>
            <h1 className="about-title">About</h1>
          </div>
          <div className="background">
          Passionate developer with a rich background in design, art, and technology.
          My journey blends creativity with technical acumen, aiming to create digital interactions that resonate with users universally.
          </div>
        </div>
      </div>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
