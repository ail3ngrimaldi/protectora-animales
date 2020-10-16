import React from "react";
import { NavLink } from 'react-router-dom';
import './petnavbar.css'

const PetCrud = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className='title1'>CRUD PET</h1>
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
    </div>
  );
};

export default PetCrud;