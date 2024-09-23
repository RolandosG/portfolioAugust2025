import React from 'react';
import Header from '../components/Header';
//import Introduction from '../components/Introduction';
import Cards from '../components/Cards';
import Wrapper from '../assets/wrappers/Dashboard';
import AboutSection from '../components/AboutSection';
import ProjectGrid from '../components/ProjectGrid.js';
import Highlights from '../components/Highlights';

const HomePage = () => {
  
  return (
    
    <Wrapper>
        
        <main style={{background: "#222429", overflow: 'visible',}}>
      <Header/>

    
      <body style={{marginTop: '-206px !important', top: '0px !important'}}>  
        
        <main class="scroll-container">
        
        { /*  <section>
        <Introduction/>
          </section> */}
        <section class="section-container">  
        <div class="about-section">
        <AboutSection/>
        </div>
        <Highlights/>
        </section>
        <section class="section-container">
        <ProjectGrid/>
        </section>   
        <section class="section-container">
        <Cards style={{marginLeft: "50%"}}/> 
        </section>
        
        </main>
      </body>
      <footer>Hello</footer>
  
  </main>

    </Wrapper>
  );
}

export default HomePage;