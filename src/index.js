import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';


import { AppProvider } from './context/appContext';

import HomePage from "../src/pages/HomePage";
import Error from "../src/pages/Error";
import About from "../src/pages/About";


import TechArt from "../src/components/CategoryHighlights//TechnicalArtHighlights";
import GameDev from "../src/components/CategoryHighlights/GameDevelopmentHighlights";
import SoftQA from "../src/components/CategoryHighlights/SoftwareQAHighlights";
import WebDev from "../src/components/CategoryHighlights/WebDevelopmentHighlights";

export{
    HomePage, About, Error, TechArt, GameDev, SoftQA, WebDev,
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppProvider>
    <App />
  </AppProvider>
  </React.StrictMode>
);
