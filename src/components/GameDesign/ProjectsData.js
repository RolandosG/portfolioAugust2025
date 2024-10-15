import unrealPic from '../../assets/images/unreal.png';
import unityPic from '../../assets/images/gamepic3.PNG';
import horrorPic from '../../assets/images/gamephoto01.PNG';
import UnityBoss from '../../assets/images/UnityBoss.png';
import WowAddon from '../../assets/images/wowAddonImage.png';
import gamemp4 from '../../assets/mp4/bossgif.gif';
import scarygifcut from '../../assets/mp4/scarygifcut.gif';
import SlimeBoss from '../../assets/mp4/Slime_Boss.gif';
import thirdRpgGif from '../../assets/mp4/thirdrpgGif.gif';
import gamewebm from '../../assets/mp4/gamewebm.webm';
import spider from '../../assets/mp4/spiderEnemy.gif';
import dynamicEvents from '../../assets/mp4/dynamiceventsshowcase.gif';
import dynamicEventsTwo from '../../assets/mp4/dynamiceventsshowcasetwo.gif';
import noteScene from '../../assets/mp4/noteSceneGif.gif';
import photo01 from '../../assets/images/fpsPhotos/SCREENSHOT01.PNG';
import photo02 from '../../assets/images/fpsPhotos/SCREENSHOT02.PNG';
import photo03 from '../../assets/images/fpsPhotos/SCREENSHOT03.PNG';
import photo04 from '../../assets/images/fpsPhotos/SCREENSHOT04.PNG';
import UIShowcase from '../../assets/mp4/UIShowcase.gif';



// UNITY PROJECT


import gameVideo from '../../assets/mp4/game.mp4';
import gameVideoWebM from '../../assets/mp4/gamewebm.webm';
import gameGif from '../../assets/mp4/gamegif.gif';
import menuGif from '../../assets/mp4/menugif.gif';
import bossGif from '../../assets/mp4/bossgif.gif';
import eventGif from '../../assets/mp4/realeventgif.gif';
import gamePic1 from '../../assets/images/gamepic1.PNG';
import gamePic2 from '../../assets/images/gamepic2.PNG';
import gamePic3 from '../../assets/images/gamepic3.PNG';
import drone from '../../assets/mp4/Drone.gif';
import sniper from '../../assets/mp4/sniper.gif';
import shielder from '../../assets/mp4/Shielder.gif';
import healerTrapper from '../../assets/mp4/healer&Trapper.gif';
import summoner from '../../assets/mp4/Summoner.gif';
import carrier from '../../assets/mp4/Carrier.gif';
import { feature, features } from 'caniuse-lite';

