import React from "react";
import { Link } from "react-router-dom";
// import $ from 'jquery';
// import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";

const Mascotas = ({ nombre, especie, img, id }) => {
  return (
    <div className="col-md-6 col-md-offset-6">
      
      <div className="container">
        <p>Nombre: {nombre}</p>
        <p>Especie: {especie}</p>
        <img src={img} width="500" height="500" alt="Card cap" />
        <Link to={`/Adoptions/Form/${id}`}>Adoptar</Link>
      </div>
    </div>
  );
};

export default Mascotas;
