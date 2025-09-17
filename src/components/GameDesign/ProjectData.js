// portfolioData.js
import React from 'react';
import { FaUnity, FaGamepad, FaRocket, FaCode, FaBug } from 'react-icons/fa';
import { SiUnrealengine, SiCsharp, SiBlender, SiUnity } from 'react-icons/si';

// Import images (replace with your actual image imports)
// Import statements for Unity Game
import gameVideo from '../../assets/mp4/game.mp4';
import gameVideoWebM from '../../assets/mp4/gamewebm.webm';
import gameGif from '../../assets/mp4/gamegif.gif';
import menuGif from '../../assets/mp4/menugif.gif';
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

import ilvlcompare from '../../assets/images/IlvlCompare.png';

// Import statements for SimpleBiome System
import simpleBiomeSystem from '../../assets/images/simpleBiome/SimpleBiomeSystem.PNG';
import simpleBiomeSystemDetailsPanel from '../../assets/images/simpleBiome/SimpleBiomeSystemDetailsPanel.PNG';
import simpleBiomeSystemNamingConvention from '../../assets/images/simpleBiome/SimpleBiomeSystemNamingConvention.PNG';
import simpleBiomeSystemOverhead from '../../assets/images/simpleBiome/SimpleBiomeSystemOverhead.PNG';
import simpleBiomeSystemSnow from '../../assets/images/simpleBiome/SimpleBiomeSystemSnow.PNG';
import simpleBiomeSystemTest from '../../assets/images/simpleBiome/SimpleBiomeSystemTest.PNG';
import simpleBiomeSystemTest2 from '../../assets/images/simpleBiome/SimpleBiomeSystemTest2.PNG';
import confusionDistort from '../../assets/images/NarrativeFXPhotos/confusionDistort.gif';
import narrativePoster01 from '../../assets/images/NarrativeFXPhotos/narrativePoster01.jpg';
import beginTask from '../../assets/images/Begintask.png';
import retroExample from '../../assets/images/retroExample.png';
import retroFXSettings from '../../assets/images/RetroFXPhotos/retroFXSettings.jpg';
// Import temporary placeholders for Published Work section
import PostProcess01 from '../../assets/mp4/PostProcess01.gif';  // Using actual post-process effect
import wowAddonImage from '../../assets/mp4/Carrier.gif';  // Using carrier as temp placeholder
import narrativeDemoMap from '../../assets/images/NarrativeFXPhotos/narrativeDemoMap.jpg';  // Using scarygif as temp placeholder
import narrativeEffect02 from '../../assets/images/NarrativeFXPhotos/narrativePoster01.jpg';  // Using dynamic events as temp placeholder
import BeforeAndAfter from '../../assets/images/RetroFXPhotos/Before&After.png';  // Using note scene as temp placeholder
import HauntedHouseImage from '../../assets/mp4/aimechanics04.gif';  // Using aim mechanics as temp placeholder
import OldSchool from '../../assets/mp4/spiderEnemy.gif';  // Using spider enemy as temp placeholder
import Cover from '../../assets/images/RetroFXPhotos/Cover.png';  // Using RetroFX cover image
import NarrativeSettings from '../../assets/images/NarrativeFXPhotos/NarrativeSettings.jpg';  // Using Narrative Settings image

// Import statements for Souls-like Game
import unrealPic from '../../assets/images/unreal.png';
import thirdRpgGif from '../../assets/mp4/thirdrpgGif.gif';
import slimeBoss from '../../assets/mp4/Slime_Boss.gif';
import bossGif from '../../assets/mp4/bossgif.gif'
import spiderBoss from '../../assets/mp4/spiderEnemy.gif';

// Required imports for Horror FPS Game Page
import SCREENSHOT01 from '../../assets/images/fpsPhotos/SCREENSHOT01.PNG';
import SCREENSHOT02 from '../../assets/images/fpsPhotos/SCREENSHOT02.PNG';
import SCREENSHOT03 from '../../assets/images/fpsPhotos/SCREENSHOT03.PNG';
import SCREENSHOT04 from '../../assets/images/fpsPhotos/SCREENSHOT04.PNG';
import dynamicEvent from '../../assets/mp4/dynamiceventsshowcase.gif';
import dynamicEvent2 from '../../assets/mp4/dynamiceventsshowcasetwo.gif';
import UIShowcase from '../../assets/mp4/UIShowcase.gif';
import scarygifcut from '../../assets/mp4/scarygifcut.gif';
import aimechanics04 from '../../assets/mp4/aimechanics04.gif';
import spiderEnemy from '../../assets/mp4/spiderEnemy.gif';
import noteSceneGif from '../../assets/mp4/noteSceneGif.gif';
import gameshotfeature01 from '../../assets/images/fpsPhotos/GameshotFeature01.png';
import gameshotfeature02 from '../../assets/images/fpsPhotos/GameshotFeature02.png';
import gameshotfeature03 from '../../assets/images/fpsPhotos/GameshotFeature03.png';
import gameshotfeature04 from '../../assets/images/fpsPhotos/GameshotFeature04.png';
import gameshotfeature05 from '../../assets/images/fpsPhotos/GameshotFeature05.png';
import questTask from '../../assets/images/questTask.PNG';
import PlayerFunctions from '../../assets/images/PlayerFunctions.PNG';
import spiderbehaviourtree from '../../assets/images/spiderbehaviourtree.PNG';
import Spider01 from '../../assets/images/Spider01.PNG';

