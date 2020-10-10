import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Nav2 from './Navbarlogin'

const AppNav = () => {
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
            <li class="nav-item">
              <NavLink
                exact
                activeClassName="active"
                to="/Donations"
                className="nav-item nav-link"
              >
                {" "}
                Donaciones{" "}
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                exact
                activeClassName="active"
                to="/Admin"
                className="nav-item nav-link"
              >
                {" "}
                Admin{" "}
              </NavLink>             
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

export default AppNav;