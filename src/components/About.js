import React from 'react';
import Header from '../components/Header';
import Wrapper from '../assets/wrappers/Dashboard';
import Grid from "../assets/wrappers/about";

import selfie from '../assets/images/selfie01.JPG';
const About = () => {
  
  return (
    <Wrapper>
        
    <main style={{background: "#222429", overflow: 'hidden'}}>
  <Header/>


  <body style={{marginTop: '-206px !important', top: '0px !important'}}>  
    
    <main class="scroll-container">
   
      <section>
        
          <Grid style={{ height: '0px', padding : '0px', marginRight : '600px', marginTop: '-500px'}}>
        <div class="slideUP">
        <div class="grid-container" style={{marginRight: '0px', width: '0', height : '0px', padding: '0'}}>
    
    <div class='box'>
  <div class="grid-item" style={{ width: '520px', height: '520px'}}>
  
<div class="card">
<div class="card__content" style={{width: '500px', height: '500px'}}>
    <div class="card__front" style={{backgroundImage: `url(${selfie})`}}>
        <div class="card__back" style={{
backgroundSize: '240% 240%',
animation: 'section-animation 10s ease infinite'}}></div>
    </div> 
        </div></div></div></div></div></div>
        </Grid>

      <div class="slideUp">
    <div
      clas="introduction"
      style={{ color: "white", marginTop: "750px" }}
    >
      <h1 style={{ marginTop:"-550px",marginRight: "-635px", fontSize: "4.2rem", textShadow: '2px 2px #ff0000', boxSizing: 'border-box' }}>
        Rolandos Georgoulis
      </h1>
    </div>
  </div>
  <div class="slideRight" style={{marginTop:"400px", marginRight: "0px", textAlign: "left", color: '#003d49'}}>
    Hello! I'm a student in software & web developement from Athens, Greece and currently based in Freezing beautiful 
    Toronto. Practicing on designing and developing state-of-the-art websites to deliver top user experiences. 
    I have finished my 3 year program in programming and analysis and are now persuing my
     Honour bachelors of technology part time.   
    <br /><br></br>
    
  </div>
    </section>
   
    </main>
  </body>
  <footer>FOOTER</footer>

</main>

</Wrapper>
    
    );
}


export default About;