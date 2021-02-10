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
    padding-right: 5px; 
  `;

return (
    <NavContainer>
      <nav><NavLink to="/" exact activeStyle={{background: 'darkblue'}}>HOUSANDARTS</NavLink></nav>
      <nav><NavLink to='/posters' exact activeStyle={{background: 'darkblue'}}>Posters</NavLink></nav>
      <nav><NavLink to='/patterns' exact activeStyle={{background: 'darkblue'}}>Patterns</NavLink></nav>
      <nav><NavLink to='/apparel' exact activeStyle={{background: 'darkblue'}}>Apparel</NavLink></nav>
      <nav><NavLink to='/packaging' exact activeStyle={{background: 'darkblue'}}>Packaging</NavLink></nav>
      <nav><NavLink to='/upload' exact activeStyle={{background: 'darkblue'}}>Upload</NavLink></nav>
    </NavContainer>
  )
}
