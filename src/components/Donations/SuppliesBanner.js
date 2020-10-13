import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const SuppliesBanner = () => {
    return (
        <div>
            <NavLink
                exact
                activeClassName="active"
                to="/SuppliesDonations"
                className="nav-item nav-link"
            >
                {" "}
                Dona{" "}

            </NavLink>

        </div>
    )
}
