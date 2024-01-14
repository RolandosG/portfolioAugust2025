// AboutSectionWrapper.js
import styled from 'styled-components';

const AboutSectionWrapper = styled.section`
  .about-section {
    font-size: 16px;
    text-align: center;
    width: 500px;
    height: 100px;
    margin: auto; // Center the section on the page
  }

  .profile-photo img {
    width: 100px; // Adjust size as needed
    height: 100px; // Adjust size as needed
    border-radius: 50%; // Makes the image circular
    margin-bottom: 20px; // Space between the image and the title
  }
  
  .introduction .about-title {
    color: #003d49;
    font-size: 1.8rem;
    margin: 0;
    text-decoration: underline;
  }
  
  .background {
    padding-top: 0px;
    margin-top: 0;
    color: #003d49;
    text-align: center; 
    font-size: 14px;
  }
`;

export default AboutSectionWrapper;
