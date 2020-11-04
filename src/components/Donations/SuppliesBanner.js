import React from 'react'
// import { NavLink } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Foto1 from "../Donations/imgD2/Foto1.jpg";
// import Foto2 from "../Donations/imgD2/Foto2.jpg";
// import Foto3 from "../Donations/imgD2/Foto3.jpg";
// import Foto4 from "../Donations/imgD2/Foto4.jpg";
// import Foto5 from "../Donations/imgD2/Foto5.jpg";
// import Foto6 from "../Donations/imgD2/Foto6.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "reactstrap";
import "./SuppliesBanner.css"
import Insumos from '../Donations/imgD/Insumos.jpg'

export const SuppliesBanner = () => {
  return (

    <div>
      <a href="/SuppliesDonations">
        <img
          src={Insumos}
          alt='insumos'
          className='w-75 pt-5 pb-3 mx-auto d-block'
        />
      </a>

    </div>
  )
}

export default SuppliesBanner;