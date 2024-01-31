import React, { useEffect, useState, useRef } from 'react';

import Header from '../components/Header';
import Wrapper from '../assets/wrappers/MindWave';
import MindWaveph1 from '../assets/images/MindWave_ph1.png';
import { SiReact, SiTypescript, SiExpress, SiMongodb, SiAwsamplify, SiLeaflet, SiSass, SiJest } from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import WS from '../assets/images/websocket.svg'; // Ensure you import the WebSocket icon correctly

import GlobalMoodMapImage from '../assets/images/map.png';
import FirstImage from '../assets/images/Explore.png';
import SecondImage from '../assets/images/Profile.png';
import TrendAnalysisImage from '../assets/images/trends.png';

const ScrollingImage = ({ src }) => {
    const imageRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;
        const resetAnimation = () => {
            image.style.animation = 'none';
            // Trigger reflow to reset the animation
            void(image.offsetHeight);
            image.style.animation = '';
        };

        image.addEventListener('animationiteration', resetAnimation);

        return () => {
            image.removeEventListener('animationiteration', resetAnimation);
        };
    }, []);

    return (
        <div className="image-container">
            <img ref={imageRef} src={src} alt="Scrolling" />
        </div>
    );
};

function EngagingHeader() {
    // Content similar to your game header, but tailored for Mindwave
    // Consider using a background video or image that shows the social aspect of the site
    //const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const backgroundMedia = MindWaveph1;
    const renderOverlayContent = () => (
        <div className="overlay-content">
            <h1>Welcome to Mindwave</h1>
            <p>Connect globally, share, and explore the world.</p>
           
            <button className="explore-button">
                <a href="https://master.d72pvjeru1c09.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Explore Now!</a>
            </button>
            <br></br>
            <button className="learn-more-button">
                <a href="https://github.com/RolandosG/SM_MindWave" target="_blank" rel="noopener noreferrer">Learn More</a>
            </button>
        </div>
    );

    

    return (
        <div className="photo-container">
             <img src={backgroundMedia} alt="Background" className="background-photo" />
            {renderOverlayContent()}
        </div>
    );
}
function ProjectOverview() {
    const techIcons = [
        <SiReact size={50} title="React" />,
        <SiTypescript size={50} title="TypeScript" />,
        <SiExpress size={50} title="Express" />,
        <SiMongodb size={50} title="MongoDB" />,
        <SiAwsamplify size={50} title="AWS Amplify" />,
        <SiLeaflet size={50} title="Leaflet" />,
        <SiSass size={50} title="Sass" />,
        <SiJest size={50} title="Jest" />,
        <FaNodeJs size={50} title="Node.js" />,
        <img src={WS} style={{ width: '50px' }} alt="WebSocket" title="WebSocket" />
    ];
        return (
            <section id="project-overview">
                <h2>Project Overview</h2>
                
                <div className="description">
                    <h3>Description</h3>
                    <p>
                        MindWave is an innovative social media platform that reimagines the way people connect globally. 
                        It's designed to capture and visualize the collective mood of its users, offering a unique blend of social interaction and global sentiment analysis. 
                        Users can post their thoughts, feelings, and experiences, contributing to a worldwide mood map that changes in real-time.
                    </p>
                </div>
                
                <div className="vision">
                    <h3>Vision</h3>
                    <p>
                        My vision for MindWave is to create a more empathetic and connected world. 
                        By visualizing the emotional landscape of various regions, 
                        I aim to foster a deeper understanding and connection among people from different cultures and backgrounds.
                    </p>
                </div>
                
                <div className="technologies">
                    <h3>Technologies Used</h3>
                    <div className="tech-icons">
                    {techIcons.map((icon, index) => (
                        <div key={index} className="tech-icon">
                            {icon}
                        </div>
                    ))}
                </div>
                </div>
            </section>
        );
}
const RotatingImage = ({ images, interval }) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(current => images[(images.indexOf(current) + 1) % images.length]);
        }, interval);

        return () => clearInterval(intervalId);
    }, [images, interval]);

    return <img src={currentImage} alt="Feature" className="feature-image" />;
};
const FeatureHighlights = () => {
    return (
        <section id="feature-highlights">
            <h2>Feature Highlights</h2>
            <div className="features-container">
                
                {/* Global Mood Mapping Feature */}
                <div className="feature-card">
                    <img src={GlobalMoodMapImage} alt="Global Mood Mapping" className="feature-image" />
                    <div className="feature-info">
                        <h3>Global Mapping</h3>
                        <p>Explore global visuals on an interactive map...</p>
                    </div>
                </div>

                {/* Real-Time Interaction Feature */}
                <div className="feature-card">
                    {/* Using the RotatingImage component */}
                    <RotatingImage images={[FirstImage, SecondImage]} interval={3000} />
                    <div className="feature-info">
                        <h3>Real-Time Interaction</h3>
                        <p>Instantly connect with the community...</p>
                    </div>
                </div>

                {/* Trend Analysis Feature */}
                <div className="feature-card">
                    <ScrollingImage src={TrendAnalysisImage} />
                    <div className="feature-info">
                        <h3>Trend Analysis</h3>
                        <p>Get insights into popular topics...</p>
                    </div>
                </div>
            </div>
             {/* Additional Features */}
             <div className="additional-features">
                    <h3>User Capabilities</h3>
                    <div className="features-grid">
                    <ul className="features-list">
                        <li>Register for a personal account</li>
                        <li>Watch the map update in real-time with WebSockets</li>
                        <li>Map Resets every 3 months to keep data relavent</li>
                    </ul>
                    <ul className="features-list">
                        <li>View follower and following counts</li>
                        <li>Like and post updates</li>
                        <li>Use GIFs in posts</li>
                    </ul>
                    <ul className="features-list">
                        <li>Explore an infinite scroll feed</li>
                        <li>Access followers' infinite scroll feed</li>
                        <li>View Users profiles posts & liked posts</li>
                    </ul>
                    <ul className="features-list">
                        <li>Search for other users</li>
                        <li>Follow and unfollow other users</li>
                        <li>View daily, weekly, monthly, and yearly mood trends</li>
                    </ul>
                    <ul className="features-list">
                        <li>See what's most liked posts in trending section</li>
                        <li>Reset and change password</li>
                        <li>Delete User account</li>
                        
                    </ul>
                    <ul className="features-list">
                        <li>Interactive map</li>
                        <li>Countries displays number of user posts & are scored</li>
                        <li>Night & Day mode</li>
                        
                    </ul>
                    </div>
                </div>
        </section>
    );
}

