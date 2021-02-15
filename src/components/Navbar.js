import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar() {
  const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 2vw;
  `;

  const Nav = styled(NavLink)`
    padding: 8px; 
    text-decoration: none;
    color: 'grey';
  `;

return (
    <NavContainer>
      <Nav activeStyle={{color: 'black'}} to="/" exact style={{color: 'black', fontSize: 40}}><p>HOUSANDARTS</p></Nav>
      <Nav to='/posters' exact activeStyle={{color: 'black'}} style={{color: 'gray'}}><p >Posters</p></Nav>
      <Nav to='/patterns' exact activeStyle={{color: 'black'}} style={{color: 'gray'}}><p>Patterns</p></Nav>
      <Nav to='/apparel' exact activeStyle={{color: 'black'}} style={{color: 'gray'}}><p>Apparel</p></Nav>
      <Nav to='/packaging' exact activeStyle={{color: 'black'}} style={{color: 'gray'}}><p>Packaging</p></Nav>
      {/* <Nav><NavLink to='/upload' exact activeStyle={{background: 'darkblue'}}>Upload</NavLink></Nav> */}
    </NavContainer>
  )
}
