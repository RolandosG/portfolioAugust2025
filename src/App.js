import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {HomePage, Error} from './pages';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GameDevelopmentHome from './pages/Game-Development-HomePage/GameDevelopmentHome';
import SoftwareQAHome from './pages/Software-QA-HomePage/SoftwareQAHome';
import TechnicalArtistHome from './pages/Technical-Artist-HomePage/TechnicalArtistHome';
import WebDevelopmentPage from './pages/Web-Development-HomePage/WebDevelopmentHome';
import GameDesignHome from './pages/GameDesign/GameDesignHome';
import AboutPage from '../src/pages/About';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GameDesignHome/>}/> {/* Make Game Design the landing page */}
        <Route path='/portfolio' element={<HomePage/>}/> {/* Landing page for all work sections */}
      
        <Route path='*' element={<Error/>}/>

        <Route path='/Game-Development' element={<GameDevelopmentHome/>}/>
        <Route path='/Software-engineer' element={<SoftwareQAHome/>}/>
        <Route path='/Technical-Art' element={<TechnicalArtistHome/>}/>
        <Route path='/web-development' element={<WebDevelopmentPage/>}/>
        <Route path='/About' element={<AboutPage/>}/>
      </Routes>      
    
      
    </BrowserRouter>

    
  );
}

export default App;
