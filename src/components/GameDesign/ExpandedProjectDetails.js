import React, { useEffect, useRef, useCallback } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ExpandedProjectDetails.css';
import { AwesomeButton } from 'react-awesome-button';


const ExpandedProjectDetails = ({ project, onClose }) => {
  const modalRef = useRef();
  const tabsRef = useRef();

  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleTabSelect = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  const h3Style = {
    fontSize: '2.5em',
    textDecoration: 'underline',
    background: 'linear-gradient(to right, #ECF0F1, #2C3E50)',
    animation: 'fadeText 3s infinite',
    color: '#1d1919',
    textAlign: 'left',
    marginBottom: '20px'
  };
  return (
    <div className="expanded-project-overlay">
      <div className="expanded-project-details" ref={modalRef}>
        <button className="close-button" onClick={onClose}></button>
        <h2>{project.title} {project.docLink && (
          <AwesomeButton type="secondary" style={{ marginLeft: "15px", height: "40px" }}>
            <a href={project.docLink} target="_blank" rel="noopener noreferrer">Game Design document</a>
          </AwesomeButton>
        )}</h2>
        
        <Tabs onSelect={handleTabSelect}>
          <TabList ref={tabsRef}>
            <Tab>Features</Tab>
            <Tab>Technologies</Tab>
            <Tab>Challenges</Tab>
            <Tab>Achievements</Tab>
          </TabList>

          <TabPanel>
            <div className="tab-panel-content">
              {project.videoUrl && (
                <div className="video-wrapper">
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <p><strong>Role:</strong> {project.details.role}</p>
              <p><strong>Concept:</strong> <span dangerouslySetInnerHTML={{ __html: project.details.concept }} /></p>
              <h3 style={h3Style}>Features</h3>
              <div className="features-container">
                {project.details?.features ? (
                  <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                    {project.details.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <div className="feature-media">
                          {feature.videoUrl ? (
                            <iframe style={{ height: '400px' }}
                              src={feature.videoUrl}
                              title={`Feature ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          ) : (
                            <img src={feature.image} alt={`Feature ${index + 1}`} />
                          )}
                        </div>
                        <div className="feature-description">
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <p>No features available.</p>
                )}
              </div>

              {project.details?.philosophy && (
                <>
                  <h3 style={h3Style}>Philosophy</h3>
                  <div className="philosophy-content">
                    {project.details.philosophy.map((section, index) => (
                      <div key={index} className="philosophy-section">
                        <h4>{section.title}</h4>
                        <p>{section.description}</p>
                        <ul>
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {project.details?.screenshots && (
                <>
                  <h3 style={h3Style}>Environment Screenshots</h3>
                  <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                    {project.details.screenshots.map((screenshot, index) => (
                      <div key={index}>
                        <img src={screenshot.src} alt={`Screenshot ${index + 1}`} />
                        <div className="carousel-caption">
                          <p>{screenshot.description}</p>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </>
              )}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tab-panel-content">
              <h3 style={h3Style}>Technologies</h3>
              {project.details?.technologies ? (
                <ul>
                  {project.details.technologies.map((technology, index) => (
                    <li key={index}>{technology}</li>
                  ))}
                </ul>
              ) : (
                <p>No technologies listed.</p>
              )}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tab-panel-content">
              <h3 style={h3Style}>Challenges</h3>
              {project.details?.challenges ? (
                <ul>
                  {project.details.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              ) : (
                <p>No challenges listed.</p>
              )}
              <h3 style={h3Style}>Development Timeline</h3>
              {project.details?.developmentTimeline ? (
                <ul>
                  {project.details.developmentTimeline.map((milestone, index) => (
                    <li key={index}>{milestone.milestone}: {milestone.date}</li>
                  ))}
                </ul>
              ) : (
                <p>No development timeline available.</p>
              )}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tab-panel-content">
              <h3 style={h3Style}>Achievements</h3>
              {project.details?.achievements ? (
                <ul>
                  {project.details.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              ) : (
                <p>No achievements listed.</p>
              )}
              <h3 style={h3Style}>User Feedback</h3>
              {project.details?.userFeedback ? (
                <ul>
                  {project.details.userFeedback.map((feedback, index) => (
                    <li key={index}>"{feedback.feedback}" - {feedback.source}</li>
                  ))}
                </ul>
              ) : (
                <p>No user feedback available.</p>
              )}
              <h3 style={h3Style}>Future Plans</h3>
              {project.details?.futurePlans ? (
                <ul>
                  {project.details.futurePlans.map((plan, index) => (
                    <li key={index}>{plan}</li>
                  ))}
                </ul>
              ) : (
                <p>No future plans listed.</p>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ExpandedProjectDetails;