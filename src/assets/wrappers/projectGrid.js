import styled from 'styled-components'
const Wrapper = styled.section`

@import url('https://fonts.googleapis.com/css?family=Oswald:400,700');

.grid-container {
  margin-right: 450px;
  margin-top: 40px;
  display: grid;
  gap: 10px 40px;
  grid-template-columns: auto auto auto;
  background-color: transparent;
  padding: -100px;
}

.grid-item {
  transition: box-shadow 3s;
  background-color: transparent;
  height: 320px;
  width: 320px;
  border-radius: 20px;
  padding: 10px;
  font-size: 30px;
  text-align: center;
  float: left;
  
}
.grid-item:hover{
  box-shadow: 0 0 19px rgba(33,33,33,.2); 
  
}

body {
  background: transparent;
  
}

.card {
  width: 250px; 
  background: transparent;
  border: none;
  
}

.card__content {
  text-align: center;
  position: relative;
  padding: 5em 5em;
  transition: transform 3s;
  transform-style: preserve-3d;
  
  
}
.card__content_title {
  text-align: center;
  position: relative;
  padding: 5em 5em;
  
  
  
}
.card:hover .card__content {
  transform: rotateY(.5turn);
 
}

.card__front {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5em 3em;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: grid;
  align-content: center;
  
  
}
.card__back {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 40px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: grid;
  align-content: center;
  
  
}

.card__front {
  background-color: #9f7db8;
  background-image: url();
  background-size: cover;
  background-blend-mode: overlay;
  color: #333;
  border-radius: 20px;
  
}

.card__front::before {
  content: '';
  position: absolute;
  --spacer: 2em;
  top: var(--spacer);
  bottom: var(--spacer);
  left: var(--spacer);
  right: var(--spacer);
  border: 3px solid currentColor;
  transform: translateZ(1rem);
  
  
}

.card__title {
  font-size: 1.5rem;
  transform: translateZ(3rem);
  order: 2;
  text-transform: uppercase;
  
}

.card__subtitle {
  transform: translateZ(2rem);;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: .75rem;
  font-weight: 700;
  opacity: .7;
}

.card__body {
  transform: translateZ(2rem);
  font-weight: var(fw-normal);
  font-size: 1rem;
  line-height: 1.6;
  color:black;
  
  text-align: center;
}



.card__back {
  transform: rotateY(.5turn);
  color: #9f7db8; background-color: #9f7db8;
  background-image: url(); 
  border-radius: 20px;

}

.avatar {
  font-size: 50px;
  margin-bottom: 200px;
  width: 250px;
    height: 80px;
    box-sizing: border-box;
    border: 5px transparent solid;
    border-radius: 5%;
    overflow: hidden;
    //box-shadow: 0 5px 10px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
    animation: float 12s ease-in-out infinite;
    img { width: 100%; height: auto; }
}
.name-avatar {
  position: absolute;
  margin-top: -475px;
  margin-left: 80px;
  width: 240px;
    //height: 50px;
    box-sizing: border-box;
    //border: 5px white solid;
    border-radius: 0%;
    overflow: hidden;
    //box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    img { width: 100%; height: auto; }
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
`

export default Wrapper