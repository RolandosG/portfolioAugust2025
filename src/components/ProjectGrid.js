import React from "react";
import Wrapper from "../assets/wrappers/projectGrid";


import {SiGithub} from 'react-icons/si'
import { SiYoutube } from "react-icons/si";
import { MdWebAsset } from "react-icons/md";
const ProjectGrid = () => {
  
  return (
    <Wrapper style={{padding: '0px', height: '0px'}}>
     
   
      
      <body style={{padding: '0px', marginTop: '50px'}}>
     
  
  
      <div class="grid-container" style={{marginRight: '50px'}}>
        <div class='box'>
      <div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'transparent'}}>
          <h3 class="card__title" style={{ color: 'white'}}>PROJECTS</h3>
            <p class="card__subtitle" style={{color : 'white'}}>SOME OF MY</p>
        </div> 
            
    </div>
    </div>
   </div>
   </div>
  
        <div class='box'>
      <div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'linear-gradient(88deg,#cee7a2,#1b3af5,#9dc85f,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 24s ease infinite'}}>
          <h3 class="card__title">BlackJack website</h3>
            <p class="card__subtitle">A REACT website</p>
        </div> 
            <div class="card__back" style={{ background: 'radial-gradient(circle,#cee7a2,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 10s ease infinite'}}><p 
            class="card__body">A group project built with React to showcase abilities of full stack development
            <br></br><a href="https://github.com/RolandosG/PRJ666-BlackJack-main" target="_blank" rel="noopener noreferrer"><SiGithub  size={'20px'}/>LEARN MORE</a>
            <br></br><a href="https://blackjack.herokuapp.com/landing" target="_blank" rel="noopener noreferrer"><MdWebAsset size={'20px'}/>Website</a></p>
          </div>
    </div>
    </div>
   </div>
   </div>
    
   <div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'linear-gradient(88deg,#cee7a2,#1b3af5,#9dc85f,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 24s ease infinite'}}>
          <h3 class="card__title">Shopping Store REACT</h3>
            <p class="card__subtitle">Just like footlocker!</p>
        </div> 
            <div class="card__back"  style={{ background: 'radial-gradient(circle,#cee7a2,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 10s ease infinite'}}><p 
            class="card__body">A RESTful Application that displays items from back end to front end using mongoDB. 
              <br></br><a href="https://github.com/RolandosG/Store-page-REACT" target="_blank" rel="noopener noreferrer"><SiGithub  size={'20px'}/>LEARN MORE</a>
              <br></br><a href="https://naughty-knuth-43c447.netlify.app" target="_blank" rel="noopener noreferrer"><MdWebAsset size={'20px'}/>Website</a></p>
          </div>
    </div>
    </div>
   </div>

   <div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'linear-gradient(88deg,#cee7a2,#1b3af5,#9dc85f,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 24s ease infinite'}}>
          <h3 class="card__title">Robotic in C</h3>
            <p class="card__subtitle">sonar sensor robot</p>
        </div> 
            <div class="card__back" style={{background: 'radial-gradient(circle,#cee7a2,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 10s ease infinite'}}><p 
            class="card__body">Real time robot simulation using sensors to locate & move objects 
            <br></br><a href="https://github.com/RolandosG/exploration-machine" target="_blank" rel="noopener noreferrer"><SiGithub  size={'20px'}/>LEARN MORE</a>
            <br></br><a href="   https://youtu.be/a51OEI5wD8A" target="_blank" rel="noopener noreferrer"><SiYoutube size={'20px'}/>Simulation</a></p>
          </div>
    </div>
    </div>
   </div>

   <div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'linear-gradient(88deg,#cee7a2,#1b3af5,#9dc85f,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 24s ease infinite'}}>
          <h3 class="card__title">Adventure game</h3>
            <p class="card__subtitle">Made with Unreal engine</p>
        </div> 
            <div class="card__back" style={{background: 'radial-gradient(circle,#cee7a2,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 10s ease infinite'}}><p 
            class="card__body">A third person RPG adventure game made from scratch using unreals blueprints
             <br></br><a href="https://github.com/RolandosG/Rolos-Grand-Adventure" target="_blank" rel="noopener noreferrer"><SiGithub  size={'25px'}/>LEARN MORE</a>
              <br></br><a href="https://youtu.be/GpPjLehmRSk" target="_blank" rel="noopener noreferrer"><SiYoutube size={'25px'}/>Gameplay</a>
            </p>
          </div>
    </div>
    </div>
   </div>

   <div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'linear-gradient(88deg,#cee7a2,#1b3af5,#9dc85f,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 24s ease infinite'}}>
          <h3 class="card__title">Portfolio website</h3>
            <p class="card__subtitle">Made with REACT</p>
        </div> 
          <div class="card__back" style={{background: 'radial-gradient(circle,#cee7a2,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 10s ease infinite'}}><p 
            class="card__body">The website I've designed here. <br></br><a href="https://github.com/RolandosG/portfolioSite"><br></br>
           <SiGithub  size={'25px'}/>LEARN MORE</a></p>
          </div>
    </div>
    </div>
   </div>
  </div>


</body>

</Wrapper>

);
};

export default ProjectGrid;
