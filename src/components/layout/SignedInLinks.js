import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../Redux/store/actions/authActions'
import "../AppNav/navbarlogin.css"
import SignOut from "../../UI/Routes/SignOut"

const SignedInLinks = (props) => {
  const name = props.profile.initials ? props.profile.initials : props.profile.displayName
  return (
    <div>
      {/* <ul className="right">
        {/* <li><NavLink to='/create'>Vacío</NavLink></li> */}
      {/* <li><a onClick={props.signOut}>Log Out</a></li> */}
      {/*<li><SignOut/></li>
        <li><NavLink to='/' className="btn btn-floating">
          {props.profile.initials}
        </NavLink></li>
      </ul> */}
      <button
        className="btn btn-secondary dropdown-toggle"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {name}
      </button>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Link className="dropdown-item" to="/MiPerfil">Ver mi Perfil</Link>
        <SignOut />

      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
