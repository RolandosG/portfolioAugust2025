import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Wrapper from "../assets/wrappers/Dashboard";
import "react-awesome-button/dist/styles.css";
import { AwesomeButton } from "react-awesome-button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <Wrapper>
      <div class="slideDown" style={{ color: "#F4F4F4", width: "100%", paddingBottom: "0px", overflow: 'hidden', zIndex: '1'}}>
        <header id="header" style={{ color: "F4F4F4" }}>
          <Navbar bg="dark" variant="dark" expand="lg"> {/* Updated for collapsible */}
            <Container>
            <Navbar.Brand href="/" style={{ margin: "10px 0", marginRight: windowWidth > 992 ? "400px" : "0" }}>
              Rolandos Georgoulis
            </Navbar.Brand>
              <NavbarToggle aria-controls="basic-navbar-nav" /> {/* Added Toggle Button */}
              <NavbarCollapse id="basic-navbar-nav"> {/* Collapsible content */}
                <Nav className="align-items-center">
                  {/* <Nav.Link href="/">Home</Nav.Link> */}
                  <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                    <span className="nav-separator" style={{ color: '#fff', margin: '0 0px' }}>|</span>
                  <Nav.Link href="/RecentProject">Unity Project</Nav.Link>
                    <span className="nav-separator" style={{ color: '#fff', margin: '0 0px' }}>|</span>
                  <Nav.Link href="/MindWave">FullStack Project</Nav.Link>
                  <AwesomeButton type="secondary" style={{ margin: "0 15px", height: "40px" }}>
                    <a href="https://docs.google.com/document/d/1YDkw0mK-TM5QpMdBXl3OnuvqTlFUC4ky/edit?usp=sharing&ouid=104420958901390331204&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">RESUME</a>
                  </AwesomeButton>
                  <div className="icons-container">
                    <a href="https://www.linkedin.com/in/rolandos-georgoulis-0ab003258/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '24px', color: '#fff', margin: "0 15px" }}><FaLinkedin/></a>
                    <a href="https://github.com/RolandosG" target="_blank" rel="noopener noreferrer" style={{ fontSize: '24px', color: '#fff', margin: "0 15px" }}><FaGithub /></a>
                  </div></Nav>
              </NavbarCollapse>
            </Container>
          </Navbar>
        </header>
      </div>
    </Wrapper>
  );
};

export default Header;
