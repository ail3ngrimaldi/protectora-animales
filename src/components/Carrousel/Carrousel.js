import React from "react";
import { NavLink } from 'react-router-dom';
import Foto1 from "../Carrousel/img/Foto1.jpg";
import Foto2 from "../Carrousel/img/Foto2.jpg";
import Foto3 from "../Carrousel/img/Foto3.png";
import Foto4 from "../Carrousel/img/Foto4.jpg";
import Foto5 from "../Carrousel/img/Foto5.png";
import Foto6 from "../Carrousel/img/Foto6.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrousel.css";

export const Carrousel = () => {
  return (
    <div className="carru">

      <div className="texto">
        <h1>¡Conocenos!</h1>
          <p>Quieres conocerme a mi y a mis amigos?</p>
          <p>Entra aca y mira nuestra gran galeria y si te animas</p>
          <p>¡Adoptanos!</p>
          <p>Estamos llenos de amor para dar</p>

        <NavLink
          exact
          activeClassName="active"
          to="/Gallery"
          className="nav-item nav-link">
          <button type="button" class="btn btn-info">Conoce más</button>
        </NavLink>
      </div>


      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={Foto1} alt="First slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Foto2} alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Foto3} alt="Third slide"></img>
          </div>
          <div class="carousel-item ">
            <img class="d-block w-100" src={Foto4} alt="First slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Foto5} alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Foto6} alt="Third slide"></img>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Siguiente</span>
        </a>
      </div>
    </div>
  );
};