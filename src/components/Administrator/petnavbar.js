import React from "react";
import { Link } from 'react-router-dom';
import './petnavbar.css'
import ButtonsAdmin from './ButtonsAdmin';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const PetCrud = () => {
  return (

    <Container className='p-0 ' fluid={true}>
            <NavBar className='border-bottom' bg='light' expand='lg'>
            <div className="container bg-light d-flex justify-content-center">
            <h1 className='title1 bg-light'>¿Qué vas a hacer hoy?</h1>
            </div>
              <NavBar.Toggle className='border-0' aria-controls='navbar-toggle' />
              <NavBar.Collapse id='navbar-toggle'>
                <Nav className='ml-auto'>
                  {/* <Link className='nav-link' to='/Admin/Createpet'>{" "}
                    Crear{" "}
                  </Link> */}
                  <Link className='nav-link' to='/about'>
                  {" "}
                  Actualizar{" "}
                  </Link>              
              </Nav>
              </NavBar.Collapse>
            </NavBar>
            <ButtonsAdmin/>
    </Container>    
  );
};

export default PetCrud;