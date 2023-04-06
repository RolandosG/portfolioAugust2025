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
  <div class="slideRight" style={{marginTop:"600px", marginRight: "0px", textAlign: "left", color: '#003d49'}}>
    "I'm a student in software and web development from Athens, Greece, now based in Toronto. I design and develop exceptional websites with a passion for delivering top user experiences. I've completed a three-year program in programming and analysis and am now studying for an Honours Bachelor of Technology part-time. As an expert in JavaScript, ReactJS, NodeJS, and RESTful APIs, I'm committed to delivering results and exceeding expectations. I'm looking for an internship or junior full-stack developer role to challenge myself further and continue my professional growth. Thank you for visiting my portfolio website."   
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
