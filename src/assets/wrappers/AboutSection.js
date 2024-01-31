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
    object-fit: cover;
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
      padding-top: 0px;
     
      height: 200px;
    }

    .profile-photo img {
      width: 80px; // Slightly smaller image on mobile
      height: 80px;
      object-fit: cover;
    }

    .introduction .about-title {
      font-size: 1.5rem; // Slightly smaller font on mobile
    }

    .background {
      font-size: 12px; // Slightly smaller font for the text
    }
  }
  @media (max-width: 375px) { // Media query for tablets and mobile devices
    .about-section {
      width: 95%; // Slightly narrower on small screens
      padding-top: 0px;
     
      height: 0px;
    }

    .profile-photo img {
      width: 80px; // Slightly smaller image on mobile
      height: 40px;
      object-fit: cover;
    }

    .introduction .about-title {
      font-size: 1.5rem; // Slightly smaller font on mobile
    }

    .background {
      font-size: 12px; // Slightly smaller font for the text
    }
  }
 @media (min-width: 769px) and (max-width: 1499px) {
    .about-section {
      padding-top: 150px; /* Normal top padding for medium to large screens */
      padding-bottom: 150px; /* Normal bottom padding */
    }
  }
  @media (max-width: 1800px) {
    .about-section {
      padding-top: 150px; /* Increase top padding for larger screens */
      padding-bottom: 00px; /* Increase bottom padding to avoid overlap */
    }
  
    @media (min-height: 843px) {
      .about-section {
       
        padding-top: 100px;
        padding-bottom: 150px;
      }
    }
  @media (max-height: 842px) {
      .about-section {
        // Reduce padding for screens with a height less than 842px
        padding-top: 100px;
        padding-bottom: 100px;
      }
    }
    @media (min-width: 769px) and (max-width: 1038px) {
      .about-section {
        padding-top: 80px; // Reduced top padding for medium screens
        padding-bottom: 80px; // Matching bottom padding
      }
    }
  
    @media (min-width: 1039px) and (max-height: 692px) {
      .about-section {
        padding-top: 100px; // Adjusted for specific size
        padding-bottom: 100px;
      }
    }
  
    @media (min-width: 1039px) and (min-height: 693px) {
      .about-section {
        padding-top: 150px; // Higher padding for larger heights
        padding-bottom: 150px;
      }
    }
    @media (min-width: 1629px) and (min-height: 843px) {
      .about-section {
        padding-top: 100px; // Specific adjustment for 1629x842 resolution
        padding-bottom: 200px;
      }
    }
  
`;

export default AboutSectionWrapper;
