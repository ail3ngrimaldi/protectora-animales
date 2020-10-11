import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../Redux/store/actions/authActions'
import "../AppNav/navbarlogin.css"
import SignOut from "../../UI/Routes/SignOut"

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        {/* <li><NavLink to='/create'>Vacío</NavLink></li> */}
        {/* <li><a onClick={props.signOut}>Log Out</a></li> */}
        <li><SignOut/></li>
        <li><NavLink to='/' className="btn btn-floating">
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
