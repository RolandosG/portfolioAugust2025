import styled from 'styled-components';

export const GridWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr; // Keep the grid proportions
  gap: 20px;
  padding: 20px;
  color: black;

  .recent-work {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: black;
}

.work-item {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding-bottom: 20px; 
    &:last-child {
      border-bottom: none;
    }
}

.work-image {
    width: 100%;
    max-width: 100px; // Adjust as needed
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.work-item h3 {
    margin-top: 10px;
    margin-bottom: 5px;
}

.work-item p {
  font-size: 14px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding-bottom: 20px; 
    &:last-child {
      border-bottom: none;
    }
}

.key-features {
    font-size: 14px;
    list-style: none;
    padding: 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding-bottom: 20px; 
    &:last-child {
      border-bottom: none;
    }
}

.key-features li {
    margin-bottom: 5px;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding-bottom: 20px; 
    &:last-child {
      border-bottom: none;
    }
}

.tech-stack-icon {
    position: relative;
    width: 30px; // Adjust as needed
    height: 30px; // Adjust as needed
    cursor: pointer;
}

.tech-stack-icon::after {
    content: attr(data-name); // This will display the tech name
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
}

.tech-stack-icon:hover::after {
    opacity: 1;
    visibility: visible;
}

.work-item a {
    display: inline-block;
    margin-right: 10px;
    text-decoration: none;
    color: #333;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.work-item a:hover {
    background-color: #009bba;
    color: white;
    border-color: #009bba;
}


  .project-container {
    height: 600px;
    overflow-y: scroll; // Scrollable project list
    align-self: start; // Aligns the container to the start of the grid area

    scrollbar-width: thin; /* For Firefox */
    scrollbar-color: #009bba #f5f5f5; /* For Firefox */
  
  }
  &::-webkit-scrollbar {
    width: 12px; /* Adjust the width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5; /* Color of the scrollbar track */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #009bba; /* Color of the scrollbar thumb */
    border-radius: 6px;
    border: 3px solid #f5f5f5; /* Creates padding around the scrollbar thumb */
  }
  .project-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-end; // Align project items to the right
  }

  .project-item {
    position: relative;
    background: linear-gradient(44deg, #009bba, #8ce6f6);
    border-radius: 10px;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden; !important
    padding: 15px;
    width: 100%;
    min-height: 120px;
  }
  
  .project-links {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 320px;
  }
  
  .project-content {
    flex-grow: 1;
    text-align: right;
    padding-left: 120px;
    padding-right: 20px;
  }
  
  .project-title, .project-description {
    font-size: 1rem;
  }
  
  .project-links a {
    color: #fff;
    margin-bottom: 10px;
  }
  
  .project-container {
    overflow-y: auto;
    padding-right: 20px;
  }
  
  .project-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-end;
  }
  
  .additional-info {
    display: none;
  }
  
  .project-item:hover {
    padding: 30px;
  }
  
  .project-item:hover .additional-info {
    display: block;
  }
  .project-image {
    width: 100px; // Adjust as needed
    height: auto;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 0px; // Space between content and image
    position: absolute;
    img {
      width: 300%;
      height: auto;
      border-radius: 5px; // Optional for rounded corners
    }
  }
  // Add media queries for responsiveness
`;





export default GridWrapper;
