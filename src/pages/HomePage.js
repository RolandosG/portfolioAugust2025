import React from 'react';
import Header from '../components/Header';
//import Introduction from '../components/Introduction';
import Cards from '../components/Cards';
import Wrapper from '../assets/wrappers/HighlightsCSS.js';
import AboutSection from '../components/AboutSection';
import ProjectGrid from '../components/ProjectGrid.js';
import Highlights from '../components/Highlights';

const HomePage = () => {
  
  return (
    
   
        
        <main style={{
          background: 'linear-gradient(135deg, #1e3a8a, #3b0764)',
          width: '100vw', // Full viewport width
          minHeight: '100vh', // Full viewport height, allows content to expand
          
          margin: 0, // Remove default margins
          boxSizing: 'border-box', // Ensure padding doesn’t increase size
          overflowX: 'hidden', // Prevent horizontal scroll
        }}>
        <Wrapper>
        <Header/>

    
    
        <Highlights/>
        </Wrapper>
     

  
  </main>

   
  );
}

export default HomePage;