const projectsData = [
    {
      id: 1,
    title: 'Horror FPS Game Design',
    docLink: 'https://docs.google.com/document/d/1Cdxwcf_6mHNqYPfpgeNyvcKWSEDxvqhVofoCBLrTuZo/edit?usp=sharing',
    image: horrorPic,
    gif: scarygifcut,
    featureGifs: [
      { src: scarygifcut, title: 'Scary Scene', description: 'A terrifying encounter with an enemy.' },
      { src: SlimeBoss, title: 'Slime Scene', description: 'A slime encounter with a slime.' },
      // Add more GIFs with titles and descriptions as needed
    ],
    challengeGifs: [
      { src: thirdRpgGif, title: 'AI Behavior', description: 'Complex enemy AI adapting to player actions.' },
      { src: SlimeBoss, title: 'AI Behavior', description: 'Complex enemy AI adapting to player actions.' },
    ],
    details: {
      role: 'Level Designer, Game Designer, Programmer, Sound Designer, Artist, Writer, Producer, QA Tester',
      concept: 'A FPS Horror adventure game with challenging combat, atmospheric environments, and a focus on adventure.',
      features: [
        { description: 'Dynamic Distant Environments events.', image: dynamicEvents },
        { description: 'Dynamic Close-Up Environmental events.', image: dynamicEventsTwo },
        { description: 'Complex enemy AI that adapts to player actions.', image: spider },
        { description: 'Immersive & Dynamic UI design to keep players engaged.', image: UIShowcase },
        { description: 'Multiple weapon types with unique mechanics.', videoUrl: 'https://www.youtube.com/embed/arICQ38_yS4?si=HKWTOXDCBSpanNuo' },
        { description: 'Atmospheric Encounters.', image: noteScene },

      ],
      technologies: [
        'Unreal Engine 4',
        'Blueprint Scripting',
        'AI Behavior Trees',
        'Dynamic Lighting and Post-Processing Effects',
        '3D Modeling and Animation',
        'Sound Design and Audio Implementation',
        'Chaos & fracture physics',
        'Substance Painter & Designer',
        'Perforce Version Control',
        'Niagara Particle System',
      ],
      challenges: [
        'Balancing difficulty to ensure a challenging yet fair experience.',
        'Creating a cohesive and immersive eerie atmosphere.',
        'Implementing complex system behaviors.',
        'Optimizing performance for a smooth gameplay experience.',
        'Managing a large project with a 1 member.',
        'Creating a compelling storyline.',
        'Designing levels that encourage exploration and reward the player.',
        'Creating an effective overlapping event system.',
      ],
      achievements: [
        'Successfully created a demo level that received positive feedback from playtesters.',
        'Implemented a dynamic UI system that enhances the experience.',
        'Developed a robust AI system that provides a challenging gameplay experience.',
        'Designed intricate levels with hidden secrets.',
        'Crafted a compelling storyline with multiple approaches based on player choices.',
        'Created a cohesive eerie atmosphere with immersive sound design and visuals.',
        'Optimized performance for smooth gameplay on a variety of hardware configurations.',
      ],
      screenshots: [
        { src: horrorPic, description: '' },
        { src: photo02, description: '' },
        { src: photo03, description: '' },
        { src: photo01, description: '' },
      ],
      developmentTimeline: [
        { milestone: 'Project Start', date: 'june 2024' },
        { milestone: 'First Playable Demo', date: 'september 2024' },
        { milestone: 'Beta Release', date: 'May 2025' },
      ],
      tools: [
        'Unreal Engine 4',
        'Substance Painter & Designer',
        'Perforce Version Control',
        'Adobe Photoshop',
        'Audacity',
      ],
      userFeedback: [
        { feedback: 'The atmosphere is incredibly immersive!', source: 'Playtester 1' },
        { feedback: 'The AI behavior is very challenging and engaging.', source: 'Playtester 2' },
      ],
      futurePlans: [
        'Add more levels and environments.',
        'Introduce new enemy types and AI behaviors.',
        'Implement rewards and collectibles for exploration.',
        'Enhance the storyline with more branching paths.',
        'Optimize performance and polish the game for release.',
        'Adding Random generated events for replayability.',
      ],
      philosophy: [
        {
          title: 'Immersion and Atmosphere',
          description: 'I prioritize creating a believable and unsettling world that draws players in and keeps them on edge. I achieve this through:',
          points: [
            'Detailed environmental storytelling and subtle world-building.',
            'Careful use of sound design and music to evoke specific emotions.',
            'Limited resources and challenging encounters to create a sense of vulnerability.'
          ]
        },
        {
          title: 'Player Agency and Choice',
          description: 'I want players to feel like their decisions matter, even within a linear narrative structure. I aim to achieve this by:',
          points: [
            '(Future Implementation) Incorporating meaningful choices that impact the story and relationships.',
            'Offering multiple approaches to challenges, allowing players to utilize stealth, combat, or a combination of both.'
          ]
        },
        {
          title: 'Innovation and Experimentation',
          description: "Im not afraid to push boundaries and try new things within the horror FPS genre. I demonstrate this through:",
          points: [
            'Dynamic environmental storytelling that evolves the world around the player.',
            'Unique gameplay mechanics like light and shadow manipulation.',
            'The use of psychological horror to create a sense of unease and distrust.'
          ]
        }
      ],
      },
      videoUrl: 'https://www.youtube.com/embed/BKFmySQyaJk?si=GOkZfpdchO2uzseL',
      finishedvideoUrl: 'https://www.youtube.com/embed/rDoGhbSwFes?si=MBlKAy1ZCPODVOJf',
    },
    {
      id: 2,
      title: 'Galactica/Starfox Inspired Game',
      image: unityPic,
      gif: gamemp4,
      featureGifs: [
        { src: menuGif, title: 'Upgrading System', description: 'A modular system allowing players to incrementally enhance their abilities.' },
        { src: bossGif, title: 'Intricate Boss Design', description: 'Multiple script boss with different phases & behaviours.' },
        { src: eventGif, title: 'Event System', description: 'Managing and spawning various types of enemies during the course of the game.' },
      ],
      challengeGifs: [
        { src: drone, title: 'Drone', description: 'Mortar type enemy.' },
        { src: sniper, title: 'Sniper', description: 'Quick attack type enemy.' },
        { src: shielder, title: 'Shielder', description: 'Defends the sniper.' },
        { src: healerTrapper, title: 'Healer & Trapper', description: 'The healer and trapper.' },
        { src: summoner, title: 'Summoner', description: 'A teleporting caster.' },
        { src: carrier, title: 'Carrier', description: 'A massive battleship.' },
      ],
      details: {
        role: 'Game Designer, Programmer',
        concept: 'A space combat game inspired by Galactica and Starfox, featuring intense dogfights and a thrilling mission. <a href="https://rolandosg.com/3D-Unity-Game" target="_blank">Learn more</a>',
        features: [
          { description: 'A modular system allowing players to incrementally enhance their abilities.', image: menuGif },
          { description: 'Multiple script boss with different phases & behaviours.', image: bossGif },
          { description: 'Managing and spawning various types of enemies during the course of the game.', image: eventGif },
        ],
        technologies: [
          'Unity',
          'Firebase',
          'C#',
        ],
        challenges: [
          'Balancing difficulty to ensure a challenging yet fair experience.',
          'Creating a cohesive and immersive space combat atmosphere.',
          'Implementing complex system behaviors.',
          'Optimizing performance for a smooth gameplay experience.',
          'Managing a large project with a one man team.',
          'Creating a compelling gameplay loop.',
          'Designing a level that encourage replayability and rewards the player.',
        ],
        achievements: [
          'Successfully created a demo level that received positive feedback from playtesters.',
          'Implemented a UI system that enhances the experience.',
          'Developed a robust AI system that provides a challenging gameplay experience.',
          'Designed an intricate yet simple game that is easy to pick up and play.',
          'Simple enemy design that allows the player to quickly identify threats.',
          'Created a cohesive space combat atmosphere with immersive sound design and visuals.',
          'Optimized performance for smooth gameplay on a variety of hardware configurations.',
        ],
        screenshots: [
          { src: gamePic1, description: 'Gameplay Screenshot 1' },
          { src: gamePic2, description: 'Gameplay Screenshot 2' },
          { src: gamePic3, description: 'Gameplay Screenshot 3' },
        ],
        developmentTimeline: [
          { milestone: 'Project Start', date: 'January 2023' },
          { milestone: 'First Playable Demo', date: 'April 2023' },
          { milestone: 'Beta Release', date: 'August 2023' },
        ],
        tools: [
          'Unity',
          'Firebase',
          'C#',
          'Adobe Photoshop',
          'Audacity',
        ],
        userFeedback: [
          { feedback: 'The space combat is incredibly immersive!', source: 'Playtester 1' },
          { feedback: 'The AI behavior is very challenging and engaging.', source: 'Playtester 2' },
        ],
        futurePlans: [
          'Add more levels and environments.',
          'Introduce new enemy types and AI behaviors.',
          'Implement rewards and collectibles for exploration.',
          'Enhance the storyline with more branching paths.',
          'Optimize performance and polish the game for release.',
          'Adding Random generated events for replayability.',
        ],
        philosophy: [
          {
            title: 'Immersion and Atmosphere',
            description: 'I prioritize creating a believable and engaging space combat world that draws players in and keeps them on edge. I achieve this through:',
            points: [
              'Simple yet Detailed environmental storytelling and subtle world and enemy building.',
              'Careful use of sound design to evoke specific emotions.',
              'Limited resources and challenging encounters to create a sense of vulnerability.'
            ]
          },
          {
            title: 'Player Agency and Choice',
            description: 'I want players to feel like their decisions matter, even within a linear narrative structure. I aim to achieve this by:',
            points: [
              'Incorporating meaningful choices that impact the player progression and abilities.',
              'Offering multiple approaches to challenges, allowing players to utilize health, damage, a combination of both or $$$ to upgrade their ship.'
            ]
          },
          {
            title: 'Innovation and Experimentation',
            description: "I'm not afraid to push boundaries and try new things within the space combat genre. I demonstrate this through:",
            points: [
              'Dynamic environmental storytelling that evolves the world around the player.',
              'Unique gameplay mechanics like shield, heal, trap, summon, carrier, and drone.',
              'The use of multiple enemy types to create a sense of unease and distrust.'
            ]
          }
        ],
      },
      videoUrl: gamewebm,
    },
    {
      id: 3,
      title: 'Platformer Mechanics Contributions',
      image: UnityBoss,
      gif: SlimeBoss, 
      details: { 
        role: 'Level Designer, Gameplay Programmer',
        concept: 'Collaborated on a platformer game, implementing various mechanics like player movement mechanics, enemy AI, Major Boss implementations.  <a href="https://github.com/RolandosG/UnityShowcase" target="_blank">Learn more</a>',
        technologies: [
          'Unity',
          'C#',
        ],
        features: [
          { description: 'Player movement mechanics.', image: SlimeBoss },
          { description: 'Enemy AI behaviors.', image: SlimeBoss },
          { description: 'Major Boss implementations.', image: UnityBoss },
        ],
        challenges: [
          'Balancing difficulty to ensure a challenging yet fair experience.',
          'Creating a cohesive and immersive Enemies that fit the world.',
          'Implementing complex AI behaviors.',
          'Optimizing performance for a smooth gameplay experience.',
          'Managing & building a large project with ancient code.',
          'Creating compelling bosses.',
          'Designing Boss AI that encourage replayability and rewards the player for their efforts.',
          'Creating an effective event system through out AI experiences.',
        ],
        developmentTimeline: [
          { milestone: 'Project Start', date: 'January 2023' },
          { milestone: 'First Playable Demo', date: 'TBA' },
          { milestone: 'Beta Release', date: 'TBA' },
        ],
        achievements: [
          'Successfully created a demo boss that received positive feedback from playtesters.',
          'Implemented mechanic systems that enhances the combat experience.',
          'Developed a robust AI system that provides a challenging gameplay experience.',
          'Designed intricate bosses.',
          'Crafted compelling AI with multiple approaches to defeat based on player choices.',
          'Created immersive sound design and visuals for these bosses.',
          'Optimized performance for smooth gameplay on a variety of hardware configurations.',
        ],
        userFeedback: [
          { feedback: 'The bosses are incredibly challenging and engaging!', source: 'Playtester 1' },
          { feedback: 'The AI behavior is very challenging and engaging.', source: 'Playtester 2' },
        ],
        futurePlans: [
          'Add more levels and environments.',
          'Introduce new enemy types and AI behaviors.',
          'Implement rewards and collectibles for exploration.',
          'Enhance the storyline with more branching paths.',
          'Optimize performance and polish the game for release.',
          'Adding Random generated events for replayability.',
        ],
      },
      videoUrl: 'https://www.youtube.com/embed/_gcrVDS0MgM?si=reJ92GmaTYfYGY3k', // Add this line
    },
    {
      id: 4,
      title: 'Souls-like Adventure Game',
      image: unrealPic,
      gif: thirdRpgGif, 
      details: { 
        role: 'Level Designer',
        concept: 'A 3rd person souls-like adventure game with challenging combat, atmospheric environments, and a focus on exploration.<a href="https://github.com/RolandosG/Grand-Adventure" target="_blank">Learn more</a>',
        technologies: [
          'Unreal Engine 4',
          'Blueprint Scripting',
          'AI Behavior Trees',
          'Dynamic Lighting and Post-Processing Effects',
          '3D Modeling and Animation',
          'Sound Design and Audio Implementation',
        ],
        challenges: [
          'Balancing events to ensure a challenging yet fair experience.',
          'Creating a cohesive and immersive world.',
          'Implementing complex AI Souls like boss behaviors.',
          'Optimizing performance for a smooth gameplay experience.',
          'Managing a large project with a team of one.',
          'Creating a compelling & cohesive storyline through environments alone.',
          'Designing levels that encourage exploration and reward the player.',
        ],
        features: [
          { description: 'Dynamic Distant Environments events.', image: dynamicEvents },
          { description: 'Dynamic Close-Up Environmental events.', image: dynamicEventsTwo },
          { description: 'Complex enemy AI that adapts to player actions.', image: spider },
          { description: 'Immersive & Dynamic UI design to keep players engaged.', image: UIShowcase },
          { description: 'Multiple weapon types with unique mechanics.', videoUrl: 'https://www.youtube.com/embed/arICQ38_yS4?si=HKWTOXDCBSpanNuo' },
          { description: 'Atmospheric Encounters.', image: noteScene },
        ],
        developmentTimeline: [
          { milestone: 'Project Start', date: 'August 2022' },
          { milestone: 'First Playable Demo', date: 'September 2022' },
          { milestone: 'Beta Release', date: 'September 2022' },
        ],
        achievements: [
          'Successfully created a demo level that received positive feedback from playtesters.',
          'Implemented a dynamic UI system that enhances the experience.',
          'Developed a robust AI system that provides a challenging gameplay experience.',
          'Designed intricate levels with hidden secrets.',
          'Crafted a compelling storyline with multiple approaches based on player choices.',
          'Created a cohesive eerie atmosphere with immersive sound design and visuals.',
          'Optimized performance for smooth gameplay on a variety of hardware configurations.',
        ],
        userFeedback: [
          { feedback: 'The atmosphere is incredibly immersive!', source: 'Playtester 1' },
          { feedback: 'The AI behavior is very challenging and engaging.', source: 'Playtester 2' },
        ],
        futurePlans: [
          'Completed',
        ],
        // ... (add more details for this project)
      },
      videoUrl: 'https://www.youtube.com/embed/GpPjLehmRSk?si=ZdajTF8a1DL75SnO', // Add this line
    },
    {
      id: 5,
      title: 'World of Warcraft Addon',
      image: WowAddon,
      gif: WowAddon,  // GIFs might not be applicable for addons
      details: { 
        features: [
          { description: 'Enhanced user interface for World of Warcraft.', image: WowAddon },
          { description: 'Additionally this addon makes an entire in game button not needed saving players time.', image: WowAddon },
        ],
        role: 'Addon Developer',
        concept: 'Developed an addon for the popular MMORPG World of warcraft to enhance the user interface and provide additional gameplay features taking up only 8KBs of memory. <a href="https://www.curseforge.com/wow/addons/compareilvltooltip" target="_blank">Learn more</a>',
        technologies: [
          'Lua',
          'XML',
        ],
        challenges: [
          'Learning the World of Warcraft API.',
          'Creating a user-friendly interface.',
          'Optimizing performance for a smooth gameplay experience.',
        ],
        developmentTimeline: [
          { milestone: 'Project Start', date: 'September 2024' },
          { milestone: 'First Playable Demo', date: 'September 2024' },
          { milestone: 'Full Release', date: 'September 2024' },
        ],
        achievements: [
          'Successfully created a lightweight addon that enhances the user interface.',
          'Implemented a system that provides additional gameplay features.',
          'Optimized performance for smooth gameplay on a variety of hardware configurations.',
        ],
        userFeedback: [
          { feedback: 'The addon is incredibly useful and lightweight!', source: 'Player 1' },
          { feedback: 'The interface is intuitive and easy to use.', source: 'Player 2' },
        ],
        futurePlans: [
          'Add more features and customization options.',
          'Optimize performance and polish the addon for release.',
        ],
      },
    }
  ];
  
  export default projectsData;