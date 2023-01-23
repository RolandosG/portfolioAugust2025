import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
const Wrapper = styled.main`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

* {
  //margin: 0;
  padding: 0;
  //width: 100%;
  height: auto;
  overflow: visible;
}

#wrapper{
    width: 100%;
    //height: auto;
    overflow: visible;
    }
// Name sliding down
  .slide-effect {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-text: center;
  }
  
  .text, .slideDown, .slideRight {
    position: relative;
    font-family: "Open Sans", sans-serif;
    //font-family: tahoma;
    font-color: white;
    font-size: 18px;
    opacity:0;
    width: 500px;
    
  }
  .slideUp
  {
    position: relative;
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Open-sans"></link>

    font-family: "Open Sans", sans-serif;
    font-size: 30px;
    opacity:0;
  }
  .slideUpCarousel
  {
    position: relative;
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Open-sans"></link>

    font-family: "Open Sans", sans-serif;
    font-size: 30px;
    opacity:0;
  }
  .text {
    top:40px;
    font-weight: bold;
    animation: slideUp ease .4s forwards;
  }
  
  .slideDown {
    top: -40px;
    margin-left: 0px;
    margin-right: 200px;
    animation: slideDown ease 1.4s forwards .6s;
    padding-bottom: 30px;
  }
  
  .slideUp {
    top: -150px;
    //left:10px;
    animation: slideUp ease 1.4s forwards 1.2s;
  }
  .slideRight {
    top:-140px;
    //left:10px;
    animation: slideRight ease 2.4s forwards 2.2s;
  }
  .slideUpCarousel
  {
    top:40px;
    //left:10px;
    animation: slideUp ease 1.8s forwards 1.8s;
  }
  
  @keyframes slideUp {
    0% {transform: translateY(0);}
    100% {transform: translateY(-40px);opacity:1;}
  }
  @keyframes slideRight {
    0% {transform: translateX(0);}
    100% {transform: translateX(40px);opacity:1;}
  }
  
  @keyframes slideDown {
    0% {transform: translateY(0);}
    100% {transform: translateY(40px);opacity:1;}
  }
  @keyframes slideUpCarousel {
    0% {transform: translateY(0);}
    100% {transform: translateY(40px);opacity:1;}
  }
  @media only screen and (max-width: 100px) {
    .slide-effect, .text, .slideDown, .slideUp {
      font-size: 15px;
    }
  }
  


  //////////////////// HEADER //////////////////////


  @import url('https://fonts.googleapis.com/css?family=Parisienne|Quicksand&display=swap');
  
.header {
    
    //position: relative;
    top: 50px;
	height: 100%;
	margin: 0;
    background: #rgb(2,0,36);
  background:  #0B2647;
}

.lead { font-family: 'Quicksand'; }

.slider-menu {
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	list-style-type: none;
	margin: 0;
	padding: 0;
	z-index: 1;
    font-size: 25px;
}
.slider-menu > li {
	display: inline-flex;
	padding: 14px;
	//margin-left: 2px;
	font-family: 'Quicksand', sans-serif;
	color: #black;
    //color: #fff;
	cursor: pointer;
	transition: 0.3s linear all;
	user-select: none;
}
.slider-menu > li:hover {
	color: white;
	box-shadow: 0 50px 5px rgba(0, 0, 0, 0.15) inset;
}
.aeu-signature {
	position: fixed;
	top: 5px;
	//left: 50%;
	transform: translate(-50%);
	font-size: 15px;
	line-height: 30px;
	background-color: #fff;
	padding: 5px 10px;
	border-radius: 25px;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
.aeu-signature { font-family: "Quicksand"; }
.aeu-signature > img { height: 30px; }
  
////////////// BODY ///////////////////////

body {
    font-family: "Open Sans", sans-serif;
    //margin-left: -15px;
    //margin-right: -15px;
    margin-top: -206px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    text-align: center;
    font-size: 25px;
    //position: relative;
    top: 100px;
    //background-color:  #4203;
    //background: rgb(2,0,36);
    //background: #F4F4F4;
    background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(244,244,244,1) 100%);
    padding-top: 4em;
    padding-bottom: 0em;
}
introduction {
    
}

@media screen and (max-width: 979px) {
    div.corousel-inner {        
        border: 0;
    }
}   
@media screen and (max-width: 979px) {
    div.corousel-inner.my-inner {       
        border-top: 10px;
        border-left: 10px;
        border-right: 10px;
        border-bottom: 00px;
        border-color: #fff;
        border-style: solid;
    }
}   
.card-deck {
    
    margin-bottom : 400px;
    margin-left: 315px;
    font-size : 14px;
}




///////// drop down
/* Style The Dropdown Button */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

.main-sticky{
  position:-webkit-sticky; 
  position:sticky; top:0;
}

#header {
  /In This Line- CSS for Box Shadow/
  position:fixed;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  }

//// header icons ///////////
.fa {
  padding: 20px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  text-decoration: none;
}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
}
.slideDown:hover {
  opacity: 0.7;
}
/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  background: #rgb(2,0,36);
  color: white;
}

/* Twitter */
.fa-twitter {
  background: #rgb(2,0,36);
  color: white;
}
.fa-linkedin {
  background: #rgb(2,0,36);
  color: white;
}
.fa-instagram {
  background: #rgb(2,0,36);
  color: white;
}
.bg {
  background: #rgb(2,0,36);
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%
}




// scroll snap //

/* All the snapping stuff */
.scroll-container {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}

section {
    height: 100vh;
    scroll-snap-align: center;
}

/* Other styles */
section {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;


  //background: rgb(168,148,61);
  //background: linear-gradient(180deg, rgba(168,148,61,1) 0%, rgba(11,38,71,1) 100%);
  background: linear-gradient(88deg,#020024,#090979,#056dbb);
  background-size: 240% 240%;
  animation: section-animation 24s ease infinite;
  

}
@keyframes section-animation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
}
section:nth-child(2n) {
 
  //background: rgb(4,17,33);
  //background: linear-gradient(0deg, rgba(4,17,33,1) 0%, rgba(168,148,61,1) 100%);
   
}

section:nth-child(3n) {
  //background: rgb(11,38,71);
  //background: linear-gradient(0deg, rgba(11,38,71,1) 0%, rgba(244,244,244,1) 97%, rgba(34,36,41,1) 100%);
  
 }
.title {
  font-color: #F4F4F4;
  color: #F4F4F4;
  position: flex;
  font-size: 60px;
  margin-top: -260px;
  float: left;
  margin-left: -250px;
}


/**
 * ----------------------------------------
 * animation focus-in-contract
 * ----------------------------------------
 */
@keyframes focus-in-contract {
  0% {
    letter-spacing: 1em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}
// circle animation //

#circle-container {
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: static;
  
}
.circle {
  border-radius: 10%;
  background-color: deepskyblue;
  width: 190px;
  height: 123px;
  position: static;
  opacity: 0;
  animation: scaleIn 4s infinite cubic-bezier(.36, .11, .39, .32);
}
@keyframes scaleIn {
  from {
    transform: scale(.5, .5);
    opacity: .5;
  }
  to {
    transform: scale(1.5, 1.5);
    opacity: 0;
  }
}


.arrow{
  position: static;
  height: 0px;
  margin-top: 70px;
  margin-bottom: 00px;
  overflow: hidden;
	transform: translatey(0px);
	animation: float 2s ease-in-out infinite;
	img { width: 100%; height: auto; }
  
}
@keyframes float {
  0% {
    //box-shadow: 0 0px 5px 0px rgba(0,0,0,0.0);
    //transform: translatey(0px);
  }
  50% {
    //box-shadow: 0 0px 5px 0px rgba(0,0,0,0.0);
    //transform: translatey(-0px);
  }
  100% {
    //box-shadow: 0 0px 5px 0px rgba(0,0,0,0.0);
    //transform: translatey(0px);
  }
}


`
export default Wrapper
