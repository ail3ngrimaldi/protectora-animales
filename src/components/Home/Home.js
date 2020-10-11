import React from "react";
import { Carrousel } from "../Carrousel/Carrousel";
import { EventsHome } from "../Events/EventsHome";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import "./Home.css";

export const Home = () => {
  return (
    <div className="StyleHome">
      <Carrousel />
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <h1 className="h1-responsive font-weight-bold mt-sm-5">
                PROTECTORA DE ANIMALES DOMINGO FAUSTINO SARMIENTO{" "}
              </h1>
              <div className="col-md-12 d-flex justify-content-left mb-5">
                <Link to="/AboutUs">
                  <Button>¡Conocenos!</Button>
                </Link>
              </div>
            </div>
            <img
              className="StyleImg"
              src="/img/Gallery/Dogs/Dogo4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <EventsHome />
    </div>
  );
};
