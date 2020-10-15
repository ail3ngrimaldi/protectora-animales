import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const Whatsapp = () => {
    return (
        <Link
            exact
            activeClassName="active"
            to="https://wa.link/191pzy"
            className="nav-item nav-link">
            <button type="button" class="btn btn-primary">Whatsapp</button>
        </Link>
    )
}

