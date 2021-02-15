import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar() {
  const link = {
    width: '100px',
    adding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;

  // TODO: put spacing between each item
  const Nav = styled.nav`
    padding: 5px; 
    textDecoration: none;
  `;

return (
    <NavContainer>
      <Nav><NavLink to="/" exact>HOUSANDARTS</NavLink></Nav>
      <Nav><NavLink to='/posters' exact activeStyle={{background: 'darkblue'}}>Posters</NavLink></Nav>
      <Nav><NavLink to='/patterns' exact activeStyle={{background: 'darkblue'}}>Patterns</NavLink></Nav>
      <Nav><NavLink to='/apparel' exact activeStyle={{background: 'darkblue'}}>Apparel</NavLink></Nav>
      <Nav><NavLink to='/packaging' exact activeStyle={{background: 'darkblue'}}>Packaging</NavLink></Nav>
      {/* <Nav><NavLink to='/upload' exact activeStyle={{background: 'darkblue'}}>Upload</NavLink></Nav> */}
    </NavContainer>
  )
}
