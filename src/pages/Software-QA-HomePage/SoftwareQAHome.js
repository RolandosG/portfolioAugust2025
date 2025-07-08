import React from 'react';
import Header from '../../components/Header';
import SoftwareQAHighlights from '../../components/CategoryHighlights/SoftwareQAHighlights';
import Wrapper from '../../assets/wrappers/Dashboard';
import SoftwarePhoto from '../../assets/images/SoftwarePhoto.jpg';
import './SoftwareEngineerPage.css';

const SoftwareEngineerPage = () => {
  return (
    <Wrapper>
      <div className="software-engineer-wrapper">
        <Header />
        <main className="section">
          
            <SoftwareQAHighlights />
        </main>
      </div>
    </Wrapper>
  );
};

export default SoftwareEngineerPage;