import React from "react";
import Wrapper from "../assets/wrappers/Dashboard";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {BsChevronDoubleDown} from 'react-icons/bs'
const Introduction = () => {
  return (
    <Wrapper>
      <div class="slideUp">
        <div
          clas="introduction"
          style={{ color: "#003d49", marginTop: "750px" }}
        >
          <h1 style={{ marginTop:"-250px",marginRight: "550px", fontSize: "4.2rem", textShadow: '2px 2px #056dbb', boxSizing: 'border-box'}}>
            Software developer &<br></br> programming analyst
          </h1>
        </div>
      </div>
      <div class="slideRight" style={{color: '#003d49'}}>
        Welcome to my portfolio!   <br />
        As a dedicated software and web development student based in Toronto, Canada, I have a keen eye for design and a passion for building exceptional websites. Please take a look at my work and discover how I can contribute to your team.
      </div>
      <div
        class="slideUp"
        style={{ animation: "slideUp ease 4.4s forwards 2.2s" }}
      >
        <div
          class="circle-container"
          style={{ marginLeft: "900px", marginTop: "-200px" }}
        >
          <div class="circle" style={{ animationDelay: "0s" }}>
            <div class="circle" style={{ animationDelay: "-1s" }}>
              <div class="circle" style={{ animationDelay: "-2s" }}>
                <div class="circle" style={{ animationDelay: "-3s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="slideUp"
        style={{ animation: "slideUp ease 4.4s forwards 2.2s" }}
      >
        <AwesomeButton
          type="secondary"
          style={{
            color: '039cda',
            width: "100px",
            height: "70px",
            marginLeft: "854px",
            marginTop: "-180px",
          }}
        ><a href="https://docs.google.com/document/d/1YDkw0mK-TM5QpMdBXl3OnuvqTlFUC4ky/edit?usp=sharing&ouid=104420958901390331204&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">RESUME</a>
        </AwesomeButton>
      </div>

      <div class="arrow"><BsChevronDoubleDown/></div>
    </Wrapper>
  );
};

export default Introduction;
