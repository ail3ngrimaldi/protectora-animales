import React from "react";
import "./EventHome.css";

export const EventHome = () => {
  return (
    <div className="StylesEventHome">
      <div className="view" id="Styles">
        <div className="mask rgba-gradient align-items-center">
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-sm-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <h1 className="h1-responsive font-weight-bold mt-sm-5">
                  EVENTOS{" "}
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  La “Protectora de Animales Domingo Faustino Sarmiento” realiza
                  eventos para recaudar fondos.
                </h6>
                <p>
                  Tambien puedes ayudarnos: ♥ SER SOCIO ♥ VOLUNTARIADO ♥ HOGARES
                  DE TRÁNSITO ♥ RESCATE DE ANIMALES ♥ CONTROL DE LA POBLACIÓN
                  ANIMAL ♥ TRANSPORTE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row py-5">
          <div class="col-md-12 text-center">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
