import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../assets/wrappers/Dashboard";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header">
      <div className="slideDown" style={{ color: "#F4F4F4", width: "100%" }}>
        <header id="header" style={{ color: "#F4F4F4" }}>
          <Navbar bg="dark" variant="dark" expand="lg" style={{ position: "relative" }}>
            <Container>
              <Navbar.Brand
                href="/"
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                }}
              >
                Rolandos Georgoulis
              </Navbar.Brand>
              <NavbarToggle aria-controls="basic-navbar-nav" />
              <NavbarCollapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/About">About</Nav.Link>
                </Nav>
                <Nav className="ms-auto align-items-center">
                  <div className="icons-container">
                    <a
                      href="https://www.linkedin.com/in/rolandos-georgoulis-0ab003258/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      style={{ fontSize: "24px", color: "#fff", margin: "0 15px" }}
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://github.com/RolandosG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      style={{ fontSize: "24px", color: "#fff", margin: "0 15px" }}
                    >
                      <FaGithub />
                    </a>
                  </div>
                </Nav>
              </NavbarCollapse>
            </Container>
          </Navbar>
        </header>
      </div>
    </div>
  );
};

export default Header;