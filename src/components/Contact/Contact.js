import React from 'react'
import { Link } from 'react-router-dom'
import { StyledContact } from './Contact.styled'

function Contact() {
  return (
    <StyledContact>
        <div className='cont'>
            <div>
                <h1>Let's make something great!</h1>
            </div>
            <div className='content flex justify-center items-start flex-col'>
                <h4>Contact</h4>
                <p>
                    Hey coding connoisseurs! Ready to level up your software game? Look no further! 
                    I'm your go-to software sorcerer, equipped with the skills to turn your digital dreams into a dazzling reality. 
                    Whether you're yearning for a bug-blasting adventure or craving cutting-edge innovation, 
                    I'm here to make tech magic happen.
                </p>
                <p>
                    So, if you're ready to embark on a journey of binary brilliance, 
                    let's connect and bring your ideas to life! Shoot me a message, 
                    and let's geek out over lines of code and mind-blowing algorithms. 
                    From web wizardry to app enchantment, I've got you covered. Together, 
                    we'll debug the world and leave a trail of awestruck users in our wake. 
                    Let's rock the digital realm and create software wonders that will make the tech universe sing! Can't wait to collaborate with you! 💻✨ 
                </p>
                <div className='links'>
                    <Link to='mailto:joshdash.ji@gmail.com' target='_blank' >hello@joshua.com</Link>
                    <Link to='https://github.com/chidi5/' target='_blank' >GitHub</Link>
                    <Link to='https://twitter.com/igbokwe_ji/' target='_blank' >Twitter</Link>
                    <Link to='https://www.linkedin.com/in/josh-igbokwe-5aba9b146/' target='_blank' >Linkedin</Link>
                </div>
            </div>
        </div>
    </StyledContact>
  )
}

export default Contact