function DevelopmentJourney() {
    return (
        <section id="development-journey">
            <h2>Development Journey</h2>
            
            <div className="development-narrative">
            <p class="section-separator">
                <h3>Conception & Challenges:</h3>
            </p>
                <p class="section-separator">
                    The journey of developing MindWave began with a vision to create an interactive platform that reflects the collective users globally. 
                    The initial challenge was to integrate real-time data visualization with user interactions in a seamless manner. 
                    This required exploring and experimenting with various technologies and libraries.
                </p>
                <p class="section-separator">
                <h3>Iterative Development & Refinements:</h3>
                </p>
                <p class="section-separator">
                    The development process was highly iterative. 
                    Initial prototypes were created to test the feasibility of real-time data updates and global mood mapping. 
                    Feedback from these early versions led to significant refinements, particularly in enhancing user experience and optimizing performance.
                </p>
                <p class="section-separator">
                <h3>Overcoming Technical Hurdles:</h3>
                </p>
                <p class="section-separator">
                    One of the significant technical hurdles was managing real-time data flow without overwhelming server resources. 
                    Implementing efficient WebSocket communication and optimizing database queries were key steps taken to overcome this. 
                    Another challenge was ensuring responsive and interactive map visuals, which was achieved through integrating Leaflet with custom geo-data processing.
                </p>
                <p class="section-separator">
                <h3>Final Outcome & Learning:</h3>
                </p>
                <p class="section-separator">
                    The final product, MindWave, is a testament to the power of persistence and continuous learning. 
                    The journey taught invaluable lessons in full-stack development, real-time data handling, and creating user-centric interfaces. 
                    As development continues, MindWave aims to evolve further, incorporating user feedback and emerging technologies.
                </p>
            </div>
        </section>
    );
}
function FutureRoadmap() {
    return (
    <section id="roadmap">
    <h2>Roadmap</h2>
    <div class="timeline">
        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Mobile Resizing & Map Optimization</h3>
                <p>Fix resizing for mobile and change the map's functionality to reduce operational costs.</p>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Profile Enhancements</h3>
                <p>Introduction of profile photos, banners, and a dislike button.</p>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Improved Algorithm for Explore Page</h3>
                <p>Implement a better algorithm to enhance user experience on the Explore page.</p>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Customizable User Settings</h3>
                <p>Expand the range of customizable settings available to users.</p>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-content">
                <h3>And much more...</h3>
                <p></p>
            </div>
        </div>
    </div>
</section>
    )
}

const MindWave = () => {
    return (
        <Wrapper>
            <main style={{background: "#222429", overflow: 'hidden'}}>
                <Header />
                <div style={{marginTop: '-206px !important', top: '0px !important'}}>
                    <EngagingHeader />
                   <div class="slideRight"> <ProjectOverview /></div>
                    <FeatureHighlights />
                    <DevelopmentJourney />
                    <FutureRoadmap/>
                </div>
                <footer>FOOTER</footer>
            </main>
        </Wrapper>
    );
}



export default MindWave;
