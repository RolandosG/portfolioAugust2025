import React, { useState } from 'react';
import Header from '../../components/Header';
import Wrapper from "./RetroFXShaderPageCS";

import retroFXPhotoCover from '../../assets/images/RetroFXPhotos/Cover.png';
import retroFXPhotoHauntedHouse from '../../assets/images/RetroFXPhotos/HauntedHouse.png';
import retroFXPhotoBeforeAndAfter from '../../assets/images/RetroFXPhotos/Before&After.png';
import retroFXPhotoOldSchool from '../../assets/images/RetroFXPhotos/OldSchool.png';
import retroFXPhotoFog from '../../assets/images/RetroFXPhotos/FOG.png';

const RetroFXShaderPage = () => {
    const images = [
        { src: retroFXPhotoCover, alt: "Retro FX Photo Cover" },
        { src: retroFXPhotoBeforeAndAfter, alt: "Retro FX Photo Before and After" },
        { src: retroFXPhotoHauntedHouse, alt: "Retro FX Photo Haunted House" },
        { src: retroFXPhotoOldSchool, alt: "Retro FX Photo Old School" },
        { src: retroFXPhotoFog, alt: "Retro FX Photo Fog" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Wrapper>
            <Header />
<header className="retroFX-shader-header">

    <h1>RetroFX Shader Pack</h1>
    
    <p>
        A collection of PS1 and VHS-inspired post-process shaders for Unreal Engine 5.5, 
        perfect for retro horror games, demakes, and nostalgic landscapes.
    </p>
</header>

    <section className="retroFX-preview">
        
        <h2>Shader Preview</h2>
        
        <div className="retroFX-canvas">
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/AcO3RVv_1lE?si=eENBlUNwJLfkvTcZ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    </section>

    <main className="retroFX-shader-content">
                    <section className="retroFX-gallery">
                        <h2>Gallery</h2>
                        <div className="carousel">
                            <button className="carousel-button prev" onClick={handlePrev}>‹</button>
                            <div className="carousel-track">
                                <img 
                                    src={images[currentIndex].src} 
                                    alt={images[currentIndex].alt} 
                                    className="carousel-image" 
                                />
                            </div>
                            <button className="carousel-button next" onClick={handleNext}>›</button>
                        </div>
                    </section>
                </main>
                    
                <footer className="retroFX-shader-footer">
                    <p>© 2025 Rolandos Georgoulis. All rights reserved.</p>
                </footer>
        </Wrapper>
    );
};

export default RetroFXShaderPage;