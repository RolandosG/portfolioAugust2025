/* RetroFXShaderPage.css */
import styled from 'styled-components'
const Wrapper = styled.section`
    .retroFX-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: linear-gradient(to bottom, #2d3436, #00cec9);
        color: #ffffff;
        font-family: 'Arial', sans-serif;
        text-align: center;
        padding: 20px;
    }
    canvas {
        width: 100%;
        height: 100%;
        border: 2px solid #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }
    .retroFX-shader-header {
        margin-bottom: 40px;
        padding: 20px;
        background: rgba(45, 52, 54, 0.8);
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
    }
    .retroFX-shader-header h1 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 20px;
        color: #00cec9;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    .retroFX-shader-header p {
        font-size: 1.2rem;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto 30px;
        color: #dfe6e9;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
        letter-spacing: 0.5px;
        text-align: justify;
    }
    .retroFX-preview {
        margin-bottom: 40px;
        padding: 20px;
        background: rgba(45, 52, 54, 0.8);
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
    }
    .retroFX-preview h2 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 20px;
        color: #00cec9;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }
    .retroFX-preview p {
        font-size: 1.2rem;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto 30px;
        color: #dfe6e9;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
        letter-spacing: 0.5px;
        text-align: justify;
    }
    .retroFX-shader-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background: rgba(45, 52, 54, 0.9);
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
        margin-bottom: 40px;
    }
    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 20px;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
        color: #dfe6e9;
        letter-spacing: 1.5px;
        line-height: 1.2;
    }
    h2 {
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 15px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        color: #00cec9;
        letter-spacing: 1px;
        line-height: 1.3;
    }

    h3 {
        font-size: 1.8rem;
        font-weight: 500;
        margin-bottom: 10px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
        color: #ffffff;
        letter-spacing: 0.8px;
        line-height: 1.4;
        margin-top: 20px;
        margin-bottom: 10px;
        text-align: center;
        padding: 10px;
        background: rgba(45, 52, 54, 0.8);
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transition: background 0.3s ease;
    }
    p {
        font-size: 1.2rem;
        line-height: 1.8;
        max-width: 800px;
        margin: 0 auto 30px;
        color: #dfe6e9;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
        letter-spacing: 0.5px;
        margin-bottom: 30px;
        text-align: justify;
        padding: 0 20px;
        background: rgba(45, 52, 54, 0.5);
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transition: background 0.3s ease;
    }
    .retroFX-description {
        font-size: 1.2rem;
        line-height: 1.6;
        max-width: 800px;
        margin-bottom: 40px;
        color: #dfe6e9;
    }

    .retroFX-canvas {
        width: 100%;
        max-width: 1200px;
        height: 677px;
        border: 2px solid #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
        overflow: hidden;
    }

    .retroFX-canvas iframe {
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
    }

    .retroFX-gallery {
        margin-top: 50px;
        text-align: center;
    }

    .retroFX-gallery h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
        color: #ffffff;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }

    .carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .carousel-track {
        width: 80%;
        max-width: 800px;
        overflow: hidden;
        border: 2px solid #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
    }

    .carousel-image {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.3s ease;
    }

    .carousel-image:hover {
        transform: scale(1.05);
    }

    .carousel-button {
        background: none;
        border: none;
        color: #2d3436;
        font-size: 2rem;
        cursor: pointer;
        padding: 10px;
        transition: transform 0.2s ease, color 0.2s ease;
    }

    .carousel-button:hover {
        transform: scale(1.2);
        color: #00cec9;
    }

    .carousel-button.prev {
        margin-right: 10px;
    }

    .carousel-button.next {
        margin-left: 10px;
    }

    .retroFX-footer {
        margin-top: 20px;
        font-size: 0.9rem;
        color: #b2bec3;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
`;

export default Wrapper
