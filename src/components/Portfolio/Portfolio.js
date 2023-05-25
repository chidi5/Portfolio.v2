import React from 'react'
import { Link } from 'react-router-dom'
import { StyledPorfolio } from './Portfolio.styled'

function Portfolio() {
  return (
    <StyledPorfolio>
        <div className='cont'>
            <Link to="https://cloud-zone.netlify.app/" target="_blank">
                <div className='content'>
                    <h2>Weather App</h2>
                    <p>React app to check weather in any location</p>
                </div>
            </Link>

            <Link to="https://jamrel.netlify.app/" target="_blank">
                <div className='content'>
                    <h2>21 Bespoke</h2>
                    <p>An Ecommerce app built on React/Django </p>
                </div>
            </Link>

            <Link to="https://jamlie-admin.netlify.app/" target="_blank">
                <div className='content'>
                    <h2>Admin Dashboard</h2>
                    <p>Admin dashboard built on react</p>
                </div>
            </Link>

            <Link to="https://jamlie.netlify.app/" target="_blank">
                <div className='content last'>
                    <h2>Jamly Sign up Page</h2>
                    <p>Sign up page built on react (incomplete)</p>
                </div>
            </Link>
        </div>
    </StyledPorfolio>
  )
}

export default Portfolio