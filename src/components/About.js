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
    A website that delivers exceptional user experiences is what drives my passion for software and web development. With roots in Athens, Greece, and currently situated in Toronto, Canada – a hub for innovation – as a burgeoning student in this field, I take pride in presenting my portfolio website. Having completed an extensive three-year program in programming and analysis, I am now engaged in part-time studies towards an Honours Bachelor of Technology which keeps me updated with the latest industry trends. Result-driven and committed to excellence, I aspire to exceed expectations as an up-and-coming specialist in the field. 

My collaborative mindset and ability to devise practical solutions make me a valuable asset to any team. As an accomplished expert proficient in JavaScript, ReactJS, NodeJS, and RESTful APIs, as well as adept with Microsoft Office, Excel, Adobe Photoshop, and Illustrator skills, I possess the critical knowledge required for any web development position. My enthusiasm toward pursuing an internship or junior full-stack developer role will enable me to challenge myself further while continuing professional growth. 

As I give a warm welcome to you, I express my gratitude for your visit to my portfolio website.   
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
