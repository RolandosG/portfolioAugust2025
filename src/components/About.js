import React from 'react';
import Header from '../components/Header';
import Wrapper from '../assets/wrappers/about';
import selfie from '../assets/images/selfie01.JPG';

const About = () => {
  return (
    <Wrapper>
      <Header />
      <main
        style={{
          background: '#222429',
          width: '100vw',
          minHeight: '93.5vh', // Ensure it covers the full viewport height
          margin: 0,
          padding: 0, // Remove padding to avoid overflow
          overflow: 'hidden', // Prevent scrollbars
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '2rem', // Padding here for content spacing
            flex: 1, // Fill remaining space after Header
            overflow: 'hidden',
            animation: 'highlightSlideDown 1.8s ease-out forwards',
          }}
        >
          {/* Profile Image */}
          <div
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              backgroundImage: `url(${selfie})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '3px solid #ff0000',
              boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
              flexShrink: 0,
              animation: 'highlightSlideDown 1.8s ease-out forwards',
            }}
          />

          {/* Content */}
          <div style={{ flex: 1 }}>
            {/* Name */}
            <h1
              style={{
                fontSize: '3rem',
                color: '#ff0000',
                textShadow: '2px 2px #ff0000',
                marginBottom: '1rem',
                animation: 'highlightSlideDown 1.8s ease-out forwards',
              }}
            >
              Rolandos Georgoulis
            </h1>

            {/* Title */}
            <h2
              style={{
                fontSize: '1.5rem',
                color: '#ff0000',
                marginBottom: '2rem',
                animation: 'highlightSlideDown 1.8s ease-out forwards',
              }}
            >
             
            </h2>

            {/* Description */}
            <div
              style={{
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '2rem',
                animation: 'highlightSlideDown 1.8s ease-out forwards',
              }}
            >
              <p>
              I’m a versatile software developer, technical artist, and proficient problem solver, 
              driven to craft immersive games and applications with sharp technical leadership and innovative solutions.
              </p>
              <p style={{ marginTop: '1rem' }}>
              With expertise in Unity, Unreal Engine 5, C#, C++, JavaScript/TypeScript, and React. <br/><br/> 
              I’ve built high-performance solutions like the Retro FX Toolkit, and NarritveFX Tooltik for UE5 (Both published on Fab) 
              and a full-stack social media platform using AWS and MongoDB. My work includes optimizing game 
              performance and finding and problem solving critical defects and documenting as a freelance QA tester
              for Digivante, uTest and PlaytestCloud.
              </p>
              <p style={{ marginTop: '1rem' }}>
  Holding an Advanced Diploma in Computer Programming & Analysis from Seneca College and certifications in Microsoft Azure (AZ-900) and Google Data Analytics, I’m eager to contribute technical expertise and creative vision to innovative development teams.
</p>
            </div>

            {/* Contact Info */}
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                color: '#cccccc',
                fontSize: '1rem',
              }}
            >
              <span>📧 georgoulis.rolandos@gmail.com</span>
              <span>🌐 Rolandosg.com</span>
              <span>📍 Toronto, Ontario</span>
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default About;