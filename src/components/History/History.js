import React from "react";
import "../History/History.css";

export const History = () => {
  return (
    <div className="StylesHistory">
      <div className="view" id="Styles">
        <div className="mask rgba-gradient align-items-center">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <h1 className="mb-2 font-weight-bold mt-sm-5">
                  PROTECTORA DE ANIMALES DOMINGO FAUSTINO SARMIENTO{" "}
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4 text-justify">
                  La Protectora de Animales "Domingo Faustino Sarmiento” se
                  fundó en 1969 en nuestra ciudad, Rosario.
                  <br/>
                  • Nuestra protectora
                  rescata, cura y mantiene animales que quizás de otra manera no
                  habrían sobrevivido. Nos ocupamos de esterilizar y proveer
                  todas las vacunas necesarias dejando a los animales aptos para
                  su posterior adopción. 
                  <br/>
                  • Nuestra institución no recibe 
                  subsidio alguno de parte de autoridades gubernamentales,
                  sostenemos esta obra gracias a las cuotas de los socios y al
                  trabajo que aportamos hace años los voluntarios.
                </h6>
              </div>
              <div className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft">
              <img class="mb-4" src="https://scontent.fmdz5-1.fna.fbcdn.net/v/t1.0-9/84985666_2934435266609344_8840466609970610176_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=5cEbvo-tyT8AX-FQXoq&_nc_ht=scontent.fmdz5-1.fna&oh=4f8adb17ac81b1be40945c4399e6ad2f&oe=5FB3E968" alt="" width="500" height="500"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
