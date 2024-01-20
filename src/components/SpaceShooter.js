import React from 'react';

import Header from '../components/Header';
import Wrapper from '../assets/wrappers/SpaceShooter';

import gameVideo from '../assets/mp4/game.mp4';
import gameVideoWebM from '../assets/mp4/gamewebm.webm';
import gameGif from '../assets/mp4/gamegif.gif';
import menuGif from '../assets/mp4/menugif.gif';
import bossGif from '../assets/mp4/bossgif.gif';
import eventGif from '../assets/mp4/realeventgif.gif';

import gamePic1 from '../assets/images/gamepic1.PNG';
import gamePic2 from '../assets/images/gamepic2.PNG';
import gamePic3 from '../assets/images/gamepic3.PNG';

import drone from '../assets/mp4/Drone.gif';
import sniper from '../assets/mp4/sniper.gif';
import shielder from '../assets/mp4/Shielder.gif';
import healerTrapper from '../assets/mp4/healer&Trapper.gif';
import summoner from '../assets/mp4/Summoner.gif';
import carrier from '../assets/mp4/Carrier.gif';

function EngagingHeader() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const renderOverlayContent = () => (
        <div className="overlay-content">
            <h1>Welcome to Space Shooter</h1>
            <p>A thrilling game of interstellar challenges and rewards.</p>
           
            <button className="download-button"><a href="https://mega.nz/file/IlRQDDZC#En6A-TSbq-DhhKdxOSyhSoALsFwxM2s8QK1803D-jHk" target="_blank" rel="noopener noreferrer">Download Game!</a></button>
            <br></br>
            <button className="download-button"><a href="https://github.com/RolandosG/Shape_Shooter_Game" target="_blank" rel="noopener noreferrer">View Github Repo!</a></button>
           
        </div>
    );

    if (isSafari) {
        return (
            <div className="video-container">
                <img src={gameGif} alt="Gameplay" className="background-gif" />
                {renderOverlayContent()}
            </div>
        );
    } else {
        return (
            <div className="video-container">
                <video autoPlay loop muted playsInline className="background-video">
                    <source src={gameVideo} type="video/mp4" />
                    <source src={gameVideoWebM} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                {renderOverlayContent()}
            </div>
        );
    }
}

function ProjectOverview() {
    return (
        <section id="project-overview">
            <h2>Project Overview</h2>
            
            <div className="description">
                <h3>Description</h3>
                <p>
                The game is a fun space shooter where players face 50 challenging waves of enemies. With an easy-to-use upgrade system, players can enhance their abilities. Each enemy type has its unique behavior, adding variety and excitement to every wave</p>
            </div>
            
            <div className="technologies">
                <h3>Technologies Used</h3>
                <p>
                    Unity, FireBase and C#, ensuring smooth gameplay and high-quality graphics with an indepth backend. 

                </p>
            </div>
        </section>
    );
}

function GameHighlights() {
    const [activeHighlight, setActiveHighlight] = React.useState('upgradingSystem');

    return (
        <section id="game-highlights">
            

            <div className="highlight-tabs">
            <h2>Game Highlights</h2>
                <button onClick={() => setActiveHighlight('upgradingSystem')}>Upgrading System</button>
                <button onClick={() => setActiveHighlight('mainBoss')}>Intricate Boss Design</button>
                <button onClick={() => setActiveHighlight('eventSystem')}>Event System</button>
            </div>

            {activeHighlight === 'upgradingSystem' && (
                <div className="highlight-content">
                    <img src={menuGif} alt="Upgrading System" className="upgrade-system-gif" />
                    <pre><code>A modular system allowing players to incrementally enhance their abilities.</code></pre>
                </div>
            )}

            {activeHighlight === 'mainBoss' && (
                <div className="highlight-content">
                    <img src={bossGif} alt="Main Boss" className="Main-Boss"/>
                    <pre><code> Github Link</code></pre>
                    <pre><code>multiple script boss with different phases & behaviours. <a href="https://github.com/RolandosG/space_shooter/tree/main/Enemies/Hydra" target="_blank" rel="noopener noreferrer">Github Link</a></code></pre>

                </div>
            )}

            {activeHighlight === 'eventSystem' && (
                <div className="highlight-content">
                    <img src={eventGif} alt="Event System" className="Event-gif"/>
                    <pre><code>Managing and spawning various types of enemies during the course of the game. <a href="https://github.com/RolandosG/space_shooter/tree/main/Enemies/EnemyManager" target="_blank" rel="noopener noreferrer">Github Link</a></code></pre>

                </div>
            )}

        </section>
    );
}

