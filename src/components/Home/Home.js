import React from "react";
import { Carrousel } from "../Carrousel/Carrousel"
import { Carrousel2 } from "../Carrousel/Carrousel2";
import { EventsHome } from "../Events/EventsHome";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css";

export const Home = () => {
  return (
    <div className="StyleHome">
      <div>
        <div >
        <container>
          <div class="alert alert-success" role="alert">
              <h4 class="alert-heading">¡Atención!</h4>
              <p>El refugio Sarmiento es una ONG (Organización No Gubernamental).</p>
              <p>La protectora no recibe animales hoy en día porque estamos trabajando al límite de nuestra capacidad. Los animales que eventualmente ingresan son los que están en extrema emergencia, para  que el refugio no sea un lugar de depósito...</p>
              <hr></hr>
              <p class="mb-0">El principal objetivo consiste en cuidar y asistir en la adopción para entonces reubicar a nuestros animales..</p>     
          </div> 
          </container>
          <Carrousel2 />
          <div className="row">
            <div className="aboutus" data-wow-delay="0.3s">
              <div className="title container text-center h-100 bg-white d-flex justify-content-center align-items-center">
                <h1 className="h1-responsive font-weight-bold mt-sm-5 text-center">
                  PROTECTORA DE ANIMALES DOMINGO FAUSTINO SARMIENTO{" "}
                </h1>
                <div >
                  <Link to="/AboutUs">
                  <Button variant="info" size="lg">
                    ¡Conocenos!
                    </Button>{' '}
                  </Link>
                </div>
              </div>
              <img className="StyleImg"
                src="/img/Gallery/Dogs/Dogo4.jpg"
                alt=""
              />
            </div>
          </div>          
          <Carrousel />
        </div>
      </div>
      <EventsHome />
    </div>
  );
};
