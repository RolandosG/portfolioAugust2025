import React from 'react';
import Header from '../../components/Header';
import Wrapper from "./OceanShaderPageCS";

import projectImage1 from '../../assets/mp4/wave1.gif';
import projectImage2 from '../../assets/mp4/wave2.gif';
import projectImage3 from '../../assets/mp4/wave3.gif';

const OceanShaderPage = () => {
    return (
        <Wrapper>
        <Header />
        <div className="ocean-shader-page">
            <header className="ocean-shader-header">
                <h1>Ocean Shader</h1>
                <p>An ocean environment using a simple plane for games and simulations, 
                    this shader combines gerstner waves recreating the ocean surface for a lifelike water surface.</p>
                <h2>Goal:</h2>
                <p>I aimed to balance visual fidelity with performance, enabling customizable, dynamic water for any scene.</p>
            </header>
            <main className="ocean-shader-content">
                <section className="shader-preview">
                    <h2>Shader Preview</h2>
                    <div className="shader-canvas">
                        {/* Replace with your WebGL/Three.js canvas or video */}
                        <p>Interactive shader preview coming soon!</p>
                    </div>
                </section>
                <section className="shader-details">
                    <h2>Details</h2>
                    <p>
                        This ocean shader was created using ONE Hefty Custom HLSL Script and simulates realistic
                        water movement, reflections, and refractions. It is optimized for
                        real-time rendering and can be used in games or simulations.
                    </p>
                    <h3>Gerstner Wave System:</h3>
                    <p>unique waves with varied directions, wavelengths, and amplitudes for complex, natural motion.</p>
                    <h3>Procedural Noisy light reflections</h3>
                    <p>While trying to create ocean foam, 
                        I ended up discovering that using a simple trick of a noise map, 
                        it was possible to re-create cost efficient light reflections on the surface!</p>
                    <h3>Color Gradient:</h3>
                    <p>Dynamic & Adjustable color gradient based on depth, enhancing realism, style and immersion depending the needs of projects.</p>
                    <h3>HLSL CODE:</h3>
                    <p>ADD CODE THING HERE</p>
                </section>
                <section className="shader-gallery">
                    <h2>Gallery</h2>
                    <div className="gallery-images">
                        {/* Replace with actual images */}
                        <img src={projectImage3} alt="Ocean Shader Example 1" />
                        <img src={projectImage1} alt="Ocean Shader Example 2" />
                    </div>
                </section>
            </main>
            <footer className="ocean-shader-footer">
                <p>© 2023 Your Name. All rights reserved.</p>
            </footer>
        </div>
        </Wrapper>
    );
};

export default OceanShaderPage;