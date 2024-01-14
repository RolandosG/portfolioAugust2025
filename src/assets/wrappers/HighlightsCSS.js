import styled from 'styled-components';

const HighlightsCSS = styled.div`
  .highlights {
    padding: 20px;
    overflow: hidden; // Prevent overflow issues when cards expand
  }

  h1 {
    font-size: 25px;
    text-decoration: underline;
  }

  p {
    font-size: 18px;
  }

  .project-grid {
    display: flex; // Flexbox layout for the cards
    gap: 10px; // Space between cards
    align-items: stretch; // Align the height of cards
    width: 800px;
    height: 300px;
    
  }

  .project-card {
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-rows: auto auto auto; // Three rows: auto-size for top and bottom, 1fr for middle
    gap: 10px;
    overflow: hidden;
    background-size: cover; // Cover the entire area of the card
    background-position: center; // Center the background image
    color: #fff;
  }
  .card-content {
    display: grid;
  grid-template-columns: 1fr; // Single column for description
  align-items: start;
  }
  .project-details {
    grid-column: 1; // Description in the first column
    word-wrap: break-word;
    max-width: 400px;
    overflow: hidden; 
    text-align: left;
    height: 160px;
  }
  
  .tech-icons {
    display: flex;
    flex-wrap: wrap; // Allow icons to wrap
    justify-content: center; // Center the icons
    gap: 10px; // Space between icons
    padding-top: 10px;
  }
  .title {
    text-align: center;
    font-size: 20px;
    color: #fff;
    margin: 0;
  
   padding-bottom: 10px;
  }
  .project-details h3 {
    grid-area: title;
    text-align: center;
  }
  
  .project-details p {
    grid-area: description;
    
  }
  
  .links a {
   
    color: #fff;
    text-decoration: underline;
    font-size: 14px;
  }

  
  
  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    grid-column: 1 / -1; // Links span both columns
    color: #fff;
  }

  @media (max-width: 768px) {
    .project-grid {
      display: block; // Stack cards vertically on smaller screens
    }
  
    .project-card {
      width: 100%; // Full width for each card
    }
  }
`;

export default HighlightsCSS;
