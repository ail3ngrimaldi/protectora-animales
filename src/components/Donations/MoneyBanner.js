import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./MoneyBanner.css"

export const MoneyBanner = () => {
    return (
        <div>
            <div className="MBannerContainer">
                <img
                        class="Mbannerimg"
                        src="img/55853786_620357515076511_739317193384132608_n.jpg"
                        alt="Card cap"
                        
                ></img>
                <div className="MBannerCard">
                    <h4 class="card-title">Donativo monetario</h4>
                    <h5 class="card-title">Informacion</h5>
                    <h5 class="card-title">Mensaje lindo</h5>
                    <h6 class="card-title">Agradecimientos</h6>
                 
                    <NavLink
                        exact
                        activeClassName="active"
                        to="/MoneyDonations"
                        className="nav-item nav-link">
                        <button type="button" class="btn btn-primary">Dona aqui!</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}