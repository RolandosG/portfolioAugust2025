import styled from 'styled-components'
const Wrapper = styled.section`

@import url('https://fonts.googleapis.com/css?family=Oswald:400,700');
.container {
  margin-top: 250px;
  margin-left: 250px;
}
.links {
  top: 45px;
  position: fixed;
  width: 1250px;
  //height: 400px;
}
.title {
  position: static;
  margin-left: 0px !important;
  margin-top: 0px !important;
  display: inline;
  font-size: 24px;
  color: black;
  text-decoration: underline;
  
}
.desc {
  top: 42px;
  margin-left: -.5px !important;
  
  
  
  
  display: flex;
  font-size: 14px;
  color: black;
}
.slides {
    
    margin-top: 00px;
    margin-left: 00px;
      width: 750px;
      height: 100px;
      box-sizing: border-box;
      //border: 5px white solid;
      border-radius: 0%;
      overflow: hidden;
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
      transform: translatey(0px);
      animation: float 6s ease-in-out 2s;
      img { width: 100%; height: auto; }
      position: relative;

      padding-top: 10px;
}
.slideRight {
  top:100px;
  //left:10px;
  animation: slideRight ease 2.4s forwards 2.2s;
  padding-top: 10px;
}
@keyframes slideRight {
  0% {transform: translateX(0);}
  100% {transform: translateX(40px);opacity:1;}
}
ul {
  margin-right: 00px;
  list-style-type: none;
  overflow: hidden;
  padding: 0;
  display: inline;
}

li {
  margin-right: 0.7rem;
  margin-bottom: 10px;
  background: 'linear-gradient(88deg,#cee7a2,#1b3af5,#9dc85f,#a82e72)';
  backgroundSize: '240% 240%';
  animation: 'section-animation 24s ease infinite';
  //padding: 0.2rem 1rem;
  padding-bottom: 10px;
  //border-radius: 0.3rem;
  color: white;
  width: 100%;
  
}

@keyframes fadeIn {
  0%{
    opacity: 0
  }
  
  100% {
    opacity: 1
  }
}
.grid-container {
  margin-right: 450px;
  margin-top: 40px;
  display: grid;
  gap: 10px 40px;
  grid-template-columns: repeat(2, 1fr);
  //background-color: transparent;
  padding: -100px;
}



body {
  background: 'linear-gradient(88deg,#009bba,#8ce6f6,#46ddfb,#e9f1f0)';
  backgroundSize: '240% 240%';
  animation: 'section-animation 24s ease infinite';
  
}




@keyframes float {
    0% {
        //box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
        transform: translatey(0px);
    }
    50% {
        //box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
        transform: translatey(-20px);
    }
    100% {
        //box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
        transform: translatey(0px);
    }
}
.zoom {
  
  transition: transform 4s; /* Animation */
  width: 40px;
  height: 100px;
}
.zoom:hover {
  transform: scale(1.05); 
}


`

export default Wrapper