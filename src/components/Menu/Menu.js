import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
import pdf from '../../static/files/resume.pdf'

const Menu = ({open}) => {
  return (
    <StyledMenu open={open} className=" transi">
        <ul>
			<li className="current"><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to={pdf} target='_blank' download>Resume</Link></li>
			<li><Link to="/project">Portfolio</Link></li>				
			<li><Link to="/contact">Contact</Link></li>					
		</ul>
    </StyledMenu>
  )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;
