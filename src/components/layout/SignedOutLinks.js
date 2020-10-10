import React from 'react'
import { NavLink } from 'react-router-dom'
import "../AppNav/navbarlogin.css"

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>Registrarse</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks