import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const link = {
    width: '100px',
    adding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}

return (
    <div className='navbar'>
      <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
      <NavLink to='/posters' exact style={link} activeStyle={{background: 'darkblue'}}>Posters</NavLink>
      <NavLink to='/patterns' exact style={link} activeStyle={{background: 'darkblue'}}>Patterns</NavLink>
      <NavLink to='/apparel' exact style={link} activeStyle={{background: 'darkblue'}}>Apparel</NavLink>
      <NavLink to='/packaging' exact style={link} activeStyle={{background: 'darkblue'}}>Packaging</NavLink>
      <NavLink to='/upload' exact style={link} activeStyle={{background: 'darkblue'}}>Upload</NavLink>
    </div>
  )
}
