import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Nav2 from './Navbarlogin'
import { connect } from 'react-redux'

const AppNav = (props) => {
  const { auth, profile } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src="/img/Logo.png"
            width="201px"
            height="103px"
            alt=""
            loading="lazy"
          />{" "}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                to="/AboutUs"
                className="nav-item nav-link"
              >
                {" "}
                Historia{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                to="/Store"
                className="nav-item nav-link"
              >
                {" "}
                Tienda{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                to="/Volunteering"
                className="nav-item nav-link"
              >
                {" "}
                Voluntariado{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                to="/Gallery"
                className="nav-item nav-link"
              >
                {" "}
                Mascotas{" "}
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Donativos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  exact
                  activeClassName="active"
                  to="/MoneyBanner"
                  className="nav-item nav-link"
                >
                  {" "}
                Donaciones Monetario{" "}
                </NavLink>
                <NavLink
                  exact
                  activeClassName="active"
                  to="/SuppliesBanner"
                  className="nav-item nav-link"
                >
                  {" "}
                Donaciones Insumos{" "}
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
            {profile.isAdmin === true &&  <NavLink
                exact
                activeClassName="active"
                to="/Admin"
                className="nav-item nav-link"
              >
                {" "}
                Admin{" "}
              </NavLink> }               
            </li>
            {/* Nav de login */}

            <Nav2 />
          </ul>
          <br />
        </div>
      </nav>
      <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(AppNav)
