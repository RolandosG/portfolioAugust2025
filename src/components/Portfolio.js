import React from 'react';
import Header from '../components/Header';
import Wrapper from '../assets/wrappers/Dashboard';
import Grid from '../assets/wrappers/Portfolio';

import {SiGithub} from 'react-icons/si'
import { SiYoutube } from "react-icons/si";
import { MdWebAsset } from "react-icons/md";

import { FaReact } from 'react-icons/fa'
import { GiVintageRobot } from 'react-icons/gi';
import { SiCplusplus } from 'react-icons/si';

const Portfolio = () => {
  
  return (
    
    
        <Wrapper>
        <main style={{background: "#222429", overflow: 'hidden'}}>
      <Header/>

    
      <body style={{marginTop: '-206px !important', top: '0px !important'}}>  
        
        <main>
        
          <section>
           
            <Grid style={{ height: '0px', padding : '0px'}}>
          
          <ul style={{width: '1200px', height: '1200px'}}>  
          <div class='container'>

            
          <li> 
            <div class='zoom'><div className ="slideRight slides" style={{animation: "slideRight ease 2.4s forwards 2.2s", background: 'linear-gradient(44deg,#009bba,#8ce6f6,#46ddfb,#e9f1f0)', backgroundSize: '240% 240%'}}>
            <div class="title">BlackJack Website <FaReact  size={'50px'}/></div>
            <div className='desc'>A group project built with React to showcase abilities of full stack development. </div>
            <div className='links'><SiGithub  size={'25px'}/> &ensp;<a href="https://github.com/RolandosG/PRJ666-BlackJack-main" target="_blank" rel="noopener noreferrer">Github</a>&ensp;<MdWebAsset size={'25px'}/>&ensp;<a href="https://blackjack.herokuapp.com/landing" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
            </div>
            </div>
          </li>
          
          
          <li>
            <div class='zoom'> <div className="slideRight slides" style={{animation: "slideRight ease 3.4s forwards 3.2s", background: 'linear-gradient(44deg,#009bba,#8ce6f6,#46ddfb,#e9f1f0)', backgroundSize: '240% 240%'}}>
            <div className='title'>Shopping store <FaReact  size={'50px'}/></div>
            <div className='desc'>A RESTful Apps back end that displays items from mongoDB. </div>
            <div className='links'><SiGithub  size={'25px'}/> &ensp;<a href="https://github.com/RolandosG/backend" target="_blank" rel="noopener noreferrer">Github</a>&ensp;<MdWebAsset size={'25px'}/>&ensp;<a href="https://storepage-back-end.herokuapp.com/products" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
            </div>
            </div>
          </li>
           

           
          <li>
            <div class='zoom'>
            <div class ="slideRight slides" style={{animation: "slideRight ease 3.4s forwards 4.2s",  
            background: 'linear-gradient(44deg,#009bba,#8ce6f6,#46ddfb,#e9f1f0)',
            backgroundSize: '240% 240%'}}>
            <div className='title'>Robotics in C <GiVintageRobot size={'50px'}/></div>
            <div className='desc'>Real time robot simulation using sensors to locate & move objects </div>
            <div className='links'><SiGithub  size={'25px'}/> &ensp;<a href="https://github.com/RolandosG/exploration-machine" target="_blank" rel="noopener noreferrer">Github</a>&ensp; <SiYoutube size={'25px'}/>
            &ensp;<a href="https://youtu.be/a51OEI5wD8A" target="_blank" rel="noopener noreferrer">Video</a></div>
            </div>
            </div>       
          </li>
          
            
          
          <li>
            <div class='zoom'>
            <div className="slideRight slides" style={{animation: "slideRight ease 3.4s forwards 5.2s", background: 'linear-gradient(44deg,#009bba,#8ce6f6,#46ddfb,#e9f1f0)', backgroundSize: '240% 240%'}}>
            <div className='title'>Adventure Game <SiCplusplus  size={'40px'}/></div>
            <div className='desc'>An RPG adventure game made from scratch using unreals blueprints.</div>
            <div className='links'><SiGithub  size={'25px'}/> &ensp;<a href="https://github.com/RolandosG/Rolos-Grand-Adventure" target="_blank" rel="noopener noreferrer">Github</a>&ensp;<SiYoutube size={'25px'}/>&ensp;<a href="https://youtu.be/GpPjLehmRSk" target="_blank" rel="noopener noreferrer">Video</a></div>
            </div>
            </div>
          </li>
       
          


          
          <li>
            <div class='zoom'> 
            <div className ="slideRight slides" style={{animation: "slideRight ease 3.4s forwards 6.2s",  background: 'linear-gradient(44deg,#009bba,#8ce6f6,#46ddfb,#e9f1f0)', backgroundSize: '240% 240%'}}>
            <div className='title'>Portfolio Website<FaReact  size={'50px'}/></div>
            <div className='desc'>The website I've designed here.</div>
            <div className='links'><SiGithub  size={'25px'}/>&ensp;<a href="https://github.com/RolandosG/portfolioSite" target="_blank" rel="noopener noreferrer">LEARN MORE</a>
            </div>
            </div> 
            </div>
          </li>
         
 
          <li> 
            <div className="slideRight" style={{animation: "slideRight ease 3.4s forwards 7.2s", marginTop: '-30px'}}>
            <div className='title' style={{textDecoration: 'none'}}><br></br>More to come...</div>
            <div className='desc'></div></div>
          </li>

            </div>
</ul>

</Grid>

        </section>
        
        </main>
      </body>
      <footer>FOOTER</footer>
  
  </main>
  </Wrapper>
    
    
  );
}


export default Portfolio;