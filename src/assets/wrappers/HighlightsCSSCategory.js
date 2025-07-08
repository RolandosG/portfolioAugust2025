import styled from 'styled-components';

const HighlightsCSS = styled.div`
  .highlights {
    animation: highlightSlideDown 1.8s ease-out forwards;
    margin-top: 150px;
    padding-top: 80px;
  }

  @keyframes highlightSlideDown {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h1 {
    font-size: 25px;
    text-decoration: underline;
  }

  p {
    font-size: 18px;
  }

  .project-grid {
    display: flex;
    gap: 10px;
    align-items: stretch;
    width: 100%;
    height: 300px;
  }

  .project-card {
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-rows: auto auto auto;
    gap: 10px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    color: #fff;
    width: 300px;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out; /* Smooth transition for hover */
  }

  .project-card:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* Enhance shadow for depth */
    z-index: 10; /* Ensure card pops over others */
  }

  .card-content {
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
  }

  .project-details {
    grid-column: 1;
    word-wrap: break-word;
    max-width: 400px;
    overflow: hidden;
    text-align: left;
    height: 160px;
  }

  .tech-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
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
    grid-column: 1 / -1;
    color: #fff;
  }

  .dots-container {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .dot {
    height: 10px;
    width: 10px;
    background-color: #bbb;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }

  .dot.active {
    background-color: #717171;
  }

  @media (min-width: 768px) {
    .project-grid {
      display: flex;
    }
    .dots-container {
      display: none;
    }
  }

  .project-selector {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .project-selector button {
    background-color: #f0f0f0;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    font-size: 16px;
    font-weight: bold;
    width: 120px;
    text-align: center;
  }

  .project-selector button:hover {
    background-color: #e0e0e0;
  }

  .project-selector button:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    .project-grid {
      display: none;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
    }

    .project-card {
      width: 100%;
      height: 300px;
      scroll-snap-align: start;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease-out, box-shadow 0.3s ease-out; /* Smooth transition for mobile too */
    }

    .project-card:hover {
      transform: scale(1.05); /* Slightly enlarge on hover for mobile */
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }

    .project-details {
      display: none;
    }

    .project-selector button {
      padding: 8px 15px;
      font-size: 14px;
      width: 100px;
    }

    .tech-icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      padding-top: 180px;
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
      grid-column: 1 / -1;
      color: #fff;
    }
  }

  @media (max-width: 375px) {
    .project-grid {
      display: none;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
    }

    .project-card {
      width: 100%;
      height: 200px;
      scroll-snap-align: start;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    }

    .project-card:hover {
      transform: scale(1.05);
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }

    .project-details {
      display: none;
    }

    .project-selector button {
      padding: 8px 15px;
      font-size: 14px;
      width: 100px;
    }

    .tech-icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      padding-top: 80px;
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
      grid-column: 1 / -1;
      color: #fff;
    }
  }

  @media (min-width: 1039px) {
    .highlights {
      padding-top: 60px;
    }
  }

  @media (min-width: 1629px) {
    .highlights {
      padding-top: 80px;
    }
  }
`;

export default HighlightsCSS;