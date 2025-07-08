/* OceanShaderPage.css */
import styled from 'styled-components'
const Wrapper = styled.section`

.ocean-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to bottom, #1e3c72, #2a5298);
    color: #ffffff;
    font-family: 'Arial', sans-serif;
    text-align: center;
    padding: 20px;
}

.ocean-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.ocean-description {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 800px;
    margin-bottom: 40px;
}

.ocean-canvas {
    width: 100%;
    max-width: 1200px;
    height: 600px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.ocean-footer {
    margin-top: 20px;
    font-size: 0.9rem;
    color: #d1d1d1;
}`

export default Wrapper