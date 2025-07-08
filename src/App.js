import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {HomePage, Portfolio, RecentProject, Error, MindWave, GameDesign, TechArt, OceanShaderPage, RetroFXShaderPage} from './pages';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GameDevelopmentHome from './pages/Game-Development-HomePage/GameDevelopmentHome';
import SoftwareQAHome from './pages/Software-QA-HomePage/SoftwareQAHome';
import TechnicalArtistHome from './pages/Technical-Artist-HomePage/TechnicalArtistHome';
import WebDevelopmentPage from './pages/Web-Development-HomePage/WebDevelopmentHome';
//Game Dev
import HorrorGamePage from './pages/ProjectPages/GameDevelopment/HorrorGamePage';
import UnityGamePage from './pages/ProjectPages/GameDevelopment/UnityGamePage';
import SoulsLikeGamePage from './pages/ProjectPages/GameDevelopment/SoulsLikeGamePage';
import AIDesigns from './pages/ProjectPages/GameDevelopment/AIDesignsGamePage';
//Web Dev
import SocialMediaPage from './pages/ProjectPages/WebDevelopment/SocialMediaPage';
import GamblingPage from './pages/ProjectPages/WebDevelopment/GamblingPage';
import PortfolioPage from './pages/ProjectPages/WebDevelopment/PortfolioPage';

//Software Development
import CompareIlvlTooltip from './pages/ProjectPages/SoftwareDevelopment/CompareIlvlTooltip';
import BrowserAutomationTool from './pages/ProjectPages/SoftwareDevelopment/BrowserAutomationTool';
import RoboticsPage from './pages/ProjectPages/SoftwareDevelopment/Robotics';

//Technical Art Development
import RetroFXTools from './pages/ProjectPages/TechnicalArtDevelopment/RetroFXTools';
import WaterShaderPage from './pages/ProjectPages/TechnicalArtDevelopment/WaterShaderPage';
import AboutPage from '../src/pages/About';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/TechArt' element={<TechArt/>}/>
        <Route path='/OceanShader' element={<OceanShaderPage/>}/>
        <Route path='/RetroFX' element={<RetroFXShaderPage/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/3D-Unity-Game' element={<RecentProject/>}/>
        <Route path= '/MindWave' element={<MindWave/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/Design-Portfolio' element={<GameDesign/>}/>
        <Route path='/Game-Development' element={<GameDevelopmentHome/>}/>
        <Route path='/Software-engineer' element={<SoftwareQAHome/>}/>
        <Route path='/Technical-Art' element={<TechnicalArtistHome/>}/>
        <Route path='/web-development' element={<WebDevelopmentPage/>}/>
        
        <Route path='/Horror-Game' element={<HorrorGamePage/>}/>
        <Route path='/Unity-Game' element={<UnityGamePage/>}/>
        <Route path='/Souls-Like-Game' element={<SoulsLikeGamePage/>}/>
        <Route path='/AI-Designs' element={<AIDesigns/>}/>
      
        <Route path='/Gambling-Safety-Site' element={<GamblingPage/>}/>
        <Route path='/SocialMedia-Site' element={<SocialMediaPage/>}/>
        <Route path='/Portfolio-Site' element={<PortfolioPage/>}/>
        
        <Route path='/Compare-Ilvl-Tooltip' element={<CompareIlvlTooltip/>}/>
        <Route path='/Browser-Automation-Tool' element={<BrowserAutomationTool/>}/>
        <Route path='/Robotics-Project' element={<RoboticsPage/>}/>

        <Route path='/RetroFX-Tools' element={<RetroFXTools/>}/>
        <Route path='/Water-Shader' element={<WaterShaderPage/>}/>
        <Route path='/About' element={<AboutPage/>}/>
      </Routes>      
    
      
    </BrowserRouter>

    
  );
}

export default App;
