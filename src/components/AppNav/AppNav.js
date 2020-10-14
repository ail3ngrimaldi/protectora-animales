import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Nav2 from './Navbarlogin'
import { connect } from 'react-redux'

const AppNav = (props) => {
  const { auth, profile } = props;
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src="/img/Logo1.png"
            width="60"
            height="40"
            alt=""
            loading="lazy"
          />{" "}
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
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
            <li class="nav-item">
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
            <li class="nav-item">
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
            <li class="nav-item">
              <NavLink
                exact
                activeClassName="active"
                to="/Gallery"
                className="nav-item nav-link"
              >
                {" "}
                Galeria{" "}
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Donativos
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
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
            <li class="nav-item">
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
