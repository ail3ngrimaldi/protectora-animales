import React from "react";
import "../History/History.css";

// const img = (
//   <img
//     class="img-fluid"
//     alt="Responsive image"
//     src="https://lh3.googleusercontent.com/proxy/HeiMx-yOr5veEpN-og207UcYWWyKA1dMUeGHuTHp9YsnRQPC4dIChmPCV3AkY8RLggrV_T63IshMFLUQ6uq6ytzJVHKFI-Q7-rxBaTxb2fCfcbtDrWkoRLJP0op-PPUQSgRwG4Ye_oJr0CJUUoaKZCfOTfu6MRSRVbU"
//     alt="perrito"
//   />
// );

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
                <h1 className="h1-responsive font-weight-bold mt-sm-5">
                  PROTECTORA DE ANIMALES DOMINGO FAUSTINO SARMIENTO{" "}
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4 text-justify">
                  La “Protectora de Animales Domingo Faustino Sarmiento” se
                  fundó en 1969 en nuestra ciudad, Rosario • Nuestra protectora
                  rescata, cura y mantiene animales que quizás de otra manera no
                  habrían sobrevivido. Nos ocupamos de esterilizar y proveer
                  todas las vacunas necesarias dejando a los animales aptos para
                  su posterior adopción. • Nuestra Institución no recibe
                  subsidio alguno de parte de autoridades gubernamentales,
                  sostenemos esta obra gracias a las cuotas de los socios y al
                  trabajo que aportamos hace años los voluntariose.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row py-5">
          <div class="col-md-12 text-center">
            {/* <p>
              DIFUNDIR!! Es muy útil que nos ayudes difundiendo mensajes de
              nuestra página web y nuestros animales en internet, mandándonos
              artículos interesantes o fotos, anunciando nuestros animales en
              adopción en las clínicas veterinarias y sobre todo comentando a
              tus amigos, compañeros de trabajo y amigos que antes de comprar un
              animal de compañía pueden adoptarlo.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
