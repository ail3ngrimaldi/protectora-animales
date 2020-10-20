import React from "react";
import Container from "react-bootstrap/Container";
import Foto1 from "../404/image.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Container id="noexiste">
      <div className="text-center">
      <img src={Foto1}  alt="..." />
      </div>
      <Link to={"/"}>
      <div class="col-md-12 text-center mt-5">
        <button type="button" class="btn btn-danger btn-lg">Volver al Inicio</button>
      </div>
      </Link>
      <div className="d-flex justify-content-center text-center mt-4">
        <h1 className="center">
          Ups!!! <strong className="text-danger">404 Error...</strong><br />
          Vuelve al inicio, por favor.
        </h1><br />
      </div>
    </Container>
  );
};
export default NotFound;