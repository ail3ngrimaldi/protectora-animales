
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Nav2 from './Navbarlogin'
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const AppNav = (props) => {
  return (

    <Container className='p-0' fluid={true}>
      <NavBar className='border-bottom' bg='light' expand='lg'>
        <NavBar.Brand href="/">
          <img src="/img/Logo.png"
            width="201px"
            height="103px"
            alt=""
            loading="lazy"
          />
        </NavBar.Brand>

        <NavBar.Toggle className='border-0' aria-controls='navbar-toggle' />
        <NavBar.Collapse id='navbar-toggle'>
          <Nav className='ml-auto'>
            <Link className='nav-link' to='/AboutUs'>Historia</Link>
            <Link className='nav-link' to='/Volunteering'>Voluntariado</Link>
            <Link className='nav-link' to='/Gallery'>Mascotas</Link>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Donativos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  exact
                  activeClassName="active"
                  to="/MoneyBanner"
                  className="nav-item nav-link"
                >
                  {" "}
                Donaciones Monetario{" "}
                </NavLink>
                <NavLink
                  exact
                  activeClassName="active"
                  to="/SuppliesBanner"
                  className="nav-item nav-link"
                >
                  {" "}
                Donaciones Insumos{" "}
                </NavLink>
              </div>
            </li>
            <Link className='nav-link' to='/Admin'>Admin</Link>
          </Nav>
          <Nav2 />
        </NavBar.Collapse>
      </NavBar>
    </Container>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(AppNav)