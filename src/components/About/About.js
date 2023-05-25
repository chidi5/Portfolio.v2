import React from 'react'
import { Link } from 'react-router-dom'
import { StyledAbout } from './About.styled'
import pdf from '../../static/files/resume.pdf'

function About() {
  return (
    <StyledAbout>
        <div className='cont'>
            <div>
                <h1>I design & build digital products</h1>
            </div>
            <div className='content flex justify-center items-start flex-col'>
                <h4>About</h4>
                <p className='size-large'>Hello! I'm Josh, a highly motivated and dedicated software engineer with a passion for leveraging technology to create innovative solutions.</p>
                <p>
                    My journey in the world of technology began during my time at Kwame Nkrumah University of Science & Technology, 
                    where I obtained a BSc. degree in Computer Engineering. Throughout my academic journey, 
                    I gained a solid understanding of software engineering principles, including software development, 
                    object-oriented programming, and secure network systems.
                </p>
                <p>
                    One of my proudest achievements is founding and owning Purple Mercury, 
                    a food and beverage company that is driven by the mission to provide clean and safe drinking water to local communities. 
                </p>
                <p>
                    When I'm not diving into lines of code or solving complex problems, 
                    you can find me on the football pitch, 
                    channeling my competitive spirit and love for the beautiful game. Whether it's playing with friends or cheering for my favorite team, football fuels my energy and keeps me on my toes.
                </p>
                <p>
                    Education, football, and music are not just hobbies for me; 
                    they are my sources of inspiration and personal growth. 
                    I believe in the power of combining different passions to bring a fresh perspective to any project. 
                    So, if you're looking for someone with a zest for life and a diverse set of skills, you've come to the right place!
                </p>
                <p>Let's connect and embark on exciting journeys together.</p>
                <div className='links'>
                    <Link to={pdf} target='_blank' download>My resume (465 KB)</Link>
                </div>
            </div>
        </div>
    </StyledAbout>
  )
}

export default About