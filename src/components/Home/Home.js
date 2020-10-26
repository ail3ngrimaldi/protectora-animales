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

          <Carrousel2 />
          <div className="row">
            <div className="aboutus" data-wow-delay="0.3s">
              <div className="title container text-center h-100 bg-white d-flex justify-content-center align-items-center">
                <h1 className="h1-responsive font-weight-bold mt-sm-5 text-center">
                  PROTECTORA DE ANIMALES DOMINGO FAUSTINO SARMIENTO{" "}
                </h1>
                <div >
                  <Link to="/AboutUs">
                    <Button variant="outline-info" size="lg">
                    ¡Conocenos!
                    </Button>{' '}
                    {/* <Button className="aling-items">¡Conocenos!2</Button> */}
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
