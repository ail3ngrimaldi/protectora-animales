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


export const MoneyBanner = () => {
    return (

      <div>
        <a href="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}>
        <img 
        src={Castracion}
        alt='castracion'
        className='w-75 pt-5 pb-3 mx-auto d-block'
        />
        </a>
        <a href="/MoneyDonations">
        <img 
        src={MercadoPago}
        alt='mercadoPago'
        className='w-75 pt-3 mx-auto d-block'
        />
        </a>
        
      </div>
    )
}