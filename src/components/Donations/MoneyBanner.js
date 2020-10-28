import React from 'react'
import { NavLink } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Foto1 from "../Donations/imgD/Foto1.png";
import Foto2 from "../Donations/imgD/Foto2.png";
import Foto3 from "../Donations/imgD/Foto3.jpg";
import Foto4 from "../Donations/imgD/Foto4.jpg";
import Foto5 from "../Donations/imgD/Foto5.jpg";
import Foto6 from "../Donations/imgD/Foto6.png";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./Carrousel.css";
import { Container } from "reactstrap";
import "./MoneyBanner.css";
import Castracion from '../Donations/imgD/Castracion.jpg';
import MercadoPago from '../Donations/imgD/MercadoPago.jpg';
import Insumos from '../Donations/imgD/Insumos.jpg';


export const MoneyBanner = () => {
    return (
      <div class="MBannerContainer w-75 pt-5 pb-3 mx-auto ">
        <div className='center-block'>
          <div class="hovereffect">
              <img 
              class="img-responsive w-100" 
              src={Castracion} 
              alt=""
              />
              <div class="overlay">
                {/* <h2>Hover effect 1v2</h2> */}
                <a class="info" href="/MoneyDonations">Doná una castración</a>
              </div>
          </div>

          <div class="hovereffect mt-5 mb-5">
              <img 
              class="img-responsive w-100" 
              src={Insumos} 
              alt=""
              />
              <div class="overlay">
                {/* <h2>Hover effect 1v2</h2> */}
                <a class="info" href="/SuppliesDonations">Doná insumos </a>
              </div>
          </div>

          <div class="hovereffect">
              <img 
              class="img-responsive w-100" 
              src={MercadoPago} 
              alt=""
              />
              <div class="overlay">
                {/* <h2>Hover effect 1v2</h2> */}
                <a class="info" href="/MoneyDonations">Doná por Mercado Pago</a>
              </div>
          </div>
      </div>
      </div>

    )
}