import React from "react";
import Wrapper from "../assets/wrappers/Dashboard";
import Skills from "../assets/wrappers/skills";
import "react-awesome-button/dist/styles.css";
const AboutPage = () => {
  return (
    <Wrapper>
      <div>
        <div class="slideUp">
          <div
            clas="introduction"
            style={{ color: "#041121", marginTop: "550px" }}
          >
            <h1
              style={{
                marginRight: "850px",
                paddingRight: "50px",
                marginTop: "-200px",
                fontSize: "4.2rem",
                textDecoration: "underline",
                color: '#003d49'
              }}
            >
              About me
            </h1>
            <h1
              style={{
                //marginLeft: "-1260px",
                //marginTop: "-85px",
                transform: "rotate(-45deg)",
                fontSize: "19px",
              }}
            >
            <Skills style={{padding: '0px', height: '0px', marginTop: '-30px'}}><div class="name-avatar" style={{ marginTop: '0px', right: '850px', bottom: '450px', color: '#003d49'}}> 
            Hi, my names Rolandos!</div>
            </Skills>
            </h1>
          </div>
        </div>

        <div class="slideRight">
          <div
            style={{
              marginLeft: "-100px",
              paddingRight: "250px",
              marginTop: "0px",
              textDecoration: "underline",
              color: '#003d49'
            }}
          >
            Coming from a background in design, art, & technology, I love
            working on Software where I’m able to delve into creating enjoyable
            interactions and experiences for everyone.
          </div>
        </div>
        <div
          class="slideUp"
          style={{ animation: "slideUp ease 4.4s forwards 2.2s" }}
        ></div>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
