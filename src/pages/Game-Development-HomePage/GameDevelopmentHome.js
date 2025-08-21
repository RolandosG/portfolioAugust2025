import React from 'react';
import Header from '../../components/Header';
import GameDevelopmentHighlights from '../../components/CategoryHighlights/GameDevelopmentHighlights';
import Wrapper from '../../assets/wrappers/Dashboard';
import GameGif from '../../assets/mp4/gamegif.gif';
import './GameDevelopmentHome.css';

const GameDevelopmentHome = () => {
  return (
    <Wrapper>
       <Header />
      <div className="game-development-wrapper">
       
        <main className='container'>
          <GameDevelopmentHighlights />
        </main>
      </div>
    </Wrapper>
  );
};

export default GameDevelopmentHome;