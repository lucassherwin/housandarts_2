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
      <NavLink to='/upload' exact style={link} activeStyle={{background: 'darkblue'}}>Upload</NavLink>
    </div>
  )
}
