import React from 'react';
import ReactDOM from 'react-dom';
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
export {
    HomePage, About, Portfolio, RecentProject, MindWave, Error
};

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
