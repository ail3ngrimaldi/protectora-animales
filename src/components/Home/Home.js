import React, { useState, useEffect } from "react";
import { Carrousel } from "../Carrousel/Carrousel"
import { Carrousel2 } from "../Carrousel/Carrousel2";
import { EventsHome } from "../Events/EventsHome";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css";

const Home = (props) => {
  const [values, setValues] = useState(false);

  useEffect(() => {
    setValues(props.bool)
  }, [props.bool])


  return (
    <div className="StyleHome">
      <div>
        <div >
          {!values ? <div>
            <section>
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">¡Atención!</h4>
                <p>El refugio Sarmiento es una ONG (Organización No Gubernamental).</p>
                <p>La protectora no recibe animales hoy en día porque estamos trabajando al límite de nuestra capacidad. Los animales que eventualmente ingresan son los que están en extrema emergencia, para  que el refugio no sea un lugar de depósito...</p>
                <hr></hr>

                <p className="mb-0">El principal objetivo consiste en cuidar y asistir en la adopción para entonces reubicar a nuestros animales..</p>
              </div>
            </section>
          </div> : null}
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
              <iframe
                width="683"
                height="384"
                src="https://www.youtube.com/embed/w-tu_Wpsz3U"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="title"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <Carrousel />
        </div>
      </div>
      <EventsHome />
    </div>
  );
};

export default Home;