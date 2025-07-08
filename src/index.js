import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';


import { AppProvider } from './context/appContext';

import HomePage from "../src/pages/HomePage";
import Error from "../src/pages/Error";
import About from "../src/pages/About";
import Portfolio from "../src/pages/Portfolio";
import RecentProject from "../src/pages/RecentProject";
import MindWave from "../src/pages/MindWave";
import GameDesign from "../src/pages/GameDesign";
import TechArt from "../src/components/CategoryHighlights//TechnicalArtHighlights";
import GameDev from "../src/components/CategoryHighlights/GameDevelopmentHighlights";
import SoftQA from "../src/components/CategoryHighlights/SoftwareQAHighlights";
import WebDev from "../src/components/CategoryHighlights/WebDevelopmentHighlights";

import gameDev from "../src/pages/"
export{
    HomePage, About, Portfolio, RecentProject, MindWave, Error, GameDesign, TechArt, GameDev, SoftQA, WebDev,
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppProvider>
    <App />
  </AppProvider>
  </React.StrictMode>
);
