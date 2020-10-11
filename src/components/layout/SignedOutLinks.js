import React from 'react'
import { NavLink } from 'react-router-dom'
import "../AppNav/navbarlogin.css"

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/crearusuario'>Registrarse</NavLink></li>
        <li><NavLink to='/entrar'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks