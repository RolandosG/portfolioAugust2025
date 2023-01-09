import React from "react";
import Wrapper from "../assets/wrappers/skills";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import { SiSwift, SiCplusplus } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { IoLogoHtml5 } from 'react-icons/io'
import { SiCss3, SiJavascript, SiJava, SiBootstrap, SiGithub} from 'react-icons/si'

setConfiguration({ maxScreenClass: "xl" });


const Cards = () => {
  return (
    
    <Wrapper style={{marginLeft: '-500px', marginTop: '-100px', height: '0px', padding: '0px'}}>
      <div class="avatar">
      <h1
              style={{
                //marginRight: "850px",
                //paddingRight: "100px",
                marginTop: "25px",
                fontSize: "4.2rem",
                textDecoration: "underline",
                color: '#00d4ff'
              }}
            >
              Skills
            </h1>
            
      <Container fluid style= {{marginLeft: "-00px"}}>
    <Row justify="between" debug>
    
    <Col xs={3}><SiSwift size={'50px'} color={'white'}/> Swift</Col> 
    <Col xs={3}><FaReact  size={'50px'} color={'white'}/>React</Col>
    <Col xs={3}><IoLogoHtml5  size={'50px'} color={'white'}/> Html5</Col>
   
    </Row>
  <br />
  <Row justify="between" debug>
    <Col xs={3}><SiCss3  size={'50px'} color={'white'}/> <br></br>CSS </Col>
    <Col xs={3}><SiJavascript  size={'50px'} color={'white'}/><br></br>JS</Col>
    <Col xs={3}><SiCplusplus  size={'50px'} color={'white'}/><br></br>C++</Col>
    </Row>
  <br />
  <Row justify="between" debug>
    <Col xs={3}><SiJava  size={'50px'} color={'white'}/> <br></br>Java</Col>
    <Col xs={3}><SiBootstrap  size={'50px'} color={'white'}/>Bootstrap</Col>
    <Col xs={3}><SiGithub  size={'50px'} color={'white'}/>Github</Col>
    </Row>
  <br />
</Container>
</div>
    </Wrapper>
  );
};

export default Cards;
