import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
.skills-heading {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-decoration: underline;
  color: #003d49;
  padding-top: 20px;
  padding-bottom: 25px;
}
.avatar {
  margin-top: 20px;
  width: 100%;
  max-width: 1850px;
  height: auto;
  border: 5px solid white;
  border-radius: 25%;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
}
.skill {
  position: relative;
  cursor: pointer;
  text-align: center;
  /* Additional styling as needed */
}
.rows {
  padding: 0px;
}
.skills-intro {
  font-size: 20px;
  padding-top: 5px;
}
.skill-icon {
  transition: transform 0.3s ease;
  /* Additional styling as needed */
  padding: 5px;
}

.skill-detail {
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100%;
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  /* Adjustments for the appearance of the tooltip */
}

.skill:hover .skill-icon {
  transform: scale(1.1); /* Icon grows slightly */
}

.skill:hover .skill-detail {
  display: block; /* Detail appears */
}
.skills {
width: 100%;

}
`

export default Wrapper