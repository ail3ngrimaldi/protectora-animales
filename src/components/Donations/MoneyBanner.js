import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const MoneyBanner = () => {
    return (
        <div>
            <NavLink
                exact
                activeClassName="active"
                to="/MoneyDonations"
                className="nav-item nav-link"
            >
                {" "}
                Dona{" "}

            </NavLink>

        </div>
    )
}