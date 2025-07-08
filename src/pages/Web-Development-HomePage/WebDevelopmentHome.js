import React from 'react';
import Header from '../../components/Header';
import WebDevelopmentHighlights from '../../components/CategoryHighlights/WebDevelopmentHighlights';
import Wrapper from '../../assets/wrappers/Dashboard';
import MWImage from '../../assets/images/MindWave.png';
import './WebDevelopmentPage.css';

const WebDevelopmentPage = () => {
  return (
    <Wrapper>
      <div className="web-development-wrapper">
        <Header />
        <main className="section">
          
            <WebDevelopmentHighlights />
         
        </main>
      </div>
    </Wrapper>
  );
};

export default WebDevelopmentPage;