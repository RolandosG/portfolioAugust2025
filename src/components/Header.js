import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Wrapper from "../assets/wrappers/Dashboard";
import "react-awesome-button/dist/styles.css";
import { AwesomeButton } from "react-awesome-button";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <Wrapper>
      <div
        class="slideDown"
        style={{ color: "#F4F4F4", width: "100%", paddingBottom: "0px", overflow: 'hidden', zIndex: '1'}}
      >
        <header id="header" style={{ color: "F4F4F4" }}>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/" style={{ margin: "10px 0" }}>
                  Rolandos Georgoulis
                </Navbar.Brand>
                <Nav className="align-items-center">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                  <Nav.Link href="/RecentProject">Unity Project</Nav.Link>
                  <Nav.Link href="/MindWave">FullStack Project</Nav.Link>
                  <AwesomeButton
                    type="secondary"
                    style={{ margin: "0 15px", height: "40px" }}
                  >
                    <a href="https://docs.google.com/document/d/1YDkw0mK-TM5QpMdBXl3OnuvqTlFUC4ky/edit?usp=sharing&ouid=104420958901390331204&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">RESUME</a>
                  </AwesomeButton>
                  <a
                    href="https://www.linkedin.com/in/rolandos-georgoulis-0ab003258/"
                    class="fa fa-linkedin"
                    target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '24px', color: '#fff', margin: "0 15px" }}
                  ></a>
                  <a href="https://github.com/RolandosG" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </Nav>
              </Container>
            </Navbar>
        </header>
      </div>
    </Wrapper>
  );
};

export default Header;
