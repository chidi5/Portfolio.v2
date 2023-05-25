import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledIntro } from './Intro.styled'


function Intro() {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/about')
  }

  return (
    <StyledIntro>
      <div className='intro-overlay'></div>
      <div className='intro-content'>
        <div className='row'>
          <h5>Hello, World.</h5>
          <h1>I'm Joshua Igbokwe</h1>
          <p>
            <span>| </span>
            Front-End Developer
            <span> | </span>
            Back-End Developer 
            <span> |</span>
          </p>
          <button onClick={routeChange}>More about me</button>
        </div>
      </div>
    </StyledIntro>
  )
}

export default Intro