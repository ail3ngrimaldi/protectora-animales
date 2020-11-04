import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "bootstrap/dist/css/bootstrap.min.css";
import "./MoneyBanner.css";
import Castracion from '../Donations/imgD/Castracion.jpg';
import MercadoPago from '../Donations/imgD/MercadoPago.jpg';
import Insumos from '../Donations/imgD/Insumos.jpg';


const MoneyBanner = () => {
  return (
    <div className="MBannerContainer w-75 pt-5 pb-3 mx-auto ">
      <div className='center-block'>
        <div className="hovereffect">
          <img
            className="img-responsive w-100"
            src={Castracion}
            alt=""
          />
          <div className="overlay">
            {/* <h2>Hover effect 1v2</h2> */}
            <a className="info" href="/MoneyDonations">Doná una castración</a>
          </div>
        </div>

        <div className="hovereffect mt-5 mb-5">
          <img
            className="img-responsive w-100"
            src={Insumos}
            alt=""
          />
          <div className="overlay">
            <a className="info" href="/SuppliesDonations">Doná insumos </a>
          </div>
        </div>

        <div className="hovereffect">
          <img
            className="img-responsive w-100"
            src={MercadoPago}
            alt=""
          />
          <div className="overlay">
            <a className="info" href="/MoneyDonations">Doná por Mercado Pago</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MoneyBanner