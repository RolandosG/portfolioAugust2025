import styled from 'styled-components';

const GameDesignWrapper = styled.div`
  background: #222429;
  overflow: hidden;
  position: relative;
  padding: 20px;
  height: 100vh;
  .scroll-container {
    margin-top: 0;
    top: 0;
    
  }

  .section-container {
    padding: 20px;
  }

  .expanded-project-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  h2 {
    margin-top: 0px;
    color: #fff;
    text-align: center;
    font-size: 2.5rem;
  }
`;

export default GameDesignWrapper;