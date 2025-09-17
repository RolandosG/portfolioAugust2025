import React from 'react';
import Header from '../components/Header';
import Wrapper from '../assets/wrappers/about';
import selfie from '../assets/images/selfie01.JPG';

const About = () => {
  return (
    <Wrapper>
      <Header />
      <main className="about-main">
        <section className="about-section">
          {/* Profile Image */}
          <div className="profile-image" />

          {/* Content */}
          <div className="content">
            {/* Name */}
            <h1 className="name">
              Rolandos Georgoulis
            </h1>

            {/* Title */}
            <h2 className="title">
              {/* Add title content here if needed */}
            </h2>

            {/* Description */}
            <div className="description">
              <p>
                I am a Designer with a unique blend of creative vision and technical expertise, specializing in systems design and player-driven experiences. 
                I am passionate about solving core development challenges to create tools that empower both developers and players.
              </p>
              <p>
                My portfolio includes the RetroFX Toolkit and NarrativeFX Toolkit, 
                both of which were published on Fab, demonstrating my ability to build robust, 
                polished systems. My work as a freelance QA tester for 
                companies like Digivante and uTest has given me a critical eye for detail, allowing me to proactively identify design flaws and optimize player-facing experiences.
              </p>
              <p>
                With a strong foundation in Unity, Unreal Engine 5, C#, and C++, 
                as well as an Advanced Diploma in Computer Programming & Analysis, 
                I'm ready to contribute my skills to innovative teams. 
                My background allows me to not only conceptualize engaging systems 
                but also to prototype and implement them from the ground up, bridging the gap between design and code.
              </p>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <span>📧 georgoulis.rolandos@gmail.com</span>
              <span>🌐 Rolandosg.com</span>
              <span>📍 Toronto, Ontario</span>
            </div>
          </div>
        </section>
      </main>
      
      <style jsx>{`
        .about-main {
          background: #222429;
          width: 100vw;
          min-height: 93.5vh;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .about-section {
          display: flex;
          align-items: center;
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          flex: 1;
          box-sizing: border-box;
          animation: highlightSlideDown 1.8s ease-out forwards;
        }

        .profile-image {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background-image: url(${selfie});
          background-size: cover;
          background-position: center;
          border: 3px solid #ff0000;
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
          flex-shrink: 0;
          animation: highlightSlideDown 1.8s ease-out forwards;
        }

        .content {
          flex: 1;
          max-width: 100%;
        }

        .name {
          font-size: 3rem;
          color: #ff0000;
          text-shadow: 2px 2px #ff0000;
          margin-bottom: 1rem;
          animation: highlightSlideDown 1.8s ease-out forwards;
        }

        .title {
          font-size: 1.5rem;
          color: #ff0000;
          margin-bottom: 2rem;
          animation: highlightSlideDown 1.8s ease-out forwards;
        }

        .description {
          color: white;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          animation: highlightSlideDown 1.8s ease-out forwards;
        }

        .description p {
          margin-top: 1rem;
        }

        .description p:first-child {
          margin-top: 0;
        }

        .contact-info {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          color: #cccccc;
          font-size: 1rem;
        }

        /* Tablet styles */
        @media (max-width: 768px) {
          .about-section {
            flex-direction: column;
            gap: 2rem;
            padding: 1rem;
            text-align: center;
          }

          .profile-image {
            width: 200px;
            height: 200px;
          }

          .name {
            font-size: 2.5rem;
          }

          .title {
            font-size: 1.3rem;
          }

          .description {
            font-size: 1rem;
            line-height: 1.5;
          }

          .contact-info {
            justify-content: center;
            gap: 1rem;
          }
        }

        /* Mobile styles */
        @media (max-width: 480px) {
          .about-section {
            padding: 1rem 0.5rem;
          }

          .profile-image {
            width: 150px;
            height: 150px;
          }

          .name {
            font-size: 2rem;
          }

          .title {
            font-size: 1.1rem;
          }

          .description {
            font-size: 0.9rem;
            line-height: 1.4;
          }

          .contact-info {
            font-size: 0.9rem;
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
          }
        }

        /* Extra small screens */
        @media (max-width: 360px) {
          .about-section {
            padding: 0.5rem;
          }

          .profile-image {
            width: 120px;
            height: 120px;
          }

          .name {
            font-size: 1.8rem;
          }

          .description {
            font-size: 0.85rem;
          }

          .contact-info {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default About;