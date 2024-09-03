import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {HomePage, Portfolio, RecentProject, Error, MindWave} from './pages';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
       {/*<Route path='/About' element={<About/>}/>*/}
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/3D-Unity-Game' element={<RecentProject/>}/>
        <Route path= '/MindWave' element={<MindWave/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>      
      
    </BrowserRouter>

    
  );
}

export default App;
