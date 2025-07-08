/* TechArt.css */
import styled from 'styled-components'

const Wrapper = styled.section`
.tech-art-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #f9f9f9;
    color: #333;
    font-family: 'Arial', sans-serif;
}

.tech-art-header {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
    color: #222;
}

.tech-art-description {
    font-size: 1rem;
    line-height: 1.6;
    text-align: center;
    max-width: 600px;
    margin-bottom: 2rem;
    color: #555;
}

.tech-art-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    width: 100%;
    max-width: 800px;
}

.tech-art-item {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-art-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.tech-art-item img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.tech-art-item-title {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
}

.tech-art-item-description {
    font-size: 0.9rem;
    color: #666;
}

.img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
}
`

export default Wrapper