
import React from "react";
import { Link } from 'react-router-dom';
import Nav2 from './Navbarlogin'
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const AppNav = (props) => {
  const { profile } = props;


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
            <Link className='nav-link' to='/Gallery'>Tienda</Link>
            <Link className='nav-link' to='MoneyBanner'>Donaciones</Link>
            {profile.isAdmin === true &&
              <Link className='nav-link' to='/Admin'>Administrador</Link>}
          </Nav>
          <Nav2 />
        </NavBar.Collapse>
      </NavBar>
    </Container>
  );
};


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(AppNav)