import styled from 'styled-components';

const AboutSectionWrapper = styled.section`
  .about-section {
    font-size: 16px;
    text-align: center;
    width: 80%; // Use percentage for responsive width
    max-width: 500px; // Maximum width for larger screens
    margin: auto; // Center the section on the page
    padding: 20px; // Add some padding
    padding-top: 150px;
  }

  .profile-photo img {
    width: 100px; // Adjust size as needed
    height: 100px; // Adjust size as needed
    border-radius: 50%; // Makes the image circular
    margin-bottom: 20px; // Space between the image and the title
  }
  
  .introduction .about-title {
    color: #003d49;
    font-size: 1.8rem; // Larger font for title
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

  @media (max-width: 768px) { // Media query for tablets and mobile devices
    .about-section {
      width: 95%; // Slightly narrower on small screens
      padding-top: 50px;
    }

    .profile-photo img {
      width: 0px; // Slightly smaller image on mobile
      height: 0px;
    }

    .introduction .about-title {
      font-size: 1.5rem; // Slightly smaller font on mobile
    }

    .background {
      font-size: 12px; // Slightly smaller font for the text
    }
  }
`;

export default AboutSectionWrapper;
