import React from 'react'
import SignedInLinks from '../layout/SignedInLinks'
import SignedOutLinks from '../layout/SignedOutLinks'
import { connect } from 'react-redux'
import "./navbarlogin.css"
import Admin from './Admin'


const Navbar2 = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container"> 
      {profile.isAdmin === true && <Admin />}      
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar2)
