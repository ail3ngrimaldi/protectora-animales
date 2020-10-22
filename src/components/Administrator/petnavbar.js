import React from "react";
import { NavLink } from 'react-router-dom';
import './petnavbar.css'
import ButtonsAdmin from './ButtonsAdmin';

const PetCrud = () => {
  return (
    <div className='divPrincipal'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className='title1 bg-light'>¿Qué vas a hacer hoy?</h1>
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
                to="/Admin/Createpet"
                className="nav-item nav-link"
              >
                {" "}
                Crear{" "}
              </NavLink>
            </li>
            {/* <li class="nav-item">
              <NavLink
                exact
                activeClassName="active"
                to="/Admin/ReadPet"
                className="nav-item nav-link"
              >
                {" "}
                Leer{" "}
              </NavLink>
            </li> */}
            <li class="nav-item">
              <NavLink
                exact
                activeClassName="active"
                to="/npmtest"
                className="nav-item nav-link"
              >
                {" "}
                Actualizar{" "}
              </NavLink>
            </li>
            {/* <li class="nav-item">
              <NavLink
                exact
                activeClassName="active"
                to="/Admin/DeletePet"
                className="nav-item nav-link"
              >
                {" "}
                Borrar{" "}
              </NavLink>
            </li> */}
          </ul>
          <br />
        </div>
      </nav>
      <br />
      <ButtonsAdmin/>
    </div>
  );
};

export default PetCrud;