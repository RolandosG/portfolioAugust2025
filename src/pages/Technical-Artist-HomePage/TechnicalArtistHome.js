import React from 'react';
import Header from '../../components/Header';
import TechnicalArtHighlights from '../../components/CategoryHighlights/TechnicalArtHighlights';
import Wrapper from '../../assets/wrappers/Dashboard';
import TechArtImage from '../../assets/mp4/wave2.gif';
import './TechnicalArtPage.css';

const TechnicalArtPage = () => {
  return (
    <Wrapper>
      <div className="technical-art-wrapper">
        <Header />
        <main className="section">
         
            <TechnicalArtHighlights />
        
        </main>
      </div>
    </Wrapper>
  );
};

export default TechnicalArtPage;