function EnemyHighlights() {
    const [activeEnemy, setActiveEnemy] = React.useState('enemyType1');

    return (
        <section id="enemy-highlights">
            
            <div className="highlight-tabs">
            
                <button onClick={() => setActiveEnemy('enemyType1')}>Drone</button>
                <button onClick={() => setActiveEnemy('enemyType2')}>Sniper</button>
                <button onClick={() => setActiveEnemy('enemyType3')}>Shielder</button>
                <button onClick={() => setActiveEnemy('enemyType4')}>Healer & Trapper</button>
                <button onClick={() => setActiveEnemy('enemyType5')}>Summoner</button>
                <button onClick={() => setActiveEnemy('enemyType6')}>Carrier</button>
                {/* Add more buttons for different enemies if needed */}
            </div>

            {activeEnemy === 'enemyType1' && (
                <div className="highlight-content">
                    <img src={drone} alt="Enemy Type 1" className="enemy-gif" />
                    <pre><code>Mortar type enemy. <a href="https://github.com/RolandosG/space_shooter/tree/main/Enemies/Drone" target="_blank" rel="noopener noreferrer">Github Link</a></code></pre>

                </div>
            )}

            {activeEnemy === 'enemyType2' && (
                <div className="highlight-content">
                    <img src={sniper} alt="Enemy Type 2" className="enemy-gif"/>
                    <pre><code>Quick attack type enemy. <a href="https://github.com/RolandosG/space_shooter/tree/main/Enemies/Sniper" target="_blank" rel="noopener noreferrer">Github Link</a></code></pre>

                </div>
            )}

            {activeEnemy === 'enemyType3' && (
                <div className="highlight-content">
                    <img src={shielder} alt="Enemy Type 3" className="enemy-gif"/>
                    <pre><code>Defends the sniper. <a href="https://github.com/RolandosG/space_shooter/tree/main/Enemies/Shielder" target="_blank" rel="noopener noreferrer">Github Link</a></code></pre>

                </div>
            )}
            {activeEnemy === 'enemyType4' && (
                <div className="highlight-content">
                    <img src={healerTrapper} alt="Enemy Type 4" className="enemy-gif"/>
                    <pre><code>The healer and trapper. <a href="https://github.com/RolandosG/space_shooter/tree/main/Enemies/Trapper%20%26%20Helper" target="_blank" rel="noopener noreferrer">Github Link</a></code></pre>

                </div>
            )}
            {activeEnemy === 'enemyType5' && (
                <div className="highlight-content">
                    <img src={summoner} alt="Enemy Type 5" className="enemy-gif"/>
                    <pre><code>A teleporting caster. <a href="https://github.com/RolandosG/space_shooter/tree/main/Enemies/Summoner" target="_blank" rel="noopener noreferrer">Github Link</a></code></pre>

                </div>
            )}
            {activeEnemy === 'enemyType6' && (
                <div className="highlight-content">
                    <img src={carrier} alt="Enemy Type 6" className="enemy-gif"/>
                    <pre><code>A massive battleship. <a href="https://github.com/RolandosG/space_shooter/tree/main/Enemies/Carrier" target="_blank" rel="noopener noreferrer">Github Link</a></code></pre>

                </div>
            )}

            {/* Add more content sections for different enemies if needed */}
        </section>
    );
}




function MediaGalleryGame() {
    return (
        <section id="media-gallery-game">
            <h2>Media Gallery (Game)</h2>

            {/* Screenshots & Videos */}
            <div className="media-gallery">
                {/* Replace these placeholder image tags with your game's media */}
                <img src={gamePic1} alt="Game Screenshot 1"/>
                <img src={gamePic2} alt="Game Screenshot 2"/>
                <img src={gamePic3} alt="Game Screenshot 2"/>
                {/* If you have video highlights, include them too */}
                {/* <video src="path_to_video1.mp4" controls></video> */}
            </div>

            {/* Embedded Gameplay */}
            <div className="embedded-gameplay">
                {/* You can embed a playable section of your game here */}
                {/* <iframe src="game_embed_link" width="640" height="360" frameborder="0" allowfullscreen></iframe> */}
                <p>Experience a snippet of the gameplay directly here!</p>
            </div>
        </section>
    );
}

// function GameMechanicsStrategies() {
//     return (
//         <section id="game-mechanics-strategies">
//             <h2>Game Mechanics & Strategies</h2>

//             {/* Unique Mechanics */}
//             <div className="unique-mechanics">
//                 <h3>Unique Mechanics</h3>
//                 <p>Description of the unique mechanics...</p>
//             </div>

//             {/* Strategies & Tips */}
//             <div className="strategies-tips">
//                 <h3>Strategies & Tips</h3>
//                 <p>Provide guidance for new players...</p>
//             </div>
//         </section>
//     );
// }

// function ProblemSolvingChronicles() {
//     return (
//         <section id="problem-solving-chronicles">
//             <h2>Problem-Solving Chronicles</h2>

//             {/* Challenge-Solution Pairing */}
//             <div className="challenge-solution">
//                 <h3>Challenge Faced</h3>
//                 <p>Description of a challenge...</p>
//                 <h3>Solution Found</h3>
//                 <p>Description of the solution...</p>
//             </div>

//             {/* Iterative Process */}
//             <div className="iterative-process">
//                 <h3>Iterative Process</h3>
//                 <p>Show early versions and the final version...</p>
//             </div>

//             {/* Critical Decisions */}
//             <div className="critical-decisions">
//                 <h3>Critical Decisions</h3>
//                 <p>Discuss key decisions made...</p>
//             </div>
//         </section>
//     );
// }
function ArchivedFeatures()
{
    return (
<section id="archived-features">
    <h2>Archived Features</h2>
    <p>In the early stages of Space Shooter, the game included a login system and a database for score tracking. Due to the maintenance needs of these features, they were eventually removed from the game. However, you can still explore the code for these features on GitHub.</p>
    <a href="https://github.com/RolandosG/space_shooter/tree/main/Archived%20features" target="_blank" rel="noopener noreferrer">View the Archived Features code on GitHub</a>
</section>
    );
}
const SpaceShooter = () => {
    return (
        <Wrapper>
            <main style={{background: "#222429", overflow: 'hidden'}}>
                <Header />
                <div style={{marginTop: '-206px !important', top: '0px !important'}}>
                    <EngagingHeader />
                   <div class="slideRight"> <ProjectOverview /></div>
                    <GameHighlights />
                    <EnemyHighlights/>
                    <MediaGalleryGame />
                    <ArchivedFeatures />
                </div>
                <footer>FOOTER</footer>
            </main>
        </Wrapper>
    );
}



export default SpaceShooter;