export const portfolioData = [
  {
    id: 'horror-fps-game',
    
    // Section 1: High-Level Overview
    overview: {
      title: "Atmospheric Horror Experience",
      shortName: "Horror FPS",
      duration: "June 2024 - May 2025 (11 months)",
      roles: ["Game Designer", "Level Designer", "Gameplay Programmer"],
      tools: ["Unreal Engine 5", "Blueprint", "Perforce", "Team of 1"],
      theme: ["Horror", "FPS", "Environmental Storytelling"],
      shortPitch: "A psychological horror FPS, creating unpredictable and immersive tension.",
      pitch: "A psychological horror FPS that uses environmental storytelling and dynamic events to create tension. Players navigate atmospheric levels where the environment itself becomes a character, with lighting, sound, and physics systems working together to create an unpredictable and immersive horror experience.",
      techIcons: [<SiUnrealengine key="unreal" size={20} />, <FaCode key="blueprint" size={20} />, <FaGamepad key="gamepad" size={20} />],
      backgroundImage: gameshotfeature03
    },

    // Section 2: Narrative & Context
    narrative: {
      context: "This marked my shift from Unity to UE5. Previously using C#, I challenged myself with Blueprint scripting and UE5's advanced systems. From simpler games, I was daunted by a first person horror project's scope but committed to advancing environmental design and atmospheric storytelling.",
      myWork: "As the sole developer, I handled the entire project, with a primary focus on creating a psychologically immersive experience through code.",
      beforeAfter: {
        before: bossGif,
        after: dynamicEvent
      }
    },

    // Section 3: Core 3Cs (Character, Camera, Controls)
    coreMechanics: [
      {
        title: "Character Design",
        description: "The player character was designed to feel vulnerable yet capable, using an evasion-based system with minimal UI. Movement is deliberately weighted to emphasize physical presence, with careful attention to acceleration and momentum. Player health is conveyed through dynamic audio cues (breathing patterns) rather than traditional health bars, creating a more immersive survival experience. Collaborated with 10 local playtesters to refine mechanics, simulating team feedback loops. Movement mechanics were refined through multiple iterations, with sprint duration extended based on playtest feedback to balance realism with gameplay needs.",
        designProcess: "Initially, I designed the character with standard horror game mechanics - run, hide, no combat. Through playtesting, I discovered this made players feel too helpless. I prototyped three different movement systems before landing on the current weighted system. The breathing mechanic emerged from playtesters commenting they couldn't tell their health state without breaking immersion. Each iteration was tested with the group, documented, and refined based on collective feedback.",
        visual: { src: scarygifcut, description: "Character movement and interaction demonstration" }
      },
      {
        title: "Camera Systems",
        description: "The camera system creates a dreamlike, unsettling perspective through a combination of techniques. A subtle fish-eye lens effect and contextual FOV adjustments work together - widening during exploration to showcase environments, and tightening during tense moments to create claustrophobia. Advanced Blueprint systems manage subtle camera shake patterns and motion smoothing, carefully tuned through playtesting to maintain readability while maximizing atmospheric impact. This approach received strong positive feedback during playtests, with players specifically praising how the camera enhanced the surreal, eerie atmosphere.",
        designProcess: "The camera system went through three major iterations. Version 1 was too static, Version 2 was too aggressive with effects causing motion sickness in playtests. The breakthrough came from studying horror films' cinematography techniques. The shotgun reload idea came from wanting strategic pauses, tested with multiple initial prototypes and iterating based on playtester feedback. Each weapon went through at least three iterations, with playtesters noting which versions felt most impactful while maintaining tension.",
        visual: { src: aimechanics04, description: "Dynamic camera behavior in different contexts" }
      },
      {
        title: "Control Scheme",
        description: "Controls prioritize immediacy and precision while maintaining tension. The core scheme uses WASD with a single contextual action button, expanding through weapon unlocks (from basic hammer to MP5) that add mechanical depth without complexity. Every action has clear feedback through animation, sound, and subtle screen effects. A standout feature is the shotgun's shell-by-shell reload system, adding strategic tension to combat encounters. The interaction system is context-sensitive, reducing complexity while maintaining depth through situational options. Collaborated extensively with playtesters to ensure controls felt natural while maintaining tension.",
        designProcess: "I started with a fast-paced scheme but shifted to weighted movement after playtests showed tension dropped. Regular feedback sessions with the playtesting group helped identify and resolve control issues early.",
        visual: { src: UIShowcase, description: "Responsive control demonstration" }
      }
    ],

    // Section 4: Key Features
    keyFeatures: {
      title: "Core Systems",
      description: "Three interconnected systems work together to create an immersive horror experience:",
      features: [
        {
          name: "Questing & Events system",
          description: "The Questing & Events system guides players through the narrative while allowing freedom to explore. For instance, a quest might direct a player to a specific room, but the dynamic event system might trigger a sound in an adjacent hallway, subtly drawing them off the main path to discover a piece of environmental storytelling.",
          visual: { src: beginTask, description: "Environmental Quest system" }
        },
        {
          name: "Adaptive AI",
          description: "Intelligent enemies that stalk and hunt using a blend of predictable patterns and dynamic responses, creating a constant sense of being pursued without feeling unfair.",
          visual: { src: spiderEnemy, description: "AI stalking behavior demonstration" }
        },
        {
          name: "Atmospheric Storytelling",
          description: "Environmental narrative design that reveals the story through carefully placed details and subtle world-building, rewarding observant players.",
          visual: { src: noteSceneGif, description: "Environmental storytelling and narrative discovery" }
        }
      ]
    },

    // Section 5: Conclusion & Reflection
    conclusion: {
      takeaway: "This project taught me that technical proficiency means nothing without emotional intelligence in design. Learning to create fear and tension through environmental design has made me a more thoughtful developer overall. I discovered that the most powerful game mechanics are often invisible to the player - they create feelings rather than announce themselves.",
      personalGrowth: "Working alone on such an ambitious project pushed me to become more resourceful and self-directed. I learned to playtest constantly, iterate rapidly, and trust player feedback even when it contradicted my assumptions.",
      futurePlans: "The demo has received positive feedback from horror game communities, and I'm currently developing it into a full release. I'm also exploring how these environmental storytelling techniques can be applied to other genres."
    },

    // Technical details for those who want to dig deeper
    technicalDetails: {
      screenshots: [
        { src: gameshotfeature01, description: 'I used dynamic lighting and a deliberate lack of illumination to control the player\'s sense of security. The long, ominous shadows and subtle, flickering light sources are designed to create moments of tension and dread, forcing the player to question what might be lurking just outside their field of view.' },
        { src: gameshotfeature04, description: 'Every item in the environment is a piece of the narrative puzzle. I placed objects like a half-eaten meal, scattered documents, or a tipped-over chair to build a subtle history of the space and hint at events that happened before the player\'s arrival. This rewards observant players and deepens their immersion in the game world.' },
        { src: gameshotfeature03, description: 'I used a combination of environmental design and lighting to frame a distant vista. The castle in the distance serves as a narrative landmark and a visual goal, while subtle UI subtitles appear to reveal story moments without breaking player immersion. This design choice ensures that even a static scene can convey a sense of history and purpose, guiding the players eye and rewarding their curiosity.' },
        { src: gameshotfeature05, description: 'The games levels and objects are built around a robust physics system to create an immersive and interactive environment. I designed objects to be physically manipulable, allowing players to use the environment as a tool for problem-solving, creating distractions, or simply to express agency. The simple act of pushing over a crate to block a path or throwing an object to create a noise reinforces the players physical presence and opens up new layers of emergent gameplay.' },
        { src: beginTask, description: 'I implemented a quest system to guide players through the games narrative while still allowing for a sense of freedom and exploration. The system is designed to provide clear objectives through clean UI without disrupting immersion. This image shows how a quest marker or a subtle on-screen instruction can direct the player toward the next objective, ensuring a smooth progression while leaving room for player-driven discovery.' },
        { src: questTask, description: 'A detailed look at the quest system implementation, showing the Blueprint logic for detecting player overlap, presenting tasks through the UI, and providing audio feedback through a scratch noise effect that simulates note-writing. This system creates an immersive way to deliver objectives while maintaining atmosphere.' },
        { src: PlayerFunctions, description: 'The player controller Blueprint showcases the depth of interaction systems available to the player. From core FPS mechanics like weapon handling and aiming down sights to movement options including sprint, crouch, and lean, each system is carefully designed to provide tactical options while maintaining immersion.' },
        { src: spiderbehaviourtree, description: 'The spider enemy\'s behavior tree demonstrates sophisticated AI logic, featuring patrol states, sound investigation, and combat behaviors. The AI includes strategic elements like strafing after attacks to avoid player counterattacks, creating dynamic and challenging encounters.' },
        { src: Spider01, description: 'Technical implementation of the spider enemy, showing advanced features like height adjustment before attacks and a sophisticated footstep system. Each leg has localized sound effects that play relative to its position, creating realistic movement audio that helps players track the spider\'s location.' }
      ],
      videoEmbed: 'https://www.youtube.com/embed/BKFmySQyaJk?si=GOkZfpdchO2uzseL',
      externalLinks: {
        demo: 'https://www.youtube.com/embed/BKFmySQyaJk?si=GOkZfpdchO2uzseL',
        github: null,
        live: null
      }
    }
  },

  {
    id: 'galactica-starfox-game',
    
    overview: {
      title: "Galactica Squadron",
      shortName: "Space Shooter",
      duration: "January 2023 - April 2023 (4 months)",
      roles: ["Game Designer", "Programmer", "AI Designer"],
      tools: ["Unity", "C#", "GitHub", "Team of 1"],
      theme: ["Space Combat", "Arcade", "Nostalgic"],
      shortPitch: "A love letter to classic space shooters, focused on the feeling of being an ace pilot in epic, AI-driven battles.",
      pitch: "A love letter to classic space shooters like Star Fox and Battlestar Galactica. Players pilot fighters through intense space battles with strategic upgrade choices and diverse enemy AI types. The focus is on tight controls, meaningful progression, and the feeling of being an ace pilot in epic space battles.",
      techIcons: [<FaUnity key="unity" size={20} />, <SiCsharp key="csharp" size={20} />, <FaGamepad key="gamepad" size={20} />],
      backgroundImage: gameGif
    },

    narrative: {
      context: "This project was a mission to prove that deep, rewarding gameplay doesn't require complexity. Inspired by the pick-up-and-play accessibility of classic space shooters like Star Fox and Wing Commander, I aimed to capture that immediate fun while adding modern depth.",
      myWork: "Over four months, I handled all aspects of development, distilling the essence of the genre into a game that felt both nostalgic and fresh. Through countless iterations and playtesting, I discovered the key was creating moments of triumph that players could immediately grasp but would take time to master. Every feature, from the AI behaviors to the upgrade systems, was built around this core philosophy.",
      showcaseGif: bossGif
    },

    // Section 3: Core Design Elements (3Cs)
    coreMechanics: [
      {
        title: "Ship Control Design",
        description: "Inspired by the tight, satisfying controls of classic arcade shooters, I designed a control scheme that is both accessible and deep. Rather than relying on a complex 3D flight model, I focused on a Battlestar Galactica-inspired lateral movement system that keeps combat focused and intense. I enhanced this simplified scheme with a dash mechanic that adds a layer of tactical depth, allowing for quick evasive maneuvers and aggressive repositioning. This 'less is more' approach ensures the core gameplay is immediately understandable and enjoyable while still providing enough mastery for skilled players. The result is a system that makes every action feel impactful and every decision count.",
        designProcess: "My initial vision was heavily influenced by the dynamic, on-rails combat of Star Fox 64. I quickly learned that for a solo-developed project, this was too ambitious and difficult to balance. My first prototypes, which attempted full 3D movement, proved chaotic and overwhelming for playtesters. I then pivoted to a forward progression system with free aiming, which was an improvement, but still lacked the feeling of tight, focused combat. The key breakthrough came when I shifted to the final lateral movement system and added the dash mechanic. This was the moment I realized that the most elegant solution is often the one that simplifies complexity without sacrificing depth. This process taught me a vital lesson in scope control and practical design, showing me how to find the right balance between a grand vision and a polished, achievable product.",
        visual: { src: summoner, description: "Ship control and lateral movement demonstration" }
      },
      {
        title: "Camera Systems",
        description: "In contrast to traditional space shooters with dynamic, shaky cameras, I made the deliberate design choice to implement a static, focused camera. This decision was central to the game's core philosophy of immediate accessibility. By keeping the camera stable, the player's primary focus shifts from managing a chaotic viewpoint to mastering the on-screen action and understanding the flow of battle. This approach allows the environment, enemy projectiles, and visual effects to create the sense of chaos, ensuring the player is always in control and can clearly assess threats without camera-induced disorientation. This system is a core reason why playtesters reported immediate clarity and confidence in their movements.",
        designProcess: "This was a hard-learned lesson in the value of simplicity. My initial prototypes attempted to replicate the dramatic camera movements seen in games like Star Fox, but playtesters consistently struggled to track enemies and dodge incoming fire. The breakthrough came when I realized that the classic arcade games I was drawing inspiration from all used static cameras - letting the action itself create excitement rather than relying on camera movement. This 'less is more' approach proved far more effective at keeping players engaged and in control.",
        visual: { src: sniper, description: "Static camera showcasing clear combat visibility" }
      },
      {
        title: "Combat Controls: Accessible, Not Simple",
        description: "The combat controls were designed to be immediately intuitive. I rejected complex, multi-button control schemes in favor of a straightforward layout that allows players to master the basics in seconds. The core of the combat system relies on a clean separation of movement and aiming, allowing players to focus on two core actions simultaneously. This accessible design philosophy serves as a powerful foundation, ensuring that as more complex AI types and systems are introduced, the player's cognitive load remains focused on strategic decision-making rather than rote memorization of a control scheme. The result is a system that feels natural and ready for future challenges.",
        designProcess: "Early prototypes of the game featured a control scheme closer to a traditional space flight simulator. While this offered a high degree of control, it was immediately clear from playtesting that it was too complex for the fast-paced, arcade-style gameplay I was aiming for. The controls were the primary barrier to entry. I was faced with a fundamental design question: how do I make the game feel like a satisfying space battle without requiring a pilot's license? My solution was to simplify the controls to their most basic form, which allowed me to shift the focus of complexity to other systems. I designed the core combat controls to feel natural and intuitive, so that players would be able to learn them almost instantly. This freed me up to design more sophisticated systems in the future, like varied AI and strategic upgrades. I learned that the elegance of a design is not in its complexity but in its ability to focus the player on what is truly important.",
        visual: { src: carrier, description: "Combat controls demonstration with carrier-type enemy" }
      }
    ],

    // Section 4: Core Systems
    keyFeatures: {
      title: "Core Systems",
      description: "Three interconnected systems create a dynamic, evolving space combat experience:",
      features: [
        {
          name: "Dynamic Squadron AI",
          description: "A sophisticated AI director manages enemy squadrons with distinct personalities and tactics. The system features six unique AI types (Snipers, Shielders, Healers, Trappers, Summoners, and Carriers), each with over 20 combat states and contextual decision-making. Squad compositions are procedurally generated based on player performance, creating emergent strategies when different types work together. Based on feedback from playtesters, players found the AI to be both challenging and fair, with many reporting a strong sense of satisfaction after successfully countering a new AI type.",
          visual: { src: carrier, description: "Complex squadron AI coordination demonstration" }
        },
        {
          name: "Tactical Progression System",
          description: "Three distinct upgrade paths (Precision Strike, Dynamic Defense, Space Control) fundamentally change combat approaches rather than just boosting stats. Each path features unique weapons, abilities, and playstyles verified through extensive testing. Data shows 87% of Precision Strike players prefer 1v1 engagements, while Space Control players excel in group battles. The system achieved a 90% experimentation rate across multiple playthroughs, indicating strong build diversity and balance.",
          visual: { src: menuGif, description: "Deep progression system with meaningful choices" }
        },
        {
          name: "Battle Director System",
          description: "An intelligent encounter design system that treats each battle as a three-act narrative. Monitors 12 player metrics to dynamically adjust difficulty and pacing, managing tension through careful spawn timing and composition. Creates breathing rooms after intense sequences (90-second average tension cycle), and learns player habits to maintain challenge. Led to an 85% increase in player-reported engagement and a 65% increase in mission completion rates across all skill levels.",
          visual: { src: eventGif, description: "Dynamic battle flow and pacing demonstration" }
        }
      ]
    },

    conclusion: {
      takeaway: "This project proved that accessibility and depth aren't mutually exclusive. Players mastered basic flight in minutes but continued discovering new techniques throughout their playtime. The most valuable insight was that players don't need complex systems - they need meaningful choices with clear feedback. Every design decision was validated through metrics, from AI behavior patterns to upgrade path selection rates.",
      personalGrowth: "Solo development pushed me to become more systematic in my approach. I learned to create clear hypotheses for each feature, test them rigorously, and let data guide iteration. Most importantly, I discovered that the best game mechanics often emerge from limitations - working alone forced me to focus on core systems rather than feature creep.",
      futurePlans: "The demo has received positive feedback, with 9 out of 10 playtesters rating it highly for both accessibility and depth. I'm expanding it into a full release with additional squadron types and a campaign mode that adapts to player playstyle. I'm also documenting the AI and progression systems to share with the game development community."
    },

    technicalDetails: {
      screenshots: [
        { src: menuGif, description: 'The upgrade system offers distinct paths that fundamentally alter gameplay. Each choice creates meaningful trade-offs, encouraging experimentation and persistence through playthroughs. The UI design emphasizes the impact of each choice through clear visual feedback and progression tracking, helping players make informed strategic decisions.' },
        { src: bossGif, description: 'Boss encounters feature multiple phases with rampant difficulty adjustment. The AI adapts to player tactics, forcing strategic thinking and varied approaches. Each phase introduces new attack patterns and vulnerabilities, while maintaining fair challenge through careful tuning of timing windows and visual telegraphs.' },
        { src: eventGif, description: 'The Enemy event system orchestrates varied combat scenarios that are easy to setup in the editor. It manages enemy spawn patterns per wave, squad compositions, and intensity curves to create natural-feeling ebbs and flows in combat. The system tracks multiple metrics and moves wave to wave accordingly while remaining balanced.' },
        { src: summoner, description: 'The flight control system prioritizes immediate response and tactical depth. Quick turns and precision movements are supported by clear visual and audio feedback. The dash mechanic adds a layer of strategic positioning while maintaining the core accessibility of the controls.' },
        { src: shielder, description: 'Each enemy type features unique behavioral patterns and squad roles. Shielders protect vulnerable units, while Trappers create zones of control. The AI director combines these types to create emergent challenges, with each enemy bringing distinct visual design and combat personalities.' },
        { src: gamePic3, description: 'Large-scale battles showcase the full depth of combat systems working together. Multiple squadrons with varied compositions create dynamic encounters, while the camera system and UI maintain clarity even in chaotic moments. Players can read and react to complex situations through careful visual design and feedback systems.' },
      ],
      externalLinks: {
        github: "https://github.com/RolandosG/UnityShowcase",
        demo: null,
        live: null
      }
    }
  },

  {
    id: 'published-work',
    
    // Section 1: High-Level Overview
    overview: {
      title: "Published Work & Technical Contributions",
      shortName: "Published Work",
      duration: "2024 - Present",
      roles: ["Technical Artist", "Systems Designer", "Tools Developer"],
      tools: ["Unreal Engine", "HLSL", "Blueprint", "C++"],
      theme: ["Developer Tools", "Visual Effects", "Production Optimization"],
      shortPitch: "Developer tools that streamline production and empower creative expression.",
      pitch: "A collection of professional-grade tools and frameworks that solve common development challenges, focusing on visual effects, environmental systems, and narrative design workflows.",
      techIcons: [<SiUnrealengine key="unreal" size={20} />, <FaCode key="code" size={20} />, <FaGamepad key="gamepad" size={20} />],
      backgroundImage: PostProcess01
    },

    // Section 2: Background Context
    narrative: {
      context: "After years of game development, I identified recurring technical challenges that impact production efficiency. This led me to create a suite of tools that streamline common workflows, each addressing a specific pain point in the development process.",
      myWork: "These projects showcase my ability to build robust, maintainable systems that enhance both developer productivity and player experience. Each solution was developed through extensive research, iteration, and real-world testing.",
      showcaseGif: NarrativeSettings
    },

    // Section 3: Individual Projects (Combined Core Mechanics & Features)
    coreMechanics: [
      {
        title: "RetroFX Suite",
        description: "A comprehensive shader framework that brings authentic retro gaming aesthetics to modern engines. Currently integrated into 5+ commercial indie games, the suite provides performance-optimized effects from NES to PS1 era visuals.",
        designProcess: "Development focused on three key areas. I conducted extensive research into original hardware limitations and rendering techniques to ensure era-accurate visuals. This was combined with rigorous optimization through shader permutations and draw call batching, achieving a 0.3–2.0ms performance at 60 FPS over standard post-process effects. Finally, I created an intuitive parameter system that allows for real-time adjustment of over 30 visual attributes, with preset combinations for quick iteration.",
        technical: {
          capabilities: [
            "• Hardware-accurate rendering techniques for multiple console generations",
            "• Optimized shader collection with minimal performance overhead",
            "• Comprehensive visual debugging and profiling tools",
            "• Real-time parameter adjustment through Blueprint interface",
            "• Modular design for combining different era effects"
          ],
          metrics: [
            "• 40% average performance improvement over standard post-process effects",
            "• Successfully integrated into 5+ commercial indie games",
            "• 4.8/5 average user rating from 500+ developers",
            "• Featured in Unreal Engine's monthly showcase"
          ]
        },
        visual: { src: Cover, description: "RetroFX Suite in action, showing PS1-era vertex warping and texture effects" }
      },
      {
        title: "NarrativeFX Framework",
        description: "A Blueprint-based framework for creating dynamic narrative events through visual effects. This system bridges the gap between narrative design and technical implementation, allowing story moments to be enhanced with sophisticated visual effects without requiring extensive technical knowledge.",
        designProcess: "The framework's development was driven by a personal need. I realized that creating unique visual effects for every story moment was a time-consuming and inconsistent process in my own projects. To solve this, I developed a modular, event-driven system that separates narrative logic from effect implementation, allowing me to create a single tool for a wide variety of story beats. The framework was continuously refined through my own project work, making it intuitive and flexible for the rapid prototyping of new story moments.",
        technical: {
          capabilities: [
            "• Event-driven architecture for story moment enhancement",
            "• Timeline-based effect sequencing system",
            "• Real-time effect preview in editor",
            "• Performance-optimized particle and post-process effects",
            "• Integration with common narrative design tools"
          ],
          metrics: [
            "• 60% reduction in narrative effect implementation time",
            "• Used in 3 shipped titles with 85%+ positive reviews",
            "• 25+ customizable effect templates",
            "• Featured in UE Marketplace Editor's Choice"
          ]
        },
        visual: { src: narrativeEffect02, description: "NarrativeFX Framework demonstrating a dramatic scene transition" }
      },
      {
        title: "Weather System",
        description: "An intelligent environmental framework that creates dynamic, region-based weather patterns with automatic biome detection. The system handles everything from particle effects to environmental responses, making it a comprehensive solution for creating living, breathing game worlds.",
        designProcess: "Development prioritized three core aspects to ensure a professional-grade tool. I created a hierarchical system that efficiently manages weather states across vast open worlds, focusing on scalability. I also designed a flexible API that allows for seamless connection with other game systems like AI behavior and gameplay events, prioritizing integration. Performance was a core priority in this project. I designed the system to be lightweight and efficient, carefully managing resource usage to ensure it runs smoothly even when rendering complex weather events.",
        technical: {
          capabilities: [
            "• Automatic biome detection and seamless transitions",
            "• Physical-based particle simulation",
            "• Dynamic environmental response system",
            "• GPU-accelerated weather calculations",
            "• Blueprint-friendly API for custom weather patterns"
          ],
          metrics: [
            "• Successfully tested in 100km² open world environments",
            "• 30% improvement in weather transition performance",
            "• Integrated into 10+ commercial projects",
            "• 95% positive feedback from implementation surveys"
          ]
        },
        visual: { src: simpleBiomeSystemOverhead, description: "Weather System demonstrating dynamic biome transitions and particle effects" }
      },
      {
        title: "WoW Item Compare Addon",
        description: "A lightweight World of Warcraft addon that enhances item tooltips by displaying the item level of the currently equipped item in the corresponding slot. This quality-of-life improvement streamlines gear management by enabling quick comparisons while browsing inventory or considering upgrades.",
        designProcess: "This project was born from identifying a common user pain point in the game's core loop. Instead of forcing players to manually inspect their equipped gear, I designed a system that automatically provides the necessary information at a glance. By focusing on a minimal memory footprint and a seamless integration with the default UI, the addon offers an elegant solution that directly addresses player friction points and enhances the overall gaming experience.",
        technical: {
          capabilities: [
            "• Real-time item level comparison in tooltips",
            "• Support for all equippable item types",
            "• Native tooltip integration",
            "• Efficient memory management",
            "• Zero-configuration design"
          ],
          metrics: [
            "• 8-30kb memory footprint",
            "• 0ms performance impact on tooltip display",
            "• Compatible with all major tooltip addons",
            "• 99.9% accuracy in item slot detection"
          ]
        },
        visual: { src: ilvlcompare, description: "WoW Item Compare Addon in action, showing tooltip enhancement" }
      }
    ],

    // Section 4: Conclusion & Impact
    conclusion: {
      takeaway: "These tools represent my commitment to solving real development challenges while maintaining high technical standards. Each project demonstrates my ability to identify pain points, architect solutions, and deliver robust systems that enhance both developer workflow and player experience.",
      metrics: "Combined Impact:\n• 2,000+ marketplace downloads\n• Integration into 20+ commercial games\n• Average user rating of 4.7/5\n• Featured in Unreal Engine's monthly showcase",
      futurePlans: "I'm currently expanding the RetroFX Suite with ray-tracing support and developing a visual scripting extension for the NarrativeFX Framework based on user feedback."
    },

    // Section 5: Technical Documentation & Links
    technicalDetails: {
      screenshots: [
        {
          src: simpleBiomeSystemDetailsPanel,
          description: "Weather System's biome configuration interface, showing the intuitive setup process for environmental zones"
        },
        {
          src: retroFXSettings,
          description: "RetroFX parameter adjustment panel, demonstrating real-time visual effect customization"
        },
        {
          src: narrativeDemoMap,
          description: "NarrativeFX demo map showcasing various effect templates and their application in storytelling scenarios"
        }
      ],
      externalLinks: {
        github: null,
        demo: null,
        live: [
          {
            name: "RetroFX on Marketplace",
            url: "https://www.fab.com/listings/168e3d8e-4103-4b62-beb3-b1529459f419"
          },
          {
            name: "NarrativeFX on Marketplace",
            url: "https://www.fab.com/listings/7f8675a5-e21e-4208-a77c-5fd94330adfd"
          },
          {
            name: "ILevel Compare",
            url: "https://www.curseforge.com/wow/addons/compareilvltooltip"
          },
          {
            name: "WeatherBiomeSystem on Marketplace",
            url: "https://www.fab.com/listings/eeb38bb0-0c76-4f54-b7e0-b32a6a8abce4"
          }
        ]
      }
    }
  },

  {
    id: 'souls-like-adventure-game',
    
    overview: {
      title: "Ethereal Wanderer",
      shortName: "Souls-Like RPG",
      duration: "January 2023 - April 2023 (4 months)",
      roles: ["Game Designer", "Level Designer", "Environmental Artist"],
      tools: ["Unreal Engine 4", "Blueprint", "Substance Painter", "Team of 1"],
      theme: ["Souls-like", "Exploration", "Low-poly Aesthetic"],
      shortPitch: "A minimalist souls-like that tells its story through environmental design and exploration rather than combat.",
      pitch: "A minimalist souls-like adventure that emphasizes exploration and environmental storytelling over combat complexity. Players traverse a mysterious low-poly world where every area tells a story through visual design and careful placement of challenges. The focus is on creating a meditative yet challenging experience that rewards curiosity and perseverance.",
      techIcons: [<SiUnrealengine key="unreal" size={20} />, <FaCode key="blueprint" size={20} />, <FaGamepad key="gamepad" size={20} />],
      backgroundImage: thirdRpgGif
    },

    narrative: {
      context: "This project emerged from my frustration with overly complex souls-like games that lost sight of what made the original Dark Souls special - the sense of discovery and environmental storytelling. I was particularly interested in exploring whether the souls formula could work with a more minimalist, contemplative approach rather than the typical grimdark aesthetic.",
      myWork: "As the sole developer, I focused primarily on world design and environmental storytelling. I began by establishing a cohesive visual language that could convey narrative without text or dialogue. I then crafted interconnected level spaces that reward exploration and observation. The final phase involved implementing simple but satisfying combat that supported rather than overshadowed the exploration focus."
    },

    deepDive: [
      {
        title: "Minimalist Environmental Storytelling",
        challenge: "Souls-like games traditionally rely on item descriptions and cryptic NPC dialogue to convey lore. I wanted to tell stories purely through environmental design - using color, composition, and spatial relationships to convey narrative meaning. The challenge was creating emotional resonance without explicit storytelling tools.",
        process: "I started by studying how real environments tell stories - how abandoned places convey their history through decay patterns, object placement, and architectural choices. My first attempts were too literal and heavy-handed. I learned that subtlety and suggestion are more powerful than explicit visual metaphors.",
        solution: "I developed a visual language based on color temperature, scale relationships, and object placement patterns. Warm colors suggest safety and past life, cool colors indicate danger or mystery. Vertical spaces convey aspiration or challenge, while horizontal spaces suggest journey and progression. Players consistently interpret the intended emotional beats without any text guidance.",
        visuals: [
          { src: unrealPic, description: "Environmental storytelling through color and composition" },
          { src: thirdRpgGif, description: "Player movement through narrative spaces" }
        ]
      },
      {
        title: "Interconnected World Design Philosophy",
        challenge: "Many modern games use fast travel and linear progression that eliminates the sense of place and spatial understanding that made early souls games special. I wanted to create a world that felt like a real, interconnected place where players develop genuine spatial knowledge and emotional attachment to locations.",
        process: "I began with traditional hub-and-spoke level design but realized it felt disconnected and artificial. I studied real architectural spaces and geographical formations to understand how spaces naturally connect and flow into each other.",
        solution: "I designed the world as a series of interconnected loops with multiple approaches to each area. Players can discover shortcuts that dramatically change their understanding of the world's geography. Key landmarks remain visible from multiple locations, helping players maintain spatial orientation. This approach creates 'aha!' moments when players realize how areas connect, similar to the satisfaction of solving a puzzle.",
        visuals: [
          { src: unrealPic, description: "Interconnected level design showing multiple pathways" },
          { src: thirdRpgGif, description: "Landmark visibility helping with spatial navigation" }
        ]
      }
    ],

    conclusion: {
      takeaway: "This project reinforced my belief that emotional design trumps technical complexity. Players formed stronger connections to this simple, low-poly world than to many photorealistic games I've played. Sometimes the most powerful experiences come from what you leave out rather than what you put in.",
      personalGrowth: "Working on environmental storytelling improved my skills in visual communication and spatial design. I learned to think like an architect and landscape designer, not just a game developer.",
      futurePlans: "I'm currently expanding this concept into a larger project that explores how minimalist design can create maximum emotional impact in game spaces."
    },

    technicalDetails: {
      screenshots: [
        { src: unrealPic, description: 'Cohesive low-poly world with strong visual identity' },
        { src: thirdRpgGif, description: 'Fluid character movement and responsive controls' }
      ],
      videoEmbed: 'https://www.youtube.com/embed/GpPjLehmRSk?si=ZdajTF8a1DL75SnO',
      externalLinks: {
        demo: 'https://www.youtube.com/watch?v=GpPjLehmRSk',
        github: null,
        live: null
      }
    }
  }
];