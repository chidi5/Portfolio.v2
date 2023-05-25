import React from 'react'
import Burger from './Burger/Burger'
import { StyledHeader } from './Header.styled'
import Menu from './Menu/Menu'

function Header({open, setOpen}) {
  return (
    <StyledHeader>
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen} />
    </StyledHeader>
  )
}

export default Header