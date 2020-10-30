import React, { useState, useEffect } from "react";
import { Carrousel } from "../Carrousel/Carrousel"
import { Carrousel2 } from "../Carrousel/Carrousel2";
import Alert from "../Alert/AlertHome";
import { EventsHome } from "../Events/EventsHome";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css";

export const Home = (props) => {

  const initialStateValues = {
    booleano: true
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { booleano, value } = e.target;
    setValues({ ...values, [booleano]: value });
  };
  

  return (
    <div className="StyleHome">
      <div>
        <div >         
          {handleInputChange ? <Alert/> : null}
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
              <iframe width="683" height="384" src="https://www.youtube.com/embed/w-tu_Wpsz3U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>          
          <Carrousel />
        </div>
      </div>
      <EventsHome />
    </div>
  );
};
