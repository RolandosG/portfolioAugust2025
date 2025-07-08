import React from 'react';

import Nav from "react-bootstrap/Nav";

import Header from '../components/Header';
import Wrapper from '../assets/wrappers/TechArt';

import projectImage1 from '../assets/mp4/wave1.gif';
import projectImage2 from '../assets/mp4/wave2.gif';
import projectImage3 from '../assets/mp4/wave3.gif';

import retroFXPhoto from '../assets/images/RetroFXPhotos/Cover.png';

function EngagingHeader() {
    return (
        <div className="video-container">
            <div className="overlay-content">
                <h1>Welcome to My Tech Art Portfolio</h1>
                <p>Explore my work and projects in the field of technical artistry.</p>
            </div>
        </div>
    );
}

function FeaturedProjects() {
    return (
        <section id="featured-projects">
            <h2>Featured Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <img src={retroFXPhoto} alt="Project 2" style={{ width: '800px', height: 'auto', objectFit: 'cover' }} />
                    
                    <h3>Retro FX Pack for UE5 
                        <br></br> 
                            <h5><Nav.Link href="/RetroFX">Learn more</Nav.Link></h5> 
                    </h3>
                    
                    <p>Unique classical retro aesthetical material shaders for post processing volumes.</p>
                </div>
                <div className="project-card">

                <img src={projectImage3} alt="Project 1" />
                    
                    <h3>Ocean Shader <br></br> <h5><Nav.Link href="/OceanShader">Learn more</Nav.Link></h5></h3>
                    
                    <p>Short description of the project.</p>

                </div>
                
            </div>
        </section>
    );
}

function AboutMe() {
    return (
        <section id="about-me">
            <h2>About Me</h2>
            <p>
                I am a passionate tech artist with experience in creating tools, shaders, and visual effects.
                My work bridges the gap between art and technology, enabling artists to bring their visions to life.
            </p>
        </section>
    );
}

function ArchivedFeatures() {
    return (
        <section id="archived-features">
            <h2>Archived Features</h2>
            <p>
                Some of my earlier projects and experiments are archived but still showcase my journey as a tech artist.
                Feel free to explore them on my GitHub repository.
            </p>
            <a href="https://github.com/YourGitHubProfile" target="_blank" rel="noopener noreferrer">
                View Archived Projects on GitHub
            </a>
        </section>
    );
}

const TechArt = () => {
    return (
        <Wrapper>
            <main style={{ background: "#f4f4f4", overflow: 'hidden' }}>
                <Header />
                <div style={{ marginTop: '-206px !important', top: '0px !important' }}>
                    <EngagingHeader />
                    <FeaturedProjects />
                    <AboutMe />
                    <ArchivedFeatures />
                </div>
                <footer style={{ textAlign: 'center', padding: '20px 0', background: '#222', color: '#fff' }}>
                    © {new Date().getFullYear()} Your Name. All rights reserved.
                </footer>
            </main>
        </Wrapper>
    );
};

export default TechArt;