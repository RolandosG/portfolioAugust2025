import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
const Wrapper = styled.section`

.photo-container {
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
    color: black; /* or any other color for the text */
  }
  
  .background-photo {
    width: 100%;
    height: 100%;
    z-index: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0px;
    right: 0px;
  }
  .tech-icons {
    display: flex;
    flex-wrap: wrap; // Allow icons to wrap
    justify-content: center; // Center the icons
    gap: 10px; // Space between icons
    padding-top: 10px;
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
.learn-more-button{
    z-index: 102;
}
.explore-button{
    z-index: 102;
}
.photo-container:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 90%; /* Adjust the height based on your preference */
    z-index: 1;
    background: linear-gradient(to bottom, transparent, #000); /* This creates the fading effect */
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
#feature-highlights {
    text-align: center;
    padding: 50px 20px;
    //background: #f4f4f4; /* Light background for contrast */
    
}

#feature-highlights h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: white;
}

.features-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px; /* Space between cards */
}

.feature-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px; /* Fixed width for each card */
    overflow: hidden; /* Ensures the image fits within the border-radius */
    transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.feature-image {
    width: 100%;
    height: 200px;
    object-fit: cover; /* Ensures the image covers the area nicely */
}

.feature-info {
    padding: 20px;
    text-align: left;
}

.feature-info h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
}

.feature-info p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .features-container {
        flex-direction: column;
        align-items: center;
    }
}


@keyframes scrollImage {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-76%);
    }
}

.image-container {
    position: relative;
    width: 100%;
    height: 200px; /* Adjust as needed */
    overflow: hidden;
}

.image-container img {
    width: 100%;
    height: auto;
    animation: scrollImage 14s linear infinite; /* Adjust duration as needed */
}

.image-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px; /* Height of the fade effect */
    background: linear-gradient(to bottom, transparent, black);
}

#development-journey {
    padding: 20px;
    //background: #f7f7f7; /* Light background for contrast */
    border-radius: 8px; /* Slight rounding of corners */
    margin: 20px 0; /* Space above and below the section */
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Subtle shadow for depth */
    
    
}

#development-journey h2 {
    text-align: center; /* Center-align the section title */
    color: white; /* Dark color for the title */
    margin-bottom: 20px; /* Space below the title */
}

.development-narrative {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    color: white; /* Slightly lighter color for the text */
    line-height: 1.6; /* Spacing between lines */
    font-size: 1rem; /* Adjust font size as needed */
}

.development-narrative h3 {
    font-weight: 600; /* Slightly bolder font for subtitles */
    margin-top: 20px; /* Space above each subtitle */
    color: white; /* Darker color for subtitles */
    text-decoration: underline;
}

.development-narrative p {
    margin-top: 10px; /* Space above each paragraph */
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
    #development-journey {
        padding: 15px;
        margin: 15px 0;
    }
    .development-narrative {
        grid-template-columns: 1fr; /* Stack columns on smaller screens */
    }
    .development-narrative h3 {
        font-size: 1.1rem; /* Slightly larger font for subtitles on smaller screens */
        
    }

    .development-narrative p {
        font-size: 0.95rem; /* Slightly smaller font for paragraphs on smaller screens */
    }
}
.additional-features {
    margin-top: 20px; /* Space from the previous section */
    padding: 15px;
    //background: #f7f7f7;
    border-radius: 8px;
    
}
.additional-features h3 {
    color: white;
}
.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three columns of equal width */
    gap: 20px; /* Space between columns */
}

.features-list {
    list-style: none;
    padding-left: 0px; /* Indentation for bullets */
    margin-top: 0px;
}

.features-list li {
    border: 1px solid #ddd; /* Adds a border to each list item */
    padding: 10px; /* Adds some padding inside the list items */
    margin-bottom: 10px; /* Adds some space between list items */
    border-radius: 5px; /* Optional: Rounds the corners of the borders */
    background-color: #D3D3D3; /* Optional: Sets a background color for list items */
    transition: all 0.3s ease; /* Smooth transition for hover effects */
}
.features-list li:hover {
    background-color: #e9e9e9; /* Slightly changes the background color on hover */
    border-color: #ccc; /* Darkens the border color on hover */
}
.section-separator {
    margin-bottom: 1rem; /* Adjust spacing as needed */
    padding-bottom: 1rem; /* Spacing above the line */
    border-bottom: 1px solid #ccc; /* Creates a line below each paragraph */
}

/* Assuming you have a class for your development journey section */
#development-journey h3 {
    margin-top: 1rem; /* Add space above heading if needed */
}
#roadmap {
    //background: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    max-width: 800px;
    margin: auto;
    color: white;
}
#roadmap h2 {
    text-decoration: underline;
}
.timeline {
    position: relative;
    padding-left: 30px;
    list-style: none;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: white;
}

.timeline-item {
    margin-bottom: 20px;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-content {
   
    position: relative;
    //background: white;
    border-radius: 4px;
    padding: 15px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 01);
    transition: transform 0.8s ease, box-shadow 0.3s ease;
}
.timeline-content h3 {
    text-decoration: underline;
}

.timeline-content::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #333;
    border: 3px solid white;
}

.timeline-content h3 {
    margin-top: 0;
}
.timeline-item:hover .timeline-content {
    transform: scale(1.05); /* Increase the size slightly */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 2); /* Enhance the shadow for better visibility */
    transition: transform 0.8s ease, box-shadow 0.8s ease; /* Smooth transition for the effect */
}

`
export default Wrapper