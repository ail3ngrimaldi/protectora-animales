import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./SuppliesBanner.css"

export const SuppliesBanner = () => {
    return (
        <div>
            <div className="SBannerContainer">
                <img
                        class="Sbannerimg"
                        src="/img/Captura.PNG"
                        alt="Card cap"
                        
                ></img>
                <div className="SBannerCard">
                    <h4 class="card-title">Donativo Insumos</h4>
                    <h5 class="card-title">Informacion</h5>
                    <h5 class="card-title">Mensaje lindo</h5>
                    <h6 class="card-title">Agradecimientos</h6>
                 
                    <NavLink
                        exact
                        activeClassName="active"
                        to="/SuppliesDonations"
                        className="nav-item nav-link">
                        <button type="button" class="btn btn-primary">Dona aqui!</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
