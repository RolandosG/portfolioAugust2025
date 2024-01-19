import React from "react";
import Wrapper from "../assets/wrappers/skills";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import { SiSwift, SiCplusplus } from 'react-icons/si'
import { FaReact, FaUnity } from 'react-icons/fa'
import { IoLogoHtml5 } from 'react-icons/io'
import { SiCss3, SiJavascript, SiJava, SiBootstrap, SiCsharp} from 'react-icons/si'
import { SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiAwsamplify } from 'react-icons/si';
import WS from '../assets/images/websocketSkill.svg';
setConfiguration({ maxScreenClass: 'xl', gridColumns: 12 });

const Skills = () => {
  return (
    <Wrapper>
      <div className="skills-intro">
  <p>
    Proficient in a diverse set of technologies, constantly evolving and adapting to the latest trends in the tech industry. Here's a snapshot of my skills.
  </p>
</div>
      <Container className="skills">
        <h1 className="skills-heading">Skills</h1>
        <Row justify="between" className="rows">
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><FaReact size={50} className="skill-icon"/><br /><span className="skill-detail">React</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><IoLogoHtml5 size={50} className="skill-icon"/><br /><span className="skill-detail">HTML5</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiCss3 size={50} className="skill-icon"/><br /><span className="skill-detail">CSS</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiTypescript size={50} className="skill-icon"/><br /><span className="skill-detail">TypeScrip</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiBootstrap size={50} className="skill-icon"/><br /><span className="skill-detail">Bootstrap</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiCsharp size={50} className="skill-icon"/><br /><span className="skill-detail">C#</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><FaUnity size={50} className="skill-icon"/><br /><span className="skill-detail">Unity</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiExpress size={50} className="skill-icon"/><br /><span className="skill-detail">Express</span></Col>
      
        </Row>
        <Row justify="between" className="rows">
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiCplusplus size={50} className="skill-icon"/><br /><span className="skill-detail">C++</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiJavascript size={50} className="skill-icon"/><br /><span className="skill-detail">JavaScript</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiJava size={50} /><br className="skill-icon"/><span className="skill-detail">Java</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiNodedotjs size={50} className="skill-icon"/><br /><span className="skill-detail">Node.js</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiMongodb size={50} className="skill-icon"/><br /><span className="skill-detail">MongoDB</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiGit size={50} className="skill-icon"/><br /><span className="skill-detail">Git</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><SiAwsamplify size={50} className="skill-icon"/><br /><span className="skill-detail">AWS Amplify</span></Col>
          <Col xs={3} sm={3} md={2} lg={2} xl={1} className="skill"><img src={WS} style={{ width: '50px' }} alt="WebSocket" className="skill-icon"/><br /><span className="skill-detail">WebSocket</span></Col>
        
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Skills;