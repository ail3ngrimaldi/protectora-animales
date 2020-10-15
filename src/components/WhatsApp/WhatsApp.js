import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./estilos.css";

export const Whatsapp = () => {
    return (
        <Link
            exact
            activeClassName="active"
            to="https://wa.link/191pzy"
            className="nav-item nav-link">
            <button type="button" class="btn btn-primary">Whatsapp</button>

        </Link>
        //     <Link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        //         <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
        //             <i class="fa fa-whatsapp my-float"></i>
        //         </a>
        //     </Link>
    )
}

