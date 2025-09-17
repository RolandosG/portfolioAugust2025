import React from 'react';
import Header from '../../components/Header';
import GameDesign from '../../components/CategoryHighlights/GameDesign';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #0f0f0f;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  main {
    flex: 1;
    padding: 0;
    overflow-x: hidden;
  }
`;

const GameDesignHome = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <GameDesign />
      </main>
    </Wrapper>
  );
};

export default GameDesignHome;