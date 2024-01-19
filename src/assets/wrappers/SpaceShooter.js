import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
const Wrapper = styled.section`

.video-container {
    position: relative;
    width: 100%;
    height: 400px; /* or whatever height you want */
    overflow: hidden;
  }
  
  .background-video {
    position: absolute;
    width: auto;
    min-width: 100%;
    height: 100%;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover; 
  }
  
  .overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white; /* or any other color for the text */
  }
  
  .background-gif {
    width: 100%;
    height: 100%;
    z-index: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  /* Styles for the Project Overview Section */
  
  #project-overview {
    background: rgba(0, 0, 0, 0.05); /* A light background to differentiate the section */
    border-radius: 5px; /* Rounded edges for a softer look */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    padding: 40px; 
    transition: all 0.3s; /* Smooth transition for any interaction or resizing */
    color: white;
}

#project-overview:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
}

  
  #project-overview h2 {
      font-size: 2.5em; /* Increase the font size for the section title */
      text-align: center; /* Center the title */
      margin-bottom: 30px; /* Space below the title */
  }
  
  #project-overview .description,
  #project-overview .technologies {
      margin-bottom: 30px; /* Adds space between description and technologies sections */
  }
  
  #project-overview h3 {
      font-size: 2em; /* Increase the font size for the subsection titles */
      border-bottom: 2px solid #555; /* Underline for subsection titles */
      margin-bottom: 15px; /* Space below the subsection titles */
  }
  
  #project-overview p {
      font-size: 1.2em; /* Increase the font size for the content */
      line-height: 1.5; /* Spacing between lines for readability */
      margin: 0 0 15px 0; /* Spacing below each paragraph */
  }
  /* Base styling for the game highlights section */
  #game-highlights, #enemy-highlights {
    display: flex;
    gap: 15px;
    justify-content: flex-start; /* aligns children to the start (left side) */
    align-items: flex-start; /* aligns children to the top */
    flex-wrap: wrap; /* allows children to wrap to the next line */
}
  
  #game-highlights h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 30px;
  }
  
  .highlight-section {
      margin-bottom: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
  }
  
  .highlight-section h3 {
      flex: 1 1 100%;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 20px;
  }
  
  .highlight-tabs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 200px;
    margin-right: 30px;
}
  
  .highlight-tabs button {
    padding: 10px;
    width: 100%; /* buttons take the full width of the container */
    text-align: center;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .highlight-tabs button:hover {
    background-color: #555;
  }
  
  
  .highlight-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200; /* taking into consideration the width and margin of .highlight-tabs */
}
  
  .highlight-content img {
    width: 70%; /* adjust as needed */
    margin-bottom: 15px;
  }
  
  .highlight-content pre {
    max-width: 70%; /* adjust as needed */
    overflow-x: auto; /* in case the code is too wide */
  }
  
  .highlight-content code {
      color: #f2a365; /* A soft orange tone for the code */
  }
  
  /* Responsive considerations */
  @media (max-width: 768px) { /* Adjust for tablets and smaller */
      .highlight-content {
          flex-direction: column;
      }
  
      .highlight-content img, .highlight-content pre {
          flex: 1 1 100%;
          max-width: 100%;
          margin-bottom: 20px;
      }
  }
  
  .upgrade-system-gif {
    width: 96%; /* or set a fixed width like 300px if needed */
    max-width: 700px; /* ensure it doesn't become too big on larger screens */
    height: auto; /* maintain aspect ratio */
    display: block; /* to center the image if needed */
    margin: 0 auto; /* to center the image if needed */
  }
  .Main-Boss {
    width: 100%; /* or set a fixed width like 300px if needed */
    max-width: 700px; /* ensure it doesn't become too big on larger screens */
    height: auto; /* maintain aspect ratio */
    display: block; /* to center the image if needed */
    margin: 0 auto; /* to center the image if needed */ 
  }
  .Event-gif {
    width: 90%; /* or set a fixed width like 300px if needed */
    max-width: 400px; /* ensure it doesn't become too big on larger screens */
    height: auto; /* maintain aspect ratio */
    display: block; /* to center the image if needed */
    margin: 0 auto; /* to center the image if needed */ 
  }
  .slide-effect {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-text: center;
  }
  .slideRight {
    top: 0px;
    //left:10px;
    animation: slideRight ease 2.4s forwards 1.2s;
  }
  @keyframes slideRight {
    0% {transform: translateX(0);}
    100% {transform: translateX(03px);opacity:1;}
  }
  .slideRight {
    position: relative;
    font-family: "Open Sans", sans-serif;
    //font-family: tahoma;
    font-color: white;
    font-size: 18px;
    opacity:0;
    
    
  }
  .media-gallery {
    display: flex;            /* Makes the container a flexbox container */
    justify-content: center;  /* Horizontally centers the images */
    flex-wrap: wrap;          /* Allows the items to wrap to the next line if there isn't enough space */
    gap: 10px;                /* Space between images */
}

.media-gallery img {
    width: 400px;             /* Width of each image */
    height: auto;             /* Maintains aspect ratio */
    max-width: 100%;          /* Makes sure the image doesn't exceed its container's width */
}

.enemy-gif {
    width: 90%; /* adjust as needed */
    max-width: 500px; 
    height: auto; 
    display: block; 
    margin: 0 auto;
  }
  
  .download-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #333;
    cursor: pointer;
    transition: background-color 0.3s;
}

.download-button:hover {
    background-color: #555;
}
#archived-features {
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    background: #1f2833;
    color: #66fcf1;
}

#archived-features h2 {
    font-size: 2em;
    margin-bottom: 10px;
}

#archived-features p {
    margin-bottom: 10px;
}

#archived-features a {
    color: #45a29e;
    text-decoration: none;
}
@media (max-width: 768px) {
  /* Mobile-specific styles */
  .highlight-content {
    width: 100%; /* Ensure the container takes full width */
    padding: 0 10px; /* Adjust padding to ensure content does not overflow */
    box-sizing: border-box; /* Include padding in the width calculation */
  }
  .highlight-tabs {
    display: flex;
    flex-direction: row; /* Change to column if you want vertical stacking */
    flex-wrap: wrap;
    justify-content: center; /* Center the buttons */
    gap: 10px; /* Space between buttons */
  }

  .highlight-tabs button {
    flex: 1 1 auto; /* Allow buttons to take available space and wrap */
    padding: 8px 10px; /* Adjust padding for smaller screens */
    font-size: 0.9rem; /* Adjust font size */
  }

  .highlight-content img {
    width: 100%; /* Full width images on mobile */
    max-width: 400px; /* Limit maximum width */
    height: auto; /* Maintain aspect ratio */
  }

  .highlight-content pre, .highlight-content code {
    font-size: 0.8rem; /* Reduce font size for code blocks */
    word-wrap: break-word; /* Allows long words to break and wrap onto the next line */
    white-space: normal; /* Ensures normal text wrapping */
  }

  .upgrade-system-gif, .Main-Boss, .Event-gif {
    /* Adjust these styles as needed for mobile */
    max-width: 100%; /* Full width on mobile */
  }
  .overlay-content {
    padding: 10px; /* Adds padding to prevent text touching the screen edges */
    box-sizing: border-box; /* Includes padding in the width calculation */
  }

  .overlay-content p {
    font-size: .8em; /* Adjusts font size for mobile, if needed */
    text-align: center;
  }

  .download-button a {
    display: block; /* Ensures the link takes the full width of the button */
    text-align: center; /* Centers the text within the link */
  }
}
`
export default Wrapper